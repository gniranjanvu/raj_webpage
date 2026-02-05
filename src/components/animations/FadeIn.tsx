"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
}

const getVariants = (direction: string): Variants => {
  const directions: Record<string, { y?: number; x?: number }> = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  return {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };
};

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  direction = "up",
}: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={getVariants(direction)}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
