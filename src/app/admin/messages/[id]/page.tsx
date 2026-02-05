"use client";

import Link from "next/link";
import { ArrowLeft, Reply, Trash2 } from "lucide-react";
import { Button, Card } from "@/components/ui";

export default function MessageDetailPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/messages">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white">
              Message Details
            </h1>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="default">
            <Reply className="w-4 h-4" />
            Reply
          </Button>
          <Button variant="ghost" className="text-error">
            <Trash2 className="w-4 h-4" />
            Delete
          </Button>
        </div>
      </div>
      <Card className="p-6">
        <p className="text-gray-500">Message detail view coming soon...</p>
      </Card>
    </div>
  );
}
