import React from "react";
import type { EpisodeSceneConfig } from "../data/episodes/types";
import { KineticHeadline } from "../components/typography/KineticHeadline";
import { FactInfoHUD } from "../components/infographics/FactInfoHUD";
import { SERIES_COLORS } from "../utils/theme";
import { EpisodeSceneStage } from "./EpisodeSceneStage";

/**
 * Scene 2: Daily IT Support Problem.
 * Shows the workstation beside the IT Support character with optional ticket HUD.
 */
export const ProblemScene: React.FC<{ scene: EpisodeSceneConfig }> = ({ scene }) => {
  return (
    <EpisodeSceneStage
      scene={scene}
      deskPosition={[0.42, 0, -0.78]}
      deskRotation={[0, -0.34, 0]}
      showChair
      chairOffset={[0.15, 0, 0.55]}
    >
      <KineticHeadline
        badge={scene.subBadge}
        headline={scene.headline}
        highlightPhrase={scene.headlineHighlight}
        accentColor={scene.accentColor ?? SERIES_COLORS.red}
        topOffset={188}
      />
      {scene.factCard && <FactInfoHUD card={scene.factCard} />}
    </EpisodeSceneStage>
  );
};

