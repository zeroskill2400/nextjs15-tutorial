import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Google Fonts 최적화 설정
const inter = Inter({ 
  subsets: ["latin"],
  // 한국어 텍스트를 위한 추가 설정
  display: 'swap', // 폰트 로딩 중 fallback 폰트 표시
  // 성능을 위해 필요한 font-weight만 로드
  weight: ['400', '500', '600', '700'],
  // 변수 폰트 사용 (더 작은 파일 크기)
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Next.js 대시보드",
  description: "Next.js로 구축된 현대적인 대시보드 애플리케이션",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} font-sans`}>
        <div className="flex h-screen">
          {/* 사이드바 */}
          <div className="sidebar w-64">
            <h1 className="text-2xl font-bold mb-8 text-white">대시보드</h1>
            <nav>
              <ul className="space-y-2">
                <li><a href="/" className="sidebar-link">홈</a></li>
                <li><a href="/dashboard" className="sidebar-link">대시보드</a></li>
                <li><a href="/analytics" className="sidebar-link">분석</a></li>
                <li><a href="/settings" className="sidebar-link">설정</a></li>
              </ul>
            </nav>
          </div>
          
          {/* 메인 콘텐츠 */}
          <div className="main-content flex-1 p-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
