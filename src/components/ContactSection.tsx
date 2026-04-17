"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 text-white" style={{ backgroundColor: "#3a5068" }}>
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-primary text-sm font-bold tracking-widest mb-2">CONTACT</p>
            <h2 className="text-2xl sm:text-[34px] font-bold mb-4">
              まずはお気軽にご相談ください
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-10">
              医療福祉法人が本来の使命である質の高いケア提供に集中できる社会を実現します。<br />
              採用に関するお悩みをお聞かせください。
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="bg-white/10 rounded-xl p-6 h-full">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
                  </svg>
                </div>
                <p className="text-sm text-white/60 mb-2">お電話でのお問い合わせ</p>
                <p className="text-2xl font-bold">
                  <a href="tel:052-253-7830" className="hover:text-primary transition-colors">052-253-7830</a>
                </p>
                <p className="text-sm text-white/50 mt-1">FAX：052-253-7832</p>
                <p className="text-sm text-white/50 mt-1">受付 9:00〜18:00（土日祝休）</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1}>
              <div className="bg-white/10 rounded-xl p-6 h-full">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <p className="text-sm text-white/60 mb-2">メールでのお問い合わせ</p>
                <p className="text-xl font-bold">
                  <a href="mailto:info@nine-earth.co.jp" className="hover:text-primary transition-colors">info@nine-earth.co.jp</a>
                </p>
                <p className="text-sm text-white/50 mt-1">24時間受付・2営業日以内にご返信</p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-accent-btn text-white font-bold px-10 py-4 rounded-lg hover:bg-accent-btn-dark transition-colors text-lg shadow-md"
            >
              資料ダウンロード・お問い合わせ
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
