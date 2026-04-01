import { NextRequest, NextResponse } from 'next/server';
import { jobDescriptionSchema } from '@/lib/db/schema';
import { generateResumeWithAI } from '@/lib/ai/openai';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedInput = jobDescriptionSchema.parse(body);

    // Generate resume using OpenAI
    const generatedResume = await generateResumeWithAI(
      validatedInput.jobDescription,
      validatedInput.jobTitle,
      validatedInput.companyName
    );

    return NextResponse.json(
      {
        success: true,
        generatedResume,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Resume generation error:', error);

    if (error instanceof Error) {
      // Validation errors
      if (error.message.includes('validation')) {
        return NextResponse.json(
          {
            success: false,
            error: 'Invalid input. Please check your job description.',
          },
          { status: 400 }
        );
      }

      // OpenAI API errors
      if (error.message.includes('OpenAI')) {
        return NextResponse.json(
          {
            success: false,
            error: 'Failed to generate resume. Please try again later.',
          },
          { status: 500 }
        );
      }

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred',
      },
      { status: 500 }
    );
  }
}
