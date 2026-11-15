import * as THREE from "three";
import type { ITSupportRig } from "./CharacterRig";
import {
  STICKMAN_ANIMATIONS,
  type EulerTuple,
  type StickmanAnimationName,
  type StickmanRigPose,
  type Vec3Tuple,
} from "./types";

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function lerpVec3(a: Vec3Tuple, b: Vec3Tuple, t: number): Vec3Tuple {
  return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
}

export function createNeutralPose(): StickmanRigPose {
  return {
    hipPosition: [0, 0, 0],
    hips: [0, 0, 0],
    spine: [0, 0, 0],
    chest: [0, 0, 0],
    neck: [0, 0, 0],
    head: [0, 0, 0],
    leftShoulder: [0, 0, 0],
    leftUpperArm: [-0.22, 0.14, -0.14],
    leftElbow: [-1.36, 0, 0],
    leftWrist: [0, 0, 0],
    rightShoulder: [0, 0, 0],
    rightUpperArm: [0.06, 0, -0.16],
    rightElbow: [-0.28, 0, 0],
    rightWrist: [0, 0, 0],
    leftHip: [0, 0, 0.03],
    leftKnee: [0.02, 0, 0],
    leftAnkle: [-0.02, 0, 0],
    rightHip: [0, 0, -0.03],
    rightKnee: [0.02, 0, 0],
    rightAnkle: [-0.02, 0, 0],
    leftEyeScale: [1, 1, 1],
    rightEyeScale: [1, 1, 1],
    leftBrowOffsetY: 0,
    rightBrowOffsetY: 0,
    leftBrowTilt: 0,
    rightBrowTilt: 0,
    pupilOffset: [0, 0],
    blinkAmount: 0,
    holdLaptop: true,
    alertFactor: 0,
  };
}

/**
 * Computes deterministic animation pose for the IT Support Specialist at time `timeSec`.
 * Preserves confident laptop-cradling posture on idle/explaining/presenting poses while
 * stowing the laptop automatically during two-handed animations (typing/celebrating/running/panicking).
 */
