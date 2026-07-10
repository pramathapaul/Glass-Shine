"use client";

import { useState, useMemo } from "react";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

interface CalendarProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

export default function Calendar({ selectedDate, onSelectDate }: CalendarProps) {
  const today = useMemo(() => new Date(), []);
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const isSelectedDate = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === viewMonth &&
      selectedDate.getFullYear() === viewYear
    );
  };

  const isToday = (day: number) => {
    return (
      today.getDate() === day &&
      today.getMonth() === viewMonth &&
      today.getFullYear() === viewYear
    );
  };

  const isPastDate = (day: number) => {
    const date = new Date(viewYear, viewMonth, day);
    const compare = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return date < compare;
  };

  const days: (number | null)[] = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <div
      className="w-[280px]"
      style={{ height: 310, backgroundColor: "#111111", borderRadius: 24, border: "1px solid rgba(255,255,255,.08)", padding: 28 }}
    >
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          aria-label="Previous month"
          className="w-8 h-8 rounded-full flex items-center justify-center text-[rgba(255,255,255,.50)] hover:text-white hover:bg-[rgba(255,255,255,.08)] transition-all duration-300"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span
          className="text-sm font-medium tracking-wide"
          style={{ fontFamily: "Manrope, sans-serif", color: "#F5F3EF" }}
        >
          {MONTHS[viewMonth]} {viewYear}
        </span>
        <button
          onClick={nextMonth}
          aria-label="Next month"
          className="w-8 h-8 rounded-full flex items-center justify-center text-[rgba(255,255,255,.50)] hover:text-white hover:bg-[rgba(255,255,255,.08)] transition-all duration-300"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 gap-y-[6px]">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="text-center text-[11px] font-medium uppercase tracking-wider"
            style={{ fontFamily: "Manrope, sans-serif", color: "rgba(255,255,255,.50)" }}
          >
            {day}
          </div>
        ))}
        {days.map((day, i) => {
          if (day === null) {
            return <div key={`empty-${i}`} />;
          }
          const selected = isSelectedDate(day);
          const past = isPastDate(day);
          const todayDate = isToday(day);

          return (
            <button
              key={day}
              onClick={() => !past && onSelectDate(new Date(viewYear, viewMonth, day))}
              disabled={past}
              className="w-full aspect-square rounded-full flex items-center justify-center text-sm transition-all duration-300"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: past ? 400 : 500,
                fontSize: 14,
                backgroundColor: selected ? "#C9A227" : "transparent",
                color: selected ? "#111111" : past ? "rgba(255,255,255,.25)" : todayDate ? "#C9A227" : "#F5F3EF",
                cursor: past ? "default" : "pointer"
              }}
              onMouseEnter={(e) => {
                if (!selected && !past) {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,.10)";
                }
              }}
              onMouseLeave={(e) => {
                if (!selected && !past) {
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
