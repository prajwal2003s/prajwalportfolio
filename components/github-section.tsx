'use client'

import { Github, Star, GitFork, ExternalLink } from 'lucide-react'
import { getGitHubStats, getFeaturedRepositories } from '@/lib/data/github-stats'

export default function GitHubSection() {
  const stats = getGitHubStats()
  const featuredRepos = getFeaturedRepositories()

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 space-y-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">
            Open Source
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            GitHub Contributions
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Active open-source contributor with several popular repositories and a strong commitment to community
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="rounded-xl border border-border bg-card/50 p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {stats.totalRepositories}
            </p>
            <p className="text-sm text-foreground/70">Public Repositories</p>
          </div>
          <div className="rounded-xl border border-border bg-card/50 p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {stats.followers.toLocaleString()}
            </p>
            <p className="text-sm text-foreground/70">Followers</p>
          </div>
          <div className="rounded-xl border border-border bg-card/50 p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {stats.following}
            </p>
            <p className="text-sm text-foreground/70">Following</p>
          </div>
          <div className="rounded-xl border border-border bg-card/50 p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {stats.publicGists}
            </p>
            <p className="text-sm text-foreground/70">Public Gists</p>
          </div>
        </div>

        {/* Featured Repositories */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground">Featured Repositories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredRepos.map((repo, idx) => (
              <a
                key={repo.id}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="stagger-item rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 p-6 group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/15 text-primary">
                    <Github size={20} />
                  </div>
                  <ExternalLink size={16} className="text-foreground/50 group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {repo.name}
                </h4>
                <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                  {repo.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-foreground/60">
                      <Star size={14} />
                      <span className="text-xs font-medium">{repo.stars.toLocaleString()}</span>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-primary/70 bg-primary/10 px-2 py-1 rounded">
                    {repo.language}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/prajwal2003s"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-border bg-background hover:bg-secondary hover:border-primary/50 transition-all duration-300 font-semibold group"
          >
            <Github size={20} />
            View All Repositories
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
