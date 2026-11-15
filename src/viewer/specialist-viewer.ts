import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import {
  applyITSupportPose,
  buildCharacterRig,
  type ITSupportRig,
} from "../components/character/CharacterRig";
import { evaluateCharacterPose } from "../components/character/CharacterController";
import {
  CHARACTER_PRESETS,
  type CharacterRoleId,
  type StickmanAnimationName,
} from "../components/character/types";

function createRadialContactShadowTexture(): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const grad = ctx.createRadialGradient(
    size / 2,
    size / 2,
    size * 0.08,
    size / 2,
    size / 2,
    size * 0.48,
  );
  grad.addColorStop(0, "rgba(6, 12, 26, 0.55)");
  grad.addColorStop(0.55, "rgba(15, 23, 42, 0.22)");
  grad.addColorStop(1, "rgba(15, 23, 42, 0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

function buildModernServerRoom(scene: THREE.Scene) {
  const roomGroup = new THREE.Group();
  roomGroup.name = "FuturisticServerRoom";

  // 1. Sleek Dark-Slate Reflective Server Hall Floor
  const floorGeo = new THREE.PlaneGeometry(24, 24);
  const floorMat = new THREE.MeshStandardMaterial({
    color: "#0C1528",
    roughness: 0.42,
    metalness: 0.28,
  });
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  roomGroup.add(floor);

  // Subtle architectural tile seams in server hall (white-blue faint lines, never tacky wireframe)
  const floorGrid = new THREE.GridHelper(20, 20, "#1D63ED", "#162442");
  floorGrid.position.y = 0.002;
  (floorGrid.material as THREE.Material).transparent = true;
  (floorGrid.material as THREE.Material).opacity = 0.28;
  roomGroup.add(floorGrid);

  // 2. Hero Circular Pedestal + Futuristic Cyan Rim Ring
  const padGeo = new THREE.CylinderGeometry(0.95, 1.02, 0.035, 48);
  const padMat = new THREE.MeshStandardMaterial({
    color: "#14223F",
    roughness: 0.45,
    metalness: 0.35,
  });
  const pad = new THREE.Mesh(padGeo, padMat);
  pad.position.set(0, 0.0175, 0);
  pad.receiveShadow = true;
  roomGroup.add(pad);

  const ringGeo = new THREE.TorusGeometry(0.96, 0.012, 10, 64);
  const ringMat = new THREE.MeshStandardMaterial({
    color: "#22D3EE",
    emissive: "#06B6D4",
    emissiveIntensity: 1.15,
    roughness: 0.2,
  });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = Math.PI / 2;
  ring.position.set(0, 0.036, 0);
  roomGroup.add(ring);

  // 3. Soft Ambient Occlusion Contact Shadow Decal under Character Sneakers
  const shadowTex = createRadialContactShadowTexture();
  const aoGeo = new THREE.PlaneGeometry(1.1, 1.1);
  const aoMat = new THREE.MeshBasicMaterial({
    map: shadowTex,
    transparent: true,
    depthWrite: false,
  });
  const aoPlane = new THREE.Mesh(aoGeo, aoMat);
  aoPlane.rotation.x = -Math.PI / 2;
  aoPlane.position.set(0, 0.037, 0.02);
  roomGroup.add(aoPlane);

  // 4. Modern Server Room Architecture (curved bay of enterprise black/white/blue cabinets)
  const ledMeshes: THREE.Mesh[] = [];
  const cabinetGeo = new THREE.BoxGeometry(0.86, 2.55, 0.72);
  const cabinetMat = new THREE.MeshStandardMaterial({
    color: "#0F172A",
    roughness: 0.48,
    metalness: 0.35,
  });
  const whitePanelGeo = new THREE.BoxGeometry(0.92, 2.7, 0.08);
  const whitePanelMat = new THREE.MeshStandardMaterial({
    color: "#E2E8F0",
    roughness: 0.55,
    metalness: 0.14,
  });
  const cyanStripGeo = new THREE.BoxGeometry(0.018, 2.38, 0.02);
  const bladeGeo = new THREE.BoxGeometry(0.72, 0.24, 0.024);
  const bladeMat = new THREE.MeshStandardMaterial({
    color: "#1E293B",
    roughness: 0.4,
    metalness: 0.4,
  });
  const ledGeo = new THREE.BoxGeometry(0.055, 0.018, 0.014);

  const angles = [-0.62, -0.32, 0, 0.32, 0.62];
  const radius = 3.8;
  angles.forEach((ang, idx) => {
    const rack = new THREE.Group();
    const x = Math.sin(ang) * radius;
    const z = -Math.cos(ang) * radius + 0.3;
    rack.position.set(x, 0, z);
    rack.rotation.y = -ang;

    const whiteBack = new THREE.Mesh(whitePanelGeo, whitePanelMat);
    whiteBack.position.set(0, 1.35, -0.38);
    rack.add(whiteBack);

    const chassis = new THREE.Mesh(cabinetGeo, cabinetMat);
    chassis.position.set(0, 1.275, 0);
    chassis.castShadow = true;
    chassis.receiveShadow = true;
    rack.add(chassis);

    [-0.4, 0.4].forEach((sx) => {
      const strip = new THREE.Mesh(cyanStripGeo, ringMat);
      strip.position.set(sx, 1.28, 0.362);
      rack.add(strip);
    });

    [0.45, 0.85, 1.25, 1.65, 2.05].forEach((by, bIdx) => {
      const blade = new THREE.Mesh(bladeGeo, bladeMat);
      blade.position.set(0, by, 0.365);
      rack.add(blade);

      const ledMat = new THREE.MeshStandardMaterial({
        color: "#22D3EE",
        emissive: bIdx % 2 === 0 ? "#06B6D4" : "#1D63ED",
        emissiveIntensity: 0.9,
      });
      const led = new THREE.Mesh(ledGeo, ledMat);
      led.position.set(-0.24 + (idx % 2) * 0.08, by, 0.38);
      led.userData = { phase: idx * 1.1 + bIdx * 0.7 };
      ledMeshes.push(led);
      rack.add(led);
    });

    roomGroup.add(rack);
  });

  scene.add(roomGroup);

  return {
    floorMat,
    floorGrid,
    update: (t: number) => {
      for (const led of ledMeshes) {
        const mat = led.material as THREE.MeshStandardMaterial;
        const pulse = 0.45 + 0.55 * Math.sin(t * 3.2 + (led.userData.phase ?? 0));
        mat.emissiveIntensity = 0.3 + pulse * 0.95;
      }
    },
  };
}

function initViewer() {
  const mountEl = document.getElementById("canvas-mount")!;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#0A1326");
  scene.fog = new THREE.Fog("#0A1326", 6.5, 15.5);

  const camera = new THREE.PerspectiveCamera(
    36,
    window.innerWidth / window.innerHeight,
    0.1,
    50,
  );
  camera.position.set(0.55, 1.32, 2.95);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  mountEl.appendChild(renderer.domElement);

  // Subtle PBR Reflections via RoomEnvironment PMREM
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.45;

  // Cinematic Three-Point + Ambient Lighting (Explicit AmbientLight & DirectionalLight)
  const ambientLight = new THREE.AmbientLight("#E0F2FE", 0.72);
  scene.add(ambientLight);

  const hemiLight = new THREE.HemisphereLight("#F8FAFC", "#0F172A", 0.65);
  scene.add(hemiLight);

  const keyDirLight = new THREE.DirectionalLight("#FFFFFF", 2.15);
  keyDirLight.position.set(2.8, 5.2, 3.8);
  keyDirLight.castShadow = true;
  keyDirLight.shadow.mapSize.set(1024, 1024);
  keyDirLight.shadow.camera.near = 0.5;
  keyDirLight.shadow.camera.far = 14;
  keyDirLight.shadow.camera.left = -2.2;
  keyDirLight.shadow.camera.right = 2.2;
  keyDirLight.shadow.camera.top = 2.6;
  keyDirLight.shadow.camera.bottom = -0.5;
  keyDirLight.shadow.bias = -0.0005;
  keyDirLight.shadow.radius = 4;
  scene.add(keyDirLight);

  const fillDirLight = new THREE.DirectionalLight("#38BDF8", 0.85);
  fillDirLight.position.set(-3.2, 2.4, 2.5);
  scene.add(fillDirLight);

  const rimDirLight = new THREE.DirectionalLight("#22D3EE", 1.75);
  rimDirLight.position.set(-1.8, 3.4, -3.4);
  scene.add(rimDirLight);

  const room = buildModernServerRoom(scene);

  // Build all 4 modular office characters once so Solo vs Interaction switching is instant
  const castContainer = new THREE.Group();
  scene.add(castContainer);

  const rigs: Record<CharacterRoleId, ITSupportRig> = {
    it_support: buildCharacterRig("it_support"),
    office_worker: buildCharacterRig("office_worker"),
    manager: buildCharacterRig("manager"),
    finance_staff: buildCharacterRig("finance_staff"),
  };

  Object.values(rigs).forEach((r) => castContainer.add(r.root));

  // 360-degree Smooth OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0.98, 0);
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.minDistance = 1.65;
  controls.maxDistance = 6.2;
  controls.maxPolarAngle = Math.PI * 0.49;
  controls.minPolarAngle = Math.PI * 0.14;
  controls.autoRotate = false;
  controls.autoRotateSpeed = 1.25;
  controls.update();

  // Interactive State
  let activeRole: CharacterRoleId = "it_support";
  let interactionMode = false;
  let currentAnimation: StickmanAnimationName = "idle";
  let prevAnimation: StickmanAnimationName = "idle";
  let animSwitchAtSec = -10;
  let holdLaptopOverride: boolean | undefined = undefined;
  let manualBlinkUntil = -1;
  let lightTheme = false;

  const titleEl = document.getElementById("viewer-char-title");
  function syncVisibilityAndFraming() {
    if (interactionMode) {
      rigs.it_support.root.visible = true;
      rigs.it_support.root.position.set(0.32, 0.035, 0.08);
      rigs.it_support.root.rotation.set(0, -0.34, 0);

      rigs.office_worker.root.visible = true;
      rigs.office_worker.root.position.set(-0.34, 0.035, 0.14);
      rigs.office_worker.root.rotation.set(0, 0.38, 0);

      rigs.manager.root.visible = true;
      rigs.manager.root.position.set(-0.78, 0.035, -0.26);
      rigs.manager.root.rotation.set(0, 0.56, 0);

      rigs.finance_staff.root.visible = true;
      rigs.finance_staff.root.position.set(0.76, 0.035, -0.24);
      rigs.finance_staff.root.rotation.set(0, -0.52, 0);

      if (titleEl) titleEl.textContent = "INTERAKSI TIM KANTOR (4 KARAKTER 3D)";
    } else {
      (Object.keys(rigs) as CharacterRoleId[]).forEach((roleKey) => {
        const r = rigs[roleKey];
        r.root.visible = roleKey === activeRole;
        r.root.position.set(0, 0.035, 0);
        r.root.rotation.set(0, 0, 0);
      });
      if (titleEl) {
        titleEl.textContent = `${CHARACTER_PRESETS[activeRole].displayName.toUpperCase()} 3D`;
      }
    }
  }
  syncVisibilityAndFraming();

  const clock = new THREE.Clock();

  const interactionAnimations: Record<CharacterRoleId, StickmanAnimationName> = {
    it_support: "explaining",
    office_worker: "panicking",
    manager: "confused",
    finance_staff: "pointing",
  };

  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    if (interactionMode) {
      (Object.keys(rigs) as CharacterRoleId[]).forEach((roleKey, idx) => {
        const pose = evaluateCharacterPose(t + idx * 0.45, {
          animation: interactionAnimations[roleKey],
          holdLaptop: holdLaptopOverride,
        });
        if (t < manualBlinkUntil) {
          const localBlink = 1 - (manualBlinkUntil - t) / 0.18;
          pose.blinkAmount = Math.sin(localBlink * Math.PI);
        }
        applyITSupportPose(rigs[roleKey], pose, holdLaptopOverride);
      });
    } else {
      const transElapsed = t - animSwitchAtSec;
      const transitionProgress =
        animSwitchAtSec > 0 ? Math.min(1, transElapsed / 0.35) : 1;

      const pose = evaluateCharacterPose(t, {
        animation: currentAnimation,
        previousAnimation: prevAnimation,
        transitionProgress,
        holdLaptop: holdLaptopOverride,
      });

      if (t < manualBlinkUntil) {
        const localBlink = 1 - (manualBlinkUntil - t) / 0.18;
        pose.blinkAmount = Math.sin(localBlink * Math.PI);
      }

      applyITSupportPose(rigs[activeRole], pose, holdLaptopOverride);
    }

    room.update(t);
    controls.update();
    renderer.render(scene, camera);
  }

  animate();

  // UI Wireup: Role Switcher & Solo/Interaction Mode
  document.querySelectorAll<HTMLButtonElement>("[data-role]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const roleVal = btn.dataset.role as CharacterRoleId | undefined;
      if (!roleVal || !CHARACTER_PRESETS[roleVal]) return;
      interactionMode = false;
      activeRole = roleVal;
      syncVisibilityAndFraming();
      camera.position.set(0.55, 1.32, 2.95);
      controls.target.set(0, 0.98, 0);
      controls.update();

      document.querySelectorAll("[data-role]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("btn-interaction")?.classList.remove("active");
    });
  });

  const interactionBtn = document.getElementById("btn-interaction");
  interactionBtn?.addEventListener("click", () => {
    interactionMode = !interactionMode;
    syncVisibilityAndFraming();
    interactionBtn.classList.toggle("active", interactionMode);
    if (interactionMode) {
      camera.position.set(0.35, 1.56, 3.85);
      controls.target.set(0, 0.98, 0);
      controls.update();
    } else {
      camera.position.set(0.55, 1.32, 2.95);
      controls.target.set(0, 0.98, 0);
      controls.update();
    }
  });

  // UI Wireup
  document.querySelectorAll<HTMLButtonElement>("[data-anim]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = btn.dataset.anim as StickmanAnimationName;
      if (!next || next === currentAnimation) return;
      prevAnimation = currentAnimation;
      currentAnimation = next;
      animSwitchAtSec = clock.getElapsedTime();

      document
        .querySelectorAll("[data-anim]")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  const autoRotBtn = document.getElementById("btn-autorotate");
  autoRotBtn?.addEventListener("click", () => {
    controls.autoRotate = !controls.autoRotate;
    autoRotBtn.classList.toggle("active", controls.autoRotate);
  });

  const blinkBtn = document.getElementById("btn-blink");
  blinkBtn?.addEventListener("click", () => {
    manualBlinkUntil = clock.getElapsedTime() + 0.18;
  });

  const laptopBtn = document.getElementById("btn-laptop");
  laptopBtn?.addEventListener("click", () => {
    holdLaptopOverride = holdLaptopOverride === undefined ? false : !holdLaptopOverride;
    laptopBtn.textContent = holdLaptopOverride === false ? "Prop: Off" : "Prop: Auto";
  });

  const themeBtn = document.getElementById("btn-theme");
  themeBtn?.addEventListener("click", () => {
    lightTheme = !lightTheme;
    if (lightTheme) {
      scene.background = new THREE.Color("#EDF2F8");
      scene.fog = new THREE.Fog("#EDF2F8", 6.5, 16);
      room.floorMat.color.set("#DCE5F0");
      ambientLight.intensity = 1.05;
      hemiLight.intensity = 0.95;
      themeBtn.textContent = "Server Room: Bright";
    } else {
      scene.background = new THREE.Color("#0A1326");
      scene.fog = new THREE.Fog("#0A1326", 6.5, 15.5);
      room.floorMat.color.set("#0C1528");
      ambientLight.intensity = 0.72;
      hemiLight.intensity = 0.65;
      themeBtn.textContent = "Server Room: Futuristic";
    }
  });

  const resetBtn = document.getElementById("btn-reset");
  resetBtn?.addEventListener("click", () => {
    camera.position.set(
      interactionMode ? 0.35 : 0.55,
      interactionMode ? 1.56 : 1.32,
      interactionMode ? 3.85 : 2.95,
    );
    controls.target.set(0, 0.98, 0);
    controls.update();
  });

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

initViewer();

