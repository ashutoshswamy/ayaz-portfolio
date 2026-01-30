"use client";

import Image from "next/image";
import { Users } from "lucide-react";
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
      className="py-20 sm:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerChildren}
    >
      <div className="container">
        <motion.div variants={fadeUp} className="mb-8 flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] sm:text-sm">
            Collaborations
          </span>
          <div className="flex items-center gap-3">
            <Users
              className="h-5 w-5 text-[var(--color-gold)]"
              aria-hidden="true"
            />
            <h2 className="text-3xl sm:text-4xl md:text-5xl">
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
            className="-mx-4 flex gap-5 overflow-x-auto px-4 pb-2"
            style={{ scrollPaddingLeft: "1rem" }}
          >
            {collaborators.map((person) => (
              <motion.article
                key={person.name}
                variants={fadeUp}
                className="min-w-[220px] overflow-hidden rounded-2xl border border-[var(--color-gold)]/15 bg-[var(--color-secondary)]/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-[var(--color-gold)]/30 sm:min-w-[240px] lg:min-w-[260px]"
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={person.src}
                    alt={person.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-4 py-3">
                  <p className="text-base font-semibold text-[var(--color-gold)]">
                    {person.name}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
