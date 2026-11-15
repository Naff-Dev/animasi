import {
  createReadStream,
  existsSync,
  readFileSync,
  realpathSync,
  statSync,
} from "node:fs";
import { createServer, type IncomingMessage, type ServerResponse } from "node:http";
import { randomUUID } from "node:crypto";
import { extname, resolve, sep } from "node:path";
import { ALL_EPISODES, buildEpisodeSocialCaption } from "../src/data/episodes";
import { BRAND_PROFILE, getEpisodeRenderTotalFrames } from "../src/utils/brand";
import type {
  ActivityLogEntry,
  ActivityLogLevel,
  ActivityLogStage,
  CreatePostPayload,
  CreatePostTargetInput,
  EpisodePublishItem,
  TebarMedia,
  UploadProgressSnapshot,
} from "../src/social/types";

const WORKSPACE_ROOT = resolve(process.cwd());
const SOCIAL_PUBLIC_ROOT = resolve(WORKSPACE_ROOT, "public/social-poster");
const CHARACTER_PREVIEW_ROOT = resolve(
  WORKSPACE_ROOT,
  "public/character/it-support-specialist/previews",
);
const OUT_ROOT = resolve(WORKSPACE_ROOT, "out");
const TEBAR_API_BASE = "https://api.tebar.app/v1";
const MAX_JSON_BODY_BYTES = 128 * 1024;
const MAX_MEDIA_SINGLE_BYTES = 100 * 1024 * 1024; // Tebar direct upload body limit
const MAX_MEDIA_CHUNKED_BYTES = 300 * 1024 * 1024; // Tebar chunked upload limit
const CHUNK_THRESHOLD_BYTES = 2 * 1024 * 1024;
const MAX_LOG_HISTORY = 250;
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const IDEMPOTENCY_REGEX = /^[A-Za-z0-9_-]{1,128}$/;

function loadEnvFromDisk(): void {
  for (const envName of [".env.local", ".env"]) {
    const envPath = resolve(WORKSPACE_ROOT, envName);
    if (!existsSync(envPath)) {
      continue;
    }
    const raw = readFileSync(envPath, "utf8");
    for (const rawLine of raw.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line || line.startsWith("#")) {
        continue;
      }
      const eqIdx = line.indexOf("=");
      if (eqIdx <= 0) {
        continue;
      }
      const key = line.slice(0, eqIdx).trim();
      let val = line.slice(eqIdx + 1).trim();
      if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1);
      }
      if (!process.env[key]) {
        process.env[key] = val;
      }
    }
  }
}

loadEnvFromDisk();

const PORT = Number(process.env.SOCIAL_PORT || 4174);
const TEBAR_API_KEY = (process.env.TEBAR_API_KEY || "").trim();

function maskApiKey(key: string): string | null {
  if (!key) return null;
  if (key.length <= 12) return "configured";
  return `${key.slice(0, 10)}...${key.slice(-4)}`;
}

function redactSecret(text: string): string {
  let out = text;
  if (TEBAR_API_KEY) {
    out = out.split(TEBAR_API_KEY).join("[REDACTED_KEY]");
  }
  return out.replace(/\btb_(?:live|test)_[A-Za-z0-9_-]{6,}\b/g, "[REDACTED_KEY]");
}

function formatBytesShort(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  let val = bytes;
  let idx = 0;
  while (val >= 1024 && idx < units.length - 1) {
    val /= 1024;
    idx++;
  }
  return `${val.toFixed(idx === 0 ? 0 : 1)} ${units[idx]}`;
}

const logHistory: ActivityLogEntry[] = [];
let latestUploadProgress: UploadProgressSnapshot | null = null;
const sseClients = new Set<ServerResponse>();

function broadcastSseEvent(event: string, data: unknown): void {
  const frame = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
  for (const client of sseClients) {
    try {
      client.write(frame);
    } catch {
      sseClients.delete(client);
    }
  }
}

function pushLog(
  level: ActivityLogLevel,
  stage: ActivityLogStage,
  message: string,
  detail?: string,
  jobId?: string,
): ActivityLogEntry {
  const entry: ActivityLogEntry = {
    id: randomUUID(),
    ts: new Date().toISOString(),
    level,
    stage,
    message: redactSecret(message),
    ...(detail ? { detail: redactSecret(detail) } : {}),
    ...(jobId ? { jobId } : {}),
  };
  logHistory.push(entry);
  if (logHistory.length > MAX_LOG_HISTORY) {
    logHistory.splice(0, logHistory.length - MAX_LOG_HISTORY);
  }
  const line = `[${entry.ts.slice(11, 19)}] [${entry.stage.toUpperCase()}] [${entry.level.toUpperCase()}] ${entry.message}${entry.detail ? ` | ${entry.detail}` : ""}`;
  if (level === "error") {
    console.error(line);
  } else {
    console.log(line);
  }
  broadcastSseEvent("log", entry);
  return entry;
}

function emitUploadProgress(
  partial: Omit<UploadProgressSnapshot, "updatedAt">,
): UploadProgressSnapshot {
  const snapshot: UploadProgressSnapshot = {
    ...partial,
    statusText: redactSecret(partial.statusText),
    ...(partial.error ? { error: redactSecret(partial.error) } : {}),
    updatedAt: new Date().toISOString(),
  };
  latestUploadProgress = snapshot;
  broadcastSseEvent("upload_progress", snapshot);
  return snapshot;
}

function setSecurityHeaders(res: ServerResponse, isHtml = false): void {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  res.setHeader(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "media-src 'self' blob: https:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
    ].join("; "),
  );
  if (isHtml) {
    res.setHeader("Cache-Control", "no-store");
  }
}

function sendJson(res: ServerResponse, statusCode: number, data: unknown): void {
  setSecurityHeaders(res);
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(data));
}

