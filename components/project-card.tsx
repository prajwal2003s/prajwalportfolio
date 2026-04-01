'use client'

import { ArrowUpRight, Github } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { Project } from '@/lib/data/projects'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export default function ProjectCard({ project, featured }: ProjectCardProps) {
  const router = useRouter()

  const handleCardClick = () => {
    router.push(`/projects/${project.id}`)
  }

  return (
    <div onClick={handleCardClick} className="group relative h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl">
      {/* Card background with glass effect */}
      <div className="absolute inset-0 bg-card/50 backdrop-blur-sm border border-border group-hover:border-primary/30 transition-colors duration-300" />

      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-primary/20 border border-primary/50 text-primary text-xs font-semibold">
          Featured
        </div>
      )}

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500 opacity-0 group-hover:opacity-100" />

      <div className="relative p-6 h-full flex flex-col justify-between">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-foreground/70 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 my-4">
          {project.technologies.slice(0, featured ? 4 : 3).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-primary/15 text-primary text-xs font-medium transition-colors duration-300 group-hover:bg-primary/25"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > (featured ? 4 : 3) && (
            <span className="px-2.5 py-1 text-xs text-foreground/50">
              +{project.technologies.length - (featured ? 4 : 3)}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-border/50">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors duration-200 group/link"
            >
              Visit
              <ArrowUpRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors duration-200 ml-auto"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
