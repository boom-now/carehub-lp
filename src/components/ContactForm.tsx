"use client";

import { useState } from "react";

type FormData = {
  type: string;
  companyName: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  employees: string;
  message: string;
};

const initialForm: FormData = {
  type: "資料ダウンロード",
  companyName: "",
  name: "",
  email: "",
  phone: "",
  position: "",
  employees: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.companyName.trim()) newErrors.companyName = "法人名を入力してください";
    if (!form.name.trim()) newErrors.name = "お名前を入力してください";
    if (!form.email.trim()) {
      newErrors.email = "メールアドレスを入力してください";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "正しいメールアドレスを入力してください";
    }
    if (!form.phone.trim()) newErrors.phone = "電話番号を入力してください";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  if (submitted) {
    return (
      <section className="bg-bg py-20 sm:py-28">
        <div className="max-w-[600px] mx-auto px-4 sm:px-6 text-center">
          <div className="bg-bg-card rounded-xl border border-border shadow-sm p-10 sm:p-14">
            <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-text mb-4">
              送信が完了しました
            </h2>
            <p className="text-base text-text-light leading-relaxed mb-8">
              お問い合わせありがとうございます。<br />
              2営業日以内に担当者よりご連絡いたします。
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-3.5 rounded-lg hover:bg-primary-dark transition-colors text-base"
            >
              トップページへ戻る
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-bg py-16 sm:py-24">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-bold tracking-widest mb-2">CONTACT</p>
          <h1 className="text-2xl sm:text-[34px] font-bold text-text mb-4">
            お問い合わせ・資料ダウンロード
          </h1>
          <p className="text-base text-text-light leading-relaxed">
            以下のフォームにご記入ください。<br />
            2営業日以内に担当者よりご連絡いたします。
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-bg-card rounded-xl border border-border shadow-sm p-6 sm:p-10">
          <div className="space-y-6">

            {/* お問い合わせ種別 */}
            <div>
              <label className="block text-base font-bold text-text mb-2">
                お問い合わせ種別<span className="text-red ml-1 text-sm">*</span>
              </label>
              <div className="flex flex-wrap gap-3">
                {["資料ダウンロード", "サービスについて相談", "お見積もり", "その他"].map((option) => (
                  <label
                    key={option}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border cursor-pointer transition-colors text-sm ${
                      form.type === option
                        ? "border-primary bg-primary-light text-primary font-medium"
                        : "border-border text-text-light hover:border-primary"
                    }`}
                  >
                    <input
                      type="radio"
                      name="type"
                      value={option}
                      checked={form.type === option}
                      onChange={(e) => handleChange("type", e.target.value)}
                      className="sr-only"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* 法人名 */}
            <div>
              <label className="block text-base font-bold text-text mb-2">
                法人名・会社名<span className="text-red ml-1 text-sm">*</span>
              </label>
              <input
                type="text"
                value={form.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                placeholder="例：株式会社○○"
                className={`w-full px-4 py-3 rounded-lg border text-base bg-white outline-none transition-colors ${
                  errors.companyName ? "border-red" : "border-border focus:border-primary"
                }`}
              />
              {errors.companyName && <p className="text-red text-sm mt-1">{errors.companyName}</p>}
            </div>

            {/* お名前 */}
            <div>
              <label className="block text-base font-bold text-text mb-2">
                お名前<span className="text-red ml-1 text-sm">*</span>
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="例：山田 太郎"
                className={`w-full px-4 py-3 rounded-lg border text-base bg-white outline-none transition-colors ${
                  errors.name ? "border-red" : "border-border focus:border-primary"
                }`}
              />
              {errors.name && <p className="text-red text-sm mt-1">{errors.name}</p>}
            </div>

            {/* 役職 */}
            <div>
              <label className="block text-base font-bold text-text mb-2">
                役職
              </label>
              <input
                type="text"
                value={form.position}
                onChange={(e) => handleChange("position", e.target.value)}
                placeholder="例：人事部長"
                className="w-full px-4 py-3 rounded-lg border border-border text-base bg-white outline-none transition-colors focus:border-primary"
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label className="block text-base font-bold text-text mb-2">
                メールアドレス<span className="text-red ml-1 text-sm">*</span>
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="例：info@example.com"
                className={`w-full px-4 py-3 rounded-lg border text-base bg-white outline-none transition-colors ${
                  errors.email ? "border-red" : "border-border focus:border-primary"
                }`}
              />
              {errors.email && <p className="text-red text-sm mt-1">{errors.email}</p>}
            </div>

            {/* 電話番号 */}
            <div>
              <label className="block text-base font-bold text-text mb-2">
                電話番号<span className="text-red ml-1 text-sm">*</span>
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="例：052-253-7830"
                className={`w-full px-4 py-3 rounded-lg border text-base bg-white outline-none transition-colors ${
                  errors.phone ? "border-red" : "border-border focus:border-primary"
                }`}
              />
              {errors.phone && <p className="text-red text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* 従業員数 */}
            <div>
              <label className="block text-base font-bold text-text mb-2">
                従業員数
              </label>
              <select
                value={form.employees}
                onChange={(e) => handleChange("employees", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border text-base bg-white outline-none transition-colors focus:border-primary"
              >
                <option value="">選択してください</option>
                <option value="1〜10名">1〜10名</option>
                <option value="11〜30名">11〜30名</option>
                <option value="31〜50名">31〜50名</option>
                <option value="51〜100名">51〜100名</option>
                <option value="101〜300名">101〜300名</option>
                <option value="301名以上">301名以上</option>
              </select>
            </div>

            {/* お問い合わせ内容 */}
            <div>
              <label className="block text-base font-bold text-text mb-2">
                お問い合わせ内容
              </label>
              <textarea
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="ご質問やご要望がございましたらご記入ください"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border text-base bg-white outline-none transition-colors focus:border-primary resize-y"
              />
            </div>

            {/* 送信ボタン */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full font-bold py-4 rounded-lg text-white text-lg shadow-md transition-colors"
                style={{ backgroundColor: "#e8a0b4" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d4899f")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#e8a0b4")}
              >
                送信する
              </button>
              <p className="text-sm text-text-muted text-center mt-3">
                ※ 2営業日以内にご返信いたします
              </p>
            </div>

          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-base text-text-light mb-2">お電話でのお問い合わせ</p>
          <a href="tel:052-253-7830" className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors">
            052-253-7830
          </a>
          <p className="text-sm text-text-muted mt-1">受付 9:00〜18:00（土日祝休）</p>
        </div>
      </div>
    </section>
  );
}
