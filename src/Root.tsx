import React from "react";
import { Composition, Still } from "remotion";
import {
  CastInteractionPreview,
  StickmanPreview,
} from "./components/character";
import {
  CHARACTER_SHOWCASE_TOTAL_FRAMES,
  CharacterAnimationsDemo,
  Episode01,
  Episode02,
  Episode03,
  Episode04,
  getEpisodeTotalFrames,
} from "./compositions";
import { episode01, episode02, episode03, episode04 } from "./data/episodes";
import { VIDEO_SPECS } from "./utils/theme";

const EP01_TOTAL_FRAMES = getEpisodeTotalFrames(episode01, VIDEO_SPECS.fps);
const EP02_TOTAL_FRAMES = getEpisodeTotalFrames(episode02, VIDEO_SPECS.fps);
const EP03_TOTAL_FRAMES = getEpisodeTotalFrames(episode03, VIDEO_SPECS.fps);
const EP04_TOTAL_FRAMES = getEpisodeTotalFrames(episode04, VIDEO_SPECS.fps);

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Episode01"
        component={Episode01}
        durationInFrames={EP01_TOTAL_FRAMES}
        fps={VIDEO_SPECS.fps}
        width={VIDEO_SPECS.width}
        height={VIDEO_SPECS.height}
      />

      <Composition
        id="Episode02"
        component={Episode02}
        durationInFrames={EP02_TOTAL_FRAMES}
        fps={VIDEO_SPECS.fps}
        width={VIDEO_SPECS.width}
        height={VIDEO_SPECS.height}
      />

      <Composition
        id="Episode03"
        component={Episode03}
        durationInFrames={EP03_TOTAL_FRAMES}
        fps={VIDEO_SPECS.fps}
        width={VIDEO_SPECS.width}
        height={VIDEO_SPECS.height}
      />

      <Composition
        id="Episode04"
        component={Episode04}
        durationInFrames={EP04_TOTAL_FRAMES}
        fps={VIDEO_SPECS.fps}
        width={VIDEO_SPECS.width}
        height={VIDEO_SPECS.height}
      />

      <Composition
        id="CharacterAnimationsShowcase"
        component={CharacterAnimationsDemo}
        durationInFrames={CHARACTER_SHOWCASE_TOTAL_FRAMES}
        fps={VIDEO_SPECS.fps}
        width={VIDEO_SPECS.width}
        height={VIDEO_SPECS.height}
      />

      <Still
        id="StickmanPreview"
        component={StickmanPreview}
        width={VIDEO_SPECS.width}
        height={VIDEO_SPECS.height}
        defaultProps={{
          role: "it_support",
          animation: "idle",
          label: "IT SUPPORT SPECIALIST",
        }}
      />

      <Still
        id="CastInteractionShowcase"
        component={CastInteractionPreview}
        width={VIDEO_SPECS.width}
        height={VIDEO_SPECS.height}
      />
    </>
  );
};
