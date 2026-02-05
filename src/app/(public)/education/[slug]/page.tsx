import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, GraduationCap, MapPin, Award, BookOpen } from "lucide-react";
import { Navigation, Footer } from "@/components/layout";
import { Badge } from "@/components/ui";
import { FadeIn } from "@/components/animations";
import { education } from "@/lib/constants";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return education.map((edu) => ({
    slug: edu.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const edu = education.find((e) => e.slug === slug);

  if (!edu) {
    return {
      title: "Education Not Found",
    };
  }

  return {
    title: `${edu.degree} in ${edu.major} - ${edu.institution_name}`,
    description: edu.description,
  };
}

export default async function EducationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const edu = education.find((e) => e.slug === slug);

  if (!edu) {
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
              href="/#education"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-material-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Education
            </Link>
          </FadeIn>

          {/* Header */}
          <FadeIn delay={0.1}>
            <div className="glass-card p-8 md:p-12 mb-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-material-primary/20 to-info/20 flex items-center justify-center">
                    <GraduationCap className="w-10 h-10 text-material-primary" />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h1>
                  <p className="text-xl md:text-2xl text-material-primary font-medium mb-2">
                    {edu.major}
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {edu.institution_name}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-lg">
                        {edu.start_year} - {edu.end_year || "Present"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      <span>{edu.location}</span>
                    </div>
                    {edu.grade && (
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-warning" />
                        <span className="font-semibold">{edu.grade}</span>
                      </div>
                    )}
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
                  About This Program
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </FadeIn>

            {/* Sidebar */}
            <FadeIn delay={0.3}>
              <div className="space-y-6">
                {/* Key Courses */}
                {edu.key_courses && edu.key_courses.length > 0 && (
                  <div className="glass-card p-8">
                    <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-material-primary" />
                      Key Courses
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {edu.key_courses.map((course) => (
                        <Badge key={course} variant="outline" className="text-sm">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Board/University */}
                {edu.university_board && (
                  <div className="glass-card p-8">
                    <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
                      Affiliated To
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.university_board}
                    </p>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
