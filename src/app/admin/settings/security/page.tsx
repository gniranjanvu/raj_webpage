"use client";

import Link from "next/link";
import { ArrowLeft, Shield, Key } from "lucide-react";
import { Card, Button, Input } from "@/components/ui";

export default function SecuritySettingsPage() {
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
            Security Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage authentication and security
          </p>
        </div>
      </div>

      <Card className="p-6 space-y-6">
        <div className="flex items-start gap-4 p-4 rounded-xl bg-success/10">
          <Shield className="w-8 h-8 text-success shrink-0" />
          <div>
            <h3 className="font-display font-bold text-gray-900 dark:text-white mb-1">
              OTP Authentication Enabled
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your account is protected with email OTP authentication. A code will be sent to your email each time you log in.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-display font-bold text-gray-900 dark:text-white">
            Change Admin Email
          </h3>
          <Input
            label="Current Email"
            type="email"
            value="prudhvirajchalapaka07@gmail.com"
            disabled
          />
          <Input
            label="New Email"
            type="email"
            placeholder="Enter new email address"
          />
          <Button variant="outline">
            <Key className="w-4 h-4" />
            Verify & Update Email
          </Button>
        </div>
      </Card>
    </div>
  );
}
