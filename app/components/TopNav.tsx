"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const sections = [
  { id: "top", label: "Home" },
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
    <header className="sticky top-0 z-50 border-b border-[var(--color-gold)]/15 bg-[var(--color-primary)]/95 backdrop-blur">
      <nav className="container flex items-center justify-between gap-6 py-4">
        <a
          href={pathname === "/" ? "#top" : "/#top"}
          className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-emerald)]"
        >
          Mohammad Ayaz
        </a>
        <div className="hidden flex-1 items-center gap-4 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] lg:flex lg:justify-center">
          {sections.map((section) => (
            <a
              key={section.id}
              href={
                pathname === "/gallery" && section.id !== "gallery"
                  ? `/#${section.id}`
                  : `#${section.id}`
              }
              aria-current={activeId === section.id ? "page" : undefined}
              className={`whitespace-nowrap border-b border-transparent pb-1 transition ${
                activeId === section.id
                  ? "border-[var(--color-gold)] text-[var(--color-gold)]"
                  : "hover:text-[var(--color-gold)]"
              }`}
            >
              {section.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-gold)]/30 text-[var(--color-gold)] transition hover:bg-[var(--color-gold)]/10 lg:hidden"
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
      </nav>
      <div
        id="mobile-nav"
        className={`border-t border-[var(--color-gold)]/15 bg-[var(--color-primary)]/98 transition lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="container flex flex-col gap-3 py-4 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
          {sections.map((section) => (
            <a
              key={section.id}
              href={
                pathname === "/gallery" && section.id !== "gallery"
                  ? `/#${section.id}`
                  : `#${section.id}`
              }
              onClick={() => setIsOpen(false)}
              aria-current={activeId === section.id ? "page" : undefined}
              className={`border-l-2 pl-3 transition ${
                activeId === section.id
                  ? "border-[var(--color-gold)] text-[var(--color-gold)]"
                  : "border-transparent hover:text-[var(--color-gold)]"
              }`}
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
