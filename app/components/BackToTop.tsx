"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      className={`group fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-secondary)]/95 text-[var(--color-gold)] shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-[var(--color-gold)]/70 hover:bg-[var(--color-gold)]/10 ${
        visible ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      aria-label="Back to top"
    >
      <ArrowUp
        className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </a>
  );
}
