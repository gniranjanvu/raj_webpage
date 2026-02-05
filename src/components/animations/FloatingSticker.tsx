"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingStickerProps {
  text: string;
  emoji: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  delay?: number;
  className?: string;
}

export function FloatingSticker({
  text,
  emoji,
  position,
  delay = 0,
  className,
}: FloatingStickerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      style={position}
      className={cn(
        "absolute hidden lg:flex items-center gap-2 glass-card px-4 py-2 text-sm font-mono",
        className
      )}
    >
      <motion.span
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: delay + 0.5 }}
      >
        {emoji}
      </motion.span>
      <span className="text-gray-700 dark:text-gray-300">{text}</span>
    </motion.div>
  );
}
