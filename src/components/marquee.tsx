import { type Project } from "@/data/projects";

/**
 * Seamless marquee: two identical halves, track slides by -50%.
 * Shows only project names, each preceded by its logo.
 * Each half repeats the list enough times to exceed a large-desktop
 * viewport, so the loop never exposes an empty gap.
 * Pure CSS animation; pauses on hover/focus; disabled under
 * prefers-reduced-motion (see globals.css).
 */
function Item({ project }: { project: Project }) {
  return (
    <span className="flex shrink-0 items-center gap-3 px-8 sm:gap-4 sm:px-12">
      {project.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.logo}
          alt=""
          width={28}
          height={28}
          className="h-7 w-7 rounded-lg"
          loading="lazy"
          decoding="async"
        />
      ) : null}
      <span className="text-sm font-medium tracking-tight text-muted sm:text-base">
        {project.name}
      </span>
      <span className="text-faint" aria-hidden="true">
        ✦
      </span>
    </span>
  );
}

/** one half of the track: the full project list repeated `copies` times */
function Half({ items, copies }: { items: Project[]; copies: number }) {
  return (
    <div className="flex shrink-0 items-center">
      {Array.from({ length: copies }, (_, c) =>
        items.map((p) => <Item key={`${p.name}-${c}`} project={p} />),
      )}
      {items.length === 0 && (
        <span className="px-12 text-sm text-muted">FHANA Labs</span>
      )}
    </div>
  );
}

export default function Marquee({ items }: { items: Project[] }) {
  // ~470px per list pass; x4 per half ≈ 1880px > 1440+ viewport coverage
  const copies = items.length > 0 ? Math.max(4, Math.ceil(12 / items.length)) : 1;

  return (
    <div
      className="marquee relative overflow-hidden border-y border-line py-4 sm:py-5"
      role="group"
      aria-label="FHANA Labs projects"
    >
      <div className="marquee-track">
        <Half items={items} copies={copies} />
        <Half items={items} copies={copies} />
      </div>
    </div>
  );
}
