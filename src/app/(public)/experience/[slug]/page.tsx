import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Building2, Award } from "lucide-react";
import { Navigation, Footer } from "@/components/layout";
import { Badge } from "@/components/ui";
import { FadeIn } from "@/components/animations";
import { experiences } from "@/lib/constants";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return experiences.map((exp) => ({
    slug: exp.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = experiences.find((exp) => exp.slug === slug);

  if (!experience) {
    return {
      title: "Experience Not Found",
    };
  }

  return {
    title: `${experience.role} at ${experience.company_name}`,
    description: experience.description,
  };
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const experience = experiences.find((exp) => exp.slug === slug);

  if (!experience) {
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
              href="/#experience"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-material-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Experience
            </Link>
          </FadeIn>

          {/* Header */}
          <FadeIn delay={0.1}>
            <div className="glass-card p-8 md:p-12 mb-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Company Logo */}
                <div className="shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-material-primary/10 dark:bg-material-primary/20 flex items-center justify-center">
                    <Building2 className="w-10 h-10 text-material-primary" />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <Badge variant="nothing" className="mb-4">
                    {experience.employment_type}
                  </Badge>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-2">
                    {experience.role}
                  </h1>
                  <p className="text-xl md:text-2xl text-material-primary font-medium mb-6">
                    {experience.company_name}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>
                        {new Date(experience.start_date).toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })}{" "}
                        -{" "}
                        {experience.is_current
                          ? "Present"
                          : experience.end_date
                          ? new Date(experience.end_date).toLocaleDateString("en-US", {
                              month: "long",
                              year: "numeric",
                            })
                          : "Present"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <FadeIn delay={0.2} className="lg:col-span-2">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
                  About This Role
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                  {experience.description}
                </p>

                {/* Key Highlights */}
                {experience.highlights && experience.highlights.length > 0 && (
                  <>
                    <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
                      Key Highlights
                    </h3>
                    <ul className="space-y-3">
                      {experience.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                        >
                          <Award className="w-5 h-5 text-success mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </FadeIn>

            {/* Sidebar */}
            <FadeIn delay={0.3}>
              <div className="glass-card p-8">
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-6">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {experience.tech_stack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
