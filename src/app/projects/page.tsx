import type { Metadata } from "next";
import ProjectGrid from "@/components/project-grid";
import Marquee from "@/components/marquee";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "All software projects built at FHANA Labs — digital products, creative tools, and experiments by Fahmi Hanafi.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-4 pt-20 sm:px-8 sm:pt-28">
        <h1 className="text-4xl font-light tracking-tight text-ink sm:text-6xl">
          Projects
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          The full FHANA Labs catalogue. New experiments land here first.
        </p>
      </section>

      <div className="mt-10">
        <Marquee items={projects} />
      </div>

      <section
        aria-label="FHANA Labs projects"
        className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16"
      >
        <ProjectGrid items={projects} />
      </section>
    </>
  );
}
