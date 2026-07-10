"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  id?: string;
}

export default function SectionHeading({
  tag,
  title,
  highlight,
  subtitle,
  id,
}: SectionHeadingProps) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <ScrollReveal className="mb-20 ">
      {tag && (
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-px bg-[#C9A227]" />
          <span
            className="uppercase tracking-[0.28em] text-xs font-semibold"
            style={{
              fontFamily: "Manrope, sans-serif",
              color: "#C9A227",
            }}
          >
            {tag}
          </span>
        </div>
      )}

      <h2
        id={id}
        className="max-w-5xl leading-[0.95] tracking-[-0.04em]"
        style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontWeight: 300,
          fontSize: "clamp(42px, 5vw, 78px)",
          letterSpacing: "-0.03em",
          color: "#F5F3EF",
        }}
      >
        {highlight ? (
          <>
            {parts[0]}
            <span
              style={{
                color: "#C9A227",
                fontStyle: "italic",
              }}
            >
              {highlight}
            </span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {subtitle && (
        <p
          className="mt-6 max-w-2xl text-[17px] leading-relaxed"
          style={{
            fontFamily: '"Cormorant Garamond", ui-serif, Georgia, serif',
            fontWeight: 300,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
