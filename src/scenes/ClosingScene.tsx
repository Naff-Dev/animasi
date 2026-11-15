import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import type { EpisodeSceneConfig } from "../data/episodes/types";
import { KineticHeadline } from "../components/typography/KineticHeadline";
import { ClosingOutroCard } from "../components/typography/SeriesBrandOverlay";
import { SERIES_COLORS } from "../utils/theme";
import { EpisodeSceneStage } from "./EpisodeSceneStage";

export interface ClosingSceneProps {
  scene: EpisodeSceneConfig;
  episodeNumber: string;
}

/**
 * Scene 5: Actionable Takeaway & Series Outro ("TUTUP TAB & RESTART BERKALA!").
 * Smoothly crossfades from practical advice headline into the reusable Series Outro Card.
 */
export const ClosingScene: React.FC<ClosingSceneProps> = ({
  scene,
  episodeNumber,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const timeSec = frame / fps;

  const headlineOpacity = interpolate(timeSec, [3.65, 4.05], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const showOutro = timeSec >= 3.85;

  return (
    <EpisodeSceneStage
      scene={scene}
      deskPosition={[-0.78, 0, -0.95]}
      deskRotation={[0, 0.34, 0]}
      showChair={false}
    >
      {headlineOpacity > 0.01 && (
        <div style={{ opacity: headlineOpacity }}>
          <KineticHeadline
            badge={scene.subBadge}
            headline={scene.headline}
            highlightPhrase={scene.headlineHighlight}
            accentColor={scene.accentColor ?? SERIES_COLORS.green}
            topOffset={188}
          />
        </div>
      )}

      {showOutro && <ClosingOutroCard episodeNumber={episodeNumber} />}
    </EpisodeSceneStage>
  );
};

