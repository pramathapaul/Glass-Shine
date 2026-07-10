"use client";

interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-5 mb-9">
      <div className="w-8 h-px bg-[#C9A227]" />
      <span className="text-[#C9A227] text-[12px] font-semibold tracking-[0.25em] uppercase leading-none">
        {children}
      </span>
    </div>
  );
}
