"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const infoRows = [
    {
      label: "ADDRESS",
      value: "1, 41/A/8, Mitra Para Rd, near Dukbanglow, Barasat, Kolkata 700124",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#C9A227" }}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    },
    {
      label: "PHONE",
      value: "+91 87770 25057",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#C9A227" }}>
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      )
    },
    {
      label: "HOURS",
      value: "10:30 AM \u2013 9:00 PM",
      subtext: "Monday \u2013 Sunday",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#C9A227" }}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 lg:py-40 overflow-hidden" style={{ backgroundColor: "#0D0D0D" }}>
      <div className="mx-auto px-6 md:px-12 lg:px-20" style={{ maxWidth: 1280 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[45%_50%] gap-16 lg:gap-[100px] items-start">
          {/* ── Left Column: Visit Us ── */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-[30px] h-px bg-[#C9A227]" />
              <span
                className="text-[12px] font-[600] uppercase tracking-[0.25em]"
                style={{ fontFamily: "Manrope, sans-serif", color: "#C9A227" }}
              >
                VISIT US
              </span>
            </div>

            <h2
              className="text-[clamp(36px,3.5vw,56px)] leading-[1.05] tracking-[-0.03em] mb-14"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, color: "#F5F3EF" }}
            >
              Step into the{" "}
              <span className="italic" style={{ color: "#C9A227" }}>
                atelier.
              </span>
            </h2>

            {/* Info rows */}
            <div className="flex flex-col gap-[35px]">
              {infoRows.map((row) => (
                <div key={row.label} className="flex items-start gap-5">
                  <div
                    className="w-[42px] h-[42px] shrink-0 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "transparent", border: "1px solid #2A2A2A" }}
                  >
                    {row.icon}
                  </div>
                  <div className="pt-[2px]">
                    <div className="flex items-center gap-3 mb-[6px]">
                      <span
                        className="text-[11px] font-[600] uppercase tracking-[0.2em]"
                        style={{ fontFamily: "Manrope, sans-serif", color: "#C9A227" }}
                      >
                        {row.label}
                      </span>
                      <div className="w-[20px] h-px bg-[#C9A227]" />
                    </div>
                    <p
                      className="text-[15px] leading-[1.6]"
                      style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, color: "#F5F3EF" }}
                    >
                      {row.value}
                    </p>
                    {row.subtext && (
                      <p
                        className="text-[13px] leading-[1.6] mt-[2px]"
                        style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, color: "#A0A0A0" }}
                      >
                        {row.subtext}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-10 relative rounded-[10px] overflow-hidden h-[280px]" style={{ border: "1px solid #2A2A2A" }}>
              <a
                href="https://maps.google.com/?q=Glass+Shine+Unisex+Salon+%26+Academy+Barasat"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-[500] transition-opacity hover:opacity-80"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  backgroundColor: "#1A1A1A",
                  color: "#4A90D9",
                  border: "1px solid #2A2A2A",
                  backdropFilter: "blur(6px)"
                }}
              >
                Open in Maps
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.5!2d88.45!3d22.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8995fe9776f2b%3A0x1c5d60b778d8994f!2sGlass%20Shine%20Unisex%20Salon%20%26%20Academy!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) saturate(1.2)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Glass Shine Salon Location"
              />
            </div>
          </div>

          {/* ── Right Column: Send a Message ── */}
          <div
            className="rounded-[12px] p-8 md:p-10"
            style={{
              backgroundColor: "#141414",
              border: "1px solid #2A2A2A"
            }}
          >
            <div className="flex items-center gap-4 mb-[6px]">
              <div className="w-[30px] h-px bg-[#C9A227]" />
              <span
                className="text-[12px] font-[600] uppercase tracking-[0.25em]"
                style={{ fontFamily: "Manrope, sans-serif", color: "#C9A227" }}
              >
                SEND A MESSAGE
              </span>
            </div>
            <div className="w-full h-px bg-[#C9A227] mb-10" />

            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6">
                <div>
                  <label
                    className="block text-[11px] font-[600] uppercase tracking-[0.2em] mb-3"
                    style={{ fontFamily: "Manrope, sans-serif", color: "#C9A227" }}
                  >
                    NAME<span style={{ color: "#C9A227" }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className="w-full pb-2 text-[15px] outline-none transition-colors placeholder:text-[#555]"
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      color: "#F5F3EF",
                      backgroundColor: "transparent",
                      borderBottom: focused === "name" ? "1px solid #C9A227" : "1px solid #2A2A2A"
                    }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    className="block text-[11px] font-[600] uppercase tracking-[0.2em] mb-3"
                    style={{ fontFamily: "Manrope, sans-serif", color: "#C9A227" }}
                  >
                    EMAIL<span style={{ color: "#C9A227" }}>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className="w-full pb-2 text-[15px] outline-none transition-colors placeholder:text-[#555]"
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      color: "#F5F3EF",
                      backgroundColor: "transparent",
                      borderBottom: focused === "email" ? "1px solid #C9A227" : "1px solid #2A2A2A"
                    }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  className="block text-[11px] font-[600] uppercase tracking-[0.2em] mb-3"
                  style={{ fontFamily: "Manrope, sans-serif", color: "#C9A227" }}
                >
                  PHONE
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  onFocus={() => setFocused("phone")}
                  onBlur={() => setFocused(null)}
                  className="w-full pb-2 text-[15px] outline-none transition-colors placeholder:text-[#555]"
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    color: "#F5F3EF",
                    backgroundColor: "transparent",
                    borderBottom: focused === "phone" ? "1px solid #C9A227" : "1px solid #2A2A2A"
                  }}
                  placeholder="+91 87770 25057"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  className="block text-[11px] font-[600] uppercase tracking-[0.2em] mb-3"
                  style={{ fontFamily: "Manrope, sans-serif", color: "#C9A227" }}
                >
                  MESSAGE<span style={{ color: "#C9A227" }}>*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="w-full pb-2 text-[15px] outline-none transition-colors resize-none placeholder:text-[#555]"
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    color: "#F5F3EF",
                    backgroundColor: "transparent",
                    borderBottom: focused === "message" ? "1px solid #C9A227" : "1px solid #2A2A2A"
                  }}
                  placeholder="How can we help you today?"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 self-start px-8 py-[14px] rounded-full text-[14px] font-[600] transition-all duration-300 hover:opacity-90"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  backgroundColor: "#D4AF37",
                  color: "#111"
                }}
              >
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
