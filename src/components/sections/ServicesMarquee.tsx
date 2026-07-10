"use client";

import { useEffect, useState } from "react";
// Ignore missing style module type declarations in TS build
// @ts-ignore
import "./ServicesMarquee.css";

const salonServices = [
  "Haircut & Styling",
  "Hair Colouring",
  "Hair Spa",
  "Hair Smoothening",
  "Keratin Treatment",
  "Hair Botox",
  "Scalp Treatment",
  "Bridal Makeup",
  "Party Makeup",
  "HD Makeup",
  "Airbrush Makeup",
  "Facial Treatments",
  "Hydra Facial",
  "Clean-Up",
  "De-Tan Therapy",
  "Skin Polishing",
  "Manicure",
  "Pedicure",
  "Nail Extensions",
  "Nail Art",
  "Eyebrow Shaping",
  "Eyelash Extensions",
  "Threading",
  "Waxing",
  "Body Polishing",
  "Spa Therapy",
  "Head Massage",
  "Bridal Packages",
  "Salon Academy",
];

function ServiceItem({
  service,
  onHover,
}: {
  service: string;
  onHover: (hover: boolean) => void;
}) {
  return (
    <span
      className="group flex items-center shrink-0 cursor-default"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <span className="service-text">{service}</span>

      <span className="separator" aria-hidden="true">
        ◆
      </span>
    </span>
  );
}

function ServiceList({
  onHover,
}: {
  onHover: (hover: boolean) => void;
}) {
  return (
    <div className="flex items-center shrink-0">
      {salonServices.map((service) => (
        <ServiceItem
          key={service}
          service={service}
          onHover={onHover}
        />
      ))}
    </div>
  );
}

export default function ServicesMarquee() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    setReducedMotion(mq.matches);

    const handler = (e: MediaQueryListEvent) =>
      setReducedMotion(e.matches);

    mq.addEventListener("change", handler);

    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section
      className="relative overflow-hidden border-y border-white/5"
      style={{
        height: "clamp(180px,22vw,220px)",
      }}
    >
      {/* Edge Fade */}

      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
        }}
      />

      <div className="relative flex h-full items-center overflow-hidden">
        {reducedMotion ? (
          <div className="flex flex-wrap justify-center gap-8 px-6">
            {salonServices.map((service) => (
              <span key={service} className="service-text">
                {service}
              </span>
            ))}
          </div>
        ) : (
          <div
            className="flex whitespace-nowrap"
            style={{
              animation: "marquee-right 80s linear infinite",
              animationPlayState: isPaused ? "paused" : "running",
              willChange: "transform",
            }}
          >
            <ServiceList onHover={setIsPaused} />
            <ServiceList onHover={setIsPaused} />
          </div>
        )}
      </div>
    </section>
  );
}