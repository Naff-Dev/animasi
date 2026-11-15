import React, { useEffect, useMemo } from "react";
import * as THREE from "three";
import { useCurrentFrame, useVideoConfig } from "remotion";

export type MonitorScreenMode =
  | "idle_desktop"
  | "freezing"
  | "task_manager"
  | "chrome_chaos"
  | "ticket_queue"
  | "network_down"
  | "phishing_alert"
  | "printer_queue"
  | "healthy";

export interface WorkstationDeskProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  screenMode?: MonitorScreenMode;
  overheatFactor?: number; // 0..1 spins fan faster & shows warning indicator
  showChair?: boolean;
  chairOffset?: [number, number, number];
  chairRotationY?: number;
}

function drawMonitorScreen(
  ctx: CanvasRenderingContext2D,
  mode: MonitorScreenMode,
  timeSec: number,
) {
  const w = ctx.canvas.width;
  const h = ctx.canvas.height;

  // Clean bright modern studio display background
  ctx.fillStyle = "#F8FAFC";
  ctx.fillRect(0, 0, w, h);

  if (mode === "idle_desktop") {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(28, 28, w - 56, h - 84);
    ctx.strokeStyle = "#CBD5E1";
    ctx.lineWidth = 3;
    ctx.strokeRect(28, 28, w - 56, h - 84);

    ctx.fillStyle = "#1D63ED";
    ctx.font = "bold 26px sans-serif";
    ctx.fillText("WORKSTATION KANTOR", 54, 82);

    const labels = ["CPU", "RAM", "DISK"];
    labels.forEach((lbl, idx) => {
      const y = 148 + idx * 50;
      ctx.fillStyle = "#334155";
      ctx.font = "bold 18px sans-serif";
      ctx.fillText(lbl, 54, y);
      ctx.fillStyle = "#E2E8F0";
      ctx.fillRect(150, y - 16, 280, 20);
      ctx.fillStyle = "#1D63ED";
      ctx.fillRect(150, y - 16, 120 + Math.sin(timeSec * 2 + idx) * 20, 20);
    });
  } else if (mode === "freezing") {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(32, 32, w - 64, h - 94);
    ctx.strokeStyle = "#EA580C";
    ctx.lineWidth = 4;
    ctx.strokeRect(32, 32, w - 64, h - 94);

    ctx.fillStyle = "#EA580C";
    ctx.fillRect(32, 32, w - 64, 42);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 19px sans-serif";
    ctx.fillText("Laporan_Keuangan.xlsx (Not Responding)", 50, 60);

    const cx = w / 2;
    const cy = h / 2 + 6;
    const angle = timeSec * 6.5;
    for (let i = 0; i < 8; i++) {
      const a = angle + (i * Math.PI) / 4;
      const alpha = 0.22 + 0.78 * ((i + 1) / 8);
      ctx.fillStyle = `rgba(234, 88, 12, ${alpha})`;
      ctx.beginPath();
      ctx.arc(cx + Math.cos(a) * 38, cy + Math.sin(a) * 38, 8, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.fillStyle = "#DC2626";
    ctx.font = "bold 24px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("NGE-FREEZE...", cx, cy + 84);
    ctx.textAlign = "left";
  } else if (mode === "task_manager") {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(20, 20, w - 40, h - 40);
    ctx.strokeStyle = "#CBD5E1";
    ctx.lineWidth = 3;
    ctx.strokeRect(20, 20, w - 40, h - 40);

    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText("TASK MANAGER", 40, 56);

    const bars = [
      { label: "CPU", val: 98, color: "#DC2626" },
      { label: "RAM", val: 96, color: "#EA580C" },
      { label: "DISK", val: 99, color: "#DC2626" },
    ];
    bars.forEach((b, idx) => {
      const y = 104 + idx * 54;
      const jitter = Math.sin(timeSec * 8 + idx * 2) * 1.5;
      const pct = Math.min(100, Math.round(b.val + jitter));
      ctx.fillStyle = "#1E293B";
      ctx.font = "bold 20px sans-serif";
      ctx.fillText(b.label, 42, y);

      ctx.fillStyle = "#E2E8F0";
      ctx.fillRect(112, y - 20, 280, 24);
      ctx.fillStyle = b.color;
      ctx.fillRect(112, y - 20, (280 * pct) / 100, 24);

      ctx.fillStyle = b.color;
      ctx.fillText(`${pct}%`, 406, y);
    });

    ctx.strokeStyle = "#DC2626";
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    for (let i = 0; i <= 18; i++) {
      const gx = 42 + i * 23;
      const gy = 285 - (80 + Math.sin(timeSec * 6 + i * 0.7) * 12) * 0.42;
      if (i === 0) ctx.moveTo(gx, gy);
      else ctx.lineTo(gx, gy);
    }
    ctx.stroke();
  } else if (mode === "chrome_chaos") {
    ctx.fillStyle = "#F1F5F9";
    ctx.fillRect(16, 16, w - 32, h - 32);

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 15; col++) {
        const tx = 20 + col * 31;
        const ty = 22 + row * 28;
        ctx.fillStyle = (row + col) % 3 === 0 ? "#DC2626" : "#CBD5E1";
        ctx.fillRect(tx, ty, 28, 22);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(tx + 5, ty + 6, 8, 8);
      }
    }

    const flash = Math.sin(timeSec * 12) > 0;
    ctx.fillStyle = flash ? "#DC2626" : "#B91C1C";
    ctx.fillRect(36, 132, w - 72, 128);
    ctx.strokeStyle = "#FACC15";
    ctx.lineWidth = 4;
    ctx.strokeRect(36, 132, w - 72, 128);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 36px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("47 TAB BROWSER!", w / 2, 184);
    ctx.fillStyle = "#FEF08A";
    ctx.font = "bold 28px sans-serif";
    ctx.fillText("UPTIME: 21 HARI", w / 2, 232);
    ctx.textAlign = "left";
  } else if (mode === "ticket_queue") {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(20, 20, w - 40, h - 40);
    ctx.strokeStyle = "#EA580C";
    ctx.lineWidth = 3;
    ctx.strokeRect(20, 20, w - 40, h - 40);

    ctx.fillStyle = "#EA580C";
    ctx.fillRect(20, 20, w - 40, 46);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 21px sans-serif";
    ctx.fillText("HELPDESK QUEUE: 14 TIKET BARU", 38, 50);

    const tickets = [
      { tag: "URGENT", text: "Wi-Fi Lantai 2 Putus!", c: "#DC2626" },
      { tag: "AV/MEET", text: "Proyektor R. Rapat Mati", c: "#EA580C" },
      { tag: "SECUR", text: "Email Phishing Masuk!", c: "#1D63ED" },
    ];
    tickets.forEach((t, idx) => {
      const y = 88 + idx * 60;
      ctx.fillStyle = "#F8FAFC";
      ctx.fillRect(36, y, w - 72, 46);
      ctx.fillStyle = t.c;
      ctx.fillRect(36, y, 108, 46);
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(t.tag, 50, y + 29);
      ctx.fillStyle = "#0F172A";
      ctx.font = "bold 18px sans-serif";
      ctx.fillText(t.text, 158, y + 29);
    });
  } else if (mode === "network_down") {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(20, 20, w - 40, h - 40);
    ctx.strokeStyle = "#DC2626";
    ctx.lineWidth = 4;
    ctx.strokeRect(20, 20, w - 40, h - 40);

    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText("NETWORK TOPOLOGY MONITOR", 38, 58);

    const blink = Math.sin(timeSec * 8) > 0;
    ctx.fillStyle = blink ? "#DC2626" : "#EA580C";
    ctx.fillRect(38, 78, w - 76, 56);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 24px sans-serif";
    ctx.fillText("LINK DOWN - IP CONFLICT!", 54, 114);

    ctx.strokeStyle = "#1D63ED";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(64, 210);
    ctx.lineTo(w / 2, 175);
    ctx.lineTo(w - 64, 225);
    ctx.stroke();

    [
      [64, 210, "#16A34A"],
      [w / 2, 175, "#DC2626"],
      [w - 64, 225, "#EA580C"],
    ].forEach(([cx, cy, c]) => {
      ctx.fillStyle = String(c);
      ctx.beginPath();
      ctx.arc(Number(cx), Number(cy), 16, 0, Math.PI * 2);
      ctx.fill();
    });
  } else if (mode === "phishing_alert") {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(20, 20, w - 40, h - 40);
    ctx.strokeStyle = "#1D63ED";
    ctx.lineWidth = 4;
    ctx.strokeRect(20, 20, w - 40, h - 40);

    ctx.fillStyle = "#1D63ED";
    ctx.fillRect(20, 20, w - 40, 48);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 21px sans-serif";
    ctx.fillText("FIREWALL & BACKUP SHIELD", 38, 51);

    ctx.fillStyle = "#FEF2F2";
    ctx.fillRect(38, 86, w - 76, 76);
    ctx.fillStyle = "#DC2626";
    ctx.font = "bold 24px sans-serif";
    ctx.fillText("PHISHING LINK DIBLOKIR!", 54, 126);
    ctx.fillStyle = "#475569";
    ctx.font = "bold 17px sans-serif";
    ctx.fillText("hadiah-undian-resmi.xyz [QUARANTINED]", 54, 152);

    ctx.fillStyle = "#ECFDF5";
    ctx.fillRect(38, 178, w - 76, 74);
    ctx.fillStyle = "#16A34A";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText("SERVER BACKUP OTOMATIS: 100%", 54, 224);
  } else if (mode === "printer_queue") {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(20, 20, w - 40, h - 40);
    ctx.strokeStyle = "#EA580C";
    ctx.lineWidth = 4;
    ctx.strokeRect(20, 20, w - 40, h - 40);

    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText("RUANG RAPAT DIREKSI & PRINTER", 38, 56);

    ctx.fillStyle = "#FFF7ED";
    ctx.fillRect(38, 78, w - 76, 72);
    ctx.fillStyle = "#EA580C";
    ctx.font = "bold 24px sans-serif";
    ctx.fillText("PROYEKTOR: NO HDMI SIGNAL", 54, 122);

    ctx.fillStyle = "#FEF2F2";
    ctx.fillRect(38, 166, w - 76, 84);
    ctx.fillStyle = "#DC2626";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText("PRINTER PAPER JAM (48 ANTRI)", 54, 204);
    ctx.fillStyle = "#475569";
    ctx.font = "bold 17px sans-serif";
    ctx.fillText("Status: Urgent - Meeting mulai 5 menit lagi", 54, 234);
  } else {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(28, 28, w - 56, h - 56);
    ctx.strokeStyle = "#1D63ED";
    ctx.lineWidth = 4;
    ctx.strokeRect(28, 28, w - 56, h - 56);

    ctx.fillStyle = "#1D63ED";
    ctx.font = "bold 34px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("SISTEM LANCAR", w / 2, h / 2 - 10);
    ctx.fillStyle = "#475569";
    ctx.font = "bold 22px sans-serif";
    ctx.fillText("CPU 12% • RAM 34%", w / 2, h / 2 + 34);
    ctx.textAlign = "left";
  }

  // Clean taskbar
  ctx.fillStyle = "#E2E8F0";
  ctx.fillRect(0, h - 34, w, 34);
  ctx.fillStyle = "#1D63ED";
  ctx.fillRect(14, h - 25, 18, 18);
}

