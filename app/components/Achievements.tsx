"use client";

import { Globe, Medal, Music, Trophy, Tv, Star } from "lucide-react";

import { fadeUp, motion, staggerChildren, viewportOnce } from "./Animated";

const achievements = [
  {
    title: "World Record Holder",
    year: "2020",
    authority: "Hon'ble Shushil Kumar Shinde",
    category: "Award",
    detail: "Referenced by Hon'ble Shushil Kumar Shinde.",
    featured: true,
  },
  {
    title: "Winner – Voice of Maharashtra (Mi Marathi)",
    category: "Competition",
  },
  {
    title: "Winner – Roxna Saam Gurukul (Saam Marathi)",
    category: "Competition",
  },
  {
    title: "Pride of Sri Lanka award",
    authority: "Hon'ble Radhe Krishna Cultural Minister",
    category: "Recognition",
  },
  {
    title: "Participation in Asia's Singing Superstar",
    category: "Competition",
  },
  {
    title:
      "Appearances on Zee TV, Sony TV (X Factor), ETV Marathi, DD National",
    category: "Television",
  },
  {
    title: "Title song performance for Sony TV (Kiya Hua Tera Wada)",
    category: "Music",
  },
];

const iconMap = {
  Award: Trophy,
  Competition: Medal,
  Television: Tv,
  Recognition: Globe,
  Music: Music,
};

type Achievement = {
  title: string;
  year?: string;
  authority?: string;
  category?: string;
  detail?: string;
  featured?: boolean;
};

export default function Achievements() {
  return (
    <motion.section
      id="achievements"
      className="py-20 sm:py-24 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerChildren}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gradient-to-l from-[var(--color-gold)]/5 to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-[var(--color-gold)]/5 to-transparent blur-2xl" />
        <div className="absolute top-20 left-1/4 text-7xl text-[var(--color-gold)]/5">★</div>
      </div>
      
      <div className="container relative z-10">
        <motion.div variants={fadeUp} className="mb-10 flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] sm:text-sm flex items-center gap-3">
            <Star className="w-4 h-4" />
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl glow-text">
            Milestones & Honors
          </h2>
          <p className="max-w-2xl text-base text-[var(--text-muted)] sm:text-lg">
            A journey marked by recognized excellence, cultural impact, and
            celebrated performances.
          </p>
        </motion.div>
        <motion.div
          variants={staggerChildren}
          className="grid gap-6 sm:grid-cols-2"
        >
          {achievements.map((item: Achievement) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              className={`musical-card group rounded-2xl border bg-gradient-to-br from-[var(--color-secondary)]/80 to-[var(--color-primary)]/80 p-6 backdrop-blur ${
                item.featured 
                  ? 'border-[var(--color-gold)]/40 sm:col-span-2 relative overflow-hidden' 
                  : 'border-[var(--color-gold)]/15'
              }`}
            >
              {item.featured && (
                <>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--color-gold)]/20 to-transparent rounded-bl-full" />
                  <div className="absolute top-4 right-4 flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--color-gold)]">
                    <Star className="w-4 h-4 fill-[var(--color-gold)]" />
                    Featured
                  </div>
                </>
              )}
              <div className="flex items-start gap-4">
                <span className={`mt-1 inline-flex h-12 w-12 items-center justify-center rounded-full border bg-gradient-to-br transition-all duration-300 group-hover:scale-110 ${
                  item.featured 
                    ? 'border-[var(--color-gold)]/50 from-[var(--color-gold)]/30 to-[var(--color-gold)]/10 shadow-lg shadow-[var(--color-gold)]/20' 
                    : 'border-[var(--color-gold)]/30 from-[var(--color-tertiary)] to-[var(--color-secondary)]'
                }`}>
                  {item.category
                    ? (() => {
                        const Icon =
                          iconMap[item.category as keyof typeof iconMap];
                        return Icon ? (
                          <Icon
                            className={`h-5 w-5 text-[var(--color-gold)] ${item.featured ? 'animate-pulse' : ''}`}
                            aria-hidden="true"
                          />
                        ) : null;
                      })()
                    : null}
                </span>
                <div className="flex flex-1 flex-col gap-2">
                  <h3 className={`font-semibold text-[var(--color-gold)] ${item.featured ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'}`}>
                    {item.title}
                  </h3>
                  {item.detail ? (
                    <p className="text-sm text-[var(--text-muted)] sm:text-base">
                      {item.detail}
                    </p>
                  ) : null}
                  {item.authority ? (
                    <p className="text-sm text-[var(--text-muted)] sm:text-base">
                      {item.authority}
                    </p>
                  ) : null}
                  <div className="mt-2 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
                    {item.year ? (
                      <span className="rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/10 px-3 py-1">
                        {item.year}
                      </span>
                    ) : null}
                    {item.category ? (
                      <span className="rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/5 px-3 py-1">
                        {item.category}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
