import * as THREE from "three";
import {
  createCharacterMaterials,
  type ITSupportMaterialSet,
} from "./CharacterMaterials";
import {
  buildHeadAndFace,
  HEAD_CENTER_Y,
} from "./parts/HeadAndFace";
import { buildHeadsetAndGlasses } from "./parts/HeadsetAndGlasses";
import {
  buildHoodieBodyAndArms,
  TORSO_METRICS,
} from "./parts/HoodieBodyAndArms";
import {
  buildCargoLegsAndSneakers,
  LEG_METRICS,
} from "./parts/CargoLegsAndSneakers";
import { buildTechAccessories } from "./parts/TechAccessories";
import {
  CHARACTER_PRESETS,
  type CharacterRoleId,
  type StickmanRigPose,
} from "./types";

export interface ITSupportRig {
  root: THREE.Group;
  hips: THREE.Group;
  spine: THREE.Group;
  chest: THREE.Group;
  neck: THREE.Group;
  head: THREE.Group;
  leftShoulder: THREE.Group;
  leftUpperArm: THREE.Group;
  leftElbow: THREE.Group;
  leftLowerArm: THREE.Group;
  leftWrist: THREE.Group;
  rightShoulder: THREE.Group;
  rightUpperArm: THREE.Group;
  rightElbow: THREE.Group;
  rightLowerArm: THREE.Group;
  rightWrist: THREE.Group;
  leftHip: THREE.Group;
  leftKnee: THREE.Group;
  leftAnkle: THREE.Group;
  rightHip: THREE.Group;
  rightKnee: THREE.Group;
  rightAnkle: THREE.Group;
  leftEyeGroup: THREE.Group;
  rightEyeGroup: THREE.Group;
  leftPupilGroup: THREE.Group;
  rightPupilGroup: THREE.Group;
  leftBrow: THREE.Mesh;
  rightBrow: THREE.Mesh;
  laptopMount: THREE.Group;
  bagGroup: THREE.Group;
  materials: ITSupportMaterialSet;
  dispose: () => void;
}

export type StickmanRig = ITSupportRig;

export const STICKMAN_METRICS = {
  hipHeight: LEG_METRICS.hipHeight,
  upperLegLength: LEG_METRICS.upperLegLength,
  lowerLegLength: LEG_METRICS.lowerLegLength,
  footHeight: LEG_METRICS.footHeight,
  upperArmLength: TORSO_METRICS.upperArmLength,
  lowerArmLength: TORSO_METRICS.lowerArmLength,
  headRadius: 0.162,
  totalStandingHeight: 1.82,
} as const;

function enableShadows(obj: THREE.Object3D) {
  obj.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      // Keep thin translucent glasses lenses clean without casting murky shadows on eyes
      const isLens = child.material && (child.material as THREE.Material).name === "GlassesClearLens";
      child.castShadow = !isLens;
      child.receiveShadow = !isLens;
    }
  });
}

/**
 * Assembles any modular 3D office character rig (`it_support`, `office_worker`, `manager`, `finance_staff`)
 * using the shared 19-bone skeleton and pure Three.js PBR primitives.
 */
export function buildCharacterRig(
  role: CharacterRoleId = "it_support",
): ITSupportRig {
  const preset = CHARACTER_PRESETS[role];
  const materials = createCharacterMaterials(role);
  const geometries: THREE.BufferGeometry[] = [];

  const root = new THREE.Group();
  root.name = `CharacterRoot_${role}`;

  // 1. Trousers & Footwear
  const legs = buildCargoLegsAndSneakers(root, materials, geometries, {
    hasCargoPockets: preset.hasCargoPockets,
    dressLoafers: preset.dressLoafers,
  });

  // 2. Role Attire Torso, Arms & Chest ID Badge
  const upperBody = buildHoodieBodyAndArms(legs.hips, materials, geometries, {
    outfitStyle: preset.outfitStyle,
  });

  // 3. Stylized Cartoon Head, Role Hairdo, Smile, & Blinking Eyes
  const face = buildHeadAndFace(upperBody.chest, materials, geometries, {
    hairStyle: preset.hairStyle,
    hasEarrings: preset.hasEarrings,
  });

  // 4. Glasses & Optional Boom-Mic Headset
  buildHeadsetAndGlasses(face.head, materials, geometries, {
    hasHeadset: preset.hasHeadset,
    glassesStyle: preset.glassesStyle,
  });

  // 5. Role Satchel/Tools & Wrist-Mounted Prop
  const gear = buildTechAccessories(
    upperBody.chest,
    legs.hips,
    upperBody.leftArm.wrist,
    materials,
    geometries,
    {
      hasToolSatchel: preset.hasToolSatchel,
      handheldProp: preset.handheldProp,
    },
  );

  enableShadows(root);

  return {
    root,
    hips: legs.hips,
    spine: upperBody.spine,
    chest: upperBody.chest,
    neck: face.neck,
    head: face.head,
    leftShoulder: upperBody.leftArm.shoulder,
    leftUpperArm: upperBody.leftArm.upperArm,
    leftElbow: upperBody.leftArm.elbow,
    leftLowerArm: upperBody.leftArm.lowerArm,
    leftWrist: upperBody.leftArm.wrist,
    rightShoulder: upperBody.rightArm.shoulder,
    rightUpperArm: upperBody.rightArm.upperArm,
    rightElbow: upperBody.rightArm.elbow,
    rightLowerArm: upperBody.rightArm.lowerArm,
    rightWrist: upperBody.rightArm.wrist,
    leftHip: legs.leftLeg.hip,
    leftKnee: legs.leftLeg.knee,
    leftAnkle: legs.leftLeg.ankle,
    rightHip: legs.rightLeg.hip,
    rightKnee: legs.rightLeg.knee,
    rightAnkle: legs.rightLeg.ankle,
    leftEyeGroup: face.leftEyeGroup,
    rightEyeGroup: face.rightEyeGroup,
    leftPupilGroup: face.leftPupilGroup,
    rightPupilGroup: face.rightPupilGroup,
    leftBrow: face.leftBrow,
    rightBrow: face.rightBrow,
    laptopMount: gear.laptopMount,
    bagGroup: gear.bagGroup,
    materials,
    dispose: () => {
      for (const geo of geometries) geo.dispose();
      const disposedMats = new Set<THREE.Material>();
      Object.values(materials).forEach((m) => {
        if (!m || disposedMats.has(m)) return;
        disposedMats.add(m);
        if (m.map) m.map.dispose();
        if (m.emissiveMap && m.emissiveMap !== m.map) m.emissiveMap.dispose();
        m.dispose();
      });
    },
  };
}

