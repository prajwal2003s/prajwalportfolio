'use client'

import { useRef } from 'react'
import { Download, Printer } from 'lucide-react'
import ResumeTemplate from '@/components/resume-template'

export default function ResumePage() {
  const resumeRef = useRef<HTMLDivElement>(null)

  const handleDownloadPDF = async () => {
    const element = resumeRef.current
    if (!element) return

    try {
      const canvas = await (window as any).html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
      })

      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/png')
      link.download = 'Prajwal_Sathawane_Resume.png'
      link.click()
    } catch (error) {
      console.error('Error generating PDF:', error)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="sticky top-0 z-40 backdrop-blur-md border-b border-border/50 bg-background/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Resume</h1>
            <div className="flex gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background hover:bg-secondary transition-all duration-300"
              >
                <Printer size={18} />
                <span className="hidden sm:inline">Print</span>
              </button>
              <button
                onClick={handleDownloadPDF}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:shadow-lg transition-all duration-300"
              >
                <Download size={18} />
                <span className="hidden sm:inline">Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Container */}
      <div className="py-8 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden" ref={resumeRef}>
            <ResumeTemplate />
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          body {
            background: white;
            padding: 0;
          }
          main {
            background: white;
            padding: 0;
          }
          nav,
          .sticky {
            display: none !important;
          }
          .py-8,
          .px-4 {
            padding: 0 !important;
          }
          .shadow-lg,
          .rounded-lg {
            box-shadow: none !important;
            border-radius: 0 !important;
          }
          div[style*='210mm'] {
            width: 100%;
            margin: 0;
            padding: 0;
            box-shadow: none;
          }
        }
      `}</style>
    </main>
  )
}
