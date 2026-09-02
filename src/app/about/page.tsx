import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "FHANA Labs is an independent software studio run by Fahmi Hanafi — small products, built with intent.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
      <h1 className="text-4xl font-light tracking-tight text-ink sm:text-6xl">
        About
      </h1>

      <div className="mt-10 space-y-6 text-base leading-relaxed text-muted sm:text-lg">
        <p>
          <span className="text-ink">FHANA Labs</span> is an independent
          software studio run by Fahmi Hanafi. It is an umbrella brand for
          small, self-contained digital products — chat toys, translators,
          generators, and whatever else seems worth building.
        </p>
        <p>
          The philosophy is simple: ship small things often. Every project
          starts as an experiment, and the interesting ones grow into real
          products with their own domain, their own users, and their own
          personality.
        </p>
        <p>
          No agency. No enterprise dashboards. Just software made with intent,
          released under one studio name.
        </p>
      </div>

      <div className="mt-12 rounded-2xl border border-line bg-card p-6 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
          What is being built
        </p>
        <ul className="mt-4 space-y-2 text-base text-muted">
          <li>
            <span className="text-ink">Bubbls</span> — creative chat &amp; meme
            generator.
          </li>
          <li>
            <span className="text-ink">Ngomongin</span> — Indonesian culture
            translator.
          </li>
        </ul>
        <p className="mt-6 text-sm">
          <Link
            href="/projects"
            className="text-ink underline-offset-4 hover:underline"
          >
            Browse all projects →
          </Link>
        </p>
      </div>
    </section>
  );
}
