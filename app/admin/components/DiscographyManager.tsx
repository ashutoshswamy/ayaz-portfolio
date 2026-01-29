'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Trash2, Plus, Loader2, Disc, PlayCircle } from 'lucide-react';

type Work = {
  id: string;
  title: string;
  artists: string;
  label: string;
  video_url: string;
  created_at: string;
};

export default function DiscographyManager() {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  
  // Form State
  const [title, setTitle] = useState('');
  const [artists, setArtists] = useState('');
  const [label, setLabel] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchWorks();
  }, []);

  const fetchWorks = async () => {
    try {
      const { data, error } = await supabase
        .from('discography')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setWorks(data || []);
    } catch (error) {
      console.error('Error fetching works:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
        const { error } = await supabase
            .from('discography')
            .insert([{ title, artists, label, video_url: videoUrl }]);
            
        if (error) throw error;
        
        // Reset form
        setTitle('');
        setArtists('');
        setLabel('');
        setVideoUrl('');
        setIsAdding(false);
        fetchWorks();
    } catch (error) {
        console.error('Error adding work:', error);
        alert('Error adding work');
    } finally {
        setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this work?')) return;

    try {
      const { error } = await supabase
        .from('discography')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setWorks(works.filter((work) => work.id !== id));
    } catch (error) {
      console.error('Error deleting work:', error);
      alert('Error deleting work');
    }
  };

  if (loading) {
    return (
        <div className="flex justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin text-[var(--color-emerald)]" />
        </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Discography</h3>
        <button
            onClick={() => setIsAdding(!isAdding)}
            type="button"
            className="inline-flex items-center gap-x-2 rounded-md bg-[var(--color-emerald)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--color-emerald)]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-emerald)]"
        >
            <Plus className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            {isAdding ? 'Cancel' : 'Add Work'}
        </button>
      </div>

      {isAdding && (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                      <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                      <input
                        type="text"
                        id="title"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--color-emerald)] sm:text-sm sm:leading-6 pl-3"
                      />
                  </div>
                  <div>
                      <label htmlFor="artists" className="block text-sm font-medium leading-6 text-gray-900">Artists</label>
                      <input
                        type="text"
                        id="artists"
                        value={artists}
                        onChange={(e) => setArtists(e.target.value)}
                        className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--color-emerald)] sm:text-sm sm:leading-6 pl-3"
                      />
                  </div>
                  <div>
                      <label htmlFor="label" className="block text-sm font-medium leading-6 text-gray-900">Label</label>
                      <input
                        type="text"
                        id="label"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--color-emerald)] sm:text-sm sm:leading-6 pl-3"
                      />
                  </div>
                  <div>
                      <label htmlFor="videoUrl" className="block text-sm font-medium leading-6 text-gray-900">Video URL (YouTube)</label>
                      <input
                        type="url"
                        id="videoUrl"
                        value={videoUrl}
                        onChange={(e) => setVideoUrl(e.target.value)}
                        className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--color-emerald)] sm:text-sm sm:leading-6 pl-3"
                      />
                  </div>
              </div>
              <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-x-2 rounded-md bg-[var(--color-emerald)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--color-emerald)]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-emerald)] disabled:opacity-70"
                  >
                      {submitting ? 'Saving...' : 'Save Work'}
                  </button>
              </div>
          </form>
      )}

      <div className="overflow-hidden bg-white shadow sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {works.map((work) => (
            <li key={work.id}>
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <div className="flex text-sm font-medium text-[var(--color-emerald)] truncate">
                      <Disc className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      {work.title}
                    </div>
                    <div className="mt-2 flex">
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="truncate">{work.artists}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex-shrink-0 sm:ml-5 sm:mt-0">
                    <div className="flex space-x-4 items-center">
                        <div className="flex flex-col items-end text-sm text-gray-500">
                            <span>{work.label}</span>
                            {work.video_url && (
                                <a href={work.video_url} target="_blank" rel="noopener noreferrer" className="text-[var(--color-emerald)] hover:underline flex items-center mt-1">
                                    <PlayCircle className="h-4 w-4 mr-1" /> Watch
                                </a>
                            )}
                        </div>
                        <button
                            onClick={() => handleDelete(work.id)}
                            type="button"
                            className="rounded-full p-1 text-red-600 hover:bg-red-50"
                        >
                            <Trash2 className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {works.length === 0 && (
             <div className="text-center py-12">
                <Disc className="mx-auto h-12 w-12 text-gray-300" />
                <h3 className="mt-2 text-sm font-semibold text-gray-900">No works found</h3>
                <p className="mt-1 text-sm text-gray-500">Get started by adding a new discography entry.</p>
            </div>
        )}
      </div>
    </div>
  );
}