function sendError(
  res: ServerResponse,
  statusCode: number,
  code: string,
  message: string,
): void {
  sendJson(res, statusCode, { error: { code, message } });
}

function resolveInsideRoot(rootDir: string, relativePath: string): string | null {
  if (!existsSync(rootDir)) {
    return null;
  }
  const cleanRel = relativePath.replace(/^[\\/]+/, "");
  if (!cleanRel || cleanRel.includes("\0")) {
    return null;
  }
  const candidate = resolve(rootDir, cleanRel);
  if (!existsSync(candidate)) {
    return null;
  }
  const realRoot = realpathSync(rootDir);
  const realTarget = realpathSync(candidate);
  if (!realTarget.startsWith(realRoot + sep) && realTarget !== realRoot) {
    return null;
  }
  return realTarget;
}

function buildEpisodeItems(): EpisodePublishItem[] {
  return ALL_EPISODES.map((ep) => {
    const socialCaption = buildEpisodeSocialCaption(ep);
    const relFromOut = socialCaption.videoFile.replace(/^out[\\/]/, "");
    const realVideoPath = resolveInsideRoot(OUT_ROOT, relFromOut);
    let videoExists = false;
    let videoSizeBytes = 0;

    if (realVideoPath && statSync(realVideoPath).isFile()) {
      videoExists = true;
      videoSizeBytes = statSync(realVideoPath).size;
    }

    const totalFrames = getEpisodeRenderTotalFrames(
      ep.scenes,
      ep.transitionFrames,
      BRAND_PROFILE.targetFps,
    );
    const durationSec = Number((totalFrames / BRAND_PROFILE.targetFps).toFixed(2));

    return {
      id: ep.id,
      episodeNumber: ep.episodeNumber,
      title: ep.title,
      topic: ep.topic,
      seriesName: ep.seriesName,
      durationSec,
      totalFrames,
      meetsMinDuration: durationSec >= BRAND_PROFILE.minEpisodeDurationSec,
      minDurationTargetSec: BRAND_PROFILE.minEpisodeDurationSec,
      videoFile: socialCaption.videoFile,
      videoExists,
      videoSizeBytes,
      videoPreviewUrl: videoExists
        ? `/api/media/local-video?file=${encodeURIComponent(relFromOut)}`
        : null,
      socialCaption,
    };
  });
}

async function readRequestBuffer(
  req: IncomingMessage,
  maxBytes: number,
): Promise<Buffer> {
  const chunks: Buffer[] = [];
  let total = 0;
  for await (const chunk of req) {
    const buf = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    total += buf.length;
    if (total > maxBytes) {
      throw new Error("PAYLOAD_TOO_LARGE");
    }
    chunks.push(buf);
  }
  return Buffer.concat(chunks);
}

function parseCreatePostPayload(raw: unknown): CreatePostPayload {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    throw new Error("Body JSON post tidak valid.");
  }
  const obj = raw as Record<string, unknown>;
  const content = typeof obj.content === "string" ? obj.content.trim() : "";

  if (!content && (!Array.isArray(obj.media_ids) || obj.media_ids.length === 0)) {
    throw new Error("Caption atau minimal satu media wajib diisi.");
  }
  if (content.length > 5000) {
    throw new Error("Panjang caption melebihi batas maksimum 5000 karakter Tebar API.");
  }

  let media_ids: string[] | undefined;
  if (obj.media_ids !== undefined) {
    if (!Array.isArray(obj.media_ids) || obj.media_ids.length > 20) {
      throw new Error("Daftar media_ids maksimal 20 item.");
    }
    media_ids = obj.media_ids.map((id) => {
      if (typeof id !== "string" || !UUID_REGEX.test(id)) {
        throw new Error("Format media_id harus UUID valid.");
      }
      return id;
    });
  }

  let scheduled_at: string | undefined;
  if (typeof obj.scheduled_at === "string" && obj.scheduled_at.trim()) {
    const parsedDate = Date.parse(obj.scheduled_at);
    if (Number.isNaN(parsedDate)) {
      throw new Error("Format waktu jadwal (scheduled_at) tidak valid.");
    }
    if (parsedDate < Date.now() - 60_000) {
      throw new Error("Waktu jadwal tidak boleh berada di masa lalu.");
    }
    scheduled_at = new Date(parsedDate).toISOString();
  }

  if (!Array.isArray(obj.targets) || obj.targets.length === 0 || obj.targets.length > 10) {
    throw new Error("Pilih 1 sampai 10 akun tujuan sebelum memposting.");
  }

  const targets: CreatePostTargetInput[] = obj.targets.map((item) => {
    if (!item || typeof item !== "object" || Array.isArray(item)) {
      throw new Error("Setiap target akun harus berbentuk objek valid.");
    }
    const t = item as Record<string, unknown>;
    if (typeof t.account_id !== "string" || !UUID_REGEX.test(t.account_id)) {
      throw new Error("account_id harus berbentuk UUID valid.");
    }
    const outTarget: CreatePostTargetInput = { account_id: t.account_id };
    if (typeof t.content === "string" && t.content.trim()) {
      if (t.content.trim().length > 5000) {
        throw new Error("Caption per akun maksimal 5000 karakter.");
      }
      outTarget.content = t.content.trim();
    }
    if (Array.isArray(t.media_ids)) {
      outTarget.media_ids = t.media_ids.map((id) => {
        if (typeof id !== "string" || !UUID_REGEX.test(id)) {
          throw new Error("Target media_id harus UUID valid.");
        }
        return id;
      });
    }
    if (t.options && typeof t.options === "object" && !Array.isArray(t.options)) {
      const opt = t.options as Record<string, unknown>;
      const sanitizedOpt: Record<string, unknown> = {};
      for (const key of [
        "format",
        "share_to_feed",
        "first_comment",
        "topic_tag",
        "reply_control",
        "title",
        "made_for_kids",
        "privacy",
        "tags",
        "category_id",
        "contains_synthetic_media",
        "notify_subscribers",
        "cover_media_id",
        "video_as",
        "link",
      ]) {
        const val = opt[key];
        if (val === undefined || val === null || val === "") {
          continue;
        }
        if (key === "tags") {
          if (Array.isArray(val)) {
            const cleanTags = val
              .filter((v): v is string => typeof v === "string")
              .map((v) => v.trim())
              .filter(Boolean)
              .slice(0, 15);
            if (cleanTags.length > 0) {
              sanitizedOpt.tags = cleanTags;
            }
          }
          continue;
        }
        if (key === "title" && typeof val === "string") {
          const cleanTitle = val.trim().slice(0, 100);
          if (cleanTitle) {
            sanitizedOpt.title = cleanTitle;
          }
          continue;
        }
        if (key === "category_id" && typeof val === "string") {
          const cleanCat = val.trim();
          if (/^\d{1,3}$/.test(cleanCat)) {
            sanitizedOpt.category_id = cleanCat;
          }
          continue;
        }
        if (key === "cover_media_id" && typeof val === "string") {
          if (UUID_REGEX.test(val.trim())) {
            sanitizedOpt.cover_media_id = val.trim();
          }
          continue;
        }
        sanitizedOpt[key] = val;
      }
      if (Object.keys(sanitizedOpt).length > 0) {
        outTarget.options = sanitizedOpt as CreatePostTargetInput["options"];
      }
    }
    return outTarget;
  });

  return {
    content,
    ...(media_ids && media_ids.length > 0 ? { media_ids } : {}),
    ...(scheduled_at ? { scheduled_at } : {}),
    targets,
  };
}

