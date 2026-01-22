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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <figure
              key={image}
              className="group relative overflow-hidden rounded-2xl border border-[color:var(--color-emerald)]/10 bg-white/70 shadow-sm"
            >
              <button
                type="button"
                onClick={() => setActiveImage(image)}
                className="relative block aspect-[4/3] w-full cursor-zoom-in"
                aria-label={`Open image ${index + 1}`}
              >
                <img
                  src={`/gallery/${encodeURIComponent(image)}`}
                  alt={`Gallery image ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full bg-[var(--color-offwhite)] object-contain"
                />
              </button>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 pb-4 pt-10 text-xs uppercase tracking-[0.25em] text-white/90 opacity-0 transition group-hover:opacity-100">
                Moment {index + 1}
              </figcaption>
            </figure>
          ))}
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
