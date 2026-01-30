"use client";

import { Menu, X } from "lucide-react";
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
  const pathname = usePathname();

  const sectionIds = useMemo(() => sections.map((section) => section.id), []);

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
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[var(--color-primary)]/80 backdrop-blur-md">
      <nav className="container flex items-center justify-between py-3">
        {/* Left: Brand */}
        <div className="flex items-center">
            <a
              href={pathname === "/" ? "#top" : "/#top"}
              className="text-base font-bold text-white"
            >
              Mohammad Ayaz
            </a>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden items-center justify-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 px-2 lg:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={
                pathname === "/gallery" && section.id !== "gallery"
                  ? `/#${section.id}`
                  : `#${section.id}`
              }
              onClick={() => setActiveId(section.id)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                activeId === section.id
                  ? "bg-[var(--color-gold)]/15 text-[var(--color-gold)] shadow-sm"
                  : "text-[var(--text-muted)] hover:text-white"
              }`}
            >
              {section.label}
            </a>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex justify-end items-center">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--text-light)] transition hover:bg-white/10 lg:hidden"
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
        className={`border-t border-white/5 bg-[var(--color-primary)]/98 transition lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="container flex flex-col gap-2 py-4">
          {sections.map((section) => (
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
              className={`flex items-center justify-between rounded-lg p-3 transition ${
                activeId === section.id
                  ? "bg-[var(--color-gold)]/10 text-[var(--color-gold)]"
                  : "text-[var(--text-muted)] hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="font-medium">{section.label}</span>
              {activeId === section.id && (
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
              )}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