export function evaluateAnimationPose(
  animation: StickmanAnimationName,
  timeSec: number,
): StickmanRigPose {
  const p = createNeutralPose();

  switch (animation) {
    case "idle": {
      // Confident modern specialist standing & cradling open laptop in left hand
      const breath = Math.sin(timeSec * 2.2);
      const sway = Math.sin(timeSec * 1.15);
      p.hipPosition = [0, breath * 0.008, 0];
      p.hips = [0, -0.12 + sway * 0.03, 0];
      p.spine = [0.02, 0.06, sway * 0.015];
      p.chest = [breath * 0.018, 0.05, 0];
      p.head = [breath * 0.025, 0.04 + Math.sin(timeSec * 0.9) * 0.05, sway * 0.025];
      // Left arm smoothly cradles open laptop cleanly in front of left torso
      p.leftUpperArm = [-0.24, 0.2, -0.18];
      p.leftElbow = [-1.42 + breath * 0.03, 0, 0];
      p.leftWrist = [0.05, 0, 0];
      // Right arm relaxed confident stance clear of technician satchel
      p.rightUpperArm = [0.08 + breath * 0.03, 0, -0.26];
      p.rightElbow = [-0.36 + breath * 0.04, 0, -0.06];
      p.leftHip = [0, 0, 0.045];
      p.rightHip = [0, 0, -0.045];
      p.holdLaptop = true;
      break;
    }

    case "walking": {
      const freq = 5.4;
      const phase = timeSec * freq;
      const stride = Math.sin(phase);
      const bounce = Math.abs(Math.cos(phase));
      p.hipPosition = [0, bounce * 0.045 - 0.015, 0];
      p.hips = [0, stride * 0.07, 0];
      p.spine = [0.06, -stride * 0.05, 0];
      p.head = [-0.04, 0, 0];
      p.leftHip = [stride * 0.48, 0, 0.03];
      p.leftKnee = [Math.max(0.05, -stride * 0.65), 0, 0];
      p.leftAnkle = [-stride * 0.14, 0, 0];
      p.rightHip = [-stride * 0.48, 0, -0.03];
      p.rightKnee = [Math.max(0.05, stride * 0.65), 0, 0];
      p.rightAnkle = [stride * 0.14, 0, 0];
      // Carries laptop steady on left arm while right arm swings naturally
      p.leftUpperArm = [-0.24, 0.16, -0.16];
      p.leftElbow = [-1.4, 0, 0];
      p.rightUpperArm = [stride * 0.42, 0, -0.15];
      p.rightElbow = [-0.32 - Math.max(0, -stride * 0.25), 0, 0];
      p.holdLaptop = true;
      break;
    }

    case "running": {
      const freq = 10.2;
      const phase = timeSec * freq;
      const stride = Math.sin(phase);
      const bounce = Math.abs(Math.sin(phase * 2));
      p.hipPosition = [0, bounce * 0.08 - 0.03, 0];
      p.spine = [0.26, -stride * 0.1, 0];
      p.head = [-0.18, 0, 0];
      p.leftHip = [stride * 0.85, 0, 0.04];
      p.leftKnee = [Math.max(0.1, -stride * 1.15), 0, 0];
      p.rightHip = [-stride * 0.85, 0, -0.04];
      p.rightKnee = [Math.max(0.1, stride * 1.15), 0, 0];
      p.leftUpperArm = [-stride * 0.78, 0, 0.16];
      p.leftElbow = [-1.25, 0, 0];
      p.rightUpperArm = [stride * 0.78, 0, -0.16];
      p.rightElbow = [-1.25, 0, 0];
      p.leftBrowOffsetY = 0.008;
      p.rightBrowOffsetY = 0.008;
      p.holdLaptop = false;
      break;
    }

    case "sitting": {
      const sway = Math.sin(timeSec * 1.5) * 0.02;
      p.hipPosition = [0, -0.34, -0.04];
      p.spine = [-0.04, 0, 0];
      p.head = [0.05 + sway, Math.sin(timeSec * 0.9) * 0.08, 0];
      p.leftHip = [-1.42, 0, 0.06];
      p.leftKnee = [1.44, 0, 0];
      p.rightHip = [-1.42, 0, -0.06];
      p.rightKnee = [1.44, 0, 0];
      p.leftUpperArm = [-0.25, 0.16, -0.16];
      p.leftElbow = [-1.35, 0, 0];
      p.rightUpperArm = [-0.24, -0.1, -0.12];
      p.rightElbow = [-1.05, 0, 0];
      p.holdLaptop = true;
      break;
    }

    case "typing": {
      const tapL = Math.sin(timeSec * 18) * 0.14;
      const tapR = Math.cos(timeSec * 19.5) * 0.14;
      p.hipPosition = [0, -0.03, 0];
      p.spine = [0.18, 0, 0];
      p.head = [0.22, Math.sin(timeSec * 3) * 0.06, 0];
      p.leftUpperArm = [-0.72, 0.18, 0.14];
      p.leftElbow = [-1.1 + tapL, 0, 0];
      p.leftWrist = [tapL * 0.45, 0, 0];
      p.rightUpperArm = [-0.72, -0.18, -0.14];
      p.rightElbow = [-1.1 + tapR, 0, 0];
      p.rightWrist = [tapR * 0.45, 0, 0];
      p.pupilOffset = [Math.sin(timeSec * 4) * 0.004, -0.005];
      p.holdLaptop = false;
      break;
    }

    case "thinking": {
      const nod = Math.sin(timeSec * 2) * 0.03;
      p.hips = [0, -0.1, 0];
      p.spine = [0.03, 0.06, -0.03];
      p.head = [0.08 + nod, -0.12, 0.08];
      // Holds laptop on left hand while right hand rests thoughtfully near chin
      p.leftUpperArm = [-0.24, 0.18, -0.16];
      p.leftElbow = [-1.4, 0, 0];
      p.rightUpperArm = [-1.05, 0.25, -0.14];
      p.rightElbow = [-1.52, 0, 0];
      p.rightWrist = [0.18, 0, 0];
      p.leftBrowOffsetY = 0.007;
      p.rightBrowOffsetY = -0.004;
      p.rightBrowTilt = -0.14;
      p.pupilOffset = [0.004, 0.005];
      p.holdLaptop = true;
      break;
    }

    case "pointing": {
      const pulse = Math.sin(timeSec * 5) * 0.05;
      p.hips = [0, 0.16, 0];
      p.spine = [0.04, 0.08, 0];
      p.head = [-0.03, -0.14, 0];
      // Left cradles laptop, right arm points decisively toward workstation/HUD
      p.leftUpperArm = [-0.24, 0.18, -0.18];
      p.leftElbow = [-1.42, 0, 0];
      p.rightShoulder = [0, 0, -0.08];
      p.rightUpperArm = [-1.32 + pulse, -0.25, -0.32];
      p.rightElbow = [-0.15, 0, 0];
      p.leftBrowOffsetY = 0.006;
      p.rightBrowOffsetY = 0.006;
      p.pupilOffset = [-0.004, 0.002];
      p.holdLaptop = true;
      break;
    }

    case "explaining": {
      const gR = Math.sin(timeSec * 4.5);
      const bob = Math.sin(timeSec * 2.4);
      p.hipPosition = [0, Math.abs(bob) * 0.015, 0];
      p.hips = [0, -0.08, 0];
      p.spine = [0.02, bob * 0.05, 0];
      p.head = [bob * 0.04, Math.sin(timeSec * 1.8) * 0.08, bob * 0.03];
      // Holds laptop smoothly in left forearm while right hand explains expressively
      p.leftUpperArm = [-0.24, 0.2, -0.18];
      p.leftElbow = [-1.42, 0, 0];
      p.rightUpperArm = [-0.52 + gR * 0.22, -0.2, -0.26];
      p.rightElbow = [-1.05 - gR * 0.24, 0, 0];
      p.rightWrist = [0, -0.25, gR * 0.15];
      p.leftBrowOffsetY = 0.005;
      p.rightBrowOffsetY = 0.005;
      p.holdLaptop = true;
      break;
    }

    case "surprised": {
      const shake = Math.sin(timeSec * 14) * 0.02;
      p.hipPosition = [0, 0.055, -0.04];
      p.spine = [-0.16, 0, 0];
      p.head = [-0.16, shake, 0];
      // Laptop cradled tightly in left arm while right hand flies up in shock
      p.leftUpperArm = [-0.28, 0.2, -0.18];
      p.leftElbow = [-1.52, 0, 0];
      p.rightUpperArm = [-1.52, -0.28, -0.42];
      p.rightElbow = [-0.95, 0, 0];
      p.leftKnee = [0.16, 0, 0];
      p.rightKnee = [0.16, 0, 0];
      p.leftEyeScale = [1.2, 1.24, 1];
      p.rightEyeScale = [1.2, 1.24, 1];
      p.leftBrowOffsetY = 0.016;
      p.rightBrowOffsetY = 0.016;
      p.alertFactor = 1;
      p.holdLaptop = true;
      break;
    }

    case "confused": {
      const tilt = Math.sin(timeSec * 2.2) * 0.05;
      p.spine = [0.02, -0.08, 0.06];
      p.head = [0.04, 0.12, 0.22 + tilt];
      p.leftUpperArm = [-0.24, 0.18, -0.16];
      p.leftElbow = [-1.42, 0, 0];
      p.rightUpperArm = [-1.45, 0.28, -0.22];
      p.rightElbow = [-1.85, 0, 0];
      p.leftBrowOffsetY = 0.01;
      p.rightBrowOffsetY = -0.005;
      p.leftBrowTilt = 0.2;
      p.rightBrowTilt = -0.15;
      p.pupilOffset = [0.004, 0.004];
      p.holdLaptop = true;
      break;
    }

    case "panicking": {
      const waveL = Math.sin(timeSec * 14) * 0.35;
      const waveR = Math.cos(timeSec * 14) * 0.35;
      const hop = Math.abs(Math.sin(timeSec * 10)) * 0.04;
      p.hipPosition = [Math.sin(timeSec * 8) * 0.02, hop, 0];
      p.spine = [-0.08, Math.sin(timeSec * 11) * 0.1, 0];
      p.head = [-0.14, Math.sin(timeSec * 16) * 0.14, 0];
      p.leftUpperArm = [-2.2 + waveL, 0, 0.45];
      p.leftElbow = [-0.65, 0, 0];
      p.rightUpperArm = [-2.2 + waveR, 0, -0.45];
      p.rightElbow = [-0.65, 0, 0];
      p.leftEyeScale = [1.22, 1.24, 1];
      p.rightEyeScale = [1.22, 1.24, 1];
      p.leftBrowOffsetY = 0.016;
      p.rightBrowOffsetY = 0.016;
      p.leftBrowTilt = -0.22;
      p.rightBrowTilt = 0.22;
      p.alertFactor = 1;
      p.holdLaptop = false;
      break;
    }

    case "troubleshooting": {
      const scan = Math.sin(timeSec * 2.6);
      p.hips = [0, 0.1, 0];
      p.spine = [0.14, scan * 0.06, 0];
      p.head = [0.1, scan * 0.1, -0.05];
      p.leftUpperArm = [-0.3, 0.22, -0.16];
      p.leftElbow = [-1.42, 0, 0];
      p.rightUpperArm = [-0.88, -0.14, -0.12];
      p.rightElbow = [-1.08 + Math.sin(timeSec * 10) * 0.08, 0, 0];
      p.leftBrowTilt = -0.14;
      p.rightBrowTilt = 0.14;
      p.pupilOffset = [scan * 0.004, -0.003];
      p.holdLaptop = true;
      break;
    }

    case "celebrating": {
      const jump = Math.abs(Math.sin(timeSec * 7.2));
      const wiggle = Math.sin(timeSec * 7.2);
      p.hipPosition = [0, jump * 0.095, 0];
      p.hips = [0, wiggle * 0.1, wiggle * 0.05];
      p.spine = [-0.06, -wiggle * 0.08, 0];
      p.head = [-0.08, wiggle * 0.09, 0];
      p.leftHip = [-jump * 0.16, 0, 0.06];
      p.leftKnee = [jump * 0.3, 0, 0];
      p.rightHip = [-jump * 0.16, 0, -0.06];
      p.rightKnee = [jump * 0.3, 0, 0];
      p.leftUpperArm = [-2.35 + jump * 0.14, 0, 0.42];
      p.leftElbow = [-0.28, 0, 0];
      p.rightUpperArm = [-2.35 + jump * 0.14, 0, -0.42];
      p.rightElbow = [-0.28, 0, 0];
      p.leftEyeScale = [1.1, 1.12, 1];
      p.rightEyeScale = [1.1, 1.12, 1];
      p.leftBrowOffsetY = 0.012;
      p.rightBrowOffsetY = 0.012;
      p.leftBrowTilt = 0.15;
      p.rightBrowTilt = -0.15;
      p.holdLaptop = false;
      break;
    }

    case "facepalm": {
      const sigh = Math.sin(timeSec * 2.5);
      p.hipPosition = [0, -0.02 + sigh * 0.008, 0];
      p.hips = [0, 0.05, 0];
      p.spine = [0.1 + sigh * 0.03, 0, 0];
      p.neck = [0.12, 0, 0];
      p.head = [0.22 + sigh * 0.03, 0, Math.sin(timeSec * 4) * 0.05];
      // Holds laptop smoothly on left hand while right hand slaps forehead cleanly
      p.leftUpperArm = [-0.24, 0.18, -0.16];
      p.leftElbow = [-1.42, 0, 0];
      p.rightUpperArm = [-1.62, 0.34, -0.14];
      p.rightElbow = [-1.95, 0, 0];
      p.rightWrist = [0.2, 0, 0];
      p.leftEyeScale = [1.02, 0.62, 1];
      p.rightEyeScale = [1.02, 0.62, 1];
      p.leftBrowOffsetY = -0.008;
      p.rightBrowOffsetY = -0.008;
      p.leftBrowTilt = -0.2;
      p.rightBrowTilt = 0.2;
      p.alertFactor = 0.25;
      p.holdLaptop = true;
      break;
    }

    case "looking_at_screen": {
      const glance = Math.sin(timeSec * 1.9) * 0.05;
      p.hips = [0, 0.16, 0];
      p.spine = [0.12, 0.1, 0];
      p.head = [0.06, -0.22 + glance, 0];
      p.leftUpperArm = [-0.26, 0.18, -0.16];
      p.leftElbow = [-1.4, 0, 0];
      p.rightUpperArm = [-0.4, -0.12, -0.14];
      p.rightElbow = [-0.85, 0, 0];
      p.pupilOffset = [-0.005, 0.002];
      p.holdLaptop = true;
      break;
    }
  }

  return p;
}

