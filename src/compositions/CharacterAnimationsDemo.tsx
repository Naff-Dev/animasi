import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { ThreeCanvas } from "@remotion/three";
import { StickmanCharacter, STICKMAN_ANIMATIONS } from "../components/character";
import { CameraRig, OfficeRoom, StudioLighting } from "../components/environment";
import { FONTS, SERIES_COLORS } from "../utils/theme";

const FRAMES_PER_ANIMATION = 45;
export const CHARACTER_SHOWCASE_TOTAL_FRAMES =
  STICKMAN_ANIMATIONS.length * FRAMES_PER_ANIMATION;

/**
 * Interactive 15-animation verification & showcase Reel for the reusable IT Support Stickman rig.
 * Cycles deterministically through all 15 built-in animations (1.5s each at 30 FPS).
 */
export const CharacterAnimationsDemo: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const index = Math.min(
    STICKMAN_ANIMATIONS.length - 1,
    Math.floor(frame / FRAMES_PER_ANIMATION),
  );
  const currentAnimation = STICKMAN_ANIMATIONS[index];
  const prevAnimation = STICKMAN_ANIMATIONS[Math.max(0, index - 1)];
  const localFrame = frame % FRAMES_PER_ANIMATION;
  const blendProgress =
    index === 0 ? 1 : Math.min(1, localFrame / 9);

  return (
    <AbsoluteFill style={{ backgroundColor: "#F4F7FB" }}>
      <ThreeCanvas
        width={width}
        height={height}
        shadows
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        camera={{ fov: 36 }}
      >
        <color attach="background" args={["#F4F7FB"]} />
        <fog attach="fog" args={["#F4F7FB", 7.5, 16]} />
        <CameraRig
          keyframes={[
            {
              timeSec: 0,
              position: [0.28, 1.08, 3.65],
              lookAt: [0, 0.94, 0],
            },
          ]}
        />
        <StudioLighting keyIntensity={2.3} />
        <OfficeRoom />
        <StickmanCharacter
          animation={currentAnimation}
          previousAnimation={prevAnimation}
          transitionProgress={blendProgress}
          position={[0, 0, 0.08]}
          rotation={[0, 0.16, 0]}
          scale={1}
        />
      </ThreeCanvas>

      <div
        style={{
          position: "absolute",
          top: 120,
          left: 72,
          right: 72,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            fontFamily: FONTS.body,
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: 1.6,
            color: SERIES_COLORS.white,
            backgroundColor: SERIES_COLORS.electricBlue,
            padding: "6px 18px",
            borderRadius: 999,
          }}
        >
          ANIMATION {index + 1} / {STICKMAN_ANIMATIONS.length}
        </div>
        <div
          style={{
            fontFamily: FONTS.display,
            fontSize: 52,
            fontWeight: 900,
            color: SERIES_COLORS.inkNavy,
            textTransform: "uppercase",
          }}
        >
          {currentAnimation.replace(/_/g, " ")}
        </div>
      </div>
    </AbsoluteFill>
  );
};

