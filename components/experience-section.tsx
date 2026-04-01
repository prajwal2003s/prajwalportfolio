'use client'

import { experience } from '@/lib/data/experience'
import Link from 'next/link'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">
            Work History
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Professional Experience
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A timeline of my career journey and professional growth across leading companies
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={job.id} className="relative stagger-item" style={{ animationDelay: `${index * 0.15}s` }}>
              {/* Timeline connector */}
              {index !== experience.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-16 h-16 flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-background dark:ring-background" />
              </div>

              {/* Content */}
              <div className="ml-24 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-all duration-300 p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {job.title}
                    </h3>
                    {job.link ? (
                      <Link
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-semibold hover:underline"
                      >
                        {job.company}
                      </Link>
                    ) : (
                      <p className="text-primary font-semibold">{job.company}</p>
                    )}
                  </div>
                  <p className="text-foreground/60 text-sm font-medium mt-2 md:mt-0">
                    {job.period}
                  </p>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4">
                  {job.description.map((point, idx) => (
                    <li key={idx} className="text-foreground/70 flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                {job.technologies && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
