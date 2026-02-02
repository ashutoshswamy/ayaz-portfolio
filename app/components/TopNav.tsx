"use client";

import { Menu, X, MicVocal } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isScrollingRef = useRef(false);

  // Handle scroll state for header background
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Intersection observer for active section detection
  useEffect(() => {
    if (pathname !== "/") return;

    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;

        // Find the most visible section
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length > 0) {
          // Get the entry with highest intersection ratio
          const mostVisible = visibleEntries.reduce((prev, current) =>
            current.intersectionRatio > prev.intersectionRatio ? current : prev,
          );
          setActiveId(mostVisible.target.id);
        }
      },
      {
        rootMargin: "-10% 0px -70% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
      },
    );

    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [pathname]);

  const handleNavClick = useCallback((sectionId: string) => {
    setActiveId(sectionId);
    setIsOpen(false);

    // Temporarily disable observer during smooth scroll
    isScrollingRef.current = true;
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  }, []);

  const getHref = useCallback(
    (sectionId: string) => {
      if (pathname === "/") {
        return `#${sectionId}`;
      }
      return `/#${sectionId}`;
    },
    [pathname],
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled || isOpen
          ? "bg-[var(--color-primary)]/95 backdrop-blur-lg border-b border-[var(--color-gold)]/10 shadow-lg shadow-black/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        className="container flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-bold text-white group shrink-0"
          aria-label="Mohammad Ayaz - Home"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-dark)] text-[var(--color-primary)] transition-transform duration-200 group-hover:scale-105">
            <MicVocal className="w-4 h-4" />
          </span>
          <span className="hidden sm:inline font-semibold text-white">
            Mohammad Ayaz
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-2 py-1">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={getHref(section.id)}
                onClick={() => handleNavClick(section.id)}
                className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                  isActive
                    ? "text-[var(--color-gold)] bg-[var(--color-gold)]/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                {section.label}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-full border transition-colors duration-200 ${
            isOpen
              ? "bg-[var(--color-gold)] text-[var(--color-primary)] border-[var(--color-gold)]"
              : "border-white/20 bg-white/5 text-white hover:bg-white/10"
          }`}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
          {isOpen ? (
            <X className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-16 z-40 transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Panel */}
        <div
          id="mobile-nav"
          className={`absolute top-0 left-0 right-0 bg-[var(--color-primary)] border-b border-[var(--color-gold)]/10 shadow-xl transition-transform duration-200 ease-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="container py-4">
            <ul className="flex flex-col gap-1" role="menu">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <li key={section.id} role="none">
                    <a
                      href={getHref(section.id)}
                      onClick={() => handleNavClick(section.id)}
                      role="menuitem"
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors duration-150 ${
                        isActive
                          ? "bg-[var(--color-gold)]/10 text-[var(--color-gold)]"
                          : "text-white/80 hover:bg-white/5 hover:text-white"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {isActive && (
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]"
                          aria-hidden="true"
                        />
                      )}
                      <span className={!isActive ? "ml-4" : ""}>
                        {section.label}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
