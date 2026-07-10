"use client";

export default function FooterBrand() {
  return (
    <div>
      {/* Label */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-6 h-px bg-[#C9A227]" />
        <span
          className="text-[#C9A227] text-[12px] font-semibold uppercase tracking-[0.25em] leading-none"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          STAY IN THE MIRROR
        </span>
      </div>

      {/* Logo */}
      <h2
        className="text-[#F5F3EF] font-light leading-[0.9] tracking-[-0.05em]"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(90px, 7vw, 150px)",
        }}
      >
        <span className="logo-word inline-block">Glass </span>
        <span className="logo-word inline-block italic text-[#C9A227]">
          Shine.
        </span>
      </h2>
    </div>
  );
}
