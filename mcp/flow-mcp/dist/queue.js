import { randomUUID } from "node:crypto";
// Flow is driven like a careful person would: one generation at a time, with a
// randomised pause between them.
const PAUSE_MIN_MS = Number(process.env.FLOW_MCP_PAUSE_MIN_S ?? 25) * 1000;
const PAUSE_MAX_MS = Number(process.env.FLOW_MCP_PAUSE_MAX_S ?? 70) * 1000;
export class JobQueue {
    runner;
    jobs = new Map();
    working = false;
    lastFinished = 0;
    pausedReason = null;
    constructor(runner) {
        this.runner = runner;
    }
    add(params) {
        const job = {
            id: randomUUID().slice(0, 8),
            status: "queued",
            params,
            files: [],
            attempts: 0,
            createdAt: new Date().toISOString(),
        };
        this.jobs.set(job.id, job);
        void this.work();
        return job;
    }
    get busy() {
        return this.list().some((j) => j.status === "running");
    }
    get(id) {
        return this.jobs.get(id);
    }
    list() {
        return [...this.jobs.values()];
    }
    // Puts a failed or cancelled job back in line with the same settings and file name.
    retry(id) {
        const job = this.jobs.get(id);
        if (job && (job.status === "failed" || job.status === "cancelled")) {
            job.status = "queued";
            job.error = undefined;
            job.finishedAt = undefined;
            void this.work();
        }
        return job;
    }
    cancel(id) {
        const job = this.jobs.get(id);
        if (job && job.status === "queued") {
            job.status = "cancelled";
            job.finishedAt = new Date().toISOString();
        }
        return job;
    }
    async work() {
        if (this.working)
            return;
        this.working = true;
        try {
            for (;;) {
                const job = this.list().find((j) => j.status === "queued");
                if (!job)
                    return;
                if (this.lastFinished) {
                    const pause = PAUSE_MIN_MS + Math.random() * (PAUSE_MAX_MS - PAUSE_MIN_MS);
                    const remaining = this.lastFinished + pause - Date.now();
                    if (remaining > 0) {
                        this.pausedReason = `pacing: next generation in ${Math.ceil(remaining / 1000)}s`;
                        await new Promise((r) => setTimeout(r, remaining));
                        this.pausedReason = null;
                    }
                }
                if (job.status !== "queued")
                    continue;
                job.status = "running";
                job.attempts++;
                try {
                    job.files = await this.runner(job);
                    job.status = "done";
                    job.error = undefined;
                }
                catch (err) {
                    job.error = err instanceof Error ? err.message : String(err);
                    // Failed tiles are already retried inside Flow (its own Retry button); only an agent that produced nothing
                    // is re-queued here. Timeouts are never retried automatically: they may still have spent credits.
                    const retryable = /agent finished without creating/i.test(job.error);
                    job.status = retryable && job.attempts <= (job.params.retries ?? 1) ? "queued" : "failed";
                }
                job.finishedAt = new Date().toISOString();
                this.lastFinished = Date.now();
            }
        }
        finally {
            this.working = false;
        }
    }
}
