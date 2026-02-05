"use client";

import { motion } from "framer-motion";
import { Mail, Star, Clock, Trash2, StarOff } from "lucide-react";
import { Card, Badge, Button } from "@/components/ui";

const messages = [
  {
    id: "1",
    sender_name: "John Smith",
    sender_email: "john@example.com",
    subject: "Collaboration Opportunity",
    message: "Hi, I wanted to discuss a potential collaboration on a robotics project...",
    is_read: false,
    is_starred: true,
    created_at: "2025-02-04T10:30:00Z",
  },
  {
    id: "2",
    sender_name: "Sarah Johnson",
    sender_email: "sarah@example.com",
    subject: "Question about your ROS project",
    message: "I saw your IRAVATH project and was impressed by the implementation...",
    is_read: false,
    is_starred: false,
    created_at: "2025-02-04T08:15:00Z",
  },
  {
    id: "3",
    sender_name: "Mike Chen",
    sender_email: "mike@example.com",
    subject: "Research Partnership",
    message: "Our team is working on similar technology and we'd love to discuss...",
    is_read: true,
    is_starred: false,
    created_at: "2025-02-03T14:20:00Z",
  },
];

export default function AdminMessagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white">
            Messages
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Contact form submissions from your portfolio
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="info">{messages.filter(m => !m.is_read).length} unread</Badge>
        </div>
      </div>

      <div className="space-y-2">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className={`p-4 cursor-pointer hover:shadow-md transition-shadow ${!message.is_read ? 'border-l-4 border-l-material-primary' : ''}`}>
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-material-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-sm font-semibold text-material-primary">
                    {message.sender_name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`font-medium ${!message.is_read ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                      {message.sender_name}
                    </h3>
                    <span className="text-xs text-gray-500">{message.sender_email}</span>
                  </div>
                  <p className={`text-sm mb-1 ${!message.is_read ? 'font-medium text-gray-800 dark:text-gray-200' : 'text-gray-600 dark:text-gray-400'}`}>
                    {message.subject}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {message.message}
                  </p>
                </div>

                {/* Meta & Actions */}
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {new Date(message.created_at).toLocaleDateString()}
                  </span>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      {message.is_starred ? (
                        <Star className="w-4 h-4 text-warning fill-warning" />
                      ) : (
                        <StarOff className="w-4 h-4" />
                      )}
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-error">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {messages.length === 0 && (
        <Card className="p-12 text-center">
          <Mail className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-2">
            No messages yet
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Messages from your contact form will appear here
          </p>
        </Card>
      )}
    </div>
  );
}
