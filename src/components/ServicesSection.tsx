"use client";

import ScrollReveal from "@/components/ScrollReveal";

const coreServices = [
  {
    number: "01",
    title: "求人媒体運用代行",
    description: "Indeed・ジョブメドレー等、多数の運用媒体を最適化。求人原稿の作成・改善から応募率向上施策まで。",
  },
  {
    number: "02",
    title: "応募者対応代行",
    description: "電話・SMS対応、面接日程調整を完全代行。迅速な対応で歩留まりを大幅に向上させます。",
  },
  {
    number: "03",
    title: "採用データ分析・改善",
    description: "応募率・面接率の分析、媒体効果の測定。データに基づく継続的な改善提案を行います。",
  },
];

const teams = [
  {
    title: "採用パートナー",
    role: "採用戦略の設計・伴走支援",
    items: [
      "採用方針・要件の整理および設計",
      "振り返りと改善提案",
      "採用状況の可視化・レポーティング",
      "市場動向を踏めた採用戦略の最適化",
      "現場理解を深めるための取材・ヒアリング",
    ],
  },
  {
    title: "CS（カスタマーサクセス）",
    role: "採用運用の全面代行",
    items: [
      "各媒体への求人作成・運用最適化",
      "応募者対応および面接調整の代行",
      "データに基づく分析・改善提案",
      "KPI管理による継続的な改善推進",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-bg-warm py-16 sm:py-24">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-center text-primary text-sm font-bold tracking-widest mb-2">SERVICE</p>
          <h2 className="text-center text-2xl sm:text-[34px] font-bold text-text mb-4">
            CareHubの3つのコア機能
          </h2>
          <p className="text-center text-text-light text-base mb-12 max-w-2xl mx-auto">
            2つの専門チームが貴法人の採用を全面支援します
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {coreServices.map((s, i) => (
            <ScrollReveal key={s.number} delay={i * 0.12} className="h-full">
              <div className="bg-bg-card rounded-xl p-6 sm:p-8 border border-border shadow-sm h-full">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-white text-sm font-bold mb-4">
                  {s.number}
                </span>
                <h3 className="text-lg font-bold text-text mb-3">{s.title}</h3>
                <p className="text-base text-text-light leading-relaxed">{s.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {teams.map((team, i) => (
            <ScrollReveal key={team.title} direction={i === 0 ? "left" : "right"} delay={0.1} className="h-full">
              <div className="rounded-xl p-6 sm:p-8 border-2 border-primary shadow-md h-full" style={{ backgroundColor: "#e8eff8" }}>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: "#e8a0b4" }}>{team.title}</h3>
                <p className="text-base sm:text-lg font-medium mb-4" style={{ color: "#e8a0b4" }}>{team.role}</p>
                <ul className="space-y-2.5">
                  {team.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-base text-text">
                      <span className="text-primary font-bold shrink-0 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
