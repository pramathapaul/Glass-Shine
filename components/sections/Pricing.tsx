"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { PRICING } from "@/lib/constants";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-rose-gold/3 blur-[200px]" />

      <div className="relative max-w-7xl mx-auto section-padding">
        <SectionHeading
          tag="Investment"
          title="Curated Experiences"
          subtitle="Transparent pricing with no hidden charges. Each tier is thoughtfully designed to deliver exceptional value and unforgettable results."
        />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto mt-16 md:mt-20">
          {PRICING.map((plan, index) => (
            <ScrollReveal key={plan.tier} delay={0.12 * index} direction="up">
              <motion.div
                className={`relative rounded-2xl p-7 md:p-10 border transition-all duration-700 ease-[0.16,1,0.3,1] ${
                  plan.highlighted
                    ? "glass-strong border-primary/20 shadow-[0_4px_24px_rgba(200,165,102,0.08),0_16px_48px_rgba(200,165,102,0.12)] scale-100 md:scale-105 z-10"
                    : "card hover:glass-strong hover:shadow-xl hover:shadow-primary/5"
                }`}
                whileHover={{ y: -8 }}
                style={{ willChange: "transform, box-shadow" }}
              >
                {/* Highlight badge */}
                {plan.highlighted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-semibold tracking-wider uppercase rounded-full shadow-lg shadow-primary/30"
                  >
                    Most Chosen
                  </motion.div>
                )}

                {/* Top accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

                <div className="text-center mb-8 relative">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl font-semibold font-serif text-foreground mb-3 tracking-tight"
                  >
                    {plan.tier}
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="flex items-baseline justify-center gap-1"
                  >
                    <span className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-gradient">
                      {plan.price}
                    </span>
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-xs text-muted self-end pb-1"
                    >
                      {plan.period}
                    </motion.span>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-sm text-muted mt-4 max-w-xs mx-auto font-light"
                  >
                    {plan.description}
                  </motion.p>
                </div>

                {/* Features */}
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4 mb-10"
                >
                  {plan.features.map((feature, fi) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * fi, duration: 0.4 }}
                      className="flex items-start gap-3 text-sm text-foreground/70 leading-relaxed"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.05 * fi + 0.1, type: "spring", stiffness: 400 }}
                        className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5"
                      >
                        <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.a
                    href={`tel:${"08777025057"}`}
                    className={`block w-full text-center py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 ${
                      plan.highlighted
                        ? "btn-primary"
                        : "btn-secondary"
                    }`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.highlighted ? "Select This Plan" : "Choose Plan"}
                  </motion.a>
                </motion.div>

                {/* Bottom accent for highlighted */}
                {plan.highlighted && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                  />
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Note */}
        <ScrollReveal delay={0.5} direction="up" className="mt-16 md:mt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted max-w-2xl mx-auto"
          >
            All prices are starting from. Final pricing determined after consultation. Packages include premium products from Schwarzkopf, L&rsquo;Oréal Professionnel, Wella & OPI. Bridal packages require 50% deposit to secure booking.
          </motion.p>
        </ScrollReveal>
      </div>
    </section>
  );
}