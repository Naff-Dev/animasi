import React from "react";

export interface OfficeRoomProps {
  floorColor?: string;
  wallColor?: string;
}

/**
 * Clean Bright-Architectural Enterprise Modern Server Room Backdrop.
 * Dominant palette: White architectural cleanroom panels, Dark Navy/Black server housings,
 * Electric Blue framing, and subtle futuristic Cyan light channels + floor contact AO.
 */
export const OfficeRoom: React.FC<OfficeRoomProps> = ({
  floorColor = "#EBF0F7",
  wallColor = "#F5F8FC",
}) => {
  return (
    <group name="ModernServerRoom">
      {/* Smooth Architectural Server-Room Studio Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[22, 22]} />
        <meshStandardMaterial color={floorColor} roughness={0.68} metalness={0.08} />
      </mesh>

      {/* Subtle Raised Matte Tech Tile Platform under Character (soft AO edge feel) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.002, 0.1]} receiveShadow>
        <circleGeometry args={[1.62, 48]} />
        <meshStandardMaterial color="#DDE6F2" roughness={0.78} metalness={0.05} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.003, 0.1]}>
        <ringGeometry args={[1.6, 1.635, 64]} />
        <meshStandardMaterial
          color="#22D3EE"
          emissive="#06B6D4"
          emissiveIntensity={0.55}
          roughness={0.3}
        />
      </mesh>

      {/* Clean White Cleanroom Data Center Back Wall */}
      <mesh position={[0, 3.3, -3.25]} receiveShadow>
        <boxGeometry args={[15, 7, 0.2]} />
        <meshStandardMaterial color={wallColor} roughness={0.82} metalness={0.04} />
      </mesh>

      {/* Matte-Black & Frosted-Glass Server Gallery Bays (clean partition height below headlines) */}
      {[-2.35, -0.8, 0.8, 2.35].map((xPos) => (
        <group key={xPos} position={[xPos, 1.18, -3.05]}>
          {/* Structural matte-black architectural frame */}
          <mesh receiveShadow castShadow>
            <boxGeometry args={[1.28, 2.32, 0.1]} />
            <meshStandardMaterial color="#0F172A" roughness={0.52} metalness={0.25} />
          </mesh>
          {/* Sleek interior brushed slate bay */}
          <mesh position={[0, 0, 0.054]}>
            <planeGeometry args={[1.12, 2.12]} />
            <meshStandardMaterial color="#182540" roughness={0.6} metalness={0.22} />
          </mesh>
          {/* Futuristic vertical cyan status accent strip */}
          <mesh position={[-0.54, 0, 0.06]}>
            <boxGeometry args={[0.022, 2.02, 0.015]} />
            <meshStandardMaterial
              color="#22D3EE"
              emissive="#06B6D4"
              emissiveIntensity={0.85}
            />
          </mesh>
          {/* Subtle server bay horizontal blade slats */}
          {[-0.75, -0.35, 0.05, 0.45, 0.85].map((by) => (
            <mesh key={by} position={[0.02, by, 0.062]}>
              <boxGeometry args={[0.98, 0.045, 0.015]} />
              <meshStandardMaterial color="#253659" roughness={0.45} metalness={0.35} />
            </mesh>
          ))}
        </group>
      ))}

      {/* Clean White Skirting Baseboard with Thin Blue Edge */}
      <mesh position={[0, 0.08, -3.1]} receiveShadow>
        <boxGeometry args={[13, 0.16, 0.08]} />
        <meshStandardMaterial color="#CBD5E1" roughness={0.55} metalness={0.18} />
      </mesh>
    </group>
  );
};
