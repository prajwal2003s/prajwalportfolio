'use client';

import { Download, RefreshCw } from 'lucide-react';
import { generatePDF } from '@/lib/pdf/generator';
import { useState } from 'react';

interface ResumePreviewProps {
  content: string;
  jobTitle: string;
  onReset: () => void;
}

export function ResumePreview({ content, jobTitle, onReset }: ResumePreviewProps) {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleDownloadPDF = async () => {
    try {
      setIsGeneratingPDF(true);
      const filename = `${jobTitle.replace(/\s+/g, '_')}_Resume.pdf`;
      await generatePDF(content, filename);
    } catch (error) {
      console.error('[v0] PDF generation error:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleDownloadPDF}
          disabled={isGeneratingPDF}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGeneratingPDF ? (
            <>
              <div className="animate-spin">⏳</div>
              Generating PDF...
            </>
          ) : (
            <>
              <Download size={20} />
              Download as PDF
            </>
          )}
        </button>
        <button
          onClick={onReset}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border bg-background hover:bg-secondary transition-all duration-300"
        >
          <RefreshCw size={20} />
          New Resume
        </button>
      </div>

      {/* Preview Content */}
      <div className="rounded-xl border border-border bg-card/50 p-8 max-h-96 overflow-y-auto">
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <div className="whitespace-pre-wrap text-sm text-foreground/90 leading-relaxed">
            {content}
          </div>
        </div>
      </div>

      {/* Copy Button */}
      <button
        onClick={() => {
          navigator.clipboard.writeText(content);
          alert('Resume content copied to clipboard!');
        }}
        className="w-full px-4 py-2 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors duration-300 text-sm font-medium"
      >
        Copy to Clipboard
      </button>
    </div>
  );
}
