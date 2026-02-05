"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Star } from "lucide-react";
import { FadeIn } from "@/components/animations";
import { Button, Badge, Card } from "@/components/ui";
import { projects } from "@/lib/constants";

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="section-padding bg-gray-50 dark:bg-gray-900/50 overflow-hidden"
    >
      <div className="container-custom">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-16">
            <span className="section-number">{`// 03`}</span>
            <h2 className="section-title mt-2 mb-4">PROJECTS</h2>
            <p className="section-subtitle">Featured Work</p>
          </div>
        </FadeIn>
      </div>

      {/* Horizontal Scrolling Projects */}
      <motion.div style={{ x }} className="flex gap-6 pl-4 md:pl-8 lg:pl-16 pb-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="shrink-0 w-[320px] md:w-[400px] lg:w-[450px]"
          >
            <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300">
              {/* Hero Image */}
              <div className="relative h-48 md:h-56 bg-gradient-to-br from-material-primary/20 via-info/20 to-success/20 overflow-hidden">
                {/* Featured Badge */}
                {project.is_featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge variant="nothing" className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

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
                  {project.tech_stack.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech_stack.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tech_stack.length - 4}
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
          </motion.div>
        ))}

        {/* View All Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="shrink-0 w-[320px] md:w-[400px] lg:w-[450px]"
        >
          <Link href="/projects" className="block h-full">
            <Card className="h-full min-h-[400px] flex items-center justify-center bg-gradient-to-br from-material-primary/5 to-info/5 hover:from-material-primary/10 hover:to-info/10 transition-all duration-300 cursor-pointer group">
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-full bg-material-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-8 h-8 text-material-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-3">
                  View All Projects
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Explore my complete portfolio of projects
                </p>
              </div>
            </Card>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
