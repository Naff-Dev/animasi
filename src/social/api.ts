import type {
  ActivityLogEntry,
  CreatePostPayload,
  EpisodePublishItem,
  ServerHealthResponse,
  TebarAccount,
  TebarMedia,
  TebarPostRecord,
  UploadProgressSnapshot,
  YouTubeUploadQuota,
} from "./types";

async function fetchJsonWithTimeout<T>(
  input: string,
  init: RequestInit & { timeoutMs?: number } = {},
): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), init.timeoutMs ?? 20_000);
  try {
    const response = await fetch(input, {
      ...init,
      signal: controller.signal,
    });
    const text = await response.text();
    let parsed: unknown = null;
    try {
      parsed = text ? JSON.parse(text) : null;
    } catch {
      parsed = null;
    }
    if (!response.ok) {
      const errObj = parsed as { error?: { message?: string; code?: string } } | null;
      const msg =
        errObj?.error?.message ||
        `Permintaan gagal dengan status HTTP ${response.status}.`;
      const err = new Error(msg) as Error & { code?: string };
      err.code = errObj?.error?.code;
      throw err;
    }
    return parsed as T;
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      throw new Error("Koneksi ke server melebihi batas waktu. Coba ulangi.");
    }
    throw err;
  } finally {
    clearTimeout(timeout);
  }
}

export function fetchHealth(): Promise<ServerHealthResponse> {
  return fetchJsonWithTimeout<ServerHealthResponse>("/api/health");
}

export async function fetchEpisodes(): Promise<EpisodePublishItem[]> {
  const res = await fetchJsonWithTimeout<{ data: EpisodePublishItem[] }>("/api/episodes");
  return res.data ?? [];
}

export async function fetchAccounts(): Promise<TebarAccount[]> {
  const res = await fetchJsonWithTimeout<{ data: TebarAccount[] }>("/api/accounts");
  return res.data ?? [];
}

export async function fetchYouTubeQuota(): Promise<YouTubeUploadQuota | null> {
  try {
    return await fetchJsonWithTimeout<YouTubeUploadQuota>("/api/youtube/quota", {
      timeoutMs: 8_000,
    });
  } catch {
    return null;
  }
}

export async function fetchPosts(limit = 15): Promise<TebarPostRecord[]> {
  const res = await fetchJsonWithTimeout<{ data: TebarPostRecord[] }>(
    `/api/posts?limit=${encodeURIComponent(String(limit))}`,
  );
  return res.data ?? [];
}

export async function fetchMediaLibrary(limit = 12): Promise<TebarMedia[]> {
  const res = await fetchJsonWithTimeout<{ data: TebarMedia[] }>(
    `/api/media?limit=${encodeURIComponent(String(limit))}`,
  );
  return res.data ?? [];
}

export async function fetchServerLogs(): Promise<{
  logs: ActivityLogEntry[];
  uploadProgress: UploadProgressSnapshot | null;
}> {
  return fetchJsonWithTimeout<{
    logs: ActivityLogEntry[];
    uploadProgress: UploadProgressSnapshot | null;
  }>("/api/logs");
}

export async function clearServerLogs(): Promise<void> {
  await fetchJsonWithTimeout<{ cleared: boolean }>("/api/logs", {
    method: "DELETE",
  });
}

export interface ActivityLogStreamHandlers {
  onInit: (data: {
    logs: ActivityLogEntry[];
    uploadProgress: UploadProgressSnapshot | null;
  }) => void;
  onLog: (entry: ActivityLogEntry) => void;
  onUploadProgress: (progress: UploadProgressSnapshot) => void;
  onConnectionChange: (connected: boolean) => void;
}

export function subscribeActivityLogs(handlers: ActivityLogStreamHandlers): () => void {
  if (typeof EventSource === "undefined") {
    return () => undefined;
  }
  const es = new EventSource("/api/logs/stream");
  es.onopen = () => handlers.onConnectionChange(true);
  es.onerror = () => handlers.onConnectionChange(false);

  es.addEventListener("init", (evt) => {
    try {
      const payload = JSON.parse((evt as MessageEvent).data) as {
        logs: ActivityLogEntry[];
        uploadProgress: UploadProgressSnapshot | null;
      };
      handlers.onConnectionChange(true);
      handlers.onInit(payload);
    } catch {
      // ignore malformed frame
    }
  });

  es.addEventListener("log", (evt) => {
    try {
      const entry = JSON.parse((evt as MessageEvent).data) as ActivityLogEntry;
      handlers.onLog(entry);
    } catch {
      // ignore malformed frame
    }
  });

  es.addEventListener("upload_progress", (evt) => {
    try {
      const snap = JSON.parse((evt as MessageEvent).data) as UploadProgressSnapshot;
      handlers.onUploadProgress(snap);
    } catch {
      // ignore malformed frame
    }
  });

  return () => {
    es.close();
  };
}

