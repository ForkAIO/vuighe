import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface AnimeCardProps {
  id: string;
  title: string;
  thumbnail: string;
  status?: string;
  quality?: string;
  altTitles?: string;
  episodeCount?: string;
  url: string;
  isNew?: boolean;
}

export default function AnimeCard({
  id,
  title,
  thumbnail,
  status,
  quality = 'HD',
  altTitles,
  episodeCount,
  url,
  isNew
}: AnimeCardProps) {
  return (
    <div className="anime-card group">
      <Link href={url} className="block relative pb-[140%] overflow-hidden rounded-md">
        {/* Image */}
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          crossOrigin="anonymous"
        />

        {/* Status tag */}
        {status && (
          <span className="absolute top-2 left-2 bg-vuighe-pink text-white text-xs px-2 py-0.5 rounded">
            {quality && <span className="mr-1">{quality}</span>}
            {status}
          </span>
        )}

        {/* New tag */}
        {isNew && (
          <span className="absolute top-2 right-2 bg-vuighe-blue text-white text-xs px-2 py-0.5 rounded">
            Mới
          </span>
        )}

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/90 to-transparent">
          <h3 className="text-white text-anime-title line-clamp-2 mb-0.5">{title}</h3>
          {altTitles && (
            <p className="text-anime-subtitle line-clamp-1">{altTitles}</p>
          )}
          {episodeCount && (
            <p className="text-gray-400 text-xs mt-1">
              {episodeCount}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
}
