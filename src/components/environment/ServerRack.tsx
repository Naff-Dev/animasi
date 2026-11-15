import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";

export interface ServerRackProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  alertMode?: boolean;
  looseLanCable?: boolean;
}

/**
 * Futuristic Black & Blue Enterprise Server Rack with Cyan Neon LED Trim & Telemetry Blades.
 */
export const ServerRack: React.FC<ServerRackProps> = ({
  position = [-1.5, 0, -1.5],
  rotation = [0, 0.3, 0],
  alertMode = false,
  looseLanCable = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const timeSec = frame / fps;

  const sideTrimColor = alertMode ? "#EA580C" : "#22D3EE";

  return (
    <group position={position} rotation={rotation} name="ServerRack">
      {/* Main Brushed Matte Black Server Chassis */}
      <mesh position={[0, 1.05, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.76, 2.12, 0.68]} />
        <meshStandardMaterial color="#0F172A" roughness={0.48} metalness={0.32} />
      </mesh>

      {/* Futuristic Vertical Blue/Cyan Edge Light Blades */}
      {[-0.365, 0.365].map((tx, idx) => (
        <mesh key={idx} position={[tx, 1.05, 0.342]}>
          <boxGeometry args={[0.016, 1.98, 0.014]} />
          <meshStandardMaterial
            color={sideTrimColor}
            emissive={sideTrimColor}
            emissiveIntensity={0.88}
          />
        </mesh>
      ))}

      {/* Rack-Mounted Server Blades & Live Telemetry LEDs */}
      {[0.38, 0.7, 1.02, 1.34, 1.66].map((yPos, idx) => {
        const blink = Math.sin(timeSec * (4 + idx * 1.7) + idx) > 0;
        const ledColor =
          alertMode && idx === 2 ? "#EF4444" : blink ? "#22D3EE" : "#1D63ED";
        return (
          <group key={yPos} position={[0, yPos, 0.342]}>
            <mesh>
              <boxGeometry args={[0.64, 0.22, 0.022]} />
              <meshStandardMaterial color="#1E293B" roughness={0.42} metalness={0.35} />
            </mesh>
            {[-0.22, -0.14, -0.06, 0.02].map((lx, j) => (
              <mesh key={j} position={[lx, 0, 0.015]}>
                <sphereGeometry args={[0.011, 8, 8]} />
                <meshStandardMaterial
                  color={ledColor}
                  emissive={ledColor}
                  emissiveIntensity={blink || (alertMode && idx === 2) ? 1.0 : 0.35}
                />
              </mesh>
            ))}
          </group>
        );
      })}

      {/* Top Enterprise Core Router */}
      <group position={[0, 2.15, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.38, 0.07, 0.24]} />
          <meshStandardMaterial color="#1E293B" roughness={0.4} metalness={0.35} />
        </mesh>
        <mesh position={[-0.14, 0.14, -0.08]} rotation={[0, 0, 0.1]}>
          <cylinderGeometry args={[0.008, 0.012, 0.24, 8]} />
          <meshStandardMaterial color="#090D16" />
        </mesh>
        <mesh position={[0.14, 0.14, -0.08]} rotation={[0, 0, -0.1]}>
          <cylinderGeometry args={[0.008, 0.012, 0.24, 8]} />
          <meshStandardMaterial color="#090D16" />
        </mesh>
      </group>

      {looseLanCable && (
        <group position={[0.28, 1.36, 0.4]}>
          <mesh position={[0.06, -0.22, 0.04]} rotation={[0.15, 0, -0.2]}>
            <cylinderGeometry args={[0.012, 0.012, 0.55, 10]} />
            <meshStandardMaterial color="#1D63ED" roughness={0.45} />
          </mesh>
          <mesh position={[0.12, -0.49, 0.08]}>
            <boxGeometry args={[0.03, 0.045, 0.03]} />
            <meshStandardMaterial color="#F8FAFC" />
          </mesh>
        </group>
      )}
    </group>
  );
};
