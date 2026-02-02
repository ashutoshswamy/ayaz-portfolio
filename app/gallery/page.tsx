import type { Metadata } from "next";
import BackToTop from "../components/BackToTop";
import TopNav from "../components/TopNav";
import GalleryGrid from "./GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the visual journey of Mohammad Ayaz - stunning performance photographs, behind-the-scenes moments, and memorable events from his musical career.",
  openGraph: {
    title: "Gallery | Mohammad Ayaz",
    description:
      "Explore the visual journey of Mohammad Ayaz through stunning photographs from his performances and events.",
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
      <BackToTop />
    </div>
  );
}
