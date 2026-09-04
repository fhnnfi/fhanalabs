import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-10 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
        <p className="text-sm text-muted">© 2026 FHANA Labs</p>
        <p className="text-sm text-faint">
          Built by{" "}
          <a
            href="https://www.linkedin.com/in/fahmi-hanafi"
            target="_blank"
            rel="noopener noreferrer"
            className="link-animated text-muted hover:text-ink"
            aria-label="Fahmi Hanafi on LinkedIn — opens in a new tab"
          >
            Fahmi Hanafi
          </a>{" "}
          ·{" "}
          <Link href="/projects" className="text-muted underline-offset-4 hover:text-ink hover:underline">
            All projects
          </Link>
        </p>
      </div>
    </footer>
  );
}
