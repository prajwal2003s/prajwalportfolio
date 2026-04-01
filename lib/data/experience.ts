export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
  link?: string;
}

export const experience: Experience[] = [
  {
    id: 'freelancer',
    title: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    period: '2025 - Present',
    description: [
      'Developed and deployed multiple client websites and web applications',
      'Built Solar Rays Energy website and product catalog management system',
      'Created Tanshveda business website with responsive design and SEO optimization',
      'Developed Track Status app - a comprehensive client management system with live tracking capabilities',
      'Handled digital marketing and product catalogue management for various clients',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JavaScript'],
    link: 'https://github.com/prajwal2003s',
  },
  {
    id: 'hv-electricals',
    title: 'Part-Time Digital Operations Specialist',
    company: 'H.V Electricals',
    period: '2026 - Present',
    description: [
      'Manage and maintain company website and digital presence',
      'Develop and maintain Status Tracker ERP application for client management',
      'Create and manage product catalogues with real-time updates',
      'Handle digital marketing campaigns and online visibility',
      'Implement and optimize business processes through digital solutions',
      'Build responsive web interfaces for business operations',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    link: 'https://trackstatus2026.netlify.app',
  },
  {
    id: 'nova-bytes-internship',
    title: 'Web Development Intern',
    company: 'Nova Bytes Technology',
    period: '2025',
    description: [
      'Gained hands-on experience in full-stack web development',
      'Worked on real-world web development projects and client solutions',
      'Learned best practices in code structure, design patterns, and development workflows',
      'Collaborated with senior developers on production-level applications',
    ],
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Web Development'],
  },
];
