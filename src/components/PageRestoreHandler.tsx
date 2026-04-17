"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageRestoreHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // bfcache復帰時：すべてを即表示
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        document.querySelectorAll(".scroll-reveal").forEach((el) => {
          el.classList.remove("sr-ready");
          el.classList.add("is-visible");
        });
        document.querySelectorAll(".animate-fade-up, .animate-count-pop, .animate-fade-in, .animate-scale-in").forEach((el) => {
          const htmlEl = el as HTMLElement;
          htmlEl.style.animation = "none";
          htmlEl.style.opacity = "1";
          htmlEl.style.transform = "none";
        });
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, [pathname]);

  return null;
}
