import * as THREE from "three";
import type { ITSupportMaterialSet } from "../CharacterMaterials";
import type { HandheldPropKind } from "../types";

export interface TechAccessoriesNodes {
  laptopMount: THREE.Group;
  bagGroup: THREE.Group;
}

export interface TechAccessoriesOptions {
  hasToolSatchel?: boolean;
  handheldProp?: HandheldPropKind;
}

/**
 * Builds role-specific torso/hip equipment (optional Technician Satchel, Screwdriver, USB)
 * and the character's Left-Wrist Handheld Prop (Laptop, Office Tablet, Coffee Mug, or Clipboard).
 */
export function buildTechAccessories(
  chest: THREE.Group,
  hips: THREE.Group,
  leftWrist: THREE.Group,
  materials: ITSupportMaterialSet,
  geometries: THREE.BufferGeometry[],
  options: TechAccessoriesOptions = {},
): TechAccessoriesNodes {
  const hasToolSatchel = options.hasToolSatchel ?? true;
  const handheldProp = options.handheldProp ?? "laptop";

  const bagGroup = new THREE.Group();
  bagGroup.name = "TechnicianToolBag";

  if (hasToolSatchel) {
    // 1. CROSSBODY STRAP across Chest
    const strapGeo = new THREE.BoxGeometry(0.034, 0.44, 0.205);
    geometries.push(strapGeo);

    const strap = new THREE.Mesh(strapGeo, materials.bagNylon);
    strap.name = "TechnicianCrossbodyStrap";
    strap.position.set(0.012, 0.005, 0.002);
    strap.rotation.z = -0.56;
    chest.add(strap);

    const strapClipGeo = new THREE.BoxGeometry(0.04, 0.028, 0.02);
    geometries.push(strapClipGeo);
    const strapClip = new THREE.Mesh(strapClipGeo, materials.electricBlue);
    strapClip.position.set(0.048, 0.04, 0.108);
    strapClip.rotation.z = -0.56;
    chest.add(strapClip);

    // 2. TAS TEKNISI
    bagGroup.position.set(-0.185, -0.052, 0.042);
    bagGroup.rotation.set(0.06, 0.44, -0.08);

    const bagBodyGeo = new THREE.BoxGeometry(0.075, 0.19, 0.165);
    const bagFlapGeo = new THREE.BoxGeometry(0.082, 0.085, 0.172);
    const bagTrimGeo = new THREE.BoxGeometry(0.012, 0.016, 0.174);
    const bagLatchGeo = new THREE.BoxGeometry(0.016, 0.032, 0.036);
    geometries.push(bagBodyGeo, bagFlapGeo, bagTrimGeo, bagLatchGeo);

    const bagBody = new THREE.Mesh(bagBodyGeo, materials.bagNylon);
    bagGroup.add(bagBody);

    const bagFlap = new THREE.Mesh(bagFlapGeo, materials.hoodieDeepNavy);
    bagFlap.position.set(-0.004, 0.058, 0);
    bagGroup.add(bagFlap);

    const bagTrim = new THREE.Mesh(bagTrimGeo, materials.cyanNeon);
    bagTrim.position.set(-0.042, 0.02, 0);
    bagGroup.add(bagTrim);

    const bagLatch = new THREE.Mesh(bagLatchGeo, materials.electricBlue);
    bagLatch.position.set(-0.043, 0.012, 0);
    bagGroup.add(bagLatch);

    // 3. OBENG KECIL PRESISI
    const screwdriver = new THREE.Group();
    screwdriver.name = "PrecisionScrewdriver";
    screwdriver.position.set(-0.042, 0.088, 0.038);
    screwdriver.rotation.set(0.14, 0, -0.14);

    const handleGeo = new THREE.CapsuleGeometry(0.015, 0.075, 6, 12);
    const collarRingGeo = new THREE.CylinderGeometry(0.016, 0.016, 0.012, 12);
    const shaftGeo = new THREE.CylinderGeometry(0.0042, 0.0042, 0.095, 10);
    const tipGeo = new THREE.BoxGeometry(0.009, 0.012, 0.003);
    geometries.push(handleGeo, collarRingGeo, shaftGeo, tipGeo);

    const handle = new THREE.Mesh(handleGeo, materials.electricBlue);
    handle.position.set(0, 0.048, 0);
    screwdriver.add(handle);

    const handleAccent = new THREE.Mesh(collarRingGeo, materials.cyanNeon);
    handleAccent.position.set(0, 0.015, 0);
    screwdriver.add(handleAccent);

    const shaft = new THREE.Mesh(shaftGeo, materials.chromeSteel);
    shaft.position.set(0, -0.045, 0);
    screwdriver.add(shaft);

    const tip = new THREE.Mesh(tipGeo, materials.chromeSteel);
    tip.position.set(0, -0.092, 0);
    screwdriver.add(tip);

    bagGroup.add(screwdriver);

    // 4. USB FLASHDISK
    const usbGroup = new THREE.Group();
    usbGroup.name = "USBFlashDrive";
    usbGroup.position.set(-0.018, 0.048, 0.088);
    usbGroup.rotation.set(0.08, 0.25, -0.08);

    const usbBodyGeo = new THREE.BoxGeometry(0.016, 0.058, 0.024);
    const usbPlugGeo = new THREE.BoxGeometry(0.012, 0.02, 0.018);
    const usbLedGeo = new THREE.BoxGeometry(0.018, 0.012, 0.01);
    geometries.push(usbBodyGeo, usbPlugGeo, usbLedGeo);

    const usbBody = new THREE.Mesh(usbBodyGeo, materials.headsetDark);
    usbGroup.add(usbBody);

    const usbPlug = new THREE.Mesh(usbPlugGeo, materials.chromeSteel);
    usbPlug.position.set(0, 0.036, 0);
    usbGroup.add(usbPlug);

    const usbLed = new THREE.Mesh(usbLedGeo, materials.cyanNeon);
    usbLed.position.set(-0.002, -0.01, 0.004);
    usbGroup.add(usbLed);

    bagGroup.add(usbGroup);
    hips.add(bagGroup);
  }

  // 5. HANDHELD ROLE PROP mounted cleanly on Left Wrist
  const laptopFrame = new THREE.Group();
  laptopFrame.name = "HandheldPropWristAlign";
  laptopFrame.position.set(0.025, -0.072, 0.048);
  laptopFrame.rotation.x = Math.PI / 2;

  const laptopMount = new THREE.Group();
  laptopMount.name = "WorkPropMount";
  laptopMount.rotation.set(0.1, -0.26, -0.08);
  laptopFrame.add(laptopMount);

  if (handheldProp === "laptop") {
    const baseGeo = new THREE.BoxGeometry(0.26, 0.012, 0.175);
    const keyDeckGeo = new THREE.BoxGeometry(0.225, 0.003, 0.105);
    const trackpadGeo = new THREE.BoxGeometry(0.08, 0.003, 0.048);
    const lidGeo = new THREE.BoxGeometry(0.26, 0.17, 0.009);
    const screenGeo = new THREE.PlaneGeometry(0.236, 0.146);
    const lidStripeGeo = new THREE.BoxGeometry(0.085, 0.012, 0.011);
    geometries.push(baseGeo, keyDeckGeo, trackpadGeo, lidGeo, screenGeo, lidStripeGeo);

    const base = new THREE.Mesh(baseGeo, materials.laptopChassis);
    laptopMount.add(base);

    const keyDeck = new THREE.Mesh(keyDeckGeo, materials.headsetDark);
    keyDeck.position.set(0, 0.007, -0.016);
    laptopMount.add(keyDeck);

    const trackpad = new THREE.Mesh(trackpadGeo, materials.chromeSteel);
    trackpad.position.set(0, 0.007, 0.056);
    laptopMount.add(trackpad);

    const lidPivot = new THREE.Group();
    lidPivot.position.set(0, 0.006, -0.084);
    lidPivot.rotation.x = -0.34;

    const lid = new THREE.Mesh(lidGeo, materials.laptopChassis);
    lid.position.set(0, 0.085, 0);
    lidPivot.add(lid);

    const screen = new THREE.Mesh(screenGeo, materials.laptopScreen);
    screen.position.set(0, 0.086, 0.0052);
    lidPivot.add(screen);

    const lidGlow = new THREE.Mesh(lidStripeGeo, materials.cyanNeon);
    lidGlow.position.set(0, 0.086, -0.0055);
    lidPivot.add(lidGlow);

    laptopMount.add(lidPivot);
  } else if (handheldProp === "tablet") {
    const padGeo = new THREE.BoxGeometry(0.2, 0.012, 0.25);
    const scrGeo = new THREE.PlaneGeometry(0.176, 0.224);
    geometries.push(padGeo, scrGeo);

    const pad = new THREE.Mesh(padGeo, materials.glassesFrame);
    pad.rotation.x = -0.24;
    laptopMount.add(pad);

    const scr = new THREE.Mesh(scrGeo, materials.laptopScreen);
    scr.rotation.x = -Math.PI / 2 - 0.24;
    scr.position.set(0, 0.007, 0);
    laptopMount.add(scr);
  } else if (handheldProp === "coffee_mug") {
    const cupGeo = new THREE.CylinderGeometry(0.05, 0.044, 0.115, 18);
    const liquidGeo = new THREE.CylinderGeometry(0.044, 0.044, 0.012, 16);
    const handleGeo = new THREE.TorusGeometry(0.028, 0.008, 8, 16);
    const collarGeo = new THREE.CylinderGeometry(0.052, 0.052, 0.016, 18);
    geometries.push(cupGeo, liquidGeo, handleGeo, collarGeo);

    const cup = new THREE.Mesh(cupGeo, materials.pureWhite);
    cup.position.set(0, 0.055, 0.02);
    laptopMount.add(cup);

    const liquid = new THREE.Mesh(liquidGeo, materials.headsetDark);
    liquid.position.set(0, 0.108, 0.02);
    laptopMount.add(liquid);

    const band = new THREE.Mesh(collarGeo, materials.electricBlue);
    band.position.set(0, 0.06, 0.02);
    laptopMount.add(band);

    const mugHandle = new THREE.Mesh(handleGeo, materials.pureWhite);
    mugHandle.position.set(0.052, 0.056, 0.02);
    mugHandle.rotation.z = Math.PI / 2;
    laptopMount.add(mugHandle);
  } else {
    // Financial / Admin Clipboard with printed paper sheet and red metal clip
    const boardGeo = new THREE.BoxGeometry(0.21, 0.01, 0.28);
    const sheetGeo = new THREE.BoxGeometry(0.18, 0.004, 0.235);
    const clipGeo = new THREE.BoxGeometry(0.08, 0.014, 0.024);
    const lineGeo = new THREE.BoxGeometry(0.12, 0.005, 0.014);
    geometries.push(boardGeo, sheetGeo, clipGeo, lineGeo);

    const board = new THREE.Mesh(boardGeo, materials.hoodieDeepNavy);
    board.rotation.x = -0.22;
    laptopMount.add(board);

    const sheet = new THREE.Mesh(sheetGeo, materials.pureWhite);
    sheet.position.set(0, 0.007, 0.008);
    sheet.rotation.x = -0.22;
    laptopMount.add(sheet);

    const clip = new THREE.Mesh(clipGeo, materials.chromeSteel);
    clip.position.set(0, 0.026, -0.105);
    clip.rotation.x = -0.22;
    laptopMount.add(clip);

    [-0.04, 0.0, 0.04].forEach((zOff, idx) => {
      const rule = new THREE.Mesh(
        lineGeo,
        idx === 0 ? materials.electricBlue : materials.cargoPocket,
      );
      rule.position.set(0, 0.01, zOff);
      rule.rotation.x = -0.22;
      laptopMount.add(rule);
    });
  }

  leftWrist.add(laptopFrame);

  return {
    laptopMount,
    bagGroup,
  };
}
