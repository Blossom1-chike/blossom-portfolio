"use client"

import { Card } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const education = [
  {
    institution: "Northumbria University",
    degree: "MSc Artificial Intelligence Technology",
    location: "London, United Kingdom",
    period: "May 2025 - Present",
    gpa: null,
  },
  {
    institution: "Babcock University",
    degree: "Bachelors (Hons) Software Engineering",
    location: "Ogun State, Nigeria",
    period: "Sept 2019 - June 2023",
    gpa: "4.84/5.00",
  },
]

export function EducationSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 })

  return (
    <section id="education" className="mb-24 scroll-mt-24" ref={ref}>
      <h2
        className={`mb-6 text-sm font-bold uppercase tracking-wider text-muted-foreground transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        Education
      </h2>

      <div className="space-y-4">
        {education.map((edu, index) => (
          <Card
            key={index}
            className={`border-border bg-card p-6 transition-all duration-700 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-balance">{edu.degree}</h3>
                <p className="text-sm text-primary">{edu.institution}</p>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span>{edu.period}</span>
                  <span>{edu.location}</span>
                  {edu.gpa && <span className="font-medium text-foreground">{`GPA: ${edu.gpa}`}</span>}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
