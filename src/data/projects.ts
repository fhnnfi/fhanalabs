export type ProjectStatus = "live" | "development" | "archived";

export type Project = {
  name: string;
  description: string;
  url: string;
  logo?: string;
  status?: ProjectStatus;
  tags?: string[];
};

/**
 * FHANA Labs project registry.
 * Add new projects here — the UI renders entirely from this array.
 *
 * NOTE: `url` is intentionally empty until a real deployment exists.
 * Do not invent production URLs (see requirement §16 Content Rules).
 */
export const projects: Project[] = [
  {
    name: "Bubbls",
    description:
      "A creative chat and meme generator — turn any moment into a speech-bubble sticker.",
    url: "", // TODO: replace with deployed URL when available
    status: "live",
    tags: ["Generator", "Creative"],
  },
  {
    name: "Ngomongin",
    description:
      "Indonesian Culture Translator — translate text into regional styles like Indonesia Gen Z.",
    url: "", // TODO: replace with deployed URL when available
    status: "development",
    tags: ["AI", "Translator"],
  },
];

export function projectHref(project: Project): string | null {
  return project.url.trim().length > 0 ? project.url : null;
}
