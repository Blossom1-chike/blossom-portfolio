import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { PublicationsSection } from "@/components/publications-section"
import { AwardsSection } from "@/components/awards-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:flex lg:gap-12">
          <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <HeroSection />
          </div>
          <div className="lg:w-1/2 lg:py-24">
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <EducationSection />
            <PublicationsSection />
            <AwardsSection />
          </div>
        </div>
      </main>
    </div>
  )
}
