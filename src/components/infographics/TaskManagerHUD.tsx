import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { useDeterministicGsapTimeline } from "../../utils/gsapTimeline";
import { FONTS, SERIES_COLORS } from "../../utils/theme";

/**
 * GSAP-animated light-mode editorial Task Manager infographic overlay for Scene 3 ("FAKTA UTAMA").
 * Clean white card on Warm Cream studio aesthetic with sharp Dark Navy labels,
 * animated CPU/RAM/Disk progress bars, SVG performance chart, and offender rows.
 */
export const TaskManagerHUD: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const timeSec = frame / fps;

  const hudRef = useDeterministicGsapTimeline<HTMLDivElement>((tl, root) => {
    const rows = root.querySelectorAll("[data-gsap='tm-row']");
    const bars = root.querySelectorAll("[data-gsap='tm-bar']");
    const chartPath = root.querySelector("[data-gsap='tm-chart']");

    tl.from(
      root,
      {
        y: -36,
        opacity: 0,
        scale: 0.92,
        duration: 0.42,
        ease: "power3.out",
      },
      0,
    );

    if (bars.length > 0) {
      tl.from(
        bars,
        {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.72,
          stagger: 0.14,
          ease: "power2.out",
        },
        0.2,
      );
    }

    if (rows.length > 0) {
      tl.from(
        rows,
        {
          x: -22,
          opacity: 0,
          duration: 0.34,
          stagger: 0.1,
          ease: "power2.out",
        },
        0.35,
      );
    }

    if (chartPath) {
      tl.from(
        chartPath,
        {
          strokeDashoffset: 700,
          duration: 1.15,
          ease: "power1.inOut",
        },
        0.25,
      );
    }
  }, []);

  const cpuVal = Math.min(99, Math.round(96 + Math.sin(timeSec * 5) * 3));
  const ramVal = Math.min(99, Math.round(95 + Math.cos(timeSec * 4) * 2));
  const diskVal = Math.min(100, Math.round(98 + Math.sin(timeSec * 6) * 2));

  const meters = [
    { label: "CPU", value: cpuVal, color: SERIES_COLORS.red },
    { label: "RAM", value: ramVal, color: SERIES_COLORS.orange },
    { label: "DISK", value: diskVal, color: SERIES_COLORS.red },
  ];

  const chartPoints: string[] = [];
  for (let i = 0; i <= 20; i++) {
    const x = i * 38;
    const wave = Math.sin(timeSec * 4.5 + i * 0.55) * 14;
    const ramp = interpolate(i, [0, 8, 20], [58, 18, 12]);
    const y = Math.max(8, Math.min(82, ramp + wave));
    chartPoints.push(`${i === 0 ? "M" : "L"}${x} ${y.toFixed(1)}`);
  }

  return (
    <div
      style={{
        position: "absolute",
        top: 386,
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
          }}
        >
          <span
            style={{
              fontFamily: FONTS.display,
              fontSize: 25,
              fontWeight: 800,
              color: SERIES_COLORS.inkNavy,
            }}
          >
            TASK MANAGER / PERFORMANCE
          </span>
          <span
            style={{
              fontFamily: FONTS.body,
              fontSize: 17,
              fontWeight: 800,
              color: SERIES_COLORS.white,
              backgroundColor: SERIES_COLORS.red,
              padding: "4px 12px",
              borderRadius: 999,
            }}
          >
            100% PEAK
          </span>
        </div>

        {/* CPU / RAM / DISK Meters */}
        {meters.map((m) => (
          <div
            key={m.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 68,
                fontFamily: FONTS.body,
                fontSize: 21,
                fontWeight: 800,
                color: SERIES_COLORS.inkNavy,
              }}
            >
              {m.label}
            </div>
            <div
              style={{
                flex: 1,
                height: 20,
                borderRadius: 999,
                backgroundColor: "#E2E8F0",
                overflow: "hidden",
              }}
            >
              <div
                data-gsap="tm-bar"
                style={{
                  width: `${m.value}%`,
                  height: "100%",
                  borderRadius: 999,
                  backgroundColor: m.color,
                }}
              />
            </div>
            <div
              style={{
                width: 72,
                textAlign: "right",
                fontFamily: FONTS.display,
                fontSize: 23,
                fontWeight: 800,
                color: m.color,
              }}
            >
              {m.value}%
            </div>
          </div>
        ))}

        {/* Clean Light Sparkline SVG */}
        <svg
          width="100%"
          height="68"
          viewBox="0 0 760 90"
          style={{
            backgroundColor: "#F8FAFC",
            borderRadius: 14,
            border: "1.5px solid #E2E8F0",
          }}
        >
          <path
            data-gsap="tm-chart"
            d={chartPoints.join(" ")}
            fill="none"
            stroke={SERIES_COLORS.red}
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeDasharray="700"
            strokeDashoffset="0"
          />
        </svg>

        {/* Top Resource Hog Rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            data-gsap="tm-row"
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#FEF2F2",
              border: "1.5px solid #FECACA",
              borderRadius: 12,
              padding: "8px 14px",
              fontFamily: FONTS.body,
              fontSize: 20,
              fontWeight: 700,
              color: SERIES_COLORS.inkNavy,
            }}
          >
            <span>chrome.exe (47 Tabs)</span>
            <span style={{ color: SERIES_COLORS.red, fontWeight: 800 }}>76% RAM</span>
          </div>
          <div
            data-gsap="tm-row"
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#FFF7ED",
              border: "1.5px solid #FED7AA",
              borderRadius: 12,
              padding: "8px 14px",
              fontFamily: FONTS.body,
              fontSize: 20,
              fontWeight: 700,
              color: SERIES_COLORS.inkNavy,
            }}
          >
            <span>SystemUpdater.exe</span>
            <span style={{ color: SERIES_COLORS.orange, fontWeight: 800 }}>22% CPU</span>
          </div>
        </div>
      </div>
    </div>
  );
};
