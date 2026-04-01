export interface Repository {
  id: string;
  name: string;
  description: string;
  url: string;
  stars: number;
  language: string;
  featured: boolean;
}

export interface GitHubStats {
  username: string;
  totalRepositories: number;
  followers: number;
  following: number;
  publicGists: number;
  repositoriesWithStars: Repository[];
}

export const repositories: Repository[] = [
  {
    id: 'ai-resume-generator',
    name: 'AI Resume Generator',
    description: 'AI-powered SaaS application that generates tailored resumes based on job descriptions using OpenAI API.',
    url: 'https://github.com/prajwal2003s/ai-resume-generator',
    stars: 0,
    language: 'TypeScript',
    featured: true
  },
  {
    id: 'track-status',
    name: 'Track Status - ERP App',
    description: 'Comprehensive client management and status tracking system with real-time updates and live tracking capabilities.',
    url: 'https://github.com/prajwal2003s/track-status',
    stars: 0,
    language: 'React',
    featured: true
  },
  {
    id: 'solar-rays-energy',
    name: 'Solar Rays Energy Website',
    description: 'Professional website for solar energy business showcasing services and lead generation.',
    url: 'https://github.com/prajwal2003s/solar-rays-energy',
    stars: 0,
    language: 'React',
    featured: true
  },
  {
    id: 'tanshveda-website',
    name: 'Tanshveda Business Website',
    description: 'Modern, responsive business website with product showcase and contact integration.',
    url: 'https://github.com/prajwal2003s/tanshveda',
    stars: 0,
    language: 'React',
    featured: true
  },
  {
    id: 'tattoo-portfolio',
    name: 'Tattoo Studio Portfolio',
    description: 'Portfolio website for tattoo studio with gallery showcase and booking system.',
    url: 'https://github.com/prajwal2003s/tattoo-studio',
    stars: 0,
    language: 'React',
    featured: false
  },
  {
    id: 'prajwal-portfolio',
    name: 'Professional Portfolio',
    description: 'My professional portfolio website showcasing projects, experience, and resume generator.',
    url: 'https://github.com/prajwal2003s/portfolio',
    stars: 0,
    language: 'TypeScript',
    featured: false
  }
];

export const githubStats: GitHubStats = {
  username: 'prajwal2003s',
  totalRepositories: 15,
  followers: 0,
  following: 0,
  publicGists: 0,
  repositoriesWithStars: repositories
};

export const getFeaturedRepositories = () => repositories.filter(r => r.featured);
export const getGitHubStats = () => githubStats;
