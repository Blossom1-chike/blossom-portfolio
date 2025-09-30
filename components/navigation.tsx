"use client"

import { useEffect, useState } from "react"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
  ]

  return (
    <nav className="fixed right-8 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`group flex items-center gap-3 transition-all ${
                activeSection === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span
                className={`h-px transition-all ${
                  activeSection === item.id
                    ? "w-16 bg-primary"
                    : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                }`}
              />
              <span className="text-xs font-medium uppercase tracking-wider">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
