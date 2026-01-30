"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

import { fadeUp, motion, staggerChildren } from "./Animated";

type HeroImage = {
  id: string;
  url: string;
};

export default function Hero() {
  const [heroImage, setHeroImage] = useState<HeroImage | null>(null);
  
  useEffect(() => {
    const fetchHeroImage = async () => {
      try {
        const { data, error } = await supabase
          .from('hero')
          .select('*')
          .single();

        if (error && error.code !== 'PGRST116') {
          console.error('Error fetching hero image:', error);
          return;
        }
        setHeroImage(data || null);
      } catch (error) {
        console.error('Error fetching hero image:', error);
      }
    };

    fetchHeroImage();
  }, []);

  // Fallback to local image if no Supabase image
  const imageSrc = heroImage?.url || "/profile/WhatsApp Image 2026-01-22 at 11.47.46 (2).jpeg";

  return (
    <motion.section
      id="top"
      className="relative isolate overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
    >
      <div className="hero-bg" aria-hidden="true" />
      <div className="container relative z-10 flex min-h-[85vh] flex-col items-center justify-center gap-6 py-16 text-center sm:py-20 md:py-24 lg:min-h-[90vh]">
        <motion.div
          variants={fadeUp}
          className="relative mb-6 h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[28rem] lg:w-[28rem]"
        >
          <Image
            src={imageSrc}
            alt="Mohammad Ayaz"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
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
          className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--text-muted)] sm:text-base md:text-lg"
        >
          Playback Singer • Music Director • World Record Holder
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="mt-2 max-w-2xl text-pretty text-base text-[var(--text-light)]/85 sm:text-lg md:text-xl"
        >
          Weaving soulful melodies, classical grace, and global rhythms into a
          single, timeless voice.
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="mt-6 flex flex-wrap justify-center gap-4"
        >
          <a
            className="rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-medium text-[var(--color-primary)] transition hover:bg-[var(--color-gold-dark)] sm:text-base"
            href="#discography"
          >
            Listen to Work
          </a>
          <a
            className="rounded-full border border-[var(--color-gold)] px-6 py-3 text-sm font-medium text-[var(--color-gold)] transition hover:bg-[var(--color-gold)] hover:text-[var(--color-primary)] sm:text-base"
            href="#contact"
          >
            Contact for Events
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
