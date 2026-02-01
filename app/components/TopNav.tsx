"use client";

import { Menu, X, MicVocal } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const sections = [
  { id: "about", label: "About" },
  { id: "achievements", label: "Achievements" },
  { id: "discography", label: "Discography" },
  { id: "performances", label: "Performances" },
  { id: "collaborations", label: "Collaborations" },
  { id: "awards", label: "Awards" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export default function TopNav() {
  const [activeId, setActiveId] = useState("top");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const sectionIds = useMemo(() => sections.map((section) => section.id), []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // ... same observer logic
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio > a.intersectionRatio ? 1 : -1));

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.2, 0.4, 0.6] },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--color-gold)]/10 bg-[var(--color-primary)]/95 backdrop-blur-xl shadow-lg shadow-black/10"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-3">
        {/* Left: Brand */}
        <div className="flex items-center gap-2">
          <a
            href={pathname === "/" ? "#top" : "/#top"}
            className="flex items-center gap-2 text-base font-bold text-white group"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-dark)] text-[var(--color-primary)] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(245,200,0,0.4)]">
              <MicVocal className="w-4 h-4" />
            </span>
            <span className="hidden sm:inline bg-gradient-to-r from-white to-[var(--color-gold)] bg-clip-text text-transparent">
              Mohammad Ayaz
            </span>
          </a>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden items-center justify-center gap-1 rounded-full border border-[var(--color-gold)]/10 bg-[var(--color-secondary)]/50 backdrop-blur-md p-1 px-2 lg:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={
                pathname === "/gallery" && section.id !== "gallery"
                  ? `/#${section.id}`
                  : `#${section.id}`
              }
              onClick={() => setActiveId(section.id)}
              className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                activeId === section.id
                  ? "bg-gradient-to-r from-[var(--color-gold)]/20 to-[var(--color-gold)]/10 text-[var(--color-gold)] shadow-sm"
                  : "text-[var(--text-muted)] hover:text-white hover:bg-white/5"
              }`}
            >
              {activeId === section.id && (
                <span className="absolute inset-0 rounded-full border border-[var(--color-gold)]/30 animate-pulse" />
              )}
              {section.label}
            </a>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex justify-end items-center">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-gold)]/20 bg-[var(--color-secondary)]/50 text-[var(--color-gold)] transition-all duration-300 hover:bg-[var(--color-gold)] hover:text-[var(--color-primary)] hover:shadow-[0_0_20px_rgba(245,200,0,0.3)] lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div
        id="mobile-nav"
        className={`border-t border-[var(--color-gold)]/10 bg-[var(--color-primary)]/98 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container flex flex-col gap-2 py-4">
          {sections.map((section, index) => (
            <a
              key={section.id}
              href={
                pathname === "/gallery" && section.id !== "gallery"
                  ? `/#${section.id}`
                  : `#${section.id}`
              }
              onClick={() => {
                setActiveId(section.id);
                setIsOpen(false);
              }}
              className={`flex items-center justify-between rounded-xl p-3 transition-all duration-300 ${
                activeId === section.id
                  ? "bg-gradient-to-r from-[var(--color-gold)]/15 to-transparent text-[var(--color-gold)] border-l-2 border-[var(--color-gold)]"
                  : "text-[var(--text-muted)] hover:bg-white/5 hover:text-white hover:pl-4"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="font-medium flex items-center gap-2">
                {activeId === section.id && <span className="text-sm">♪</span>}
                {section.label}
              </span>
              {activeId === section.id && (
                <span className="h-2 w-2 rounded-full bg-[var(--color-gold)] animate-pulse" />
              )}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
