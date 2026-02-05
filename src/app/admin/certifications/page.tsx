"use client";

import Link from "next/link";
import { Plus, Award, Edit, Trash2 } from "lucide-react";
import { Card, Button } from "@/components/ui";

const certifications = [
  {
    id: "1",
    name: "ROS2 Developer Certification",
    issuer: "The Construct",
    issue_date: "2024-06-01",
    no_expiry: true,
  },
];

export default function AdminCertificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white">
            Certifications
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your certifications
          </p>
        </div>
        <Link href="/admin/certifications/new">
          <Button>
            <Plus className="w-4 h-4" />
            Add Certification
          </Button>
        </Link>
      </div>

      {certifications.length > 0 ? (
        <div className="space-y-4">
          {certifications.map((cert) => (
            <Card key={cert.id} className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-material-primary/10 flex items-center justify-center">
                  <Award className="w-7 h-7 text-material-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-gray-900 dark:text-white">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                </div>
                <div className="flex gap-2">
                  <Link href={`/admin/certifications/${cert.id}`}>
                    <Button variant="ghost" size="icon">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Button variant="ghost" size="icon" className="text-error">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-12 text-center">
          <Award className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-2">
            No certifications yet
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Add your certifications to showcase your qualifications
          </p>
          <Link href="/admin/certifications/new">
            <Button>
              <Plus className="w-4 h-4" />
              Add Certification
            </Button>
          </Link>
        </Card>
      )}
    </div>
  );
}
