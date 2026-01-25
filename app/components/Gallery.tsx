"use client";


import Link from "next/link";
import { useState } from "react";

import { fadeUp, motion, staggerChildren, viewportOnce } from "./Animated";
import { galleryImages } from "./galleryImages";
import Lightbox from "./Lightbox";

type GalleryProps = {
  limit?: number;
  showCta?: boolean;
  heading?: string;
  subheading?: string;
  description?: string;
};

export default function Gallery({
  limit,
  showCta = false,
  heading = "Moments in Music",
  subheading = "Gallery",
  description = "A visual journey through performances, collaborations, and celebrations on stage.",
}: GalleryProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const images = limit ? galleryImages.slice(0, limit) : galleryImages;

  return (
    <motion.section
      id="gallery"
      className="py-20 sm:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerChildren}
    >
      <div className="container">
        <motion.div
          variants={fadeUp}
          className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] sm:text-sm">
              {subheading}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl">{heading}</h2>
            <p className="max-w-2xl text-base text-[color:var(--text-dark)]/75 sm:text-lg">
              {description}
            </p>
          </div>
          {showCta ? (
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-emerald)] px-6 py-3 text-sm font-medium text-[var(--color-emerald)] transition hover:bg-[var(--color-emerald)] hover:text-[var(--color-offwhite)]"
            >
              View full gallery
            </Link>
          ) : null}
        </motion.div>
        <motion.div
          variants={staggerChildren}
          className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3"
        >
          {images.map((image, index) => {
            const isRotated =
              image.includes("11.46.41.jpeg") ||
              image.includes("11.48.01.jpeg");
            return (
              <motion.figure
                key={image}
                variants={fadeUp}
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
                    className={`bg-[var(--color-offwhite)] transition duration-500 group-hover:scale-105 ${
                      isRotated
                        ? "absolute left-1/2 top-1/2 h-[135%] w-[135%] -translate-x-1/2 -translate-y-1/2 -rotate-90 object-contain"
                        : "h-auto w-full object-contain"
                    }`}
                  />
                  <span className="sr-only">Open image</span>
                </button>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 pb-4 pt-10 text-xs uppercase tracking-[0.25em] text-white/90 opacity-0 transition group-hover:opacity-100">
                  Moment {index + 1}
                </figcaption>
              </motion.figure>
            );
          })}
        </motion.div>
        {activeImage ? (
          <Lightbox
            src={`/gallery/${encodeURIComponent(activeImage)}`}
            alt="Gallery image"
            onClose={() => setActiveImage(null)}
          />
        ) : null}
      </div>
    </motion.section>
  );
}
