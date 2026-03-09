import type { Metadata } from "next";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";
import GalleryGrid from "./GalleryGrid";

export const metadata: Metadata = {
  title: "Photo Gallery - Mohammad Ayaz Live Performances & Events",
  description:
    "Explore the visual journey of Mohammad Ayaz - stunning photographs from 5000+ live performances, celebrity collaborations with Usha Mangeshkar, Anuradha Paudwal & more, and memorable events across 50+ countries.",
  alternates: {
    canonical: "https://mohammadayaz.com/gallery",
  },
  openGraph: {
    title: "Photo Gallery | Mohammad Ayaz - Indian Playback Singer",
    description:
      "Explore stunning photographs from Mohammad Ayaz's live performances, celebrity collaborations, and musical events across the world.",
    url: "https://mohammadayaz.com/gallery",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | Mohammad Ayaz - Indian Playback Singer",
    description:
      "Explore stunning photographs from Mohammad Ayaz's live performances across 50+ countries.",
  },
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[var(--color-primary)]">
      <TopNav />
      <main className="pt-16">
        <div id="top" />
        <GalleryGrid />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
