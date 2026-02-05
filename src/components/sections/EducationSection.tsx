"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, MapPin, ArrowRight, Award } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { Badge } from "@/components/ui";
import { education } from "@/lib/constants";

export function EducationSection() {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-16">
            <span className="section-number">{`// 02`}</span>
            <h2 className="section-title mt-2 mb-4">EDUCATION</h2>
            <p className="section-subtitle">My Academic Journey</p>
          </div>
        </FadeIn>

        {/* Education Cards - 3D Stack Effect */}
        <div className="relative max-w-4xl mx-auto">
          <StaggerChildren className="space-y-8" staggerDelay={0.2}>
            {education.map((edu, index) => (
              <StaggerItem key={edu.id}>
                <motion.div
                  whileHover={{ 
                    scale: 1.02, 
                    rotateY: 2,
                    z: 50 
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: 1000,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass-card p-6 md:p-8 cursor-pointer group relative"
                >
                  {/* Card Number Badge */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-material-primary flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Icon */}
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-material-primary/20 to-info/20 flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-material-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 dark:text-white mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-material-primary font-medium mb-1">
                            {edu.major}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            {edu.institution_name}
                          </p>
                        </div>
                        <div className="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-2">
                            <span className="font-mono">
                              {edu.start_year} - {edu.end_year || "Present"}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                          {edu.grade && (
                            <div className="flex items-center gap-2">
                              <Award className="w-4 h-4 text-warning" />
                              <span className="font-semibold text-gray-700 dark:text-gray-300">
                                {edu.grade}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      {edu.description && (
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {edu.description}
                        </p>
                      )}

                      {/* Key Courses */}
                      {edu.key_courses && edu.key_courses.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {edu.key_courses.map((course) => (
                            <Badge key={course} variant="outline">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {/* View Details Link */}
                      <Link
                        href={`/education/${edu.slug}`}
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
      </div>
    </section>
  );
}
