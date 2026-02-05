"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, BookOpen, Edit, Trash2, ExternalLink } from "lucide-react";
import { Card, Badge, Button } from "@/components/ui";
import { publications } from "@/lib/constants";

export default function AdminPublicationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white">
            Publications
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your research publications
          </p>
        </div>
        <Link href="/admin/publications/new">
          <Button>
            <Plus className="w-4 h-4" />
            Add Publication
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        {publications.map((pub, index) => (
          <motion.div
            key={pub.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-material-primary/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-7 h-7 text-material-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display font-bold text-gray-900 dark:text-white">
                      {pub.title}
                    </h3>
                    <Badge variant={pub.is_published ? "success" : "secondary"}>
                      {pub.is_published ? "Published" : "Draft"}
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{pub.journal_name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                    {pub.authors.join(", ")}
                  </p>
                </div>
                <div className="flex gap-2">
                  {pub.url && (
                    <a href={pub.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  )}
                  <Link href={`/admin/publications/${pub.id}`}>
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
