"use client";

import { Award, Building2, HeartHandshake, Landmark } from "lucide-react";

import { fadeUp, motion, staggerChildren, viewportOnce } from "./Animated";

const awards = [
  {
    title:
      "Honored by Council General of India at Indian Embassy, Saudi Arabia",
    authority: "Council General of India",
    category: "Institutional",
  },
  {
    title:
      "Recognition by Indian Association of South Africa (Mayor of Durban)",
    authority: "Indian Association of South Africa",
    category: "Institutional",
  },
  {
    title: "Solapur Bar Association honor by Chief Justice of Mumbai",
    authority: "Chief Justice of Mumbai",
    category: "Institutional",
  },
  {
    title: "Goa Ratna Puraskar by Hon’ble Chief Minister of Goa",
    authority: "Hon’ble Chief Minister of Goa",
    category: "Cultural",
  },
  {
    title: "Voice of Rafi award by Delhi Doordarshan",
    authority: "Delhi Doordarshan",
    category: "Institutional",
  },
  {
    title: "Rashtriya Ekatmata Puraskar",
    authority: "National honor",
    category: "National",
  },
  {
    title: "Mujhe Urdu Padhao Na Puraskar (Delhi Rashtriya Urdu Association)",
    authority: "Delhi Rashtriya Urdu Association",
    category: "Cultural",
  },
  {
    title: "Solapur Bhushan Puraskar by Gulzar Sahab",
    authority: "Gulzar Sahab",
    category: "Cultural",
  },
  {
    title:
      "Charity performances for flood victims (Rotary Club, Lions Club, Maharashtra Police, Education Societies)",
    authority:
      "Rotary Club • Lions Club • Maharashtra Police • Education Societies",
    category: "Charity",
  },
];

const iconMap = {
  National: Award,
  Cultural: Landmark,
  Charity: HeartHandshake,
  Institutional: Building2,
};

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
          className="grid gap-6 sm:grid-cols-2"
        >
          {awards.map((award) => (
            <motion.article
              key={award.title}
              variants={fadeUp}
              className="rounded-2xl border border-[color:var(--color-emerald)]/10 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-emerald)]/20 bg-[color:var(--color-offwhite)]">
                  {(() => {
                    const Icon =
                      iconMap[award.category as keyof typeof iconMap];
                    return Icon ? (
                      <Icon
                        className="h-4 w-4 text-[var(--color-emerald)]"
                        aria-hidden="true"
                      />
                    ) : null;
                  })()}
                </span>
                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="text-lg font-semibold text-[color:var(--color-emerald)] sm:text-xl">
                    {award.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
                    <span className="rounded-full border border-[color:var(--color-gold)]/40 px-3 py-1">
                      {award.authority}
                    </span>
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
