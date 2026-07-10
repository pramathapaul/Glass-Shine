"use client";

const processSteps = [
  { id: 1, number: "01", title: "Consultation", description: "A relaxed one-on-one to understand your hair, skin and lifestyle." },
  { id: 2, number: "02", title: "Curation", description: "Your artist curates a bespoke look using premium products and techniques." },
  { id: 3, number: "03", title: "Craft", description: "Executed with precision by senior artists using world-class products." },
  { id: 4, number: "04", title: "After Care", description: "Personalised home-care routine, follow-up scheduling and loyalty rewards." }
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0B0B0B" }}
    >
      <div
        className="mx-auto px-6 md:px-12 lg:px-20 py-[140px]"
        style={{ maxWidth: 1440 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 lg:gap-[120px] items-start">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-[30px] h-px bg-[#C9A227]" />
              <span className="font-['Cormorant Garamond', ui-serif, Georgia, serif] text-[12px] font-[600] uppercase tracking-[0.25em] text-[#C9A227]">
                THE RITUAL
              </span>
            </div>

            <h2 className="font-['Cormorant_Garamond',serif] font-[300] text-[42px] md:text-[58px] lg:text-[clamp(62px,5vw,82px)] leading-[0.92] tracking-[-0.04em] text-[#F5F3EF]">
              <span className="block">Four steps.</span>
              <span className="block">
                <span className="italic text-[#C9A227]">One</span>{" "}
                <span className="italic text-[#C9A227]">unforgettable</span>
              </span>
              <span className="block">experience.</span>
            </h2>

            <p
              className="mt-12 font-['Cormorant Garamond', ui-serif, Georgia, serif] text-[18px] font-[400] leading-[1.75] text-[rgba(255,255,255,.70)]"
              style={{ maxWidth: 430 }}
            >
              From the moment you arrive, every detail is considered. We believe in the power of ritual transforming routine into something extraordinary through intention, craft and care.
            </p>
          </div>

          <div>
            <div className="rounded-[24px] overflow-hidden border border-[rgba(255,255,255,.08)]">
              {processSteps.map((step) => (
                <div key={step.id} className="group process-row flex items-start p-6 lg:p-10 lg:h-[150px] border-b border-[rgba(255,255,255,.08)] last:border-b-0 transition-all duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[rgba(255,255,255,.02)] hover:border-[rgba(255,255,255,.12)]">
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
