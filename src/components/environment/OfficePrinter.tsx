import React from "react";

export interface OfficePrinterProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  statusColor?: string;
}

/**
 * Clean Matte White & Slate Office Multifunction Printer prop.
 */
export const OfficePrinter: React.FC<OfficePrinterProps> = ({
  position = [1.45, 0, -1.3],
  rotation = [0, -0.4, 0],
  statusColor = "#1D63ED",
}) => {
  return (
    <group position={position} rotation={rotation} name="OfficePrinter">
      <mesh position={[0, 0.35, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.66, 0.7, 0.56]} />
        <meshStandardMaterial color="#E2E8F0" roughness={0.55} />
      </mesh>
      <mesh position={[0, 0.86, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.7, 0.32, 0.58]} />
        <meshStandardMaterial color="#F8FAFC" roughness={0.45} />
      </mesh>
      <mesh position={[0, 0.74, 0.24]} castShadow>
        <boxGeometry args={[0.42, 0.06, 0.16]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.5} />
      </mesh>
      <mesh position={[0, 1.04, 0]} castShadow>
        <boxGeometry args={[0.66, 0.045, 0.54]} />
        <meshStandardMaterial color="#334155" roughness={0.45} />
      </mesh>
      <mesh position={[0.24, 0.92, 0.295]}>
        <boxGeometry args={[0.1, 0.024, 0.01]} />
        <meshStandardMaterial color={statusColor} roughness={0.35} />
      </mesh>
    </group>
  );
};
