import React from "react";
import { useThree } from "@react-three/fiber";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import gsap from "gsap";

export interface CameraKeyframe {
  timeSec: number;
  position: [number, number, number];
  lookAt: [number, number, number];
  ease?: string;
}

export interface CameraRigProps {
  keyframes: readonly CameraKeyframe[];
  shakeAmplitude?: number;
  shakeStartSec?: number;
  shakeDurationSec?: number;
}

/**
 * Deterministic frame-synced 3D camera controller using GSAP easing curves
 * and Remotion's useCurrentFrame() (never R3F's useFrame).
 */
export const CameraRig: React.FC<CameraRigProps> = ({
  keyframes,
  shakeAmplitude = 0,
  shakeStartSec = 0,
  shakeDurationSec = 0.4,
}) => {
  const { camera } = useThree();
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const timeSec = frame / fps;

  if (keyframes.length === 0) return null;

  let pos: [number, number, number] = [...keyframes[0].position];
  let target: [number, number, number] = [...keyframes[0].lookAt];

  if (keyframes.length >= 2) {
    let segIdx = 0;
    for (let i = 0; i < keyframes.length - 1; i++) {
      if (timeSec >= keyframes[i].timeSec) {
        segIdx = i;
      }
    }
    const a = keyframes[segIdx];
    const b = keyframes[Math.min(segIdx + 1, keyframes.length - 1)];

    if (b.timeSec > a.timeSec) {
      const rawT = interpolate(timeSec, [a.timeSec, b.timeSec], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      const easeFn = gsap.parseEase(b.ease ?? "power2.inOut");
      const t = easeFn ? easeFn(rawT) : rawT;

      pos = [
        a.position[0] + (b.position[0] - a.position[0]) * t,
        a.position[1] + (b.position[1] - a.position[1]) * t,
        a.position[2] + (b.position[2] - a.position[2]) * t,
      ];
      target = [
        a.lookAt[0] + (b.lookAt[0] - a.lookAt[0]) * t,
        a.lookAt[1] + (b.lookAt[1] - a.lookAt[1]) * t,
        a.lookAt[2] + (b.lookAt[2] - a.lookAt[2]) * t,
      ];
    } else {
      pos = [...b.position];
      target = [...b.lookAt];
    }
  }

  // Deterministic micro-shake for comedic shock or impact
  if (
    shakeAmplitude > 0 &&
    timeSec >= shakeStartSec &&
    timeSec <= shakeStartSec + shakeDurationSec
  ) {
    const p = (timeSec - shakeStartSec) / shakeDurationSec;
    const decay = 1 - p;
    pos[0] += Math.sin(timeSec * 58) * shakeAmplitude * decay;
    pos[1] += Math.cos(timeSec * 47) * shakeAmplitude * 0.7 * decay;
  }

  camera.position.set(pos[0], pos[1], pos[2]);
  camera.lookAt(target[0], target[1], target[2]);
  camera.updateMatrixWorld();

  return null;
};

