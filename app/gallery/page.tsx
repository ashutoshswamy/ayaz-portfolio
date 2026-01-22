import BackToTop from "../components/BackToTop";
import TopNav from "../components/TopNav";
import GalleryGrid from "./GalleryGrid";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[var(--color-offwhite)]">
      <TopNav />
      <div id="top" />
      <GalleryGrid />
      <BackToTop />
    </div>
  );
}
