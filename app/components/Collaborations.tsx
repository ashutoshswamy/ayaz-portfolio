"use client";

import Image from "next/image";
import { Users, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { fadeUp, motion, staggerChildren, viewportOnce } from "./Animated";

const collaborators = [
  { name: "Usha Mangeshkar", src: "/celebrities/usha_mangeshkar.jpg" },
  { name: "Anuradha Paudwal", src: "/celebrities/anuradha_paudwal.jpeg" },
  { name: "Suresh Wadekar", src: "/celebrities/suresh_wadekar.jpg" },
  { name: "Ram Shankar", src: "/celebrities/ram_shankar.jpeg" },
  { name: "Hemlata", src: "/celebrities/hemlata.png" },
  { name: "Vishwajeet", src: "/celebrities/vishwajeet.jpeg" },
  { name: "Sadhana Sargam", src: "/celebrities/sadhana_sargam.jpg" },
  { name: "Bela Shende", src: "/celebrities/bela_shende.jpg" },
  { name: "Vinod Rathod", src: "/celebrities/vinod_rathod.jpg" },
  { name: "Varsha Usgaonkar", src: "/celebrities/varsha_usgaonkar.jpg" },
  { name: "Sapna Awasthi", src: "/celebrities/sapna_awasthi.jpg" },
  { name: "Vaishali Samant", src: "/celebrities/vaishali_samant.jpeg" },
  { name: "Avdhoot Gupte", src: "/celebrities/avadhoot_gupte.jpg" },
  { name: "Swapnil Bandodkar", src: "/celebrities/swapnil_bandodkar.jpg" },
  { name: "Raveena Tandon", src: "/celebrities/raveena_tandon.webp" },
  { name: "Bhagyashree", src: "/celebrities/bhagyashree.jpg" },
  { name: "Johnny Lever", src: "/celebrities/johnny_lever.jpg" },
  { name: "Raju Srivastav", src: "/celebrities/raju_srivastav.jpg" },
  { name: "Shakti Kapoor", src: "/celebrities/shakti_kapoor.jpg" },
  { name: "Asrani", src: "/celebrities/asrani.jpeg" },
];

export default function Collaborations() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return undefined;

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
  }, [isPaused]);

  return (
    <motion.section
      id="collaborations"
      className="py-20 sm:py-24 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerChildren}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[var(--color-gold)]/5 blur-2xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-[var(--color-gold)]/5 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 text-6xl text-[var(--color-gold)]/5">
          ★
        </div>
      </div>

      <div className="container relative z-10">
        <motion.div variants={fadeUp} className="mb-8 flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] sm:text-sm flex items-center gap-3">
            <Star className="w-4 h-4" />
            Collaborations
          </span>
          <div className="flex items-center gap-3">
            <Users
              className="h-6 w-6 text-[var(--color-gold)]"
              aria-hidden="true"
            />
            <h2 className="text-3xl sm:text-4xl md:text-5xl glow-text">
              Collaborations & Celebrities
            </h2>
          </div>
          <p className="max-w-2xl text-base text-[var(--text-muted)] sm:text-lg">
            A distinguished roster of collaborators and respected cultural
            personalities.
          </p>
        </motion.div>
        <motion.div variants={staggerChildren} className="relative">
          <div
            ref={scrollerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            className="-mx-4 flex gap-5 overflow-x-auto px-4 pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[var(--color-gold)]/20"
            style={{ scrollPaddingLeft: "1rem" }}
          >
            {collaborators.map((person, index) => (
              <motion.article
                key={person.name}
                variants={fadeUp}
                className="musical-card group min-w-[220px] overflow-hidden rounded-2xl border border-[var(--color-gold)]/15 bg-gradient-to-b from-[var(--color-secondary)]/80 to-[var(--color-primary)]/80 shadow-lg sm:min-w-[240px] lg:min-w-[260px]"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={person.src}
                    alt={person.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-transparent opacity-60" />

                  {/* Musical note on hover */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[var(--color-gold)]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-50">
                    <span className="text-[var(--color-primary)] text-lg">
                      ♪
                    </span>
                  </div>
                </div>
                <div className="px-4 py-4 relative">
                  <div className="absolute -top-6 left-4 w-12 h-1 bg-gradient-to-r from-[var(--color-gold)] to-transparent rounded-full" />
                  <p className="text-base font-semibold text-[var(--color-gold)] group-hover:text-[var(--color-gold-light)] transition-colors">
                    {person.name}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-1 uppercase tracking-wider">
                    Collaboration
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Total count */}
        <motion.div variants={fadeUp} className="mt-8 text-center">
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[var(--color-gold)]/20 bg-[var(--color-secondary)]/50 text-sm text-[var(--text-muted)]">
            <Users className="w-4 h-4 text-[var(--color-gold)]" />
            <span className="text-[var(--color-gold)] font-semibold">
              {collaborators.length}+
            </span>{" "}
            Notable Collaborations
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
}
