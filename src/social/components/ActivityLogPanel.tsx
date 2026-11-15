import React, { useMemo, useState } from "react";
import { formatBytes } from "../api";
import { CheckIcon, CopyIcon, TerminalIcon, TrashIcon } from "../icons";
import type { ActivityLogEntry, UploadProgressSnapshot } from "../types";

interface ActivityLogPanelProps {
  logs: ActivityLogEntry[];
  streamConnected: boolean;
  uploadProgress: UploadProgressSnapshot | null;
  onClear: () => void;
}

type LogFilter = "all" | "upload" | "publish" | "error";

const STAGE_LABEL: Record<ActivityLogEntry["stage"], string> = {
  server: "SERVER",
  accounts: "AKUN",
  upload: "UPLOAD",
  publish: "PUBLISH",
  posts: "POSTS",
};

const LEVEL_LABEL: Record<ActivityLogEntry["level"], string> = {
  info: "INFO",
  success: "OK",
  warn: "WARN",
  error: "ERR",
};

const PHASE_LABEL: Record<UploadProgressSnapshot["phase"], string> = {
  client_transfer: "Kirim Browser -> Proxy",
  reading: "Baca File Lokal",
  init: "Buka Sesi Chunk",
  uploading_parts: "Upload Chunk ke Tebar",
  uploading_single: "Upload Langsung ke Tebar",
  completing: "Finalisasi MP4",
  verifying: "Verifikasi Status Ready",
  ready: "Selesai (Ready)",
  error: "Upload Gagal",
};

function formatClockTime(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "--:--:--";
  return d.toLocaleTimeString("id-ID", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export const ActivityLogPanel: React.FC<ActivityLogPanelProps> = ({
  logs,
  streamConnected,
  uploadProgress,
  onClear,
}) => {
  const [filter, setFilter] = useState<LogFilter>("all");
  const [copied, setCopied] = useState(false);

  const visibleLogs = useMemo(() => {
    const filtered = logs.filter((entry) => {
      if (filter === "upload") return entry.stage === "upload";
      if (filter === "publish") return entry.stage === "publish" || entry.stage === "posts";
      if (filter === "error") return entry.level === "error" || entry.level === "warn";
      return true;
    });
    return [...filtered].reverse();
  }, [filter, logs]);

  const handleCopyLogs = async () => {
    const plain = logs
      .map(
        (l) =>
          `[${formatClockTime(l.ts)}] [${STAGE_LABEL[l.stage]}] [${LEVEL_LABEL[l.level]}] ${l.message}${l.detail ? ` (${l.detail})` : ""}`,
      )
      .join("\n");
    try {
      await navigator.clipboard.writeText(plain || "(Log masih kosong)");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard denied by browser
    }
  };

  return (
    <section className="panel log-panel" aria-labelledby="activity-log-heading">
      <div className="panel-head">
        <div className="min-w-0">
          <div className="log-title-row">
            <TerminalIcon size={17} />
            <h2 id="activity-log-heading" className="panel-title">
              Log Upload & Tebar API
            </h2>
            <span className={`stream-pill ${streamConnected ? "stream-on" : "stream-off"}`}>
              <span className="stream-dot" aria-hidden="true" />
              <span>{streamConnected ? "Live" : "Reconnecting"}</span>
            </span>
          </div>
          <p className="muted-copy">
            Pantau setiap tahap chunk upload, MB/s, verifikasi media, dan error API secara langsung.
          </p>
        </div>

        <div className="head-actions">
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={handleCopyLogs}
            aria-label="Salin semua log"
          >
            {copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
            <span>{copied ? "Tersalin" : "Salin Log"}</span>
          </button>
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={onClear}
            aria-label="Bersihkan log"
          >
            <TrashIcon size={14} />
            <span>Bersihkan</span>
          </button>
        </div>
      </div>

      {uploadProgress && (
        <div
          className={`upload-progress-box phase-${uploadProgress.phase}`}
          role="status"
          aria-live="polite"
        >
          <div className="upload-progress-top">
            <div className="upload-progress-file">
              <strong>{uploadProgress.fileName}</strong>
              <span className="upload-phase-tag">{PHASE_LABEL[uploadProgress.phase]}</span>
            </div>
            <span className="upload-pct" data-numeric="true">
              {uploadProgress.percent}%
            </span>
          </div>

          <div
            className="upload-bar-track"
            role="progressbar"
            aria-valuenow={uploadProgress.percent}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="upload-bar-fill"
              style={{ width: `${Math.min(100, Math.max(0, uploadProgress.percent))}%` }}
            />
          </div>

          <div className="upload-progress-meta" data-numeric="true">
            <span>{uploadProgress.statusText}</span>
            <span>
              {formatBytes(uploadProgress.uploadedBytes)} / {formatBytes(uploadProgress.totalBytes)}
              {uploadProgress.partTotal
                ? ` • Part ${uploadProgress.partCurrent ?? 0}/${uploadProgress.partTotal}`
                : ""}
              {uploadProgress.speedBytesPerSec
                ? ` • ${formatBytes(uploadProgress.speedBytesPerSec)}/s`
                : ""}
            </span>
          </div>

          {uploadProgress.error && (
            <p className="inline-error" role="alert">
              Penyebab: {uploadProgress.error}
            </p>
          )}
        </div>
      )}

      <div className="filter-pills" role="tablist" aria-label="Filter log aktivitas">
        {(
          [
            { id: "all", label: `Semua (${logs.length})` },
            { id: "upload", label: "Upload" },
            { id: "publish", label: "Publish" },
            { id: "error", label: "Warn/Error" },
          ] as const
        ).map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={filter === tab.id}
            className={`filter-pill ${filter === tab.id ? "active" : ""}`}
            onClick={() => setFilter(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="log-console" role="log" aria-live="polite">
        {visibleLogs.length === 0 ? (
          <div className="log-empty">
            Belum ada catatan aktivitas di filter ini.
          </div>
        ) : (
          <ul className="log-list">
            {visibleLogs.map((entry) => (
              <li key={entry.id} className={`log-row level-${entry.level}`}>
                <span className="log-time" data-numeric="true">
                  {formatClockTime(entry.ts)}
                </span>
                <span className={`log-badge lvl-${entry.level}`}>
                  {LEVEL_LABEL[entry.level]}
                </span>
                <span className="log-stage">{STAGE_LABEL[entry.stage]}</span>
                <div className="log-body">
                  <span className="log-msg">{entry.message}</span>
                  {entry.detail && <code className="log-detail">{entry.detail}</code>}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

