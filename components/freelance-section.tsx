'use client'

import { Calendar, CheckCircle } from 'lucide-react'
import { freelanceProjects } from '@/lib/data/freelance-projects'

export default function FreelanceSection() {
  return (
    <section id="freelance" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 space-y-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">
            Client Work
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Freelance Projects
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            A collection of successful client projects demonstrating full-stack development expertise and business impact
          </p>
        </div>

        {/* Projects timeline */}
        <div className="space-y-12">
          {freelanceProjects.map((project, idx) => (
            <div 
              key={project.id} 
              className="stagger-item rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 p-8 md:p-12"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left side - Project info */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
                      {project.client}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle size={18} className="text-primary" />
                      Key Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {project.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="text-foreground/70 flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-primary/15 text-primary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right side - Meta info */}
                <div className="space-y-6">
                  {/* Date */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <Calendar size={18} className="text-primary" />
                      Completion
                    </h4>
                    <p className="text-foreground/70">{project.completionDate}</p>
                  </div>

                  {/* Result */}
                  {project.result && (
                    <div className="rounded-lg bg-primary/10 border border-primary/30 p-4 space-y-2">
                      <p className="text-sm font-semibold text-primary">Impact</p>
                      <p className="text-sm text-foreground/80">
                        {project.result}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
