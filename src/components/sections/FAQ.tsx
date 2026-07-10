"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Do I need to book an appointment in advance?",
    a: "While walk-ins are welcome, we strongly recommend booking ahead to secure your preferred time and artist, especially on weekends and for bridal services. A quick call or WhatsApp message is all it takes."
  },
  {
    q: "What products do you use?",
    a: "We work exclusively with professional-grade brands including Schwarzkopf, L'Oréal Professionnel, Wella, and OPI. Every product is chosen for its performance, safety, and ability to deliver lasting results."
  },
  {
    q: "Do you offer trial sessions for bridal packages?",
    a: "Absolutely. We recommend scheduling your trial at least two to three weeks before your event. This gives us time to perfect your look — from makeup and hair to draping and accessories."
  },
  {
    q: "Is the salon unisex?",
    a: "Yes. Glass Shine is a premium unisex salon. We welcome all clients and offer a full spectrum of services — from precision haircuts and beard grooming to facials, nail art, and bridal makeup."
  },
  {
    q: "Do you offer the Beauty Academy courses?",
    a: "We do. Our academy offers certified courses in hairstyling, makeup artistry, skincare, and nail technology. Programs range from beginner to advanced, with hands-on training and career support."
  },
  {
    q: "What is your cancellation policy?",
    a: "We kindly ask for at least four hours' notice if you need to cancel or reschedule. Late cancellations and no-shows may incur a charge. Bridal and group bookings are subject to separate terms discussed at booking."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <div className="mx-auto px-6 md:px-12 lg:px-20" style={{ maxWidth: 1280 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[35%_60%] gap-16 lg:gap-[120px] items-center">
          {/* ── Left Column ── */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-[30px] h-px bg-[#C9A227]" />
              <span
                className="text-[12px] font-[600] uppercase tracking-[0.25em]"
                style={{ fontFamily: "Manrope, sans-serif", color: "#C9A227" }}
              >
                FAQ
              </span>
            </div>

            <h2
              className="text-[clamp(42px,4vw,64px)] leading-[1.05] tracking-[-0.03em]"
              style={{ fontFamily: "'Cormorant Garamond', ui-serif, Georgia, serif", fontWeight: 400, color: "#F5F3EF" }}
            >
              <span className="block">Everything you were</span>
              <span className="block">
                wondering <span className="italic" style={{ color: "#C9A227" }}>—</span>
              </span>
              <span className="block italic" style={{ color: "#C9A227" }}>
                answered.
              </span>
            </h2>

            <p
              className="mt-8 text-[15px] leading-[1.8] max-w-[380px]"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 400,
                color: "#A0A0A0"
              }}
            >
              Can&rsquo;t find what you&rsquo;re looking for? Reach out — we usually reply within a few hours.
            </p>
          </div>

          {/* ── Right Column ── */}
          <div className="flex flex-col gap-[15px]">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="rounded-[10px] transition-all duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    backgroundColor: "#161616",
                    border: "1px solid #2A2A2A"
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between px-6 md:px-8 py-5 md:py-6 text-left focus:outline-none"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="text-[16px] md:text-[17px] font-[400] leading-[1.4] pr-4"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "#F5F3EF"
                      }}
                    >
                      {faq.q}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="shrink-0 transition-transform duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)]"
                      style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", color: "#888" }}
                    >
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-[0.4s] ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      maxHeight: isOpen ? 300 : 0,
                      opacity: isOpen ? 1 : 0
                    }}
                  >
                    <div className="px-6 md:px-8 pb-5 md:pb-6 pt-0">
                      <div className="w-full h-px mb-4" style={{ backgroundColor: "#2A2A2A" }} />
                      <p
                        className="text-[15px] leading-[1.8]"
                        style={{
                          fontFamily: "Manrope, sans-serif",
                          fontWeight: 400,
                          color: "#A0A0A0"
                        }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
