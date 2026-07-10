"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ThreeDCard from "@/components/ui/ThreeDCard";
import { TEAM } from "@/lib/constants";

const socialIcons = {
  instagram: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
  ),
  facebook: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  ),
};

export default function Team() {
  const [activeMember, setActiveMember] = useState<number | null>(null);

  return (
    <section id="team" className="relative py-24 md:py-32 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-primary/4 blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-rose-gold/4 blur-[200px]" />

      <div className="relative max-w-7xl mx-auto section-padding">
        <SectionHeading
          tag="Our Artisans"
          title="Masters of Their Craft"
          subtitle="Each member of our team brings years of specialized expertise and a passion for excellence that defines the Glass Shine experience."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-16 md:mt-20">
          {TEAM.map((member, index) => (
            <ScrollReveal key={member.name} delay={0.08 * index} direction="up">
              <ThreeDCard intensity={6}>
                <motion.div
                  className="relative rounded-2xl overflow-hidden card group cursor-pointer"
                  onMouseEnter={() => setActiveMember(index)}
                  onMouseLeave={() => setActiveMember(null)}
                  whileHover={{ y: -8, boxShadow: "0 20px 48px rgba(20,20,28,0.1), 0 8px 24px rgba(20,20,28,0.06)" }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/95 via-[#0B0B0B]/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl md:text-2xl font-bold text-white mb-1"
                        style={{ fontFamily: "'Cormorant Garamond', ui-serif, Georgia, serif" }}
                      >
                        {member.name}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-sm font-medium text-primary-light tracking-wider uppercase"
                        style={{ fontFamily: "'Cormorant Garamond', ui-serif, Georgia, serif" }}
                      >
                        {member.role}
                      </motion.p>
                    </div>

                    {/* Hover social */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={activeMember === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-4 right-4 flex flex-col gap-2"
                    >
                      <motion.a
                        href={`https://instagram.com/${member.social}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-full glass-strong flex items-center justify-center text-white/90 hover:text-primary group-hover:text-primary transition-colors"
                      >
                        {socialIcons.instagram}
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-full glass-strong flex items-center justify-center text-white/90 hover:text-primary group-hover:text-primary transition-colors"
                      >
                        {socialIcons.facebook}
                      </motion.a>
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {activeMember === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 border-t border-primary/10 bg-gradient-to-b from-transparent to-primary/2">
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-sm text-foreground/70 leading-relaxed mb-4"
                          >
                            {member.bio}
                          </motion.p>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-2 text-xs text-primary font-medium"
                          >
                            <motion.span
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="w-2 h-2 rounded-full bg-primary"
                            />
                            @{member.social}
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </ThreeDCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Team philosophy */}
        <ScrollReveal delay={0.4} direction="up" className="mt-20 md:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl glass-strong p-8 md:p-12 text-center max-w-3xl mx-auto overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-rose-gold/5" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="relative z-10">
              <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4"
                style={{ fontFamily: "'Cormorant Garamond', ui-serif, Georgia, serif" }}>Our Philosophy</p>
              <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-5"
                style={{ fontFamily: "'Cormorant Garamond', ui-serif, Georgia, serif" }}>Excellence in Every Detail</h4>
              <p className="text-muted max-w-xl mx-auto leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', ui-serif, Georgia, serif" }}>
                We believe true beauty lies in the details. Our team doesn't just perform services — they craft experiences. 
                Through continuous education, artistic vision, and genuine care, we ensure every client leaves feeling not just beautiful, but truly seen.
              </p>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}