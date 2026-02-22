"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Trash2, Upload, Loader2, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

type GalleryImage = {
  id: string;
  url: string;
  created_at: string;
};

export default function GalleryManager() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const { data, error } = await supabase
        .from("gallery")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setImages(data || []);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      const files = Array.from(event.target.files || []);
      if (files.length === 0) return;

      const uploadPromises = files.map(async (file) => {
        // Security: Validate file type
        const allowedTypes = [
          "image/jpeg",
          "image/png",
          "image/webp",
          "image/gif",
        ];
        if (!allowedTypes.includes(file.type)) {
          throw new Error(
            `Invalid file type for ${file.name}. Please upload a JPEG, PNG, WebP, or GIF image.`,
          );
        }

        // Security: Validate file size (max 10MB)
        const maxSize = 10 * 1024 * 1024;
        if (file.size > maxSize) {
          throw new Error(
            `File ${file.name} is too large. Maximum size is 10MB.`,
          );
        }

        // Generate secure random filename
        const fileExt = file.name.split(".").pop()?.toLowerCase();
        const allowedExtensions = ["jpg", "jpeg", "png", "webp", "gif"];
        if (!fileExt || !allowedExtensions.includes(fileExt)) {
          throw new Error(`Invalid file extension for ${file.name}.`);
        }

        const fileName = `${crypto.randomUUID()}.${fileExt}`;
        const filePath = `${fileName}`;

        // 1. Upload to Storage
        const { error: uploadError } = await supabase.storage
          .from("gallery")
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        // 2. Get Public URL
        const {
          data: { publicUrl },
        } = supabase.storage.from("gallery").getPublicUrl(filePath);

        // 3. Insert into Database
        const { error: dbError } = await supabase
          .from("gallery")
          .insert([{ url: publicUrl }]);

        if (dbError) throw dbError;
      });

      const results = await Promise.allSettled(uploadPromises);

      const failedUploads = results.filter(
        (result) => result.status === "rejected",
      );

      if (failedUploads.length > 0) {
        const errorMessages = failedUploads
          .map(
            (result) =>
              (result as PromiseRejectedResult).reason?.message ||
              "Unknown error",
          )
          .join("\n");
        alert(`Some files failed to upload:\n${errorMessages}`);
      }

      fetchImages();
      // Reset input
      event.target.value = "";
    } catch (error) {
      console.error("Error processing uploads:", error);
      alert("An error occurred during upload processing");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string, url: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    try {
      // Extract filename from URL for storage deletion
      const filename = url.split("/").pop();

      if (filename) {
        // 1. Delete from Storage
        const { error: storageError } = await supabase.storage
          .from("gallery")
          .remove([filename]);

        if (storageError)
          console.error("Error deleting from storage:", storageError);
      }

      // 2. Delete from Database
      const { error: dbError } = await supabase
        .from("gallery")
        .delete()
        .eq("id", id);

      if (dbError) throw dbError;

      setImages(images.filter((img) => img.id !== id));
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("Error deleting image");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-[var(--color-gold)]" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium leading-6 text-[var(--text-light)]">
          Gallery Images
        </h3>
        <div className="relative">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleUpload}
            disabled={uploading}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          />
          <button
            type="button"
            disabled={uploading}
            className="inline-flex items-center gap-x-2 rounded-md bg-[var(--color-gold)] px-3.5 py-2.5 text-sm font-semibold text-[var(--color-primary)] shadow-sm hover:bg-[var(--color-gold-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)] disabled:opacity-70"
          >
            {uploading ? (
              <Loader2
                className="-ml-0.5 h-5 w-5 animate-spin"
                aria-hidden="true"
              />
            ) : (
              <Upload className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            )}
            {uploading ? "Uploading..." : "Upload Images"}
          </button>
        </div>
      </div>

      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {images.map((image) => (
          <li key={image.id} className="relative group">
            <div className="aspect-[10/7] group block w-full overflow-hidden rounded-lg bg-[var(--color-tertiary)] focus-within:ring-2 focus-within:ring-[var(--color-gold)] focus-within:ring-offset-2 focus-within:ring-offset-[var(--color-secondary)]">
              <Image
                src={image.url}
                alt=""
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="pointer-events-none object-contain group-hover:opacity-75"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for {image.id}</span>
              </button>
            </div>
            <button
              onClick={() => handleDelete(image.id, image.url)}
              type="button"
              className="absolute top-2 right-2 rounded-full bg-red-600 p-1.5 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Trash2 className="h-4 w-4" aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>

      {images.length === 0 && (
        <div className="text-center py-12">
          <ImageIcon className="mx-auto h-12 w-12 text-[var(--text-muted)]" />
          <h3 className="mt-2 text-sm font-semibold text-[var(--text-light)]">
            No images
          </h3>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            Get started by uploading a new image.
          </p>
        </div>
      )}
    </div>
  );
}
