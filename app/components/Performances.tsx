"use client";

import { Route, Plane, MapPin } from "lucide-react";
import { AE, BH, MY, SG, ZA } from "country-flag-icons/react/3x2";

import { fadeUp, motion, staggerChildren, viewportOnce } from "./Animated";

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
      className="py-20 sm:py-24 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerChildren}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/10 to-transparent" />
        <div className="absolute top-20 right-20 text-6xl text-[var(--color-gold)]/5">
          🌍
        </div>
        <div className="absolute bottom-20 left-1/4 w-48 h-48 rounded-full bg-[var(--color-gold)]/5 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div variants={fadeUp} className="mb-10 flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] sm:text-sm flex items-center gap-3">
            <Plane className="w-4 h-4" />
            Performances
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl glow-text">
            Global Performances
          </h2>
          <p className="max-w-2xl text-base text-[var(--text-muted)] sm:text-lg">
            From heritage theaters to international festivals, each venue
            carries a story and a shared rhythm.
          </p>
        </motion.div>
        <motion.div variants={staggerChildren} className="grid gap-8">
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-[var(--color-gold)]/20 bg-gradient-to-br from-[var(--color-secondary)]/80 to-[var(--color-primary)]/80 p-6 sm:p-8 backdrop-blur"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-gold)]/20 to-[var(--color-gold)]/5 border border-[var(--color-gold)]/30">
                <MapPin className="w-5 h-5 text-[var(--color-gold)]" />
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-gold)] font-semibold">
                International Venues
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {international.map(({ name, Flag }, index) => (
                <motion.div
                  key={name}
                  variants={fadeUp}
                  className="group musical-card flex items-center gap-4 rounded-xl border border-[var(--color-gold)]/15 bg-gradient-to-r from-[var(--color-tertiary)]/60 to-[var(--color-secondary)]/60 px-5 py-4 transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="flex h-10 w-14 items-center justify-center overflow-hidden rounded-lg border border-[var(--color-gold)]/30 bg-[var(--color-primary)] shadow-inner">
                    {Flag ? (
                      <Flag className="h-full w-full" aria-hidden="true" />
                    ) : (
                      <Route
                        className="h-5 w-5 text-[var(--color-gold)]"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                  <div className="flex-1">
                    <span className="text-base font-medium text-[var(--text-light)] group-hover:text-[var(--color-gold)] transition-colors">
                      {name}
                    </span>
                  </div>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-gold)]">
                    ♪
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats row */}
            <div className="mt-8 pt-6 border-t border-[var(--color-gold)]/10 flex flex-wrap justify-center gap-8 sm:gap-16">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[var(--color-gold)]">
                  5+
                </div>
                <div className="text-xs sm:text-sm text-[var(--text-muted)] uppercase tracking-wider mt-1">
                  Countries
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[var(--color-gold)]">
                  3
                </div>
                <div className="text-xs sm:text-sm text-[var(--text-muted)] uppercase tracking-wider mt-1">
                  Continents
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[var(--color-gold)]">
                  500+
                </div>
                <div className="text-xs sm:text-sm text-[var(--text-muted)] uppercase tracking-wider mt-1">
                  Live Shows
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
