import React, { useEffect } from "react";
import { formatDateId } from "../api";
import { PlatformIcon, SendIcon } from "../icons";
import { PLATFORM_LIMITS, type TebarAccount, type TebarMedia } from "../types";

interface ConfirmPublishModalProps {
  open: boolean;
  isSubmitting: boolean;
  scheduleEnabled: boolean;
  scheduledAtIso: string | null;
  selectedAccounts: TebarAccount[];
  mediaList: TebarMedia[];
  captionPreview: string;
  youtubeTitlePreview?: string;
  targetModeLabels?: Record<string, string>;
  onCancel: () => void;
  onConfirm: () => void;
}

export const ConfirmPublishModal: React.FC<ConfirmPublishModalProps> = ({
  open,
  isSubmitting,
  scheduleEnabled,
  scheduledAtIso,
  selectedAccounts,
  mediaList,
  captionPreview,
  youtubeTitlePreview,
  targetModeLabels,
  onCancel,
  onConfirm,
}) => {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isSubmitting) {
        onCancel();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, isSubmitting, onCancel]);

  if (!open) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-publish-title"
      onClick={(e) => {
        if (e.target === e.currentTarget && !isSubmitting) onCancel();
      }}
    >
      <div className="modal-card">
        <div className="modal-head">
          <h2 id="confirm-publish-title" className="panel-title">
            {scheduleEnabled ? "Konfirmasi Jadwal Posting" : "Konfirmasi Publish ke Sosmed"}
          </h2>
          <p className="muted-copy">
            Permintaan akan dikirim ke <code>POST https://api.tebar.app/v1/posts</code>.
          </p>
        </div>

        <div className="modal-body">
          <div className="summary-row">
            <span className="summary-label">Target Akun ({selectedAccounts.length})</span>
            <div className="summary-chips">
              {selectedAccounts.map((acc) => {
                const modeLabel = targetModeLabels?.[acc.id];
                return (
                  <span key={acc.id} className="summary-chip">
                    <PlatformIcon platform={acc.platform} size={14} />
                    <span>
                      {PLATFORM_LIMITS[acc.platform]?.label ?? acc.platform} ({acc.username ? `@${acc.username}` : acc.display_name})
                      {modeLabel ? ` - ${modeLabel}` : ""}
                    </span>
                  </span>
                );
              })}
            </div>
          </div>

          <div className="summary-row">
            <span className="summary-label">Waktu Tayang</span>
            <span className="summary-value">
              {scheduleEnabled && scheduledAtIso
                ? formatDateId(scheduledAtIso)
                : "Publish Langsung Sekarang"}
            </span>
          </div>

          <div className="summary-row">
            <span className="summary-label">Media Terlampir</span>
            <span className="summary-value">
              {mediaList.length > 0
                ? mediaList
                    .map((m) => `${m.original_name || m.type} (${m.status})`)
                    .join(", ")
                : "Tanpa lampiran video/gambar (Teks saja)"}
            </span>
          </div>

          {youtubeTitlePreview && (
            <div className="summary-row">
              <span className="summary-label">Judul YouTube Shorts</span>
              <span className="summary-value">{youtubeTitlePreview}</span>
            </div>
          )}

          <div className="summary-row">
            <span className="summary-label">Pratinjau Caption</span>
            <div className="caption-preview-box">{captionPreview || "(Kosong)"}</div>
          </div>
        </div>

        <div className="modal-foot">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Periksa Ulang
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={onConfirm}
            disabled={isSubmitting}
          >
            <SendIcon size={16} />
            <span>
              {isSubmitting
                ? "Mengirim..."
                : scheduleEnabled
                  ? "Jadwalkan Sekarang"
                  : "Kirim & Publish"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