interface ChunkedInitResponse {
  id: string;
  part_size: number;
  part_count: number;
  status: string;
}

function describeFetchError(err: unknown, timeoutMs: number): string {
  if (!(err instanceof Error)) {
    return String(err);
  }
  if (err.name === "AbortError") {
    return `Timeout setelah ${Math.round(timeoutMs / 1000)} detik.`;
  }
  const cause = (err as Error & { cause?: { code?: string; message?: string } }).cause;
  const causePart = cause
    ? ` (${[cause.code, cause.message].filter(Boolean).join(": ")})`
    : "";
  return `${err.message}${causePart}`;
}

function extractApiErrorDetail(body: unknown): string | null {
  if (!body || typeof body !== "object") return null;
  const errObj = (body as { error?: { code?: string; message?: string } }).error;
  if (errObj) {
    return [errObj.code, errObj.message].filter(Boolean).join(" - ") || null;
  }
  const raw = (body as { raw?: string }).raw;
  return typeof raw === "string" && raw.trim() ? raw.trim() : null;
}

async function callTebarApi(
  path: string,
  init: RequestInit & { timeoutMs?: number } = {},
): Promise<{ status: number; body: unknown; elapsedMs: number }> {
  if (!TEBAR_API_KEY) {
    return {
      status: 500,
      elapsedMs: 0,
      body: {
        error: {
          code: "api_key_missing",
          message: "TEBAR_API_KEY belum disetel di file .env server.",
        },
      },
    };
  }

  const timeoutMs = init.timeoutMs ?? 25_000;
  const startedAt = Date.now();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const headers = new Headers(init.headers);
    headers.set("Authorization", `Bearer ${TEBAR_API_KEY}`);

    const upstream = await fetch(`${TEBAR_API_BASE}${path}`, {
      ...init,
      headers,
      signal: controller.signal,
    });
    const text = await upstream.text();
    let parsed: unknown = null;
    try {
      parsed = text ? JSON.parse(text) : null;
    } catch {
      parsed = { raw: text.slice(0, 400) };
    }
    return {
      status: upstream.status,
      body: parsed,
      elapsedMs: Date.now() - startedAt,
    };
  } catch (err) {
    const detail = describeFetchError(err, timeoutMs);
    const isTimeout = err instanceof Error && err.name === "AbortError";
    return {
      status: 502,
      elapsedMs: Date.now() - startedAt,
      body: {
        error: {
          code: isTimeout ? "upstream_timeout" : "upstream_unreachable",
          message: isTimeout
            ? `Koneksi ke Tebar API timeout (${detail}).`
            : `Gagal menghubungi server Tebar API: ${detail}`,
        },
      },
    };
  } finally {
    clearTimeout(timeout);
  }
}

type SupportedChunkMime =
  | "image/jpeg"
  | "image/png"
  | "video/mp4"
  | "video/quicktime";

function detectMediaMime(bytes: Buffer, fileName: string): string {
  if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    return "image/jpeg";
  }
  if (
    bytes.length >= 4 &&
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47
  ) {
    return "image/png";
  }
  if (
    bytes.length >= 12 &&
    bytes.subarray(0, 4).toString("ascii") === "RIFF" &&
    bytes.subarray(8, 12).toString("ascii") === "WEBP"
  ) {
    return "image/webp";
  }
  if (bytes.length >= 12 && bytes.subarray(4, 8).toString("ascii") === "ftyp") {
    const brand = bytes.subarray(8, 12).toString("ascii");
    return brand === "qt  " ? "video/quicktime" : "video/mp4";
  }
  const ext = extname(fileName).toLowerCase();
  if (ext === ".mov") return "video/quicktime";
  if (ext === ".mp4") return "video/mp4";
  if (ext === ".png") return "image/png";
  if (ext === ".jpg" || ext === ".jpeg") return "image/jpeg";
  if (ext === ".webp") return "image/webp";
  return "application/octet-stream";
}

function isChunkedMimeSupported(mime: string): mime is SupportedChunkMime {
  return (
    mime === "video/mp4" ||
    mime === "video/quicktime" ||
    mime === "image/jpeg" ||
    mime === "image/png"
  );
}

