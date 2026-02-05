"use client";

import { motion } from "framer-motion";
import { Wrench, Plus } from "lucide-react";
import { Card, Badge, Button } from "@/components/ui";
import { skillCategories } from "@/lib/constants";

export default function AdminSkillsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white">
            Skills
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your technical skills
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4" />
          Add Skill
        </Button>
      </div>

      {/* Skills by Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
                <Badge variant="secondary">{category.skills.length}</Badge>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                  >
                    <div className="flex items-center gap-3">
                      <Wrench className="w-4 h-4 text-material-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < skill.proficiency ? "bg-material-primary" : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
