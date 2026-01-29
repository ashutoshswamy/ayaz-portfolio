"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

type LightboxProps = {
  src: string;
  alt: string;
  onClose: () => void;
};

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-10"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative max-h-full w-full max-w-5xl overflow-hidden rounded-2xl bg-black"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[var(--color-emerald)] transition hover:bg-white"
          aria-label="Close image"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
        <Image 
          src={src} 
          alt={alt} 
          fill
          className="object-contain"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
