import { Github, Linkedin, Mail, ExternalLink, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about my background, experience, and passion for building great products.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="sticky top-0 z-40 backdrop-blur-md border-b border-border/50 bg-background/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200"
            >
              <ChevronLeft size={18} />
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Hero section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance">
            Full-Stack Developer & Designer
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl">
            I'm passionate about building beautiful, functional web applications that solve real problems. With expertise spanning frontend frameworks, backend systems, and design, I create seamless user experiences backed by robust architecture.
          </p>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Background */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Background</h2>
            <p className="text-foreground/70 leading-relaxed">
              I started my journey in web development over 5 years ago, beginning with HTML and CSS before progressing to JavaScript and modern frameworks. Over the years, I've built everything from small landing pages to complex enterprise applications serving thousands of users.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              My career has taught me the importance of clean code, thoughtful design, and understanding user needs. I'm committed to continuous learning and staying current with emerging technologies and best practices in the industry.
            </p>
          </div>

          {/* Skills & Expertise */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Frontend</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    React & Next.js
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Tailwind CSS & Styling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    UI/UX Design
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Backend</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Node.js & Express
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    PostgreSQL & MongoDB
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    API Design & REST
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Database Optimization
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Tools & Platforms</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Git & GitHub
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Vercel & Cloud Deployment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Docker & CI/CD
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    AWS & Cloud Services
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Other</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    System Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Performance Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Testing & QA
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Technical Documentation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* What drives me */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">What Drives Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-border bg-card/50">
                <h3 className="text-lg font-semibold mb-2">User-Centric Design</h3>
                <p className="text-foreground/70 text-sm">
                  I believe great products start with understanding user needs and creating intuitive, accessible experiences.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card/50">
                <h3 className="text-lg font-semibold mb-2">Clean Architecture</h3>
                <p className="text-foreground/70 text-sm">
                  Well-structured, maintainable code is essential. I focus on scalability and best practices in every project.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card/50">
                <h3 className="text-lg font-semibold mb-2">Continuous Learning</h3>
                <p className="text-foreground/70 text-sm">
                  The tech industry evolves rapidly. I stay current with emerging technologies and industry trends.
                </p>
              </div>
            </div>
          </div>

          {/* Connect section */}
          <div className="space-y-6 py-8 border-t border-border">
            <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>
            <p className="text-foreground/70 max-w-2xl">
              I&apos;m always interested in hearing about exciting projects and opportunities. Feel free to reach out through any of these channels.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:prajwalsathawane2003@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <Mail size={18} />
                <span className="font-medium">Email</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <Github size={18} />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <Linkedin size={18} />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
