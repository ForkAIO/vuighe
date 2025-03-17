import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VuiGhe - Xem phim Anime Hay, Anime Vietsub tại Vui Ghê",
  description: "VUIGHE là trang xem phim hoạt hình, anime hay nhiều thể loại hấp dẫn, trang cung cấp nhiều bộ phim Anime Vietsub, hoạt hình 3d miễn phí cập nhật liên tục.",
  keywords: "anime, vietsub, hoạt hình, hoạt hình trung quốc, phim hoạt hình, vuighe, vui ghe, anime hay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
