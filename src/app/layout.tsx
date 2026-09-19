import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { site } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Subasini K is an AI/ML Engineer specializing in RAG pipelines, LLM applications, voice AI, and explainable machine learning, currently building production AI systems at Magilhub.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    "Subasini K",
    "AI Engineer",
    "ML Engineer",
    "Machine Learning Engineer",
    "RAG",
    "LLM Engineer",
    "Generative AI",
    "Data Scientist",
    "Portfolio",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} — ${site.title}`,
    description,
    siteName: `${site.name} — Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    url: site.url,
    email: site.email,
    sameAs: [site.github, site.linkedin],
    knowsAbout: [
      "Machine Learning",
      "Large Language Models",
      "Retrieval-Augmented Generation",
      "Voice AI",
      "Explainable AI",
      "Data Science",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BackgroundBlobs />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
