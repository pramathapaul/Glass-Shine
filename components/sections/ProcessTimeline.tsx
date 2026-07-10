"use client";

import { processSteps } from "@/lib/processData";
import ProcessItem from "./ProcessItem";

export default function ProcessTimeline() {
  return (
    <div className="rounded-[24px] overflow-hidden border border-[rgba(255,255,255,.08)]">
      {processSteps.map((step) => (
        <ProcessItem key={step.id} step={step} />
      ))}
    </div>
  );
}
