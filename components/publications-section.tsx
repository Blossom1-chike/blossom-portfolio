"use client"

import { Card } from "@/components/ui/card"
import { FileText } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const publications = [
  {
    authors: "Adetunji O., Blossom C. Chikezie, Toniloba Ogundare, Micheal Osayeme-Ebohon, et al.",
    title: "Dual-Activation Emergency Situation Notification System (DA-ESNS)",
    journal: "IIETA",
    details: "Vol. 13, No. 4, August, 2023, pp. 647-656",
    doi: "10.18280/ijsse.130406",
  },
]

export function PublicationsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 })

  return (
    <section id="publications" className="mb-24 scroll-mt-24" ref={ref}>
      <h2
        className={`mb-6 text-sm font-bold uppercase tracking-wider text-muted-foreground transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        Publications
      </h2>

      <div className="space-y-4">
        {publications.map((pub, index) => (
          <Card
            key={index}
            className={`border-border bg-card p-6 transition-all duration-700 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/5 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary/10 transition-all duration-300 hover:bg-secondary/20 hover:scale-110">
                <FileText className="h-6 w-6 text-secondary" />
              </div>
              <div className="flex-1">
                <h3 className="mb-1 font-semibold text-balance leading-relaxed">{pub.title}</h3>
                <p className="mb-2 text-sm text-muted-foreground">{pub.authors}</p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{pub.journal}</span>, {pub.details}
                </p>
                <p className="mt-1 font-mono text-xs text-primary">{`DOI: ${pub.doi}`}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
