"use client";

import ScrollReveal from "@/components/ScrollReveal";

const problems = [
  {
    category: "コスト",
    items: [
      "紹介会社に1名80〜120万円の紹介料を払い続けている",
      "人事担当を雇いたいが年収350〜450万円のコストが見合わない",
    ],
  },
  {
    category: "工数・ノウハウ",
    items: [
      "求人媒体が多すぎて使いこなせない",
      "応募対応に追われ面接設定や本来業務が圧迫されている",
    ],
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-bg py-16 sm:py-24">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="text-center text-2xl sm:text-[34px] font-bold text-text mb-4">
            こんな<span className="text-red">お悩み</span>ありませんか？
          </h2>
          <p className="text-center text-text-light text-base mb-10 max-w-lg mx-auto">
            医療福祉業界では2025年に向けて69万人の人材不足が予測。<br />78%の法人が紹介会社に依存しています。
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {problems.map((group, i) => (
            <ScrollReveal key={group.category} direction={i === 0 ? "left" : "right"} delay={0.1} className="h-full">
              <div className="bg-bg-card rounded-xl p-6 sm:p-8 border border-border shadow-sm h-full">
                <span className="inline-block text-xl font-bold text-red bg-red-light px-4 py-2 rounded-full mb-4">
                  {group.category}の課題
                </span>
                <ul className="space-y-4">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-red text-lg leading-none mt-0.5 shrink-0">✕</span>
                      <span className="text-base text-text leading-relaxed font-bold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="text-center mt-10">
            <div className="inline-block">
              <p className="text-xl sm:text-2xl font-bold text-text">
                そのお悩み、<span className="text-primary text-2xl sm:text-3xl">CareHub</span>が解決します
              </p>
              <div className="w-full h-1 bg-primary rounded-full mt-2" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
