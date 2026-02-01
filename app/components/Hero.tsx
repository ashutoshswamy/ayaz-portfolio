"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

import { fadeUp, motion, staggerChildren } from "./Animated";

type HeroImage = {
  id: string;
  url: string;
};

// Floating music notes component
const FloatingNotes = () => {
  const notes = ["♪", "♫", "♬", "♩", "♭", "♮"];
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {[...Array(12)].map((_, i) => (
        <span
          key={i}
          className="absolute text-[var(--color-gold)] opacity-20 animate-float-note"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 14}px`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${Math.random() * 3 + 4}s`,
          }}
        >
          {notes[Math.floor(Math.random() * notes.length)]}
        </span>
      ))}
    </div>
  );
};

export default function Hero() {
  const [heroImage, setHeroImage] = useState<HeroImage | null>(null);

  useEffect(() => {
    const fetchHeroImage = async () => {
      try {
        const { data, error } = await supabase
          .from("hero")
          .select("*")
          .single();

        if (error && error.code !== "PGRST116") {
          console.error("Error fetching hero image:", error);
          return;
        }
        setHeroImage(data || null);
      } catch (error) {
        console.error("Error fetching hero image:", error);
      }
    };

    fetchHeroImage();
  }, []);

  // Fallback to local image if no Supabase image
  const imageSrc =
    heroImage?.url || "/profile/WhatsApp Image 2026-01-22 at 11.47.46 (2).jpeg";

  return (
    <motion.section
      id="top"
      className="relative isolate overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
    >
      <div className="hero-bg" aria-hidden="true" />
      <FloatingNotes />

      {/* Decorative sound wave lines */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-32 opacity-20 hidden lg:block"
        aria-hidden="true"
      >
        <svg viewBox="0 0 100 200" className="w-full h-auto">
          <path
            d="M50 0 Q80 50 50 100 Q20 150 50 200"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="2"
          />
          <path
            d="M30 20 Q60 70 30 120 Q0 170 30 220"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="1"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0" />
              <stop
                offset="50%"
                stopColor="var(--color-gold)"
                stopOpacity="1"
              />
              <stop
                offset="100%"
                stopColor="var(--color-gold)"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-32 opacity-20 hidden lg:block"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 100 200"
          className="w-full h-auto transform scale-x-[-1]"
        >
          <path
            d="M50 0 Q80 50 50 100 Q20 150 50 200"
            fill="none"
            stroke="url(#goldGradient2)"
            strokeWidth="2"
          />
          <path
            d="M30 20 Q60 70 30 120 Q0 170 30 220"
            fill="none"
            stroke="url(#goldGradient2)"
            strokeWidth="1"
            opacity="0.5"
          />
          <defs>
            <linearGradient
              id="goldGradient2"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0" />
              <stop
                offset="50%"
                stopColor="var(--color-gold)"
                stopOpacity="1"
              />
              <stop
                offset="100%"
                stopColor="var(--color-gold)"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container relative z-10 grid min-h-[85vh] items-center gap-8 py-16 sm:py-20 md:py-24 lg:min-h-[90vh] lg:grid-cols-2 lg:gap-12">
        {/* Text Content - Left Side */}
        <motion.div
          variants={staggerChildren}
          className="flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] sm:text-sm flex items-center gap-2 justify-center lg:justify-start"
          >
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-[var(--color-gold)]" />
            Artist
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-[var(--color-gold)]" />
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl glow-text"
          >
            Mohammad Ayaz
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--text-muted)] sm:text-base md:text-lg flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-3"
          >
            <span>Playback Singer</span>
            <span className="text-[var(--color-gold)]">•</span>
            <span>Music Director</span>
            <span className="text-[var(--color-gold)]">•</span>
            <span>World Record Holder</span>
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-pretty text-base text-[var(--text-light)]/85 sm:text-lg md:text-xl mx-auto lg:mx-0"
          >
            Weaving soulful melodies, classical grace, and global rhythms into a
            single, timeless voice.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-4 flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <a
              className="group relative rounded-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-dark)] px-8 py-3.5 text-sm font-semibold text-[var(--color-primary)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,200,0,0.4)] sm:text-base musical-button overflow-hidden"
              href="#discography"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Listen to Work
              </span>
            </a>
            <a
              className="group rounded-full border-2 border-[var(--color-gold)]/60 px-8 py-3.5 text-sm font-semibold text-[var(--color-gold)] transition-all duration-300 hover:bg-[var(--color-gold)] hover:text-[var(--color-primary)] hover:border-[var(--color-gold)] hover:shadow-[0_0_30px_rgba(245,200,0,0.3)] sm:text-base"
              href="#contact"
            >
              Contact for Events
            </a>
          </motion.div>
        </motion.div>

        {/* Image - Right Side */}
        <motion.div
          variants={fadeUp}
          className="relative mx-auto w-64 sm:w-72 md:w-80 lg:w-full lg:max-w-md order-1 lg:order-2"
        >
          {/* Vinyl Record Decorative Ring */}
          <div className="absolute -inset-8 rounded-full border-2 border-dashed border-[var(--color-gold)]/10 animate-vinyl-spin-slow sm:-inset-12" />

          {/* Decorative Frame */}
          <div className="absolute -inset-4 rounded-3xl border border-[var(--color-gold)]/30 animate-border-glow sm:-inset-6" />
          <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-full bg-[var(--color-gold)]/15 blur-2xl sm:-bottom-6 sm:-right-6 sm:h-40 sm:w-40" />
          <div className="absolute -left-3 -top-3 h-20 w-20 rounded-full bg-[var(--color-gold)]/15 blur-2xl sm:-left-6 sm:-top-6 sm:h-32 sm:w-32" />

          {/* Musical Note Decorations */}
          <span
            className="absolute -top-4 -right-2 text-2xl text-[var(--color-gold)] opacity-60 animate-float-note"
            style={{ animationDelay: "0.5s" }}
          >
            ♪
          </span>
          <span
            className="absolute -bottom-2 -left-4 text-3xl text-[var(--color-gold)] opacity-50 animate-float-note"
            style={{ animationDelay: "1s" }}
          >
            ♫
          </span>

          {/* Main Image */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl ring-2 ring-[var(--color-gold)]/20">
            <Image
              src={imageSrc}
              alt="Mohammad Ayaz"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 500px"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Subtle shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
