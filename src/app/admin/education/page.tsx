"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, Search, Edit, Trash2, Eye, GraduationCap } from "lucide-react";
import { Card, Badge, Button } from "@/components/ui";
import { education } from "@/lib/constants";

export default function AdminEducationPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEducation = education.filter(
    (edu) =>
      edu.institution_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      edu.degree.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white">
            Education
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your educational background
          </p>
        </div>
        <Link href="/admin/education/new">
          <Button>
            <Plus className="w-4 h-4" />
            Add Education
          </Button>
        </Link>
      </div>

      {/* Search */}
      <Card className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search education..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-material-primary"
          />
        </div>
      </Card>

      {/* Education List */}
      <div className="space-y-4">
        {filteredEducation.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-material-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-material-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display font-bold text-gray-900 dark:text-white">
                      {edu.degree} in {edu.major}
                    </h3>
                    <Badge variant={edu.is_published ? "success" : "secondary"}>
                      {edu.is_published ? "Published" : "Draft"}
                    </Badge>
                  </div>
                  <p className="text-material-primary font-medium">{edu.institution_name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {edu.start_year} - {edu.end_year || "Present"}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <Link href={`/education/${edu.slug}`} target="_blank">
                    <Button variant="ghost" size="icon">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href={`/admin/education/${edu.id}`}>
                    <Button variant="ghost" size="icon">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Button variant="ghost" size="icon" className="text-error hover:text-error">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredEducation.length === 0 && (
        <Card className="p-12 text-center">
          <GraduationCap className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-2">
            No education entries found
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            {searchQuery
              ? "Try adjusting your search query"
              : "Get started by adding your education background"}
          </p>
          {!searchQuery && (
            <Link href="/admin/education/new">
              <Button>
                <Plus className="w-4 h-4" />
                Add Education
              </Button>
            </Link>
          )}
        </Card>
      )}
    </div>
  );
}
