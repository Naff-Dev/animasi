import * as THREE from "three";
import type { ITSupportMaterialSet } from "../CharacterMaterials";

export interface LegJointGroup {
  hip: THREE.Group;
  knee: THREE.Group;
  ankle: THREE.Group;
}

export interface CargoLegsNodes {
  hips: THREE.Group;
  leftLeg: LegJointGroup;
  rightLeg: LegJointGroup;
}

export const LEG_METRICS = {
  hipHeight: 0.84,
  upperLegLength: 0.36,
  lowerLegLength: 0.36,
  footHeight: 0.1,
} as const;

export interface LegsAndShoesOptions {
  hasCargoPockets?: boolean;
  dressLoafers?: boolean;
}

function buildFootwear(
  isLeft: boolean,
  materials: ITSupportMaterialSet,
  geometries: THREE.BufferGeometry[],
  dressLoafers: boolean,
): THREE.Group {
  const foot = new THREE.Group();
  foot.name = isLeft ? "LeftFootwear" : "RightFootwear";

  if (dressLoafers) {
    const soleGeo = new THREE.BoxGeometry(0.11, 0.026, 0.23);
    const upperGeo = new THREE.CapsuleGeometry(0.052, 0.118, 10, 18);
    const strapGeo = new THREE.BoxGeometry(0.108, 0.016, 0.028);
    const buckleGeo = new THREE.BoxGeometry(0.034, 0.012, 0.014);
    geometries.push(soleGeo, upperGeo, strapGeo, buckleGeo);

    const sole = new THREE.Mesh(soleGeo, materials.headsetDark);
    sole.position.set(0, -0.085, 0.042);
    foot.add(sole);

    const upper = new THREE.Mesh(upperGeo, materials.cargoBlack);
    upper.rotation.x = Math.PI / 2;
    upper.position.set(0, -0.052, 0.044);
    upper.scale.set(0.98, 1.0, 0.78);
    foot.add(upper);

    const strap = new THREE.Mesh(strapGeo, materials.electricBlue);
    strap.position.set(0, -0.03, 0.045);
    foot.add(strap);

    const buckle = new THREE.Mesh(buckleGeo, materials.chromeSteel);
    buckle.position.set(0, -0.028, 0.06);
    foot.add(buckle);
    return foot;
  }

  // Crisp White Sculpted Athletic Midsole + Accent Heel
  const midsoleGeo = new THREE.BoxGeometry(0.118, 0.042, 0.235);
  const cyanRimGeo = new THREE.BoxGeometry(0.123, 0.01, 0.228);
  const upperGeo = new THREE.CapsuleGeometry(0.056, 0.115, 10, 18);
  const tongueGeo = new THREE.BoxGeometry(0.072, 0.058, 0.036);
  const heelCageGeo = new THREE.BoxGeometry(0.112, 0.054, 0.078);
  const sideBladeGeo = new THREE.BoxGeometry(0.122, 0.014, 0.11);

  geometries.push(
    midsoleGeo,
    cyanRimGeo,
    upperGeo,
    tongueGeo,
    heelCageGeo,
    sideBladeGeo,
  );

  const midsole = new THREE.Mesh(midsoleGeo, materials.pureWhite);
  midsole.position.set(0, -0.078, 0.042);
  foot.add(midsole);

  const cyanStrip = new THREE.Mesh(cyanRimGeo, materials.cyanNeon);
  cyanStrip.position.set(0, -0.068, 0.042);
  foot.add(cyanStrip);

  const upper = new THREE.Mesh(upperGeo, materials.cargoBlack);
  upper.rotation.x = Math.PI / 2;
  upper.position.set(0, -0.038, 0.044);
  upper.scale.set(1.04, 1.0, 0.86);
  foot.add(upper);

  const heelCage = new THREE.Mesh(heelCageGeo, materials.electricBlue);
  heelCage.position.set(0, -0.036, -0.028);
  foot.add(heelCage);

  const tongue = new THREE.Mesh(tongueGeo, materials.electricBlue);
  tongue.position.set(0, -0.01, 0.035);
  tongue.rotation.x = -0.35;
  foot.add(tongue);

  const sideWing = new THREE.Mesh(sideBladeGeo, materials.pureWhite);
  sideWing.position.set(0, -0.04, 0.025);
  sideWing.rotation.x = -0.14;
  foot.add(sideWing);

  return foot;
}

/**
 * Builds the Pelvis Belt, Trousers (with optional cargo pockets), and Footwear.
 */
