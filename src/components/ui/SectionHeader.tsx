"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionHeaderProps {
  label: string;
  heading: React.ReactNode;
  ctaText: string;
  ctaHref?: string;
}

export default function SectionHeader({
  label,
  heading,
  ctaText,
  ctaHref = "#",
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".sh-item");
      if (items.length) {
        gsap.fromTo(
          items,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
            },
          },
        );
      }
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="grid md:grid-cols-2 gap-10 items-end">
      {/* Left — Label + Heading */}
      <div>
        <div className="sh-item flex items-center gap-5 mb-7">
          <div className="w-8 h-px bg-[#C9A227]" />
          <span className="text-[#C9A227] text-[12px] font-semibold tracking-[0.25em] uppercase leading-none">
            {label}
          </span>
        </div>

        <h2
          className="sh-item"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontStyle: "normal",
            fontSize: "clamp(42px, 5vw, 78px)",
            letterSpacing: "-0.03em",
            lineHeight: 0.95,
            color: "#F5F3EF",
          }}
        >
          {heading}
        </h2>
      </div>

      {/* Right — CTA */}
      <div className="sh-item flex justify-start md:justify-end pb-1">
        <a
          href={ctaHref}
          className="group relative inline-flex items-center gap-2 no-underline"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          <span
            className="text-[16px] font-medium leading-none"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            {ctaText}
          </span>
          <span
            className="inline-flex items-center transition-transform duration-[350ms] ease-out group-hover:translate-x-1.5"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-px bg-white/20 transition-all duration-[350ms] ease-out group-hover:bg-white/60" />
        </a>
      </div>
    </div>
  );
}
