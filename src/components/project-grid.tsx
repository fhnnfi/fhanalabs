import { ArrowUpRight } from "lucide-react";
import { type Project, projectHref } from "@/data/projects";

const statusStyles: Record<NonNullable<Project["status"]>, string> = {
  live: "text-emerald-600 dark:text-emerald-400/90 border-emerald-600/30 dark:border-emerald-400/30",
  development: "text-amber-600 dark:text-amber-300/90 border-amber-600/30 dark:border-amber-300/30",
  archived: "text-muted border-line",
};

/**
 * Card header strip: logo tile beside the project name, with a faint
 * oversized ghost initial as backdrop. The overview screenshot lives
 * in the card itself, below this band.
 */
function NameIllustration({ project }: { project: Project }) {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-16 items-center gap-3 overflow-hidden rounded-xl border border-line bg-gradient-to-br from-white/[0.05] to-transparent px-4 sm:h-20 dark:from-white/[0.04]"
    >
      {project.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.logo}
          alt=""
          width={44}
          height={44}
          className="relative z-10 h-10 w-10 shrink-0 rounded-lg object-contain sm:h-11 sm:w-11"
          loading="lazy"
          decoding="async"
        />
      ) : null}
      <span className="relative z-10 truncate text-xl font-light tracking-tight text-ink sm:text-2xl">
        {project.name}
      </span>
      {/* oversized ghost initial as backdrop */}
      <span
        className="absolute -bottom-7 right-1 select-none text-[6rem] font-light leading-none sm:text-[7rem]"
        style={{ color: "var(--c-ghost)" }}
      >
        {project.name.charAt(0)}
      </span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const href = projectHref(project);
  const status = project.status ?? "development";

  const inner = (
    <>
      <NameIllustration project={project} />
      {project.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image}
          alt={`${project.name} overview`}
          width={1904}
          height={941}
          className="relative z-10 mt-4 aspect-[2/1] w-full rounded-lg border border-line object-cover object-top shadow-sm"
          loading="lazy"
          decoding="async"
        />
      ) : null}
      <div className="mt-6 flex items-start justify-between gap-4">
        <h3 className="text-xl font-medium tracking-tight text-ink sm:text-2xl">
          {project.name}
        </h3>
        {href ? (
          <span
            className={`shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-widest ${statusStyles[status]}`}
          >
            {status}
          </span>
        ) : (
          <span className="shrink-0 rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-widest text-faint">
            soon
          </span>
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      {project.tags && project.tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-faint"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      <span className="mt-6 inline-flex items-center gap-1 text-sm text-ink/80 transition-colors group-hover:text-ink">
        {href ? "Visit project" : "Deployment link coming soon"}
        {href ? <ArrowUpRight className="h-4 w-4" aria-hidden="true" /> : null}
      </span>
    </>
  );

  const base =
    "group block rounded-2xl border border-line bg-card p-5 transition-colors duration-300 hover:border-line-strong sm:p-6";

  if (!href) {
    return (
      <article className={base} aria-label={`${project.name} (coming soon)`}>
        {inner}
      </article>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={base}
      aria-label={`${project.name} — opens in a new tab`}
    >
      {inner}
    </a>
  );
}

export default function ProjectGrid({
  items,
  id,
}: {
  items: Project[];
  id?: string;
}) {
  return (
    <div
      id={id}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
    >
      {items.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}
