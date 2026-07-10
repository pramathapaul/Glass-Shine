"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  once?: boolean;
  mode?: "words" | "chars" | "lines";
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  stagger = 0.03,
  as: Tag = "p",
  once = true,
  mode = "words",
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const items = mode === "chars" ? children.split("") : children.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: mode === "lines" ? 40 : 20,
      rotateX: mode === "lines" ? 12 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const MotionTag = motion[Tag as keyof typeof motion] as React.ElementType;

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <MotionTag
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="inline-flex flex-wrap"
      >
        {items.map((item, i) => (
          <motion.span
            key={`${item}-${i}`}
            variants={itemVariants}
            className="inline-block"
            style={{ whiteSpace: mode === "chars" ? "unset" : "pre" }}
          >
            {item}
            {mode === "words" && i < items.length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
      </MotionTag>
    </div>
  );
}
