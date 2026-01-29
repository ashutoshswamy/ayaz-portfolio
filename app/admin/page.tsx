'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import GalleryManager from './components/GalleryManager';
import DiscographyManager from './components/DiscographyManager';
import { LogOut, LayoutDashboard, Image as ImageIcon, Disc } from 'lucide-react';

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'gallery' | 'discography'>('gallery');

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
        <div className="flex min-h-screen items-center justify-center bg-[var(--color-offwhite)]">
             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-emerald)]"></div>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-offwhite)]">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                 <LayoutDashboard className="h-8 w-8 text-[var(--color-emerald)]" />
                 <span className="ml-2 text-xl font-bold text-[var(--color-emerald)]">Admin Dashboard</span>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 ring-1 ring-inset ring-gray-300"
              >
                <LogOut className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                Sign out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
                {activeTab === 'gallery' ? 'Gallery Management' : 'Discography Management'}
            </h1>
          </div>
        </header>

        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
             {/* Tabs */}
             <div className="mt-8 border-b border-gray-200">
                 <nav className="-mb-px flex space-x-8 px-4 sm:px-0" aria-label="Tabs">
                     <button
                        onClick={() => setActiveTab('gallery')}
                        className={`
                            ${activeTab === 'gallery'
                                ? 'border-[var(--color-emerald)] text-[var(--color-emerald)]'
                                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}
                            whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium flex items-center
                        `}
                     >
                        <ImageIcon className="mr-2 h-5 w-5" />
                        Gallery
                     </button>
                     <button
                        onClick={() => setActiveTab('discography')}
                        className={`
                            ${activeTab === 'discography'
                                ? 'border-[var(--color-emerald)] text-[var(--color-emerald)]'
                                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}
                            whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium flex items-center
                        `}
                     >
                        <Disc className="mr-2 h-5 w-5" />
                        Discography
                     </button>
                 </nav>
             </div>

             {/* Content */}
             <div className="py-8">
                 {activeTab === 'gallery' ? <GalleryManager /> : <DiscographyManager />}
             </div>
          </div>
        </main>
      </div>
    </div>
  );
}
