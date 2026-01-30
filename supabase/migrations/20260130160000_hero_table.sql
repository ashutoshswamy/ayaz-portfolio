-- Create Hero Table
create table public.hero (
  id uuid default gen_random_uuid() primary key,
  url text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS) and Policies
alter table public.hero enable row level security;

-- Allow public read access
create policy "Public Hero Read"
on public.hero for select
to public
using (true);

-- Allow authenticated users (admin) to insert
create policy "Admin Hero Insert"
on public.hero for insert
to authenticated
with check (true);

-- Allow authenticated users (admin) to update
create policy "Admin Hero Update"
on public.hero for update
to authenticated
using (true);

-- Allow authenticated users (admin) to delete
create policy "Admin Hero Delete"
on public.hero for delete
to authenticated
using (true);

-- Create the 'hero' storage bucket
insert into storage.buckets (id, name, public)
values ('hero', 'hero', true)
on conflict (id) do nothing;

-- Storage Policies for 'hero' bucket
-- Allow public read access
create policy "Public Hero Access"
on storage.objects
for select
to public
using ( bucket_id = 'hero' );

-- Allow authenticated users (admin) to upload
create policy "Admin Hero Upload"
on storage.objects
for insert
to authenticated
with check ( bucket_id = 'hero' );

-- Allow authenticated users (admin) to update
create policy "Admin Hero Storage Update"
on storage.objects
for update
to authenticated
using ( bucket_id = 'hero' );

-- Allow authenticated users (admin) to delete
create policy "Admin Hero Delete"
on storage.objects
for delete
to authenticated
using ( bucket_id = 'hero' );
