"use client";

import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { Card, Button, Input, Textarea } from "@/components/ui";
import { siteConfig } from "@/lib/constants";

export default function AccountSettingsPage() {
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
            Account Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your personal information
          </p>
        </div>
      </div>

      <Card className="p-6 space-y-6">
        {/* Profile Photo */}
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-material-primary flex items-center justify-center text-white text-3xl font-bold">
            PR
          </div>
          <div>
            <Button variant="outline" size="sm">
              Change Photo
            </Button>
            <p className="text-xs text-gray-500 mt-2">JPG, PNG, or GIF. Max 2MB.</p>
          </div>
        </div>

        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Display Name"
            defaultValue={siteConfig.name}
          />
          <Input
            label="Email"
            type="email"
            defaultValue={siteConfig.email}
          />
        </div>

        {/* Title & Bio */}
        <Input
          label="Professional Title"
          defaultValue={siteConfig.title}
        />
        <Textarea
          label="Bio"
          defaultValue={siteConfig.description}
          className="min-h-[120px]"
        />

        {/* Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Phone"
            defaultValue={siteConfig.phone}
          />
          <Input
            label="Location"
            defaultValue={siteConfig.location}
          />
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h3 className="font-display font-bold text-gray-900 dark:text-white">
            Social Links
          </h3>
          <Input
            label="LinkedIn"
            defaultValue={siteConfig.social.linkedin}
          />
          <Input
            label="GitHub"
            defaultValue={siteConfig.social.github}
          />
        </div>

        {/* Save */}
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
