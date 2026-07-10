"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FooterBrand from "@/components/footer/FooterBrand";
import SocialIcons from "@/components/footer/SocialIcons";
import FooterLinks from "@/components/footer/FooterLinks";
import FooterVisit from "@/components/footer/FooterVisit";
import Newsletter from "@/components/footer/Newsletter";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        if (logoRef.current) {
          const words = logoRef.current.querySelectorAll<HTMLElement>(".logo-word");
          tl.fromTo(
            logoRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          );
          if (words.length) {
            tl.fromTo(
              words,
              { y: "100%", opacity: 0 },
              { y: "0%", opacity: 1, duration: 0.7, stagger: 0.15, ease: "power2.out" },
              0.15,
            );
          }
        }

        if (columnsRef.current) {
          const cols = columnsRef.current.children;
          tl.fromTo(
            cols,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: "power2.out" },
            0.35,
          );
        }

        if (bottomRef.current) {
          tl.fromTo(
            bottomRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
            0.7,
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="relative bg-[#0B0B0B] text-white overflow-hidden"
    >
      {/* Border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[rgba(255,255,255,0.06)]" />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-[120px] pb-[60px]">
        {/* ── Top brand block ── */}
        <div ref={logoRef}>
          <FooterBrand />
        </div>

        {/* Spacer */}
        <div className="h-[150px] md:h-[180px]" />

        {/* ── Four-column grid ── */}
        <div
          ref={columnsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[64px] lg:gap-[80px] items-start"
        >
          {/* Column 1 — Description + Social */}
          <div className="lg:col-span-4">
            <p
              className="text-[18px] font-normal leading-[1.8] text-[rgba(255,255,255,0.72)] max-w-[420px] mb-9"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              A cinematic unisex salon and beauty academy in the heart of Barasat, Kolkata. Curating
              rituals for those who value the craft.
            </p>
            <SocialIcons />
          </div>

          {/* Column 2 — Explore */}
          <div className="lg:col-span-2">
            <FooterLinks />
          </div>

          {/* Column 3 — Visit */}
          <div className="lg:col-span-3">
            <FooterVisit />
          </div>

          {/* Column 4 — Newsletter */}
          <div className="lg:col-span-3">
            <Newsletter />
          </div>
        </div>

        {/* ── Bottom divider ── */}
        <div className="mt-20 w-full h-px bg-[rgba(255,255,255,0.06)]" />

        {/* ── Bottom bar ── */}
        <div
          ref={bottomRef}
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[14px] text-[rgba(255,255,255,0.42)]"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          <span>&copy; 2026 Glass Shine. All Rights Reserved.</span>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-[#C9A227]"
            >
              Privacy Policy
            </a>
            <span className="text-[rgba(255,255,255,0.15)]">/</span>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-[#C9A227]"
            >
              Terms
            </a>
            <span className="text-[rgba(255,255,255,0.15)]">/</span>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-[#C9A227]"
            >
              Designed by Glass Shine
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