async function waitUntilMediaReady(
  media: TebarMedia,
  jobId: string,
  fileName: string,
  totalBytes: number,
): Promise<TebarMedia> {
  if (media.status === "ready") {
    emitUploadProgress({
      jobId,
      fileName,
      totalBytes,
      uploadedBytes: totalBytes,
      percent: 100,
      phase: "ready",
      statusText: "Media siap dilampirkan (ready).",
    });
    return media;
  }
  if (media.status === "failed" || media.status === "expired") {
    return media;
  }

  for (let attempt = 1; attempt <= 20; attempt++) {
    emitUploadProgress({
      jobId,
      fileName,
      totalBytes,
      uploadedBytes: totalBytes,
      percent: Math.min(99, 92 + Math.floor((attempt / 20) * 7)),
      phase: "verifying",
      statusText: `Memeriksa pemrosesan media di Tebar (${attempt}/20)...`,
    });
    pushLog(
      "info",
      "upload",
      `Menunggu pemrosesan video di server Tebar (cek #${attempt}/20, status=pending)...`,
      `media_id=${media.id}`,
      jobId,
    );
    await new Promise((r) => setTimeout(r, 2000));
    const check = await callTebarApi(`/media/${encodeURIComponent(media.id)}`, {
      timeoutMs: 12_000,
    });
    if (check.status === 200 && check.body && typeof check.body === "object") {
      const latest = check.body as TebarMedia;
      if (latest.status === "ready") {
        pushLog(
          "success",
          "upload",
          `Media terverifikasi READY di Tebar (${latest.width ?? "?"}x${latest.height ?? "?"}, ${latest.duration_ms ? `${(latest.duration_ms / 1000).toFixed(1)}s` : latest.mime_type}).`,
          `media_id=${latest.id}`,
          jobId,
        );
        emitUploadProgress({
          jobId,
          fileName,
          totalBytes,
          uploadedBytes: totalBytes,
          percent: 100,
          phase: "ready",
          statusText: "Media terverifikasi ready.",
        });
        return latest;
      }
      if (latest.status === "failed" || latest.status === "expired") {
        pushLog(
          "error",
          "upload",
          `Pemrosesan media gagal di server Tebar (status=${latest.status}).`,
          `media_id=${latest.id}`,
          jobId,
        );
        return latest;
      }
    } else if (check.status >= 400) {
      pushLog(
        "warn",
        "upload",
        `Cek status media #${attempt} HTTP ${check.status} (${check.elapsedMs}ms).`,
        extractApiErrorDetail(check.body) ?? undefined,
        jobId,
      );
    }
  }
  pushLog(
    "warn",
    "upload",
    "Timeout menunggu status 'ready' setelah 40 detik; mengembalikan status terakhir dari Tebar.",
    `media_id=${media.id}, status=${media.status}`,
    jobId,
  );
  return media;
}

async function uploadPartWithRetry(
  mediaId: string,
  partNumber: number,
  chunk: Uint8Array,
  partTotal: number,
  jobId: string,
): Promise<{ ok: boolean; status: number; body: unknown; elapsedMs: number }> {
  let lastRes: { status: number; body: unknown; elapsedMs: number } = {
    status: 500,
    body: null,
    elapsedMs: 0,
  };
  for (let attempt = 1; attempt <= 2; attempt++) {
    lastRes = await callTebarApi(
      `/media/${encodeURIComponent(mediaId)}/parts/${partNumber}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/octet-stream" },
        body: chunk as BodyInit,
        timeoutMs: 90_000,
      },
    );
    if (lastRes.status >= 200 && lastRes.status < 300) {
      return { ok: true, ...lastRes };
    }
    const detail = extractApiErrorDetail(lastRes.body);
    if (attempt < 2 && (lastRes.status >= 500 || lastRes.status === 429)) {
      pushLog(
        "warn",
        "upload",
        `Part ${partNumber}/${partTotal} HTTP ${lastRes.status}, mengulang percobaan #${attempt + 1}...`,
        detail ?? undefined,
        jobId,
      );
      await new Promise((r) => setTimeout(r, 1200));
      continue;
    }
    break;
  }
  return { ok: false, ...lastRes };
}

