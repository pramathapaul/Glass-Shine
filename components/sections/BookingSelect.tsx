"use client";

import { useState, useRef, useEffect } from "react";

interface BookingSelectProps {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

export default function BookingSelect({
  label,
  name,
  options,
  value,
  onChange,
  placeholder = "Select",
  required = false
}: BookingSelectProps) {
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    onChange(option);
    setOpen(false);
    setFocused(false);
  };

  return (
    <div ref={ref} className="relative">
      <label
        htmlFor={name}
        className="block mb-[14px] text-[12px] font-[700] uppercase tracking-[0.22em]"
        style={{ color: "#C9A227", fontFamily: "Manrope, sans-serif" }}
      >
        {label}
        {required && <span className="text-[rgba(255,255,255,.35)] ml-1">*</span>}
      </label>
      <button
        id={name}
        type="button"
        onClick={() => { setOpen(!open); setFocused(!focused); }}
        className="w-full bg-transparent text-[15px] font-[400] outline-none pb-4 flex items-center justify-between transition-all duration-300"
        style={{
          fontFamily: "Manrope, sans-serif",
          borderBottom: "1px solid",
          borderBottomColor: focused ? "#C9A227" : "rgba(255,255,255,.18)",
          color: value ? "#F5F3EF" : "rgba(255,255,255,.45)",
          cursor: "pointer"
        }}
      >
        <span>{value || placeholder}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", color: "rgba(255,255,255,.45)" }}
        >
          <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div
          className="absolute left-0 right-0 z-20 mt-1 overflow-y-auto rounded-xl border"
          style={{
            maxHeight: 200,
            backgroundColor: "#1A1A1A",
            borderColor: "rgba(255,255,255,.08)"
          }}
        >
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleSelect(option)}
              className="w-full text-left px-4 py-3 text-[14px] transition-colors duration-200 hover:bg-[rgba(255,255,255,.05)]"
              style={{
                fontFamily: "Manrope, sans-serif",
                color: option === value ? "#C9A227" : "rgba(255,255,255,.72)",
                fontWeight: option === value ? 600 : 400
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
