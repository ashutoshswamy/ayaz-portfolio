'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import GalleryManager from './components/GalleryManager';
import DiscographyManager from './components/DiscographyManager';
import HeroManager from './components/HeroManager';
import { LogOut, LayoutDashboard, Image as ImageIcon, Disc, User } from 'lucide-react';

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'hero' | 'gallery' | 'discography'>('hero');

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/admin/login');
      } else {
        setLoading(false);
      }
    };
    checkSession();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  if (loading) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[var(--color-primary)]">
             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-gold)]"></div>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-primary)]">
      {/* Navigation */}
      <nav className="bg-[var(--color-secondary)] shadow-lg border-b border-[var(--color-gold)]/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 sm:h-16 justify-between items-center">
            <div className="flex items-center gap-2">
              <LayoutDashboard className="h-6 w-6 sm:h-8 sm:w-8 text-[var(--color-gold)]" />
              <span className="text-base sm:text-xl font-bold text-[var(--color-gold)]">Admin</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-x-1.5 rounded-md bg-[var(--color-tertiary)] px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-[var(--text-light)] hover:bg-[var(--color-tertiary)]/80 ring-1 ring-inset ring-[var(--color-gold)]/20"
              >
                <LogOut className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--text-muted)]" aria-hidden="true" />
                <span className="hidden sm:inline">Sign out</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-[var(--text-light)]">
                {activeTab === 'hero' ? 'Hero Image' : activeTab === 'gallery' ? 'Gallery Management' : 'Discography Management'}
            </h1>
          </div>
        </header>

        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
             {/* Tabs */}
             <div className="mt-6 sm:mt-8 border-b border-[var(--color-gold)]/20">
                 <nav className="-mb-px flex space-x-4 sm:space-x-8 px-4 sm:px-0 overflow-x-auto" aria-label="Tabs">
                     <button
                        onClick={() => setActiveTab('hero')}
                        className={`
                            ${activeTab === 'hero'
                                ? 'border-[var(--color-gold)] text-[var(--color-gold)]'
                                : 'border-transparent text-[var(--text-muted)] hover:border-[var(--color-gold)]/50 hover:text-[var(--text-light)]'}
                            whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium flex items-center gap-2
                        `}
                     >
                        <User className="h-4 w-4 sm:h-5 sm:w-5" />
                        Hero
                     </button>
                     <button
                        onClick={() => setActiveTab('gallery')}
                        className={`
                            ${activeTab === 'gallery'
                                ? 'border-[var(--color-gold)] text-[var(--color-gold)]'
                                : 'border-transparent text-[var(--text-muted)] hover:border-[var(--color-gold)]/50 hover:text-[var(--text-light)]'}
                            whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium flex items-center
                        `}
                     >
                        <ImageIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                        Gallery
                     </button>
                     <button
                        onClick={() => setActiveTab('discography')}
                        className={`
                            ${activeTab === 'discography'
                                ? 'border-[var(--color-gold)] text-[var(--color-gold)]'
                                : 'border-transparent text-[var(--text-muted)] hover:border-[var(--color-gold)]/50 hover:text-[var(--text-light)]'}
                            whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium flex items-center
                        `}
                     >
                        <Disc className="h-4 w-4 sm:h-5 sm:w-5" />
                        Discog
                     </button>
                 </nav>
             </div>

             {/* Content */}
             <div className="py-4 sm:py-8 px-4 sm:px-0">
                 {activeTab === 'hero' ? <HeroManager /> : activeTab === 'gallery' ? <GalleryManager /> : <DiscographyManager />}
             </div>
          </div>
        </main>
      </div>
    </div>
  );
}
