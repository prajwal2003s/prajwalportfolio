export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuedDate: string;
  expiryDate?: string;
  credentialUrl?: string;
  skills: string[];
}

export const certificates: Certificate[] = [
  {
    id: 'intershala-web-dev',
    title: 'Web Development Professional Certification',
    issuer: 'Intershala',
    issuedDate: 'December 2024',
    credentialUrl: 'https://intershala.com',
    skills: ['Web Development', 'React', 'JavaScript', 'HTML', 'CSS', 'Full-Stack Development', 'Responsive Design']
  },
  {
    id: 'nova-bytes-internship',
    title: 'Web Development Internship',
    issuer: 'Nova Bytes Technology',
    issuedDate: 'June 2025',
    credentialUrl: 'https://novabytes.com',
    skills: ['React', 'Web Development', 'JavaScript', 'Project Development', 'Client Solutions']
  }
];

export const getCertificates = () => certificates;
