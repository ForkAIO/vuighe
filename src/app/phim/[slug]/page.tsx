import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import AnimeSection from '@/components/anime/anime-section';
import { Button } from '@/components/ui/button';

// Dummy related anime
const relatedAnime = [
  {
    id: '10',
    title: 'Lạc Vào Thế Giới Game',
    thumbnail: 'https://ext.same-assets.com/4217531005/1769728475.jpeg',
    altTitles: 'Overlord',
    url: '/phim/lac-vao-the-gioi-game',
  },
  {
    id: '11',
    title: 'Blue Lock: Episode Nagi',
    thumbnail: 'https://ext.same-assets.com/2555409205/208934996.jpeg',
    altTitles: '-EPISODE -',
    url: '/phim/blue-lock-episode-nagi',
  },
  {
    id: '12',
    title: 'Haikyuu!! Movie 4: Concept no Tatakai',
    thumbnail: 'https://animehay.de/upload/poster/4207.jpg',
    altTitles: 'Haikyu!! The Movie: Battle of Concepts, High Kyuu!! Movie 4',
    url: '/phim/haikyuu-movie-4-concept-no-tatakai',
  },
];

// Add generateStaticParams function
export async function generateStaticParams() {
  // This is example data - replace with your actual anime data
  const animeList = [
    {
      slug: 'one-piece',
      title: 'One Piece',
      // Add other anime here as needed
    }
  ];

  return animeList.map((anime) => ({
    slug: anime.slug,
  }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default function AnimeInfo({ params }: PageProps) {
  // This would normally be fetched from an API based on the slug
  // Using One Piece as an example
  const anime = {
    id: 'one-piece',
    title: 'One Piece',
    poster: 'https://ext.same-assets.com/3621000462/2099959873.jpeg',
    description: 'Gol D. Roger được biết đến với biệt danh "Vua hải tặc", người mạnh nhất và khét tiếng nhất đã đi thuyền trên Grand Line. Việc Chính phủ Thế giới bắt giữ và hành quyết ông ta đã khiến thay đổi cả thế giới. Lời cuối cùng ông nói trước khi chết về kho báu vĩ đại One Piece đã thúc đẩy nhiều người đi đến Grand Line để tìm nó. Đây đã mở ra kỷ nguyên Đại Hải Tặc, đưa những cướp biển đến từng ngóc ngách của thế giới.',
    year: '1999',
    genres: ['Hoạt Hình', 'Phiêu Lưu', 'Hài Hước'],
    country: 'Nhật Bản',
    status: 'Đang phát: SP 1/??',
    rating: 7.9,
    duration: '24 phút/tập',
    altTitles: 'Đảo Hải Tặc, Vua Hải Tặc, OP',
    episodes: [
      { number: 'Special', url: '/phim/one-piece/tap-Special' },
      { number: 'SP 1', url: '/phim/one-piece/tap-SP-1' },
      { number: '1122', url: '/phim/one-piece/tap-1122' },
      { number: '1121', url: '/phim/one-piece/tap-1121' },
      { number: '1120.5', url: '/phim/one-piece/tap-1120.5' },
      { number: '1120', url: '/phim/one-piece/tap-1120' },
      { number: '1119', url: '/phim/one-piece/tap-1119' },
      { number: '1118', url: '/phim/one-piece/tap-1118' },
      { number: '1117', url: '/phim/one-piece/tap-1117' },
      { number: '1116.5', url: '/phim/one-piece/tap-1116.5' },
      { number: '1116', url: '/phim/one-piece/tap-1116' },
      { number: '1115', url: '/phim/one-piece/tap-1115' },
      { number: '1114', url: '/phim/one-piece/tap-1114' },
      { number: '1113', url: '/phim/one-piece/tap-1113' },
      { number: '1112', url: '/phim/one-piece/tap-1112' },
    ],
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="bg-vuighe-navigationBg p-4 rounded-md mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Poster */}
            <div className="w-full md:w-1/4 flex-shrink-0">
              <div className="relative pb-[140%] rounded-md overflow-hidden">
                <Image
                  src={anime.poster}
                  alt={anime.title}
                  fill
                  className="object-cover"
                  priority
                  crossOrigin="anonymous"
                />
              </div>

              <div className="mt-4">
                <Button className="w-full bg-vuighe-pink hover:bg-pink-700">
                  Xem phim
                </Button>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-white mb-2">{anime.title}</h1>
              <p className="text-gray-400 text-sm mb-4">{anime.altTitles}</p>

              <div className="mb-5">
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <span
                      key={num}
                      className={`w-4 h-4 text-xs flex items-center justify-center rounded ${num <= Math.round(anime.rating) ? 'bg-yellow-500' : 'bg-gray-700'}`}
                    >
                      {num}
                    </span>
                  ))}
                  <span className="text-white text-sm ml-2">{anime.rating}/10</span>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-300">
                <p><span className="text-gray-500">Quốc gia:</span> {anime.country}</p>
                <p><span className="text-gray-500">Thể loại:</span> {anime.genres.join(', ')}</p>
                <p><span className="text-gray-500">Năm:</span> {anime.year}</p>
                <p><span className="text-gray-500">Thời lượng:</span> {anime.duration}</p>
                <p><span className="text-gray-500">Trạng thái:</span> {anime.status}</p>
              </div>

              <div className="mt-6">
                <h3 className="text-white font-semibold mb-2">Nội dung phim</h3>
                <p className="text-gray-400 text-sm">{anime.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Episodes */}
        <div className="mb-10">
          <h2 className="text-lg font-bold uppercase text-white mb-4">
            Danh sách tập
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-12 gap-2">
            {anime.episodes.map((episode) => (
              <Link
                key={episode.number}
                href={episode.url}
                className="bg-vuighe-navigationBg hover:bg-gray-700 text-center py-2 rounded text-sm text-white"
              >
                {episode.number}
              </Link>
            ))}
          </div>
        </div>

        {/* Related anime */}
        <AnimeSection
          title="PHIM LẺ VUIGHE"
          animes={relatedAnime}
          viewAllLink="/danh-sach/phim-le"
        />
      </div>
    </MainLayout>
  );
}
