import * as THREE from "three";
import type { ITSupportMaterialSet } from "../CharacterMaterials";
import type { CharacterHairStyle } from "../types";

export interface HeadAndFaceOptions {
  hairStyle?: CharacterHairStyle;
  hasEarrings?: boolean;
}

export interface HeadAndFaceNodes {
  neck: THREE.Group;
  head: THREE.Group;
  leftEyeGroup: THREE.Group;
  rightEyeGroup: THREE.Group;
  leftPupilGroup: THREE.Group;
  rightPupilGroup: THREE.Group;
  leftBrow: THREE.Mesh;
  rightBrow: THREE.Mesh;
}

export const HEAD_CENTER_Y = 0.165;

/**
 * Builds the friendly, stylized-cartoon human head, hair, ears, nose,
 * confident smile, and animated eyes/eyebrows for the IT Support Specialist.
 */
export function buildHeadAndFace(
  chest: THREE.Group,
  materials: ITSupportMaterialSet,
  geometries: THREE.BufferGeometry[],
  options: HeadAndFaceOptions = {},
): HeadAndFaceNodes {
  const hairStyle = options.hairStyle ?? "swept_tech";
  const hasEarrings = options.hasEarrings ?? false;
  const neck = new THREE.Group();
  neck.name = "Neck";
  neck.position.set(0, 0.175, 0);
  chest.add(neck);

  const neckGeo = new THREE.CylinderGeometry(0.044, 0.052, 0.09, 18);
  geometries.push(neckGeo);
  const neckMesh = new THREE.Mesh(neckGeo, materials.skin);
  neckMesh.position.set(0, 0.04, 0);
  neck.add(neckMesh);

  const head = new THREE.Group();
  head.name = "Head";
  head.position.set(0, 0.072, 0);
  neck.add(head);

  // Main stylized rounded cartoon head
  const headGeo = new THREE.SphereGeometry(0.162, 32, 26);
  geometries.push(headGeo);
  const headMesh = new THREE.Mesh(headGeo, materials.skin);
  headMesh.position.set(0, HEAD_CENTER_Y, 0);
  headMesh.scale.set(0.95, 1.05, 0.96);
  head.add(headMesh);

  // Soft lower cheek/jaw contour
  const jawGeo = new THREE.SphereGeometry(0.118, 24, 18);
  geometries.push(jawGeo);
  const jawMesh = new THREE.Mesh(jawGeo, materials.skin);
  jawMesh.position.set(0, HEAD_CENTER_Y - 0.055, 0.022);
  jawMesh.scale.set(1.0, 0.85, 0.88);
  head.add(jawMesh);

  // Cute sculpted cartoon ears (plus optional pearl studs)
  const earGeo = new THREE.SphereGeometry(0.036, 16, 14);
  geometries.push(earGeo);
  const earringGeo = hasEarrings ? new THREE.SphereGeometry(0.011, 10, 8) : null;
  if (earringGeo) geometries.push(earringGeo);
  [-1, 1].forEach((side) => {
    const ear = new THREE.Mesh(earGeo, materials.skin);
    ear.name = side > 0 ? "LeftEar" : "RightEar";
    ear.position.set(side * 0.152, HEAD_CENTER_Y - 0.01, -0.008);
    ear.scale.set(0.42, 0.78, 0.6);
    head.add(ear);

    if (earringGeo) {
      const stud = new THREE.Mesh(earringGeo, materials.pureWhite);
      stud.position.set(side * 0.16, HEAD_CENTER_Y - 0.032, -0.004);
      head.add(stud);
    }
  });

  // Soft stylized button nose
  const noseGeo = new THREE.CapsuleGeometry(0.015, 0.014, 6, 12);
  geometries.push(noseGeo);
  const nose = new THREE.Mesh(noseGeo, materials.skin);
  nose.name = "Nose";
  nose.position.set(0, HEAD_CENTER_Y - 0.022, 0.158);
  nose.rotation.x = 0.25;
  head.add(nose);

  // Confident stylized cartoon smile (clean warm grin + subtle top teeth line)
  const smileGroup = new THREE.Group();
  smileGroup.name = "SmileGroup";
  smileGroup.position.set(0, HEAD_CENTER_Y - 0.065, 0.138);

  const smileArcGeo = new THREE.TorusGeometry(0.028, 0.0042, 8, 22, Math.PI * 0.56);
  geometries.push(smileArcGeo);
  const smileArc = new THREE.Mesh(smileArcGeo, materials.mouthSmile);
  smileArc.rotation.z = Math.PI + Math.PI * 0.22;
  smileGroup.add(smileArc);

  const teethGeo = new THREE.BoxGeometry(0.026, 0.0055, 0.004);
  geometries.push(teethGeo);
  const teeth = new THREE.Mesh(teethGeo, materials.teethWhite);
  teeth.position.set(0, -0.014, 0.002);
  smileGroup.add(teeth);
  head.add(smileGroup);

  // Expressive Cartoon Eyes (white sclera, blue iris, dark pupil, bright glint)
  const scleraGeo = new THREE.SphereGeometry(0.031, 20, 16);
  geometries.push(scleraGeo);
  const irisGeo = new THREE.SphereGeometry(0.0175, 16, 14);
  geometries.push(irisGeo);
  const pupilGeo = new THREE.SphereGeometry(0.0105, 14, 10);
  geometries.push(pupilGeo);
  const glintGeo = new THREE.SphereGeometry(0.0045, 10, 8);
  geometries.push(glintGeo);

  function buildEye(isLeft: boolean) {
    const side = isLeft ? 1 : -1;
    const eyeGroup = new THREE.Group();
    eyeGroup.name = isLeft ? "LeftEye" : "RightEye";
    eyeGroup.position.set(side * 0.056, HEAD_CENTER_Y + 0.014, 0.138);
    eyeGroup.rotation.y = side * 0.16;

    const sclera = new THREE.Mesh(scleraGeo, materials.eyeWhite);
    sclera.scale.set(0.92, 1.12, 0.42);
    eyeGroup.add(sclera);

    const pupilGroup = new THREE.Group();
    pupilGroup.position.set(0, 0, 0.011);

    const iris = new THREE.Mesh(irisGeo, materials.irisBlue);
    iris.scale.set(1, 1.06, 0.48);
    pupilGroup.add(iris);

    const pupilMesh = new THREE.Mesh(pupilGeo, materials.pupil);
    pupilMesh.position.set(0, 0, 0.004);
    pupilMesh.scale.set(1, 1.05, 0.5);
    pupilGroup.add(pupilMesh);

    const glint = new THREE.Mesh(glintGeo, materials.eyeWhite);
    glint.position.set(0.006, 0.008, 0.009);
    pupilGroup.add(glint);

    eyeGroup.add(pupilGroup);
    head.add(eyeGroup);
    return { eyeGroup, pupilGroup };
  }

  const leftEye = buildEye(true);
  const rightEye = buildEye(false);

  // Expressive Eyebrows
  const browGeo = new THREE.CapsuleGeometry(0.0075, 0.036, 6, 12);
  geometries.push(browGeo);
  const leftBrow = new THREE.Mesh(browGeo, materials.hair);
  leftBrow.name = "LeftBrow";
  leftBrow.rotation.z = Math.PI / 2;
  leftBrow.position.set(0.056, HEAD_CENTER_Y + 0.058, 0.146);
  head.add(leftBrow);

  const rightBrow = new THREE.Mesh(browGeo, materials.hair);
  rightBrow.name = "RightBrow";
  rightBrow.rotation.z = Math.PI / 2;
  rightBrow.position.set(-0.056, HEAD_CENTER_Y + 0.058, 0.146);
  head.add(rightBrow);

  // Modular Stylized Hair (4 silhouettes keeping forehead & eyes clear)
  const hairGroup = new THREE.Group();
  hairGroup.name = "StylizedHair";

  const hairCrownGeo = new THREE.SphereGeometry(0.168, 28, 22, 0, Math.PI * 2, 0, Math.PI * 0.43);
  const lockGeo = new THREE.CapsuleGeometry(0.03, 0.088, 8, 14);
  geometries.push(hairCrownGeo, lockGeo);

  const hairCrown = new THREE.Mesh(hairCrownGeo, materials.hair);
  hairCrown.position.set(0, HEAD_CENTER_Y + 0.024, -0.024);
  hairCrown.rotation.x = hairStyle === "sleek_bun" ? -0.22 : -0.34;
  hairCrown.scale.set(0.98, 1.02, 1.02);
  hairGroup.add(hairCrown);

  if (hairStyle === "swept_tech") {
    const lockSpecs: Array<{
      pos: [number, number, number];
      rot: [number, number, number];
      scale: [number, number, number];
      highlightMat?: THREE.Material;
    }> = [
      { pos: [-0.048, HEAD_CENTER_Y + 0.155, 0.065], rot: [0.58, 0.16, 0.52], scale: [1.05, 0.96, 0.7] },
      { pos: [0.028, HEAD_CENTER_Y + 0.162, 0.072], rot: [0.64, -0.1, 0.36], scale: [1.02, 1.04, 0.68] },
      { pos: [0.095, HEAD_CENTER_Y + 0.135, 0.048], rot: [0.4, -0.38, 0.2], scale: [0.85, 0.88, 0.65], highlightMat: materials.electricBlue },
      { pos: [-0.112, HEAD_CENTER_Y + 0.118, 0.032], rot: [0.28, 0.36, -0.18], scale: [0.76, 0.88, 0.62] },
      { pos: [-0.145, HEAD_CENTER_Y + 0.042, -0.025], rot: [0.1, 0, 0.05], scale: [0.38, 0.72, 0.55] },
      { pos: [0.145, HEAD_CENTER_Y + 0.042, -0.025], rot: [0.1, 0, -0.05], scale: [0.38, 0.72, 0.55] },
      { pos: [0, HEAD_CENTER_Y + 0.032, -0.125], rot: [0.15, 0, 0], scale: [2.1, 1.32, 0.92] },
    ];
    lockSpecs.forEach((spec, idx) => {
      const lock = new THREE.Mesh(lockGeo, spec.highlightMat ?? materials.hair);
      lock.name = `HairLock_${idx}`;
      lock.position.set(...spec.pos);
      lock.rotation.set(...spec.rot);
      lock.scale.set(...spec.scale);
      hairGroup.add(lock);
    });
  } else if (hairStyle === "casual_crop") {
    const cropSpecs: Array<{
      pos: [number, number, number];
      rot: [number, number, number];
      scale: [number, number, number];
    }> = [
      { pos: [-0.055, HEAD_CENTER_Y + 0.15, 0.088], rot: [0.88, -0.18, 0.2], scale: [1.18, 0.85, 0.76] },
      { pos: [0.006, HEAD_CENTER_Y + 0.156, 0.095], rot: [0.92, 0.08, -0.14], scale: [1.22, 0.82, 0.76] },
      { pos: [0.068, HEAD_CENTER_Y + 0.144, 0.075], rot: [0.78, -0.22, -0.3], scale: [1.05, 0.78, 0.7] },
      { pos: [-0.132, HEAD_CENTER_Y + 0.06, -0.005], rot: [0.12, 0, 0.08], scale: [0.56, 0.96, 0.68] },
      { pos: [0.132, HEAD_CENTER_Y + 0.06, -0.005], rot: [0.12, 0, -0.08], scale: [0.56, 0.96, 0.68] },
      { pos: [0, HEAD_CENTER_Y + 0.036, -0.122], rot: [0.12, 0, 0], scale: [2.18, 1.42, 0.98] },
    ];
    cropSpecs.forEach((spec, idx) => {
      const lock = new THREE.Mesh(lockGeo, materials.hair);
      lock.name = `HairLock_${idx}`;
      lock.position.set(...spec.pos);
      lock.rotation.set(...spec.rot);
      lock.scale.set(...spec.scale);
      hairGroup.add(lock);
    });
  } else if (hairStyle === "executive_part") {
    const execSpecs: Array<{
      pos: [number, number, number];
      rot: [number, number, number];
      scale: [number, number, number];
      silver?: boolean;
    }> = [
      { pos: [0.032, HEAD_CENTER_Y + 0.154, 0.064], rot: [0.52, -0.22, -0.58], scale: [1.18, 0.98, 0.66] },
      { pos: [-0.062, HEAD_CENTER_Y + 0.146, 0.06], rot: [0.46, 0.24, 0.68], scale: [0.95, 0.88, 0.62] },
      // Distinguished silver-grey temple sweeps
      { pos: [-0.144, HEAD_CENTER_Y + 0.045, -0.02], rot: [0.14, 0, 0.04], scale: [0.44, 0.74, 0.62], silver: true },
      { pos: [0.144, HEAD_CENTER_Y + 0.045, -0.02], rot: [0.14, 0, -0.04], scale: [0.44, 0.74, 0.62], silver: true },
      { pos: [0, HEAD_CENTER_Y + 0.03, -0.124], rot: [0.14, 0, 0], scale: [2.05, 1.24, 0.88] },
    ];
    execSpecs.forEach((spec, idx) => {
      const lock = new THREE.Mesh(lockGeo, spec.silver ? materials.chromeSteel : materials.hair);
      lock.name = `HairLock_${idx}`;
      lock.position.set(...spec.pos);
      lock.rotation.set(...spec.rot);
      lock.scale.set(...spec.scale);
      hairGroup.add(lock);
    });
  } else {
    // Sleek parted fringe + top-back hair bun with accent scrunchie
    const bunSpecs: Array<{
      pos: [number, number, number];
      rot: [number, number, number];
      scale: [number, number, number];
    }> = [
      { pos: [-0.064, HEAD_CENTER_Y + 0.14, 0.068], rot: [0.58, 0.28, 0.62], scale: [1.05, 1.02, 0.62] },
      { pos: [0.064, HEAD_CENTER_Y + 0.14, 0.068], rot: [0.58, -0.28, -0.62], scale: [1.05, 1.02, 0.62] },
      { pos: [-0.135, HEAD_CENTER_Y + 0.04, -0.025], rot: [0.22, 0, 0.1], scale: [0.46, 0.92, 0.65] },
      { pos: [0.135, HEAD_CENTER_Y + 0.04, -0.025], rot: [0.22, 0, -0.1], scale: [0.46, 0.92, 0.65] },
      { pos: [0, HEAD_CENTER_Y + 0.026, -0.122], rot: [0.18, 0, 0], scale: [2.05, 1.32, 0.94] },
    ];
    bunSpecs.forEach((spec, idx) => {
      const lock = new THREE.Mesh(lockGeo, materials.hair);
      lock.name = `HairLock_${idx}`;
      lock.position.set(...spec.pos);
      lock.rotation.set(...spec.rot);
      lock.scale.set(...spec.scale);
      hairGroup.add(lock);
    });
    const bunGeo = new THREE.SphereGeometry(0.072, 20, 16);
    const scrunchieGeo = new THREE.TorusGeometry(0.054, 0.012, 10, 20);
    geometries.push(bunGeo, scrunchieGeo);
    const bun = new THREE.Mesh(bunGeo, materials.hair);
    bun.position.set(0, HEAD_CENTER_Y + 0.11, -0.155);
    bun.scale.set(1.0, 0.92, 0.95);
    hairGroup.add(bun);

    const scrunchie = new THREE.Mesh(scrunchieGeo, materials.electricBlue);
    scrunchie.position.set(0, HEAD_CENTER_Y + 0.095, -0.125);
    scrunchie.rotation.x = 0.72;
    hairGroup.add(scrunchie);
  }

  head.add(hairGroup);

  return {
    neck,
    head,
    leftEyeGroup: leftEye.eyeGroup,
    rightEyeGroup: rightEye.eyeGroup,
    leftPupilGroup: leftEye.pupilGroup,
    rightPupilGroup: rightEye.pupilGroup,
    leftBrow,
    rightBrow,
  };
}

