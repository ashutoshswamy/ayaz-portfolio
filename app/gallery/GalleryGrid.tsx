"use client";

import { useState } from "react";

import Lightbox from "../components/Lightbox";
import { galleryImages } from "../components/galleryImages";

export default function GalleryGrid() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 sm:py-24">
      <div className="container">
        <div className="mb-10 flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] sm:text-sm">
            Gallery
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl">Full Gallery</h1>
          <p className="max-w-2xl text-base text-[color:var(--text-dark)]/75 sm:text-lg">
            Explore the complete collection of live performances, stage moments,
            and collaborations.
          </p>
        </div>
        <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => {
            const isRotated =
              image.includes("11.46.41.jpeg") ||
              image.includes("11.48.01.jpeg");
            return (
              <figure
                key={image}
                className={`group relative break-inside-avoid overflow-hidden rounded-2xl border border-[color:var(--color-emerald)]/10 bg-white/70 shadow-sm ${
                  isRotated ? "aspect-[4/3]" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveImage(image)}
                  className={`relative block w-full cursor-zoom-in ${
                    isRotated ? "h-full" : ""
                  }`}
                  aria-label={`Open image ${index + 1}`}
                >
                  <img
                    src={`/gallery/${encodeURIComponent(image)}`}
                    alt={`Gallery image ${index + 1}`}
                    loading="lazy"
                    className={`bg-[var(--color-offwhite)] object-contain ${
                      isRotated
                        ? "absolute left-1/2 top-1/2 h-[135%] w-[135%] -translate-x-1/2 -translate-y-1/2 -rotate-90"
                        : "h-auto w-full"
                    }`}
                  />
                </button>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 pb-4 pt-10 text-xs uppercase tracking-[0.25em] text-white/90 opacity-0 transition group-hover:opacity-100">
                  Moment {index + 1}
                </figcaption>
              </figure>
            );
          })}
        </div>
        {activeImage ? (
          <Lightbox
            src={`/gallery/${encodeURIComponent(activeImage)}`}
            alt="Gallery image"
            onClose={() => setActiveImage(null)}
          />
        ) : null}
      </div>
    </section>
  );
}
