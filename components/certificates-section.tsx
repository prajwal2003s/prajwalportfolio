'use client'

import { Award, ExternalLink, Calendar } from 'lucide-react'
import { certificates } from '@/lib/data/certificates'

export default function CertificatesSection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 space-y-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">
            Credentials
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Certifications & Awards
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Professional certifications and achievements demonstrating expertise in modern web technologies
          </p>
        </div>

        {/* Certificates grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, idx) => (
            <div
              key={cert.id}
              className="stagger-item rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-all duration-300 p-8"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/15 text-primary flex-shrink-0">
                  <Award size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground">
                    {cert.title}
                  </h3>
                  <p className="text-foreground/70 text-sm font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Meta info */}
              <div className="space-y-3 mb-5 pb-5 border-b border-border/50">
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <Calendar size={16} className="text-primary" />
                  <span>Issued: {cert.issuedDate}</span>
                  {cert.expiryDate && (
                    <>
                      <span className="text-foreground/50">•</span>
                      <span>Expires: {cert.expiryDate}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-3 mb-5">
                <p className="text-xs font-semibold text-foreground/60 uppercase tracking-widest">
                  Skills Covered
                </p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Credential link */}
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
                >
                  View Credential
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
