/**
 * Smooth, lightweight wave background.
 * Pure SVG + CSS transform animation (GPU-friendly, no canvas/WebGL/JS loop).
 * Colors come from CSS variables so the effect adapts to light/dark mode.
 */
export default function WaveBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg
        className="absolute inset-x-0 bottom-0 h-[55%] w-[200%] min-w-[2880px]"
        viewBox="0 0 2880 400"
        preserveAspectRatio="none"
        fill="none"
      >
        <g className="wave-layer" style={{ animationDuration: "26s" }}>
          <path
            d="M0 260 C 240 200, 480 320, 720 260 S 1200 200, 1440 260 S 1920 320, 2160 260 S 2640 200, 2880 260 V400 H0 Z"
            fill="var(--wave-fill)"
          />
        </g>
      </svg>

      <svg
        className="absolute inset-x-0 bottom-0 h-[45%] w-[200%] min-w-[2880px]"
        viewBox="0 0 2880 400"
        preserveAspectRatio="none"
        fill="none"
      >
        <g className="wave-layer" style={{ animationDuration: "18s" }}>
          <path
            d="M0 280 C 360 220, 720 340, 1080 280 S 1800 220, 2160 280 S 2880 340, 2880 280 V400 H0 Z"
            fill="var(--wave-fill-2)"
          />
        </g>
      </svg>

      <svg
        className="absolute inset-x-0 bottom-0 h-[65%] w-[200%] min-w-[2880px]"
        viewBox="0 0 2880 400"
        preserveAspectRatio="none"
        fill="none"
      >
        <g className="wave-layer" style={{ animationDuration: "34s" }}>
          <path
            d="M0 240 C 180 180, 540 300, 720 240 S 1260 180, 1440 240 S 1980 300, 2160 240 S 2700 180, 2880 240"
            stroke="var(--wave-stroke)"
            strokeWidth="1.5"
          />
        </g>
      </svg>

      {/* soft vignette to keep text readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--vignette)_78%)]" />
    </div>
  );
}
