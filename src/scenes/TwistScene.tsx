import React from "react";
import type { EpisodeSceneConfig } from "../data/episodes/types";
import { KineticHeadline } from "../components/typography/KineticHeadline";
import { TwistCalloutCards } from "../components/typography/TwistCalloutCards";
import { SERIES_COLORS } from "../utils/theme";
import { EpisodeSceneStage } from "./EpisodeSceneStage";

/**
 * Scene 4: Relatable Field Twist ("47 TAB CHROME AKTIF + 3 MINGGU TANPA RESTART").
 * Stickman reacts from thinking to surprised to comedic facepalm as callout badges slam in.
 */
export const TwistScene: React.FC<{ scene: EpisodeSceneConfig }> = ({ scene }) => {
  return (
    <EpisodeSceneStage
      scene={scene}
      deskPosition={[0.52, 0, -0.95]}
      deskRotation={[0, -0.36, 0]}
      showChair={false}
    >
      <KineticHeadline
        badge={scene.subBadge}
        headline={scene.headline}
        highlightPhrase={scene.headlineHighlight}
        accentColor={scene.accentColor ?? SERIES_COLORS.orange}
        topOffset={188}
      />
      {scene.twistCallouts && (
        <TwistCalloutCards
          topLabel={scene.twistCallouts.topLabel}
          bottomLabel={scene.twistCallouts.bottomLabel}
        />
      )}
    </EpisodeSceneStage>
  );
};

