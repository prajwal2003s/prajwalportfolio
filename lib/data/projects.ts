export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured: boolean;
  stats?: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 'ai-chat-platform',
    title: 'AI Chat Platform',
    description: 'Enterprise-grade chat application with AI-powered responses, real-time collaboration, and advanced conversation management.',
    longDescription: 'A sophisticated chat platform built with Next.js 16, featuring streaming AI responses, real-time messaging with WebSockets, persistent conversation storage via Supabase, user authentication with row-level security, full-text search capabilities, and an intuitive dark/light mode interface.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'AI SDK', 'Tailwind CSS', 'WebSockets'],
    link: 'https://ai-chat-platform.example.com',
    github: 'https://github.com/yourname/ai-chat-platform',
    featured: true,
    stats: [
      { label: 'Users', value: '2.5K+' },
      { label: 'Conversations', value: '50K+' },
      { label: 'Response Time', value: '<100ms' },
    ],
  },
  {
    id: 'design-system',
    title: 'Accessible Component Library',
    description: 'Production-ready React component library with 60+ accessible components, comprehensive documentation, and Storybook integration.',
    longDescription: 'A complete design system built with React, TypeScript, and Tailwind CSS. Includes form components, layouts, data displays, and interactive elements. All components follow WCAG 2.1 AA standards with proper ARIA labels. Published on npm with full TypeScript support and visual documentation.',
    technologies: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS', 'npm'],
    github: 'https://github.com/yourname/component-library',
    featured: true,
    stats: [
      { label: 'Components', value: '60+' },
      { label: 'NPM Downloads', value: '15K/mo' },
      { label: 'Test Coverage', value: '94%' },
    ],
  },
  {
    id: 'ecommerce-platform',
    title: 'Full-Stack E-Commerce Platform',
    description: 'Complete e-commerce solution with product management, shopping cart, Stripe payment integration, and admin dashboard.',
    longDescription: 'A full-stack e-commerce platform built with Next.js and PostgreSQL. Features include product catalog with filtering, shopping cart management, secure Stripe payment processing, order tracking, inventory management dashboard, and email notifications. Deployed on Vercel with automated deployments.',
    technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'Prisma', 'Vercel'],
    link: 'https://ecommerce-demo.example.com',
    github: 'https://github.com/yourname/ecommerce-platform',
    featured: true,
    stats: [
      { label: 'Products', value: '500+' },
      { label: 'Monthly Orders', value: '1.2K' },
      { label: 'Uptime', value: '99.9%' },
    ],
  },
  {
    id: 'analytics-dashboard',
    title: 'Real-Time Analytics Dashboard',
    description: 'Interactive data visualization dashboard with real-time metrics, custom reporting, and predictive analytics.',
    technologies: ['React', 'Recharts', 'PostgreSQL', 'D3.js', 'Node.js'],
    github: 'https://github.com/yourname/analytics-dashboard',
    featured: false,
    stats: [
      { label: 'Data Points', value: '1M+/day' },
      { label: 'Latency', value: '<200ms' },
    ],
  },
  {
    id: 'cli-tool',
    title: 'CLI Development Tool',
    description: 'Command-line tool for scaffolding modern web projects with customizable templates and best practices.',
    longDescription: 'A developer-friendly CLI tool that simplifies project setup. Includes templates for different architectures, automatic dependency installation, git initialization, and environment configuration. Built with TypeScript and published on npm.',
    technologies: ['TypeScript', 'Node.js', 'Commander.js', 'Inquirer', 'npm'],
    github: 'https://github.com/yourname/dev-cli',
    featured: false,
  },
  {
    id: 'mobile-app',
    title: 'Cross-Platform Mobile App',
    description: 'Native mobile application for iOS and Android with offline support and cloud synchronization.',
    technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript', 'Expo'],
    github: 'https://github.com/yourname/mobile-app',
    featured: false,
  },
  {
    id: 'blog-platform',
    title: 'Headless CMS & Blog',
    description: 'Modern blogging platform with markdown support, SEO optimization, and dynamic content management.',
    technologies: ['Next.js', 'Sanity', 'MDX', 'Vercel', 'Tailwind CSS'],
    link: 'https://blog.example.com',
    github: 'https://github.com/yourname/blog-cms',
    featured: false,
  },
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectById = (id: string) => projects.find(p => p.id === id);
