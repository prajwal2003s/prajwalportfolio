'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { jobDescriptionSchema, type JobDescriptionInput } from '@/lib/db/schema';
import { Loader, Send } from 'lucide-react';

interface ResumeFormProps {
  onSubmit: (data: JobDescriptionInput) => Promise<string>;
  isLoading?: boolean;
}

export function ResumeForm({ onSubmit, isLoading }: ResumeFormProps) {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<JobDescriptionInput>({
    resolver: zodResolver(jobDescriptionSchema),
  });

  const onFormSubmit = async (data: JobDescriptionInput) => {
    try {
      setError(null);
      setSuccess(null);
      
      const result = await onSubmit(data);
      
      if (result) {
        setSuccess('Resume generated successfully!');
        reset();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate resume');
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
      {/* Job Title */}
      <div className="space-y-2">
        <label htmlFor="jobTitle" className="block text-sm font-medium text-foreground">
          Job Title (Optional)
        </label>
        <input
          id="jobTitle"
          type="text"
          placeholder="e.g., Senior Full Stack Developer"
          {...register('jobTitle')}
          className="w-full px-4 py-2 rounded-lg border border-border bg-card/50 text-foreground placeholder-foreground/50 transition-colors duration-300 focus:outline-none focus:border-primary focus:bg-card"
        />
        {errors.jobTitle && (
          <p className="text-sm text-destructive">{errors.jobTitle.message}</p>
        )}
      </div>

      {/* Company Name */}
      <div className="space-y-2">
        <label htmlFor="companyName" className="block text-sm font-medium text-foreground">
          Company Name (Optional)
        </label>
        <input
          id="companyName"
          type="text"
          placeholder="e.g., Tech Company Inc."
          {...register('companyName')}
          className="w-full px-4 py-2 rounded-lg border border-border bg-card/50 text-foreground placeholder-foreground/50 transition-colors duration-300 focus:outline-none focus:border-primary focus:bg-card"
        />
        {errors.companyName && (
          <p className="text-sm text-destructive">{errors.companyName.message}</p>
        )}
      </div>

      {/* Job Description */}
      <div className="space-y-2">
        <label htmlFor="jobDescription" className="block text-sm font-medium text-foreground">
          Job Description <span className="text-destructive">*</span>
        </label>
        <textarea
          id="jobDescription"
          placeholder="Paste the complete job description here..."
          rows={8}
          {...register('jobDescription')}
          className="w-full px-4 py-2 rounded-lg border border-border bg-card/50 text-foreground placeholder-foreground/50 transition-colors duration-300 focus:outline-none focus:border-primary focus:bg-card resize-none"
        />
        {errors.jobDescription && (
          <p className="text-sm text-destructive">{errors.jobDescription.message}</p>
        )}
        <p className="text-xs text-foreground/50">
          Paste the complete job description to get a tailored resume
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4">
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="rounded-lg border border-primary/50 bg-primary/10 p-4">
          <p className="text-sm text-primary">{success}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || isLoading}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting || isLoading ? (
          <>
            <Loader size={20} className="animate-spin" />
            Generating Resume...
          </>
        ) : (
          <>
            <Send size={20} />
            Generate Resume
          </>
        )}
      </button>
    </form>
  );
}
