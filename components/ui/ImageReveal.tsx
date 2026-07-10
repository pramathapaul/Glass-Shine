"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ImageRevealProps {
  src?: string;
  alt?: string;
  className?: string;
  cover?: boolean;
  delay?: number;
  children?: React.ReactNode;
}

export default function ImageReveal({
  src,
  alt = "",
  className = "",
  cover = true,
  delay = 0,
  children,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 z-10"
        initial={{ x: "0%" }}
        animate={isInView ? { x: "100%" } : { x: "0%" }}
        transition={{
          duration: 1.2,
          delay: delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={
          isInView
            ? { scale: 1, opacity: 1 }
            : { scale: 1.15, opacity: 0 }
        }
        transition={{
          duration: 1.2,
          delay: delay + 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={cover ? "w-full h-full" : ""}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className={`w-full h-full ${cover ? "object-cover" : ""}`}
            loading="lazy"
          />
        ) : (
          children
        )}
      </motion.div>
    </div>
  );
}
