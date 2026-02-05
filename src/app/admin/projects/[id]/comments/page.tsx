"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button, Card } from "@/components/ui";

export default function ProjectCommentsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/projects">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white">
            Project Comments
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage comments on this project
          </p>
        </div>
      </div>
      <Card className="p-12 text-center">
        <MessageCircle className="w-12 h-12 mx-auto text-gray-400 mb-4" />
        <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-2">
          No comments yet
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Comments will appear here when users interact with your project
        </p>
      </Card>
    </div>
  );
}