export function buildCargoLegsAndSneakers(
  root: THREE.Group,
  materials: ITSupportMaterialSet,
  geometries: THREE.BufferGeometry[],
  options: LegsAndShoesOptions = {},
): CargoLegsNodes {
  const hasCargoPockets = options.hasCargoPockets ?? true;
  const dressLoafers = options.dressLoafers ?? false;
  const hips = new THREE.Group();
  hips.name = "Hips";
  hips.position.set(0, LEG_METRICS.hipHeight, 0);
  root.add(hips);

  // Cargo Waist Pelvis
  const pelvisGeo = new THREE.CylinderGeometry(0.132, 0.144, 0.115, 22);
  const beltGeo = new THREE.CylinderGeometry(0.136, 0.138, 0.04, 22);
  const buckleGeo = new THREE.BoxGeometry(0.062, 0.044, 0.024);
  const buckleGlowGeo = new THREE.BoxGeometry(0.036, 0.016, 0.026);
  geometries.push(pelvisGeo, beltGeo, buckleGeo, buckleGlowGeo);

  const pelvis = new THREE.Mesh(pelvisGeo, materials.cargoBlack);
  pelvis.scale.set(1.1, 1.0, 0.86);
  hips.add(pelvis);

  const belt = new THREE.Mesh(beltGeo, materials.headsetDark);
  belt.position.set(0, 0.042, 0);
  belt.scale.set(1.12, 1.0, 0.88);
  hips.add(belt);

  const buckle = new THREE.Mesh(buckleGeo, materials.chromeSteel);
  buckle.position.set(0, 0.042, 0.116);
  hips.add(buckle);

  const buckleGlow = new THREE.Mesh(buckleGlowGeo, materials.cyanNeon);
  buckleGlow.position.set(0, 0.042, 0.118);
  hips.add(buckleGlow);

  function buildLeg(isLeft: boolean): LegJointGroup {
    const side = isLeft ? 1 : -1;
    const prefix = isLeft ? "Left" : "Right";

    const hip = new THREE.Group();
    hip.name = `${prefix}Hip`;
    hip.position.set(side * 0.092, -0.02, 0);
    hips.add(hip);

    const thighJointGeo = new THREE.SphereGeometry(0.068, 16, 12);
    const thighGeo = new THREE.CylinderGeometry(
      0.072,
      0.06,
      LEG_METRICS.upperLegLength,
      18,
    );
    // 3D Cargo Side Pocket + Flap + Cyan Snap Button
    const pocketGeo = new THREE.BoxGeometry(0.034, 0.13, 0.095);
    const pocketFlapGeo = new THREE.BoxGeometry(0.038, 0.032, 0.1);
    const pocketTagGeo = new THREE.BoxGeometry(0.01, 0.018, 0.028);

    geometries.push(thighJointGeo, thighGeo, pocketGeo, pocketFlapGeo, pocketTagGeo);

    const thighCap = new THREE.Mesh(thighJointGeo, materials.cargoBlack);
    hip.add(thighCap);

    const thigh = new THREE.Mesh(thighGeo, materials.cargoBlack);
    thigh.position.set(0, -LEG_METRICS.upperLegLength / 2, 0);
    hip.add(thigh);

    if (hasCargoPockets) {
      const pocket = new THREE.Mesh(pocketGeo, materials.cargoPocket);
      pocket.position.set(side * 0.068, -0.175, 0.006);
      hip.add(pocket);

      const pocketFlap = new THREE.Mesh(pocketFlapGeo, materials.cargoBlack);
      pocketFlap.position.set(side * 0.07, -0.115, 0.006);
      hip.add(pocketFlap);

      const pocketTag = new THREE.Mesh(pocketTagGeo, materials.cyanNeon);
      pocketTag.position.set(side * 0.088, -0.125, 0.02);
      hip.add(pocketTag);
    }

    // Knee
    const knee = new THREE.Group();
    knee.name = `${prefix}Knee`;
    knee.position.set(0, -LEG_METRICS.upperLegLength, 0);
    hip.add(knee);

    const kneeCapGeo = new THREE.SphereGeometry(0.056, 14, 12);
    const shinGeo = new THREE.CylinderGeometry(
      0.058,
      0.048,
      LEG_METRICS.lowerLegLength,
      18,
    );
    const ankleCuffGeo = new THREE.CylinderGeometry(0.05, 0.052, 0.038, 16);
    geometries.push(kneeCapGeo, shinGeo, ankleCuffGeo);

    const kneeCap = new THREE.Mesh(kneeCapGeo, materials.cargoPocket);
    knee.add(kneeCap);

    const shin = new THREE.Mesh(shinGeo, materials.cargoBlack);
    shin.position.set(0, -LEG_METRICS.lowerLegLength / 2, 0);
    knee.add(shin);

    const ankleCuff = new THREE.Mesh(ankleCuffGeo, materials.hoodieDeepNavy);
    ankleCuff.position.set(0, -LEG_METRICS.lowerLegLength + 0.022, 0);
    knee.add(ankleCuff);

    // Ankle & Futuristic Sneaker
    const ankle = new THREE.Group();
    ankle.name = `${prefix}Ankle`;
    ankle.position.set(0, -LEG_METRICS.lowerLegLength, 0);
    knee.add(ankle);

    const sneaker = buildFootwear(isLeft, materials, geometries, dressLoafers);
    ankle.add(sneaker);

    return { hip, knee, ankle };
  }

  return {
    hips,
    leftLeg: buildLeg(true),
    rightLeg: buildLeg(false),
  };
}

