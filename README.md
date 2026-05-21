# Mohammad Ayaz Shaikh — Portfolio

Personal portfolio website for Mohammad Ayaz Shaikh, a lyricist, performer, and music artist.

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4
- **Animations** — Framer Motion
- **Backend** — Supabase (data & gallery)
- **Icons** — Lucide React

## Features

- Hero, About, Achievements, Awards sections
- Discography & Performances showcase
- Collaborations listing
- Photo Gallery with lightbox
- Contact section
- Admin panel (`/admin`)
- Auto-generated sitemap

## Project Structure

```
app/
  components/     # Page sections (Hero, About, Discography, etc.)
  admin/          # Admin dashboard
  gallery/        # Gallery page
  layout.tsx      # Root layout + metadata
  page.tsx        # Home page
  sitemap.ts      # Dynamic sitemap
lib/
  supabase.ts     # Supabase client
scripts/          # Utility scripts
supabase/         # DB migrations / config
```
