"use client";

import { Globe, MapPin, Route } from "lucide-react";

import { fadeUp, motion, staggerChildren, viewportOnce } from "./Animated";

const national = ["India"];

const international = [
  "South Africa",
  "Dubai",
  "Singapore",
  "Sharjah",
  "East Africa",
  "Abu Dhabi",
  "Al Ain",
  "Malaysia",
  "Bahrain",
];

export default function Performances() {
  return (
    <motion.section
      id="performances"
      className="py-20 sm:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerChildren}
    >
      <div className="container">
        <motion.div variants={fadeUp} className="mb-10 flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] sm:text-sm">
            Performances
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl">
            Global Performances
          </h2>
          <p className="max-w-2xl text-base text-[color:var(--text-dark)]/75 sm:text-lg">
            From heritage theaters to international festivals, each venue
            carries a story and a shared rhythm.
          </p>
        </motion.div>
        <motion.div
          variants={staggerChildren}
          className="grid gap-8 lg:grid-cols-[1fr_1.2fr]"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-[color:var(--color-emerald)]/10 bg-white/70 p-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
              National
            </p>
            <div className="mt-4 space-y-4">
              {national.map((place) => (
                <div key={place} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--color-emerald)]/30 bg-[var(--color-offwhite)]">
                    <MapPin
                      className="h-4 w-4 text-[var(--color-emerald)]"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-base font-semibold text-[color:var(--color-emerald)]">
                    {place}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-[color:var(--color-emerald)]/10 bg-white/70 p-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
              International
            </p>
            <div className="mt-4 space-y-4">
              {international.map((place) => (
                <div key={place} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--color-emerald)]/30 bg-[var(--color-offwhite)]">
                    {place === "East Africa" ? (
                      <Route
                        className="h-4 w-4 text-[var(--color-emerald)]"
                        aria-hidden="true"
                      />
                    ) : (
                      <Globe
                        className="h-4 w-4 text-[var(--color-emerald)]"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                  <span className="text-base text-[color:var(--text-dark)]/80">
                    {place}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
