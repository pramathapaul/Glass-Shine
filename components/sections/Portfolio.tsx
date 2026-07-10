"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageReveal from "@/components/ui/ImageReveal";
import { portfolioItems } from "@/lib/portfolioData";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 md:py-32 lg:py-40 overflow-hidden" style={{ fontFamily: "Cormorant Garamond, ui-serif, Georgia, serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Portfolio"
          title="A quiet gallery of recent work."
          highlight="recent work"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {portfolioItems.map((item, index) => (
            <ScrollReveal
              key={item.title}
              delay={0.1 * index}
              className={index === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
            >
              <motion.div
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-auto sm:h-full min-h-[250px] sm:min-h-[300px] bg-[#111] cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="absolute inset-0">
                  <ImageReveal
                    src={item.image}
                    alt={item.title}
                    delay={0.1 * index}
                    cover
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                      <span className="text-5xl md:text-6xl font-serif font-bold text-primary/20">
                        {item.title[0]}
                      </span>
                    </div>
                  </ImageReveal>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-20">
                  <span className="block text-xs text-[#C9A227] font-medium tracking-[0.2em] uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-white mt-1">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
