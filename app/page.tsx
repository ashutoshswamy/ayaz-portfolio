import About from "./components/About";
import Achievements from "./components/Achievements";
import Awards from "./components/Awards";
import BackToTop from "./components/BackToTop";
import Collaborations from "./components/Collaborations";
import Contact from "./components/Contact";
import Discography from "./components/Discography";
import Performances from "./components/Performances";
import Hero from "./components/Hero";
import TopNav from "./components/TopNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-offwhite)]">
      <TopNav />
      <Hero />
      <About />
      <Achievements />
      <Discography />
      <Performances />
      <Collaborations />
      <Awards />
      <Contact />
      <BackToTop />
    </div>
  );
}
