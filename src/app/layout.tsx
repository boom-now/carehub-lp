import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";
import PageRestoreHandler from "@/components/PageRestoreHandler";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "CareHub | 医療福祉専門 外部人事部サービス",
  description:
    "CareHubは医療福祉特化のHRアウトソーシングサービスです。月額15万円で採用チームを丸ごと。年間40エントリー保証・未達時全額返金。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <CursorEffect />
        <PageRestoreHandler />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
