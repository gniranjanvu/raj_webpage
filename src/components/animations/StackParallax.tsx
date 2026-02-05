"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface StackParallaxProps {
  children: ReactNode;
  className?: string;
  index: number;
  totalItems: number;
  cardHeight?: number;
}

export function StackParallax({
  children,
  className,
  index,
  totalItems,
  cardHeight = 400,
}: StackParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Calculate the scale based on scroll progress
  // Cards at the top of the stack scale down more
  const targetScale = 1 - (totalItems - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, targetScale]);
  
  // Cards higher in the stack have smaller y offset when stacked
  const yOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -index * 20]
  );

  return (
    <div
      ref={containerRef}
      className="sticky"
      style={{
        top: `calc(15vh + ${index * 30}px)`,
        height: `${cardHeight}px`,
        zIndex: totalItems - index,
      }}
    >
      <motion.div
        style={{
          scale,
          y: yOffset,
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface StackParallaxContainerProps {
  children: ReactNode;
  className?: string;
}

export function StackParallaxContainer({
  children,
  className,
}: StackParallaxContainerProps) {
  return (
    <div className={`relative ${className || ""}`}>
      {children}
    </div>
  );
}
