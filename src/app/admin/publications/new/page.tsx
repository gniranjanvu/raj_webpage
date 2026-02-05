"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button, Card } from "@/components/ui";

export default function NewPublicationPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/publications">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white">
            Add Publication
          </h1>
        </div>
      </div>
      <Card className="p-6">
        <p className="text-gray-500">Publication form coming soon...</p>
      </Card>
    </div>
  );
}
