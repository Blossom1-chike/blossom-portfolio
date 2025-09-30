"use client";

import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function AboutSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const skills = {
    "Programming Languages": [
      "JavaScript",
      "TypeScript",
      ".NET",
      "Python",
      "PHP",
    ],
    "Web Technologies": ["ReactJS", "Next.js", "TailwindCSS", "Material UI"],
    "Data Science & AI/ML": [
      "Tableau",
      "Jupyter Notebook",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "NLTK",
    ],
    "Database Systems": ["SQL", "MongoDB"],
  };

  return (
    <section id="about" className="mb-24 scroll-mt-24" ref={ref}>
      <h2
        className={`mb-6 text-sm font-bold uppercase tracking-wider text-muted-foreground transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        About
      </h2>

      <div className="space-y-6">
        <p
          className={`text-pretty leading-relaxed transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Software Engineer{" "}
          <span className="font-semibold text-primary">
            {" "}
            with 3+ years of frontend development experience
          </span>{" "}
          building scalable web applications using React, Next.js, and modern
          JavaScript frameworks. Currently pursuing an{" "}
          <span className="font-semibold text-primary">
            MSc in AI Technology
          </span>{" "}
          while delivering production-ready solutions for startups and
          enterprises. Proven track record of optimizing user experiences,
          automating workflows, and collaborating with cross-functional teams to
          ship impactful features. Passionate about bridging software
          engineering with emerging AI technologies.
        </p>

        <p
          className={`text-pretty leading-relaxed text-muted-foreground transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Proven track record of optimizing user experiences, automating
          workflows, and collaborating with cross-functional teams to ship
          impactful features. Passionate about bridging software engineering
          with emerging AI technologies.
        </p>

        <div className="space-y-6 pt-4">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={category}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <h3 className="mb-3 text-sm font-semibold text-foreground">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="font-mono text-xs transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
