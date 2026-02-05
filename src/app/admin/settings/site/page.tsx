"use client";

import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { Card, Button, Input, Textarea } from "@/components/ui";
import { siteConfig } from "@/lib/constants";

export default function SiteSettingsPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/settings">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white">
            Site Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Configure your portfolio website
          </p>
        </div>
      </div>

      <Card className="p-6 space-y-6">
        <Input
          label="Site Title"
          defaultValue={`${siteConfig.name} | ${siteConfig.title}`}
        />
        <Textarea
          label="Site Description (Meta)"
          defaultValue={siteConfig.description}
          className="min-h-[100px]"
        />
        <Input
          label="Website URL"
          defaultValue={siteConfig.website}
        />
        <Input
          label="Google Analytics ID"
          placeholder="G-XXXXXXXXXX"
        />

        <div className="flex justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
          <Button>
            <Save className="w-4 h-4" />
            Save Changes
          </Button>
        </div>
      </Card>
    </div>
  );
}
