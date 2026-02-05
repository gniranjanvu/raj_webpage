"use client";

import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { achievements } from "@/lib/constants";

const categoryIcons: Record<string, string> = {
  award: "🏆",
  recognition: "⭐",
  competition: "🎯",
  leadership: "👑",
  milestone: "🎉",
  other: "📌",
};

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-16">
            <span className="section-number">{`// 05`}</span>
            <h2 className="section-title mt-2 mb-4">ACHIEVEMENTS</h2>
            <p className="section-subtitle">Milestones & Recognition</p>
          </div>
        </FadeIn>

        {/* Achievements Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.15}>
          {achievements.map((achievement) => (
            <StaggerItem key={achievement.id}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-6 md:p-8 h-full group cursor-pointer"
              >
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-warning/20 to-success/20 flex items-center justify-center text-3xl">
                      {categoryIcons[achievement.category] || "📌"}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2 group-hover:text-material-primary transition-colors">
                      {achievement.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {achievement.issuer && (
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          <span>{achievement.issuer}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(achievement.date_achieved).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    </div>

                    {achievement.description && (
                      <p className="text-gray-600 dark:text-gray-400">
                        {achievement.description}
                      </p>
                    )}
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
