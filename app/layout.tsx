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
const siteName =
  "Mohammad Ayaz - Indian Playback Singer, Composer & Lyricist | Official Website";
const siteDescription =
  "Mohammad Ayaz is a renowned Indian Playback Singer, Composer, Lyricist, and the living voice of legendary Mohammed Rafi. With 5000+ live shows across 50+ countries, 150+ prestigious awards including Goa Ratna Puraskar, and collaborations with Usha Mangeshkar, Anuradha Paudwal & more. Book Mohammad Ayaz for live performances, Bollywood music events, and cultural shows.";
const siteImage = `${siteUrl}/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | Mohammad Ayaz - Playback Singer",
  },
  description: siteDescription,
  keywords: [
    // Primary keywords (exact match targets)
    "Mohammad Ayaz",
    "Mohammad Ayaz singer",
    "Mohammad Ayaz playback singer",
    "Mohammad Ayaz composer",
    "Mohammad Ayaz music director",
    "Mohammad Ayaz lyricist",
    "Mohammad Ayaz official website",
    "Mohammad Ayaz live show",
    "Mohammad Ayaz booking",
    // Name variations (common search patterns)
    "Mohd Ayaz",
    "Mohd Ayaz singer",
    "Mohammed Ayaz",
    "Mohammed Ayaz singer",
    "Mohammad Ayaz Shaikh",
    "Mohmmad Ayaz",
    "Mohmmad Ayaz Shaikh",
    "Mohammad Ayaz Shaikh singer",
    // Music-related keywords
    "Playback Singer India",
    "Music Director India",
    "Bollywood singer",
    "Indian playback singer",
    "Mohammad Ayaz songs",
    "Mohammad Ayaz albums",
    "Mohammad Ayaz discography",
    "Mohammad Ayaz live performance",
    "Mohammad Ayaz concert",
    // Long-tail keywords
    "best Indian playback singer",
    "voice of Mohammed Rafi",
    "Mohammed Rafi tribute singer",
    "book playback singer for event",
    "Indian singer for corporate event",
    "Bollywood singer for wedding",
    "playback singer Maharashtra",
    "Solapur singer",
    "Mumbai playback singer",
    // Descriptive keywords
    "music composer India",
    "film music director",
    "live Bollywood performances",
    "Bollywood music director",
    "Indian music industry",
    "playback recording artist",
    "music production India",
    "Mohammed Rafi tribute",
    "Ghazal singer India",
    "Indian vocalist Mumbai",
    "Goa Ratna Puraskar winner",
    "Voice of Maharashtra winner",
    // Event-related keywords
    "hire Indian singer",
    "book singer for cultural event",
    "playback singer for hire",
    "Indian music event performer",
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
    title: "Mohammad Ayaz - Renowned Playback Singer, Composer & Lyricist",
    description: siteDescription,
    images: [
      {
        url: siteImage,
        width: 1200,
        height: 630,
        alt: "Mohammad Ayaz - Playback Singer, Composer & Lyricist",
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
    title: "Mohammad Ayaz - Playback Singer, Composer & Lyricist",
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
        alternateName: [
          "Mohd Ayaz",
          "Mohammed Ayaz",
          "Mohammad Ayaz Shaikh",
          "Mohmmad Ayaz",
          "Mohmmad Ayaz Shaikh",
        ],
        url: siteUrl,
        image: {
          "@type": "ImageObject",
          url: siteImage,
          width: 1200,
          height: 630,
          caption: "Mohammad Ayaz - Indian Playback Singer, Composer & Lyricist",
        },
        description: siteDescription,
        jobTitle: ["Playback Singer", "Composer", "Lyricist"],
        nationality: {
          "@type": "Country",
          name: "India",
        },
        homeLocation: {
          "@type": "Place",
          name: "Mumbai, Maharashtra, India",
        },
        genre: [
          "Playback Singing",
          "Bollywood Music",
          "Ghazal",
          "Film Music",
          "Indian Classical",
        ],
        award: [
          "Goa Ratna Puraskar",
          "Voice of Maharashtra (Mi Marathi)",
          "Roxna Saam Gurukul Winner (Saam Marathi)",
          "Pride of Sri Lanka Award",
          "Voice of Rafi Award (Delhi Doordarshan)",
          "Rashtriya Ekatmata Puraskar",
          "Solapur Bhushan Puraskar",
        ],
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
          "Ghazal",
        ],
        hasOccupation: [
          {
            "@type": "Occupation",
            name: "Playback Singer",
            occupationLocation: {
              "@type": "Country",
              name: "India",
            },
          },
          {
            "@type": "Occupation",
            name: "Composer",
            occupationLocation: {
              "@type": "Country",
              name: "India",
            },
          },
          {
            "@type": "Occupation",
            name: "Lyricist",
            occupationLocation: {
              "@type": "Country",
              name: "India",
            },
          },
        ],
        performerIn: {
          "@type": "EventSeries",
          name: "Mohammad Ayaz Live Shows",
          description: "Over 5000 live performances across 50+ countries",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-95959-91786",
          email: "md.ayaz7862@gmail.com",
          contactType: "booking",
          areaServed: "Worldwide",
          availableLanguage: ["Hindi", "English", "Marathi", "Urdu"],
        },
      },
      // WebSite schema with SearchAction for sitelinks search
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Mohammad Ayaz - Official Website",
        alternateName: "Mohammad Ayaz Portfolio",
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
        dateModified: new Date().toISOString().split("T")[0],
        inLanguage: "en-IN",
      },
      // FAQPage schema for rich results
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Who is Mohammad Ayaz?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Mohammad Ayaz is a renowned Indian Playback Singer, Composer and Lyricist, widely known as the living voice of legendary singer Mohammed Rafi. With over 25 years in the music industry, he has performed 5000+ live shows across 50+ countries and received 150+ prestigious awards including Goa Ratna Puraskar and Voice of Maharashtra.",
            },
          },
          {
            "@type": "Question",
            name: "How can I book Mohammad Ayaz for a live performance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can book Mohammad Ayaz for live performances, corporate events, weddings, and cultural shows by contacting him at +91 95959 91786 or emailing md.ayaz7862@gmail.com. He is available for events worldwide.",
            },
          },
          {
            "@type": "Question",
            name: "What awards has Mohammad Ayaz won?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Mohammad Ayaz has won over 150 awards including Goa Ratna Puraskar by the Chief Minister of Goa, Voice of Maharashtra (Mi Marathi), Roxna Saam Gurukul (Saam Marathi), Pride of Sri Lanka Award, Voice of Rafi Award by Delhi Doordarshan, Rashtriya Ekatmata Puraskar, and Solapur Bhushan Puraskar by Gulzar Sahab.",
            },
          },
          {
            "@type": "Question",
            name: "Which celebrities has Mohammad Ayaz collaborated with?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Mohammad Ayaz has collaborated with legendary artists including Usha Mangeshkar, Anuradha Paudwal, Suresh Wadekar, Sadhana Sargam, Raveena Tandon, Johnny Lever, and many more distinguished personalities from the Indian entertainment industry.",
            },
          },
          {
            "@type": "Question",
            name: "Where is Mohammad Ayaz from?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Mohammad Ayaz is from Solapur, Maharashtra, India, and is currently based in Mumbai. He performs internationally across 50+ countries including South Africa, Dubai, Singapore, Malaysia, Bahrain, and many more.",
            },
          },
        ],
      },
      // CollectionPage for gallery reference
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}/gallery`,
        url: `${siteUrl}/gallery`,
        name: "Mohammad Ayaz Photo Gallery - Live Performances & Events",
        description:
          "Explore stunning photographs from Mohammad Ayaz's live performances, celebrity collaborations, and musical events across the world.",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
      },
    ],
  };

  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <head>
        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link
          rel="preconnect"
          href="https://wiepghsujazujpqaaduq.supabase.co"
        />
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Favicons & PWA */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Geo targeting for India */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai, Maharashtra" />
        <meta name="geo.position" content="19.076;72.8777" />
        <meta name="ICBM" content="19.076, 72.8777" />

        {/* Additional SEO meta */}
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="language" content="English" />
        <meta
          name="subject"
          content="Mohammad Ayaz - Indian Playback Singer, Composer & Lyricist"
        />
        <meta name="classification" content="Music, Entertainment, Arts" />
        <meta name="copyright" content="Mohammad Ayaz" />

        {/* Structured data */}
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
