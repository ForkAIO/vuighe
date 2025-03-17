import React from 'react';
import Link from 'next/link';
import AnimeCard from './anime-card';

interface AnimeSectionProps {
  title: string;
  animes: {
    id: string;
    title: string;
    thumbnail: string;
    status?: string;
    quality?: string;
    altTitles?: string;
    episodeCount?: string;
    url: string;
    isNew?: boolean;
  }[];
  viewAllLink?: string;
}

export default function AnimeSection({ title, animes, viewAllLink }: AnimeSectionProps) {
  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold uppercase text-white">
          {title}
        </h2>

        {viewAllLink && (
          <Link href={viewAllLink} className="text-sm text-gray-400 hover:text-white">
            Xem tất cả
          </Link>
        )}
      </div>

      <div className="anime-grid">
        {animes.map((anime) => (
          <AnimeCard
            key={anime.id}
            id={anime.id}
            title={anime.title}
            thumbnail={anime.thumbnail}
            status={anime.status}
            quality={anime.quality}
            altTitles={anime.altTitles}
            episodeCount={anime.episodeCount}
            url={anime.url}
            isNew={anime.isNew}
          />
        ))}
      </div>
    </div>
  );
}
