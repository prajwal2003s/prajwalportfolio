import { freelanceProjects } from '@/lib/data/freelance-projects'
import { ExternalLink } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Freelance Projects
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Real client work I’ve delivered with measurable results.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freelanceProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-border bg-card/50 hover:border-primary/50 transition p-6 flex flex-col"
            >
              {/* Client */}
              <p className="text-sm font-semibold text-primary mb-2">
                {project.client}
              </p>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-foreground/70 mb-4">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-primary/10 text-primary rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Result */}
              {project.result && (
                <p className="text-xs text-primary flex items-center gap-1 mt-auto">
                  <ExternalLink size={12} />
                  {project.result}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}