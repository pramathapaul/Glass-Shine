"use client";

const links = ["About", "Services", "Portfolio", "Pricing", "FAQ"];

export default function FooterLinks() {
  return (
    <div>
      <h4
        className="text-[#C9A227] text-[12px] font-semibold uppercase tracking-[0.25em] leading-none mb-5"
        style={{ fontFamily: "'Manrope', sans-serif" }}
      >
        EXPLORE
      </h4>
      <div className="w-6 h-px bg-[#C9A227]/80 mb-8" />

      <ul className="flex flex-col gap-[18px]">
        {links.map((link) => (
          <li key={link}>
            <a
              href={link === "Home" ? "#hero" : `#${link.toLowerCase()}`}
              className="group inline-block text-[18px] font-normal text-[rgba(255,255,255,0.82)] transition-all duration-300 ease-out hover:text-[#C9A227] hover:translate-x-[6px]"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
