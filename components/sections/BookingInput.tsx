"use client";

import { useRef, useState } from "react";

interface BookingInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
}

export default function BookingInput({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  value,
  onChange
}: BookingInputProps) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="block mb-[14px] text-[12px] font-[700] uppercase tracking-[0.22em]"
        style={{ color: "#C9A227", fontFamily: "Manrope, sans-serif" }}
      >
        {label}
        {required && <span className="text-[rgba(255,255,255,.35)] ml-1">*</span>}
      </label>
      <input
        ref={inputRef}
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-transparent text-white text-[15px] font-[400] outline-none pb-4 transition-all duration-300"
        style={{
          fontFamily: "Manrope, sans-serif",
          borderBottom: "1px solid rgba(255,255,255,.18)",
          borderBottomColor: focused ? "#C9A227" : "rgba(255,255,255,.18)",
          color: "#F5F3EF",
          caretColor: "#C9A227"
        }}
      />
    </div>
  );
}
