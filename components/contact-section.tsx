'use client'

import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 dark:bg-secondary/10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section header */}
        <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
          Get In Touch
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let&apos;s Work Together
        </h2>
        <p className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto">
          I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email card */}
          <a
            href="mailto:prajwalsathawane2003@gmail.com"
            className="rounded-xl border border-border bg-card/50 hover:border-primary hover:bg-card transition-all duration-300 p-8 group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-foreground/60 text-sm">prajwalsathawane2003@gmail.com</p>
          </a>

          {/* GitHub card */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-border bg-card/50 hover:border-primary hover:bg-card transition-all duration-300 p-8 group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform">
              <Github size={24} />
            </div>
            <h3 className="font-bold mb-2">GitHub</h3>
            <p className="text-foreground/60 text-sm">prajwal2003s</p>
          </a>

          {/* LinkedIn card */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-border bg-card/50 hover:border-primary hover:bg-card transition-all duration-300 p-8 group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform">
              <Linkedin size={24} />
            </div>
            <h3 className="font-bold mb-2">LinkedIn</h3>
            <p className="text-foreground/60 text-sm">prajwal-sathawane</p>
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="mailto:prajwalsathawane2003@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
        >
          Send me an Email
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  )
}
