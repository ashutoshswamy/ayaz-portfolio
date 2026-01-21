"use client";

import { fadeUp, motion, staggerChildren, viewportOnce } from "./Animated";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20 sm:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerChildren}
    >
      <div className="container">
        <motion.div variants={fadeUp} className="flex flex-col gap-4">
          <span className="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] sm:text-sm">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl">Get in Touch</h2>
          <p className="max-w-2xl text-base text-[color:var(--text-dark)]/75 sm:text-lg">
            For performances, collaborations, and cultural events, feel free to
            reach out. Every invitation is received with respect and care.
          </p>
        </motion.div>
        <motion.div
          variants={staggerChildren}
          className="mt-8 grid gap-6 rounded-2xl border border-[color:var(--color-emerald)]/10 bg-white/70 p-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-1">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Phone
            </p>
            <p className="text-base font-medium text-[color:var(--color-emerald)]">
              +91 90000 00000
            </p>
            <p className="text-base font-medium text-[color:var(--color-emerald)]">
              +91 90000 00001
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col gap-1">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Email
            </p>
            <p className="text-base font-medium text-[color:var(--color-emerald)]">
              contact@mohammadayaz.com
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col gap-1">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Location
            </p>
            <p className="text-base font-medium text-[color:var(--color-emerald)]">
              Mumbai / Solapur
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="flex items-center sm:justify-end"
          >
            <a
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-emerald)] px-6 py-3 text-sm font-medium text-[var(--color-offwhite)] transition hover:opacity-90 sm:w-auto"
              href="mailto:contact@mohammadayaz.com"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
