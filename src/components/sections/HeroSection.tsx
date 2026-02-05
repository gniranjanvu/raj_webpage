"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, ArrowRight } from "lucide-react";
import { TextReveal, Typewriter, FloatingSticker } from "@/components/animations";
import { siteConfig, floatingStickers } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh"
    >
      {/* Floating Stickers */}
      {floatingStickers.map((sticker, index) => (
        <FloatingSticker
          key={sticker.text}
          text={sticker.text}
          emoji={sticker.emoji}
          position={sticker.position}
          delay={0.5 + index * 0.1}
        />
      ))}

      {/* Main Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="flex flex-col items-center text-center">
          {/* Animated Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <h1 className="text-hero font-display font-black tracking-tight leading-none">
              <TextReveal>PRUDHVI RAJ</TextReveal>
            </h1>
          </motion.div>

          {/* Typewriter Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 font-display">
              <Typewriter texts={siteConfig.titles} />
            </p>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            className="relative mb-8"
          >
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden relative">
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-material-primary via-nothing-red to-info rounded-full animate-pulse-slow" />
              
              {/* Inner circle with initials as fallback */}
              <div className="absolute inset-1 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-full flex items-center justify-center">
                <span className="text-4xl md:text-6xl font-display font-bold text-gray-700 dark:text-gray-300">
                  PR
                </span>
              </div>
            </div>
            
            {/* Floating animation glow */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -inset-4 bg-material-primary/20 rounded-full blur-2xl -z-10"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="max-w-2xl text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-10 leading-relaxed"
          >
            {siteConfig.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-material-primary text-white px-8 py-3 rounded-full text-base font-medium hover:bg-material-primary/90 hover:shadow-lg active:scale-95 transition-all"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#"
              download
              className="inline-flex items-center gap-2 border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white px-8 py-3 rounded-full text-base font-medium hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800 transition-all"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
