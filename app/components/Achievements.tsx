"use client";

import { Globe, Medal, Music, Trophy, Tv } from "lucide-react";

import { fadeUp, motion, staggerChildren, viewportOnce } from "./Animated";

const achievements = [
  {
    title: "World Record Holder",
    year: "2020",
    authority: "Hon’ble Shushil Kumar Shinde",
    category: "Award",
    detail: "Referenced by Hon’ble Shushil Kumar Shinde.",
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
    authority: "Hon’ble Radhe Krishna Cultural Minister",
    category: "Recognition",
  },
  {
    title: "Participation in Asia’s Singing Superstar",
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

export default function Achievements() {
  return (
    <motion.section
      id="achievements"
      className="py-20 sm:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerChildren}
    >
      <div className="container">
        <motion.div variants={fadeUp} className="mb-10 flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] sm:text-sm">
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl">
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
          {achievements.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              className="group rounded-2xl border border-[var(--color-gold)]/15 bg-[var(--color-secondary)]/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-[var(--color-gold)]/30 backdrop-blur"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-tertiary)]">
                  {item.category
                    ? (() => {
                        const Icon =
                          iconMap[item.category as keyof typeof iconMap];
                        return Icon ? (
                          <Icon
                            className="h-4 w-4 text-[var(--color-gold)]"
                            aria-hidden="true"
                          />
                        ) : null;
                      })()
                    : null}
                </span>
                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="text-lg font-semibold text-[var(--color-gold)] sm:text-xl">
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
                  <div className="mt-1 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
                    {item.year ? (
                      <span className="rounded-full border border-[color:var(--color-gold)]/40 px-3 py-1">
                        {item.year}
                      </span>
                    ) : null}
                    {item.category ? (
                      <span className="rounded-full border border-[var(--color-gold)]/40 px-3 py-1 text-[var(--color-gold)]">
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
