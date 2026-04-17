"use client";

import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  { title: "ご契約", description: "サービス内容確認\n契約書締結" },
  { title: "求人設計", description: "職種・条件整理\n求人原稿作成" },
  { title: "媒体運用開始", description: "複数媒体への掲載\n運用最適化" },
  { title: "応募獲得", description: "応募者対応代行\n面接設定サポート" },
];

export default function StepsSection() {
  return (
    <section id="steps" className="bg-bg-warm py-20 sm:py-28">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-center text-primary text-sm font-bold tracking-widest mb-2">FLOW</p>
          <h2 className="text-center text-2xl sm:text-[34px] font-bold text-text mb-3">
            導入までの4ステップ
          </h2>
          <p className="text-center text-base text-text-light mb-14">
            契約から応募獲得まで<span className="font-bold" style={{ color: "#e8a0b4" }}>最短2週間</span>
          </p>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* 接続線（PC） */}
          <div className="hidden sm:block absolute top-7 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 bg-border z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 sm:gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.15}>
                <div className="flex sm:flex-col items-start sm:items-center gap-5 sm:gap-0 relative">
                  {/* 縦線（SP） */}
                  {i < steps.length - 1 && (
                    <div className="sm:hidden absolute left-7 top-[60px] w-0.5 h-[calc(100%)] bg-border z-0" />
                  )}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shrink-0">
                    {i + 1}
                  </div>
                  <div className="sm:text-center sm:mt-5">
                    <p className="font-bold text-text text-lg mb-1">{step.title}</p>
                    <p className="text-base text-text-light leading-relaxed whitespace-pre-line">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
