"use client";

import { Card, Button } from "@/components/ui";
import { Plus, Tag } from "lucide-react";

export default function SkillCategoriesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white">
            Skill Categories
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage skill categories
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4" />
          Add Category
        </Button>
      </div>
      <Card className="p-12 text-center">
        <Tag className="w-12 h-12 mx-auto text-gray-400 mb-4" />
        <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-2">
          Category management coming soon
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          You will be able to create and manage skill categories here
        </p>
      </Card>
    </div>
  );
}
