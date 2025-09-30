"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const projects = [
  {
    name: "Regulon",
    period: "2025",
    description:
      "Regulon.io is a RegTech platform that uses AI to automate compliance, verification, and onboarding processes for businesses, particularly in highly regulated industries.",
    achievements: [
      "Designed and implemented a multi-step user onboarding flow using Nextjs, enabling smooth registration and activation for first-time users, successfully onboarded 10+ active users within the initial rollout phase.",
      "Integrated third-party APIs, including the Google Calendar API, to automate scheduling features and enhance real-time interaction within the platform’s service booking flow",
    ],
    technologies: ["Next.js", "TailwindCSS", "Redux Toolkit", "Vitest"],
    github: "https://app.regulon.io/customer/onboarding/account-details",
  },
  {
    name: "AfroShop: African Grocery Store in Canada",
    period: "2024",
    description:
      "Developed an e-commerce and admin application enabling multiple users to purchase items from various stores with options for delivery or pickup, achieving a compelling and responsive user experience.",
    achievements: [
      "Implemented key features including infinite scrolling of products, resulting in a 25% increase in user engagement.",
      "Utilized socket.io for real-time cart updates, reducing cart update times by 40% and enhancing overall performance, leading to a 20% boost in user satisfaction.",
    ],
    technologies: ["ReactJS", "Strapi.js", "Redux", "React Context", "Socket.io"],
    github: "https://afroshop.ca/",
  },
]

export function ProjectsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 })

  return (
    <section id="projects" className="mb-24 scroll-mt-24" ref={ref}>
      <h2
        className={`mb-6 text-sm font-bold uppercase tracking-wider text-muted-foreground transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        Projects
      </h2>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className={`group relative overflow-hidden border-border bg-card p-6 transition-all duration-700 hover:border-primary/50 hover:shadow-xl hover:shadow-secondary/10 hover:scale-[1.02] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-4">
                <div className="mb-2 flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-balance">{project.name}</h3>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 transition-all duration-300 hover:scale-110 hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 transition-all duration-300 hover:scale-110 hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View live project">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{project.period}</p>
              </div>

              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

              <ul className="mb-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-secondary" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs transition-all duration-300 hover:scale-105 hover:bg-secondary/80"
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
