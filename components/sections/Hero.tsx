"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ──────────────────────────────────────────
   Line reveal wrapper
   ────────────────────────────────────────── */
function LineReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ──────────────────────────────────────────
   Fade-up wrapper
   ────────────────────────────────────────── */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────
   Star rating component
   ────────────────────────────────────────── */
function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars" role="img">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className="w-3 h-3 text-[#C9A227]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────
   Hero section
   ────────────────────────────────────────── */
export default function Hero() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const zoom = reducedMotion ? {} : { scale: [1, 1.06] as [number, number] };

  return (
    <section id="hero" className="relative min-h-screen md:h-screen bg-[#121212]">
      {/* ── Background ── */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={zoom}
          transition={{ duration: 10, ease: "easeOut" }}
          style={{ willChange: "transform" }}
        >
          <img
            src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            fetchPriority="high"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 min-h-screen md:min-h-0 md:h-full flex flex-col overflow-y-auto">
        {/* spacer matches navbar height (h-16 = 64px, md: mt-6 + h-[88px] = 112px) */}
        <div className="h-16 md:h-28" />

        {/* ── Main content area (vertically centered) ── */}
        <div className="flex-1 flex items-center">
          <div className="w-full pl-6 sm:pl-10 lg:pl-20 xl:pl-[80px] pr-6 sm:pr-10">
            <div className="max-w-[1100px] mx-auto">
              {/* Gold label + thin line */}
              <FadeUp delay={reducedMotion ? 0 : 0.3}>
                <div className="flex items-center gap-5 mb-10 md:mb-14">
                  <span
                    className="text-[#C9A227] text-[11px] uppercase tracking-[0.25em] font-medium"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Premium Salon &amp; Academy
                  </span>
                  <div className="w-10 h-px bg-[#C9A227]/60" aria-hidden="true" />
                </div>
              </FadeUp>

              {/* Headline — 3 lines, line-by-line reveal */}
              <div className="space-y-2 md:space-y-3">
                <LineReveal delay={reducedMotion ? 0 : 0.6}>
                  <h1
                    className="font-light leading-[0.95] tracking-[-0.03em] text-[#FDFBF7]"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(40px, 8vw, 128px)",
                    }}
                  >
                    Where every strand,
                  </h1>
                </LineReveal>

                <LineReveal delay={reducedMotion ? 0 : 1.0}>
                  <h1
                    className="font-light leading-[0.95] tracking-[-0.03em] text-[#FDFBF7]"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(40px, 8vw, 128px)",
                    }}
                  >
                    every stroke —
                  </h1>
                </LineReveal>

                <LineReveal delay={reducedMotion ? 0 : 1.4}>
                  <h1
                    className="font-light leading-[0.95] tracking-[-0.03em]"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(40px, 8vw, 128px)",
                    }}
                  >
                    <span className="text-[#FDFBF7]">shines </span>
                    <span
                      className="text-[#C9A227] italic font-medium"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      by design.
                    </span>
                  </h1>
                </LineReveal>
              </div>

              {/* Supporting text */}
              <FadeUp delay={reducedMotion ? 0 : 1.9}>
                <p
                  className="mt-10 md:mt-12 text-base md:text-lg text-[#FDFBF7]/60 leading-relaxed font-light"
                  style={{ maxWidth: "500px", fontFamily: "Inter, sans-serif" }}
                >
                  A quiet cinematic destination where beauty meets craftsmanship —
                  created by experienced artists using only the finest global products.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>

        {/* ── CTAs — lower-right area ── */}
        <div className="pl-6 sm:pl-10 lg:pl-20 xl:pl-[80px] pr-6 sm:pr-10 pb-8 md:pb-12">
          <div className="max-w-[1100px] mx-auto flex justify-end">
            <div className="flex items-center gap-6">
              <FadeUp delay={reducedMotion ? 0 : 2.2}>
                <a
                  href={`tel:${"08777025057"}`}
                   className="group inline-flex items-center gap-3 px-5 md:px-8 py-3.5 bg-[#C9A227] text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-[#b8921f] hover:-translate-y-0.5 shadow-lg shadow-[#C9A227]/20"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <span>Book an Appointment</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </FadeUp>

              <FadeUp delay={reducedMotion ? 0 : 2.4}>
                <a
                  href="#portfolio"
                  className="text-sm text-white/50 hover:text-white/90 transition-colors duration-300 underline underline-offset-4 decoration-white/20 hover:decoration-white/60"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  View Portfolio
                </a>
              </FadeUp>
            </div>
          </div>
        </div>

        {/* ── Bottom divider ── */}
        <div className="border-t border-white/10" />

        {/* ── Bottom info bar ── */}
        <FadeUp delay={reducedMotion ? 0 : 2.8}>
          <div className="pl-6 sm:pl-10 lg:pl-20 xl:pl-[80px] pr-6 sm:pr-10 py-4">
            <div className="max-w-[1100px] mx-auto">
              <div className="flex items-center justify-between md:justify-start gap-4 md:gap-10 text-[11px] uppercase tracking-[0.15em] text-white/40 flex-wrap">
                <div className="flex items-center gap-2">
                  <Stars />
                  <span className="font-medium text-white/60">4.9</span>
                  <span className="hidden sm:inline">· 379 Reviews</span>
                </div>

                <div className="w-px h-4 bg-white/10" aria-hidden="true" />

                <span>Mon–Sat 10:30AM–9PM</span>

                <div className="w-px h-4 bg-white/10" aria-hidden="true" />

                <span className="hidden md:inline">Barasat, Kolkata</span>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
