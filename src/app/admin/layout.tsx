"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  GraduationCap,
  FolderKanban,
  Wrench,
  Award,
  BookOpen,
  FileText,
  Mail,
  Users,
  FileDown,
  Image,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/providers/ThemeProvider";

const sidebarLinks = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Experiences", href: "/admin/experiences", icon: Briefcase },
  { name: "Education", href: "/admin/education", icon: GraduationCap },
  { name: "Projects", href: "/admin/projects", icon: FolderKanban },
  { name: "Skills", href: "/admin/skills", icon: Wrench },
  { name: "Certifications", href: "/admin/certifications", icon: Award },
  { name: "Achievements", href: "/admin/achievements", icon: Award },
  { name: "Publications", href: "/admin/publications", icon: BookOpen },
  { name: "Messages", href: "/admin/messages", icon: Mail, badge: 3 },
  { name: "Subscribers", href: "/admin/subscribers", icon: Users },
  { name: "Resume", href: "/admin/resume", icon: FileDown },
  { name: "Gallery", href: "/admin/gallery", icon: Image },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  // Don't render admin layout for login page
  if (pathname === "/admin") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-transform duration-300 lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
            <Link href="/admin/dashboard" className="font-display font-bold text-xl">
              Admin Panel
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            {sidebarLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-material-primary text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  )}
                >
                  <link.icon className="w-5 h-5" />
                  <span className="flex-1">{link.name}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-error text-white">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <FileText className="w-5 h-5" />
              View Portfolio
            </Link>
            <button
              onClick={() => {
                // Logout logic
                window.location.href = "/admin";
              }}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-error hover:bg-error/10 transition-colors w-full"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 lg:px-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex-1" />

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Profile */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-material-primary flex items-center justify-center text-white font-semibold text-sm">
                PR
              </div>
              <span className="hidden sm:block text-sm font-medium">Admin</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
