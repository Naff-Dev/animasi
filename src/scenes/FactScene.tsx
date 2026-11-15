import React from "react";
import type { EpisodeSceneConfig } from "../data/episodes/types";
import { KineticHeadline } from "../components/typography/KineticHeadline";
import { TaskManagerHUD } from "../components/infographics/TaskManagerHUD";
import { FactInfoHUD } from "../components/infographics/FactInfoHUD";
import { SERIES_COLORS } from "../utils/theme";
import { EpisodeSceneStage } from "./EpisodeSceneStage";

/**
 * Scene: Educational Technical Fact.
 * Combines infographic HUD overlays (Task Manager or Fact Info card) with Stickman explaining.
 */
export const FactScene: React.FC<{ scene: EpisodeSceneConfig }> = ({ scene }) => {
  return (
    <EpisodeSceneStage
      scene={scene}
      deskPosition={[-0.38, 0, -0.82]}
      deskRotation={[0, 0.28, 0]}
      showChair={false}
    >
      <KineticHeadline
        badge={scene.subBadge}
        headline={scene.headline}
        highlightPhrase={scene.headlineHighlight}
        accentColor={scene.accentColor ?? SERIES_COLORS.electricBlue}
        topOffset={188}
      />
      {scene.showTaskManagerHud && <TaskManagerHUD />}
      {scene.factCard && <FactInfoHUD card={scene.factCard} />}
    </EpisodeSceneStage>
  );
};

