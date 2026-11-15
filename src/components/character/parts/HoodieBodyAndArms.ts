import * as THREE from "three";
import type { ITSupportMaterialSet } from "../CharacterMaterials";
import type { CharacterOutfitStyle } from "../types";

export interface BodyAndArmsOptions {
  outfitStyle?: CharacterOutfitStyle;
}

export interface ArmJointGroup {
  shoulder: THREE.Group;
  upperArm: THREE.Group;
  elbow: THREE.Group;
  lowerArm: THREE.Group;
  wrist: THREE.Group;
}

export interface HoodieBodyNodes {
  spine: THREE.Group;
  chest: THREE.Group;
  leftArm: ArmJointGroup;
  rightArm: ArmJointGroup;
}

export const TORSO_METRICS = {
  upperArmLength: 0.225,
  lowerArmLength: 0.205,
} as const;

function buildStylizedHand(
  isLeft: boolean,
  materials: ITSupportMaterialSet,
  geometries: THREE.BufferGeometry[],
): THREE.Group {
  const hand = new THREE.Group();
  hand.name = isLeft ? "LeftHandMesh" : "RightHandMesh";
  const side = isLeft ? 1 : -1;

  // Sculpted stylized cartoon palm
  const palmGeo = new THREE.BoxGeometry(0.054, 0.062, 0.032);
  geometries.push(palmGeo);
  const palm = new THREE.Mesh(palmGeo, materials.skin);
  palm.position.set(0, -0.034, 0.004);
  hand.add(palm);

  // Clean sculpted fingers mitt block
  const fingersGeo = new THREE.CapsuleGeometry(0.022, 0.026, 6, 12);
  geometries.push(fingersGeo);
  const fingers = new THREE.Mesh(fingersGeo, materials.skin);
  fingers.position.set(0, -0.072, 0.008);
  fingers.scale.set(1.15, 0.9, 0.68);
  hand.add(fingers);

  // Expressive thumb
  const thumbGeo = new THREE.CapsuleGeometry(0.013, 0.026, 6, 10);
  geometries.push(thumbGeo);
  const thumb = new THREE.Mesh(thumbGeo, materials.skin);
  thumb.position.set(side * -0.034, -0.028, 0.018);
  thumb.rotation.set(-0.3, 0, side * 0.55);
  hand.add(thumb);

  return hand;
}

/**
 * Builds the Navy Blue Hoodie torso with Cyan neon piping, folded rear hood,
 * drawstrings, crisp "IT SUPPORT" chest emblem on the chest, and articulated hoodie sleeves + hands.
 */
