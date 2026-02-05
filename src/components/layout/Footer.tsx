"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react";
import { Marquee } from "@/components/animations";
import { siteConfig, navLinks } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      {/* Marquee Strip */}
      <div className="py-6 border-b border-gray-800 overflow-hidden">
        <Marquee speed={30} className="text-4xl md:text-6xl font-display font-bold opacity-20">
          <span className="mx-8">PRUDHVI RAJ CHALAPAKA</span>
          <span className="mx-8">•</span>
          <span className="mx-8">ROBOTICS ENGINEER</span>
          <span className="mx-8">•</span>
          <span className="mx-8">ROS DEVELOPER</span>
          <span className="mx-8">•</span>
        </Marquee>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-display font-bold text-3xl mb-4 block">
              PRUDHVI RAJ
            </Link>
            <p className="text-gray-400 max-w-md mb-6">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-material-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-material-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="p-3 rounded-full bg-gray-800 hover:bg-material-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-material-primary" />
                  <span className="text-sm break-all">{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-material-primary" />
                  <span className="text-sm">{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-material-primary" />
                  <span className="text-sm">{siteConfig.location}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-gray-400 text-sm">
            Made with{" "}
            <Heart className="w-4 h-4 text-nothing-red fill-current" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
