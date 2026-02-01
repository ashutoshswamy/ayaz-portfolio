"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Camera, Sparkles } from "lucide-react";
import { supabase } from "@/lib/supabase";

import { fadeUp, motion, staggerChildren, viewportOnce } from "./Animated";
import Lightbox from "./Lightbox";

type GalleryProps = {
  limit?: number;
  showCta?: boolean;
  heading?: string;
  subheading?: string;
  description?: string;
};

type GalleryImage = {
  id: string;
  url: string;
};

export default function Gallery({
  limit,
  showCta = false,
  heading = "Moments in Music",
  subheading = "Gallery",
  description = "A visual journey through performances, collaborations, and celebrations on stage.",
}: GalleryProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        let query = supabase
          .from("gallery")
          .select("id, url")
          .order("created_at", { ascending: false });

        if (limit) {
          query = query.limit(limit);
        }

        const { data, error } = await query;

        if (error) {
          console.error("Error fetching images:", error);
        } else {
          setImages(data || []);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    }

    fetchImages();
  }, [limit]);

  return (
    <motion.section
      id="gallery"
      className="py-20 sm:py-24 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerChildren}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/20 to-transparent" />
        <div className="absolute top-40 right-10 text-6xl text-[var(--color-gold)]/5">
          📷
        </div>
        <div className="absolute bottom-20 left-10 text-5xl text-[var(--color-gold)]/5">
          ✨
        </div>
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={fadeUp}
          className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] sm:text-sm flex items-center gap-3">
              <Camera className="w-4 h-4" />
              {subheading}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl glow-text">
              {heading}
            </h2>
            <p className="max-w-2xl text-base text-[var(--text-muted)] sm:text-lg">
              {description}
            </p>
          </div>
          {showCta ? (
            <Link
              href="/gallery"
              className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--color-gold)]/60 px-6 py-3 text-sm font-semibold text-[var(--color-gold)] transition-all duration-300 hover:bg-[var(--color-gold)] hover:text-[var(--color-primary)] hover:shadow-[0_0_30px_rgba(245,200,0,0.3)]"
            >
              <Sparkles className="w-4 h-4" />
              View full gallery
            </Link>
          ) : null}
        </motion.div>
        <motion.div
          variants={staggerChildren}
          className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3"
        >
          {images.map((image, index) => {
            return (
              <motion.figure
                key={image.id}
                variants={fadeUp}
                className="musical-card group relative break-inside-avoid overflow-hidden rounded-2xl border border-[var(--color-gold)]/15 bg-[var(--color-secondary)]/60 shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => setActiveImage(image.url)}
                  className="block w-full cursor-zoom-in overflow-hidden"
                  aria-label={`Open image ${index + 1}`}
                >
                  <Image
                    src={image.url}
                    alt={`Gallery image ${index + 1}`}
                    width={800}
                    height={600}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-auto bg-[var(--color-secondary)] transition duration-500 group-hover:scale-110 object-cover"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="sr-only">Open image</span>
                </button>
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 pb-4 pt-10 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="text-xs uppercase tracking-[0.25em] text-white/90 flex items-center gap-2">
                    <span className="w-6 h-px bg-[var(--color-gold)]" />
                    Moment {index + 1}
                  </span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-gold)]/90 text-[var(--color-primary)]">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </span>
                </figcaption>
              </motion.figure>
            );
          })}
        </motion.div>
        {activeImage ? (
          <Lightbox
            src={activeImage}
            alt="Gallery image"
            onClose={() => setActiveImage(null)}
          />
        ) : null}
      </div>
    </motion.section>
  );
}
