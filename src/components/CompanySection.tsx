"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function CompanySection() {
  return (
    <section id="company" className="bg-bg-warm py-16 sm:py-24">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-center text-primary text-sm font-bold tracking-widest mb-2">COMPANY</p>
          <h2 className="text-center text-2xl sm:text-[34px] font-bold text-text mb-12">
            会社概要
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-bg-card rounded-xl border border-border shadow-sm overflow-hidden">
            <table className="w-full text-base">
              <tbody>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 bg-primary-light text-text font-bold w-[160px] sm:w-[200px] align-top">社名</th>
                  <td className="py-4 px-6 text-text">株式会社N.E</td>
                </tr>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 bg-primary-light text-text font-bold align-top">代表取締役</th>
                  <td className="py-4 px-6 text-text">南　広一朗</td>
                </tr>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 bg-primary-light text-text font-bold align-top">設立</th>
                  <td className="py-4 px-6 text-text">令和元年12月</td>
                </tr>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 bg-primary-light text-text font-bold align-top">資本金</th>
                  <td className="py-4 px-6 text-text">2,000万円</td>
                </tr>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 bg-primary-light text-text font-bold align-top">本社所在地</th>
                  <td className="py-4 px-6 text-text">
                    〒460-0002 愛知県名古屋市中区丸の内１丁目２−９長尾ビル2F<br />
                    Tel：052-253-7830 ／ Mail：info@nine-earth.co.jp
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 bg-primary-light text-text font-bold align-top">東京支社</th>
                  <td className="py-4 px-6 text-text">
                    〒171-0022 東京都豊島区南池袋2丁目8-5 MIビル 7階<br />
                    Tel：03-6914-1868
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 bg-primary-light text-text font-bold align-top">大阪支社</th>
                  <td className="py-4 px-6 text-text">
                    〒550-0014 大阪府大阪市西区北堀江2-2-24 ParkLane Horie Bld 11F
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 bg-primary-light text-text font-bold align-top">顧問弁護士</th>
                  <td className="py-4 px-6 text-text">名嶋・綿貫法律事務所</td>
                </tr>
                <tr>
                  <th className="text-left py-4 px-6 bg-primary-light text-text font-bold align-top">許可番号</th>
                  <td className="py-4 px-6 text-text text-base">
                    <p className="mb-3">
                      <span className="font-bold text-primary">人材紹介・派遣</span><br />
                      有料職業紹介許可番号　23−ユ−302133<br />
                      労働者派遣許可番号　派23−303631
                    </p>
                    <p className="mb-3">
                      <span className="font-bold text-primary">訪問看護</span><br />
                      介護保険事業所番号　2360690339
                    </p>
                    <p>
                      <span className="font-bold text-primary">高齢者施設</span><br />
                      訪問介護　2370103984<br />
                      予防専門型訪問サービス　23A0101148
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
