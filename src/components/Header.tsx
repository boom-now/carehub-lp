"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#services", label: "サービス内容" },
  { href: "#features", label: "選ばれる理由" },
  { href: "#steps", label: "導入の流れ" },
  { href: "#pricing", label: "料金プラン" },
  { href: "#company", label: "会社概要" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-28 sm:h-32">
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="CareHub"
              className="h-24 sm:h-28 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-text-light hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href="/contact"
              className="bg-accent-btn text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-accent-btn-dark transition-colors shadow-sm"
            >
              資料ダウンロード
            </a>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニュー"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-text transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-text transition-opacity ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-text transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {isOpen && (
          <nav className="lg:hidden pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-light hover:text-primary transition-colors py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/contact"
                className="bg-accent-btn text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-accent-btn-dark transition-colors text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                資料ダウンロード
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
