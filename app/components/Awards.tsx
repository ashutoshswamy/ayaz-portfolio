"use client";

import {
  Award,
  Building2,
  HeartHandshake,
  Landmark,
  Trophy,
} from "lucide-react";

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
      className="py-20 sm:py-24 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerChildren}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-1/4 w-64 h-64 rounded-full bg-[var(--color-gold)]/5 blur-3xl" />
        <div className="absolute bottom-40 left-10 text-8xl text-[var(--color-gold)]/5">
          🏆
        </div>
        <div className="absolute top-1/2 right-10 w-px h-40 bg-gradient-to-b from-transparent via-[var(--color-gold)]/20 to-transparent" />
      </div>

      <div className="container relative z-10">
        <motion.div variants={fadeUp} className="mb-10 flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] sm:text-sm flex items-center gap-3">
            <Trophy className="w-4 h-4" />
            Awards & Honors
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl glow-text">
            Awards & Honors
          </h2>
          <p className="max-w-2xl text-base text-[var(--text-muted)] sm:text-lg">
            A dignified record of recognition, service, and cultural
            stewardship.
          </p>
        </motion.div>
        <motion.div
          variants={staggerChildren}
          className="grid gap-6 sm:grid-cols-2"
        >
          {awards.map((award, index) => (
            <motion.article
              key={award.title}
              variants={fadeUp}
              className="musical-card group rounded-2xl border border-[var(--color-gold)]/15 bg-gradient-to-br from-[var(--color-secondary)]/80 to-[var(--color-primary)]/80 p-6 backdrop-blur"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-gold)]/30 bg-gradient-to-br from-[var(--color-tertiary)] to-[var(--color-secondary)] transition-all duration-300 group-hover:scale-110 group-hover:border-[var(--color-gold)]/50 group-hover:shadow-[0_0_20px_rgba(245,200,0,0.2)]">
                  {(() => {
                    const Icon =
                      iconMap[award.category as keyof typeof iconMap];
                    return Icon ? (
                      <Icon
                        className="h-5 w-5 text-[var(--color-gold)]"
                        aria-hidden="true"
                      />
                    ) : null;
                  })()}
                </span>
                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="text-lg font-semibold text-[var(--color-gold)] sm:text-xl group-hover:text-[var(--color-gold-light)] transition-colors">
                    {award.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em]">
                    <span className="rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/10 px-3 py-1.5 text-[var(--color-gold)]">
                      {award.authority}
                    </span>
                    <span className="rounded-full border border-[var(--color-gold)]/20 bg-[var(--color-secondary)]/50 px-3 py-1.5 text-[var(--text-muted)]">
                      {award.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Total awards count */}
        <motion.div variants={fadeUp} className="mt-10 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl border border-[var(--color-gold)]/20 bg-gradient-to-r from-[var(--color-secondary)]/50 to-[var(--color-primary)]/50">
            <Trophy className="w-8 h-8 text-[var(--color-gold)]" />
            <div className="text-left">
              <div className="text-3xl font-bold text-[var(--color-gold)]">
                {awards.length}+
              </div>
              <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider">
                Prestigious Awards
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
