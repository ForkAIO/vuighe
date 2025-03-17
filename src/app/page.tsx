import MainLayout from '@/components/layout/main-layout';
import AnimeSection from '@/components/anime/anime-section';
import Link from 'next/link';

// Dummy data for featured anime
const featuredAnime = [
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
];

// Dummy data for new anime
const newVietsub = [
  {
    id: '10',
    title: 'Haikyuu!! Movie 4: Concept no Tatakai',
    thumbnail: 'https://animehay.de/upload/poster/4207.jpg',
    altTitles: 'Haikyu!! The Movie: Battle of Concepts, High Kyuu!! Movie 4',
    url: '/phim/haikyuu-movie-4-concept-no-tatakai',
    isNew: true,
  },
  {
    id: '11',
    title: 'Haikyuu!! Movie: Gomisuteba no Kessen',
    thumbnail: 'https://animehay.de//upload/poster/4208.jpg',
    altTitles: 'Haikyu!! Movie: Trận Chiến Bãi Phế Liệu, Haikyu!! Movie: The Dumpster Battle',
    url: '/phim/haikyuu-movie-gomisuteba-no-kessen',
    isNew: true,
  },
  {
    id: '12',
    title: 'Gintama Linh Hồn Bạc: Mãi Mãi Là Tiệm Vạn Năng',
    thumbnail: 'https://ext.same-assets.com/1063238003/3676876484.jpeg',
    altTitles: 'Gintama: The Movie: The Final Chapter: Be Forever Yorozuya',
    url: '/phim/gintama-linh-hon-bac-mai-mai-la-tiem-van-nang',
    isNew: true,
  },
];

// Dummy data for popular anime
const newPopular = [
  {
    id: '20',
    title: 'Ở Rể Phần 2',
    thumbnail: 'https://animehay.de//upload/poster/4140.jpg',
    altTitles: 'My Heroic Husband 2',
    url: '/phim/o-re-phan-2',
    status: '16/16',
    quality: 'Vietsub - HD',
  },
  {
    id: '21',
    title: 'Kamonohashi Ron no Kindan Suiri ss2',
    thumbnail: 'https://animehay.de//upload/poster/4174.jpg',
    altTitles: 'Kamonohashi Ron no Kindan Suiri ss2',
    url: '/phim/kamonohashi-ron-no-kindan-suiri-ss2',
    status: '5/??',
    quality: 'Vietsub - HD',
  },
  {
    id: '22',
    title: 'Seirei Gensouki ss2',
    thumbnail: 'https://animehay.de//upload/poster/4188.jpg',
    altTitles: 'Tinh Linh Huyễn Tưởng Kí 2',
    url: '/phim/seirei-gensouki-ss2',
    status: '5/??',
    quality: 'Vietsub - HD',
  },
];

// Dummy data for new series
const newSeries = [
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
    id: '32',
    title: 'Võ Thần Chúa Tể',
    thumbnail: 'https://ext.same-assets.com/3478926010/2546302730.jpeg',
    status: '492/496',
    quality: 'Vietsub - HD',
    altTitles: 'Martial Master, Wu Shen Zhu Zai, Wushen Zhuzai, The God of War Dominates',
    url: '/phim/vo-than-chua-te',
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
];

// Dummy data for movies
const movies = [
  {
    id: '40',
    title: 'Haikyuu!! Movie 4: Concept no Tatakai',
    thumbnail: 'https://animehay.de/upload/poster/4207.jpg',
    quality: 'Vietsub - HD',
    altTitles: 'Haikyu!! The Movie: Battle of Concepts, High Kyuu!! Movie 4',
    url: '/phim/haikyuu-movie-4-concept-no-tatakai',
  },
  {
    id: '41',
    title: 'Haikyuu!! Movie: Gomisuteba no Kessen',
    thumbnail: 'https://animehay.de//upload/poster/4208.jpg',
    quality: 'Vietsub - HD',
    altTitles: 'Haikyu!! Movie: Trận Chiến Bãi Phế Liệu, Haikyu!! Movie: The Dumpster Battle',
    url: '/phim/haikyuu-movie-gomisuteba-no-kessen',
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
  {
    id: '43',
    title: 'Blue Lock: Episode Nagi',
    thumbnail: 'https://ext.same-assets.com/2555409205/208934996.jpeg',
    quality: 'Vietsub - HD',
    status: '1/1',
    altTitles: '-EPISODE -',
    url: '/phim/blue-lock-episode-nagi',
  },
  {
    id: '44',
    title: 'Gintama Linh Hồn Bạc: Mãi Mãi Là Tiệm Vạn Năng',
    thumbnail: 'https://ext.same-assets.com/1063238003/3676876484.jpeg',
    quality: 'Vietsub - HD',
    status: 'FULL',
    altTitles: 'Gintama: The Movie: The Final Chapter: Be Forever Yorozuya',
    url: '/phim/gintama-linh-hon-bac-mai-mai-la-tiem-van-nang',
  },
  {
    id: '45',
    title: 'Linh Hồn Bạc: Kiếm Quỷ Benizakura',
    thumbnail: 'https://ext.same-assets.com/2644517377/4069726782.jpeg',
    quality: 'Vietsub - HD',
    status: 'FULL',
    altTitles: 'Gintama: The Movie',
    url: '/phim/linh-hon-bac-kiem-quy-benizakura',
  },
];

export default function Home() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <AnimeSection
          title="TOP 10 PHIM HOẠT HÌNH TẠI VUIGHE"
          animes={featuredAnime}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <AnimeSection
              title="ANIME VIETSUB LẺ MỚI CHIẾU"
              animes={newVietsub}
              viewAllLink="/danh-sach/phim-le"
            />
          </div>
          <div>
            <AnimeSection
              title="ANIME HAY BỘ MỚI CHIẾU"
              animes={newPopular}
              viewAllLink="/danh-sach/phim-bo"
            />
          </div>
        </div>

        <AnimeSection
          title="PHIM BỘ MỚI"
          animes={newSeries}
          viewAllLink="/danh-sach/phim-bo"
        />

        <AnimeSection
          title="PHIM LẺ MỚI"
          animes={movies}
          viewAllLink="/danh-sach/phim-le"
        />
      </div>
    </MainLayout>
  );
}
