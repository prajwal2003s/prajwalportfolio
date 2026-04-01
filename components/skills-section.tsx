'use client'

import { skills } from '@/lib/data/skills'

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20 space-y-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Skills & Technologies
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            A comprehensive set of tools and technologies I use to build modern, performant, and scalable applications
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, idx) => (
            <div 
              key={skillGroup.category} 
              className="rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 p-8 stagger-item"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-6 text-foreground flex items-center gap-3">
                <span className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIdx) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-primary/15 text-primary font-medium text-xs hover:bg-primary/25 transition-all duration-200"
                    style={{ animationDelay: `${idx * 0.1 + skillIdx * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
