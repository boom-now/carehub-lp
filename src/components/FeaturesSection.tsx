"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-bg py-16 sm:py-24">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-center text-primary text-sm font-bold tracking-widest mb-2">REASON</p>
          <h2 className="text-center text-2xl sm:text-[34px] font-bold text-text mb-12">
            CareHubが選ばれる理由
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-bg-card rounded-xl border-2 p-8 sm:p-10 text-center mb-10 max-w-2xl mx-auto shadow-sm" style={{ borderColor: "#d4a020" }}>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-0 mb-4 -ml-6 sm:-ml-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" className="w-20 h-20 sm:w-24 sm:h-24">
                  <defs>
                    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f0c040" />
                      <stop offset="50%" stopColor="#d4a020" />
                      <stop offset="100%" stopColor="#f0c040" />
                    </linearGradient>
                  </defs>
                  <circle cx="40" cy="34" r="22" fill="none" stroke="url(#gold)" strokeWidth="3" />
                  {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                    <circle
                      key={deg}
                      cx={Math.round((40 + 24 * Math.cos((deg * Math.PI) / 180)) * 100) / 100}
                      cy={Math.round((34 + 24 * Math.sin((deg * Math.PI) / 180)) * 100) / 100}
                      r="3.5"
                      fill="url(#gold)"
                    />
                  ))}
                  <path d="M35 38 L35 28 L38 24 L38 28 L46 28 L46 38 Z" fill="url(#gold)" stroke="url(#gold)" strokeWidth="1" strokeLinejoin="round" />
                  <rect x="32" y="28" width="4" height="10" rx="1" fill="url(#gold)" />
                  <polygon points="32,56 40,48 48,56 44,56 40,52 36,56" fill="url(#gold)" />
                  <polygon points="30,64 36,56 40,60 34,64" fill="url(#gold)" opacity="0.8" />
                  <polygon points="50,64 44,56 40,60 46,64" fill="url(#gold)" opacity="0.8" />
                </svg>
                <p className="text-3xl sm:text-4xl font-bold -ml-2 -mt-1" style={{ color: "#d4a020" }}>
                  業界初
                </p>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-text mb-4">
                年間40エントリー保証モデル
              </h3>
              <div className="inline-block font-bold text-2xl sm:text-3xl px-10 py-4 rounded-lg text-white" style={{ background: "linear-gradient(135deg, #f0c040, #d4a020)" }}>
                未達時は全額返金
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <ScrollReveal direction="left" delay={0.1}>
            <div className="bg-bg-card rounded-xl p-6 sm:p-8 border border-border shadow-sm h-full">
              <h4 className="text-base font-bold text-text mb-5">1名あたりの採用コスト比較</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-text-muted">紹介会社（年3名採用時）</span>
                    <span className="text-xl font-bold text-red">240〜360万円</span>
                  </div>
                  <div className="w-full bg-red-light rounded-full h-3">
                    <div className="bg-red h-3 rounded-full" style={{ width: "90%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-text-muted">CareHub（40エントリー保証）</span>
                    <span className="text-xl font-bold text-primary">180万円</span>
                  </div>
                  <div className="w-full bg-primary-light rounded-full h-3">
                    <div className="bg-primary h-3 rounded-full" style={{ width: "45%" }} />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <div className="bg-bg-card rounded-xl p-6 sm:p-8 border border-border shadow-sm h-full">
              <h4 className="text-base font-bold text-text mb-5">トータルコスト比較（年間）</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-text-muted">従来（人事雇用＋紹介会社）</span>
                    <span className="text-xl font-bold text-red">約650万円</span>
                  </div>
                  <div className="w-full bg-red-light rounded-full h-3">
                    <div className="bg-red h-3 rounded-full" style={{ width: "100%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-text-muted">CareHub導入</span>
                    <span className="text-xl font-bold text-primary">約210万円</span>
                  </div>
                  <div className="w-full bg-primary-light rounded-full h-3">
                    <div className="bg-primary h-3 rounded-full" style={{ width: "32%" }} />
                  </div>
                </div>
              </div>
              <p className="mt-5 text-center text-base font-bold text-text">
                年間<span className="text-primary text-2xl mx-1">約440万円</span>のコスト削減
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              value: "自社運営実績",
              description: "訪問看護ステーション・介護施設の直接運営経験に基づくノウハウ",
              svg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-14 h-14">
                  <rect x="8" y="20" width="48" height="38" rx="3" fill="#e0e8f0" />
                  <rect x="22" y="8" width="20" height="50" rx="2" fill="#f0f4f8" />
                  <rect x="28" y="14" width="8" height="3" rx="1" fill="#d47070" />
                  <rect x="30.5" y="12" width="3" height="8" rx="1" fill="#d47070" />
                  <rect x="12" y="28" width="6" height="6" rx="1" fill="#7bafd4" />
                  <rect x="12" y="38" width="6" height="6" rx="1" fill="#7bafd4" />
                  <rect x="12" y="48" width="6" height="6" rx="1" fill="#7bafd4" />
                  <rect x="46" y="28" width="6" height="6" rx="1" fill="#7bafd4" />
                  <rect x="46" y="38" width="6" height="6" rx="1" fill="#7bafd4" />
                  <rect x="46" y="48" width="6" height="6" rx="1" fill="#7bafd4" />
                  <rect x="26" y="26" width="6" height="6" rx="1" fill="#7bafd4" />
                  <rect x="26" y="36" width="6" height="6" rx="1" fill="#7bafd4" />
                  <rect x="36" y="26" width="6" height="6" rx="1" fill="#7bafd4" />
                  <rect x="36" y="36" width="6" height="6" rx="1" fill="#7bafd4" />
                  <rect x="28" y="46" width="8" height="12" rx="1" fill="#8aaccc" />
                </svg>
              ),
            },
            {
              value: "2.5ヶ月短縮",
              description: "現場目線の採用課題解決力で平均採用期間を大幅短縮",
              svg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-14 h-14">
                  <circle cx="32" cy="32" r="28" fill="#3a5068" />
                  <circle cx="32" cy="32" r="24" fill="#fdf0f4" />
                  {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                    <rect
                      key={deg}
                      x="31" y="10" width="2" height="5" rx="1" fill="#3a5068"
                      transform={`rotate(${deg} 32 32)`}
                    />
                  ))}
                  <line x1="32" y1="32" x2="32" y2="18" stroke="#3a5068" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="32" y1="32" x2="42" y2="38" stroke="#8b3030" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="32" cy="32" r="2.5" fill="#3a5068" />
                </svg>
              ),
            },
            {
              value: "50%削減",
              description: "人事担当者の給与・社保・教育コストも不要に",
              svg: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-14 h-14">
                  <circle cx="18" cy="40" r="14" fill="none" stroke="#2d3a4a" strokeWidth="3.5" />
                  <circle cx="18" cy="40" r="7" fill="none" stroke="#2d3a4a" strokeWidth="2" />
                  <text x="18" y="43" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#2d3a4a">$</text>
                  <rect x="24" y="14" width="8" height="32" rx="1" fill="#2d3a4a" />
                  <rect x="34" y="22" width="8" height="24" rx="1" fill="#2d3a4a" />
                  <rect x="44" y="30" width="8" height="16" rx="1" fill="#2d3a4a" />
                  <rect x="54" y="36" width="8" height="10" rx="1" fill="#2d3a4a" />
                  <line x1="26" y1="12" x2="58" y2="40" stroke="#2d3a4a" strokeWidth="2.5" />
                  <polygon points="58,40 58,33 51,40" fill="#2d3a4a" />
                </svg>
              ),
            },
          ].map((item, i) => (
            <ScrollReveal key={item.value} delay={i * 0.12} className="h-full">
              <div className="bg-bg-card rounded-xl p-6 border border-border text-center shadow-sm h-full flex flex-col items-center justify-center">
                <div className="mb-3">{item.svg}</div>
                <p className="font-bold text-text text-lg mb-1">{item.value}</p>
                <p className="text-sm text-text-light leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
