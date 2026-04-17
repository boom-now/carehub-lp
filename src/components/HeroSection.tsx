export default function HeroSection() {
  return (
    <section className="bg-bg-warm">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-14">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-light text-primary text-sm sm:text-base font-bold px-4 py-1.5 rounded-full mb-6 animate-fade-up">
              医療福祉特化 HRアウトソーシング
            </div>

            <h1
              className="text-3xl sm:text-[44px] lg:text-[52px] font-bold text-text leading-[1.3] mb-5 animate-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              医療福祉の採用は
              <br />
              <span className="text-primary">CareHub</span>にまるごとお任せ
            </h1>

            <p
              className="text-text-light text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              求人媒体の運用から応募者対応・データ分析まで完全代行。
              <br />
              月額15万円で御社の外部人事部として採用業務を丸ごと支援します。
            </p>
          </div>

          <div
            className="flex-1 max-w-md lg:max-w-lg animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-img.png"
              alt="医療・福祉専門 外部人事部サービス CareHub"
              className="w-full h-auto mix-blend-screen"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mt-10">
          {[
            { number: "40件", label: "年間エントリー保証", sub: "未達時全額返金" },
            { number: "50%", label: "採用コスト削減", sub: "紹介会社比" },
            { number: "2.5ヶ月", label: "採用期間短縮", sub: "業界平均比" },
            { number: "2週間", label: "で運用開始", sub: "最短導入" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="bg-bg-card rounded-xl p-4 text-center shadow-sm animate-count-pop"
              style={{ animationDelay: `${0.6 + i * 0.1}s` }}
            >
              <p className="text-2xl sm:text-3xl font-bold text-primary leading-none">
                {stat.number}
              </p>
              <p className="text-sm text-text font-medium mt-1.5">{stat.label}</p>
              <p className="text-xs text-text-muted mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row gap-3 justify-center mt-10 animate-fade-up"
          style={{ animationDelay: "0.9s" }}
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-accent-btn text-white font-bold px-10 py-4 rounded-lg hover:bg-accent-btn-dark transition-colors text-base sm:text-lg shadow-md"
          >
            まずは資料をダウンロード
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center bg-bg-card border-2 border-border text-text font-medium px-10 py-4 rounded-lg hover:border-primary hover:text-primary transition-colors text-base sm:text-lg"
          >
            サービス詳細を見る
          </a>
        </div>
      </div>
    </section>
  );
}
