# FHANA Labs — fhanalabs.site

Personal software studio / project showcase website for **FHANA Labs** by
Fahmi Hanafi. Dark, minimal, typography-driven, motion-focused.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- Pure CSS/SVG animations (typewriter, wave, marquee) — no animation library

## Structure

```text
src/
  app/
    page.tsx        # landing: hero (typewriter + wave) -> marquee -> projects
    projects/       # dedicated project index
    about/          # studio philosophy
    sitemap.ts      # SEO sitemap
    robots.ts       # SEO robots
  components/
    typewriter-hero.tsx
    wave-background.tsx
    marquee.tsx
    project-grid.tsx
    site-header.tsx / site-footer.tsx
  data/
    projects.ts     # <-- add new projects here (data-driven, no UI changes)
```

## Adding a project

Edit `src/data/projects.ts`. Set `url` only when a real deployment exists —
empty `url` renders the card as a non-linked "soon" card (no invented URLs).

## Commands

```bash
npm run dev     # http://localhost:3000
npm run build
npm start
npm run lint
```

## Notes

- Animations respect `prefers-reduced-motion` (typewriter jumps to final
  state; wave/marquee stop).
- Canonical domain: `https://fhanalabs.site` (set in `layout.tsx`,
  `sitemap.ts`, `robots.ts`).
