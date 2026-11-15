import { spawn, type ChildProcess } from "node:child_process";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import readline from "node:readline";

const require = createRequire(import.meta.url);
const ROOT = process.cwd();
const CLI_ARGS = new Set(process.argv.slice(2));
const NO_OPEN = CLI_ARGS.has("--no-open") || process.env.NO_OPEN === "1";

const SOCIAL_PORT = Number(process.env.SOCIAL_PORT || 4174);
const STUDIO_PORT = Number(process.env.STUDIO_PORT || 3000);
const SOCIAL_URL = `http://127.0.0.1:${SOCIAL_PORT}/`;
const STUDIO_URL = `http://localhost:${STUDIO_PORT}/`;

const tsxCliPath = require.resolve("tsx/cli");
const remotionPkgDir = dirname(require.resolve("@remotion/cli/package.json"));
const remotionCliPath = resolve(remotionPkgDir, "remotion-cli.js");
const buildSocialPath = resolve(ROOT, "scripts/build-social.mjs");

function prefixOutput(stream: NodeJS.ReadableStream | null, tag: string, isErr = false): void {
  if (!stream) return;
  const rl = readline.createInterface({ input: stream });
  rl.on("line", (line) => {
    const out = `[${tag}] ${line}\n`;
    if (isErr) {
      process.stderr.write(out);
    } else {
      process.stdout.write(out);
    }
  });
}

function runSyncBuildSocial(): Promise<void> {
  return new Promise((resolvePromise, rejectPromise) => {
    const builder = spawn(process.execPath, [buildSocialPath], {
      cwd: ROOT,
      stdio: ["ignore", "pipe", "pipe"],
      env: process.env,
    });
    prefixOutput(builder.stdout, "BUILD:SOSMED");
    prefixOutput(builder.stderr, "BUILD:SOSMED", true);
    builder.on("exit", (code) => {
      if (code === 0) {
        resolvePromise();
      } else {
        rejectPromise(new Error(`build-social failed with exit code ${code ?? "unknown"}`));
      }
    });
  });
}

function openBrowserUrl(url: string): void {
  if (NO_OPEN) return;
  if (process.platform === "win32") {
    spawn("cmd.exe", ["/c", "start", "", url], {
      detached: true,
      stdio: "ignore",
      windowsHide: true,
    }).unref();
    return;
  }
  const opener = process.platform === "darwin" ? "open" : "xdg-open";
  spawn(opener, [url], { detached: true, stdio: "ignore" }).unref();
}

async function waitForHttpReady(url: string, timeoutMs = 15_000): Promise<boolean> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(1200) });
      if (res.ok) return true;
    } catch {
      // retry until timeout
    }
    await new Promise((r) => setTimeout(r, 350));
  }
  return false;
}

function terminateChildTree(child: ChildProcess | null): void {
  if (!child || child.killed || child.pid === undefined) return;
  if (process.platform === "win32") {
    spawn("taskkill", ["/pid", String(child.pid), "/T", "/F"], {
      stdio: "ignore",
      windowsHide: true,
    });
    return;
  }
  child.kill("SIGTERM");
}

async function main(): Promise<void> {
  process.stdout.write("Membangun bundle UI Social Publisher sebelum menjalankan Studio + Sosmed...\n");
  await runSyncBuildSocial();

  const socialProc = spawn(process.execPath, [tsxCliPath, "scripts/social-server.ts"], {
    cwd: ROOT,
    stdio: ["ignore", "pipe", "pipe"],
    env: {
      ...process.env,
      SOCIAL_PORT: String(SOCIAL_PORT),
    },
  });
  prefixOutput(socialProc.stdout, "SOSMED");
  prefixOutput(socialProc.stderr, "SOSMED", true);

  const studioArgs = [remotionCliPath, "studio", "--port", String(STUDIO_PORT)];
  if (NO_OPEN) {
    studioArgs.push("--no-open");
  }
  const studioProc = spawn(process.execPath, studioArgs, {
    cwd: ROOT,
    stdio: ["ignore", "pipe", "pipe"],
    env: process.env,
  });
  prefixOutput(studioProc.stdout, "STUDIO");
  prefixOutput(studioProc.stderr, "STUDIO", true);

  process.stdout.write(
    `\nMenjalankan 2 layanan sekaligus:\n  1. Remotion Studio (Biasa): ${STUDIO_URL}\n  2. Halaman Posting Sosmed: ${SOCIAL_URL}\n\n`,
  );

  void waitForHttpReady(`${SOCIAL_URL}api/health`).then((ready) => {
    if (ready) {
      openBrowserUrl(SOCIAL_URL);
    }
  });

  let shuttingDown = false;
  const shutdown = (signal: string) => {
    if (shuttingDown) return;
    shuttingDown = true;
    process.stdout.write(`\nMenerima ${signal}, menghentikan Studio & Sosmed...\n`);
    terminateChildTree(socialProc);
    terminateChildTree(studioProc);
    setTimeout(() => process.exit(0), 600).unref();
  };

  process.on("SIGINT", () => shutdown("SIGINT"));
  process.on("SIGTERM", () => shutdown("SIGTERM"));

  const onChildExit = (name: string, code: number | null) => {
    if (shuttingDown) return;
    shuttingDown = true;
    process.stderr.write(`[${name}] berhenti lebih awal (exit=${code ?? "null"}). Menghentikan layanan lain...\n`);
    terminateChildTree(socialProc);
    terminateChildTree(studioProc);
    setTimeout(() => process.exit(code ?? 1), 300).unref();
  };

  socialProc.on("exit", (code) => onChildExit("SOSMED", code));
  studioProc.on("exit", (code) => onChildExit("STUDIO", code));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