export function uploadEpisodeVideoToTebar(
  episodeId: string,
  jobId: string,
): Promise<TebarMedia> {
  return fetchJsonWithTimeout<TebarMedia>("/api/media/upload-episode", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ episodeId, jobId }),
    timeoutMs: 600_000,
  });
}

export function uploadCustomFileToTebar(
  file: File,
  jobId: string,
  onClientProgress?: (loadedBytes: number, totalBytes: number) => void,
): Promise<TebarMedia> {
  return new Promise<TebarMedia>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      `/api/media/upload-raw?name=${encodeURIComponent(file.name)}&jobId=${encodeURIComponent(jobId)}`,
    );
    xhr.setRequestHeader("Content-Type", "application/octet-stream");
    xhr.timeout = 600_000;

    if (onClientProgress) {
      xhr.upload.onprogress = (evt) => {
        if (evt.lengthComputable) {
          onClientProgress(evt.loaded, evt.total);
        }
      };
    }

    xhr.onload = () => {
      let parsed: unknown = null;
      try {
        parsed = xhr.responseText ? JSON.parse(xhr.responseText) : null;
      } catch {
        parsed = null;
      }
      if (xhr.status >= 200 && xhr.status < 300 && parsed) {
        resolve(parsed as TebarMedia);
        return;
      }
      const errObj = parsed as { error?: { message?: string } } | null;
      reject(
        new Error(
          errObj?.error?.message ||
            `Upload gagal dengan status HTTP ${xhr.status}.`,
        ),
      );
    };

    xhr.onerror = () => {
      reject(new Error("Koneksi ke server lokal terputus saat mengupload file."));
    };

    xhr.ontimeout = () => {
      reject(new Error("Upload file melebihi batas waktu 10 menit."));
    };

    xhr.send(file);
  });
}

export function publishTebarPost(
  payload: CreatePostPayload,
  idempotencyKey: string,
): Promise<TebarPostRecord> {
  return fetchJsonWithTimeout<TebarPostRecord>("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify(payload),
    timeoutMs: 30_000,
  });
}

export function retryTebarPost(postId: string): Promise<TebarPostRecord> {
  return fetchJsonWithTimeout<TebarPostRecord>(
    `/api/posts/${encodeURIComponent(postId)}/retry`,
    { method: "POST" },
  );
}

export function deleteTebarPost(postId: string): Promise<{ deleted?: boolean }> {
  return fetchJsonWithTimeout<{ deleted?: boolean }>(
    `/api/posts/${encodeURIComponent(postId)}`,
    { method: "DELETE" },
  );
}

export function generateUuid(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

export function formatBytes(bytes: number): string {
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

export function formatDateId(iso: string | null): string {
  if (!iso) return "-";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(d);
}

export function getDefaultScheduleInputValue(): string {
  const future = new Date(Date.now() + 60 * 60 * 1000);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${future.getFullYear()}-${pad(future.getMonth() + 1)}-${pad(future.getDate())}T${pad(future.getHours())}:${pad(future.getMinutes())}`;
}

export function buildAccountsCurlSnippet(): string {
  return [
    "curl https://api.tebar.app/v1/accounts \\",
    '  -H "Authorization: Bearer $TEBAR_API_KEY"',
  ].join("\n");
}

export function buildCreatePostCurlSnippet(
  payload: CreatePostPayload,
  idempotencyKey: string,
): string {
  const bodyJson = JSON.stringify(payload, null, 2);
  const escaped = bodyJson.replace(/'/g, "'\\''");
  return [
    "curl -X POST https://api.tebar.app/v1/posts \\",
    '  -H "Authorization: Bearer $TEBAR_API_KEY" \\',
    '  -H "Content-Type: application/json" \\',
    `  -H "Idempotency-Key: ${idempotencyKey}" \\`,
    `  -d '${escaped}'`,
  ].join("\n");
}
