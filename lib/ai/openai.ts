import { projects } from '@/lib/data/projects';
import { freelanceProjects } from '@/lib/data/freelance-projects';
import { experience } from '@/lib/data/experience';

// Build context from existing portfolio data
function buildPortfolioContext(): string {
  const projectsList = projects
    .map((p) => `- ${p.title}: ${p.description} (${p.technologies.join(', ')})`)
    .join('\n');

  const freelanceList = freelanceProjects
    .map((p) => `- ${p.title} (${p.client}): ${p.description} (${p.technologies.join(', ')})`)
    .join('\n');

  const experienceList = experience
    .map((e) => `- ${e.position} at ${e.company} (${e.startDate} - ${e.endDate}): ${e.description}`)
    .join('\n');

  return `
Professional Background:
- Name: Prajwal Sathawane
- Full Stack Developer with expertise in modern web technologies
- Skilled in React, Next.js, Node.js, MongoDB, PostgreSQL, and more

Key Projects:
${projectsList}

Freelance Work:
${freelanceList}

Work Experience:
${experienceList}
`;
}

export async function generateResumeWithAI(
  jobDescription: string,
  jobTitle?: string,
  companyName?: string
): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error('OPENAI_API_KEY environment variable is not set');
  }

  const portfolioContext = buildPortfolioContext();

  const systemPrompt = `You are an expert resume writer and career coach. Your task is to generate a tailored resume section that matches a job description while accurately representing the candidate's experience and skills.

${portfolioContext}

When generating resume content:
1. Match the job requirements with the candidate's actual skills and experience
2. Use action verbs and quantifiable achievements
3. Format as a professional resume section (experiences/projects that match the job)
4. Be honest about capabilities - only mention skills that exist in the portfolio
5. Highlight the most relevant experience for this specific role
6. Keep the tone professional and impact-focused`;

  const userPrompt = `Job Posting Details:
Title: ${jobTitle || 'Not specified'}
Company: ${companyName || 'Not specified'}

Job Description:
${jobDescription}

Please generate a tailored resume section (focusing on relevant experiences and projects) that would appeal to this job posting. Include 3-4 key points that demonstrate how the candidate's background aligns with the role requirements.`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: systemPrompt,
          },
          {
            role: 'user',
            content: userPrompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(
        error.error?.message || `OpenAI API error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    const generatedContent = data.choices[0]?.message?.content;

    if (!generatedContent) {
      throw new Error('No content generated from OpenAI');
    }

    return generatedContent;
  } catch (error) {
    console.error('[v0] OpenAI API Error:', error);
    throw error;
  }
}
