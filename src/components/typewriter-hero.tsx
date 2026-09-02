"use client";

import { useEffect, useMemo, useState } from "react";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

type Frame = {
  line1: string;
  line2: string;
  /** which line the caret sits on (1 or 2) */
  caret: 1 | 2;
  /** ms to wait before the next frame */
  delay: number;
};

const TYPE_MS = 55;
const ERASE_MS = 28;
const HOLD_MS = 1400;
const PAUSE_MS = 450;

function buildFrames(): Frame[] {
  const frames: Frame[] = [];
  const intro = "Hi im Fahmi Hanafi";
  const welcome = "Welcome to";
  const brand = "fhanaLabs";

  // 1. type the intro line
  for (let i = 1; i <= intro.length; i++) {
    frames.push({ line1: intro.slice(0, i), line2: "", caret: 1, delay: TYPE_MS });
  }
  frames.push({ line1: intro, line2: "", caret: 1, delay: HOLD_MS });

  // 2. erase the intro line
  for (let i = intro.length - 1; i >= 0; i--) {
    frames.push({ line1: intro.slice(0, i), line2: "", caret: 1, delay: ERASE_MS });
  }
  frames.push({ line1: "", line2: "", caret: 1, delay: PAUSE_MS });

  // 3. type "Welcome to"
  for (let i = 1; i <= welcome.length; i++) {
    frames.push({ line1: welcome.slice(0, i), line2: "", caret: 1, delay: TYPE_MS });
  }
  frames.push({ line1: welcome, line2: "", caret: 1, delay: PAUSE_MS });

  // 4. type "fhanaLabs"
  for (let i = 1; i <= brand.length; i++) {
    frames.push({ line1: welcome, line2: brand.slice(0, i), caret: 2, delay: TYPE_MS });
  }
  return frames;
}

/**
 * Two-act typewriter hero:
 *   "Hi im Fahmi Hanafi"  →  "Welcome to / fhanaLabs"
 *
 * The visible frame is derived from elapsed time (a single async timer
 * advances `elapsed`; no setState happens synchronously in an effect).
 * Height is reserved for the final two-line state so the animation never
 * causes layout shift, and the real text stays in the DOM (screen readers
 * get the full heading immediately).
 */
export default function TypewriterHero() {
  const reducedMotion = usePrefersReducedMotion();
  const frames = useMemo(() => buildFrames(), []);
  const [elapsed, setElapsed] = useState(0);

  // cumulative start-time of each frame
  const starts = useMemo(() => {
    const s: number[] = [];
    let t = 0;
    for (const f of frames) {
      s.push(t);
      t += f.delay;
    }
    return s;
  }, [frames]);
  const total = (starts.at(-1) ?? 0) + (frames.at(-1)?.delay ?? 0);

  useEffect(() => {
    if (reducedMotion) return;
    const start = performance.now();
    let raf: number;
    let shown = -1;
    const tick = (now: number) => {
      const e = now - start;
      let i = 0;
      for (let k = 0; k < starts.length; k++) {
        if (e >= starts[k]) i = k;
        else break;
      }
      if (i !== shown) {
        shown = i;
        setElapsed(e);
      }
      if (e < total) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reducedMotion, total, starts]);

  let index = frames.length - 1;
  if (!reducedMotion) {
    index = 0;
    for (let i = 0; i < starts.length; i++) {
      if (elapsed >= starts[i]) index = i;
      else break;
    }
  }

  const frame = frames[index];
  const done = index >= frames.length - 1;

  return (
    <div className="flex min-h-[10.5rem] flex-col items-center justify-center text-center sm:min-h-[14rem]">
      {/* accessible full text for assistive tech */}
      <span className="sr-only">
        Hi, I&apos;m Fahmi Hanafi. Welcome to FHANA Labs.
      </span>

      <p
        aria-hidden="true"
        className="text-2xl font-light tracking-tight text-ink sm:text-4xl md:text-5xl"
      >
        {frame.line1}
        {frame.caret === 1 && <span className="caret" />}
      </p>

      <p
        aria-hidden="true"
        className="mt-2 min-h-[1.15em] text-4xl font-light tracking-tight text-ink sm:mt-3 sm:text-6xl md:text-7xl"
      >
        {frame.line2}
        {frame.caret === 2 && <span className="caret" />}
      </p>

      <p
        aria-hidden="true"
        className={`mt-6 text-sm text-muted transition-opacity duration-700 sm:mt-8 ${
          done ? "opacity-100" : "opacity-0"
        }`}
      >
        An independent Software Engineer — small products, built with intent.
      </p>
    </div>
  );
}
