"use client";

import { fadeUp, motion, staggerChildren, viewportOnce } from "./Animated";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 sm:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerChildren}
    >
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] sm:text-sm">
              The Journey
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl">The Journey</h2>
          </motion.div>
          <motion.div
            variants={staggerChildren}
            className="flex flex-col gap-6 text-base text-[color:var(--text-dark)]/85 sm:text-lg"
          >
            <motion.p variants={fadeUp}>
              From humble beginnings, Mohammad Ayaz carried the dignity of his
              heritage into every note, shaping a voice that honors tradition
              while embracing the world’s many colors.
            </motion.p>
            <motion.p variants={fadeUp}>
              With unwavering devotion to classical roots and a spirit open to
              global rhythms, his artistry rose from local stages to celebrated
              platforms across continents, inspiring audiences with soulful
              sincerity.
            </motion.p>
            <motion.p variants={fadeUp}>
              Each performance reflects a legacy in motion—grounded, graceful,
              and guided by a belief that music can uplift cultures and unite
              generations.
            </motion.p>
            <motion.blockquote
              variants={fadeUp}
              className="border-l-2 border-[var(--color-gold)] pl-4 text-base italic text-[color:var(--text-dark)]/70 sm:text-lg"
            >
              “Music is the heritage we share—where every voice becomes a bridge
              between hearts.”
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
