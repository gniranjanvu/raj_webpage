import { Navigation, Footer } from "@/components/layout";
import {
  HeroSection,
  ExperienceSection,
  EducationSection,
  ProjectsSection,
  SkillsSection,
  AchievementsSection,
  PublicationsSection,
  ContactSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <PublicationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
