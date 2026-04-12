import type { Metadata } from "next";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Awards from "./components/Awards";
import BackToTop from "./components/BackToTop";
import Collaborations from "./components/Collaborations";
import Contact from "./components/Contact";
import Discography from "./components/Discography";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Performances from "./components/Performances";
import Hero from "./components/Hero";
import TopNav from "./components/TopNav";

export const metadata: Metadata = {
  title:
    "Mohammad Ayaz - Indian Playback Singer, Composer & Lyricist | Official Website",
  description:
    "Mohammad Ayaz is a renowned Indian Playback Singer, Composer & Lyricist, known as the voice of Mohammed Rafi. 5000+ live shows, 150+ awards, 50+ countries. Book for events, explore discography, awards & more.",
  alternates: {
    canonical: "https://mohammadayaz.com",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-primary)]">
      <TopNav />
      <main className="pt-16">
        <Hero />
        <About />
        <Achievements />
        <Discography />
        <Performances />
        <Collaborations />
        <Awards />
        <Gallery limit={9} showCta />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
