"use client";

import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { MicVocal } from "lucide-react";

const socialLinks = [
  {
    url: "https://www.instagram.com/mohammadayaz.official/?hl=en",
    label: "Instagram",
  },
  {
    url: "https://x.com/mohdayazmusic?lang=en",
    label: "X (Twitter)",
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

const quickLinks = [
  { label: "About", href: "/#about" },
  { label: "Discography", href: "/#discography" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Performances", href: "/#performances" },
  { label: "Collaborations", href: "/#collaborations" },
  { label: "Awards", href: "/#awards" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-[var(--color-gold)]/10 bg-[var(--color-secondary)]/50"
      role="contentinfo"
    >
      <div className="container py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 mb-4 group"
              aria-label="Mohammad Ayaz - Home"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-dark)] text-[var(--color-primary)]">
                <MicVocal className="w-4 h-4" />
              </span>
              <span className="font-semibold text-white text-lg">
                Mohammad Ayaz
              </span>
            </Link>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Renowned Indian Playback Singer & Music Director. Known as the
              voice of Mohammed Rafi with 5000+ live shows across 50+ countries.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-semibold text-[var(--color-gold)] uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-gold)] uppercase tracking-wider mb-4">
              Contact
            </h3>
            <address className="not-italic flex flex-col gap-2 text-sm text-[var(--text-muted)]">
              <a
                href="tel:+919595991786"
                className="hover:text-[var(--color-gold)] transition-colors"
              >
                +91 95959 91786
              </a>
              <a
                href="mailto:md.ayaz7862@gmail.com"
                className="hover:text-[var(--color-gold)] transition-colors"
              >
                md.ayaz7862@gmail.com
              </a>
              <span>Mumbai / Solapur, Maharashtra, India</span>
            </address>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-gold)] uppercase tracking-wider mb-4">
              Follow
            </h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <SocialIcon
                  key={link.label}
                  url={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Mohammad Ayaz on ${link.label}`}
                  style={{ height: 36, width: 36 }}
                  className="transition-all duration-300 hover:scale-110"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[var(--color-gold)]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p>
            &copy; {new Date().getFullYear()} Mohammad Ayaz. All rights
            reserved.
          </p>
          <p>
            Indian Playback Singer &bull; Music Director &bull; Available for
            Worldwide Events
          </p>
        </div>
      </div>
    </footer>
  );
}
