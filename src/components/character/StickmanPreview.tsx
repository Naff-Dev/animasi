import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import { ThreeCanvas } from "@remotion/three";
import { ITSupportCharacter } from "./StickmanCharacter";
import { CameraRig, OfficeRoom, StudioLighting } from "../environment";
import { FONTS, SERIES_COLORS } from "../../utils/theme";
import {
  CHARACTER_PRESETS,
  type CharacterRoleId,
  type StickmanAnimationName,
} from "./types";

export interface StickmanPreviewProps {
  role?: CharacterRoleId;
  animation?: StickmanAnimationName;
  label?: string;
}

/**
 * Studio Portrait Showcase for any 3D Character Role (`it_support`, `office_worker`, `manager`, `finance_staff`).
 */
export const StickmanPreview: React.FC<StickmanPreviewProps> = ({
  role = "it_support",
  animation = "idle",
  label,
}) => {
  const { width, height } = useVideoConfig();
  const displayLabel = label ?? CHARACTER_PRESETS[role].displayName.toUpperCase();

  return (
    <AbsoluteFill style={{ backgroundColor: "#F4F7FB" }}>
      <ThreeCanvas
        width={width}
        height={height}
        shadows
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        camera={{ fov: 35 }}
      >
        <color attach="background" args={["#F4F7FB"]} />
        <fog attach="fog" args={["#F4F7FB", 7.5, 16]} />
        <CameraRig
          keyframes={[
            {
              timeSec: 0,
              position: [0.46, 1.16, 3.92],
              lookAt: [0, 0.94, 0],
            },
          ]}
        />
        <StudioLighting keyIntensity={2.3} />
        <OfficeRoom />
        <ITSupportCharacter
          role={role}
          animation={animation}
          position={[0, 0, 0.1]}
          rotation={[0, 0.18, 0]}
          scale={1}
          holdLaptop
        />
      </ThreeCanvas>

      <div
        style={{
          position: "absolute",
          top: 118,
          left: 68,
          right: 68,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            fontFamily: FONTS.display,
            fontSize: 48,
            fontWeight: 900,
            color: SERIES_COLORS.inkNavy,
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          {displayLabel}
        </div>
        <div
          style={{
            width: 148,
            height: 6,
            borderRadius: 999,
            backgroundColor: SERIES_COLORS.electricBlue,
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 66,
          left: 68,
          right: 68,
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            backgroundColor: SERIES_COLORS.warmWhite,
            border: "1.5px solid #D8D1C5",
            boxShadow: "0 10px 26px rgba(20, 29, 48, 0.1)",
            borderRadius: 999,
            padding: "10px 26px",
            fontFamily: FONTS.body,
            fontSize: 22,
            fontWeight: 800,
            color: SERIES_COLORS.inkNavy,
          }}
        >
          SATU HARI SATU FAKTA KERJA DI BAGIAN IT SUPPORT
        </div>
      </div>
    </AbsoluteFill>
  );
};

/**
 * Group showcase rendering all 4 modular 3D office characters interacting side by side.
 */
export const CastInteractionPreview: React.FC = () => {
  const { width, height } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "#F4F7FB" }}>
      <ThreeCanvas
        width={width}
        height={height}
        shadows
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        camera={{ fov: 38 }}
      >
        <color attach="background" args={["#F4F7FB"]} />
        <fog attach="fog" args={["#F4F7FB", 7.5, 16]} />
        <CameraRig
          keyframes={[
            {
              timeSec: 0,
              position: [0.0, 1.34, 5.65],
              lookAt: [0, 1.0, 0],
            },
          ]}
        />
        <StudioLighting keyIntensity={2.3} />
        <OfficeRoom />
        <ITSupportCharacter
          role="it_support"
          animation="explaining"
          position={[-0.2, 0, 0.34]}
          rotation={[0, 0.14, 0]}
        />
        <ITSupportCharacter
          role="office_worker"
          animation="panicking"
          position={[-0.68, 0, -0.18]}
          rotation={[0, 0.36, 0]}
          holdLaptop
        />
        <ITSupportCharacter
          role="finance_staff"
          animation="pointing"
          position={[0.3, 0, 0.14]}
          rotation={[0, -0.32, 0]}
          holdLaptop
        />
        <ITSupportCharacter
          role="manager"
          animation="confused"
          position={[0.72, 0, -0.32]}
          rotation={[0, -0.44, 0]}
          holdLaptop
        />
      </ThreeCanvas>

      <div
        style={{
          position: "absolute",
          top: 118,
          left: 56,
          right: 56,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            fontFamily: FONTS.display,
            fontSize: 44,
            fontWeight: 900,
            color: SERIES_COLORS.inkNavy,
            textAlign: "center",
            lineHeight: 1.12,
          }}
        >
          4 KARAKTER KANTOR 3D MODULAR
        </div>
        <div
          style={{
            fontFamily: FONTS.body,
            fontSize: 21,
            fontWeight: 700,
            color: SERIES_COLORS.slateMuted,
            textAlign: "center",
          }}
        >
          IT Support • Raka (Staff) • Sari (Finance) • Pak Bos (Manajer)
        </div>
      </div>
    </AbsoluteFill>
  );
};
