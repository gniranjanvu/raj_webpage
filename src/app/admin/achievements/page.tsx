"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, Trophy, Edit, Trash2 } from "lucide-react";
import { Card, Badge, Button } from "@/components/ui";
import { achievements } from "@/lib/constants";

export default function AdminAchievementsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white">
            Achievements
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your achievements and awards
          </p>
        </div>
        <Link href="/admin/achievements/new">
          <Button>
            <Plus className="w-4 h-4" />
            Add Achievement
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-warning/10 flex items-center justify-center">
                  <Trophy className="w-7 h-7 text-warning" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display font-bold text-gray-900 dark:text-white">
                      {achievement.title}
                    </h3>
                    <Badge variant={achievement.is_published ? "success" : "secondary"}>
                      {achievement.is_published ? "Published" : "Draft"}
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{achievement.issuer}</p>
                </div>
                <div className="flex gap-2">
                  <Link href={`/admin/achievements/${achievement.id}`}>
                    <Button variant="ghost" size="icon">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Button variant="ghost" size="icon" className="text-error">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