async function uploadMediaBufferToTebar(
  bytes: Buffer,
  fileName: string,
  jobId: string,
): Promise<{ status: number; body: unknown }> {
  const totalBytes = bytes.length;
  const mimeType = detectMediaMime(bytes, fileName);

  pushLog(
    "info",
    "upload",
    `Memulai upload "${fileName}" (${formatBytesShort(totalBytes)}, ${mimeType}) ke Tebar...`,
    `jobId=${jobId}`,
    jobId,
  );

  if (!isChunkedMimeSupported(mimeType) || totalBytes < CHUNK_THRESHOLD_BYTES) {
    emitUploadProgress({
      jobId,
      fileName,
      totalBytes,
      uploadedBytes: 0,
      percent: 15,
      phase: "uploading_single",
      statusText: `Mengirim langsung ${formatBytesShort(totalBytes)} ke Tebar...`,
    });
    pushLog(
      "info",
      "upload",
      `Menggunakan single-shot upload (POST /v1/media/upload) untuk file ${formatBytesShort(totalBytes)}.`,
      undefined,
      jobId,
    );
    const single = await callTebarApi(
      `/media/upload?keep=false&name=${encodeURIComponent(fileName)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/octet-stream" },
        body: new Uint8Array(bytes),
        timeoutMs: 300_000,
      },
    );
    if (single.status >= 200 && single.status < 300 && single.body) {
      pushLog(
        "success",
        "upload",
        `Upload selesai dalam ${(single.elapsedMs / 1000).toFixed(1)} detik (HTTP ${single.status}).`,
        undefined,
        jobId,
      );
      const ready = await waitUntilMediaReady(
        single.body as TebarMedia,
        jobId,
        fileName,
        totalBytes,
      );
      return { status: single.status, body: ready };
    }
    const errMsg = extractApiErrorDetail(single.body) ?? `HTTP ${single.status}`;
    pushLog("error", "upload", `Single-shot upload gagal: ${errMsg}`, undefined, jobId);
    emitUploadProgress({
      jobId,
      fileName,
      totalBytes,
      uploadedBytes: 0,
      percent: 0,
      phase: "error",
      statusText: "Upload gagal.",
      error: errMsg,
    });
    return { status: single.status, body: single.body };
  }

  // Chunked upload for reliable progress & large 60s+ video files
  emitUploadProgress({
    jobId,
    fileName,
    totalBytes,
    uploadedBytes: 0,
    percent: 4,
    phase: "init",
    statusText: "Membuka sesi chunked upload di Tebar...",
  });

  const initRes = await callTebarApi("/media/uploads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      mime_type: mimeType,
      size_bytes: totalBytes,
      keep: false,
      original_name: fileName,
    }),
    timeoutMs: 25_000,
  });

  if (initRes.status < 200 || initRes.status >= 300 || !initRes.body) {
    const initErr = extractApiErrorDetail(initRes.body) ?? `HTTP ${initRes.status}`;
    pushLog(
      "warn",
      "upload",
      `Inisialisasi chunked (/v1/media/uploads) gagal (${initErr}); mencoba fallback single-shot...`,
      undefined,
      jobId,
    );
    if (totalBytes <= MAX_MEDIA_SINGLE_BYTES) {
      emitUploadProgress({
        jobId,
        fileName,
        totalBytes,
        uploadedBytes: 0,
        percent: 12,
        phase: "uploading_single",
        statusText: `Fallback: mengirim ${formatBytesShort(totalBytes)} lewat single-shot...`,
      });
      const fallback = await callTebarApi(
        `/media/upload?keep=false&name=${encodeURIComponent(fileName)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/octet-stream" },
          body: new Uint8Array(bytes),
          timeoutMs: 300_000,
        },
      );
      if (fallback.status >= 200 && fallback.status < 300 && fallback.body) {
        pushLog(
          "success",
          "upload",
          `Fallback upload selesai dalam ${(fallback.elapsedMs / 1000).toFixed(1)}s.`,
          undefined,
          jobId,
        );
        const ready = await waitUntilMediaReady(
          fallback.body as TebarMedia,
          jobId,
          fileName,
          totalBytes,
        );
        return { status: fallback.status, body: ready };
      }
      const fbErr = extractApiErrorDetail(fallback.body) ?? `HTTP ${fallback.status}`;
      pushLog("error", "upload", `Fallback upload juga gagal: ${fbErr}`, undefined, jobId);
      emitUploadProgress({
        jobId,
        fileName,
        totalBytes,
        uploadedBytes: 0,
        percent: 0,
        phase: "error",
        statusText: "Upload gagal.",
        error: fbErr,
      });
      return { status: fallback.status, body: fallback.body };
    }
    emitUploadProgress({
      jobId,
      fileName,
      totalBytes,
      uploadedBytes: 0,
      percent: 0,
      phase: "error",
      statusText: "Gagal membuka sesi upload.",
      error: initErr,
    });
    return { status: initRes.status, body: initRes.body };
  }

  const session = initRes.body as ChunkedInitResponse;
  const partSize = session.part_size;
  const partCount = session.part_count;
  pushLog(
    "info",
    "upload",
    `Sesi chunked aktif: ${partCount} part x ${formatBytesShort(partSize)} (${initRes.elapsedMs}ms).`,
    `media_id=${session.id}`,
    jobId,
  );

  let sentBytes = 0;
  const uploadStartedAt = Date.now();
  for (let part = 1; part <= partCount; part++) {
    const start = (part - 1) * partSize;
    const end = Math.min(part * partSize, totalBytes);
    const chunk = new Uint8Array(bytes.subarray(start, end));

    const pctBefore = 5 + Math.round((sentBytes / totalBytes) * 83);
    emitUploadProgress({
      jobId,
      fileName,
      totalBytes,
      uploadedBytes: sentBytes,
      percent: pctBefore,
      phase: "uploading_parts",
      partCurrent: part,
      partTotal: partCount,
      statusText: `Mengirim part ${part}/${partCount} (${formatBytesShort(sentBytes)} / ${formatBytesShort(totalBytes)})...`,
    });

    const partRes = await uploadPartWithRetry(session.id, part, chunk, partCount, jobId);
    if (!partRes.ok) {
      const partErr = extractApiErrorDetail(partRes.body) ?? `HTTP ${partRes.status}`;
      pushLog(
        "error",
        "upload",
        `Upload part ${part}/${partCount} gagal setelah retry (${partErr}).`,
        `media_id=${session.id}`,
        jobId,
      );
      emitUploadProgress({
        jobId,
        fileName,
        totalBytes,
        uploadedBytes: sentBytes,
        percent: pctBefore,
        phase: "error",
        partCurrent: part,
        partTotal: partCount,
        statusText: `Part ${part}/${partCount} gagal.`,
        error: partErr,
      });
      return { status: partRes.status, body: partRes.body };
    }

    sentBytes = end;
    const elapsedSec = Math.max(0.1, (Date.now() - uploadStartedAt) / 1000);
    const speedBytesPerSec = sentBytes / elapsedSec;
    const pctAfter = 5 + Math.round((sentBytes / totalBytes) * 83);
    pushLog(
      "info",
      "upload",
      `Part ${part}/${partCount} selesai (${formatBytesShort(sentBytes)} / ${formatBytesShort(totalBytes)} | ${formatBytesShort(speedBytesPerSec)}/s).`,
      `${partRes.elapsedMs}ms`,
      jobId,
    );
    emitUploadProgress({
      jobId,
      fileName,
      totalBytes,
      uploadedBytes: sentBytes,
      percent: pctAfter,
      phase: "uploading_parts",
      partCurrent: part,
      partTotal: partCount,
      speedBytesPerSec,
      statusText: `Part ${part}/${partCount} terkirim (${formatBytesShort(speedBytesPerSec)}/s)`,
    });
  }

  emitUploadProgress({
    jobId,
    fileName,
    totalBytes,
    uploadedBytes: totalBytes,
    percent: 90,
    phase: "completing",
    partCurrent: partCount,
    partTotal: partCount,
    statusText: "Menyelesaikan upload & validasi format MP4 di Tebar...",
  });
  pushLog(
    "info",
    "upload",
    `Semua ${partCount} part terkirim. Memanggil POST /v1/media/${session.id}/complete...`,
    undefined,
    jobId,
  );

  const completeRes = await callTebarApi(
    `/media/${encodeURIComponent(session.id)}/complete`,
    {
      method: "POST",
      timeoutMs: 300_000,
    },
  );

  if (completeRes.status < 200 || completeRes.status >= 300 || !completeRes.body) {
    const completeErr = extractApiErrorDetail(completeRes.body) ?? `HTTP ${completeRes.status}`;
    pushLog(
      "error",
      "upload",
      `Finalisasi upload (/complete) gagal: ${completeErr}`,
      `media_id=${session.id}`,
      jobId,
    );
    emitUploadProgress({
      jobId,
      fileName,
      totalBytes,
      uploadedBytes: totalBytes,
      percent: 90,
      phase: "error",
      statusText: "Finalisasi media gagal.",
      error: completeErr,
    });
    return { status: completeRes.status, body: completeRes.body };
  }

  pushLog(
    "info",
    "upload",
    `Finalisasi /complete direspons HTTP ${completeRes.status} (${(completeRes.elapsedMs / 1000).toFixed(1)}s).`,
    `media_id=${session.id}`,
    jobId,
  );

  const ready = await waitUntilMediaReady(
    completeRes.body as TebarMedia,
    jobId,
    fileName,
    totalBytes,
  );
  return { status: 201, body: ready };
}

