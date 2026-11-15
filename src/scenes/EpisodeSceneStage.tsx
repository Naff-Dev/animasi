import React from "react";
import { AbsoluteFill, Sequence, staticFile, useVideoConfig } from "remotion";
import { Audio } from "@remotion/media";
import { ThreeCanvas } from "@remotion/three";
import type { EpisodeSceneConfig } from "../data/episodes/types";
import { StickmanCharacter } from "../components/character";
import {
  CameraRig,
  OfficePrinter,
  OfficeRoom,
  ServerRack,
  StudioLighting,
  WorkstationDesk,
} from "../components/environment";
import { ReelSubtitles } from "../components/subtitles/ReelSubtitles";
import { SERIES_COLORS } from "../utils/theme";
import { secondsToFrames } from "../utils/timing";

export interface EpisodeSceneStageProps {
  scene: EpisodeSceneConfig;
  deskPosition?: [number, number, number];
  deskRotation?: [number, number, number];
  showChair?: boolean;
  chairOffset?: [number, number, number];
  children?: React.ReactNode;
}

/**
 * Shared Warm Cream 3D Studio + Spatial Office Stage used by all modular Episode scenes.
 * Handles deterministic camera keyframes, Stickman animation cues, ambient studio lights,
 * voiceover lead-in delay (+0.2s), sound effects, and Instagram Reels safe-zone subtitles.
 */
export const EpisodeSceneStage: React.FC<EpisodeSceneStageProps> = ({
  scene,
  deskPosition = [-0.75, 0, -0.92],
  deskRotation = [0, 0.34, 0],
  showChair = false,
  chairOffset = [0, 0, 0.55],
  children,
}) => {
  const { width, height, fps } = useVideoConfig();
  const voStartFrame = secondsToFrames(0.2, fps);

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
          keyframes={scene.cameraKeyframes}
          shakeAmplitude={scene.cameraShake?.amplitude}
          shakeStartSec={scene.cameraShake?.startSec}
          shakeDurationSec={scene.cameraShake?.durationSec}
        />

        <StudioLighting alertIntensity={scene.serverAlert ? 0.55 : 0} />
        <OfficeRoom />

        <WorkstationDesk
          position={deskPosition}
          rotation={deskRotation}
          screenMode={scene.screenMode}
          overheatFactor={scene.overheatFactor ?? 0}
          showChair={showChair}
          chairOffset={chairOffset}
        />

        <ServerRack
          position={[-1.48, 0, -1.72]}
          rotation={[0, 0.28, 0]}
          alertMode={Boolean(scene.serverAlert)}
          looseLanCable={Boolean(scene.looseLanCable)}
        />

        <OfficePrinter
          position={[1.42, 0, -1.52]}
          rotation={[0, -0.35, 0]}
          statusColor={scene.accentColor ?? SERIES_COLORS.electricBlue}
        />

        {scene.cast && scene.cast.length > 0 ? (
          scene.cast.map((member) => (
            <StickmanCharacter
              key={member.id}
              role={member.role}
              animation={member.animation}
              cues={member.cues}
              position={member.position}
              rotation={member.rotation ?? [0, 0, 0]}
              scale={member.scale ?? 1}
              holdLaptop={member.holdLaptop}
              headYaw={member.headYaw}
              headPitch={member.headPitch}
            />
          ))
        ) : (
          <StickmanCharacter
            role={scene.characterRole ?? "it_support"}
            animation={scene.characterAnimation}
            cues={scene.characterCues}
            position={scene.characterPosition ?? [0, 0, 0.36]}
            rotation={scene.characterRotation ?? [0, 0.14, 0]}
            scale={scene.characterScale ?? 1}
          />
        )}
      </ThreeCanvas>

      {/* Scene-specific 2D editorial overlays */}
      {children}

      {/* Word-synced Reels safe-zone captions */}
      <ReelSubtitles segments={scene.subtitles} />

      {/* Indonesian Voice Over (+0.2s lead-in for natural transition breathing room) */}
      <Sequence from={voStartFrame}>
        <Audio
          src={staticFile(scene.voiceoverFile)}
          volume={scene.voiceoverVolume ?? 1.0}
        />
      </Sequence>

      {/* Deterministic SFX Cues */}
      {scene.sfx.map((cue, idx) => {
        const startFrame = secondsToFrames(cue.fromSec, fps);
        const durFrames = cue.durationSec
          ? secondsToFrames(cue.durationSec, fps)
          : undefined;
        return (
          <Sequence
            key={`${scene.id}-sfx-${idx}-${cue.file}`}
            from={startFrame}
            durationInFrames={durFrames}
          >
            <Audio src={staticFile(cue.file)} volume={cue.volume ?? 0.5} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};

