"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import ServiceModal from "@/components/ui/ServiceModal";
import { servicesData, type ServiceItem } from "@/lib/serviceData";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null,
  );

  const openModal = useCallback((service: ServiceItem) => {
    setSelectedService(service);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedService(null);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" },
      );

      const cards = gsap.utils.toArray<HTMLElement>(".service-card");
      if (cards.length) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cards[0].parentElement,
              start: "top 80%",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id="services"
        ref={sectionRef}
        className="relative overflow-hidden"
        style={{ backgroundColor: "#0B0B0B", fontFamily: "Cormorant Garamond, ui-serif, Georgia, serif" }}
        
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-[140px] pb-[120px]">
          <SectionHeader
            label="SERVICES"
            heading={
              <>
                Twenty rituals.
                <br />
                <span style={{ color: "#C9A227", fontStyle: "italic" }}>
                  One
                </span>{" "}
                uncompromising standard.
              </>
            }
            ctaText="Book any service"
            ctaHref="#contact"
          />

          <div className="mt-15 md:mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onClick={() => openModal(service)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceModal service={selectedService} onClose={closeModal} />
      )}
    </>
  );
}