export function blendStickmanPoses(
  fromPose: StickmanRigPose,
  toPose: StickmanRigPose,
  t: number,
): StickmanRigPose {
  const c = Math.max(0, Math.min(1, t));
  return {
    hipPosition: lerpVec3(fromPose.hipPosition, toPose.hipPosition, c),
    hips: lerpVec3(fromPose.hips, toPose.hips, c) as EulerTuple,
    spine: lerpVec3(fromPose.spine, toPose.spine, c) as EulerTuple,
    chest: lerpVec3(fromPose.chest, toPose.chest, c) as EulerTuple,
    neck: lerpVec3(fromPose.neck, toPose.neck, c) as EulerTuple,
    head: lerpVec3(fromPose.head, toPose.head, c) as EulerTuple,
    leftShoulder: lerpVec3(fromPose.leftShoulder, toPose.leftShoulder, c) as EulerTuple,
    leftUpperArm: lerpVec3(fromPose.leftUpperArm, toPose.leftUpperArm, c) as EulerTuple,
    leftElbow: lerpVec3(fromPose.leftElbow, toPose.leftElbow, c) as EulerTuple,
    leftWrist: lerpVec3(fromPose.leftWrist, toPose.leftWrist, c) as EulerTuple,
    rightShoulder: lerpVec3(fromPose.rightShoulder, toPose.rightShoulder, c) as EulerTuple,
    rightUpperArm: lerpVec3(fromPose.rightUpperArm, toPose.rightUpperArm, c) as EulerTuple,
    rightElbow: lerpVec3(fromPose.rightElbow, toPose.rightElbow, c) as EulerTuple,
    rightWrist: lerpVec3(fromPose.rightWrist, toPose.rightWrist, c) as EulerTuple,
    leftHip: lerpVec3(fromPose.leftHip, toPose.leftHip, c) as EulerTuple,
    leftKnee: lerpVec3(fromPose.leftKnee, toPose.leftKnee, c) as EulerTuple,
    leftAnkle: lerpVec3(fromPose.leftAnkle, toPose.leftAnkle, c) as EulerTuple,
    rightHip: lerpVec3(fromPose.rightHip, toPose.rightHip, c) as EulerTuple,
    rightKnee: lerpVec3(fromPose.rightKnee, toPose.rightKnee, c) as EulerTuple,
    rightAnkle: lerpVec3(fromPose.rightAnkle, toPose.rightAnkle, c) as EulerTuple,
    leftEyeScale: lerpVec3(fromPose.leftEyeScale, toPose.leftEyeScale, c),
    rightEyeScale: lerpVec3(fromPose.rightEyeScale, toPose.rightEyeScale, c),
    leftBrowOffsetY: lerp(fromPose.leftBrowOffsetY, toPose.leftBrowOffsetY, c),
    rightBrowOffsetY: lerp(fromPose.rightBrowOffsetY, toPose.rightBrowOffsetY, c),
    leftBrowTilt: lerp(fromPose.leftBrowTilt, toPose.leftBrowTilt, c),
    rightBrowTilt: lerp(fromPose.rightBrowTilt, toPose.rightBrowTilt, c),
    pupilOffset: [
      lerp(fromPose.pupilOffset[0], toPose.pupilOffset[0], c),
      lerp(fromPose.pupilOffset[1], toPose.pupilOffset[1], c),
    ],
    blinkAmount: lerp(fromPose.blinkAmount, toPose.blinkAmount, c),
    holdLaptop: c >= 0.5 ? toPose.holdLaptop : fromPose.holdLaptop,
    alertFactor: lerp(fromPose.alertFactor, toPose.alertFactor, c),
  };
}

