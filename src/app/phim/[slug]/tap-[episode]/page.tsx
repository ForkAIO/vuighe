import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';

// Add generateStaticParams function
export async function generateStaticParams() {
  // This is example data - replace with your actual anime data
  const animeList = [
    {
      slug: 'one-piece',
      episodes: ['Special', 'SP 1', '1122', '1121', '1120.5', '1120', '1119', '1118', '1117', '1116.5', '1116', '1115', '1114', '1113', '1112']
    }
    // Add more anime here as needed
  ];

  const params = [];
  for (const anime of animeList) {
    for (const episode of anime.episodes) {
      params.push({
        slug: anime.slug,
        episode: episode
      });
    }
  }

  return params;
}

interface PageProps {
  params: {
    slug: string;
    episode: string;
  };
}

export default function EpisodePage({ params }: PageProps) {
  // This would normally be fetched from an API based on the slug and episode
  // Using One Piece as an example
  const anime = {
    id: 'one-piece',
    title: 'One Piece',
    poster: 'https://ext.same-assets.com/3621000462/2099959873.jpeg',
    status: 'Đang phát: SP 1/??',
    currentEpisode: params.episode,
    animeUrl: `/phim/${params.slug}`,
    episodes: [
      { number: 'Special', url: `/phim/${params.slug}/tap-Special` },
      { number: 'SP 1', url: `/phim/${params.slug}/tap-SP-1` },
      { number: '1122', url: `/phim/${params.slug}/tap-1122` },
      { number: '1121', url: `/phim/${params.slug}/tap-1121` },
      { number: '1120.5', url: `/phim/${params.slug}/tap-1120.5` },
      { number: '1120', url: `/phim/${params.slug}/tap-1120` },
      { number: '1119', url: `/phim/${params.slug}/tap-1119` },
      { number: '1118', url: `/phim/${params.slug}/tap-1118` },
      { number: '1117', url: `/phim/${params.slug}/tap-1117` },
      { number: '1116.5', url: `/phim/${params.slug}/tap-1116.5` },
      { number: '1116', url: `/phim/${params.slug}/tap-1116` },
      { number: '1115', url: `/phim/${params.slug}/tap-1115` },
      { number: '1114', url: `/phim/${params.slug}/tap-1114` },
      { number: '1113', url: `/phim/${params.slug}/tap-1113` },
      { number: '1112', url: `/phim/${params.slug}/tap-1112` },
    ],
  };

  // Find current episode index
  const currentEpisodeIndex = anime.episodes.findIndex(
    (ep) => ep.number === anime.currentEpisode
  );

  // Determine previous and next episodes
  const prevEpisode = currentEpisodeIndex > 0
    ? anime.episodes[currentEpisodeIndex - 1]
    : null;

  const nextEpisode = currentEpisodeIndex < anime.episodes.length - 1
    ? anime.episodes[currentEpisodeIndex + 1]
    : null;

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-white">
            <Link href={anime.animeUrl} className="hover:text-vuighe-pink">
              {anime.title}
            </Link>
            <span className="text-gray-400 ml-2">Tập {anime.currentEpisode}</span>
          </h1>
        </div>

        {/* Video player */}
        <div className="mb-8">
          <div className="relative pb-[56.25%] bg-black">
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-vuighe-pink/80 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-10 h-10"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <p>Video Player Mock - Tập {anime.currentEpisode}</p>
                <p className="text-sm text-gray-400 mt-2">
                  (Đây là mô phỏng, người dùng sẽ thấy video thực tế ở đây)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between mb-8">
          {prevEpisode ? (
            <Link
              href={prevEpisode.url}
              className="px-4 py-2 bg-vuighe-navigationBg text-white rounded hover:bg-gray-700"
            >
              « Tập {prevEpisode.number}
            </Link>
          ) : (
            <div></div> // Empty div to maintain the flex layout
          )}

          <Link
            href={anime.animeUrl}
            className="px-4 py-2 bg-vuighe-pink text-white rounded hover:bg-pink-700"
          >
            Danh sách tập
          </Link>

          {nextEpisode ? (
            <Link
              href={nextEpisode.url}
              className="px-4 py-2 bg-vuighe-navigationBg text-white rounded hover:bg-gray-700"
            >
              Tập {nextEpisode.number} »
            </Link>
          ) : (
            <div></div> // Empty div to maintain the flex layout
          )}
        </div>

        {/* Episodes list */}
        <div className="mb-10">
          <h2 className="text-lg font-bold uppercase text-white mb-4">
            Tập khác
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-12 gap-2">
            {anime.episodes.map((episode) => (
              <Link
                key={episode.number}
                href={episode.url}
                className={`text-center py-2 rounded text-sm ${
                  episode.number === anime.currentEpisode
                    ? 'bg-vuighe-pink text-white'
                    : 'bg-vuighe-navigationBg text-white hover:bg-gray-700'
                }`}
              >
                {episode.number}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
