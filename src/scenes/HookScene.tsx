import React from "react";
import type { EpisodeSceneConfig } from "../data/episodes/types";
import { KineticHeadline } from "../components/typography/KineticHeadline";
import { SERIES_COLORS } from "../utils/theme";
import { EpisodeSceneStage } from "./EpisodeSceneStage";

export interface SceneComponentProps {
  scene: EpisodeSceneConfig;
}

/**
 * Scene 1: Series Hook ("SATU HARI SATU FAKTA KERJA DI BAGIAN IT SUPPORT!").
 * Frames the IT Support Specialist mascot upfront welcoming viewers in a modern bright IT studio.
 */
export const HookScene: React.FC<SceneComponentProps> = ({ scene }) => {
  return (
    <EpisodeSceneStage
      scene={scene}
      deskPosition={[-0.42, 0, -1.1]}
      deskRotation={[0, 0.32, 0]}
      showChair={false}
    >
      <KineticHeadline
        badge={scene.subBadge}
        headline={scene.headline}
        highlightPhrase={scene.headlineHighlight}
        accentColor={scene.accentColor ?? SERIES_COLORS.electricBlue}
        topOffset={188}
      />
    </EpisodeSceneStage>
  );
};

