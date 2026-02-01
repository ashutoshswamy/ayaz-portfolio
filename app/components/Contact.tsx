"use client";

import { Phone, Mail, MapPin, Music } from "lucide-react";
import { fadeUp, motion, staggerChildren, viewportOnce } from "./Animated";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20 sm:py-24 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerChildren}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--color-gold)]/5 to-transparent" />
        <div className="absolute top-20 right-10 text-8xl text-[var(--color-gold)]/5 font-serif">
          ♪
        </div>
        <div className="absolute bottom-40 left-20 text-6xl text-[var(--color-gold)]/5 font-serif">
          ♫
        </div>
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={fadeUp}
          className="flex flex-col gap-4 text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)] sm:text-sm flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[var(--color-gold)]" />
            <Music className="w-4 h-4" />
            Contact
            <Music className="w-4 h-4" />
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[var(--color-gold)]" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl glow-text">
            Get in Touch
          </h2>
          <p className="text-base text-[var(--text-muted)] sm:text-lg">
            For performances, collaborations, and cultural events, feel free to
            reach out. Every invitation is received with respect and care.
          </p>
        </motion.div>

        <motion.div
          variants={staggerChildren}
          className="grid gap-6 lg:grid-cols-3 mb-8"
        >
          {/* Phone Card */}
          <motion.div
            variants={fadeUp}
            className="musical-card group flex flex-col items-center gap-4 rounded-2xl border border-[var(--color-gold)]/15 bg-gradient-to-b from-[var(--color-secondary)]/80 to-[var(--color-primary)]/80 p-8 backdrop-blur text-center"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-gold)]/20 to-[var(--color-gold)]/5 border border-[var(--color-gold)]/30 group-hover:animate-pulse-glow transition-all duration-300">
              <Phone className="w-7 h-7 text-[var(--color-gold)]" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)] mb-2">
                Phone
              </p>
              <a
                href="tel:+919595991786"
                className="text-lg font-medium text-[var(--text-light)] hover:text-[var(--color-gold)] transition-colors"
              >
                +91 95959 91786
              </a>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            variants={fadeUp}
            className="musical-card group flex flex-col items-center gap-4 rounded-2xl border border-[var(--color-gold)]/15 bg-gradient-to-b from-[var(--color-secondary)]/80 to-[var(--color-primary)]/80 p-8 backdrop-blur text-center"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-gold)]/20 to-[var(--color-gold)]/5 border border-[var(--color-gold)]/30 group-hover:animate-pulse-glow transition-all duration-300">
              <Mail className="w-7 h-7 text-[var(--color-gold)]" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)] mb-2">
                Email
              </p>
              <a
                href="mailto:md.ayaz7862@gmail.com"
                className="text-lg font-medium text-[var(--text-light)] hover:text-[var(--color-gold)] transition-colors break-all"
              >
                md.ayaz7862@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            variants={fadeUp}
            className="musical-card group flex flex-col items-center gap-4 rounded-2xl border border-[var(--color-gold)]/15 bg-gradient-to-b from-[var(--color-secondary)]/80 to-[var(--color-primary)]/80 p-8 backdrop-blur text-center"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-gold)]/20 to-[var(--color-gold)]/5 border border-[var(--color-gold)]/30 group-hover:animate-pulse-glow transition-all duration-300">
              <MapPin className="w-7 h-7 text-[var(--color-gold)]" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)] mb-2">
                Location
              </p>
              <p className="text-lg font-medium text-[var(--text-light)]">
                Mumbai / Solapur
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Links & CTA */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-[var(--text-muted)] mr-2">
              Follow:
            </span>
            <a
              href="https://www.instagram.com/mohammadayaz.official/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-secondary)]/50 text-[var(--color-gold)] transition-all duration-300 hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-primary)] hover:shadow-[0_0_20px_rgba(245,200,0,0.4)] hover:scale-110"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://x.com/mohdayazmusic?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-secondary)]/50 text-[var(--color-gold)] transition-all duration-300 hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-primary)] hover:shadow-[0_0_20px_rgba(245,200,0,0.4)] hover:scale-110"
              aria-label="X (Twitter)"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/mohammadayaz.official/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-secondary)]/50 text-[var(--color-gold)] transition-all duration-300 hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-primary)] hover:shadow-[0_0_20px_rgba(245,200,0,0.4)] hover:scale-110"
              aria-label="Facebook"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@mohdayazofficial1786"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-secondary)]/50 text-[var(--color-gold)] transition-all duration-300 hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-primary)] hover:shadow-[0_0_20px_rgba(245,200,0,0.4)] hover:scale-110"
              aria-label="YouTube"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          <a
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-dark)] px-8 py-4 text-base font-semibold text-[var(--color-primary)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,200,0,0.4)] musical-button overflow-hidden"
            href="mailto:md.ayaz7862@gmail.com"
          >
            <Mail className="w-5 h-5" />
            <span className="relative z-10">Book for Events</span>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
