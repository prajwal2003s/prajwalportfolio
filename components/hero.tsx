'use client'

import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.txt'
    link.download = 'Prajwal_Sathawane_Resume.txt'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl dark:bg-primary/5" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl dark:bg-accent/5" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center md:text-left space-y-8">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 animate-fade-in">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <p className="text-sm font-medium text-foreground/70">Welcome to my portfolio</p>
            </div>

            {/* Name and role */}
            <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-primary font-semibold text-lg">Hi, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-balance">
                Prajwal Sathawane
              </h1>
              <p className="text-3xl md:text-4xl font-bold text-foreground/80">
                Full Stack Developer
              </p>
            </div>

            {/* Subheading */}
            <p className="text-lg text-foreground/70 max-w-xl text-balance animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Building real-world freelance projects and full-stack applications. Specialized in modern web technologies, system design, and delivering scalable solutions.
            </p>

           {/* CTA Buttons */}
<div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
  
  {/* ✅ FIXED BUTTON */}
  <a
    href="#freelance" // 🔥 CHANGED HERE
    className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
  >
    View My Work
    <ArrowRight size={20} />
  </a>

  <button
    onClick={handleResumeDownload}
    className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-border bg-background hover:bg-secondary hover:border-primary/50 transition-all duration-300 font-semibold"
  >
    <Download size={20} />
    Download Resume
  </button>
</div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <a
                href="https://github.com/prajwal2003s"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border/50 bg-card/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border/50 bg-card/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:prajwalsathawane2003@gmail.com"
                className="p-3 rounded-lg border border-border/50 bg-card/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="relative animate-slide-right" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary opacity-30 blur-lg" />
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 bg-card/50 backdrop-blur-sm">
                <Image
                  src="/profile.jpg"
                  alt="Prajwal Sathawane"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
