import React from "react";
import { useDeterministicGsapTimeline } from "../../utils/gsapTimeline";
import { BRAND_PROFILE } from "../../utils/brand";
import { FONTS, SERIES_COLORS } from "../../utils/theme";

export interface SeriesHeaderBarProps {
  episodeNumber: string;
  topic: string;
}

/**
 * Persistent top safe-zone series identifier bar in crisp editorial white-and-navy styling.
 * Zero decorative pulsing dots or glowing dark chrome.
 */
export const SeriesHeaderBar: React.FC<SeriesHeaderBarProps> = ({
  episodeNumber,
  topic,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 112,
        left: 68,
        right: 68,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        pointerEvents: "none",
        zIndex: 50,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          backgroundColor: SERIES_COLORS.warmWhite,
          border: "1.5px solid #D8D1C5",
          boxShadow: "0 6px 18px rgba(20, 29, 48, 0.08)",
          borderRadius: 999,
          padding: "7px 16px",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 26,
            height: 26,
            borderRadius: 8,
            backgroundColor: SERIES_COLORS.electricBlue,
            color: SERIES_COLORS.white,
            fontFamily: FONTS.display,
            fontSize: 14,
            fontWeight: 900,
          }}
        >
          IT
        </span>
        <span
          style={{
            fontFamily: FONTS.body,
            fontSize: 19,
            fontWeight: 800,
            letterSpacing: 0.9,
            color: SERIES_COLORS.inkNavy,
          }}
        >
          1 HARI 1 FAKTA IT SUPPORT
        </span>
      </div>

      <div
        style={{
          fontFamily: FONTS.body,
          fontSize: 19,
          fontWeight: 800,
          color: SERIES_COLORS.white,
          backgroundColor: SERIES_COLORS.inkNavy,
          boxShadow: "0 6px 18px rgba(20, 29, 48, 0.12)",
          borderRadius: 999,
          padding: "8px 16px",
        }}
      >
        #{episodeNumber} / {topic.toUpperCase()}
      </div>
    </div>
  );
};

export interface ClosingOutroCardProps {
  episodeNumber: string;
}

/**
 * Reusable GSAP-animated Closing Outro identity card shared across all episodes.
 */
export const ClosingOutroCard: React.FC<ClosingOutroCardProps> = ({
  episodeNumber,
}) => {
  const cardRef = useDeterministicGsapTimeline<HTMLDivElement>((tl, root) => {
    const title = root.querySelector("[data-gsap='outro-title']");
    const sub = root.querySelector("[data-gsap='outro-sub']");
    const cta = root.querySelector("[data-gsap='outro-cta']");

    tl.from(
      root,
      {
        y: 44,
        opacity: 0,
        scale: 0.92,
        duration: 0.44,
        ease: "back.out(1.6)",
      },
      0,
    );
    if (title) {
      tl.from(title, { y: 18, opacity: 0, duration: 0.34, ease: "power3.out" }, 0.14);
    }
    if (sub) {
      tl.from(sub, { y: 16, opacity: 0, duration: 0.34, ease: "power3.out" }, 0.24);
    }
    if (cta) {
      tl.from(cta, { scale: 0.82, opacity: 0, duration: 0.38, ease: "back.out(1.9)" }, 0.36);
    }
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 204,
        left: 68,
        right: 68,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
        zIndex: 38,
      }}
    >
      <div
        ref={cardRef}
        style={{
          width: "100%",
          backgroundColor: SERIES_COLORS.warmWhite,
          border: "2px solid #D8D1C5",
          boxShadow: "0 20px 44px rgba(20, 29, 48, 0.14)",
          borderRadius: 28,
          padding: "26px 30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            fontFamily: FONTS.body,
            fontSize: 19,
            fontWeight: 800,
            letterSpacing: 2.4,
            color: SERIES_COLORS.electricBlue,
          }}
        >
          EPISODE {episodeNumber} SELESAI
        </div>

        <div
          data-gsap="outro-title"
          style={{
            fontFamily: FONTS.display,
            fontSize: 46,
            fontWeight: 900,
            color: SERIES_COLORS.inkNavy,
            textAlign: "center",
            lineHeight: 1.08,
          }}
        >
          SATU HARI SATU FAKTA
        </div>

        <div
          data-gsap="outro-sub"
          style={{
            fontFamily: FONTS.display,
            fontSize: 32,
            fontWeight: 800,
            color: SERIES_COLORS.slateMuted,
            textAlign: "center",
            lineHeight: 1.15,
          }}
        >
          KERJA DI BAGIAN IT SUPPORT
        </div>

        <div
          data-gsap="outro-cta"
          style={{
            marginTop: 8,
            backgroundColor: SERIES_COLORS.electricBlue,
            color: SERIES_COLORS.white,
            fontFamily: FONTS.display,
            fontSize: 24,
            fontWeight: 900,
            padding: "12px 28px",
            borderRadius: 999,
            boxShadow: "0 10px 24px rgba(29, 99, 237, 0.25)",
          }}
        >
          {BRAND_PROFILE.accountName} ({BRAND_PROFILE.handle})
        </div>
      </div>
    </div>
  );
};
