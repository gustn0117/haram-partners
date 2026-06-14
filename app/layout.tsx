import type { Metadata } from "next";
import { Noto_Serif_KR, Cormorant } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { company } from "@/lib/content";

const notoSerifKr = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://haram-partners.hsweb.pics"),
  title: {
    default: `${company.nameKo} | 행사 기획·운영 전문`,
    template: `%s | ${company.nameKo}`,
  },
  description:
    "하람파트너스는 기업 행사·컨퍼런스부터 공연·페스티벌까지, 브랜드의 순간을 설계하고 완성하는 행사 기획·운영 전문 기업입니다.",
  keywords: [
    "행사기획",
    "기업행사",
    "컨퍼런스",
    "페스티벌",
    "공연기획",
    "이벤트대행",
    "하람파트너스",
  ],
  openGraph: {
    title: `${company.nameKo} | 행사 기획·운영 전문`,
    description: "브랜드의 순간을 설계하는 행사 기획·운영 파트너, 하람파트너스.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSerifKr.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper">
        <Header />
        <main className="relative z-2 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
