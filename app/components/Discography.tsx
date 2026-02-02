"use client";

import { Clock, Disc, Mic, Music, PlayCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";

import { fadeUp, motion, staggerChildren, viewportOnce } from "./Animated";

type Work = {
  id: string;
  title: string;
  artists: string;
  label: string;
  video_url: string;
};

const toEmbedUrl = (url: string) => {
  if (!url) return "";
  try {
    const parsed = new URL(url);
    // Only allow YouTube URLs
    if (
      parsed.hostname !== "www.youtube.com" &&
      parsed.hostname !== "youtube.com" &&
      parsed.hostname !== "youtu.be"
    ) {
      return "";
    }

    let videoId = "";
    if (parsed.hostname === "youtu.be") {
      videoId = parsed.pathname.slice(1);
    } else {
      videoId = parsed.searchParams.get("v") || "";
    }

    // Validate video ID format (alphanumeric, dash, underscore only)
    if (!videoId || !/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
      return "";
    }

    return `https://www.youtube-nocookie.com/embed/${videoId}`;
  } catch {
    return "";
  }
};

// Animated Vinyl Component
const VinylDisc = () => (
  <div className="relative w-16 h-16 flex-shrink-0">
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 animate-vinyl-spin shadow-lg">
      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-800 to-gray-900">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "repeating-radial-gradient(circle at center, transparent 0px, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 3px)",
          }}
        />
      </div>
      <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-dark)] flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
      </div>
    </div>
  </div>
);

export default function Discography() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWorks() {
      try {
        const { data, error } = await supabase
          .from("discography")
          .select("id, title, artists, label, video_url")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching works:", error);
        } else {
          setWorks(data || []);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchWorks();
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || works.length === 0) return undefined;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return undefined;

    const interval = window.setInterval(() => {
      if (!scrollerRef.current || isPaused) return;
      const target = scrollerRef.current;
      if (target.scrollWidth <= target.clientWidth) return;
      target.scrollLeft += 1;
      if (target.scrollLeft + target.clientWidth >= target.scrollWidth - 2) {
        target.scrollLeft = 0;
      }
    }, 20);

    return () => window.clearInterval(interval);
  }, [isPaused, works]);

  return (
    <motion.section
      id="discography"
      className="py-20 sm:py-24 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerChildren}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full border border-[var(--color-gold)]/10 animate-vinyl-spin-slow" />
        <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full border border-[var(--color-gold)]/5 animate-vinyl-spin" />
        <div className="absolute top-1/3 left-1/4 text-6xl text-[var(--color-gold)]/5">
          ♫
        </div>
      </div>

      <div className="container relative z-10">
        <motion.div variants={fadeUp} className="mb-8 flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] sm:text-sm flex items-center gap-3">
            <Disc className="w-4 h-4 animate-vinyl-spin" />
            Discography
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl glow-text">
            Discography
          </h2>
          <p className="max-w-2xl text-base text-[var(--text-muted)] sm:text-lg">
            A complete catalog of albums and songs, presented with clarity and
            respect for every collaborator and label.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-16 gap-4">
            <VinylDisc />
            <p className="text-sm text-[var(--text-muted)] animate-pulse">
              Loading tracks...
            </p>
          </div>
        ) : (
          <motion.div variants={staggerChildren} className="relative">
            <div
              ref={scrollerRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
              className="-mx-4 flex gap-6 overflow-x-auto px-4 pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[var(--color-gold)]/20"
              style={{ scrollPaddingLeft: "1rem" }}
            >
              {works.map((work) => {
                const embedUrl = toEmbedUrl(work.video_url);
                return (
                  <motion.article
                    key={work.id}
                    variants={fadeUp}
                    className="musical-card min-w-[280px] rounded-2xl border border-[var(--color-gold)]/15 bg-gradient-to-b from-[var(--color-secondary)]/90 to-[var(--color-primary)]/90 p-5 shadow-lg backdrop-blur sm:min-w-[340px] lg:min-w-[360px]"
                  >
                    <div className="mb-4 space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-gold)]/20 to-[var(--color-gold)]/5 border border-[var(--color-gold)]/30">
                          <Music
                            className="h-5 w-5 text-[var(--color-gold)]"
                            aria-hidden="true"
                          />
                        </span>
                        <h3 className="text-lg font-semibold text-[var(--color-gold)] flex-1">
                          {work.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] pl-1">
                        <Mic
                          className="h-4 w-4 text-[var(--color-gold)]/60"
                          aria-hidden="true"
                        />
                        <span>{work.artists}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]/80 pl-1">
                        <Disc className="h-4 w-4" aria-hidden="true" />
                        <span>{work.label}</span>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-xl bg-[var(--color-tertiary)] pt-[56.25%] ring-1 ring-[var(--color-gold)]/10">
                      {embedUrl ? (
                        <>
                          <div className="absolute left-3 top-3 z-10 flex items-center gap-2 rounded-full bg-[var(--color-primary)]/90 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] backdrop-blur-sm border border-[var(--color-gold)]/20">
                            <PlayCircle
                              className="h-4 w-4"
                              aria-hidden="true"
                            />
                            Video
                          </div>
                          <iframe
                            className="absolute inset-0 h-full w-full"
                            src={embedUrl}
                            title={`YouTube video for ${work.title}`}
                            loading="lazy"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            referrerPolicy="strict-origin-when-cross-origin"
                            sandbox="allow-scripts allow-same-origin allow-presentation"
                          />
                        </>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
                          <Clock className="h-4 w-4" aria-hidden="true" />
                          Coming Soon
                        </div>
                      )}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
