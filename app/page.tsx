import About from "./components/About";
import Achievements from "./components/Achievements";
import Awards from "./components/Awards";
import Collaborations from "./components/Collaborations";
import Contact from "./components/Contact";
import Discography from "./components/Discography";
import Performances from "./components/Performances";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-offwhite)]">
      <Hero />
      <About />
      <Achievements />
      <Discography />
      <Performances />
      <Collaborations />
      <Awards />
      <Contact />
    </div>
  );
}
