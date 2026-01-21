"use client";

import { fadeUp, motion, staggerChildren } from "./Animated";

export default function Hero() {
  return (
    <motion.section
      id="top"
      className="relative isolate overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
    >
      <div className="hero-bg" aria-hidden="true" />
      <div className="container relative z-10 flex min-h-[75vh] flex-col items-center justify-center gap-4 py-24 text-center">
        <motion.span
          variants={fadeUp}
          className="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] sm:text-sm"
        >
          Artist
        </motion.span>
        <motion.h1
          variants={fadeUp}
          className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Mohammad Ayaz
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-sm font-medium uppercase tracking-[0.2em] text-[color:var(--text-dark)]/70 sm:text-base md:text-lg"
        >
          Playback Singer • Music Director • World Record Holder
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="mt-2 max-w-2xl text-pretty text-base text-[color:var(--text-dark)]/80 sm:text-lg md:text-xl"
        >
          Weaving soulful melodies, classical grace, and global rhythms into a
          single, timeless voice.
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="mt-6 flex flex-wrap justify-center gap-4"
        >
          <a
            className="rounded-full bg-[var(--color-emerald)] px-6 py-3 text-sm font-medium text-[var(--color-offwhite)] transition hover:opacity-90 sm:text-base"
            href="#work"
          >
            Listen to Work
          </a>
          <a
            className="rounded-full border border-[var(--color-emerald)] px-6 py-3 text-sm font-medium text-[var(--color-emerald)] transition hover:bg-[var(--color-emerald)] hover:text-[var(--color-offwhite)] sm:text-base"
            href="#contact"
          >
            Contact for Events
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
