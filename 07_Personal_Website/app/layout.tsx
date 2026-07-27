import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LEO ZHOU | 运营与商业化负责人",
  description:
    "智慧文旅、智能交通与区域业务增长方向的运营与商业化负责人个人作品集。",
  keywords: ["智慧文旅", "智能交通", "商业化运营", "项目管理", "AI运营"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
