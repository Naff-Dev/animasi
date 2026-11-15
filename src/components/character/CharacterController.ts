import gsap from "gsap";
import { blendStickmanPoses, evaluateAnimationPose } from "./CharacterAnimations";
import type {
  CharacterAnimationCue,
  StickmanAnimationName,
  StickmanRigPose,
} from "./types";

export interface CharacterControllerOptions {
  animation: StickmanAnimationName;
  previousAnimation?: StickmanAnimationName;
  transitionProgress?: number;
  speed?: number;
  headYaw?: number;
  headPitch?: number;
  cues?: readonly CharacterAnimationCue[];
  holdLaptop?: boolean;
}

/**
 * Deterministic GSAP-backed transition easing curve for character pose blending.
 */
export function evaluateGsapEase(
  progress: number,
  easeName: string = "power2.inOut",
): number {
  const clamped = Math.max(0, Math.min(1, progress));
  const easeFn = gsap.parseEase(easeName);
  return easeFn ? easeFn(clamped) : clamped;
}

/**
 * Deterministic natural eye-blink cycle (smooth 0.16s blink every ~3.4s).
 * Returns 0 (open) to 1 (closed).
 */
export function evaluateEyeBlink(timeSec: number): number {
  const period = 3.4;
  const phase = ((timeSec % period) + period) % period;
  // Trigger natural quick blink around t = 1.6s in each cycle
  const blinkStart = 1.6;
  const blinkDuration = 0.16;
  if (phase >= blinkStart && phase <= blinkStart + blinkDuration) {
    const local = (phase - blinkStart) / blinkDuration;
    return Math.sin(local * Math.PI);
  }
  return 0;
}

/**
 * Evaluates a deterministic StickmanRigPose at any frame time (in seconds).
 * Supports single-animation playback, explicit two-state blending, multi-cue timelines,
 * and automatic eye blinking.
 */
export function evaluateCharacterPose(
  timeSec: number,
  options: CharacterControllerOptions,
): StickmanRigPose {
  const speed = options.speed ?? 1;
  const scaledTime = timeSec * speed;

  let pose: StickmanRigPose;

  if (options.cues && options.cues.length > 0) {
    const sorted = [...options.cues].sort((a, b) => a.fromSec - b.fromSec);
    let activeIdx = 0;
    for (let i = 0; i < sorted.length; i++) {
      if (timeSec >= sorted[i].fromSec) {
        activeIdx = i;
      }
    }

    const currentCue = sorted[activeIdx];
    const currentPose = evaluateAnimationPose(currentCue.animation, scaledTime);

    if (activeIdx > 0) {
      const prevCue = sorted[activeIdx - 1];
      const blendSec = currentCue.blendSec ?? 0.28;
      const elapsedSinceCue = timeSec - currentCue.fromSec;
      if (elapsedSinceCue < blendSec && blendSec > 0) {
        const prevPose = evaluateAnimationPose(prevCue.animation, scaledTime);
        const rawT = elapsedSinceCue / blendSec;
        const easedT = evaluateGsapEase(rawT, "power2.inOut");
        pose = blendStickmanPoses(prevPose, currentPose, easedT);
      } else {
        pose = currentPose;
      }
    } else {
      pose = currentPose;
    }
  } else if (
    options.previousAnimation &&
    options.transitionProgress !== undefined &&
    options.transitionProgress < 1
  ) {
    const prevPose = evaluateAnimationPose(options.previousAnimation, scaledTime);
    const nextPose = evaluateAnimationPose(options.animation, scaledTime);
    const easedT = evaluateGsapEase(options.transitionProgress, "power2.inOut");
    pose = blendStickmanPoses(prevPose, nextPose, easedT);
  } else {
    pose = evaluateAnimationPose(options.animation, scaledTime);
  }

  // Apply natural eye-blink unless already mid-shock/squint
  const naturalBlink = evaluateEyeBlink(timeSec);
  const effectiveBlink =
    pose.alertFactor > 0.7 ? 0 : Math.max(pose.blinkAmount, naturalBlink);

  const headYaw = options.headYaw ?? 0;
  const headPitch = options.headPitch ?? 0;
  return {
    ...pose,
    blinkAmount: effectiveBlink,
    holdLaptop:
      options.holdLaptop !== undefined ? options.holdLaptop : pose.holdLaptop,
    head: [pose.head[0] + headPitch, pose.head[1] + headYaw, pose.head[2]],
  };
}
