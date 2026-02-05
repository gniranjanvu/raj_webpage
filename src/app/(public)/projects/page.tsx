import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Github, Star, Filter } from "lucide-react";
import { Navigation, Footer } from "@/components/layout";
import { Badge, Card, Button } from "@/components/ui";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { projects } from "@/lib/constants";

export const metadata: Metadata = {
  title: "All Projects",
  description: "Browse all of my robotics and automation projects",
};

export default function AllProjectsPage() {
  // Group projects by category
  const categories = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container-custom">
          {/* Header */}
          <FadeIn>
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-4">
                All Projects
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
                Explore my complete portfolio of robotics, automation, and engineering projects.
              </p>
            </div>
          </FadeIn>

          {/* Category Filters */}
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center gap-3 mb-12">
              <span className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter:
              </span>
              <button className="px-4 py-2 rounded-full bg-material-primary text-white text-sm font-medium">
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Projects Grid */}
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300">
                  {/* Hero Image */}
                  <div className="relative h-48 bg-gradient-to-br from-material-primary/20 via-info/20 to-success/20 overflow-hidden">
                    {/* Featured Badge */}
                    {project.is_featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <Badge variant="nothing" className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Project Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-4xl">🤖</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category */}
                    <p className="text-sm text-material-primary font-medium mb-2">
                      {project.category}
                    </p>

                    {/* Title */}
                    <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3 group-hover:text-material-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                      {project.short_description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech_stack.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech_stack.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.tech_stack.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      <Link href={`/projects/${project.slug}`} className="flex-1">
                        <Button variant="default" size="sm" className="w-full">
                          View Project
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                      {project.github_url && (
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          aria-label="View on GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </main>
      <Footer />
    </>
  );
}
