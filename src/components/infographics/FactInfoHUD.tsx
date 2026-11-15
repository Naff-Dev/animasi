import React from "react";
import type { FactCardConfig } from "../../data/episodes/types";
import { useDeterministicGsapTimeline } from "../../utils/gsapTimeline";
import { FONTS, SERIES_COLORS } from "../../utils/theme";

export interface FactInfoHUDProps {
  card: FactCardConfig;
}

/**
 * Editorial light-mode checklist & status card for Reels fact and problem scenes.
 * Stays clear of both the top headline and bottom Reels caption safe zone.
 */
export const FactInfoHUD: React.FC<FactInfoHUDProps> = ({ card }) => {
  const statusBg = card.statusColor ?? SERIES_COLORS.electricBlue;

  const hudRef = useDeterministicGsapTimeline<HTMLDivElement>((tl, root) => {
    const rows = root.querySelectorAll("[data-gsap='fact-row']");

    tl.from(
      root,
      {
        y: -28,
        opacity: 0,
        scale: 0.94,
        duration: 0.42,
        ease: "power3.out",
      },
      0,
    );

    if (rows.length > 0) {
      tl.from(
        rows,
        {
          x: -24,
          opacity: 0,
          duration: 0.36,
          stagger: 0.22,
          ease: "power2.out",
        },
        0.35,
      );
    }
  }, [card.title, card.statusTag, card.rows.length]);

  return (
    <div
      style={{
        position: "absolute",
        top: 392,
        left: 68,
        right: 68,
        pointerEvents: "none",
        zIndex: 36,
      }}
    >
      <div
        ref={hudRef}
        style={{
          backgroundColor: SERIES_COLORS.warmWhite,
          border: "2px solid #D8D1C5",
          borderRadius: 24,
          padding: "16px 22px",
          boxShadow: "0 18px 40px rgba(20, 29, 48, 0.14)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1.5px solid #E2E8F0",
            paddingBottom: 10,
            gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: FONTS.display,
              fontSize: 23,
              fontWeight: 800,
              color: SERIES_COLORS.inkNavy,
              letterSpacing: 0.2,
            }}
          >
            {card.title}
          </span>
          <span
            style={{
              fontFamily: FONTS.body,
              fontSize: 16,
              fontWeight: 800,
              color: SERIES_COLORS.white,
              backgroundColor: statusBg,
              padding: "5px 13px",
              borderRadius: 999,
              whiteSpace: "nowrap",
            }}
          >
            {card.statusTag}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
          {card.rows.map((row, idx) => {
            const accent = row.color ?? statusBg;
            return (
              <div
                key={`${row.label}-${idx}`}
                data-gsap="fact-row"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 12,
                  backgroundColor: "#F8FAFC",
                  border: "1.5px solid #E2E8F0",
                  borderLeft: `6px solid ${accent}`,
                  borderRadius: 12,
                  padding: "10px 14px",
                  fontFamily: FONTS.body,
                }}
              >
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: SERIES_COLORS.inkNavy,
                  }}
                >
                  {row.label}
                </span>
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: accent,
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.detail}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

