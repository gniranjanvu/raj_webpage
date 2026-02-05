"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  FolderKanban,
  Mail,
  Users,
  Eye,
  MessageCircle,
  Clock,
} from "lucide-react";
import { Card, Badge, Button } from "@/components/ui";
import { experiences, projects } from "@/lib/constants";

const statsCards = [
  {
    title: "Total Views",
    value: "12,485",
    change: "+12%",
    changeType: "positive",
    icon: Eye,
    color: "bg-blue-500",
  },
  {
    title: "Messages",
    value: "23",
    change: "+3",
    changeType: "positive",
    icon: Mail,
    color: "bg-green-500",
  },
  {
    title: "Subscribers",
    value: "156",
    change: "+8",
    changeType: "positive",
    icon: Users,
    color: "bg-purple-500",
  },
  {
    title: "Projects",
    value: projects.length.toString(),
    change: "Active",
    changeType: "neutral",
    icon: FolderKanban,
    color: "bg-orange-500",
  },
];

const quickActions = [
  { name: "Add Experience", href: "/admin/experiences/new", icon: Briefcase },
  { name: "Add Education", href: "/admin/education/new", icon: GraduationCap },
  { name: "Add Project", href: "/admin/projects/new", icon: FolderKanban },
  { name: "View Messages", href: "/admin/messages", icon: Mail },
];

const recentMessages = [
  {
    id: "1",
    name: "John Smith",
    email: "john@example.com",
    subject: "Collaboration Opportunity",
    preview: "Hi, I wanted to discuss a potential...",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    subject: "Question about your ROS project",
    preview: "I saw your IRAVATH project and...",
    time: "5 hours ago",
    unread: true,
  },
  {
    id: "3",
    name: "Mike Chen",
    email: "mike@example.com",
    subject: "Research Partnership",
    preview: "Our team is working on similar...",
    time: "1 day ago",
    unread: false,
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome back! Here&apos;s an overview of your portfolio.
          </p>
        </div>
        <Link href="/" target="_blank">
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4" />
            View Portfolio
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p
                    className={`text-sm mt-1 ${
                      stat.changeType === "positive"
                        ? "text-success"
                        : stat.changeType === "negative"
                        ? "text-error"
                        : "text-gray-500"
                    }`}
                  >
                    {stat.change}
                  </p>
                </div>
                <div
                  className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="p-6">
          <h2 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Link key={action.name} href={action.href}>
                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-material-primary/10 dark:hover:bg-material-primary/20 transition-colors group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-material-primary/10 flex items-center justify-center mb-3 group-hover:bg-material-primary group-hover:text-white transition-colors">
                    <action.icon className="w-6 h-6 text-material-primary group-hover:text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                    {action.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Recent Messages & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Messages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-display font-bold text-gray-900 dark:text-white">
                Recent Messages
              </h2>
              <Link
                href="/admin/messages"
                className="text-sm text-material-primary hover:underline"
              >
                View all
              </Link>
            </div>
            <div className="space-y-4">
              {recentMessages.map((message) => (
                <Link
                  key={message.id}
                  href={`/admin/messages/${message.id}`}
                  className="block"
                >
                  <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-material-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-semibold text-material-primary">
                        {message.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-gray-900 dark:text-white truncate">
                          {message.name}
                        </p>
                        {message.unread && (
                          <span className="w-2 h-2 rounded-full bg-material-primary" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                        {message.subject}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {message.time}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-display font-bold text-gray-900 dark:text-white">
                Content Overview
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-material-primary" />
                  <span className="font-medium">Experiences</span>
                </div>
                <Badge variant="secondary">{experiences.length}</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-material-primary" />
                  <span className="font-medium">Education</span>
                </div>
                <Badge variant="secondary">3</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center gap-3">
                  <FolderKanban className="w-5 h-5 text-material-primary" />
                  <span className="font-medium">Projects</span>
                </div>
                <Badge variant="secondary">{projects.length}</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-material-primary" />
                  <span className="font-medium">Comments</span>
                </div>
                <Badge variant="secondary">0</Badge>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
