"use client";

import { Phone, Mail, MapPin, Music } from "lucide-react";
import { SocialIcon } from "react-social-icons";
import { fadeUp, motion, staggerChildren, viewportOnce } from "./Animated";

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
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-[var(--text-muted)] mr-2 hidden sm:inline">
              Follow:
            </span>
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
