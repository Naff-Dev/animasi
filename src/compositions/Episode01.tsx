import React from "react";
import { episode01 } from "../data/episodes";
import { EpisodeTemplate } from "./EpisodeTemplate";

export const Episode01: React.FC = () => {
  return <EpisodeTemplate episode={episode01} />;
};

