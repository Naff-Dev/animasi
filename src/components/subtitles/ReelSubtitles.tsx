import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONTS, SERIES_COLORS } from "../../utils/theme";
import { REELS_SAFE_ZONE } from "../../utils/safeZone";
import type { SubtitleSegment } from "../../data/episodes/types";

export interface ReelSubtitlesProps {
  segments: readonly SubtitleSegment[];
}

/**
 * Smartphone-first Indonesian Reels subtitle renderer.
 * Styled as a crisp Dark Navy editorial pill on Warm Cream / 3D studio backgrounds:
 * high contrast on all frames, clear of Reels UI overlays, with deterministic
 * word-by-word highlight synchronized to voiceover timestamps.
 */
export const ReelSubtitles: React.FC<ReelSubtitlesProps> = ({ segments }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentMs = (frame / fps) * 1000;

  const activeSegment = segments.find(
    (seg) => currentMs >= seg.startMs && currentMs <= seg.endMs + 90,
  );

  if (!activeSegment) return null;

  const segLocalMs = currentMs - activeSegment.startMs;
  const popScale = interpolate(segLocalMs, [0, 90], [0.94, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    currentMs,
    [activeSegment.endMs - 40, activeSegment.endMs + 90],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  return (
    <div
      style={{
        position: "absolute",
        bottom: REELS_SAFE_ZONE.subtitleBottom,
        left: REELS_SAFE_ZONE.left,
        right: REELS_SAFE_ZONE.right,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
        zIndex: 40,
      }}
    >
      <div
        style={{
          maxWidth: REELS_SAFE_ZONE.subtitleMaxWidth,
          backgroundColor: SERIES_COLORS.inkNavy,
          border: "2px solid rgba(255, 255, 255, 0.14)",
          boxShadow: "0 14px 32px rgba(20, 29, 48, 0.22)",
          borderRadius: 22,
          padding: "16px 26px",
          textAlign: "center",
          transform: `scale(${popScale})`,
          opacity: fadeOut,
        }}
      >
        <div
          style={{
            fontFamily: FONTS.display,
            fontSize: 44,
            fontWeight: 800,
            lineHeight: 1.24,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "6px 15px",
          }}
        >
          {activeSegment.words.map((word, idx) => {
            const isSpoken = currentMs >= word.startMs;
            const isCurrent =
              currentMs >= word.startMs && currentMs <= word.endMs + 70;
            const accent = word.highlightColor ?? SERIES_COLORS.yellow;
            const textColor = isCurrent
              ? accent
              : isSpoken
                ? word.highlightColor ?? SERIES_COLORS.white
                : "rgba(255, 255, 255, 0.62)";

            const wordScale = isCurrent ? 1.04 : 1;

            return (
              <span
                key={`${idx}-${word.text}`}
                style={{
                  color: textColor,
                  display: "inline-block",
                  transform: `scale(${wordScale})`,
                }}
              >
                {word.text}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
