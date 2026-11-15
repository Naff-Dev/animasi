import React from "react";
import { useDeterministicGsapTimeline } from "../../utils/gsapTimeline";
import { FONTS, SERIES_COLORS } from "../../utils/theme";

export interface TwistCalloutCardsProps {
  topLabel: string;
  bottomLabel: string;
}

/**
 * GSAP-animated comedic twist callout stamps (used in Scene 4 Twist / Realita IT Support).
 * Styled cleanly as bold tactile editorial badges with readable ink and crisp white/navy borders.
 */
export const TwistCalloutCards: React.FC<TwistCalloutCardsProps> = ({
  topLabel,
  bottomLabel,
}) => {
  const ref = useDeterministicGsapTimeline<HTMLDivElement>((tl, root) => {
    const first = root.querySelector("[data-gsap='twist-1']");
    const second = root.querySelector("[data-gsap='twist-2']");

    if (first) {
      tl.from(
        first,
        {
          x: -80,
          rotation: -6,
          scale: 0.78,
          opacity: 0,
          duration: 0.4,
          ease: "back.out(1.7)",
        },
        3.2,
      );
    }

    if (second) {
      tl.from(
        second,
        {
          x: 80,
          rotation: 6,
          scale: 0.78,
          opacity: 0,
          duration: 0.42,
          ease: "back.out(1.8)",
        },
        6.1,
      );
    }
  }, [topLabel, bottomLabel]);

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        top: 400,
        left: 68,
        right: 68,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
        pointerEvents: "none",
        zIndex: 36,
      }}
    >
      <div
        data-gsap="twist-1"
        style={{
          backgroundColor: SERIES_COLORS.red,
          border: "3px solid #FFFFFF",
          borderRadius: 18,
          padding: "13px 26px",
          fontFamily: FONTS.display,
          fontSize: 34,
          fontWeight: 900,
          color: SERIES_COLORS.white,
          boxShadow: "0 14px 30px rgba(20, 29, 48, 0.2)",
          transform: "rotate(-1.5deg)",
        }}
      >
        {topLabel}
      </div>

      <div
        data-gsap="twist-2"
        style={{
          backgroundColor: SERIES_COLORS.orange,
          border: "3px solid #FFFFFF",
          borderRadius: 18,
          padding: "13px 26px",
          fontFamily: FONTS.display,
          fontSize: 34,
          fontWeight: 900,
          color: SERIES_COLORS.white,
          boxShadow: "0 14px 30px rgba(20, 29, 48, 0.2)",
          transform: "rotate(1.5deg)",
        }}
      >
        {bottomLabel}
      </div>
    </div>
  );
};
