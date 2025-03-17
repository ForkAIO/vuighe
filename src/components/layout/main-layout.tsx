import React from 'react';
import Link from 'next/link';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/logo';

const genreItems = [
  { name: 'Hành Động', href: '/the-loai/hanh-dong' },
  { name: 'Võ Thuật', href: '/the-loai/vo-thuat' },
  { name: 'Viễn Tưởng', href: '/the-loai/vien-tuong' },
  { name: 'Hoạt Hình', href: '/the-loai/hoat-hinh' },
  { name: 'Cổ Trang', href: '/the-loai/co-trang' },
  { name: 'Phiêu Lưu', href: '/the-loai/phieu-luu' },
  { name: 'Hình Sự', href: '/the-loai/hinh-su' },
  { name: 'Khoa Học', href: '/the-loai/khoa-hoc' },
  { name: 'Hài Hước', href: '/the-loai/hai-huoc' },
  { name: 'Chính Kịch', href: '/the-loai/chinh-kich' },
  { name: 'Giả Tưởng', href: '/the-loai/gia-tuong' },
  { name: 'Anime', href: '/the-loai/anime' },
];

const countryItems = [
  { name: 'Trung Quốc', href: '/quoc-gia/trung-quoc' },
  { name: 'Nhật Bản', href: '/quoc-gia/nhat-ban' },
  { name: 'Âu Mỹ', href: '/quoc-gia/au-my' },
  { name: 'Hàn Quốc', href: '/quoc-gia/han-quoc' },
  { name: 'Ấn Độ', href: '/quoc-gia/an-do' },
  { name: 'Nga', href: '/quoc-gia/nga' },
];

export function MainNavigation() {
  return (
    <header className="bg-vuighe-navigationBg border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-4">
          <Logo />

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="text-white/80 hover:text-white py-2 px-3 text-sm">
                    Trang chủ
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white/80 hover:text-white text-sm">
                  Thể loại
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-2 grid grid-cols-3 gap-2">
                    {genreItems.map((item) => (
                      <Link key={item.href} href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className="block px-3 py-2 text-sm rounded hover:bg-white/10">
                          {item.name}
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white/80 hover:text-white text-sm">
                  Quốc gia
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[300px] p-2 grid grid-cols-2 gap-2">
                    {countryItems.map((item) => (
                      <Link key={item.href} href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className="block px-3 py-2 text-sm rounded hover:bg-white/10">
                          {item.name}
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div>
          <button className="px-4 py-1.5 bg-vuighe-pink text-white text-sm rounded">
            Đăng nhập
          </button>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-black/50 border-t border-gray-800 py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <Logo className="mb-4" />
            <p className="text-gray-400 text-sm mb-2">
              VUIGHE là trang xem phim hoạt hình, anime hay nhiều thể loại hấp dẫn
            </p>
            <p className="text-gray-400 text-sm">
              Trang cung cấp nhiều bộ phim Anime Vietsub, hoạt hình 3d miễn phí cập nhật liên tục
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Liên kết</h4>
            <ul className="text-gray-400 text-sm">
              <li className="mb-2">
                <Link href="/" className="hover:text-white">Trang chủ</Link>
              </li>
              <li className="mb-2">
                <Link href="/the-loai/anime" className="hover:text-white">Anime hay</Link>
              </li>
              <li className="mb-2">
                <Link href="/danh-sach/phim-bo" className="hover:text-white">Phim bộ</Link>
              </li>
              <li>
                <Link href="/danh-sach/phim-le" className="hover:text-white">Phim lẻ</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-xs border-t border-gray-800 pt-6">
          Truy cập vuighe.org để xem phim hoạt hình anime vietsub mới nhất
        </div>
      </div>
    </footer>
  );
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
