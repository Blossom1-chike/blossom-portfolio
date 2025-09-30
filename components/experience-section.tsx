"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const experiences = [
  {
    company: "Canalis Lab",
    role: "Frontend Engineer",
    location: "Remote, Nigeria",
    period: "Dec 2024 - May 2025",
    achievements: [
      "Delivered Next.js SSR applications for the Emple insurance platform, supporting 50+ active users, reducing page load times by 40% and enhancing overall user engagement.",
      "Developed a real-time collaborative document editor using CKEditor 5, allowing simultaneous editing, automatic saving, and version control, eliminating data loss and increasing productivity for internal teams.",
      "Automated certificate generation with React PDF, replacing manual workflows and cutting processing time by 70%, enabling faster client onboarding.",
      "Designed HTML email templates for Emple's client communications, standardizing branding and ensuring consistent delivery across the platform.",
    ],
    technologies: ["Next.js", "React", "CKEditor 5", "React PDF", "SSR"],
  },
  {
    company: "Regulon",
    role: "Software Engineer, Frontend",
    location: "Remote, United Kingdom",
    period: "Sept 2024 - May 2025",
    achievements: [
      "Collaborated with a team of 5+ engineers, contributing to design decisions and delivering early-stage product features efficiently.",
      "Set up and maintained the project codebase, ensuring a clean, organized, and scalable foundation for development, converted static screens into responsive, interactive interfaces using Tailwind CSS.",
      "Designed and implemented a multi-step user onboarding flow using Next.js, enabling smooth registration and activation for first-time users, successfully onboarded 10+ active users within the initial rollout phase.",
      "Integrated third-party APIs, including the Google Calendar API, to automate scheduling features and enhance real-time interaction within the platform's service booking flow.",
      "Wrote robust unit and integration tests using Vitest and React Testing Library, improving test coverage and helping reduce regression issues in critical workflows.",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Google Calendar API", "Vitest", "React Testing Library"],
  },
  {
    company: "Prunedge",
    role: "Associate Software Engineer, Frontend",
    location: "Lagos, Nigeria",
    period: "Jun 2022 - Aug 2024",
    achievements: [
      "Actively collaborated with a team of 10+ engineers, contributing to architecture decisions, ensuring scalable and maintainable frontend solutions.",
      "Led development of key features for Korensi and Qoray platforms, implementing performance enhancements like debouncing and throttling, reducing UI lag and improving user interaction speed by 25%.",
      "Implemented an electronic document management system using ReactJS currently implemented in 2 states in Nigeria, which has significantly improved their operational efficiency, reducing document processing times and misplacement by 30%.",
      "Optimized frontend workflows and reusable components, accelerating feature rollout and enabling faster delivery of new product functionality.",
    ],
    technologies: ["ReactJS", "JavaScript", "Performance Optimization"],
  },
]

export function ExperienceSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section id="experience" className="mb-24 scroll-mt-24" ref={ref}>
      <h2
        className={`mb-6 text-sm font-bold uppercase tracking-wider text-muted-foreground transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className={`group relative overflow-hidden border-border bg-card p-6 transition-all duration-700 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:scale-[1.02] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-balance">{exp.role}</h3>
                  <p className="flex items-center gap-1 text-primary">
                    {exp.company}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </p>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <ul className="mb-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
