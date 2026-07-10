"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import type { ServiceItem } from "@/lib/serviceData";

interface ServiceModalProps {
  service: ServiceItem;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  /* ── Mount detection for portal ── */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* ── Save focus & lock scroll ── */
  useEffect(() => {
    previousFocusRef.current = document.activeElement;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      if (
        previousFocusRef.current &&
        previousFocusRef.current instanceof HTMLElement
      ) {
        previousFocusRef.current.focus();
      }
    };
  }, []);

  /* ── GSAP entrance ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.45, ease: "power3.out" },
        0,
      );

      tl.fromTo(
        modalRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" },
        0,
      );

      tl.fromTo(
        imageRef.current,
        { scale: 1 },
        { scale: 1.04, duration: 4, ease: "none" },
        0.3,
      );

      const contentItems = gsap.utils.toArray<HTMLElement>(".mc-item");
      tl.fromTo(
        contentItems,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out",
        },
        0.15,
      );
    });

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── Close handler ── */
  const handleClose = useCallback(() => {
    gsap.killTweensOf([
      overlayRef.current,
      modalRef.current,
      imageRef.current,
    ]);

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });
    gsap.to(modalRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: onClose,
    });
  }, [onClose]);

  /* ── Keyboard ── */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        handleClose();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [handleClose],
  );

  const content = (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor: "rgba(0,0,0,0.78)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
      onClick={(e) => {
        if (e.target === overlayRef.current) handleClose();
      }}
      onKeyDown={handleKeyDown}
    >
      {/* ── Modal ── */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label={service.title}
        className="relative w-full max-w-[920px] flex flex-col md:flex-row overflow-hidden rounded-[24px]"
        style={{
          maxHeight: "90vh",
          backgroundColor: "#111111",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 40px 100px rgba(0,0,0,0.45)",
        }}
      >
        {/* ── Close Button ── */}
        <button
          ref={closeBtnRef}
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 z-20 flex items-center justify-center w-[35px] h-[35px] rounded-full transition-all duration-[350ms] ease-out hover:border-[#C9A227] hover:text-[#C9A227]"
          style={{ border: "1px solid #C9A227", color: "rgba(255,255,255,0.6)" }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
          </svg>
        </button>

        {/* ── Left: Image ── */}
        <div
          ref={imageRef}
          className="relative w-full md:w-[45%] h-[240px] md:h-auto overflow-hidden md:rounded-l-[24px]"
        >
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ willChange: "transform" }}
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = "none";
            }}
          />
        </div>

        {/* ── Right: Content ── */}
        <div
          ref={contentRef}
          className="relative w-full md:w-[55%] overflow-y-auto p-8 md:p-10"
        >
          {/* Category */}
          <p className="mc-item text-[#C9A227] text-[10px] font-semibold tracking-[0.25em] uppercase leading-none mb-5">
            {service.category}
          </p>

          {/* Title */}
          <h2
            className="mc-item leading-none mb-7"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(35px, 3vw, 43px)",
              letterSpacing: "-0.03em",
              color: "#F5F3EF",
            }}
          >
            {service.title}
          </h2>

          {/* Description */}
          <p
            className="mc-item"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "13px",
              fontWeight: 400,
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.72)",
              maxWidth: "420px",
            }}
          >
            {service.modalDesc}
          </p>

          {/* Info Rows */}
          <div className="mc-item flex flex-wrap gap-x-5 gap-y-3 mt-5">
            {[
              { label: "Duration", value: service.duration },
              { label: "Recommended For", value: "All Hair & Skin Types" },
              { label: "Products Used", value: "L'Oréal · Kérastase · Olaplex" },
            ].map((info) => (
              <div key={info.label}>
                <p className="text-[9px] tracking-[0.15em] uppercase font-medium"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {info.label}
                </p>
                <p
                  className="mt-1 text-[14px]"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    color: "rgba(255,255,255,0.7)",
                    fontWeight: 400,
                  }}
                >
                  {info.value}
                </p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="mc-item flex flex-wrap gap-2 mt-5">
            {service.benefits.map((b) => (
              <span
                key={b}
                className="text-[10px] tracking-[0.1em] uppercase leading-none px-3 py-2 rounded-full"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                {b}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="mc-item w-full h-px my-8" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />

          {/* Price + CTA */}
          <div className="mc-item flex items-end justify-between gap-6">
            <div>
              <p
                className="text-[11px] tracking-[0.2em] uppercase"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                Starting at
              </p>
              <p
                className="mt-1 leading-none"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(25px, 3vw, 35px)",
                  color: "#C9A227",
                }}
              >
                {service.price}
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                setTimeout(() => {
                  document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
              className="inline-flex items-center gap-3 px-8 h-[50px] rounded-full transition-all duration-[350ms] ease-out hover:-translate-y-0.5"
              style={{
                backgroundColor: "#C9A227",
                color: "#111111",
                fontFamily: "'Manrope', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                boxShadow: "0 10px 30px rgba(201,162,39,0.25)",
              }}
            >
              Book this service
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (!mounted) return null;
  return createPortal(content, document.body);
}
