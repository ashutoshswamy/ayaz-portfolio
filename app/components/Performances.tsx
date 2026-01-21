"use client";

import { MapPin, Route } from "lucide-react";
import { AE, BH, IN, MY, SG, ZA } from "country-flag-icons/react/3x2";

import { fadeUp, motion, staggerChildren, viewportOnce } from "./Animated";

const national = [{ name: "India", Flag: IN }];

const international = [
  { name: "South Africa", Flag: ZA },
  { name: "Dubai", Flag: AE },
  { name: "Singapore", Flag: SG },
  { name: "Sharjah", Flag: AE },
  { name: "East Africa", Flag: null },
  { name: "Abu Dhabi", Flag: AE },
  { name: "Al Ain", Flag: AE },
  { name: "Malaysia", Flag: MY },
  { name: "Bahrain", Flag: BH },
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
        <motion.div variants={staggerChildren} className="grid gap-8">
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-[color:var(--color-emerald)]/10 bg-white/70 p-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
              National
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {national.map(({ name, Flag }) => (
                <div
                  key={name}
                  className="flex items-center gap-3 rounded-xl border border-[color:var(--color-emerald)]/10 bg-[var(--color-offwhite)]/70 px-4 py-3"
                >
                  <span className="flex h-9 w-12 items-center justify-center overflow-hidden rounded-md border border-[color:var(--color-emerald)]/20 bg-white">
                    <Flag className="h-full w-full" aria-hidden="true" />
                  </span>
                  <div className="flex items-center gap-2">
                    <MapPin
                      className="h-4 w-4 text-[var(--color-emerald)]"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-semibold text-[color:var(--color-emerald)] sm:text-base">
                      {name}
                    </span>
                  </div>
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
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {international.map(({ name, Flag }) => (
                <div
                  key={name}
                  className="flex items-center gap-3 rounded-xl border border-[color:var(--color-emerald)]/10 bg-[var(--color-offwhite)]/70 px-4 py-3"
                >
                  <span className="flex h-9 w-12 items-center justify-center overflow-hidden rounded-md border border-[color:var(--color-emerald)]/20 bg-white">
                    {Flag ? (
                      <Flag className="h-full w-full" aria-hidden="true" />
                    ) : (
                      <Route
                        className="h-4 w-4 text-[var(--color-emerald)]"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                  <span className="text-sm text-[color:var(--text-dark)]/80 sm:text-base">
                    {name}
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
