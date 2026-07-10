"use client";

export default function Newsletter() {
  return (
    <div>
      <h4
        className="text-[#C9A227] text-[12px] font-semibold uppercase tracking-[0.25em] leading-none mb-5"
        style={{ fontFamily: "'Manrope', sans-serif" }}
      >
        NEWSLETTER
      </h4>
      <div className="w-6 h-px bg-[#C9A227]/80 mb-8" />

      <p
        className="text-[17px] font-normal leading-[1.7] text-[rgba(255,255,255,0.72)] mb-8 max-w-[260px]"
        style={{ fontFamily: "'Manrope', sans-serif" }}
      >
        First access to bridal seasons, new services and academy intakes.
      </p>

      <div className="group relative">
        <input
          type="email"
          placeholder="your@email.com"
          className="w-full bg-transparent text-[17px] font-normal text-white/80 placeholder:text-[rgba(255,255,255,0.45)] pb-[18px] pr-9 border-b border-[rgba(255,255,255,0.18)] outline-none transition-all duration-300 ease-out focus:border-[#C9A227] group-hover:border-[#C9A227]"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        />
        <button
          aria-label="Subscribe"
          className="absolute right-0 bottom-[14px] text-[rgba(255,255,255,0.45)] transition-all duration-300 ease-out group-hover:text-[#C9A227] group-hover:translate-x-[4px]"
        >
          <svg
            className="w-[18px] h-[18px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </button>
      </div>
    </div>
  );
}