/**
 * Clean Modern Warm-Wood & Matte-White IT Workstation Desk.
 */
export const WorkstationDesk: React.FC<WorkstationDeskProps> = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  screenMode = "idle_desktop",
  overheatFactor = 0,
  showChair = true,
  chairOffset = [0, 0, 0.55],
  chairRotationY = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const timeSec = frame / fps;

  const { canvas, texture } = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 512;
    c.height = 320;
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return { canvas: c, texture: t };
  }, []);

  useEffect(() => {
    return () => {
      texture.dispose();
    };
  }, [texture]);

  const ctx = canvas.getContext("2d");
  if (ctx) {
    drawMonitorScreen(ctx, screenMode, timeSec);
    texture.needsUpdate = true;
  }

  const fanSpeed = 6 + overheatFactor * 26;
  const fanRotZ = timeSec * fanSpeed;
  const towerStatusColor =
    overheatFactor > 0.5 ? "#DC2626" : overheatFactor > 0.2 ? "#EA580C" : "#1D63ED";

  return (
    <group position={position} rotation={rotation} name="WorkstationDesk">
      {/* Warm Natural Oak Desk Top */}
      <mesh position={[0, 0.74, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.65, 0.055, 0.82]} />
        <meshStandardMaterial color="#DFC39D" roughness={0.62} metalness={0.02} />
      </mesh>

      {/* Clean Matte Off-White Desk Legs */}
      {[
        [-0.74, 0.36, -0.32],
        [0.74, 0.36, -0.32],
        [-0.74, 0.36, 0.32],
        [0.74, 0.36, 0.32],
      ].map(([lx, ly, lz], i) => (
        <mesh key={i} position={[lx, ly, lz]} castShadow receiveShadow>
          <cylinderGeometry args={[0.028, 0.028, 0.72, 14]} />
          <meshStandardMaterial color="#E2E8F0" roughness={0.45} metalness={0.2} />
        </mesh>
      ))}

      {/* Clean Studio Display Monitor */}
      <group position={[-0.08, 0.77, -0.18]}>
        <mesh position={[0, 0.015, 0]} castShadow>
          <boxGeometry args={[0.32, 0.025, 0.2]} />
          <meshStandardMaterial color="#CBD5E1" roughness={0.35} metalness={0.35} />
        </mesh>
        <mesh position={[0, 0.16, -0.05]} castShadow>
          <boxGeometry args={[0.06, 0.3, 0.04]} />
          <meshStandardMaterial color="#CBD5E1" roughness={0.35} metalness={0.35} />
        </mesh>

        {/* Sleek Monitor Bezel */}
        <mesh position={[0, 0.34, 0]} castShadow>
          <boxGeometry args={[0.88, 0.52, 0.035]} />
          <meshStandardMaterial color="#1E293B" roughness={0.35} metalness={0.2} />
        </mesh>

        {/* Bright Legible Screen */}
        <mesh position={[0, 0.34, 0.019]}>
          <planeGeometry args={[0.82, 0.46]} />
          <meshStandardMaterial
            map={texture}
            emissiveMap={texture}
            emissive="#FFFFFF"
            emissiveIntensity={0.42}
            roughness={0.25}
          />
        </mesh>
      </group>

      {/* Clean Matte Keyboard */}
      <group position={[-0.1, 0.775, 0.15]} rotation={[0.06, 0, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.42, 0.02, 0.15]} />
          <meshStandardMaterial color="#F8FAFC" roughness={0.45} />
        </mesh>
        <mesh position={[0, 0.008, 0]}>
          <boxGeometry args={[0.38, 0.01, 0.11]} />
          <meshStandardMaterial color="#334155" roughness={0.55} />
        </mesh>
      </group>

      {/* Clean Wireless Mouse */}
      <mesh position={[0.24, 0.78, 0.16]} castShadow>
        <capsuleGeometry args={[0.026, 0.045, 8, 14]} />
        <meshStandardMaterial color="#F8FAFC" roughness={0.4} />
      </mesh>

      {/* Electric Blue Ceramic Coffee Mug */}
      <group position={[-0.58, 0.82, 0.18]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.042, 0.038, 0.1, 18]} />
          <meshStandardMaterial color="#1D63ED" roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.042, 0]}>
          <cylinderGeometry args={[0.036, 0.036, 0.01, 16]} />
          <meshStandardMaterial color="#3E2723" roughness={0.4} />
        </mesh>
      </group>

      {/* Clean Modern PC Tower */}
      <group position={[0.58, 0.99, -0.08]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.22, 0.44, 0.44]} />
          <meshStandardMaterial color="#1E293B" roughness={0.48} metalness={0.12} />
        </mesh>
        {/* Status Indicator Light */}
        <mesh position={[0, 0.12, 0.222]}>
          <boxGeometry args={[0.06, 0.025, 0.01]} />
          <meshStandardMaterial
            color={towerStatusColor}
            emissive={towerStatusColor}
            emissiveIntensity={0.9}
          />
        </mesh>
        {/* Mechanical Cooling Fan */}
        <group position={[-0.112, 0.06, 0]} rotation={[0, -Math.PI / 2, fanRotZ]}>
          <mesh>
            <torusGeometry args={[0.075, 0.008, 10, 24]} />
            <meshStandardMaterial color="#64748B" roughness={0.4} />
          </mesh>
          <mesh>
            <boxGeometry args={[0.13, 0.018, 0.008]} />
            <meshStandardMaterial color="#CBD5E1" />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <boxGeometry args={[0.13, 0.018, 0.008]} />
            <meshStandardMaterial color="#CBD5E1" />
          </mesh>
        </group>

        {/* Cartoon heat/steam puffs when overheating */}
        {overheatFactor > 0.35 &&
          [0, 1, 2].map((i) => {
            const p = (timeSec * 1.4 + i * 0.33) % 1;
            const py = 0.26 + p * 0.36;
            const px = Math.sin(timeSec * 4 + i * 2) * 0.05;
            const s = (1 - p) * 0.055 * overheatFactor;
            return (
              <mesh key={i} position={[px, py, 0]} scale={s}>
                <sphereGeometry args={[1, 12, 10]} />
                <meshStandardMaterial
                  color="#F97316"
                  roughness={0.8}
                  transparent
                  opacity={(1 - p) * 0.65}
                />
              </mesh>
            );
          })}
      </group>

      {/* Modern Office Chair (Slate Navy cushion + crisp White frame) */}
      {showChair && (
        <group position={chairOffset} rotation={[0, chairRotationY, 0]}>
          <mesh position={[0, 0.44, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.46, 0.06, 0.44]} />
            <meshStandardMaterial color="#1E293B" roughness={0.65} />
          </mesh>
          <mesh position={[0, 0.74, 0.21]} rotation={[-0.08, 0, 0]} castShadow>
            <boxGeometry args={[0.42, 0.54, 0.05]} />
            <meshStandardMaterial color="#1E293B" roughness={0.65} />
          </mesh>
          <mesh position={[0, 0.99, 0.22]}>
            <boxGeometry args={[0.34, 0.025, 0.055]} />
            <meshStandardMaterial color="#1D63ED" roughness={0.4} />
          </mesh>
          <mesh position={[0, 0.24, 0]}>
            <cylinderGeometry args={[0.03, 0.03, 0.38, 12]} />
            <meshStandardMaterial color="#94A3B8" metalness={0.5} roughness={0.35} />
          </mesh>
          {[0, 1, 2, 3, 4].map((idx) => (
            <mesh
              key={idx}
              position={[
                Math.sin((idx * Math.PI * 2) / 5) * 0.14,
                0.05,
                Math.cos((idx * Math.PI * 2) / 5) * 0.14,
              ]}
              rotation={[0, (idx * Math.PI * 2) / 5, 0]}
            >
              <boxGeometry args={[0.04, 0.035, 0.28]} />
              <meshStandardMaterial color="#CBD5E1" metalness={0.3} roughness={0.45} />
            </mesh>
          ))}
        </group>
      )}
    </group>
  );
};
