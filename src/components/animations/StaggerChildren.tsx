"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayStart?: number;
}

const container = {
  hidden: { opacity: 0 },
  visible: (custom: { staggerDelay: number; delayStart: number }) => ({
    opacity: 1,
    transition: {
      delayChildren: custom.delayStart,
      staggerChildren: custom.staggerDelay,
    },
  }),
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.1,
  delayStart = 0,
}: StaggerChildrenProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={container}
      custom={{ staggerDelay, delayStart }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}
