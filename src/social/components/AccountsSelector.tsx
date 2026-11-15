import React from "react";
import { CheckIcon, PlatformIcon, RefreshIcon } from "../icons";
import { PLATFORM_LIMITS, type AsyncState, type TebarAccount } from "../types";

interface AccountsSelectorProps {
  state: AsyncState<TebarAccount[]>;
  selectedIds: string[];
  onToggle: (accountId: string) => void;
  onSelectAllActive: () => void;
  onRefresh: () => void;
}

export const AccountsSelector: React.FC<AccountsSelectorProps> = ({
  state,
  selectedIds,
  onToggle,
  onSelectAllActive,
  onRefresh,
}) => {
  return (
    <section className="panel" aria-labelledby="accounts-heading">
      <div className="panel-head">
        <div className="min-w-0">
          <h2 id="accounts-heading" className="panel-title">
            Akun Sosmed Tujuan
          </h2>
          <p className="muted-copy">
            Sumber: <code>GET https://api.tebar.app/v1/accounts</code>
          </p>
        </div>
        <div className="head-actions">
          {state.status === "success" && state.data.some((a) => a.status === "active" && !a.plan_suspended) && (
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={onSelectAllActive}
            >
              Pilih Semua Aktif
            </button>
          )}
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={onRefresh}
            disabled={state.status === "loading"}
            aria-label="Muat ulang daftar akun Tebar"
          >
            <RefreshIcon size={15} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {state.status === "loading" && (
        <div className="skeleton-list" aria-busy="true" aria-live="polite">
          <div className="skeleton-card" />
          <div className="skeleton-card" />
        </div>
      )}

      {state.status === "error" && (
        <div className="state-box state-error" role="alert">
          <p className="state-title">Gagal memuat akun Tebar</p>
          <p className="muted-copy">{state.message}</p>
          <button type="button" className="btn btn-secondary btn-sm" onClick={onRefresh}>
            Coba Lagi
          </button>
        </div>
      )}

      {state.status === "empty" && (
        <div className="state-box" role="status">
          <p className="state-title">Belum ada akun terhubung</p>
          <p className="muted-copy">{state.message}</p>
          <button type="button" className="btn btn-primary btn-sm" onClick={onRefresh}>
            Muat Ulang Akun
          </button>
        </div>
      )}

      {state.status === "success" && (
        <div className="accounts-grid" role="group" aria-label="Pilih akun target">
          {state.data.map((account) => {
            const isSelected = selectedIds.includes(account.id);
            const isUsable = account.status === "active" && !account.plan_suspended;
            const meta = PLATFORM_LIMITS[account.platform];
            const handle = account.username ? `@${account.username}` : account.display_name || account.id;

            return (
              <button
                key={account.id}
                type="button"
                className={`account-card ${isSelected ? "is-selected" : ""} ${!isUsable ? "is-disabled" : ""}`}
                onClick={() => isUsable && onToggle(account.id)}
                disabled={!isUsable}
                aria-pressed={isSelected}
              >
                <span className={`platform-badge platform-${account.platform}`}>
                  <PlatformIcon platform={account.platform} size={18} />
                </span>

                <span className="account-info">
                  <span className="account-top-row">
                    <span className="account-platform">{meta.label}</span>
                    <span className={`status-tag status-${account.status === "active" && !account.plan_suspended ? "ok" : "warn"}`}>
                      {account.plan_suspended
                        ? "Suspended"
                        : account.status === "active"
                          ? "Active"
                          : account.status}
                    </span>
                  </span>
                  <span className="account-handle">{handle}</span>
                  {account.display_name && (
                    <span className="account-display">{account.display_name}</span>
                  )}
                  <span className="account-id">{account.id}</span>
                </span>

                <span className={`check-indicator ${isSelected ? "checked" : ""}`} aria-hidden="true">
                  {isSelected && <CheckIcon size={14} />}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
};

