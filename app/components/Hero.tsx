"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { SocialIcon } from "react-social-icons";

import { fadeUp, motion, staggerChildren } from "./Animated";

type HeroImage = {
  id: string;
  url: string;
};

// Pre-computed floating notes data to avoid impure Math.random() during render
const notes = ["♪", "♫", "♬", "♩", "♭", "♮"];
const floatingNotesData = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${((i * 37 + 13) % 100)}%`,
  top: `${((i * 53 + 7) % 100)}%`,
  fontSize: `${(i % 5) * 4 + 14}px`,
  animationDelay: `${(i % 4) * 1.1}s`,
  animationDuration: `${(i % 3) + 4}s`,
  note: notes[i % notes.length],
}));

// Floating music notes component
const FloatingNotes = () => {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {floatingNotesData.map((item) => (
        <span
          key={item.id}
          className="absolute text-[var(--color-gold)] opacity-20 animate-float-note"
          style={{
            left: item.left,
            top: item.top,
            fontSize: item.fontSize,
            animationDelay: item.animationDelay,
            animationDuration: item.animationDuration,
          }}
        >
          {item.note}
        </span>
      ))}
    </div>
  );
};

// Social media links data
const socialLinks = [
  {
    url: "https://www.instagram.com/mohammadayaz.official/?hl=en",
    label: "Instagram",
  },
  {
    url: "https://x.com/mohdayazmusic?lang=en",
    label: "X",
  },
  {
    url: "https://www.facebook.com/mohammadayaz.official/",
    label: "Facebook",
  },
  {
    url: "https://www.youtube.com/@mohdayazofficial1786",
    label: "YouTube",
  },
  {
    url: "https://open.spotify.com/artist/6h8AWYC4KOh4AC85oVLvYe?si=N5s8zA_eQVSzDbeuAF2sdg",
    label: "Spotify",
  },
];

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

      <div className="container relative z-10 grid min-h-[85vh] items-center gap-8 py-16 sm:py-20 md:py-24 lg:min-h-[90vh] lg:grid-cols-2 lg:gap-12">
        {/* Text Content - Left Side */}
        <motion.div
          variants={staggerChildren}
          className="flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1"
        >
          {/* Available for Booking Badge */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center lg:justify-start"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-secondary)]/50 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-gold)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-gold)]"></span>
              </span>
              <span className="text-sm font-medium text-[var(--color-gold)]">
                Available for Booking
              </span>
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl glow-text"
          >
            Hello, I&apos;m
            <br />
            Mohammad Ayaz
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl md:text-2xl font-medium text-[var(--text-muted)]"
          >
            Playback Singer & Music Director
          </motion.p>

          {/* Highlights */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-2 text-[var(--text-light)]/80"
          >
            <p className="text-base sm:text-lg">
              Voice of{" "}
              <span className="text-[var(--color-gold)] font-semibold">
                Mohammed Rafi
              </span>
            </p>
            <p className="text-base sm:text-lg">
              Performed{" "}
              <span className="text-[var(--color-gold)] font-semibold">
                5000+
              </span>{" "}
              Live Shows
            </p>
            <p className="text-base sm:text-lg">
              Awards Achieved{" "}
              <span className="text-[var(--color-gold)] font-semibold">
                150+
              </span>
            </p>
            <p className="text-base sm:text-lg">
              Performed in{" "}
              <span className="text-[var(--color-gold)] font-semibold">
                50+
              </span>{" "}
              Countries
            </p>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3"
          >
            {socialLinks.map((link) => (
              <SocialIcon
                key={link.label}
                url={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow on ${link.label}`}
                style={{ height: 40, width: 40 }}
                className="transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(245,200,0,0.4)] sm:!h-[45px] sm:!w-[45px]"
              />
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-2 flex flex-wrap justify-center lg:justify-start gap-4"
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

        {/* Circular Profile Image - Right Side */}
        <motion.div
          variants={fadeUp}
          className="relative mx-auto w-64 sm:w-72 md:w-80 lg:w-full lg:max-w-md order-1 lg:order-2 flex items-center justify-center"
        >
          {/* Decorative rings */}
          <div className="absolute -inset-4 sm:-inset-8 rounded-full border-2 border-dashed border-[var(--color-gold)]/20 animate-vinyl-spin-slow" />
          <div className="absolute -inset-2 sm:-inset-4 rounded-full border border-[var(--color-gold)]/30" />

          {/* Glow effect */}
          <div className="absolute -inset-6 sm:-inset-10 rounded-full bg-[var(--color-gold)]/10 blur-2xl" />

          {/* Main circular image */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full shadow-2xl ring-4 ring-[var(--color-gold)]/20">
            <Image
              src={imageSrc}
              alt="Mohammad Ayaz - Renowned Indian Playback Singer & Music Director"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
              sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Musical Note Decorations */}
          <span
            className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 text-2xl sm:text-3xl text-[var(--color-gold)] opacity-60 animate-float-note"
            style={{ animationDelay: "0.5s" }}
          >
            ♪
          </span>
          <span
            className="absolute -bottom-1 -left-3 sm:-bottom-2 sm:-left-6 text-3xl sm:text-4xl text-[var(--color-gold)] opacity-50 animate-float-note"
            style={{ animationDelay: "1s" }}
          >
            ♫
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
}
