-- Create Gallery Table
create table public.gallery (
  id uuid default gen_random_uuid() primary key,
  url text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create Discography Table
create table public.discography (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  artists text,
  label text,
  video_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS) and Policies

-- Gallery Table Policies
alter table public.gallery enable row level security;

-- Allow public read access
create policy "Public Gallery Read"
on public.gallery for select
to public
using (true);

-- Allow authenticated users (admin) to insert/delete
create policy "Admin Gallery Insert"
on public.gallery for insert
to authenticated
with check (true);

create policy "Admin Gallery Delete"
on public.gallery for delete
to authenticated
using (true);


-- Discography Table Policies
alter table public.discography enable row level security;

-- Allow public read access
create policy "Public Discography Read"
on public.discography for select
to public
using (true);

-- Allow authenticated users (admin) to insert/delete
create policy "Admin Discography Insert"
on public.discography for insert
to authenticated
with check (true);

create policy "Admin Discography Delete"
on public.discography for delete
to authenticated
using (true);

-- Storage bucket creation and policies are usually handled outside of migrations or via specific storage migrations.
-- However, for reference or if using a tool that supports it:
-- insert into storage.buckets (id, name, public) values ('gallery', 'gallery', true);

-- Storage Policies
-- create policy "Public Access" on storage.objects for select to public using ( bucket_id = 'gallery' );
-- create policy "Admin Upload" on storage.objects for insert to authenticated with check ( bucket_id = 'gallery' );
-- create policy "Admin Delete" on storage.objects for delete to authenticated using ( bucket_id = 'gallery' );
