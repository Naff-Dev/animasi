import type {
  TransitionPresentation,
  TransitionPresentationComponentProps,
} from "@remotion/transitions";
import React from "react";

/**
 * Clean editorial horizontal slide wipe with crisp accent divider bar
 * built for Remotion TransitionSeries on light Warm Cream studio backgrounds.
 */
export const TechSwipePresentation: React.FC<
  TransitionPresentationComponentProps<{ accentColor?: string }>
> = ({
  children,
  presentationDirection,
  presentationProgress,
  passedProps,
}) => {
  const accentColor = passedProps.accentColor ?? "#1D63ED";

  if (presentationDirection === "exiting") {
    return (
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 1 - presentationProgress * 0.25,
          translate: `${-presentationProgress * 14}% 0`,
        }}
      >
        {children}
      </div>
    );
  }

  const clipX = (1 - presentationProgress) * 100;

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          translate: `${clipX}% 0`,
        }}
      >
        {children}
      </div>
      {presentationProgress > 0.02 && presentationProgress < 0.98 && (
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${clipX}%`,
            width: 8,
            backgroundColor: accentColor,
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
};

export function techSwipe(
  props: { accentColor?: string } = {},
): TransitionPresentation<{ accentColor?: string }> {
  return {
    component: TechSwipePresentation,
    props,
  };
}
