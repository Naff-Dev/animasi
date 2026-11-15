import React, { useEffect, useMemo } from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { applyITSupportPose, buildCharacterRig } from "./CharacterRig";
import { evaluateCharacterPose } from "./CharacterController";
import type {
  CharacterAnimationCue,
  CharacterRoleId,
  EulerTuple,
  StickmanAnimationName,
  Vec3Tuple,
} from "./types";

export interface ITSupportCharacterProps {
  role?: CharacterRoleId;
  animation?: StickmanAnimationName;
  previousAnimation?: StickmanAnimationName;
  transitionProgress?: number;
  cues?: readonly CharacterAnimationCue[];
  speed?: number;
  position?: Vec3Tuple;
  rotation?: EulerTuple;
  scale?: number;
  headYaw?: number;
  headPitch?: number;
  holdLaptop?: boolean;
}

export type StickmanCharacterProps = ITSupportCharacterProps;

/**
 * Reusable 3D Office Character built modularly in Three.js (`it_support`, `office_worker`, `manager`, `finance_staff`).
 * Deterministic frame-by-frame pose & eye-blink evaluation synced to Remotion's useCurrentFrame().
 */
export const ITSupportCharacter: React.FC<ITSupportCharacterProps> = ({
  role = "it_support",
  animation = "idle",
  previousAnimation,
  transitionProgress,
  cues,
  speed = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  headYaw = 0,
  headPitch = 0,
  holdLaptop,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const timeSec = frame / fps;

  const rig = useMemo(() => buildCharacterRig(role), [role]);

  useEffect(() => {
    return () => {
      rig.dispose();
    };
  }, [rig]);

  const pose = evaluateCharacterPose(timeSec, {
    animation,
    previousAnimation,
    transitionProgress,
    cues,
    speed,
    headYaw,
    headPitch,
    holdLaptop,
  });

  applyITSupportPose(rig, pose, holdLaptop);

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <primitive object={rig.root} />
    </group>
  );
};

export const CharacterModel = ITSupportCharacter;
export const StickmanCharacter = ITSupportCharacter;
