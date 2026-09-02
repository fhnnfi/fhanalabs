import { type Project, projectHref } from "@/data/projects";

/**
 * Seamless marquee: the track holds the content twice and slides by -50%.
 * Pure CSS animation; pauses on hover/focus; disabled under
 * prefers-reduced-motion (see globals.css).
 */
export default function Marquee({ items }: { items: Project[] }) {
  const words = items.flatMap((p) => {
    const live = projectHref(p) !== null;
    return [p.name, live ? "live" : "in development", ...(p.tags ?? [])];
  });
  const filled = words.length > 0 ? words : ["FHANA Labs", "software studio"];

  const strip = (ariaHidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden || undefined}>
      {filled.map((word, i) => (
        <span key={`${word}-${i}`} className="flex items-center">
          <span className="px-6 font-mono text-sm uppercase tracking-[0.2em] text-muted sm:px-10 sm:text-base">
            {word}
          </span>
          <span className="text-faint" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className="marquee relative overflow-hidden border-y border-line py-4 sm:py-5"
      role="group"
      aria-label="FHANA Labs keywords"
    >
      <div className="marquee-track">
        {strip(false)}
        {strip(true)}
      </div>
    </div>
  );
}
