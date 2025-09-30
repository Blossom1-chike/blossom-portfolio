"use client"

import { Card } from "@/components/ui/card"
import { Award } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const awards = [
  {
    title: "Best Graduating Student, Software Engineering",
    organization: "Babcock University",
    date: "Jun 2023",
    description:
      "Academic Recognition by the University for being the Best Graduating Student of the Software Engineering Department, Babcock University.",
  },
  {
    title: "Engineer (Dr.) Akin Alade Award",
    organization: "Babcock University",
    date: "Jun 2023",
    description:
      "The award was a one-time payment of 15,000 Naira cash prize, being the Best Graduating Student of the Software Engineering Department, Babcock University.",
  },
  {
    title: "2nd Runner Up, Cavista Hackathon",
    organization: "Cavista Technologies",
    date: "March 2023",
    description:
      'The award was a 300,000 Naira cash prize given by Cavista during its inaugural hackathon, won with Team "Spontaneous" for developing "Environmend", an innovative prototype system promoting recycling by rewarding user participation.',
  },
]

export function AwardsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 })

  return (
    <section id="awards" className="mb-24 scroll-mt-24" ref={ref}>
      <h2
        className={`mb-6 text-sm font-bold uppercase tracking-wider text-muted-foreground transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        Honors & Awards
      </h2>

      <div className="space-y-4">
        {awards.map((award, index) => (
          <Card
            key={index}
            className={`border-border bg-card p-6 transition-all duration-700 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 hover:scale-[1.01] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 transition-all duration-300 hover:bg-accent/20 hover:scale-110 hover:rotate-12">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-balance">{award.title}</h3>
                <p className="text-sm text-accent">{award.organization}</p>
                <p className="mt-1 text-sm text-muted-foreground">{award.date}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{award.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
