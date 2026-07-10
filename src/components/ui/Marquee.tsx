"use client";

import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  direction?: "left" | "right";
  className?: string;
  speed?: number;
}

export default function Marquee({ children, direction = "left", className = "" }: MarqueeProps) {
  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      <div className={`flex gap-8 w-max ${direction === "left" ? "animate-marquee" : "animate-marquee-reverse"}`}>
        {children}
        {children}
      </div>
    </div>
  );
}
