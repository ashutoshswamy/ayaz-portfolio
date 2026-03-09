"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

import Lightbox from "../components/Lightbox";

type GalleryImage = {
  id: string;
  url: string;
};

export default function GalleryGrid() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const { data, error } = await supabase
          .from("gallery")
          .select("id, url")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching images:", error);
        } else {
          setImages(data || []);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  return (
    <section id="gallery" className="py-20 sm:py-24">
      <div className="container">
        <div className="mb-10 flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] sm:text-sm">
            Gallery
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl glow-text">
            Mohammad Ayaz Photo Gallery
          </h1>
          <p className="max-w-2xl text-base text-[var(--text-muted)] sm:text-lg">
            Browse the complete collection of Mohammad Ayaz&apos;s live
            performances, stage moments, celebrity collaborations, and events
            across 50+ countries.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-gold)]"></div>
          </div>
        ) : (
          <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
            {images.map((image, index) => {
              // Removed static rotation logic as it was filename dependent
              return (
                <figure
                  key={image.id}
                  className="group relative break-inside-avoid overflow-hidden rounded-2xl border border-[var(--color-gold)]/15 bg-[var(--color-secondary)]/80 shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setActiveImage(image.url)}
                    className="block w-full cursor-zoom-in"
                    aria-label={`Open image ${index + 1}`}
                  >
                    <Image
                      src={image.url}
                      alt={`Mohammad Ayaz live performance photo ${index + 1}`}
                      width={800}
                      height={600}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-auto bg-[var(--color-tertiary)] object-cover"
                    />
                  </button>
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 pb-4 pt-10 text-xs uppercase tracking-[0.25em] text-white/90 opacity-0 transition group-hover:opacity-100">
                    Moment {index + 1}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        )}

        {activeImage ? (
          <Lightbox
            src={activeImage}
            alt="Mohammad Ayaz performance photo"
            onClose={() => setActiveImage(null)}
          />
        ) : null}
      </div>
    </section>
  );
}
