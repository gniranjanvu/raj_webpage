"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/lib/constants";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      // Glass effect after scroll
      setIsScrolled(currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass-card border-0 border-b rounded-none"
            : "bg-transparent"
        )}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="font-display font-bold text-xl md:text-2xl tracking-tight hover:opacity-80 transition-opacity"
            >
              PRUDHVI
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* Download CV Button */}
              <a
                href="#"
                download
                className="hidden md:flex items-center gap-2 bg-material-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-material-primary/90 hover:shadow-lg active:scale-95 transition-all"
              >
                <Download className="w-4 h-4" />
                CV
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-white dark:bg-gray-900 lg:hidden"
          >
            <div className="flex flex-col h-full p-6">
              {/* Close Button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex-1 flex flex-col items-center justify-center gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white hover:text-material-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-6 py-6">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
