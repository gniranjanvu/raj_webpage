"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight, Building2 } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { Badge } from "@/components/ui";
import { experiences } from "@/lib/constants";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-16">
            <span className="section-number">{`// 01`}</span>
            <h2 className="section-title mt-2 mb-4">EXPERIENCE</h2>
            <p className="section-subtitle">My Professional Journey</p>
          </div>
        </FadeIn>

        {/* Experience Cards */}
        <StaggerChildren className="space-y-6" staggerDelay={0.15}>
          {experiences.map((exp) => (
            <StaggerItem key={exp.id}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card p-6 md:p-8 cursor-pointer group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Company Logo/Icon */}
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-material-primary/10 dark:bg-material-primary/20 flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-material-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 dark:text-white mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-material-primary font-medium">
                          {exp.company_name}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(exp.start_date).toLocaleDateString("en-US", {
                              month: "short",
                              year: "numeric",
                            })}{" "}
                            -{" "}
                            {exp.is_current
                              ? "Present"
                              : exp.end_date
                              ? new Date(exp.end_date).toLocaleDateString("en-US", {
                                  month: "short",
                                  year: "numeric",
                                })
                              : "Present"}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {exp.highlights?.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-nothing-red mt-2 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tech_stack.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* View Details Link */}
                    <Link
                      href={`/experience/${exp.slug}`}
                      className="inline-flex items-center gap-2 text-material-primary font-medium group-hover:gap-3 transition-all"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
