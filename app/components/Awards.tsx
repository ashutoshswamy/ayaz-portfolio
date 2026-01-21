"use client";

import { fadeUp, motion, staggerChildren, viewportOnce } from "./Animated";

const awards = [
  {
    title:
      "Honored by Council General of India at Indian Embassy, Saudi Arabia",
    authority: "Council General of India",
  },
  {
    title:
      "Recognition by Indian Association of South Africa (Mayor of Durban)",
    authority: "Indian Association of South Africa",
  },
  {
    title: "Solapur Bar Association honor by Chief Justice of Mumbai",
    authority: "Chief Justice of Mumbai",
  },
  {
    title: "Goa Ratna Puraskar by Hon’ble Chief Minister of Goa",
    authority: "Hon’ble Chief Minister of Goa",
  },
  {
    title: "Voice of Rafi award by Delhi Doordarshan",
    authority: "Delhi Doordarshan",
  },
  {
    title: "Rashtriya Ekatmata Puraskar",
    authority: "National honor",
  },
  {
    title: "Mujhe Urdu Padhao Na Puraskar (Delhi Rashtriya Urdu Association)",
    authority: "Delhi Rashtriya Urdu Association",
  },
  {
    title: "Solapur Bhushan Puraskar by Gulzar Sahab",
    authority: "Gulzar Sahab",
  },
  {
    title:
      "Charity performances for flood victims (Rotary Club, Lions Club, Maharashtra Police, Education Societies)",
    authority:
      "Rotary Club • Lions Club • Maharashtra Police • Education Societies",
  },
];

export default function Awards() {
  return (
    <motion.section
      id="awards"
      className="py-20 sm:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerChildren}
    >
      <div className="container">
        <motion.div variants={fadeUp} className="mb-10 flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] sm:text-sm">
            Awards & Honors
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl">Awards & Honors</h2>
          <p className="max-w-2xl text-base text-[color:var(--text-dark)]/75 sm:text-lg">
            A dignified record of recognition, service, and cultural
            stewardship.
          </p>
        </motion.div>
        <motion.div
          variants={staggerChildren}
          className="divide-y divide-[color:var(--color-emerald)]/10 rounded-2xl border border-[color:var(--color-emerald)]/10 bg-white/70"
        >
          {awards.map((award) => (
            <motion.div
              key={award.title}
              variants={fadeUp}
              className="px-6 py-6"
            >
              <h3 className="text-lg font-semibold text-[color:var(--color-emerald)] sm:text-xl">
                {award.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
                <span className="rounded-full border border-[color:var(--color-gold)]/40 px-3 py-1">
                  {award.authority}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
