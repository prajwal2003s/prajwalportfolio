export interface FreelanceProject {
  id: string;
  client: string;
  title: string;
  description: string;
  technologies: string[];
  completionDate: string;
  deliverables: string[];
  result?: string;
}

export const freelanceProjects: FreelanceProject[] = [
  // 🔥 MAIN PROJECT (STRONG ONE)
  {
    id: 'track-status-erp', // ✅ FIXED UNIQUE ID
    client: 'Freelance / Personal',
    title: 'Track Status - ERP & Client Management System',
    description: 'Developed a full-stack ERP system for tracking client status, managing operations, and real-time updates.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    completionDate: '2026',
    deliverables: [
      'Real-time status tracking system',
      'Client management dashboard',
      'Admin panel for operations',
      'Responsive UI for all devices',
      'Live updates and data handling'
    ],
    result: 'Used in real business operations for managing clients and workflow  Live at https://trackstatus2026.netlify.app'
     
  },{
    id: 'solar-rays-energy',
    client: 'Solar Rays Energy',
    title: 'Solar Rays Energy Website',
    description: 'Developed a responsive website for a solar business to showcase services and generate leads.',
    technologies: ['React', 'Tailwind CSS'],
    completionDate: '2026',
    deliverables: [
      'Fully responsive website design',
      'Service showcase and gallery',
      'Lead generation forms',
      'Mobile-optimized experience',
      'Fast loading performance'
    ],
    result: 'Live at newsolarraysenergy.netlify.app'
  },
  {
    id: 'solar-product-catalog',
    client: 'Solar Rays Energy',
    title: 'Solar Product Catalog Dashboard',
    description: 'Admin panel for managing solar products and catalog listings with real-time updates.',
    technologies: ['React', 'Node.js', 'Tailwind CSS'],
    completionDate: '2026',
    deliverables: [
      'Admin dashboard interface',
      'Product management system',
      'Catalog organization tools',
      'Real-time updates',
      'User-friendly interface'
    ],
    result: 'Live at solar-product-catalog-fovj.vercel.app'
  },
  {
    id: 'tanshveda-website',
    client: 'Tanshveda',
    title: 'Tanshveda Business Website',
    description: 'Modern business website with responsive UI and comprehensive product showcase.',
    technologies: ['React', 'Tailwind CSS'],
    completionDate: '2025',
    deliverables: [
      'Modern website design',
      'Product showcase',
      'Responsive layout',
      'SEO optimization',
      'Contact integration'
    ],
    result: 'Live at tanshveda.com'
  },
  {
    id: 'tattoo-studio',
    client: 'Tattoo Studio',
    title: 'Tattoo Studio Portfolio Website',
    description: 'Portfolio website with gallery showcase and contact system for booking appointments.',
    technologies: ['React', 'Tailwind CSS'],
    completionDate: '2026',
    deliverables: [
      'Portfolio gallery',
      'Artist showcase',
      'Contact and booking system',
      'Mobile-responsive design',
      'Image optimization'
    ],
    result: 'Live at tushar-tattoo-website.vercel.app'
  },

  

  // 🎓 COLLEGE PROJECTS
  {
    id: 'catering-management-system',
    client: 'College Project',
    title: 'Catering Service Management Platform',
    description: 'Developed a full-stack catering platform with booking system, real-time tracking, and secure payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    completionDate: '2025',
    deliverables: [
      'User-friendly catering booking system',
      'Custom thali selection and pricing',
      'Real-time order tracking with Socket.io',
      'Secure payment integration (Stripe/Razorpay)',
      'Admin dashboard for managing orders and menus'
    ],
    result: 'Reduced booking time by 30% and improved user experience'
  },
  {
    id: 'fire-alarm-system',
    client: 'College Project',
    title: 'BlazeGuard: IoT Fire Alarm Detection System',
    description: 'Built an Arduino-based intelligent fire detection system with sensors and real-time alert mechanism.',
    technologies: ['Arduino', 'IoT', 'Sensors'],
    completionDate: '2024',
    deliverables: [
      'Smoke and gas detection using MQ135 sensor',
      'Arduino-based real-time alert system',
      'Buzzer and alarm triggering mechanism',
      'Reliable detection with minimal false alerts',
      'Low-cost and scalable safety solution'
    ],
    result: 'Improved fire safety awareness with real-time detection system'
  }
];

export const getFreelanceProjects = () => freelanceProjects;