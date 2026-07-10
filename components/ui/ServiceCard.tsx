"use client";
 
import type { ServiceItem } from "@/lib/serviceData";

interface ServiceCardProps {
  service: ServiceItem;
  onClick: () => void;
}

export default function ServiceCard({ service, onClick }: ServiceCardProps) {
  return (
    <div
      className="service-card group relative cursor-pointer overflow-hidden rounded-[24px] border border-white/[.08] hover:border-white/[.15] transition-all duration-[700ms] ease-out hover:-translate-y-2.5"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(); } }}
      style={{
        height: "530px",
        backgroundColor: "#111111",
      }}
    >
      {/* ── Image ── */}
      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
        className="service-image absolute inset-0 w-full h-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.08]"
        style={{ willChange: "transform" }}
        onError={(e) => {
          (e.currentTarget as HTMLElement).style.display = "none";
        }}
      />

      {/* ── Gradient Overlay ── */}
      <div
        className="absolute inset-0 transition-opacity duration-[700ms] ease-out group-hover:opacity-110"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,.25) 45%, rgba(0,0,0,.85) 100%)",
        }}
      />

      {/* ── Top Label ── */}
      <div className="absolute top-6 left-6 z-10">
        <span className="text-[#C9A227] text-[12px] font-semibold tracking-[0.25em] uppercase leading-none">
          {service.category}
        </span>
      </div>

      {/* ── Top Right Arrow Button ── */}
      <div className="absolute top-6 right-6 z-10">
        <div
          className="flex items-center justify-center w-[44px] h-[44px] rounded-full transition-all duration-[350ms] ease-out group-hover:bg-[#C9A227] group-hover:rotate-45"
          style={{ border: "1px solid rgba(255,255,255,0.15)" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-all duration-[350ms] ease-out group-hover:stroke-black"
            style={{ stroke: "rgba(255,255,255,0.7)" }}
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              strokeWidth="1.2"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* ── Bottom Content ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8">
        <div className="flex items-end justify-between gap-4">
          {/* Left */}
          <div className="flex-1 min-w-0">
            <h3
              className="text-[30px] leading-[1.1] transition-colors duration-[700ms] ease-out group-hover:text-white"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                color: "#F5F3EF",
              }}
            >
              {service.title}
            </h3>
            <p
              className="mt-2 line-clamp-2"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "17px",
                fontWeight: 400,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.70)",
              }}
            >
              {service.shortDesc}
            </p>
          </div>

          {/* Right — Price */}
          <span
            className="shrink-0 text-right"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "17px",
              fontWeight: 500,
              color: "#C9A227",
            }}
          >
            {service.price}
          </span>
        </div>
      </div>
    </div>
  );
}
