import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://fhanalabs.site", changeFrequency: "weekly", priority: 1 },
    { url: "https://fhanalabs.site/projects", changeFrequency: "weekly", priority: 0.9 },
    { url: "https://fhanalabs.site/about", changeFrequency: "monthly", priority: 0.6 },
    { url: "https://fhanalabs.site/contact", changeFrequency: "monthly", priority: 0.6 },
  ];
}
