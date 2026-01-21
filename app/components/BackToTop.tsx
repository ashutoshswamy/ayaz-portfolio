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
      className={`fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--color-emerald)]/20 bg-[var(--color-offwhite)]/95 text-[var(--color-emerald)] shadow-sm transition ${
        visible ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}
