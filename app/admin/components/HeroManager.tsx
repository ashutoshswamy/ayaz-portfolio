"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Upload, Loader2, User } from "lucide-react";
import Image from "next/image";

type HeroImage = {
  id: string;
  url: string;
  created_at: string;
};

export default function HeroManager() {
  const [heroImage, setHeroImage] = useState<HeroImage | null>(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHeroImage();
  }, []);

  const fetchHeroImage = async () => {
    try {
      const { data, error } = await supabase.from("hero").select("*").single();

      if (error && error.code !== "PGRST116") throw error;
      setHeroImage(data || null);
    } catch (error) {
      console.error("Error fetching hero image:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      const file = event.target.files?.[0];
      if (!file) return;

      // Security: Validate file type
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/gif",
      ];
      if (!allowedTypes.includes(file.type)) {
        alert(
          "Invalid file type. Please upload a JPEG, PNG, WebP, or GIF image.",
        );
        return;
      }

      // Security: Validate file size (max 10MB)
      const maxSize = 10 * 1024 * 1024;
      if (file.size > maxSize) {
        alert("File too large. Maximum size is 10MB.");
        return;
      }

      // Generate secure filename
      const fileExt = file.name.split(".").pop()?.toLowerCase();
      const allowedExtensions = ["jpg", "jpeg", "png", "webp", "gif"];
      if (!fileExt || !allowedExtensions.includes(fileExt)) {
        alert("Invalid file extension.");
        return;
      }

      const fileName = `hero-${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      // Delete old image from storage if exists
      if (heroImage) {
        const oldFilename = heroImage.url.split("/").pop();
        if (oldFilename) {
          await supabase.storage.from("hero").remove([oldFilename]);
        }
      }

      // 1. Upload to Storage
      const { error: uploadError } = await supabase.storage
        .from("hero")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // 2. Get Public URL
      const {
        data: { publicUrl },
      } = supabase.storage.from("hero").getPublicUrl(filePath);

      // 3. Upsert into Database (insert or update)
      if (heroImage) {
        // Update existing record
        const { error: dbError } = await supabase
          .from("hero")
          .update({ url: publicUrl })
          .eq("id", heroImage.id);

        if (dbError) throw dbError;
      } else {
        // Insert new record
        const { error: dbError } = await supabase
          .from("hero")
          .insert([{ url: publicUrl }]);

        if (dbError) throw dbError;
      }

      fetchHeroImage();
      // Reset input
      event.target.value = "";
    } catch (error) {
      console.error("Error uploading hero image:", error);
      alert("Error uploading hero image");
    } finally {
      setUploading(false);
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
          Hero Profile Image
        </h3>
        <div className="relative">
          <input
            type="file"
            accept="image/*"
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
            {heroImage ? "Change Image" : "Upload Image"}
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        {heroImage ? (
          <div className="relative h-80 w-80">
            <Image
              src={heroImage.url}
              alt="Hero Profile"
              fill
              className="object-contain"
            />
          </div>
        ) : (
          <div className="text-center py-12">
            <User className="mx-auto h-24 w-24 text-[var(--text-muted)]" />
            <h3 className="mt-2 text-sm font-semibold text-[var(--text-light)]">
              No hero image
            </h3>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              Upload an image to display in the hero section.
            </p>
          </div>
        )}
      </div>

      <p className="text-sm text-[var(--text-muted)] text-center">
        This image will be displayed in the hero section of the website.
      </p>
    </div>
  );
}
