import type { Metadata } from "next";
import Link from "next/link";
import TypewriterHero from "@/components/typewriter-hero";
import WaveBackground from "@/components/wave-background";
import Marquee from "@/components/marquee";
import ProjectGrid from "@/components/project-grid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        id="top"
        className="relative flex min-h-[80svh] flex-col items-center justify-center overflow-hidden px-5"
        aria-label="Introduction"
      >
        <WaveBackground />
        <div className="relative z-10 w-full">
          <TypewriterHero />
          <div className="mt-10 flex justify-center">
            <Link
              href="#projects"
              className="rounded-full border border-line px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:border-line-strong hover:text-ink"
            >
              See projects ↓
            </Link>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section aria-labelledby="projects-heading">
        <div className="mx-auto max-w-6xl px-5 pt-20 text-center sm:px-8 sm:pt-28">
          <h2
            id="projects-heading"
            className="text-4xl font-light tracking-tight text-ink sm:text-6xl"
          >
            fhana<span className="font-normal">Labs</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Everything we have built so far. Each project is its own small
            product — follow the link when it goes live.
          </p>
        </div>

        <div className="mt-12 sm:mt-16">
          <Marquee items={projects} />
        </div>

        <div id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-12 sm:px-8 sm:py-16">
          <ProjectGrid items={projects} />
        </div>
      </section>
    </>
  );
}
