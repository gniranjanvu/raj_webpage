"use client";

import Link from "next/link";
import { User, Globe, Shield } from "lucide-react";
import { Card } from "@/components/ui";

const settingsLinks = [
  {
    name: "Account",
    description: "Manage your personal information",
    href: "/admin/settings/account",
    icon: User,
  },
  {
    name: "Site Settings",
    description: "Configure site title, description, and metadata",
    href: "/admin/settings/site",
    icon: Globe,
  },
  {
    name: "Security",
    description: "Password and authentication settings",
    href: "/admin/settings/security",
    icon: Shield,
  },
];

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white">
          Settings
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your portfolio and account settings
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {settingsLinks.map((link) => (
          <Link key={link.name} href={link.href}>
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-material-primary/10 flex items-center justify-center group-hover:bg-material-primary group-hover:text-white transition-colors">
                  <link.icon className="w-6 h-6 text-material-primary group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-gray-900 dark:text-white">
                    {link.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {link.description}
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
