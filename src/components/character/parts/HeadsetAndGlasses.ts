import * as THREE from "three";
import type { ITSupportMaterialSet } from "../CharacterMaterials";
import type { CharacterGlassesStyle } from "../types";
import { HEAD_CENTER_Y } from "./HeadAndFace";

export interface HeadgearOptions {
  hasHeadset?: boolean;
  glassesStyle?: CharacterGlassesStyle;
}

/**
 * Builds modular headwear: sleek Modern Glasses (tech rim, round reading, or executive half-rim)
 * and optional Over-Ear Headset with Boom Microphone attached to `head`.
 */
export function buildHeadsetAndGlasses(
  head: THREE.Group,
  materials: ITSupportMaterialSet,
  geometries: THREE.BufferGeometry[],
  options: HeadgearOptions = {},
) {
  const hasHeadset = options.hasHeadset ?? true;
  const glassesStyle = options.glassesStyle ?? "tech_rim";

  // 1. GLASSES (skipped cleanly if glassesStyle === "none")
  if (glassesStyle !== "none") {
    const glassesGroup = new THREE.Group();
    glassesGroup.name = "ModernGlasses";
    glassesGroup.position.set(0, HEAD_CENTER_Y + 0.012, 0.168);

    const rimTopGeo = new THREE.BoxGeometry(0.072, 0.011, 0.012);
    const rimBottomGeo = new THREE.BoxGeometry(0.068, 0.008, 0.01);
    const rimSideGeo = new THREE.BoxGeometry(0.009, 0.052, 0.01);
    const roundRimGeo = new THREE.TorusGeometry(0.032, 0.0055, 8, 22);
    const lensGeo = new THREE.BoxGeometry(0.062, 0.044, 0.004);
    const bridgeGeo = new THREE.BoxGeometry(0.03, 0.009, 0.01);
    const templeGeo = new THREE.BoxGeometry(0.008, 0.01, 0.155);
    const templeGlowGeo = new THREE.BoxGeometry(0.004, 0.005, 0.038);

    geometries.push(
      rimTopGeo,
      rimBottomGeo,
      rimSideGeo,
      roundRimGeo,
      lensGeo,
      bridgeGeo,
      templeGeo,
      templeGlowGeo,
    );

    const bridge = new THREE.Mesh(bridgeGeo, materials.glassesFrame);
    bridge.position.set(0, 0.008, 0.002);
    glassesGroup.add(bridge);

    [-1, 1].forEach((side) => {
      const lensFrame = new THREE.Group();
      lensFrame.position.set(side * 0.056, 0, 0);
      lensFrame.rotation.y = side * 0.12;

      if (glassesStyle === "round_amber") {
        const roundFrame = new THREE.Mesh(roundRimGeo, materials.glassesFrame);
        lensFrame.add(roundFrame);
      } else {
        const topBar = new THREE.Mesh(rimTopGeo, materials.glassesFrame);
        topBar.position.set(0, 0.024, 0);
        lensFrame.add(topBar);

        if (glassesStyle === "tech_rim") {
          const botBar = new THREE.Mesh(rimBottomGeo, materials.glassesFrame);
          botBar.position.set(0, -0.022, 0);
          lensFrame.add(botBar);

          const outerBar = new THREE.Mesh(rimSideGeo, materials.glassesFrame);
          outerBar.position.set(side * 0.032, 0.001, 0);
          lensFrame.add(outerBar);

          const innerBar = new THREE.Mesh(rimSideGeo, materials.glassesFrame);
          innerBar.position.set(-side * 0.032, 0.001, 0);
          lensFrame.add(innerBar);
        }
      }

      const lens = new THREE.Mesh(lensGeo, materials.glassesLens);
      lens.position.set(0, 0.001, -0.001);
      lensFrame.add(lens);
      glassesGroup.add(lensFrame);

      const temple = new THREE.Mesh(templeGeo, materials.glassesFrame);
      temple.position.set(side * 0.108, 0.012, -0.072);
      temple.rotation.y = side * -0.14;
      glassesGroup.add(temple);

      if (glassesStyle === "tech_rim") {
        const templeGlow = new THREE.Mesh(templeGlowGeo, materials.cyanNeon);
        templeGlow.position.set(side * 0.098, 0.012, -0.024);
        templeGlow.rotation.y = side * -0.14;
        glassesGroup.add(templeGlow);
      }
    });

    head.add(glassesGroup);
  }

  if (!hasHeadset) {
    return;
  }

  // 2. FUTURISTIC OVER-EAR HEADSET WITH BOOM MICROPHONE
  const headsetGroup = new THREE.Group();
  headsetGroup.name = "ModernHeadset";

  // Cushioned headband over hair crown
  const headbandGeo = new THREE.TorusGeometry(0.175, 0.016, 12, 32, Math.PI * 1.06);
  geometries.push(headbandGeo);
  const headband = new THREE.Mesh(headbandGeo, materials.headsetDark);
  headband.position.set(0, HEAD_CENTER_Y + 0.005, -0.012);
  headband.rotation.z = -Math.PI * 0.03;
  headsetGroup.add(headband);

  // Top headband cyan trim ridge
  const bandAccentGeo = new THREE.TorusGeometry(0.184, 0.005, 8, 28, Math.PI * 0.65);
  geometries.push(bandAccentGeo);
  const bandAccent = new THREE.Mesh(bandAccentGeo, materials.cyanNeon);
  bandAccent.position.set(0, HEAD_CENTER_Y + 0.005, -0.012);
  bandAccent.rotation.z = Math.PI * 0.175;
  headsetGroup.add(bandAccent);

  // Left & Right Earcups
  const cushionGeo = new THREE.TorusGeometry(0.044, 0.015, 12, 24);
  const cupShellGeo = new THREE.CylinderGeometry(0.048, 0.052, 0.03, 24);
  const cupGlowRingGeo = new THREE.TorusGeometry(0.036, 0.0045, 8, 24);
  const cupCenterGeo = new THREE.CylinderGeometry(0.022, 0.022, 0.008, 16);

  geometries.push(cushionGeo, cupShellGeo, cupGlowRingGeo, cupCenterGeo);

  [-1, 1].forEach((side) => {
    const earcup = new THREE.Group();
    earcup.name = side > 0 ? "LeftEarcup" : "RightEarcup";
    earcup.position.set(side * 0.168, HEAD_CENTER_Y - 0.008, -0.008);

    const cushion = new THREE.Mesh(cushionGeo, materials.cargoBlack);
    cushion.rotation.y = Math.PI / 2;
    earcup.add(cushion);

    const shell = new THREE.Mesh(cupShellGeo, materials.headsetDark);
    shell.rotation.z = Math.PI / 2;
    shell.position.set(side * 0.018, 0, 0);
    earcup.add(shell);

    const glowRing = new THREE.Mesh(cupGlowRingGeo, materials.cyanNeon);
    glowRing.rotation.y = Math.PI / 2;
    glowRing.position.set(side * 0.034, 0, 0);
    earcup.add(glowRing);

    const centerBadge = new THREE.Mesh(cupCenterGeo, materials.electricBlue);
    centerBadge.rotation.z = Math.PI / 2;
    centerBadge.position.set(side * 0.032, 0, 0);
    earcup.add(centerBadge);

    headsetGroup.add(earcup);
  });

  // Articulated Boom Microphone smoothly connecting Left Earcup (+X) to corner of mouth
  const boomElbowGeo = new THREE.SphereGeometry(0.007, 10, 8);
  const boomArm1Geo = new THREE.CylinderGeometry(0.0055, 0.0055, 0.088, 10);
  const boomArm2Geo = new THREE.CylinderGeometry(0.005, 0.0045, 0.078, 10);
  const micCapsuleGeo = new THREE.CapsuleGeometry(0.0105, 0.016, 8, 12);
  const micGlowGeo = new THREE.SphereGeometry(0.0055, 10, 8);

  geometries.push(boomElbowGeo, boomArm1Geo, boomArm2Geo, micCapsuleGeo, micGlowGeo);

  const micPivot = new THREE.Group();
  micPivot.name = "BoomMicrophone";

  // Helper placing exact cylinder segment between p0 and p1 inside `head` coordinates
  const p0 = new THREE.Vector3(0.175, HEAD_CENTER_Y - 0.025, 0.004);
  const p1 = new THREE.Vector3(0.145, HEAD_CENTER_Y - 0.065, 0.078);
  const p2 = new THREE.Vector3(0.075, HEAD_CENTER_Y - 0.074, 0.132);

  function addBoomSegment(a: THREE.Vector3, b: THREE.Vector3, geo: THREE.CylinderGeometry) {
    const mid = a.clone().add(b).multiplyScalar(0.5);
    const dir = b.clone().sub(a).normalize();
    const seg = new THREE.Mesh(geo, materials.headsetDark);
    seg.position.copy(mid);
    seg.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
    micPivot.add(seg);
  }

  addBoomSegment(p0, p1, boomArm1Geo);
  const elbowJoint = new THREE.Mesh(boomElbowGeo, materials.headsetDark);
  elbowJoint.position.copy(p1);
  micPivot.add(elbowJoint);
  addBoomSegment(p1, p2, boomArm2Geo);

  const micFoam = new THREE.Mesh(micCapsuleGeo, materials.cargoBlack);
  micFoam.position.copy(p2);
  micFoam.rotation.set(Math.PI / 2, 0, 1.1);
  micPivot.add(micFoam);

  const micGlow = new THREE.Mesh(micGlowGeo, materials.cyanNeon);
  micGlow.position.set(p2.x - 0.012, p2.y, p2.z + 0.006);
  micPivot.add(micGlow);

  headsetGroup.add(micPivot);
  head.add(headsetGroup);
}

