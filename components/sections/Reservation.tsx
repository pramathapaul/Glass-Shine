"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Calendar from "./Calendar";
import ReservationForm from "./ReservationForm";

gsap.registerPlugin(ScrollTrigger);

export default function Reservation() {
  const sectionRef = useRef<HTMLElement>(null);
  const goldLineRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headingLinesRef = useRef<(HTMLSpanElement | null)[]>([]);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });

      tl.from(sectionRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, 0);

      tl.from([goldLineRef.current, labelRef.current], {
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out"
      }, 0.3);

      tl.from(headingLinesRef.current.filter(Boolean), {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: "power3.out"
      }, 0.5);

      tl.from(descriptionRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out"
      }, 0.95);

      tl.from(calendarRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, 1.1);

      tl.from(formRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, 1.25);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const setHeadingRef = (el: HTMLSpanElement | null, index: number) => {
    headingLinesRef.current[index] = el;
  };

  return (
    <section
      id="reservation"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0B0B0B" }}
    >
      <div
        className="mx-auto px-6 md:px-12 lg:px-20 py-[140px]"
        style={{ maxWidth: 1440 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-16 lg:gap-[120px] items-start">
          {/* Left Column */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div ref={goldLineRef} className="w-[30px] h-px bg-[#C9A227]" />
              <span
                ref={labelRef}
                className="font-['Manrope',sans-serif] text-[12px] font-[600] uppercase tracking-[0.25em] text-[#C9A227]"
              >
                — RESERVATION
              </span>
            </div>

            <h2 className="font-['Cormorant_Garamond',serif] font-[300] text-[42px] md:text-[56px] lg:text-[clamp(64px,5vw,84px)] leading-[0.92] tracking-[-0.04em] text-[#F5F3EF]">
              <span ref={(el) => setHeadingRef(el, 0)} className="block">
                Reserve your
              </span>
              <span ref={(el) => setHeadingRef(el, 1)} className="block">
                <span className="italic text-[#C9A227]">seat</span> at the
              </span>
              <span ref={(el) => setHeadingRef(el, 2)} className="block">
                mirror.
              </span>
            </h2>

            <p
              ref={descriptionRef}
              className="font-['Manrope',sans-serif] text-[18px] font-[400] leading-[1.8] text-[rgba(255,255,255,.72)] mt-10"
              style={{ maxWidth: 460 }}
            >
              Choose your date, service and preferred artist.
              We&rsquo;ll confirm your reservation on WhatsApp within a few hours.
            </p>

            <div ref={calendarRef} className="mt-16">
              <Calendar
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate}
              />
            </div>
          </div>

          {/* Right Column */}
          <div ref={formRef} className="w-full" style={{ maxWidth: 700 }}>
            <div
              className="rounded-[24px] p-10 md:p-12"
              style={{
                backgroundColor: "#121212",
                border: "1px solid rgba(255,255,255,.08)"
              }}
            >
              <ReservationForm selectedDate={selectedDate} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
