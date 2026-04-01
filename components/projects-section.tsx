'use client'

import { ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { freelanceProjects } from '@/lib/data/freelance-projects' // ✅ ONLY THIS

export default function ProjectsSection() {
  // ✅ only freelance projects (no other data)
  const displayProjects = freelanceProjects.slice(0, 3)

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">
            Projects
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Freelance Projects
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Real client work I’ve delivered with measurable results.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {displayProjects.map((project, idx) => (
            <div key={project.id} className="group">
              <div className="rounded-2xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card transition-all duration-300 p-8 h-full flex flex-col">
                
                {/* Client */}
                <p className="text-sm font-semibold text-primary mb-2">
                  {project.client}
                </p>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 my-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-primary/15 text-primary text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Result */}
                <div className="mt-auto pt-4 border-t border-border/50">
                  {project.result && (
                    <p className="text-xs text-primary font-medium flex items-center gap-1">
                      <ExternalLink size={12} />
                      {project.result}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/#freelance"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-border bg-background/50 hover:bg-background hover:border-primary/50 transition-all duration-300 group"
          >
            <span className="font-semibold text-foreground">
              View All Freelance Work
            </span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </div>
    </section>
  )
}