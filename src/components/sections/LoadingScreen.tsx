"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const phases = [
      { target: 25, duration: 800, label: "Initializing..." },
      { target: 50, duration: 1000, label: "Loading Experience..." },
      { target: 75, duration: 900, label: "Preparing Canvas..." },
      { target: 100, duration: 700, label: "Ready" },
    ];

    let currentPhase = 0;
    let currentProgress = 0;

    const animatePhase = () => {
      if (currentPhase >= phases.length) {
        setTimeout(() => setIsComplete(true), 400);
        return;
      }

      const { target, duration, label } = phases[currentPhase];
      const startTime = Date.now();
      const startProgress = currentProgress;

      const tick = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        currentProgress = startProgress + (target - startProgress) * eased;
        setProgress(currentProgress);
        setPhase(currentPhase);

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          currentProgress = target;
          currentPhase++;
          setTimeout(animatePhase, 150);
        }
      };
      requestAnimationFrame(tick);
    };

    animatePhase();
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          {/* Ambient background particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                suppressHydrationWarning
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 0.3, 0], scale: [0, 1, 0] }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
                className="absolute rounded-full bg-primary/20"
                style={{
                  width: 4 + Math.random() * 8,
                  height: 4 + Math.random() * 8,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="relative flex flex-col items-center z-10">
            {/* Logo with premium ring animation */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-primary/20"
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-1 rounded-full border-t-2 border-primary/40"
                />
              </motion.div>

              {/* Middle ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border-1 border-primary/10"
              />

              {/* Logo */}
              <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-primary via-primary-light to-primary-dark flex items-center justify-center shadow-[0_4px_24px_rgba(200,165,102,0.3),0_8px_48px_rgba(200,165,102,0.2)]">
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-transparent"
                />
                <span className="text-5xl md:text-6xl font-bold text-white font-serif tracking-tight relative z-10">G</span>
              </div>

              {/* Inner pulse ring */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full border-2 border-primary/30"
              />
            </motion.div>

            {/* Brand name */}
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 text-center"
            >
              <motion.h1
                className="text-3xl md:text-4xl font-bold font-serif text-foreground tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                Glass Shine
              </motion.h1>
              <motion.p
                className="text-sm text-muted mt-2 tracking-widest uppercase font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Unisex Salon & Academy
              </motion.p>
            </motion.div>

            {/* Premium progress bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-14 w-[300px] max-w-[90vw] relative"
            >
              {/* Track */}
              <div className="h-1 bg-foreground/5 rounded-full overflow-hidden relative">
                {/* Shimmer overlay */}
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                />
                {/* Progress fill */}
                <motion.div
                  className="h-full rounded-full relative bg-gradient-to-r from-primary via-primary-light to-primary-dark"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Progress percentage */}
              <motion.div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-muted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {Math.round(progress)}%
              </motion.div>

              {/* Phase label */}
              <motion.p
                className="text-center text-xs text-muted/70 uppercase tracking-wider mt-4 min-h-[1.25rem]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {phase === 0 && "Initializing..."}
                {phase === 1 && "Loading Experience..."}
                {phase === 2 && "Preparing Canvas..."}
                {phase === 3 && "Ready"}
              </motion.p>
            </motion.div>
          </div>

          {/* Bottom decorative element */}
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-primary/60"
                animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
              />
            ))}
          </motion.div>

          {/* Decorative corner accents */}
          <div className="absolute top-8 left-8 w-24 h-1 border-t border-primary/30" />
          <div className="absolute top-8 left-8 w-1 h-24 border-l border-primary/30" />
          <div className="absolute bottom-8 right-8 w-24 h-1 border-b border-primary/30" />
          <div className="absolute bottom-8 right-8 w-1 h-24 border-r border-primary/30" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}