"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, { y: -20, duration: 0.6, ease: "power2.out" });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!linksRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(linksRef.current!.children, {
        y: -12, duration: 0.4, stagger: 0.05, delay: 0.3, ease: "power2.out",
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [mobileOpen]);

  const linkClasses =
    "relative text-sm leading-none text-white/75 hover:text-white transition-all duration-300 tracking-[0.02em] font-normal " +
    "py-2 " +
    "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-[#C9A227] " +
    "after:transition-all after:duration-300 hover:after:w-full " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-2 sm:px-4">
      {/* ── Nav bar ── */}
      <div
        ref={navRef}
        className={`
          w-full 
          max-w-[1440px]
          h-14 xs:h-16 sm:h-[72px] md:h-20
          flex items-center justify-between
          px-3 xs:px-4 sm:px-6 md:px-8
          mt-2 xs:mt-3 sm:mt-4 md:mt-4 lg:mt-5
          md:rounded-full md:mx-0
          transition-all duration-500 ease-out
          ${scrolled
            ? "bg-[rgba(18,18,18,0.88)] backdrop-blur-[20px] md:border md:border-white/[0.07] shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
            : "bg-[rgba(18,18,18,0.3)] backdrop-blur-[6px] md:border md:border-white/[0.05]"
          }
        `}
      >
        {/* ── Logo ── */}
        <a
          href="#hero"
          className="flex flex-col shrink-0 min-w-[80px] xs:min-w-[100px]"
          aria-label={`${BUSINESS.name} — Back to home`}
        >
          <span
            className="text-base xs:text-lg sm:text-xl md:text-2xl font-light tracking-tight leading-none"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <span className="text-[#FDFBF7]">Glass </span>
            <span className="text-[#E0B016]">Shine</span>
          </span>
          <span className="text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] text-white/50 font-light tracking-[0.15em] xs:tracking-[0.2em] uppercase leading-none mt-[2px] xs:mt-[3px] whitespace-nowrap">
            {BUSINESS.tagline}
          </span>
        </a>

        {/* ── Desktop nav ── */}
        <div
          ref={linksRef}
          className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-8 2xl:gap-10"
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={linkClasses}>
              {link.label}
            </a>
          ))}
        </div>

        {/* ── Right ── */}
        <div className="flex items-center gap-2 xs:gap-3 md:gap-4 shrink-0">
          <a
            href={`tel:${BUSINESS.phone}`}
            className="hidden sm:flex items-center gap-1.5 lg:gap-2 text-xs lg:text-sm leading-none text-white/70 hover:text-white transition-all duration-300 tracking-[0.02em] font-normal whitespace-nowrap"
            aria-label={`Call ${BUSINESS.shortName} at ${BUSINESS.phone}`}
          >
            <svg className="w-3 h-3 lg:w-3.5 lg:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span className="hidden lg:inline">{BUSINESS.phone}</span>
            <span className="lg:hidden">{BUSINESS.phone || BUSINESS.phone}</span>
          </a>

          <a
            href="#reservation"
            className="hidden md:inline-flex group items-center gap-2 lg:gap-2.5 px-3 lg:px-5 py-1.5 lg:py-2
                       border border-white/25 hover:border-[#C9A227]
                       rounded-full
                       text-xs lg:text-sm leading-none text-white/90 hover:text-white
                       bg-transparent hover:bg-[#C9A227]/10
                       transition-all duration-300
                       hover:-translate-y-0.5
                       tracking-[0.02em] font-normal whitespace-nowrap
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            aria-label="Book an appointment"
          >
            <span className="leading-none hidden xl:inline">Book Now</span>
            <span className="leading-none xl:hidden">Book</span>
            <svg
              className="w-3 h-3 lg:w-3.5 lg:h-3.5 transition-transform duration-300 group-hover:translate-x-[3px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>

          {/* ── Hamburger ── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-6 h-6 xs:w-7 xs:h-7 flex items-center justify-center text-white/80 hover:text-white transition-colors duration-200"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            <div className="w-3.5 h-3 xs:w-4 xs:h-3.5 relative">
              <span
                className={`absolute top-0 left-0 w-full h-[1.5px] bg-current rounded-full transition-all duration-300 origin-center ${
                  mobileOpen ? "top-1/2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute top-1/2 -translate-y-1/2 left-0 w-full h-[1.5px] bg-current rounded-full transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-current rounded-full transition-all duration-300 origin-center ${
                  mobileOpen ? "top-1/2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 left-0 w-full h-full z-40 bg-[#0c0c10]/95 backdrop-blur-2xl flex flex-col"
          >
            {/* ── Close button ── */}
            <motion.button
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="absolute top-4 right-4 sm:top-5 sm:right-6 md:top-6 md:right-8 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200 z-50"
              aria-label="Close navigation menu"
            >
              <div className="w-5 h-5 relative">
                <span className="absolute top-1/2 left-0 w-full h-px bg-current rotate-45" />
                <span className="absolute top-1/2 left-0 w-full h-px bg-current -rotate-45" />
              </div>
            </motion.button>

            <div className="flex-1 flex flex-col pt-20 sm:pt-24 pb-8 px-6 sm:px-8 md:px-12 lg:px-16 overflow-y-auto">
              <nav className="flex flex-col gap-3 sm:gap-4" aria-label="Mobile navigation">
                <div className="w-8 h-px bg-[#C9A227]/60 mb-2" />
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.06 * i,
                      duration: 0.35,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="text-xl sm:text-2xl md:text-3xl text-white/70 hover:text-white transition-colors duration-300 font-light tracking-tight"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-auto pt-6"
              >
                <div className="w-full h-px bg-white/5 mb-5" />
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="inline-flex items-center gap-3 text-sm sm:text-base text-white/50 hover:text-white/90 transition-colors duration-300"
                    aria-label={`Call ${BUSINESS.shortName}`}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <span>{BUSINESS.phone}</span>
                  </a>

                  <a
                    href={`tel:${BUSINESS.phone}`}
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4
                               border border-white/20 hover:border-[#C9A227]
                               rounded-full
                               text-sm sm:text-base text-white/90 hover:text-white
                               bg-transparent hover:bg-[#C9A227]/10
                               transition-all duration-300
                               tracking-[0.02em] font-normal"
                    aria-label="Book an appointment"
                  >
                    <span>Book an Appointment</span>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}