/**
 * Generates Three.js AnimationClips for all 15 named animations for GLB export.
 */
export function buildAllStickmanAnimationClips(
  rig: ITSupportRig,
  fps: number = 15,
  durationSec: number = 2.0,
): THREE.AnimationClip[] {
  const joints: Array<{
    key: keyof Omit<
      StickmanRigPose,
      | "hipPosition"
      | "leftEyeScale"
      | "rightEyeScale"
      | "leftBrowOffsetY"
      | "rightBrowOffsetY"
      | "leftBrowTilt"
      | "rightBrowTilt"
      | "pupilOffset"
      | "blinkAmount"
      | "holdLaptop"
      | "alertFactor"
    >;
    node: THREE.Object3D;
  }> = [
    { key: "hips", node: rig.hips },
    { key: "spine", node: rig.spine },
    { key: "chest", node: rig.chest },
    { key: "neck", node: rig.neck },
    { key: "head", node: rig.head },
    { key: "leftShoulder", node: rig.leftShoulder },
    { key: "leftUpperArm", node: rig.leftUpperArm },
    { key: "leftElbow", node: rig.leftElbow },
    { key: "leftWrist", node: rig.leftWrist },
    { key: "rightShoulder", node: rig.rightShoulder },
    { key: "rightUpperArm", node: rig.rightUpperArm },
    { key: "rightElbow", node: rig.rightElbow },
    { key: "rightWrist", node: rig.rightWrist },
    { key: "leftHip", node: rig.leftHip },
    { key: "leftKnee", node: rig.leftKnee },
    { key: "leftAnkle", node: rig.leftAnkle },
    { key: "rightHip", node: rig.rightHip },
    { key: "rightKnee", node: rig.rightKnee },
    { key: "rightAnkle", node: rig.rightAnkle },
  ];

  const totalSamples = Math.max(2, Math.floor(fps * durationSec) + 1);
  const times: number[] = [];
  for (let i = 0; i < totalSamples; i++) {
    times.push((i / (totalSamples - 1)) * durationSec);
  }

  const euler = new THREE.Euler();
  const quat = new THREE.Quaternion();

  return STICKMAN_ANIMATIONS.map((animName) => {
    const tracks: THREE.KeyframeTrack[] = [];
    const poses = times.map((t) => evaluateAnimationPose(animName, t));

    const hipPosValues: number[] = [];
    for (const p of poses) {
      hipPosValues.push(
        p.hipPosition[0],
        0.84 + p.hipPosition[1],
        p.hipPosition[2],
      );
    }
    tracks.push(
      new THREE.VectorKeyframeTrack("Hips.position", times, hipPosValues),
    );

    for (const j of joints) {
      const quatValues: number[] = [];
      for (const p of poses) {
        const rot = p[j.key];
        euler.set(rot[0], rot[1], rot[2], "XYZ");
        quat.setFromEuler(euler);
        quatValues.push(quat.x, quat.y, quat.z, quat.w);
      }
      tracks.push(
        new THREE.QuaternionKeyframeTrack(
          `${j.node.name}.quaternion`,
          times,
          quatValues,
        ),
      );
    }

    return new THREE.AnimationClip(animName, durationSec, tracks);
  });
}
