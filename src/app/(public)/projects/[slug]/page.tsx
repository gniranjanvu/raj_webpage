import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Tag, Eye, Heart, MessageCircle } from "lucide-react";
import { Navigation, Footer } from "@/components/layout";
import { Badge } from "@/components/ui";
import { FadeIn } from "@/components/animations";
import { projects } from "@/lib/constants";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.short_description,
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container-custom">
          {/* Back Link */}
          <FadeIn>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-material-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </FadeIn>

          {/* Hero Section */}
          <FadeIn delay={0.1}>
            <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-8 bg-gradient-to-br from-material-primary/20 via-info/20 to-success/20">
              {/* Project Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-6xl">🤖</span>
                </div>
              </div>

              {/* Featured Badge */}
              {project.is_featured && (
                <div className="absolute top-6 left-6">
                  <Badge variant="nothing" className="text-sm">
                    Featured Project
                  </Badge>
                </div>
              )}
            </div>
          </FadeIn>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title & Meta */}
              <FadeIn delay={0.2}>
                <div className="glass-card p-8">
                  <p className="text-material-primary font-medium mb-2">{project.category}</p>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 text-gray-500 dark:text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>0 views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      <span>0 likes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      <span>0 comments</span>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.short_description}
                  </p>
                </div>
              </FadeIn>

              {/* Full Description */}
              <FadeIn delay={0.3}>
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
                    About This Project
                  </h2>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                      {project.full_description}
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Comments Section */}
              <FadeIn delay={0.4}>
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
                    Comments
                  </h2>
                  <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                    <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No comments yet. Be the first to share your thoughts!</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Action Buttons */}
              <FadeIn delay={0.3}>
                <div className="glass-card p-6 space-y-4">
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
                    >
                      <Github className="w-5 h-5" />
                      View on GitHub
                    </a>
                  )}
                  {project.demo_url && (
                    <a
                      href={project.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-4 py-3 rounded-full font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </FadeIn>

              {/* Tech Stack */}
              <FadeIn delay={0.35}>
                <div className="glass-card p-6">
                  <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Tag className="w-5 h-5 text-material-primary" />
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech_stack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Like Button */}
              <FadeIn delay={0.4}>
                <div className="glass-card p-6 text-center">
                  <button className="flex items-center justify-center gap-2 w-full bg-error/10 text-error px-4 py-3 rounded-full font-medium hover:bg-error hover:text-white transition-all">
                    <Heart className="w-5 h-5" />
                    Like this project
                  </button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
