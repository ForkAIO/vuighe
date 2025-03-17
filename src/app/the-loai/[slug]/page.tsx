import React from 'react';
import MainLayout from '@/components/layout/main-layout';
import AnimeCard from '@/components/anime/anime-card';
import { Button } from '@/components/ui/button';

interface GenrePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  // This should match your genreMap keys
  const genres = ['hanh-dong', 'tinh-cam', 'hai-huoc', 'phieu-luu', 'the-thao', 'hoc-duong', 'hinh-su', 'tam-ly', 'khoa-hoc', 'am-nhac', 'the-gioi', 'gia-dinh', 'lich-su', 'chinh-tri', 'tai-lieu', 'tinh-yeu', 'tam-ly', 'hinh-su', 'hoc-duong', 'gia-dinh', 'lich-su', 'chinh-tri', 'tai-lieu'];
  
  return genres.map((slug) => ({
    slug,
  }));
}

export default function GenrePage({ params }: GenrePageProps) {
  // Map slug to genre name
  const genreMap: Record<string, string> = {
    'hanh-dong': 'Hành Động',
    'vo-thuat': 'Võ Thuật',
    'vien-tuong': 'Viễn Tưởng',
    'hoat-hinh': 'Hoạt Hình',
    'co-trang': 'Cổ Trang',
    'phieu-luu': 'Phiêu Lưu',
    'hinh-su': 'Hình Sự',
    'khoa-hoc': 'Khoa Học',
    'hai-huoc': 'Hài Hước',
    'chinh-kich': 'Chính Kịch',
    'gia-tuong': 'Giả Tưởng',
    'anime': 'Anime',
  };

  const genreName = genreMap[params.slug] || params.slug;

  // Dummy anime data for the selected genre
  // In a real app, this would be fetched from an API
  const animeList = [
    {
      id: '1',
      title: 'Võ Thượng Thần Đế',
      thumbnail: 'https://ext.same-assets.com/925568114/3195457214.jpeg',
      status: '432/464',
      quality: 'Vietsub - HD',
      altTitles: 'Wu Shang Shen Di, Supreme God Emperor',
      url: '/phim/vo-thuong-than-de',
    },
    {
      id: '2',
      title: 'Doraemon (2005)',
      thumbnail: 'https://ext.same-assets.com/3494562118/53759434.jpeg',
      status: 'Đang cập nhật',
      quality: 'Vietsub - HD',
      altTitles: 'Doremon, Chú Mèo máy thần kỳ, Mèo Máy Doraemon, Đôrêmon',
      url: '/phim/doraemon-2005',
    },
    {
      id: '3',
      title: 'Doraemon New TV Series',
      thumbnail: 'https://animehay.de/upload/poster/292.jpg',
      status: '835/??',
      quality: 'Vietsub - HD',
      altTitles: 'Chú Mèo máy thần kỳ , Nobita và Doremon',
      url: '/phim/doraemon-new-tv-series',
    },
    {
      id: '4',
      title: 'Võ Thần Chúa Tể',
      thumbnail: 'https://ext.same-assets.com/3478926010/2546302730.jpeg',
      status: '492/496',
      quality: 'Vietsub - HD',
      altTitles: 'Martial Master, Wu Shen Zhu Zai, Wushen Zhuzai, The God of War Dominates',
      url: '/phim/vo-than-chua-te',
    },
    {
      id: '5',
      title: 'One Piece',
      thumbnail: 'https://ext.same-assets.com/3621000462/2099959873.jpeg',
      status: 'SP 1/??',
      quality: 'Vietsub - HD',
      altTitles: 'Đảo Hải Tặc, Vua Hải Tặc, OP',
      url: '/phim/one-piece',
    },
    {
      id: '6',
      title: 'Dragon Ball Super',
      thumbnail: 'https://ext.same-assets.com/713526308/3368983431.jpeg',
      status: 'Hoàn tất (131/131)',
      quality: 'Vietsub - HD',
      altTitles: 'Bảy Viên Ngọc Rồng Siêu Cấp, Dragon Ball Chou, DB Super, DBS',
      url: '/phim/dragon-ball-super',
    },
    {
      id: '30',
      title: 'Ranma ½ (2024)',
      thumbnail: 'https://ext.same-assets.com/1820557062/2335234315.jpeg',
      status: '5/??',
      quality: 'Vietsub - HD',
      altTitles: 'Ranma 1/2, Ranma ½ Nettou Hen',
      url: '/phim/ranma-2024',
    },
    {
      id: '31',
      title: 'Youkai Gakkou no Sensei Hajimemashita!',
      thumbnail: 'https://ext.same-assets.com/1641717249/3133526857.jpeg',
      status: '5/??',
      quality: 'Vietsub - HD',
      altTitles: 'A Terrified Teacher at Ghoul School!, I Started Being a Teacher for a Youkai School!',
      url: '/phim/youkai-gakkou-no-sensei-hajimemashita',
    },
    {
      id: '33',
      title: 'Giả Thiên',
      thumbnail: 'https://ext.same-assets.com/514710320/2062177332.jpeg',
      status: '82/104',
      quality: 'Vietsub - HD',
      altTitles: 'Zhe Tian, Shrouding the Heavens',
      url: '/phim/gia-thien',
    },
    {
      id: '34',
      title: 'Nhất Niệm Vĩnh Hằng',
      thumbnail: 'https://ext.same-assets.com/495212744/1055425181.jpeg',
      status: '128/135',
      quality: 'Vietsub - HD',
      altTitles: 'A Will Eternal, Yi Nian Yong Heng',
      url: '/phim/nhat-niem-vinh-hang',
    },
    {
      id: '35',
      title: 'Luyện Khí Mười Vạn Năm',
      thumbnail: 'https://ext.same-assets.com/2403769298/993370830.jpeg',
      status: '181/260',
      quality: 'Vietsub - HD',
      altTitles: 'Lian Qi Shi Wan Nian, One Hundred Thousand Years of Qi Training',
      url: '/phim/luyen-khi-muoi-van-nam',
    },
    {
      id: '42',
      title: 'Mecha-ude',
      thumbnail: 'https://ext.same-assets.com/2491721317/3881098865.jpeg',
      quality: 'Vietsub - HD',
      status: '5/??',
      altTitles: 'Mechanical Arms',
      url: '/phim/mecha-ude',
    },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-white">
            Phim Thể Loại: {genreName}
          </h1>
        </div>

        {/* Filter options */}
        <div className="bg-vuighe-navigationBg p-4 rounded-md mb-6">
          <div className="flex flex-wrap gap-4">
            <div>
              <p className="text-gray-400 text-sm mb-1">Sắp xếp</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="text-xs bg-gray-800 border-gray-700 text-white">
                  Mới nhất
                </Button>
                <Button variant="outline" size="sm" className="text-xs bg-transparent border-gray-700 text-white hover:bg-gray-800">
                  Xem nhiều
                </Button>
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-1">Định dạng</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="text-xs bg-transparent border-gray-700 text-white hover:bg-gray-800">
                  Tất cả
                </Button>
                <Button variant="outline" size="sm" className="text-xs bg-transparent border-gray-700 text-white hover:bg-gray-800">
                  Phim lẻ
                </Button>
                <Button variant="outline" size="sm" className="text-xs bg-transparent border-gray-700 text-white hover:bg-gray-800">
                  Phim bộ
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Anime Grid */}
        <div className="anime-grid">
          {animeList.map((anime) => (
            <AnimeCard
              key={anime.id}
              id={anime.id}
              title={anime.title}
              thumbnail={anime.thumbnail}
              status={anime.status}
              quality={anime.quality}
              altTitles={anime.altTitles}
              url={anime.url}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-1">
            <Button variant="outline" size="sm" className="bg-vuighe-navigationBg border-gray-700 text-white">
              1
            </Button>
            <Button variant="outline" size="sm" className="bg-transparent border-gray-700 text-white hover:bg-gray-800">
              2
            </Button>
            <Button variant="outline" size="sm" className="bg-transparent border-gray-700 text-white hover:bg-gray-800">
              3
            </Button>
            <span className="flex items-center text-white px-2">...</span>
            <Button variant="outline" size="sm" className="bg-transparent border-gray-700 text-white hover:bg-gray-800">
              10
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
