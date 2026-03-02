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
      </div>

      {/* Auto-scrolling gallery rows */}
      <motion.div variants={fadeUp} className="flex flex-col gap-4">
        {/* Row 1 - Scroll Left */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4 animate-scroll-left hover:[animation-play-state:paused]">
            {[
              ...images.slice(0, Math.ceil(images.length / 2)),
              ...images.slice(0, Math.ceil(images.length / 2)),
            ].map((image, index) => (
              <figure
                key={`row1-${image.id}-${index}`}
                className="group relative flex-shrink-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 overflow-hidden rounded-xl"
              >
                <button
                  type="button"
                  onClick={() => setActiveImage(image.url)}
                  className="block w-full h-full cursor-zoom-in overflow-hidden"
                  aria-label={`Open image ${index + 1}`}
                >
                  <Image
                    src={image.url}
                    alt={`Mohmmad Ayaz Shaikh performance gallery ${index + 1}`}
                    fill
                    sizes="320px"
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </button>
              </figure>
            ))}
          </div>
        </div>

        {/* Row 2 - Scroll Right */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4 animate-scroll-right hover:[animation-play-state:paused]">
            {[
              ...images.slice(Math.ceil(images.length / 2)),
              ...images.slice(Math.ceil(images.length / 2)),
            ].map((image, index) => (
              <figure
                key={`row2-${image.id}-${index}`}
                className="group relative flex-shrink-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 overflow-hidden rounded-xl"
              >
                <button
                  type="button"
                  onClick={() => setActiveImage(image.url)}
                  className="block w-full h-full cursor-zoom-in overflow-hidden"
                  aria-label={`Open image ${index + 1}`}
                >
                  <Image
                    src={image.url}
                    alt={`Mohmmad Ayaz Shaikh performance gallery ${index + 1}`}
                    fill
                    sizes="320px"
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </button>
              </figure>
            ))}
          </div>
        </div>
      </motion.div>

      {activeImage ? (
        <Lightbox
          src={activeImage}
          alt="Mohmmad Ayaz Shaikh gallery image"
          onClose={() => setActiveImage(null)}
        />
      ) : null}
    </motion.section>
  );
}
