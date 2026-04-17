"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "fade";

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal--${direction} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
