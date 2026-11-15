import React from "react";

export interface StudioLightingProps {
  alertIntensity?: number;
  keyIntensity?: number;
}

/**
 * Cinematic PBR Three-Point Lighting Rig tuned for stylized 3D characters
 * in a bright futuristic Modern Server Studio (Ambient + Hemisphere AO + Soft-Shadow Key + Cyan Rim).
 */
export const StudioLighting: React.FC<StudioLightingProps> = ({
  alertIntensity = 0,
  keyIntensity = 2.35,
}) => {
  return (
    <>
      <hemisphereLight args={["#F8FAFC", "#CBD5E1", 1.25]} />
      <ambientLight intensity={0.72} color="#F8FAFC" />

      {/* Warm-white cinematic studio key light casting clean soft shadows */}
      <directionalLight
        position={[3.4, 5.8, 4.6]}
        intensity={keyIntensity}
        color="#FFFFFF"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={20}
        shadow-camera-left={-4.5}
        shadow-camera-right={4.5}
        shadow-camera-top={4.5}
        shadow-camera-bottom={-4.5}
        shadow-bias={-0.0004}
      />

      {/* Crisp cool-blue fill light from front-left to illuminate navy hoodie folds & face */}
      <directionalLight
        position={[-3.2, 3.0, 3.8]}
        intensity={1.05}
        color="#E0F2FE"
      />

      {/* Futuristic cyan rim edge light separating silhouette from background server bays */}
      <directionalLight
        position={[-2.4, 3.8, -3.4]}
        intensity={1.45}
        color="#38BDF8"
      />

      {/* Subtle warm warning glow near workstation during overload/twist scenes */}
      {alertIntensity > 0.01 && (
        <pointLight
          position={[-0.7, 1.4, 1.1]}
          intensity={alertIntensity * 4.5}
          distance={6}
          color="#FB923C"
        />
      )}
    </>
  );
};
