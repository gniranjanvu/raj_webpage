"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink, FileText, Users } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { Badge } from "@/components/ui";
import { publications } from "@/lib/constants";

export function PublicationsSection() {
  return (
    <section id="publications" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <FadeIn>
          <div className="mb-16">
            <span className="section-number">{`// 06`}</span>
            <h2 className="section-title mt-2 mb-4">PUBLICATIONS</h2>
            <p className="section-subtitle">Research & Academic Work</p>
          </div>
        </FadeIn>

        {/* Publications List */}
        <StaggerChildren className="space-y-8 max-w-4xl mx-auto" staggerDelay={0.15}>
          {publications.map((publication) => (
            <StaggerItem key={publication.id}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="glass-card p-6 md:p-8 group"
              >
                {/* Publication Type Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="nothing" className="capitalize">
                    {publication.publication_type.replace("_", " ")}
                  </Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(publication.publication_date).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 dark:text-white mb-4 group-hover:text-material-primary transition-colors">
                  {publication.title}
                </h3>

                {/* Authors */}
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                  <Users className="w-4 h-4" />
                  <span>{publication.authors.join(", ")}</span>
                </div>

                {/* Journal/Publisher */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>{publication.journal_name}</span>
                  </div>
                  {publication.publisher && (
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>{publication.publisher}</span>
                    </div>
                  )}
                </div>

                {/* Abstract */}
                {publication.abstract && (
                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                    {publication.abstract}
                  </p>
                )}

                {/* Keywords */}
                {publication.keywords && publication.keywords.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {publication.keywords.map((keyword) => (
                      <Badge key={keyword} variant="outline">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center gap-4">
                  {publication.url && (
                    <a
                      href={publication.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-material-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-material-primary/90 hover:shadow-lg active:scale-95 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Publication
                    </a>
                  )}
                  {publication.doi && (
                    <a
                      href={`https://doi.org/${publication.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                    >
                      DOI: {publication.doi}
                    </a>
                  )}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
