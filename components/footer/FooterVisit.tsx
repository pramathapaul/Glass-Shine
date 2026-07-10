"use client";

import { BUSINESS } from "@/lib/constants";

export default function FooterVisit() {
  return (
    <div>
      <h4
        className="text-[#C9A227] text-[12px] font-semibold uppercase tracking-[0.25em] leading-none mb-5"
        style={{ fontFamily: "'Manrope', sans-serif" }}
      >
        VISIT
      </h4>
      <div className="w-6 h-px bg-[#C9A227]/80 mb-8" />

      <div className="flex flex-col gap-[18px]">
        <p
          className="text-[17px] font-normal leading-[1.7] text-[rgba(255,255,255,0.72)] max-w-[260px]"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          1, 41/A/8, Mitra Para Rd,
          <br />
          near Dukbanglow,
          <br />
          Barasat, Kolkata 700124
        </p>

        <a
          href={`tel:${BUSINESS.phone}`}
          className="text-[17px] font-semibold text-white transition-colors duration-300 hover:text-[#C9A227]"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          +91 87770 25057
        </a>

        <p
          className="text-[13px] font-normal uppercase tracking-[0.18em] text-[rgba(255,255,255,0.45)]"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          10:30 AM — 9:00 PM
        </p>
      </div>
    </div>
  );
}
