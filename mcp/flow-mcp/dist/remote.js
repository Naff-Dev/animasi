import { readFileSync } from "node:fs";
import { PORT, TOKEN_FILE } from "./server.js";
// Used when another flow-mcp process (Studio or a second Claude client) already owns the Flow tab and queue.
async function call(method, args) {
    const res = await fetch(`http://127.0.0.1:${PORT}/api/${method}`, {
        method: "POST",
        headers: { "content-type": "application/json", "x-flow-token": readFileSync(TOKEN_FILE, "utf8").trim() },
        body: JSON.stringify(args ?? {}),
    });
    const data = (await res.json());
    if (!res.ok)
        throw new Error(data.error ?? `flow-mcp owner process answered ${res.status}`);
    return data;
}
export class RemoteCore {
    status = (a) => call("status", a);
    generate = (a) => call("generate", a);
    cancel = (a) => call("cancel", a);
    retry = (a) => call("retry", a);
    assets = (a) => call("assets", a);
    download = (a) => call("download", a);
    assemble = (a) => call("assemble", a);
    techniques = (a) => call("techniques", a);
    voices = () => call("voices", {});
    narrate = (a) => call("narrate", a);
    character = (a) => call("character", a);
    characters = () => call("characters", {});
    character_edit = (a) => call("character_edit", a);
    edit = (a) => call("edit", a);
    trash = (a) => call("trash", a);
    discard = (a) => call("discard", a);
    set_key = (a) => call("set_key", a);
    continue_shot = (a) => call("continue_shot", a);
    agent = (a) => call("agent", a);
    outputs = () => call("outputs", {});
    transcribe = (a) => call("transcribe", a);
    caption_preview = (a) => call("caption_preview", a);
    captions = (a) => call("captions", a);
    caption_setup = () => call("caption_setup", {});
    // Long waits are split up so no single HTTP request outlives fetch's header timeout.
    async wait(a) {
        const deadline = Date.now() + a.timeout_seconds * 1000;
        for (;;) {
            const left = Math.ceil((deadline - Date.now()) / 1000);
            const out = (await call("wait", { ...a, timeout_seconds: Math.max(5, Math.min(120, left)) }));
            if (out.finished || left <= 120)
                return out;
        }
    }
}
