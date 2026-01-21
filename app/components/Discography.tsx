"use client";

import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Disc,
  Mic,
  Music,
  PlayCircle,
} from "lucide-react";
import { useMemo, useRef } from "react";

import { fadeUp, motion, staggerChildren, viewportOnce } from "./Animated";

const works = [
  {
    title: "Mahima Swami Samarth Ki",
    artists: "Usha Mangeshkar, Mohammad Ayaz",
    label: "Venus Music",
    video: "https://www.youtube.com/watch?v=5-jMq60QQyM",
  },
  {
    title: "Jai Guru Jai Guru",
    artists: "Anuradha Paudwal, Mohammad Ayaz",
    label: "T-Series",
    video: "https://www.youtube.com/watch?v=dOj5CFDwLRM",
  },
  {
    title: "Vandhan Majhe Ghyave",
    artists: "Usha Mangeshkar, Mohammad Ayaz",
    label: "Zee Music",
    video: "https://www.youtube.com/watch?v=spaXBEEl_P0",
  },
  {
    title: "Siddharam Gajto",
    artists: "Anuradha Paudwal, Mohammad Ayaz",
    label: "Zee Music",
    video: "https://www.youtube.com/watch?v=dOj5CFDwLRM",
  },
  {
    title: "Namo Namo Deva",
    artists: "Ram Shankar, Mohammad Ayaz",
    label: "Zee Music",
    video: "https://www.youtube.com/watch?v=sV4QukqJN9U",
  },
  {
    title: "Deva Majhe Siddheshwara",
    artists: "Varsha Usgaonkar, Mohammad Ayaz",
    label: "T-Series",
    video: "https://www.youtube.com/watch?v=gI0MyWCA5Kg",
  },
  {
    title: "Darshan Dya Ishwara",
    artists: "Anup Jalota, Mohammad Ayaz",
    label: "Zee Music",
    video: "https://www.youtube.com/watch?v=dhixnhP2vCE",
  },
  {
    title: "Raytechya Rakshanala Hote Shivaji Raja",
    artists: "—",
    label: "T-Series",
    video: "",
  },
  {
    title: "Udo Udo Ga Amba Bai",
    artists: "—",
    label: "T-Series",
    video: "",
  },
  {
    title: "Bhimraya Kuni Shodhun Dakhwal Ka",
    artists: "—",
    label: "T-Series",
    video: "",
  },
  {
    title: "Shirdi Ke Sai Baba",
    artists: "Bhagayshree Chavan, Mohammad Ayaz",
    label: "T-Series",
    video: "https://www.youtube.com/watch?v=_GmOp0f0YMQ",
  },
  {
    title: "Utha Siddha Rameshwara",
    artists: "Suresh Wadekar, Mohammad Ayaz",
    label: "Zee Music",
    video: "https://www.youtube.com/watch?v=a7WkZ0bjD54",
  },
  {
    title: "Bhakti Shivachi Karto",
    artists: "Sadhana Sargam, Mohammad Ayaz",
    label: "Zee Music",
    video:
      "https://www.youtube.com/watch?v=u0hAtfwLPLQ&list=RDu0hAtfwLPLQ&start_radio=1",
  },
];

const toEmbedUrl = (url: string) => {
  if (!url) return "";
  const id = url.split("v=")[1]?.split("&")[0];
  return id ? `https://www.youtube.com/embed/${id}` : "";
};

export default function Discography() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const cardWidth = useMemo(() => 360, []);

  const scrollByAmount = (direction: "prev" | "next") => {
    if (!scrollerRef.current) return;
    const delta = direction === "next" ? cardWidth + 24 : -(cardWidth + 24);
    scrollerRef.current.scrollBy({ left: delta, behavior: "smooth" });
  };

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
        <motion.div
          variants={fadeUp}
          className="mb-8 flex flex-wrap items-end justify-between gap-4"
        >
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] sm:text-sm">
              Discography
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl">Discography</h2>
            <p className="max-w-2xl text-base text-[color:var(--text-dark)]/75 sm:text-lg">
              A complete catalog of albums and songs, presented with clarity and
              respect for every collaborator and label.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByAmount("prev")}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-emerald)]/20 text-[var(--color-emerald)] transition hover:bg-[var(--color-emerald)]/10"
              aria-label="Scroll discography left"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount("next")}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-emerald)]/20 text-[var(--color-emerald)] transition hover:bg-[var(--color-emerald)]/10"
              aria-label="Scroll discography right"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </motion.div>
        <motion.div variants={staggerChildren} className="relative">
          <div
            ref={scrollerRef}
            className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-2"
            style={{ scrollPaddingLeft: "1rem" }}
          >
            {works.map((work) => {
              const embedUrl = toEmbedUrl(work.video);
              return (
                <motion.article
                  key={work.title}
                  variants={fadeUp}
                  className="min-w-[280px] snap-start rounded-2xl border border-[color:var(--color-emerald)]/10 bg-white/70 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:min-w-[340px] lg:min-w-[360px]"
                >
                  <div className="mb-4 space-y-3">
                    <div className="flex items-start gap-2">
                      <Music
                        className="mt-1 h-4 w-4 text-[var(--color-emerald)]"
                        aria-hidden="true"
                      />
                      <h3 className="text-lg font-semibold text-[color:var(--color-emerald)]">
                        {work.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[color:var(--text-dark)]/75">
                      <Mic
                        className="h-4 w-4 text-[var(--color-emerald)]"
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
                  <div className="relative w-full overflow-hidden rounded-xl bg-[var(--color-offwhite)] pt-[56.25%]">
                    {embedUrl ? (
                      <>
                        <div className="absolute left-3 top-3 z-10 flex items-center gap-2 rounded-full bg-[var(--color-offwhite)]/90 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--color-emerald)]">
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
                      <div className="absolute inset-0 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--text-dark)]/60">
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
      </div>
    </motion.section>
  );
}
