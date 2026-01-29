
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import * as dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

// Load environment variables from process.env
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// We prefer service role key for seeding to bypass RLS.
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables.');
  console.log('Please ensure you have .env.local with NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (or use anon key if allowed).');
  console.log('Or run with: NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... npx tsx scripts/seed.ts');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const works = [
  {
    title: "Mahima Swami Samarth Ki",
    artists: "Usha Mangeshkar, Mohammad Ayaz",
    label: "Venus Music",
    video_url: "https://www.youtube.com/watch?v=5-jMq60QQyM",
  },
  {
    title: "Jai Guru Jai Guru",
    artists: "Anuradha Paudwal, Mohammad Ayaz",
    label: "T-Series",
    video_url: "https://www.youtube.com/watch?v=dOj5CFDwLRM",
  },
  {
    title: "Vandhan Majhe Ghyave",
    artists: "Usha Mangeshkar, Mohammad Ayaz",
    label: "Zee Music",
    video_url: "https://www.youtube.com/watch?v=spaXBEEl_P0",
  },
  {
    title: "Siddharam Gajto",
    artists: "Anuradha Paudwal, Mohammad Ayaz",
    label: "Zee Music",
    video_url: "https://www.youtube.com/watch?v=dOj5CFDwLRM",
  },
  {
    title: "Namo Namo Deva",
    artists: "Ram Shankar, Mohammad Ayaz",
    label: "Zee Music",
    video_url: "https://www.youtube.com/watch?v=sV4QukqJN9U",
  },
  {
    title: "Deva Majhe Siddheshwara",
    artists: "Varsha Usgaonkar, Mohammad Ayaz",
    label: "T-Series",
    video_url: "https://www.youtube.com/watch?v=gI0MyWCA5Kg",
  },
  {
    title: "Darshan Dya Ishwara",
    artists: "Anup Jalota, Mohammad Ayaz",
    label: "Zee Music",
    video_url: "https://www.youtube.com/watch?v=dhixnhP2vCE",
  },
  {
    title: "Raytechya Rakshanala Hote Shivaji Raja",
    artists: "—",
    label: "T-Series",
    video_url: "",
  },
  {
    title: "Udo Udo Ga Amba Bai",
    artists: "—",
    label: "T-Series",
    video_url: "",
  },
  {
    title: "Bhimraya Kuni Shodhun Dakhwal Ka",
    artists: "—",
    label: "T-Series",
    video_url: "",
  },
  {
    title: "Shirdi Ke Sai Baba",
    artists: "Bhagayshree Chavan, Mohammad Ayaz",
    label: "T-Series",
    video_url: "https://www.youtube.com/watch?v=_GmOp0f0YMQ",
  },
  {
    title: "Utha Siddha Rameshwara",
    artists: "Suresh Wadekar, Mohammad Ayaz",
    label: "Zee Music",
    video_url: "https://www.youtube.com/watch?v=a7WkZ0bjD54",
  },
  {
    title: "Bhakti Shivachi Karto",
    artists: "Sadhana Sargam, Mohammad Ayaz",
    label: "Zee Music",
    video_url: "https://www.youtube.com/watch?v=u0hAtfwLPLQ&list=RDu0hAtfwLPLQ&start_radio=1",
  },
];

async function seed() {
  console.log('Starting seed process...');

  // 1. Seed Discography
  console.log('Seeding Discography...');
  const { error: discError } = await supabase.from('discography').insert(works);
  if (discError) {
    console.error('Error inserting discography:', discError);
  } else {
    console.log(`Successfully inserted ${works.length} discography items.`);
  }

  // 2. Seed Gallery
  console.log('Seeding Gallery...');
  const galleryDir = path.join(process.cwd(), 'public', 'gallery');
  
  if (!fs.existsSync(galleryDir)) {
      console.error('Gallery directory not found:', galleryDir);
      return;
  }

  const files = fs.readdirSync(galleryDir).filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
  });

  console.log(`Found ${files.length} images.`);

  for (const file of files) {
      if (file.startsWith('.')) continue; // Skip hidden files like .DS_Store

      const filePath = path.join(galleryDir, file);
      const fileBuffer = fs.readFileSync(filePath);
      
      // Sanitize filename to avoid issues with special method characters if any, ensuring uniqueness isn't strict requirement for seed but good practice
      const storagePath = file; 

      console.log(`Uploading ${file}...`);

      // Upload to Storage
      const { error: uploadError } = await supabase.storage
          .from('gallery')
          .upload(storagePath, fileBuffer, {
              contentType: 'image/jpeg', // Simplification, could detect mime type
              upsert: true
          });

      if (uploadError) {
          console.error(`Failed to upload ${file}:`, uploadError.message);
          continue;
      }

      // Get Public URL
      const { data: { publicUrl } } = supabase.storage
          .from('gallery')
          .getPublicUrl(storagePath);

      // Insert into DB
      const { error: dbError } = await supabase
          .from('gallery')
          .insert([{ url: publicUrl }]);

      if (dbError) {
          console.error(`Failed to insert DB record for ${file}:`, dbError.message);
      } else {
          // console.log(`Processed ${file}`);
      }
  }

  console.log('Seed process completed.');
}

seed().catch(console.error);
