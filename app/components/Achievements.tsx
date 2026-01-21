"use client";

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
    category: "Television",
  },
];

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
          <p className="max-w-2xl text-base text-[color:var(--text-dark)]/75 sm:text-lg">
            A journey marked by recognized excellence, cultural impact, and
            celebrated performances.
          </p>
        </motion.div>
        <motion.ul
          variants={staggerChildren}
          className="divide-y divide-[color:var(--color-emerald)]/10 rounded-2xl border border-[color:var(--color-emerald)]/10 bg-white/70"
        >
          {achievements.map((item) => (
            <motion.li
              key={item.title}
              variants={fadeUp}
              className="flex flex-col gap-3 px-6 py-6 sm:flex-row sm:items-start sm:justify-between"
            >
              <div className="flex max-w-3xl flex-col gap-2">
                <h3 className="text-lg font-semibold text-[color:var(--color-emerald)] sm:text-xl">
                  {item.title}
                </h3>
                {item.detail ? (
                  <p className="text-sm text-[color:var(--text-dark)]/75 sm:text-base">
                    {item.detail}
                  </p>
                ) : null}
                {item.authority ? (
                  <p className="text-sm text-[color:var(--text-dark)]/70 sm:text-base">
                    {item.authority}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] sm:justify-end">
                {item.year ? (
                  <span className="rounded-full border border-[color:var(--color-gold)]/40 px-3 py-1">
                    {item.year}
                  </span>
                ) : null}
                {item.category ? (
                  <span className="rounded-full border border-[color:var(--color-emerald)]/15 px-3 py-1 text-[color:var(--color-emerald)]">
                    {item.category}
                  </span>
                ) : null}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
}