export function buildHoodieBodyAndArms(
  hips: THREE.Group,
  materials: ITSupportMaterialSet,
  geometries: THREE.BufferGeometry[],
  options: BodyAndArmsOptions = {},
): HoodieBodyNodes {
  const outfitStyle = options.outfitStyle ?? "tech_hoodie";
  const spine = new THREE.Group();
  spine.name = "Spine";
  spine.position.set(0, 0.055, 0);
  hips.add(spine);

  // Lower Hoodie Abdomen & Hem Ribbing
  const lowerTorsoGeo = new THREE.CapsuleGeometry(0.118, 0.14, 12, 24);
  const hemGeo = new THREE.CylinderGeometry(0.128, 0.132, 0.055, 22);
  geometries.push(lowerTorsoGeo, hemGeo);

  const lowerTorso = new THREE.Mesh(lowerTorsoGeo, materials.hoodieNavy);
  lowerTorso.position.set(0, 0.11, 0);
  lowerTorso.scale.set(1.14, 1.0, 0.88);
  spine.add(lowerTorso);

  const hem = new THREE.Mesh(hemGeo, materials.hoodieDeepNavy);
  hem.position.set(0, 0.015, 0);
  hem.scale.set(1.14, 1.0, 0.9);
  spine.add(hem);

  // Upper Chest Hoodie Structure
  const chest = new THREE.Group();
  chest.name = "Chest";
  chest.position.set(0, 0.165, 0);
  spine.add(chest);

  const upperTorsoGeo = new THREE.CapsuleGeometry(0.128, 0.16, 14, 24);
  geometries.push(upperTorsoGeo);
  const upperTorso = new THREE.Mesh(upperTorsoGeo, materials.hoodieNavy);
  upperTorso.position.set(0, 0.04, 0);
  upperTorso.scale.set(1.22, 1.0, 0.88);
  chest.add(upperTorso);

  // Outfit Front Detailing per Character Role (keeps torso dimensions & emblem placement consistent)
  const collarTrimGeo = new THREE.TorusGeometry(0.088, 0.018, 10, 24);
  geometries.push(collarTrimGeo);

  if (outfitStyle === "tech_hoodie") {
    const zipTrackGeo = new THREE.BoxGeometry(0.012, 0.34, 0.01);
    const zipCyanStripGeo = new THREE.BoxGeometry(0.005, 0.34, 0.012);
    const hoodBackGeo = new THREE.CapsuleGeometry(0.075, 0.12, 10, 16);
    const drawstringGeo = new THREE.CapsuleGeometry(0.0055, 0.095, 6, 10);
    const agletGeo = new THREE.CylinderGeometry(0.0065, 0.0065, 0.018, 10);
    const shoulderPipingGeo = new THREE.BoxGeometry(0.09, 0.01, 0.018);

    geometries.push(
      zipTrackGeo,
      zipCyanStripGeo,
      hoodBackGeo,
      drawstringGeo,
      agletGeo,
      shoulderPipingGeo,
    );

    const zipTrack = new THREE.Mesh(zipTrackGeo, materials.hoodieDeepNavy);
    zipTrack.position.set(0, -0.02, 0.114);
    chest.add(zipTrack);

    const zipGlow = new THREE.Mesh(zipCyanStripGeo, materials.cyanNeon);
    zipGlow.position.set(0, -0.02, 0.116);
    chest.add(zipGlow);

    const collar = new THREE.Mesh(collarTrimGeo, materials.hoodieDeepNavy);
    collar.rotation.x = Math.PI / 2 + 0.14;
    collar.position.set(0, 0.155, -0.008);
    chest.add(collar);

    const hoodFold = new THREE.Mesh(hoodBackGeo, materials.hoodieNavy);
    hoodFold.position.set(0, 0.115, -0.105);
    hoodFold.rotation.set(0.32, 0, Math.PI / 2);
    hoodFold.scale.set(0.85, 1.15, 0.72);
    chest.add(hoodFold);

    [-1, 1].forEach((side) => {
      const cord = new THREE.Mesh(drawstringGeo, materials.pureWhite);
      cord.position.set(side * 0.026, 0.095, 0.116);
      cord.rotation.z = side * -0.06;
      chest.add(cord);

      const aglet = new THREE.Mesh(agletGeo, materials.cyanNeon);
      aglet.position.set(side * 0.029, 0.042, 0.117);
      chest.add(aglet);

      const piping = new THREE.Mesh(shoulderPipingGeo, materials.cyanNeon);
      piping.position.set(side * 0.135, 0.155, 0.004);
      piping.rotation.z = side * -0.22;
      chest.add(piping);
    });
  } else if (outfitStyle === "polo_vest") {
    const collar = new THREE.Mesh(collarTrimGeo, materials.pureWhite);
    collar.rotation.x = Math.PI / 2 + 0.14;
    collar.position.set(0, 0.155, -0.004);
    chest.add(collar);

    const vNeckGeo = new THREE.BoxGeometry(0.068, 0.11, 0.014);
    const lanyardGeo = new THREE.BoxGeometry(0.016, 0.18, 0.012);
    geometries.push(vNeckGeo, lanyardGeo);

    const vNeck = new THREE.Mesh(vNeckGeo, materials.pureWhite);
    vNeck.position.set(0, 0.102, 0.112);
    chest.add(vNeck);

    const lanyard = new THREE.Mesh(lanyardGeo, materials.electricBlue);
    lanyard.position.set(-0.072, 0.125, 0.109);
    lanyard.rotation.z = 0.08;
    chest.add(lanyard);
  } else if (outfitStyle === "executive_blazer") {
    const collar = new THREE.Mesh(collarTrimGeo, materials.pureWhite);
    collar.rotation.x = Math.PI / 2 + 0.12;
    collar.position.set(0, 0.156, -0.004);
    chest.add(collar);

    const shirtFrontGeo = new THREE.BoxGeometry(0.068, 0.22, 0.014);
    const lapelGeo = new THREE.BoxGeometry(0.036, 0.23, 0.018);
    const tieGeo = new THREE.BoxGeometry(0.028, 0.2, 0.018);
    const pocketSquareGeo = new THREE.BoxGeometry(0.036, 0.018, 0.01);
    geometries.push(shirtFrontGeo, lapelGeo, tieGeo, pocketSquareGeo);

    const shirtFront = new THREE.Mesh(shirtFrontGeo, materials.pureWhite);
    shirtFront.position.set(0, 0.045, 0.11);
    chest.add(shirtFront);

    [-1, 1].forEach((side) => {
      const lapel = new THREE.Mesh(lapelGeo, materials.hoodieDeepNavy);
      lapel.position.set(side * 0.044, 0.042, 0.112);
      lapel.rotation.z = side * -0.18;
      chest.add(lapel);
    });

    const tie = new THREE.Mesh(tieGeo, materials.electricBlue);
    tie.position.set(0, 0.048, 0.116);
    chest.add(tie);

    const pocketSq = new THREE.Mesh(pocketSquareGeo, materials.pureWhite);
    pocketSq.position.set(0.088, 0.078, 0.112);
    pocketSq.rotation.z = 0.12;
    chest.add(pocketSq);
  } else {
    // Knit sweater with crisp Peter Pan white collar + center buttons + lanyard strap
    const collar = new THREE.Mesh(collarTrimGeo, materials.pureWhite);
    collar.rotation.x = Math.PI / 2 + 0.14;
    collar.position.set(0, 0.156, -0.002);
    chest.add(collar);

    const placketGeo = new THREE.BoxGeometry(0.026, 0.31, 0.01);
    const buttonGeo = new THREE.SphereGeometry(0.0085, 10, 8);
    const lanyardGeo = new THREE.BoxGeometry(0.015, 0.16, 0.01);
    geometries.push(placketGeo, buttonGeo, lanyardGeo);

    const placket = new THREE.Mesh(placketGeo, materials.hoodieDeepNavy);
    placket.position.set(0, -0.01, 0.114);
    chest.add(placket);

    [-0.08, -0.015, 0.05, 0.11].forEach((by) => {
      const btn = new THREE.Mesh(buttonGeo, materials.pureWhite);
      btn.position.set(0, by, 0.12);
      chest.add(btn);
    });

    const lanyard = new THREE.Mesh(lanyardGeo, materials.hoodieDeepNavy);
    lanyard.position.set(-0.072, 0.125, 0.109);
    chest.add(lanyard);
  }

  // Prominent Readable Role Emblem / ID Badge on Right Chest (-X)
  const logoFrameGeo = new THREE.BoxGeometry(0.088, 0.036, 0.008);
  const logoFaceGeo = new THREE.PlaneGeometry(0.084, 0.032);
  geometries.push(logoFrameGeo, logoFaceGeo);

  const logoGroup = new THREE.Group();
  logoGroup.name = "CharacterChestBadge";
  logoGroup.position.set(-0.072, 0.082, 0.114);
  logoGroup.rotation.y = -0.22;

  const logoBacking = new THREE.Mesh(logoFrameGeo, materials.hoodieDeepNavy);
  logoGroup.add(logoBacking);

  const logoPlate = new THREE.Mesh(logoFaceGeo, materials.chestLogo);
  logoPlate.position.set(0, 0, 0.0046);
  logoGroup.add(logoPlate);
  chest.add(logoGroup);

  // Articulated Hoodie Sleeves & Hands (Left = +X, Right = -X)
  function buildArm(isLeft: boolean): ArmJointGroup {
    const side = isLeft ? 1 : -1;
    const prefix = isLeft ? "Left" : "Right";

    const shoulder = new THREE.Group();
    shoulder.name = `${prefix}Shoulder`;
    shoulder.position.set(side * 0.178, 0.128, 0);
    chest.add(shoulder);

    const shoulderCapGeo = new THREE.SphereGeometry(0.056, 18, 14);
    geometries.push(shoulderCapGeo);
    const shoulderCap = new THREE.Mesh(shoulderCapGeo, materials.hoodieNavy);
    shoulder.add(shoulderCap);

    const upperArm = new THREE.Group();
    upperArm.name = `${prefix}UpperArm`;
    shoulder.add(upperArm);

    const upperGeo = new THREE.CylinderGeometry(
      0.05,
      0.044,
      TORSO_METRICS.upperArmLength,
      18,
    );
    geometries.push(upperGeo);
    const upperMesh = new THREE.Mesh(upperGeo, materials.hoodieNavy);
    upperMesh.position.set(0, -TORSO_METRICS.upperArmLength / 2, 0);
    upperArm.add(upperMesh);

    const elbow = new THREE.Group();
    elbow.name = `${prefix}Elbow`;
    elbow.position.set(0, -TORSO_METRICS.upperArmLength, 0);
    upperArm.add(elbow);

    const elbowCapGeo = new THREE.SphereGeometry(0.044, 14, 12);
    geometries.push(elbowCapGeo);
    const elbowCap = new THREE.Mesh(elbowCapGeo, materials.hoodieNavy);
    elbow.add(elbowCap);

    const lowerArm = new THREE.Group();
    lowerArm.name = `${prefix}LowerArm`;
    elbow.add(lowerArm);

    const lowerGeo = new THREE.CylinderGeometry(
      0.043,
      0.036,
      TORSO_METRICS.lowerArmLength,
      18,
    );
    const cuffGeo = new THREE.CylinderGeometry(0.038, 0.034, 0.042, 16);
    const cuffCyanGeo = new THREE.TorusGeometry(0.037, 0.0045, 8, 20);
    geometries.push(lowerGeo, cuffGeo, cuffCyanGeo);

    const lowerMesh = new THREE.Mesh(lowerGeo, materials.hoodieNavy);
    lowerMesh.position.set(0, -TORSO_METRICS.lowerArmLength / 2, 0);
    lowerArm.add(lowerMesh);

    const cuff = new THREE.Mesh(cuffGeo, materials.hoodieDeepNavy);
    cuff.position.set(0, -TORSO_METRICS.lowerArmLength + 0.022, 0);
    lowerArm.add(cuff);

    const cuffGlow = new THREE.Mesh(cuffCyanGeo, materials.cyanNeon);
    cuffGlow.rotation.x = Math.PI / 2;
    cuffGlow.position.set(0, -TORSO_METRICS.lowerArmLength + 0.042, 0);
    lowerArm.add(cuffGlow);

    const wrist = new THREE.Group();
    wrist.name = `${prefix}Wrist`;
    wrist.position.set(0, -TORSO_METRICS.lowerArmLength, 0);
    lowerArm.add(wrist);

    const hand = buildStylizedHand(isLeft, materials, geometries);
    wrist.add(hand);

    return { shoulder, upperArm, elbow, lowerArm, wrist };
  }

  return {
    spine,
    chest,
    leftArm: buildArm(true),
    rightArm: buildArm(false),
  };
}

