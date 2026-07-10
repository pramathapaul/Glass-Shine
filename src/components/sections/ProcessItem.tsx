"use client";

import { type ProcessStep } from "@/lib/processData";

interface ProcessItemProps {
  step: ProcessStep;
}

export default function ProcessItem({ step }: ProcessItemProps) {
  return (
    <div className="group process-row flex items-start p-6 lg:p-10 max-lg:min-h-[150px] lg:h-[150px] border-b border-[rgba(255,255,255,.08)] last:border-b-0 transition-all duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[rgba(255,255,255,.02)] hover:border-[rgba(255,255,255,.12)]">
      <div className="w-[90px] shrink-0">
        <span className="block font-['Cormorant_Garamond',serif] font-[300] text-[48px] text-[#C9A227] leading-none transition-all duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[6px]">
          {step.number}
        </span>
      </div>
      <div className="min-w-0">
        <h3 className="font-['Cormorant_Garamond',serif] font-[300] text-[clamp(28px,3.5vw,42px)] text-[#F5F3EF] leading-[1] transition-colors duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#C9A227]">
          {step.title}
        </h3>
        <p className="mt-1.5 font-['Manrope',sans-serif] text-[clamp(14px,1.4vw,17px)] font-[400] leading-[1.7] text-[rgba(255,255,255,.65)] max-w-[520px] transition-all duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[rgba(255,255,255,.85)]">
          {step.description}
        </p>
      </div>
    </div>
  );
}
