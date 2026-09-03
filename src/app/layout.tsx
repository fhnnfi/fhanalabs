import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://fhanalabs.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FHANA Labs — Software & Digital Experiments",
    template: "%s — FHANA Labs",
  },
  description:
    "FHANA Labs is an independent software studio by Fahmi Hanafi, building digital products, creative tools, and experimental software.",
  keywords: [
    "FHANA Labs",
    "Fahmi Hanafi",
    "software studio",
    "digital experiments",
    "creative tools",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FHANA Labs — Software & Digital Experiments",
    description:
      "FHANA Labs is an independent software studio by Fahmi Hanafi, building digital products, creative tools, and experimental software.",
    url: siteUrl,
    siteName: "FHANA Labs",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "FHANA Labs — Software & Digital Experiments",
    description:
      "An independent software studio by Fahmi Hanafi — digital products, creative tools, and experiments.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeInitScript = `try{var t=localStorage.getItem("fl-theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(t==="dark"){document.documentElement.classList.add("dark")}}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:text-canvas"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
