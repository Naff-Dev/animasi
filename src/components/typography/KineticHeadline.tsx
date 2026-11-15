import React from "react";
import { useDeterministicGsapTimeline } from "../../utils/gsapTimeline";
import { FONTS, SERIES_COLORS } from "../../utils/theme";

export interface KineticHeadlineProps {
  badge?: string;
  headline: string;
  highlightPhrase?: string;
  accentColor?: string;
  topOffset?: number;
  align?: "center" | "left";
}

/**
 * GSAP-powered deterministic editorial headline banner for Warm Cream Reels scenes.
 * Uses crisp Dark Navy ink on light backgrounds and high-contrast solid highlight chips.
 */
export const KineticHeadline: React.FC<KineticHeadlineProps> = ({
  badge,
  headline,
  highlightPhrase,
  accentColor = SERIES_COLORS.electricBlue,
  topOffset = 204,
  align = "center",
}) => {
  const words = headline.split(" ");
  const highlightTokens = (highlightPhrase ?? "")
    .toLowerCase()
    .split(" ")
    .map((w) => w.replace(/[^a-zA-Z0-9-%]/g, ""))
    .filter(Boolean);

  const containerRef = useDeterministicGsapTimeline<HTMLDivElement>(
    (tl, root) => {
      const badgeEl = root.querySelector("[data-gsap='badge']");
      const wordEls = root.querySelectorAll("[data-gsap='word']");
      const barEl = root.querySelector("[data-gsap='accent-bar']");

      if (badgeEl) {
        tl.from(
          badgeEl,
          {
            y: -22,
            opacity: 0,
            scale: 0.9,
            duration: 0.34,
            ease: "back.out(1.6)",
          },
          0,
        );
      }

      if (wordEls.length > 0) {
        tl.from(
          wordEls,
          {
            y: 28,
            opacity: 0,
            scale: 0.88,
            duration: 0.32,
            stagger: 0.04,
            ease: "power3.out",
          },
          0.08,
        );
      }

      if (barEl) {
        tl.from(
          barEl,
          {
            scaleX: 0,
            transformOrigin: align === "center" ? "center center" : "left center",
            duration: 0.42,
            ease: "power2.out",
          },
          0.24,
        );
      }
    },
    [badge, headline, highlightPhrase, accentColor, align],
  );

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: topOffset,
        left: 68,
        right: 68,
        display: "flex",
        flexDirection: "column",
        alignItems: align === "center" ? "center" : "flex-start",
        gap: 12,
        pointerEvents: "none",
        zIndex: 35,
      }}
    >
      {badge && (
        <div
          data-gsap="badge"
          style={{
            fontFamily: FONTS.body,
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: 1.8,
            color: SERIES_COLORS.white,
            backgroundColor: accentColor,
            padding: "7px 20px",
            borderRadius: 999,
            boxShadow: "0 6px 18px rgba(20, 29, 48, 0.14)",
            textTransform: "uppercase",
          }}
        >
          {badge}
        </div>
      )}

      <div
        style={{
          fontFamily: FONTS.display,
          fontSize: 54,
          fontWeight: 900,
          lineHeight: 1.14,
          color: SERIES_COLORS.inkNavy,
          textAlign: align,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: align === "center" ? "center" : "flex-start",
          gap: "6px 12px",
        }}
      >
        {words.map((word, idx) => {
          const clean = word.replace(/[^a-zA-Z0-9-%]/g, "").toLowerCase();
          const isHighlight =
            clean.length > 0 && highlightTokens.includes(clean);

          return (
            <span
              key={`${idx}-${word}`}
              data-gsap="word"
              style={{
                display: "inline-block",
                color: isHighlight ? SERIES_COLORS.white : SERIES_COLORS.inkNavy,
                backgroundColor: isHighlight ? accentColor : "transparent",
                borderRadius: isHighlight ? 14 : 0,
                padding: isHighlight ? "2px 14px" : "2px 0px",
                boxShadow: isHighlight
                  ? "0 6px 16px rgba(20, 29, 48, 0.12)"
                  : "none",
              }}
            >
              {word}
            </span>
          );
        })}
      </div>

      <div
        data-gsap="accent-bar"
        style={{
          width: 180,
          height: 6,
          borderRadius: 999,
          backgroundColor: accentColor,
        }}
      />
    </div>
  );
};
