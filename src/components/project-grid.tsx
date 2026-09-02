import { ArrowUpRight } from "lucide-react";
import { type Project, projectHref } from "@/data/projects";

const statusStyles: Record<NonNullable<Project["status"]>, string> = {
  live: "text-emerald-400/90 border-emerald-400/30",
  development: "text-amber-300/90 border-amber-300/30",
  archived: "text-muted border-line",
};

function ProjectCard({ project }: { project: Project }) {
  const href = projectHref(project);
  const status = project.status ?? "development";

  const inner = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-white/[0.04] font-mono text-lg text-ink">
          {project.name.charAt(0)}
        </div>
        {href ? (
          <span
            className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-widest ${statusStyles[status]}`}
          >
            {status}
          </span>
        ) : (
          <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-widest text-faint">
            soon
          </span>
        )}
      </div>

      <h3 className="mt-6 text-xl font-medium tracking-tight text-ink sm:text-2xl">
        {project.name}
      </h3>
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
    "group block rounded-2xl border border-line bg-white/[0.02] p-6 transition-colors duration-300 hover:border-line-strong hover:bg-white/[0.04] sm:p-8";

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
