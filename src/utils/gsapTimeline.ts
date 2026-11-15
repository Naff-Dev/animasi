import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useCurrentFrame, useVideoConfig } from "remotion";

// Disable wall-clock lag smoothing so GSAP timelines stay purely frame-driven
gsap.ticker.lagSmoothing(0);

/**
 * Deterministic GSAP timeline hook synchronized synchronously to Remotion's frame clock.
 * Builds a paused gsap.timeline() inside useLayoutEffect and seeks to `localTimeSec`
 * before browser paint, ensuring zero flickering or non-deterministic drift across renders.
 */
export function useDeterministicGsapTimeline<T extends HTMLElement = HTMLDivElement>(
  buildTimeline: (tl: gsap.core.Timeline, root: T) => void,
  deps: React.DependencyList = [],
  timeOffsetSec = 0,
) {
  const ref = useRef<T | null>(null);
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localTimeSec = Math.max(0, frame / fps - timeOffsetSec);

  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });
      buildTimeline(tl, el);
      tl.seek(localTimeSec, false);
      tlRef.current = tl;
    }, el);

    return () => {
      tlRef.current = null;
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useLayoutEffect(() => {
    if (tlRef.current) {
      tlRef.current.seek(localTimeSec, false);
    }
  }, [localTimeSec]);

  return ref;
}

