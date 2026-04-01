'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Download } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resume', href: '/resume' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Contact', href: '/#contact' },
  ]

  const handleResumeDownload = () => {
    window.location.href = '/resume'
  }

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background/70 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-primary hover:text-accent transition-all duration-300"
          >
            Prajwal Sathawane
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-300 group"
              >
                {item.name}

                {/* 🔥 underline animation */}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleResumeDownload}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground border border-border rounded-lg hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300"
            >
              <Download size={16} />
              <span className="hidden lg:inline">Resume</span>
            </button>

            <Link
              href="/#contact"
              className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-accent hover:scale-[1.03] transition-all duration-300 shadow-sm"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-all duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-3 pb-4 space-y-2 border-t border-border/40 animate-in slide-in-from-top duration-300">

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary rounded-lg transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}

            <button
              onClick={() => {
                handleResumeDownload()
                setIsOpen(false)
              }}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary rounded-lg transition-all duration-200"
            >
              <Download size={16} />
              Resume
            </button>

            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-center mt-2 hover:bg-accent transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}