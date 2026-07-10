"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function useProgress(duration: number, onComplete: () => void) {
  const [progress, setProgress] = useState(0);
  const frameRef = useRef<number>(0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(elapsed / duration, 1);
      setProgress(pct);
      if (pct < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        onCompleteRef.current();
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [duration]);

  return progress;
}

const percentageSteps = [0, 8, 17, 26, 41, 58, 74, 91, 100];

function currentDisplayPct(progress: number): number {
  let display = 0;
  for (const step of percentageSteps) {
    if (progress * 100 >= step) display = step;
  }
  return display;
}

export default function LoadingScreen({ onFinish }: { onFinish?: () => void }) {
  const [exiting, setExiting] = useState(false);

  const handleExitComplete = () => {
    onFinish?.();
  };

  const handleComplete = () => {
    setExiting(true);
  };

  const progress = useProgress(3200, handleComplete);

  const displayPct = currentDisplayPct(progress);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={exiting ? { opacity: 0 } : { opacity: 1 }}
      onAnimationComplete={() => { if (exiting) handleExitComplete(); }}
      transition={exiting ? { duration: 0.8, ease: "easeInOut" } : {}}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B0B0B] overflow-hidden"
    >
      {/* ── Film grain overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      {/* ── Floating gold particles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#C9A227]"
            style={{
              width: 1 + Math.random() * 1,
              height: 1 + Math.random() * 1,
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -(200 + Math.random() * 300)],
              x: [0, (Math.random() - 0.5) * 60],
              opacity: [0.12, 0.08, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 12,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* ── Centered content ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* EST. 2019 */}
        <span
          className="text-[#C9A227] text-[12px] uppercase tracking-[0.35em] mb-12"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          EST. 2019 &bull; BARASAT
        </span>

        {/* Logo */}
        <h1
          className="font-light leading-[0.9] tracking-[-0.04em] text-center select-none"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(56px, 8vw, 120px)",
          }}
        >
          <span className="text-[#F5F2ED] font-[400]">Glass </span>
          <span className="italic text-[#C9A227] font-[400]">Shine</span>
        </h1>

        {/* Subtitle */}
        <span
          className="text-[rgba(255,255,255,0.45)] text-[13px] uppercase tracking-[0.35em] mt-6"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          UNISEX SALON &amp; ACADEMY
        </span>
      </motion.div>

      {/* ── Bottom loading indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-[60px] left-1/2 -translate-x-1/2 z-10 flex items-center gap-5"
      >
        {/* LOADING label */}
        <span
          className="text-[rgba(255,255,255,0.45)] text-[11px] uppercase tracking-[0.35em]"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          LOADING
        </span>

        {/* Progress bar */}
        <div className="w-[280px] sm:w-[320px] h-[2px] bg-[rgba(255,255,255,0.08)] relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-[#C9A227]"
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        {/* Percentage */}
        <span
          className="text-[rgba(255,255,255,0.45)] text-[11px] tabular-nums w-[32px] text-right"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          {displayPct}%
        </span>
      </motion.div>
    </motion.div>
  );
}