export const buildITSupportRig = () => buildCharacterRig("it_support");
export const buildStickmanRig = buildITSupportRig;

export function applyITSupportPose(
  rig: ITSupportRig,
  pose: StickmanRigPose,
  holdLaptopOverride?: boolean,
) {
  rig.hips.position.set(
    pose.hipPosition[0],
    LEG_METRICS.hipHeight + pose.hipPosition[1],
    pose.hipPosition[2],
  );
  rig.hips.rotation.set(...pose.hips);
  rig.spine.rotation.set(...pose.spine);
  rig.chest.rotation.set(...pose.chest);
  rig.neck.rotation.set(...pose.neck);
  rig.head.rotation.set(...pose.head);

  rig.leftShoulder.rotation.set(...pose.leftShoulder);
  rig.leftUpperArm.rotation.set(...pose.leftUpperArm);
  rig.leftElbow.rotation.set(...pose.leftElbow);
  rig.leftWrist.rotation.set(...pose.leftWrist);

  rig.rightShoulder.rotation.set(...pose.rightShoulder);
  rig.rightUpperArm.rotation.set(...pose.rightUpperArm);
  rig.rightElbow.rotation.set(...pose.rightElbow);
  rig.rightWrist.rotation.set(...pose.rightWrist);

  rig.leftHip.rotation.set(...pose.leftHip);
  rig.leftKnee.rotation.set(...pose.leftKnee);
  rig.leftAnkle.rotation.set(...pose.leftAnkle);

  rig.rightHip.rotation.set(...pose.rightHip);
  rig.rightKnee.rotation.set(...pose.rightKnee);
  rig.rightAnkle.rotation.set(...pose.rightAnkle);

  // Smooth blink scaling combined with emotional eye expression
  const blinkFactor = Math.max(0.06, 1 - pose.blinkAmount * 0.94);
  rig.leftEyeGroup.scale.set(
    pose.leftEyeScale[0],
    pose.leftEyeScale[1] * blinkFactor,
    pose.leftEyeScale[2],
  );
  rig.rightEyeGroup.scale.set(
    pose.rightEyeScale[0],
    pose.rightEyeScale[1] * blinkFactor,
    pose.rightEyeScale[2],
  );

  rig.leftPupilGroup.position.set(pose.pupilOffset[0], pose.pupilOffset[1], 0.011);
  rig.rightPupilGroup.position.set(pose.pupilOffset[0], pose.pupilOffset[1], 0.011);

  const browRestY = HEAD_CENTER_Y + 0.058;
  rig.leftBrow.position.y = browRestY + pose.leftBrowOffsetY;
  rig.rightBrow.position.y = browRestY + pose.rightBrowOffsetY;
  rig.leftBrow.rotation.z = Math.PI / 2 + pose.leftBrowTilt;
  rig.rightBrow.rotation.z = Math.PI / 2 + pose.rightBrowTilt;

  // Toggle laptop cleanly per animation/override
  rig.laptopMount.visible =
    holdLaptopOverride !== undefined ? holdLaptopOverride : pose.holdLaptop;
}

export const applyStickmanPose = applyITSupportPose;
