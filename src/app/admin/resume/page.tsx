"use client";

import { Upload, FileDown, Trash2, Download, Eye } from "lucide-react";
import { Card, Badge, Button } from "@/components/ui";

const resumes = [
  {
    id: "1",
    version: "v2.0",
    file_name: "Prudhvi_Raj_Resume_2025.pdf",
    is_active: true,
    download_count: 156,
    uploaded_at: "2025-01-15T10:00:00Z",
  },
  {
    id: "2",
    version: "v1.5",
    file_name: "Prudhvi_Raj_Resume_2024.pdf",
    is_active: false,
    download_count: 342,
    uploaded_at: "2024-06-01T10:00:00Z",
  },
];

export default function AdminResumePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white">
            Resume Manager
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Upload and manage your resume versions
          </p>
        </div>
        <Button>
          <Upload className="w-4 h-4" />
          Upload New Resume
        </Button>
      </div>

      {/* Current Resume */}
      <Card className="p-6">
        <h2 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-4">
          Active Resume
        </h2>
        {resumes.find(r => r.is_active) ? (
          <div className="flex items-center gap-4 p-4 rounded-xl bg-success/10">
            <div className="w-14 h-14 rounded-xl bg-success/20 flex items-center justify-center">
              <FileDown className="w-7 h-7 text-success" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-bold text-gray-900 dark:text-white">
                {resumes.find(r => r.is_active)?.file_name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Version {resumes.find(r => r.is_active)?.version} • {resumes.find(r => r.is_active)?.download_count} downloads
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4" />
                Preview
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4" />
                Download
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">No active resume. Upload one to get started.</p>
        )}
      </Card>

      {/* All Versions */}
      <Card className="p-6">
        <h2 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-4">
          Version History
        </h2>
        <div className="space-y-3">
          {resumes.map((resume) => (
            <div
              key={resume.id}
              className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800"
            >
              <div className="w-12 h-12 rounded-xl bg-material-primary/10 flex items-center justify-center">
                <FileDown className="w-6 h-6 text-material-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {resume.file_name}
                  </h3>
                  {resume.is_active && <Badge variant="success">Active</Badge>}
                </div>
                <p className="text-sm text-gray-500">
                  {resume.version} • Uploaded {new Date(resume.uploaded_at).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">{resume.download_count} downloads</span>
                <div className="flex gap-2">
                  {!resume.is_active && (
                    <Button variant="outline" size="sm">
                      Set Active
                    </Button>
                  )}
                  <Button variant="ghost" size="icon" className="text-error h-8 w-8">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
