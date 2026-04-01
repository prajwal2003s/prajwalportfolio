import { z } from 'zod';

// Validation schemas for form inputs
export const jobDescriptionSchema = z.object({
  jobDescription: z.string()
    .min(50, 'Job description must be at least 50 characters')
    .max(5000, 'Job description must be less than 5000 characters'),
  jobTitle: z.string()
    .min(3, 'Job title must be at least 3 characters')
    .max(100, 'Job title must be less than 100 characters')
    .optional(),
  companyName: z.string()
    .max(100, 'Company name must be less than 100 characters')
    .optional(),
});

export type JobDescriptionInput = z.infer<typeof jobDescriptionSchema>;

// Resume schema for database storage
export const resumeSchema = z.object({
  _id: z.string().optional(),
  jobDescription: z.string(),
  jobTitle: z.string().optional(),
  companyName: z.string().optional(),
  generatedResume: z.string(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type Resume = z.infer<typeof resumeSchema>;

// OpenAI response schema
export const openaiResponseSchema = z.object({
  generatedResume: z.string(),
});

export type OpenAIResponse = z.infer<typeof openaiResponseSchema>;
