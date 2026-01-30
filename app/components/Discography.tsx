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
  const id = url.split("v=")[1]?.split("&")[0];
  return id ? `https://www.youtube.com/embed/${id}` : "";
};

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
      className="py-20 sm:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerChildren}
    >
      <div className="container">
        <motion.div variants={fadeUp} className="mb-8 flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] sm:text-sm">
            Discography
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl">Discography</h2>
          <p className="max-w-2xl text-base text-[var(--text-muted)] sm:text-lg">
            A complete catalog of albums and songs, presented with clarity and
            respect for every collaborator and label.
          </p>
        </motion.div>
        
        {loading ? (
             <div className="flex justify-center py-10">
                 <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--color-gold)]"></div>
             </div>
        ) : (
            <motion.div variants={staggerChildren} className="relative">
              <div
                ref={scrollerRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onFocus={() => setIsPaused(true)}
                onBlur={() => setIsPaused(false)}
                className="-mx-4 flex gap-6 overflow-x-auto px-4 pb-2"
                style={{ scrollPaddingLeft: "1rem" }}
              >
                {works.map((work) => {
                  const embedUrl = toEmbedUrl(work.video_url);
                  return (
                    <motion.article
                      key={work.id}
                      variants={fadeUp}
                      className="min-w-[280px] rounded-2xl border border-[var(--color-gold)]/15 bg-[var(--color-secondary)]/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-[var(--color-gold)]/30 backdrop-blur sm:min-w-[340px] lg:min-w-[360px]"
                    >
                      <div className="mb-4 space-y-3">
                        <div className="flex items-start gap-2">
                          <Music
                            className="mt-1 h-4 w-4 text-[var(--color-gold)]"
                            aria-hidden="true"
                          />
                          <h3 className="text-lg font-semibold text-[var(--color-gold)]">
                            {work.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                          <Mic
                            className="h-4 w-4 text-[var(--color-gold)]"
                            aria-hidden="true"
                          />
                          <span>{work.artists}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
                          <Disc
                            className="h-4 w-4 text-[var(--color-gold)]"
                            aria-hidden="true"
                          />
                          <span>{work.label}</span>
                        </div>
                      </div>
                      <div className="relative w-full overflow-hidden rounded-xl bg-[var(--color-tertiary)] pt-[56.25%]">
                        {embedUrl ? (
                          <>
                            <div className="absolute left-3 top-3 z-10 flex items-center gap-2 rounded-full bg-[var(--color-primary)]/90 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
                              <PlayCircle className="h-4 w-4" aria-hidden="true" />
                              Video
                            </div>
                            <iframe
                              className="absolute inset-0 h-full w-full"
                              src={embedUrl}
                              title={`YouTube video for ${work.title}`}
                              loading="lazy"
                              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
