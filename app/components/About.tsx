"use client";

import Image from "next/image";
import { fadeUp, motion, staggerChildren, viewportOnce } from "./Animated";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 sm:py-28 lg:py-32 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerChildren}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 text-6xl text-[var(--color-gold)]/5 font-serif">
          ♪
        </div>
        <div className="absolute bottom-40 right-20 text-8xl text-[var(--color-gold)]/5 font-serif">
          ♫
        </div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-[var(--color-gold)]/5 blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div variants={fadeUp} className="mb-12 text-center lg:mb-16">
          <span className="mb-3 inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] sm:text-sm">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[var(--color-gold)]" />
            The Journey
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[var(--color-gold)]" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl glow-text">
            A Life Devoted to Music
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Image Column */}
          <motion.div
            variants={fadeUp}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            {/* Vinyl Record Decorative Ring */}
            <div className="absolute -inset-8 rounded-full border-2 border-dashed border-[var(--color-gold)]/10 animate-vinyl-spin-slow sm:-inset-12 hidden sm:block" />

            {/* Decorative Frame */}
            <div className="absolute -inset-4 rounded-3xl border border-[var(--color-gold)]/30 animate-border-glow sm:-inset-6" />
            <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-full bg-[var(--color-gold)]/15 blur-2xl sm:-bottom-6 sm:-right-6 sm:h-40 sm:w-40" />
            <div className="absolute -left-3 -top-3 h-20 w-20 rounded-full bg-[var(--color-gold)]/15 blur-2xl sm:-left-6 sm:-top-6 sm:h-32 sm:w-32" />

            {/* Musical Note Decorations */}
            <span
              className="absolute -top-6 -right-4 text-3xl text-[var(--color-gold)] opacity-40 animate-float-note"
              style={{ animationDelay: "0.3s" }}
            >
              ♬
            </span>
            <span
              className="absolute bottom-10 -left-6 text-2xl text-[var(--color-gold)] opacity-50 animate-float-note"
              style={{ animationDelay: "1.5s" }}
            >
              ♩
            </span>

            {/* Main Image */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl ring-2 ring-[var(--color-gold)]/20">
              <Image
                src="/profile/hero-profile.jpg"
                alt="Mohammad Ayaz - Artist Profile"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/5 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            variants={staggerChildren}
            className="flex flex-col gap-6 lg:gap-8"
          >
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-[var(--text-light)]/90 sm:text-xl"
            >
              From humble beginnings, Mohammad Ayaz carried the dignity of his
              heritage into every note, shaping a voice that honors tradition
              while embracing the world&apos;s many colors.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg"
            >
              With unwavering devotion to classical roots and a spirit open to
              global rhythms, his artistry rose from local stages to celebrated
              platforms across continents, inspiring audiences with soulful
              sincerity.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg"
            >
              Each performance reflects a legacy in motion—grounded, graceful,
              and guided by a belief that music can uplift cultures and unite
              generations.
            </motion.p>

            {/* Quote */}
            <motion.blockquote
              variants={fadeUp}
              className="relative mt-4 border-l-4 border-[var(--color-gold)] py-4 pl-6 rounded-r-xl bg-gradient-to-r from-[var(--color-gold)]/5 to-transparent"
            >
              <span className="absolute -top-3 left-4 text-5xl text-[var(--color-gold)]/30 font-serif">
                "
              </span>
              <p className="text-lg font-medium italic text-[var(--text-light)] sm:text-xl relative z-10">
                Music is the heritage we share—where every voice becomes a
                bridge between hearts.
              </p>
              <span className="absolute -bottom-4 right-4 text-5xl text-[var(--color-gold)]/30 font-serif">
                "
              </span>
            </motion.blockquote>

            {/* Stats/highlights */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-3 gap-4 mt-4"
            >
              <div className="text-center p-4 rounded-xl bg-[var(--color-secondary)]/50 border border-[var(--color-gold)]/10">
                <div className="text-2xl sm:text-3xl font-bold text-[var(--color-gold)]">
                  25+
                </div>
                <div className="text-xs sm:text-sm text-[var(--text-muted)] uppercase tracking-wider">
                  Years
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-[var(--color-secondary)]/50 border border-[var(--color-gold)]/10">
                <div className="text-2xl sm:text-3xl font-bold text-[var(--color-gold)]">
                  500+
                </div>
                <div className="text-xs sm:text-sm text-[var(--text-muted)] uppercase tracking-wider">
                  Shows
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-[var(--color-secondary)]/50 border border-[var(--color-gold)]/10">
                <div className="text-2xl sm:text-3xl font-bold text-[var(--color-gold)]">
                  5+
                </div>
                <div className="text-xs sm:text-sm text-[var(--text-muted)] uppercase tracking-wider">
                  Countries
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
