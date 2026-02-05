"use client";

import { Upload, ImageIcon } from "lucide-react";
import { Card, Button } from "@/components/ui";

export default function AdminGalleryPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white">
            Media Gallery
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage images and media files
          </p>
        </div>
        <Button>
          <Upload className="w-4 h-4" />
          Upload Files
        </Button>
      </div>

      <Card className="p-12 text-center">
        <ImageIcon className="w-16 h-16 mx-auto text-gray-400 mb-4" />
        <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-2">
          No media files yet
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Upload images and media to use across your portfolio
        </p>
        <Button>
          <Upload className="w-4 h-4" />
          Upload Files
        </Button>
      </Card>
    </div>
  );
}
