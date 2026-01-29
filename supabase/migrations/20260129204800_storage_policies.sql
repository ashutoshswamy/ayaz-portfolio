-- Create the 'gallery' bucket if it doesn't exist
insert into storage.buckets (id, name, public)
values ('gallery', 'gallery', true)
on conflict (id) do nothing;

-- Allow public read access to the 'gallery' bucket
create policy "Public Access"
on storage.objects
for select
to public
using ( bucket_id = 'gallery' );

-- Allow authenticated users (admin) to upload to the 'gallery' bucket
create policy "Admin Upload"
on storage.objects
for insert
to authenticated
with check ( bucket_id = 'gallery' );

-- Allow authenticated users (admin) to delete from the 'gallery' bucket
create policy "Admin Delete"
on storage.objects
for delete
to authenticated
using ( bucket_id = 'gallery' );
