"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function PremiumCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const isHovering = useRef(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);

  const springConfig = { stiffness: 300, damping: 25 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const trailXSpring = useSpring(trailX, { stiffness: 150, damping: 15 });
  const trailYSpring = useSpring(trailY, { stiffness: 150, damping: 15 });

  const moveCursor = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
    },
    [cursorX, cursorY, trailX, trailY]
  );

  useEffect(() => {
    const handleHoverStart = () => {
      isHovering.current = true;
      if (cursorRef.current) {
        cursorRef.current.style.width = "48px";
        cursorRef.current.style.height = "48px";
        cursorRef.current.style.borderColor = "rgba(200, 165, 102, 0.4)";
        cursorRef.current.style.backgroundColor = "rgba(200, 165, 102, 0.08)";
      }
    };

    const handleHoverEnd = () => {
      isHovering.current = false;
      if (cursorRef.current) {
        cursorRef.current.style.width = "24px";
        cursorRef.current.style.height = "24px";
        cursorRef.current.style.borderColor = "rgba(200, 165, 102, 0.2)";
        cursorRef.current.style.backgroundColor = "transparent";
      }
    };

    const addListeners = () => {
      document.querySelectorAll("a, button, input, textarea, [role='button']").forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    };

    addListeners();

    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
      document.querySelectorAll("a, button, input, textarea, [role='button']").forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [moveCursor]);

  const isTouchDevice =
    typeof window !== "undefined" && "ontouchstart" in window;

  if (isTouchDevice) return null;

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          border: "1.5px solid rgba(200, 165, 102, 0.2)",
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease, background-color 0.3s ease",
        }}
      />
      <motion.div
        ref={trailRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9998]"
        style={{
          x: trailXSpring,
          y: trailYSpring,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "rgba(200, 165, 102, 0.35)",
          transition: "width 0.2s ease",
        }}
      />
    </>
  );
}
