import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const links = [
  { href: "/#top", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <Link
          href="/"
          className="font-mono text-sm tracking-tight text-ink"
          aria-label="FHANA Labs — home"
        >
          fhana<span className="text-muted">Labs</span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="flex items-center gap-5 sm:gap-8">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
