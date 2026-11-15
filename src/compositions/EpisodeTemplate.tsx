import React from "react";
import { AbsoluteFill, interpolate, staticFile, useVideoConfig } from "remotion";
import { Audio } from "@remotion/media";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import type { EpisodeConfig, EpisodeSceneConfig } from "../data/episodes/types";
import {
  ClosingScene,
  ErrorTerusOutroScene,
  FactScene,
  HookScene,
  ProblemScene,
  TwistScene,
} from "../scenes";
import { SeriesHeaderBar } from "../components/typography/SeriesBrandOverlay";
import { techSwipe } from "../components/transitions";
import { BRAND_PROFILE, getEpisodeRenderTotalFrames } from "../utils/brand";
import { SERIES_COLORS } from "../utils/theme";
import { secondsToFrames } from "../utils/timing";

export interface EpisodeTemplateProps {
  episode: EpisodeConfig;
}

export function getEpisodeTotalFrames(
  episode: EpisodeConfig,
  fps: number,
): number {
  return getEpisodeRenderTotalFrames(episode.scenes, episode.transitionFrames, fps);
}

function renderSceneNode(
  scene: EpisodeSceneConfig,
  episode: EpisodeConfig,
): React.ReactNode {
  switch (scene.type) {
    case "hook":
      return <HookScene scene={scene} />;
    case "problem":
      return <ProblemScene scene={scene} />;
    case "fact":
      return <FactScene scene={scene} />;
    case "twist":
      return <TwistScene scene={scene} />;
    case "closing":
      return (
        <ClosingScene scene={scene} episodeNumber={episode.episodeNumber} />
      );
    default:
      return <HookScene scene={scene} />;
  }
}

/**
 * Reusable master episode template for the "SATU HARI SATU FAKTA KERJA DI BAGIAN IT SUPPORT" series.
 * Automatically stitches all configured scenes via TransitionSeries, overlays the persistent
 * brand header bar inside Reels safe zones, and mixes corporate BGM underneath voiceovers.
 */
export const EpisodeTemplate: React.FC<EpisodeTemplateProps> = ({ episode }) => {
  const { fps } = useVideoConfig();
  const totalFrames = getEpisodeTotalFrames(episode, fps);

  return (
    <AbsoluteFill style={{ backgroundColor: SERIES_COLORS.creamBg }}>
      <TransitionSeries>
        {episode.scenes.map((scene, index) => {
          const durationInFrames = secondsToFrames(scene.durationSec, fps);
          const nextScene = episode.scenes[index + 1];

          return (
            <React.Fragment key={scene.id}>
              <TransitionSeries.Sequence durationInFrames={durationInFrames}>
                {renderSceneNode(scene, episode)}
              </TransitionSeries.Sequence>

              <TransitionSeries.Transition
                timing={linearTiming({
                  durationInFrames: episode.transitionFrames,
                })}
                presentation={techSwipe({
                  accentColor: nextScene
                    ? (nextScene.accentColor ?? SERIES_COLORS.electricBlue)
                    : SERIES_COLORS.electricBlue,
                })}
              />
            </React.Fragment>
          );
        })}

        {/* Permanent Brand Outro rendered at the end of EVERY episode */}
        <TransitionSeries.Sequence
          durationInFrames={secondsToFrames(BRAND_PROFILE.outroDurationSec, fps)}
        >
          <ErrorTerusOutroScene
            episodeNumber={episode.episodeNumber}
            topic={episode.topic}
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>

      {/* Persistent Brand Identification Bar */}
      <SeriesHeaderBar
        episodeNumber={episode.episodeNumber}
        topic={episode.topic}
      />

      {/* Looped Corporate Tech BGM ducked cleanly below VO */}
      <Audio
        src={staticFile(episode.bgmFile)}
        loop
        volume={(f) =>
          interpolate(
            f,
            [0, 15, Math.max(20, totalFrames - 25), totalFrames],
            [0.02, episode.bgmVolume, episode.bgmVolume, 0],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            },
          )
        }
      />
    </AbsoluteFill>
  );
};

