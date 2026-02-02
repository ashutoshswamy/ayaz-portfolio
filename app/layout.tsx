import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://mohammadayaz.com";
const siteName = "Mohammad Ayaz - Playback Singer & Music Director";
const siteDescription =
  "Official portfolio of Mohammad Ayaz, a renowned Playback Singer and Music Director. Explore his discography, celebrity collaborations, live performances, and upcoming events.";
const siteImage = `${siteUrl}/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | Mohammad Ayaz",
  },
  description: siteDescription,
  keywords: [
    "Mohammad Ayaz",
    "Playback Singer",
    "Music Director",
    "Bollywood singer",
    "Indian playback singer",
    "music composer",
    "film music",
    "live performances",
    "Bollywood music director",
    "Indian music industry",
    "playback recording",
    "music production",
  ],
  authors: [{ name: "Mohammad Ayaz", url: siteUrl }],
  creator: "Mohammad Ayaz",
  publisher: "Mohammad Ayaz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Music",
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a0f1a" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohammad Ayaz",
    url: siteUrl,
    image: siteImage,
    description: siteDescription,
    jobTitle: ["Playback Singer", "Music Director"],
    sameAs: [
      "https://www.instagram.com/mohammadayaz.official/",
      "https://www.youtube.com/@mohdayazofficial1786",
      "https://www.facebook.com/mohammadayaz.official/",
      "https://x.com/mohdayazmusic",
      "https://open.spotify.com/artist/6h8AWYC4KOh4AC85oVLvYe",
    ],
    knowsAbout: [
      "Playback Singing",
      "Music Direction",
      "Film Music",
      "Music Production",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
