"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-bg py-16 sm:py-24">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-center text-primary text-sm font-bold tracking-widest mb-2">PRICING</p>
          <h2 className="text-center text-2xl sm:text-[34px] font-bold text-text mb-4">
            料金プラン
          </h2>
          <p className="text-center text-2xl sm:text-3xl font-bold text-text mb-12">
            月<span className="text-primary text-3xl sm:text-4xl">15万</span>のコストで、<br className="sm:hidden" />採用チームを<span className="text-primary text-3xl sm:text-4xl">1年間</span>丸ごと持てる!!
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-md mx-auto">
            <div className="bg-bg-card rounded-xl border-2 border-primary overflow-hidden shadow-sm">
              <div className="bg-primary text-white text-center py-3">
                <span className="text-base font-bold">年間定額制</span>
              </div>
              <div className="p-8 sm:p-10 text-center">
                <div className="mb-1 flex items-baseline justify-center">
                  <span className="text-text-muted text-base mr-2">月額</span>
                  <span className="text-6xl sm:text-7xl font-bold text-text">15</span>
                  <span className="text-2xl font-bold text-text ml-1">万円</span>
                </div>
                <p className="text-text-muted text-base mb-8">（税別）年間180万円</p>

                <ul className="text-left space-y-3 mb-8 max-w-xs mx-auto">
                  {[
                    "年間40エントリー保証",
                    "媒体運用代行込み",
                    "応募者対応代行込み（人事業務含む）",
                    "未達時全額返金",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-base">
                      <span className="w-6 h-6 rounded-full bg-primary-light text-primary flex items-center justify-center text-sm shrink-0">✓</span>
                      <span className="text-text">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="block w-full bg-accent-btn text-white font-bold py-4 rounded-lg hover:bg-accent-btn-dark transition-colors text-lg shadow-md"
                >
                  まずは資料をダウンロード
                </a>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
