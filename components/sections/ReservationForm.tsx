"use client";

import { useState, useRef } from "react";
import BookingInput from "./BookingInput";
import BookingSelect from "./BookingSelect";
import { services } from "@/lib/services";
import { timeSlots } from "@/lib/timeSlots";

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  time: string;
  notes: string;
}

interface ReservationFormProps {
  selectedDate: Date | null;
}

export default function ReservationForm({ selectedDate }: ReservationFormProps) {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    time: "",
    notes: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const updateField = (field: keyof FormData) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate) return;

    const dateStr = selectedDate.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });

    const message = [
      `*New Reservation — Glass Shine Salon*`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.email ? `*Email:* ${form.email}` : null,
      `*Service:* ${form.service}`,
      `*Date:* ${dateStr}`,
      `*Time:* ${form.time}`,
      form.notes ? `*Notes:* ${form.notes}` : null
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${"918777025057"}?text=${encodeURIComponent(message)}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 400);
  };

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center justify-center text-center"
        style={{ padding: 48, minHeight: 400 }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
          style={{ backgroundColor: "rgba(201,162,39,.15)" }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17L4 12" />
          </svg>
        </div>
        <h3
          className="text-2xl font-[300] mb-3"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F5F3EF" }}
        >
          Reservation Initiated
        </h3>
        <p
          className="text-[15px] max-w-sm"
          style={{ fontFamily: "Manrope, sans-serif", color: "rgba(255,255,255,.60)", lineHeight: 1.7 }}
        >
          We&rsquo;ve opened WhatsApp to confirm your booking. Our team will respond within a few hours.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">
        <BookingInput
          label="Full Name"
          name="name"
          placeholder="Your name"
          required
          value={form.name}
          onChange={updateField("name")}
        />
        <BookingInput
          label="Phone"
          name="phone"
          type="tel"
          placeholder="+91 87770 25057"
          required
          value={form.phone}
          onChange={updateField("phone")}
        />
        <BookingInput
          label="Email"
          name="email"
          type="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={updateField("email")}
        />
        <BookingSelect
          label="Service"
          name="service"
          options={services}
          placeholder="Select service"
          required
          value={form.service}
          onChange={updateField("service")}
        />
        <BookingSelect
          label="Time"
          name="time"
          options={timeSlots}
          placeholder="Select time"
          required
          value={form.time}
          onChange={updateField("time")}
        />
        <div className="md:col-span-2">
          <label
            htmlFor="notes"
            className="block mb-[14px] text-[12px] font-[700] uppercase tracking-[0.22em]"
            style={{ color: "#C9A227", fontFamily: "Manrope, sans-serif" }}
          >
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            placeholder="Any preferences, allergies, artist request..."
            value={form.notes}
            onChange={(e) => updateField("notes")(e.target.value)}
            className="w-full bg-transparent text-[15px] font-[400] outline-none resize-none transition-all duration-300"
            style={{
              fontFamily: "Manrope, sans-serif",
              color: "#F5F3EF",
              caretColor: "#C9A227",
              borderBottom: "1px solid rgba(255,255,255,.18)",
              height: 100,
              paddingBottom: 16
            }}
            onFocus={(e) => { e.target.style.borderBottomColor = "#C9A227"; }}
            onBlur={(e) => { e.target.style.borderBottomColor = "rgba(255,255,255,.18)"; }}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={!selectedDate || !form.name || !form.phone || !form.service || !form.time}
        className="w-full mt-10 flex items-center justify-center gap-3 text-[16px] font-[600] transition-all duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] disabled:opacity-30 disabled:cursor-not-allowed hover:-translate-y-[2px]"
        style={{
          height: 60,
          borderRadius: 9999,
          backgroundColor: "#C9A227",
          color: "#111111",
          fontFamily: "Manrope, sans-serif"
        }}
      >
        Confirm Reservation
        <span className="text-[18px] leading-none">↗</span>
      </button>
    </form>
  );
}
