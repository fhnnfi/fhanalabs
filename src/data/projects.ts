export type ProjectStatus = "live" | "development" | "archived";

export type Project = {
  name: string;
  description: string;
  url: string;
  logo?: string;
  /** public source repository link, shown on the card when set */
  repo?: string;
  /** screenshot / overview image, stored in public/projectoverview/ */
  image?: string;
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
      "A creative chat generator — Buat chat dan percakapan yang bisa kamu kustomisasi untuk meme, konten, dan storytelling.",
    url: "https://bubbls.fhanalabs.site", // TODO: replace with deployed URL when available
    logo: "/logos/bubbls.svg",
    image: "/projectoverview/bubbls.png",
    status: "development",
    tags: ["Generator", "Creative", "chat"],
  },
  {
    name: "ESP32-CAM Smart Security System",
    description:
      "A smart security system using ESP32-CAM for real-time monitoring and alerting.",
    url: "https://monitoring.fhanafii.my.id",
    repo: "https://github.com/Fhanafii/ESP32CAM-SmartSecuritySystem",
    logo: "/logos/iotmonitoring.svg",
    image: "/projectoverview/iotmonitoring.png",
    status: "live",
    tags: ["AI", "IoT", "Security"],
  },
  {
    name: "AniScene",
    description:
      "A platform for discovering and exploring anime scenes with precise timestamping.",
    url: "https://aniscene.fhanalabs.site/",
    repo: "https://github.com/Fhanafii/aniscene",
    logo: "/logos/aniscene.svg",
    image: "/projectoverview/aniscene.png",
    status: "live",
    tags: ["AI", "Anime", "Scene Finder"],
  },
  {
    name: "Ngomongin",
    description:
      "Indonesian Culture Translator — translate text into regional styles like Indonesia Gen Z.",
    url: "https://ngomongin.fhanalabs.site",
    logo: "/logos/ngomonginv2.svg",
    image: "/projectoverview/ngomongin.png",
    status: "live",
    tags: ["AI", "Translator"],
  },
  {
    name: "Kabar Kode",
    description:
      "Portal berita teknologi dan developer Indonesia — berita, artikel, dan tips seputar dunia coding.",
    url: "https://kabarkode.fhanalabs.site",
    logo: "/logos/kabarkodeblack.svg",
    image: "/projectoverview/kabarkode.png",
    status: "live",
    tags: ["News", "Tech", "Developer"],
  },
  {
    name: "Anggaran Kita",
    description:
      "Jelajahi APBD Indonesia melalui peta interaktif — pendapatan, belanja, dan realisasi anggaran daerah dari data publik DJPK.",
    url: "https://anggarankita.fhanalabs.site",
    logo: "/logos/anggarankita.svg",
    image: "/projectoverview/anggarankita.png",
    status: "live",
    tags: ["Civic Tech", "Data Viz"],
  },
  {
    name: "KabarKode CMS",
    description:
      "Panel redaksi untuk portal berita KabarKode — tulis, kelola, dan publikasi artikel serta kategorinya dalam satu tempat.",
    url: "https://kabarkodecms.fhanalabs.site",
    logo: "/logos/kabarkode.svg",
    image: "/projectoverview/kabarkodecms.png",
    status: "live",
    tags: ["News", "Editorial", "CMS"],
  },
  {
    name: "MerchGo",
    description:
      "Aplikasi Android untuk merchandiser — absensi, kunjungan toko, dan laporan produk/promo dengan arsitektur offline-first dan sinkronisasi otomatis.",
    url: "https://merchgo.fhanalabs.site",
    logo: "/logos/merchgo.svg",
    repo: "https://github.com/Fhanafii/MerchGo-App",
    image: "/projectoverview/merchgo.png",
    status: "development",
    tags: ["Android", "Kotlin", "Merchandiser"],
  },
  {
    name: "AniScene Backend",
    description:
      "REST API backend untuk mencari anime, episode, scene, dan timestamp dari screenshot. Indexing berjalan private/local; hanya Search API yang diekspos melalui Cloudflare Tunnel → Nginx → FastAPI.",
    url: "https://anisceneapi.fhanalabs.site",
    logo: "/logos/anisceneback.svg",
    repo: "https://github.com/Fhanafii/anime-scene-finder",
    image: "/projectoverview/aniscenebackend.png",
    status: "development",
    tags: ["Backend", "API","Machine Learning"],
  },
  {
    name: "MerchGo Backend",
    description:
      "REST API backend untuk aplikasi merchandiser — katalog produk, pesanan, dan manajemen toko.",
    url: "https://dev-api.fhanafii.my.id/docs/",
    logo: "/logos/merchgo.svg",
    repo: "https://github.com/Fhanafii/merchgo-backend",
    image: "/projectoverview/merchgobackend.png",
    status: "development",
    tags: ["Backend", "API"],
  },
  {
    name: "KabarKode Backend",
    description:
      "REST API backend untuk portal berita KabarKode — artikel, kategori, dan manajemen konten.",
    url: "https://kabarkodeapi.fhanalabs.site/api/docs/",
    logo: "/logos/kabarkodeblack.svg",
    image: "/projectoverview/kabarkodebackend.png",
    status: "live",
    tags: ["Backend", "API"],
  },
];

export function projectHref(project: Project): string | null {
  return project.url.trim().length > 0 ? project.url : null;
}