const MIME_MAP: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".json": "application/json; charset=utf-8",
};

function serveStaticFile(req: IncomingMessage, res: ServerResponse, pathname: string): boolean {
  let filePath: string | null = null;
  if (pathname === "/assets/character-preview.png") {
    filePath = resolveInsideRoot(CHARACTER_PREVIEW_ROOT, "character-preview.png");
  } else {
    const rel = pathname === "/" ? "index.html" : pathname.replace(/^\//, "");
    filePath = resolveInsideRoot(SOCIAL_PUBLIC_ROOT, rel);
    if (!filePath && !pathname.startsWith("/api/")) {
      filePath = resolveInsideRoot(SOCIAL_PUBLIC_ROOT, "index.html");
    }
  }

  if (!filePath || !statSync(filePath).isFile()) {
    return false;
  }

  const ext = extname(filePath).toLowerCase();
  setSecurityHeaders(res, ext === ".html");
  res.writeHead(200, { "Content-Type": MIME_MAP[ext] || "application/octet-stream" });
  createReadStream(filePath).pipe(res);
  return true;
}

function serveLocalOutVideo(req: IncomingMessage, res: ServerResponse, fileParam: string | null): void {
  if (!fileParam) {
    sendError(res, 400, "invalid_file", "Parameter file wajib diisi.");
    return;
  }
  const realVideo = resolveInsideRoot(OUT_ROOT, fileParam);
  if (!realVideo || !statSync(realVideo).isFile() || extname(realVideo).toLowerCase() !== ".mp4") {
    sendError(res, 404, "not_found", "File video episode belum ditemukan di folder out/.");
    return;
  }

  const stat = statSync(realVideo);
  const total = stat.size;
  const range = req.headers.range;
  setSecurityHeaders(res);

  if (range && range.startsWith("bytes=")) {
    const [startStr, endStr] = range.replace("bytes=", "").split("-");
    const start = Number(startStr);
    const end = endStr ? Math.min(Number(endStr), total - 1) : total - 1;
    if (Number.isNaN(start) || Number.isNaN(end) || start > end || start >= total) {
      res.writeHead(416, { "Content-Range": `bytes */${total}` });
      res.end();
      return;
    }
    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${total}`,
      "Accept-Ranges": "bytes",
      "Content-Length": end - start + 1,
      "Content-Type": "video/mp4",
    });
    createReadStream(realVideo, { start, end }).pipe(res);
    return;
  }

  res.writeHead(200, {
    "Content-Length": total,
    "Accept-Ranges": "bytes",
    "Content-Type": "video/mp4",
  });
  createReadStream(realVideo).pipe(res);
}

const server = createServer(async (req, res) => {
  try {
    const reqUrl = new URL(req.url || "/", `http://127.0.0.1:${PORT}`);
    const pathname = reqUrl.pathname;
    const method = (req.method || "GET").toUpperCase();

    if (method === "GET" && pathname === "/api/health") {
      sendJson(res, 200, {
        ok: true,
        apiKeyConfigured: Boolean(TEBAR_API_KEY),
        apiKeyHint: maskApiKey(TEBAR_API_KEY),
        apiBaseUrl: TEBAR_API_BASE,
        minDurationTargetSec: BRAND_PROFILE.minEpisodeDurationSec,
      });
      return;
    }

    if (method === "GET" && pathname === "/api/episodes") {
      sendJson(res, 200, { data: buildEpisodeItems() });
      return;
    }

    if (method === "GET" && pathname === "/api/logs") {
      sendJson(res, 200, { logs: logHistory, uploadProgress: latestUploadProgress });
      return;
    }

    if (method === "DELETE" && pathname === "/api/logs") {
      logHistory.length = 0;
      latestUploadProgress = null;
      pushLog("info", "server", "Riwayat log dibersihkan oleh pengguna.");
      sendJson(res, 200, { cleared: true });
      return;
    }

    if (method === "GET" && pathname === "/api/logs/stream") {
      setSecurityHeaders(res);
      res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
      res.setHeader("Cache-Control", "no-cache, no-transform");
      res.setHeader("Connection", "keep-alive");
      res.socket?.setTimeout(0);
      res.writeHead(200);
      sseClients.add(res);
      res.write(
        `event: init\ndata: ${JSON.stringify({ logs: logHistory, uploadProgress: latestUploadProgress })}\n\n`,
      );
      const keepAlive = setInterval(() => {
        try {
          res.write(": ping\n\n");
        } catch {
          clearInterval(keepAlive);
          sseClients.delete(res);
        }
      }, 15_000);
      keepAlive.unref();
      req.on("close", () => {
        clearInterval(keepAlive);
        sseClients.delete(res);
      });
      return;
    }

    if (method === "GET" && pathname === "/api/accounts") {
      const upstream = await callTebarApi("/accounts");
      if (upstream.status >= 400) {
        pushLog(
          "error",
          "accounts",
          `Gagal sinkron akun Tebar (HTTP ${upstream.status}, ${upstream.elapsedMs}ms).`,
          extractApiErrorDetail(upstream.body) ?? undefined,
        );
      } else {
        const count = Array.isArray((upstream.body as { data?: unknown[] } | null)?.data)
          ? (upstream.body as { data: unknown[] }).data.length
          : 0;
        pushLog(
          "info",
          "accounts",
          `Sinkronisasi akun Tebar berhasil (${count} akun, ${upstream.elapsedMs}ms).`,
        );
      }
      sendJson(res, upstream.status, upstream.body);
      return;
    }

    if (method === "GET" && pathname === "/api/youtube/quota") {
      const upstream = await callTebarApi("/accounts/youtube/upload-quota", {
        timeoutMs: 10_000,
      });
      if (upstream.status >= 400) {
        pushLog(
          "warn",
          "accounts",
          `Cek kuota upload YouTube HTTP ${upstream.status}.`,
          extractApiErrorDetail(upstream.body) ?? undefined,
        );
      }
      sendJson(res, upstream.status, upstream.body);
      return;
    }

    if (method === "GET" && pathname === "/api/media") {
      const rawLimit = Number(reqUrl.searchParams.get("limit") || 15);
      const safeLimit = Math.min(50, Math.max(1, Number.isFinite(rawLimit) ? rawLimit : 15));
      const upstream = await callTebarApi(`/media?limit=${safeLimit}`);
      if (upstream.status >= 400) {
        pushLog(
          "warn",
          "upload",
          `Gagal membaca media library Tebar (HTTP ${upstream.status}).`,
          extractApiErrorDetail(upstream.body) ?? undefined,
        );
      }
      sendJson(res, upstream.status, upstream.body);
      return;
    }

    if (method === "GET" && pathname === "/api/posts") {
      const rawLimit = Number(reqUrl.searchParams.get("limit") || 15);
      const safeLimit = Math.min(50, Math.max(1, Number.isFinite(rawLimit) ? rawLimit : 15));
      const upstream = await callTebarApi(`/posts?limit=${safeLimit}`);
      if (upstream.status >= 400) {
        pushLog(
          "error",
          "posts",
          `Gagal sinkron riwayat post (HTTP ${upstream.status}, ${upstream.elapsedMs}ms).`,
          extractApiErrorDetail(upstream.body) ?? undefined,
        );
      }
      sendJson(res, upstream.status, upstream.body);
      return;
    }

    if (method === "GET" && pathname === "/api/media/local-video") {
      serveLocalOutVideo(req, res, reqUrl.searchParams.get("file"));
      return;
    }

    if (method === "POST" && pathname === "/api/media/upload-episode") {
      const rawBuf = await readRequestBuffer(req, MAX_JSON_BODY_BYTES);
      const body = JSON.parse(rawBuf.toString("utf8")) as { episodeId?: unknown; jobId?: unknown };
      const episodeId = typeof body.episodeId === "string" ? body.episodeId : "";
      const jobId =
        typeof body.jobId === "string" && body.jobId.trim()
          ? body.jobId.trim().slice(0, 64)
          : randomUUID();
      const ep = buildEpisodeItems().find((item) => item.id === episodeId);
      if (!ep) {
        pushLog("error", "upload", `Episode "${episodeId}" tidak ditemukan.`, undefined, jobId);
        sendError(res, 404, "episode_not_found", "Episode tidak ditemukan.");
        return;
      }
      const relFromOut = ep.videoFile.replace(/^out[\\/]/, "");
      const realVideo = resolveInsideRoot(OUT_ROOT, relFromOut);
      if (!realVideo || !statSync(realVideo).isFile()) {
        pushLog("error", "upload", `File video "${ep.videoFile}" belum dirender.`, undefined, jobId);
        sendError(
          res,
          404,
          "video_not_rendered",
          "Video episode belum dirender di folder out/. Jalankan render terlebih dahulu.",
        );
        return;
      }
      const fileStat = statSync(realVideo);
      if (fileStat.size > MAX_MEDIA_CHUNKED_BYTES) {
        sendError(
          res,
          413,
          "file_too_large",
          "Ukuran video melebihi batas maksimum 300 MB Tebar API.",
        );
        return;
      }
      const fileName = relFromOut.replace(/[^A-Za-z0-9._-]/g, "_").slice(0, 200);
      emitUploadProgress({
        jobId,
        fileName,
        totalBytes: fileStat.size,
        uploadedBytes: 0,
        percent: 2,
        phase: "reading",
        statusText: `Membaca file lokal ${fileName} (${formatBytesShort(fileStat.size)})...`,
      });
      const bytes = readFileSync(realVideo);
      const result = await uploadMediaBufferToTebar(bytes, fileName, jobId);
      sendJson(res, result.status, result.body);
      return;
    }

    if (method === "POST" && pathname === "/api/media/upload-raw") {
      const rawName = (reqUrl.searchParams.get("name") || "upload.mp4")
        .replace(/[^A-Za-z0-9._-]/g, "_")
        .slice(0, 180);
      const jobId = (reqUrl.searchParams.get("jobId") || randomUUID()).slice(0, 64);
      pushLog(
        "info",
        "upload",
        `Menerima file upload browser "${rawName}" ke proxy lokal...`,
        undefined,
        jobId,
      );
      const bytes = await readRequestBuffer(req, MAX_MEDIA_CHUNKED_BYTES);
      if (bytes.length === 0) {
        pushLog("error", "upload", "File upload yang dikirim browser kosong.", undefined, jobId);
        sendError(res, 400, "empty_file", "File upload kosong.");
        return;
      }
      const result = await uploadMediaBufferToTebar(bytes, rawName, jobId);
      sendJson(res, result.status, result.body);
      return;
    }

    if (method === "POST" && pathname === "/api/posts") {
      const rawBuf = await readRequestBuffer(req, MAX_JSON_BODY_BYTES);
      let validated: CreatePostPayload;
      try {
        validated = parseCreatePostPayload(JSON.parse(rawBuf.toString("utf8")));
      } catch (err) {
        const msg = err instanceof Error ? err.message : "Payload post tidak valid.";
        pushLog("error", "publish", `Validasi post gagal: ${msg}`);
        sendError(res, 422, "validation_error", msg);
        return;
      }

      const rawIdemHeader = req.headers["idempotency-key"];
      const idemKey =
        typeof rawIdemHeader === "string" && IDEMPOTENCY_REGEX.test(rawIdemHeader)
          ? rawIdemHeader
          : randomUUID();

      pushLog(
        "info",
        "publish",
        `Mengirim post ke ${validated.targets.length} akun Tebar (${validated.scheduled_at ? `jadwal ${validated.scheduled_at}` : "publish langsung"})...`,
        `media=${validated.media_ids?.length ?? 0}, idem=${idemKey.slice(0, 8)}...`,
      );

      const created = await callTebarApi("/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": idemKey,
        },
        body: JSON.stringify(validated),
        timeoutMs: 30_000,
      });
      if (created.status >= 200 && created.status < 300 && created.body) {
        const rec = created.body as { id?: string; status?: string };
        pushLog(
          "success",
          "publish",
          `Tebar menerima post (HTTP ${created.status}, status=${rec.status ?? "?"}, ${created.elapsedMs}ms).`,
          rec.id ? `post_id=${rec.id}` : undefined,
        );
      } else {
        pushLog(
          "error",
          "publish",
          `Tebar menolak post (HTTP ${created.status}, ${created.elapsedMs}ms).`,
          extractApiErrorDetail(created.body) ?? undefined,
        );
      }
      sendJson(res, created.status, created.body);
      return;
    }

    const retryMatch = pathname.match(/^\/api\/posts\/([^/]+)\/retry$/);
    if (method === "POST" && retryMatch) {
      const postId = retryMatch[1];
      if (!UUID_REGEX.test(postId)) {
        sendError(res, 400, "invalid_id", "ID post harus UUID valid.");
        return;
      }
      pushLog("info", "posts", `Mengirim permintaan retry untuk post ${postId}...`);
      const upstream = await callTebarApi(`/posts/${postId}/retry`, { method: "POST" });
      pushLog(
        upstream.status >= 400 ? "error" : "success",
        "posts",
        `Retry post ${postId} selesai HTTP ${upstream.status} (${upstream.elapsedMs}ms).`,
        extractApiErrorDetail(upstream.body) ?? undefined,
      );
      sendJson(res, upstream.status, upstream.body);
      return;
    }

    const deleteMatch = pathname.match(/^\/api\/posts\/([^/]+)$/);
    if (method === "DELETE" && deleteMatch) {
      const postId = deleteMatch[1];
      if (!UUID_REGEX.test(postId)) {
        sendError(res, 400, "invalid_id", "ID post harus UUID valid.");
        return;
      }
      pushLog("info", "posts", `Membatalkan post terjadwal ${postId}...`);
      const upstream = await callTebarApi(`/posts/${postId}`, { method: "DELETE" });
      pushLog(
        upstream.status >= 400 ? "error" : "success",
        "posts",
        `Cancel post ${postId} HTTP ${upstream.status} (${upstream.elapsedMs}ms).`,
        extractApiErrorDetail(upstream.body) ?? undefined,
      );
      sendJson(res, upstream.status, upstream.body ?? { deleted: true });
      return;
    }

    if (method === "GET" && !pathname.startsWith("/api/")) {
      if (serveStaticFile(req, res, pathname)) {
        return;
      }
    }

    sendError(res, 404, "not_found", "Endpoint tidak ditemukan.");
  } catch (err) {
    if (err instanceof Error && err.message === "PAYLOAD_TOO_LARGE") {
      pushLog("error", "upload", "Ukuran file/payload melebihi batas server.");
      sendError(res, 413, "payload_too_large", "Ukuran payload melebihi batas.");
      return;
    }
    const errDetail = err instanceof Error ? err.message : String(err);
    pushLog("error", "server", `Unhandled local server error: ${errDetail}`);
    sendError(res, 500, "internal_error", `Terjadi gangguan internal server lokal: ${errDetail}`);
  }
});

server.requestTimeout = 10 * 60 * 1000;
server.headersTimeout = 60 * 1000;

server.listen(PORT, "127.0.0.1", () => {
  pushLog(
    "info",
    "server",
    `Tebar Social Publisher siap di http://127.0.0.1:${PORT}/ (${TEBAR_API_KEY ? `API Key ${maskApiKey(TEBAR_API_KEY)}` : "API KEY MISSING"}).`,
  );
});
