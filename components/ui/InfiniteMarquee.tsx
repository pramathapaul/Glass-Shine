"use client";

import { useRef, useState, useEffect, ReactNode } from "react";

interface InfiniteMarqueeProps {
  direction: "left" | "right";
  speed?: number;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

export default function InfiniteMarquee({
  direction,
  speed = 30,
  children,
  className = "",
  ariaLabel,
}: InfiniteMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const duration = Math.max(20, (100 / speed) * 8);

  const track = (
    <div
      className="flex gap-5 shrink-0"
      aria-hidden="true"
    >
      {children}
    </div>
  );

  if (reducedMotion) {
    return (
      <div aria-label={ariaLabel} className={className}>
        <div className="flex flex-wrap gap-6 justify-center">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      aria-label={ariaLabel}
      className={`relative overflow-hidden ${className}`}
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
      }}
    >
      <div
        ref={containerRef}
        aria-live="polite"
        aria-roledescription="carousel"
        role="list"
        className="flex w-max"
        onMouseEnter={() => setIsPaused(true)}
        onFocus={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onBlur={() => setIsPaused(false)}
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        <div className="flex gap-5 shrink-0" role="listitem" aria-hidden={false}>
          {children}
        </div>
        {track}
      </div>
    </div>
  );
}
