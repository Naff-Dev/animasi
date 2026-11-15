import React, { useMemo, useState } from "react";
import { formatDateId } from "../api";
import { ExternalLinkIcon, PlatformIcon, RefreshIcon, TrashIcon } from "../icons";
import type { AsyncState, TebarPostRecord } from "../types";

interface PostsHistoryPanelProps {
  state: AsyncState<TebarPostRecord[]>;
  onRefresh: () => void;
  onRetryPost: (postId: string) => Promise<void>;
  onDeletePost: (postId: string) => Promise<void>;
}

type StatusFilter = "all" | "scheduled" | "published" | "failed";

const STATUS_LABELS: Record<TebarPostRecord["status"], string> = {
  draft: "Draft",
  scheduled: "Terjadwal",
  publishing: "Mengirim",
  published: "Terbit",
  partial: "Sebagian",
  failed: "Gagal",
  canceled: "Batal",
};

export const PostsHistoryPanel: React.FC<PostsHistoryPanelProps> = ({
  state,
  onRefresh,
  onRetryPost,
  onDeletePost,
}) => {
  const [filter, setFilter] = useState<StatusFilter>("all");
  const [busyPostId, setBusyPostId] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    if (state.status !== "success") return [];
    if (filter === "all") return state.data;
    if (filter === "failed") {
      return state.data.filter((p) => p.status === "failed" || p.status === "partial");
    }
    return state.data.filter((p) => p.status === filter);
  }, [filter, state]);

  const handleAction = async (postId: string, fn: (id: string) => Promise<void>) => {
    setBusyPostId(postId);
    try {
      await fn(postId);
    } finally {
      setBusyPostId(null);
    }
  };

  return (
    <aside className="panel history-panel" aria-labelledby="history-heading">
      <div className="panel-head">
        <div className="min-w-0">
          <h2 id="history-heading" className="panel-title">
            Antrian & Riwayat Post
          </h2>
          <p className="muted-copy">
            Live sync dari <code>GET /v1/posts</code>
          </p>
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={onRefresh}
          disabled={state.status === "loading"}
          aria-label="Muat ulang riwayat posting Tebar"
        >
          <RefreshIcon size={15} />
          <span>Sync</span>
        </button>
      </div>

      <div className="filter-pills" role="tablist" aria-label="Filter status post">
        {(
          [
            { id: "all", label: "Semua" },
            { id: "scheduled", label: "Terjadwal" },
            { id: "published", label: "Terbit" },
            { id: "failed", label: "Gagal" },
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

      {state.status === "loading" && (
        <div className="skeleton-list" aria-busy="true">
          <div className="skeleton-card" />
          <div className="skeleton-card" />
          <div className="skeleton-card" />
        </div>
      )}

      {state.status === "error" && (
        <div className="state-box state-error" role="alert">
          <p className="state-title">Gagal memuat riwayat</p>
          <p className="muted-copy">{state.message}</p>
          <button type="button" className="btn btn-secondary btn-sm" onClick={onRefresh}>
            Coba Lagi
          </button>
        </div>
      )}

      {state.status === "empty" && (
        <div className="state-box" role="status">
          <p className="state-title">Belum ada postingan</p>
          <p className="muted-copy">{state.message}</p>
        </div>
      )}

      {state.status === "success" && filteredPosts.length === 0 && (
        <div className="state-box" role="status">
          <p className="state-title">Tidak ada post di filter ini</p>
          <p className="muted-copy">Coba pindah ke tab "Semua" untuk melihat semua aktivitas.</p>
        </div>
      )}

      {state.status === "success" && filteredPosts.length > 0 && (
        <ul className="history-list">
          {filteredPosts.map((post) => {
            const canRetry = post.status === "failed" || post.status === "partial";
            const canDelete = post.status === "scheduled" || post.status === "draft";
            const isBusy = busyPostId === post.id;

            return (
              <li key={post.id} className="history-item">
                <div className="history-item-top">
                  <span className={`post-badge badge-${post.status}`}>
                    {STATUS_LABELS[post.status]}
                  </span>
                  <span className="history-time" data-numeric="true">
                    {post.scheduled_at
                      ? `Jadwal: ${formatDateId(post.scheduled_at)}`
                      : formatDateId(post.created_at)}
                  </span>
                </div>

                <p className="history-content">
                  {post.content?.trim() || "(Post media tanpa caption)"}
                </p>

                {post.media.length > 0 && (
                  <div className="history-media-tag">
                    Media terlampir: {post.media.length} ({post.type})
                  </div>
                )}

                <div className="history-targets">
                  {post.targets.map((target) => {
                    const safeHref =
                      target.permalink && /^https?:\/\//i.test(target.permalink)
                        ? target.permalink
                        : null;
                    return (
                      <div key={target.id} className="history-target-item">
                        <div className="history-target-row">
                          <span className="history-target-label">
                            <PlatformIcon platform={target.platform} size={14} />
                            <span>{target.username ? `@${target.username}` : target.platform}</span>
                          </span>
                          <span className="history-target-right">
                            <span className={`target-status target-${target.status}`}>
                              {target.status}
                            </span>
                            {safeHref && (
                              <a
                                href={safeHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="permalink-link"
                                aria-label={`Buka postingan ${target.platform}`}
                              >
                                <ExternalLinkIcon size={13} />
                              </a>
                            )}
                          </span>
                        </div>
                        {(target.error_code || target.error_message) && (
                          <div className="target-error-note" role="alert">
                            {[target.error_code, target.error_message].filter(Boolean).join(": ")}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {(canRetry || canDelete) && (
                  <div className="history-actions">
                    {canRetry && (
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        disabled={isBusy}
                        onClick={() => handleAction(post.id, onRetryPost)}
                      >
                        {isBusy ? "Memproses..." : "Kirim Ulang"}
                      </button>
                    )}
                    {canDelete && (
                      <button
                        type="button"
                        className="btn btn-danger-outline btn-sm"
                        disabled={isBusy}
                        onClick={() => handleAction(post.id, onDeletePost)}
                      >
                        <TrashIcon size={14} />
                        <span>{isBusy ? "Menghapus..." : "Batalkan"}</span>
                      </button>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </aside>
  );
};

