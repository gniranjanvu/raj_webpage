"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { skillCategories } from "@/lib/constants";

const getProficiencyLabel = (level: number) => {
  const labels = ["Beginner", "Basic", "Intermediate", "Advanced", "Expert"];
  return labels[level - 1] || "Unknown";
};

const getProficiencyColor = (level: number) => {
  const colors = [
    "bg-gray-400",
    "bg-info",
    "bg-warning",
    "bg-success",
    "bg-material-primary",
  ];
  return colors[level - 1] || "bg-gray-400";
};

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-16">
            <span className="section-number">{`// 04`}</span>
            <h2 className="section-title mt-2 mb-4">SKILLS</h2>
            <p className="section-subtitle">Technologies & Tools</p>
          </div>
        </FadeIn>

        {/* Skills Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {skillCategories.map((category) => (
            <StaggerItem key={category.id}>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-card p-6 h-full"
              >
                <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-6">
                  {category.name}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                          {getProficiencyLabel(skill.proficiency)}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency * 20}%` }}
                          transition={{ duration: 0.8, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full rounded-full ${getProficiencyColor(skill.proficiency)}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
