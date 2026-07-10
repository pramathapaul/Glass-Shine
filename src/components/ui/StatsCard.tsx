"use client";

export interface StatData {
  number: number;
  goldSuffix?: string;
  subheading: string;
  caption: string;
}

const defaultStats: StatData[] = [
  { number: 4.9, subheading: "Google Rating", caption: "379+ REVIEWS" },
  { number: 15000, goldSuffix: "+", subheading: "Happy Guests", caption: "SINCE 2019" },
  { number: 20, goldSuffix: "+", subheading: "Signature Services", caption: "HAIR · SKIN · NAILS" },
  { number: 6, goldSuffix: "yrs", subheading: "Of Craft", caption: "IN BARASAT" },
];

interface StatsCardProps {
  data?: StatData[];
}

export default function StatsCard({ data = defaultStats }: StatsCardProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 rounded-[24px] border border-white/[.08] overflow-hidden">
      {data.map((stat, i) => (
        <div
          key={i}
          className="stat-card group relative flex flex-col items-start justify-center p-6 md:p-10 lg:p-12 min-h-[160px] lg:min-h-[220px] transition-all duration-[350ms] ease-out hover:-translate-y-1.5"
        >
          {/* Vertical divider — mobile 2-col */}
          {i % 2 === 1 && (
            <div className="absolute left-0 top-0 w-px h-full bg-white/[.06] lg:hidden group-hover:bg-white/[.15] transition-colors duration-[350ms]" />
          )}
          {/* Vertical divider — desktop 4-col */}
          {i > 0 && (
            <div className="absolute left-0 top-0 w-px h-full bg-white/[.06] hidden lg:block group-hover:bg-white/[.15] transition-colors duration-[350ms]" />
          )}

          <div className="stat-content">
            <span
              className="stat-number block leading-none"
              data-value={stat.number}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(48px, 6vw, 72px)",
                color: "#F5F3EF",
              }}
            >
              <span className="num">0</span>
              {stat.goldSuffix && (
                <span className="suffix text-[#C9A227]">{stat.goldSuffix}</span>
              )}
            </span>
            <p
              className="mt-2"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "22px",
                fontWeight: 300,
                color: "#F5F3EF",
                lineHeight: 1.2,
              }}
            >
              {stat.subheading}
            </p>
            <p
              className="mt-3 font-sans text-[13px] tracking-[0.18em] uppercase"
              style={{ color: "rgba(255,255,255,0.32)" }}
            >
              {stat.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
