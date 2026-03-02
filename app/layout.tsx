import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
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
  "Official portfolio of Mohammad Ayaz, a renowned Indian Playback Singer and Music Director. Known as the voice of Mohammed Rafi, with 5000+ live shows, 150+ awards, and performances across 50+ countries. Explore his discography, celebrity collaborations, and upcoming events.";
const siteImage = `${siteUrl}/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | Mohammad Ayaz - Playback Singer",
  },
  description: siteDescription,
  keywords: [
    // Primary keywords
    "Mohammad Ayaz",
    "Mohammad Ayaz singer",
    "Mohammad Ayaz playback singer",
    "Mohammad Ayaz music director",
    // Name variations (common search patterns)
    "Mohd Ayaz",
    "Mohd Ayaz singer",
    "Mohammed Ayaz",
    "Mohammed Ayaz singer",
    "Mohammad Ayaz Shaikh",
    "Mohmmad Ayaz",
    "Mohmmad Ayaz Shaikh",
    // Music-related keywords
    "Playback Singer India",
    "Music Director",
    "Bollywood singer",
    "Indian playback singer",
    "Mohammad Ayaz songs",
    "Mohammad Ayaz albums",
    "Mohammad Ayaz live performance",
    // Descriptive keywords
    "music composer",
    "film music",
    "live performances",
    "Bollywood music director",
    "Indian music industry",
    "playback recording",
    "music production",
    "Mohammed Rafi tribute",
    "Ghazal singer",
    "Indian vocalist",
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
    type: "profile",
    locale: "en_IN",
    url: siteUrl,
    siteName: siteName,
    title: "Mohammad Ayaz - Renowned Playback Singer & Music Director",
    description: siteDescription,
    images: [
      {
        url: siteImage,
        width: 1200,
        height: 630,
        alt: "Mohammad Ayaz - Playback Singer & Music Director",
        type: "image/jpeg",
      },
      {
        url: `${siteUrl}/android-chrome-512x512.png`,
        width: 512,
        height: 512,
        alt: "Mohammad Ayaz Logo",
        type: "image/png",
      },
    ],
    firstName: "Mohammad",
    lastName: "Ayaz",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mohdayazmusic",
    creator: "@mohdayazmusic",
    title: "Mohammad Ayaz - Playback Singer & Music Director",
    description:
      "Official portfolio of Mohammad Ayaz, renowned Indian Playback Singer with 5000+ live shows and 150+ awards.",
    images: [siteImage],
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
    google: "Ctn6_ohNtH6qrUpp6CBIG4lnOHoaaTguEM1cwb8cLfk",
  },
  other: {
    "music:musician": siteUrl,
    "og:profile:first_name": "Mohammad",
    "og:profile:last_name": "Ayaz",
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
  // Comprehensive JSON-LD structured data for Google Knowledge Panel
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // Person + MusicArtist schema
      {
        "@type": ["Person", "MusicArtist"],
        "@id": `${siteUrl}/#person`,
        name: "Mohammad Ayaz",
        alternateName: ["Mohd Ayaz", "Mohammed Ayaz", "Mohammad Ayaz Shaikh", "Mohmmad Ayaz", "Mohmmad Ayaz Shaikh"],
        url: siteUrl,
        image: {
          "@type": "ImageObject",
          url: siteImage,
          width: 1200,
          height: 630,
          caption: "Mohammad Ayaz - Playback Singer & Music Director",
        },
        description: siteDescription,
        jobTitle: ["Playback Singer", "Music Director"],
        nationality: {
          "@type": "Country",
          name: "India",
        },
        genre: [
          "Playback Singing",
          "Bollywood Music",
          "Ghazal",
          "Film Music",
          "Indian Classical",
        ],
        award: "150+ Awards",
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
          "Live Performance",
          "Mohammed Rafi Style",
        ],
      },
      // WebSite schema for sitelinks search
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        inLanguage: "en-IN",
      },
      // BreadcrumbList for navigation
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Gallery",
            item: `${siteUrl}/gallery`,
          },
        ],
      },
      // ProfilePage schema
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        mainEntity: {
          "@id": `${siteUrl}/#person`,
        },
        dateCreated: "2024-01-01",
        dateModified: new Date().toISOString().split("T")[0],
      },
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L2EZG90GCS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L2EZG90GCS');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}

