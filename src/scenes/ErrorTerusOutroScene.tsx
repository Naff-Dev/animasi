import React from "react";
import { AbsoluteFill, Sequence, staticFile, useVideoConfig } from "remotion";
import { ThreeCanvas } from "@remotion/three";
import { Audio } from "@remotion/media";
import { ITSupportCharacter } from "../components/character";
import {
  CameraRig,
  OfficeRoom,
  ServerRack,
  StudioLighting,
} from "../components/environment";
import { useDeterministicGsapTimeline } from "../utils/gsapTimeline";
import { BRAND_PROFILE } from "../utils/brand";
import { FONTS, SERIES_COLORS } from "../utils/theme";
import { secondsToFrames } from "../utils/timing";

export interface ErrorTerusOutroSceneProps {
  episodeNumber: string;
  topic: string;
}

const ACTION_ICONS = {
  LIKE: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  KOMEN: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  SHARE: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
  ),
  FOLLOW: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <line x1="20" y1="8" x2="20" y2="14" />
      <line x1="23" y1="11" x2="17" y2="11" />
    </svg>
  ),
} as const;

const OUTRO_CAMERA = [
  {
    timeSec: 0,
    position: [0.22, 1.38, 3.65] as [number, number, number],
    lookAt: [0, 1.18, 0] as [number, number, number],
  },
  {
    timeSec: 2.2,
    position: [-0.14, 1.34, 3.45] as [number, number, number],
    lookAt: [0, 1.18, 0] as [number, number, number],
    ease: "power2.inOut",
  },
  {
    timeSec: 4.2,
    position: [0.06, 1.35, 3.38] as [number, number, number],
    lookAt: [0, 1.18, 0] as [number, number, number],
    ease: "power1.out",
  },
];

/**
 * Permanent branded Outro sequence appended automatically to every rendered episode.
 * Displays permanent LIKE / KOMEN / SHARE / FOLLOW engagement CTA with ERROR TERUS identity.
 */
