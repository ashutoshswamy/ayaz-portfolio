"use client";

import Image from "next/image";
import { fadeUp, motion, staggerChildren, viewportOnce } from "./Animated";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 sm:py-28 lg:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerChildren}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div variants={fadeUp} className="mb-12 text-center lg:mb-16">
          <span className="mb-3 block text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] sm:text-sm">
            The Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            A Life Devoted to Music
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Image Column */}
          <motion.div variants={fadeUp} className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* Decorative Frame */}
            <div className="absolute -inset-4 rounded-3xl border border-[var(--color-gold)]/20 sm:-inset-6" />
            <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-full bg-[var(--color-gold)]/10 blur-2xl sm:-bottom-6 sm:-right-6 sm:h-40 sm:w-40" />
            <div className="absolute -left-3 -top-3 h-20 w-20 rounded-full bg-[var(--color-gold)]/10 blur-2xl sm:-left-6 sm:-top-6 sm:h-32 sm:w-32" />
            
            {/* Main Image */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/profile/hero-profile.jpg"
                alt="Mohammad Ayaz - Artist Profile"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            variants={staggerChildren}
            className="flex flex-col gap-6 lg:gap-8"
          >
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-[color:var(--text-dark)]/85 sm:text-xl"
            >
              From humble beginnings, Mohammad Ayaz carried the dignity of his
              heritage into every note, shaping a voice that honors tradition
              while embracing the world&apos;s many colors.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed text-[color:var(--text-dark)]/75 sm:text-lg"
            >
              With unwavering devotion to classical roots and a spirit open to
              global rhythms, his artistry rose from local stages to celebrated
              platforms across continents, inspiring audiences with soulful
              sincerity.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed text-[color:var(--text-dark)]/75 sm:text-lg"
            >
              Each performance reflects a legacy in motion—grounded, graceful,
              and guided by a belief that music can uplift cultures and unite
              generations.
            </motion.p>

            {/* Quote */}
            <motion.blockquote
              variants={fadeUp}
              className="relative mt-4 border-l-4 border-[var(--color-gold)] py-2 pl-6"
            >
              <p className="text-lg font-medium italic text-[color:var(--text-dark)] sm:text-xl">
                &quot;Music is the heritage we share—where every voice becomes a
                bridge between hearts.&quot;
              </p>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
