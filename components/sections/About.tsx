"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import StatsCard from "@/components/ui/StatsCard";

gsap.registerPlugin(ScrollTrigger);

const storyParagraphs = [
  "Founded in 2019 in the heart of Barasat, Glass Shine was born from a simple obsession — that a haircut, a facial, or a bridal look should feel less like a service and more like a ritual.",
  "We are a small team of senior artists trained in international techniques, working exclusively with L'Oréal Professionnel, Wella, Olaplex and Kérastase. Every appointment begins with a conversation. Every look ends with a story you'll want to retell.",
];

const features = ["Cruelty-Free", "Ammonia-Free Colour", "Sanitised Tools"];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade-in
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" },
      );

      // Heading lines stagger
      const headingLines = gsap.utils.toArray<HTMLElement>(".heading-line");
      if (headingLines.length) {
        gsap.fromTo(
          headingLines,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.18,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headingLines[0].parentElement,
              start: "top 80%",
            },
          },
        );
      }

      // Paragraphs stagger
      const paragraphs = gsap.utils.toArray<HTMLElement>(".story-paragraph");
      if (paragraphs.length) {
        gsap.fromTo(
          paragraphs,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.25,
            ease: "power2.out",
            scrollTrigger: {
              trigger: paragraphs[0].parentElement,
              start: "top 75%",
            },
          },
        );
      }

      // Feature items stagger
      const featureEls = gsap.utils.toArray<HTMLElement>(".feature-item");
      if (featureEls.length) {
        gsap.fromTo(
          featureEls,
          { opacity: 0, x: -15 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: featureEls[0],
              start: "top 90%",
            },
          },
        );
      }

      // Stats stagger
      const statCards = gsap.utils.toArray<HTMLElement>(".stat-card");
      if (statCards.length) {
        gsap.fromTo(
          statCards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statCards[0].parentElement,
              start: "top 80%",
            },
          },
        );
      }

      // Count-up numbers
      const statNumbers = gsap.utils.toArray<HTMLElement>(".stat-number");
      statNumbers.forEach((el) => {
        const target = parseFloat(el.dataset.value || "0");
        const numEl = el.querySelector(".num") as HTMLElement | null;
        if (!numEl) return;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          onUpdate: () => {
            const formatted =
              target % 1 === 0
                ? Math.round(obj.val).toString()
                : obj.val.toFixed(1);
            numEl.textContent = formatted;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0B0B0B" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40">
        {/* ── Top Grid ── */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-[120px] items-start">
          {/* ── Left Column ── */}
          <div>
            <SectionLabel>OUR STORY</SectionLabel>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontStyle: "normal",
                fontSize: "clamp(42px, 6vw, 72px)",
                letterSpacing: "-0.03em",
                lineHeight: 0.95,
                color: "#F5F3EF",
              }}
            >
              <span className="heading-line block">A quiet atelier for</span>
              <span className="heading-line block">those who value the</span>
              <span className="heading-line block">
                <span style={{ color: "#C9A227", fontStyle: "italic" }}>
                  craft
                </span>{" "}
                of beauty.
              </span>
            </h2>
          </div>

          {/* ── Right Column ── */}
          <div>
            <div className="space-y-10 max-w-[623px]">
              {storyParagraphs.map((text, i) => (
                <p
                  key={i}
                  className="story-paragraph text-[16px] md:text-[17px] lg:text-[18px] font-normal leading-[1.65] tracking-[-0.02em]"
                  style={{ color: "rgba(255,255,255,0.70)", fontFamily: "'Manrope', ui-sans-serif, system-ui, sans-serif" }}
                >
                  {text}
                </p>
              ))}
            </div>

            {/* ── Feature List ── */}
            <div className="flex flex-wrap gap-x-10 gap-y-3 mt-12">
              {features.map((f) => (
                <span
                  key={f}
                  className="feature-item font-sans text-[12px] tracking-[0.18em] uppercase"
                  style={{ color: "rgba(255,255,255,0.32)" }}
                >
                  • {f}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="mt-24 md:mt-10 lg:mt-20">
          <StatsCard />
        </div>
      </div>
    </section>
  );
}