export const ErrorTerusOutroScene: React.FC<ErrorTerusOutroSceneProps> = ({
  episodeNumber,
  topic,
}) => {
  const { width, height, fps } = useVideoConfig();

  const cardRef = useDeterministicGsapTimeline<HTMLDivElement>((tl, root) => {
    const pills = root.querySelectorAll("[data-gsap='cta-pill']");
    const banner = root.querySelector("[data-gsap='brand-banner']");

    tl.from(
      root,
      {
        y: 36,
        opacity: 0,
        scale: 0.94,
        duration: 0.42,
        ease: "back.out(1.5)",
      },
      0,
    );
    if (pills.length > 0) {
      tl.from(
        pills,
        {
          y: 16,
          scale: 0.88,
          opacity: 0,
          duration: 0.3,
          stagger: 0.08,
          ease: "back.out(1.6)",
        },
        0.24,
      );
    }
    if (banner) {
      tl.from(
        banner,
        {
          y: 14,
          scale: 0.92,
          opacity: 0,
          duration: 0.36,
          ease: "power3.out",
        },
        0.58,
      );
    }
  }, []);

  return (
    <AbsoluteFill style={{ backgroundColor: "#F4F7FB" }}>
      <ThreeCanvas
        width={width}
        height={height}
        shadows="percentage"
        dpr={1}
        camera={{ fov: 39, near: 0.1, far: 45, position: [0.22, 1.38, 3.65] }}
      >
        <color attach="background" args={["#F4F7FB"]} />
        <fog attach="fog" args={["#F4F7FB", 8.5, 22]} />

        <StudioLighting alertIntensity={0} />
        <CameraRig keyframes={OUTRO_CAMERA} />
        <OfficeRoom />
        <ServerRack position={[1.45, 0, -1.65]} rotation={[0, -0.32, 0]} alertMode={false} />

        <ITSupportCharacter
          position={[0.0, 0, 0.3]}
          rotation={[0, 0.05, 0]}
          scale={0.96}
          animation="celebrating"
          cues={[
            { fromSec: 0, animation: "celebrating" },
            { fromSec: 1.5, animation: "explaining", blendSec: 0.35 },
            { fromSec: 3.1, animation: "celebrating", blendSec: 0.35 },
          ]}
        />
      </ThreeCanvas>

      {/* Safe-Zone Centered Permanent Outro CTA Card */}
      <div
        style={{
          position: "absolute",
          top: 194,
          left: 64,
          right: 64,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pointerEvents: "none",
          zIndex: 42,
        }}
      >
        <div
          ref={cardRef}
          style={{
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.97)",
            border: "2px solid #D8D1C5",
            boxShadow: "0 20px 48px rgba(15, 23, 42, 0.14)",
            borderRadius: 28,
            padding: "26px 28px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              backgroundColor: SERIES_COLORS.inkNavy,
              color: SERIES_COLORS.white,
              borderRadius: 999,
              padding: "7px 18px",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 28,
                height: 28,
                borderRadius: 999,
                backgroundColor: SERIES_COLORS.electricBlue,
                fontFamily: FONTS.display,
                fontSize: 13,
                fontWeight: 900,
              }}
            >
              ET
            </span>
            <span
              style={{
                fontFamily: FONTS.display,
                fontSize: 20,
                fontWeight: 900,
                letterSpacing: 1.1,
              }}
            >
              {BRAND_PROFILE.accountName}
            </span>
            <span
              style={{
                fontFamily: FONTS.body,
                fontSize: 17,
                fontWeight: 600,
                color: SERIES_COLORS.cyanLight,
              }}
            >
              {BRAND_PROFILE.handle}
            </span>
          </div>

          <div
            style={{
              fontFamily: FONTS.display,
              fontSize: 44,
              fontWeight: 900,
              color: SERIES_COLORS.inkNavy,
              textAlign: "center",
              lineHeight: 1.06,
            }}
          >
            {BRAND_PROFILE.outroHeadline}
          </div>

          <div
            style={{
              fontFamily: FONTS.body,
              fontSize: 22,
              fontWeight: 700,
              color: SERIES_COLORS.slateMuted,
              textAlign: "center",
            }}
          >
            EPISODE #{episodeNumber} / {topic.toUpperCase()}
          </div>

          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 10,
              marginTop: 4,
            }}
          >
            {BRAND_PROFILE.engagementActions.map((action) => (
              <div
                key={action}
                data-gsap="cta-pill"
                style={{
                  backgroundColor: "#EFF6FF",
                  border: "1.5px solid #BFDBFE",
                  borderRadius: 16,
                  padding: "12px 8px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                  color: SERIES_COLORS.electricBlue,
                }}
              >
                {ACTION_ICONS[action]}
                <span
                  style={{
                    fontFamily: FONTS.display,
                    fontSize: 18,
                    fontWeight: 900,
                    color: SERIES_COLORS.inkNavy,
                    letterSpacing: 0.4,
                  }}
                >
                  {action}
                </span>
              </div>
            ))}
          </div>

          <div
            data-gsap="brand-banner"
            style={{
              width: "100%",
              marginTop: 4,
              backgroundColor: SERIES_COLORS.electricBlue,
              color: SERIES_COLORS.white,
              borderRadius: 18,
              padding: "14px 20px",
              textAlign: "center",
              fontFamily: FONTS.display,
              fontSize: 25,
              fontWeight: 900,
              letterSpacing: 0.5,
              boxShadow: "0 10px 24px rgba(29, 99, 237, 0.25)",
            }}
          >
            {BRAND_PROFILE.outroCta} ({BRAND_PROFILE.handle})
          </div>
        </div>
      </div>

      {/* Bottom Safe-Zone Subtitle Pill Reinforcing CTA */}
      <div
        style={{
          position: "absolute",
          bottom: 390,
          left: 72,
          right: 140,
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 45,
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.92)",
            color: SERIES_COLORS.white,
            fontFamily: FONTS.display,
            fontSize: 28,
            fontWeight: 800,
            padding: "14px 26px",
            borderRadius: 18,
            boxShadow: "0 12px 28px rgba(15, 23, 42, 0.25)",
            textAlign: "center",
          }}
        >
          Like, Komen & Follow{" "}
          <span style={{ color: SERIES_COLORS.cyanLight }}>
            {BRAND_PROFILE.accountName}
          </span>{" "}
          untuk fakta besok!
        </div>
      </div>

      {/* Tactile SFX Cues synchronized to animation beats */}
      <Sequence layout="none">
        <Audio src={staticFile("audio/sfx/whoosh.wav")} volume={0.42} />
      </Sequence>
      <Sequence from={secondsToFrames(0.28, fps)} layout="none">
        <Audio src={staticFile("audio/sfx/ding.wav")} volume={0.48} />
      </Sequence>
      <Sequence from={secondsToFrames(0.62, fps)} layout="none">
        <Audio src={staticFile("audio/sfx/pop.wav")} volume={0.46} />
      </Sequence>
    </AbsoluteFill>
  );
};
