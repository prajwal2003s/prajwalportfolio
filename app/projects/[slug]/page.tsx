import { Metadata } from 'next'
import { getProjectById, projects } from '@/lib/data/projects'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ProjectCard from '@/components/project-card'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react'
import { notFound } from 'next/navigation'

interface ProjectDetailPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }))
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const project = getProjectById(params.slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Prajwal Portfolio`,
    description: project.longDescription || project.description,
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectById(params.slug)

  if (!project) {
    notFound()
  }

  // Get related projects (other projects)
  const relatedProjects = projects.filter((p) => p.id !== project.id).slice(0, 3)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft size={20} />
            All Projects
          </Link>

          {/* Project header */}
          <div className="mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
              Featured Project
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-foreground/60 mb-8">
              {project.longDescription || project.description}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
                >
                  Visit Project
                  <ArrowUpRight size={20} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-secondary transition-colors font-semibold"
                >
                  View Code
                  <Github size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-16 rounded-xl border border-border bg-card/50 p-8">
            <h2 className="text-xl font-bold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project details */}
          <div className="rounded-xl border border-border bg-card/50 p-12 mb-16">
            <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
            <div className="prose dark:prose-invert max-w-none text-foreground/70 space-y-4">
              <p>
                {project.longDescription || project.description}
              </p>
              <p>
                This project demonstrates my ability to design and implement complex full-stack applications with modern technologies, focusing on user experience, performance, and scalability.
              </p>
            </div>
          </div>

          {/* Related projects */}
          {relatedProjects.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Other Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <ProjectCard key={relatedProject.id} project={relatedProject} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
