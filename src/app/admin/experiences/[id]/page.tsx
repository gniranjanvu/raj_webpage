"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Loader2, Trash2 } from "lucide-react";
import { Card, Button, Input, Textarea } from "@/components/ui";
import { experiences } from "@/lib/constants";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function EditExperiencePage({ params }: PageProps) {
  const { id } = use(params);
  const router = useRouter();
  const experience = experiences.find((exp) => exp.id === id);

  if (!experience) {
    notFound();
  }

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    role: experience.role,
    company_name: experience.company_name,
    start_date: experience.start_date,
    end_date: experience.end_date || "",
    is_current: experience.is_current,
    location: experience.location || "",
    employment_type: experience.employment_type,
    description: experience.description || "",
    tech_stack: experience.tech_stack.join(", "),
    is_published: experience.is_published,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate save
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Redirect to list
    router.push("/admin/experiences");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this experience?")) {
      // Simulate delete
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/admin/experiences");
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/experiences">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white">
              Edit Experience
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Update experience details
            </p>
          </div>
        </div>
        <Button variant="ghost" className="text-error hover:text-error" onClick={handleDelete}>
          <Trash2 className="w-4 h-4" />
          Delete
        </Button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <Card className="p-6 space-y-6">
          {/* Role & Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Role/Position"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="e.g., Robotics Engineer"
              required
            />
            <Input
              label="Company Name"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              placeholder="e.g., Karthikesh Robotics"
              required
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input
              label="Start Date"
              name="start_date"
              type="date"
              value={formData.start_date}
              onChange={handleChange}
              required
            />
            <Input
              label="End Date"
              name="end_date"
              type="date"
              value={formData.end_date}
              onChange={handleChange}
              disabled={formData.is_current}
            />
            <div className="flex items-end">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="is_current"
                  checked={formData.is_current}
                  onChange={handleChange}
                  className="w-5 h-5 rounded border-gray-300 text-material-primary focus:ring-material-primary"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Currently working here
                </span>
              </label>
            </div>
          </div>

          {/* Location & Employment Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g., Chennai, India"
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Employment Type
              </label>
              <select
                name="employment_type"
                value={formData.employment_type}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-material-primary"
              >
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
                <option value="freelance">Freelance</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <Textarea
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your role and responsibilities..."
            className="min-h-[150px]"
          />

          {/* Tech Stack */}
          <Input
            label="Technologies (comma-separated)"
            name="tech_stack"
            value={formData.tech_stack}
            onChange={handleChange}
            placeholder="e.g., ROS2, Python, Path Planning"
          />

          {/* Publish Status */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="is_published"
                checked={formData.is_published}
                onChange={handleChange}
                className="w-5 h-5 rounded border-gray-300 text-material-primary focus:ring-material-primary"
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Published
              </span>
            </label>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Link href="/admin/experiences">
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </Link>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </Card>
      </form>
    </div>
  );
}
