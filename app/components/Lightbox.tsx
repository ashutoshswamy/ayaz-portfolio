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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-6 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 sm:right-4 sm:top-4 z-10 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/50 text-white border border-white/20 transition-all hover:bg-black/70 hover:scale-105"
          aria-label="Close image"
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
        </button>
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
