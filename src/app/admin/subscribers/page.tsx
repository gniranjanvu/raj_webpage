"use client";

import { motion } from "framer-motion";
import { Users, Download, Trash2, Mail } from "lucide-react";
import { Card, Badge, Button } from "@/components/ui";

const subscribers = [
  { id: "1", email: "subscriber1@example.com", subscribed_at: "2025-02-01T10:00:00Z", is_active: true },
  { id: "2", email: "subscriber2@example.com", subscribed_at: "2025-01-28T14:30:00Z", is_active: true },
  { id: "3", email: "subscriber3@example.com", subscribed_at: "2025-01-25T09:15:00Z", is_active: false },
];

export default function AdminSubscribersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white">
            Newsletter Subscribers
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your email subscribers
          </p>
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4" />
          Export CSV
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-material-primary/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-material-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">{subscribers.length}</p>
              <p className="text-sm text-gray-500">Total Subscribers</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-success" />
            </div>
            <div>
              <p className="text-2xl font-bold">{subscribers.filter(s => s.is_active).length}</p>
              <p className="text-sm text-gray-500">Active</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
              <Users className="w-6 h-6 text-gray-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{subscribers.filter(s => !s.is_active).length}</p>
              <p className="text-sm text-gray-500">Unsubscribed</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Subscribers List */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subscribed
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {subscribers.map((subscriber) => (
                <motion.tr
                  key={subscriber.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {subscriber.email}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={subscriber.is_active ? "success" : "secondary"}>
                      {subscriber.is_active ? "Active" : "Unsubscribed"}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(subscriber.subscribed_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <Button variant="ghost" size="icon" className="text-error h-8 w-8">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
