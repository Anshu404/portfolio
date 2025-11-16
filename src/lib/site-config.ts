import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Anshu Kumar Mandal | Full Stack Developer',
  description:
    "Hello, I'm Anshu — a Full Stack Developer specializing in React, TypeScript, Python, and cloud technologies. I build modern, scalable applications with clean UI, strong backend systems, and AI-powered features.",
  keywords: [
    'Anshu Kumar Mandal',
    'Full Stack Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Python',
    'AI Engineer',
    'Full Stack Engineer',
    'Web Developer',
    'Software Developer',
    'Portfolio',
    'Node.js',
    'Flask',
    'FastAPI',
    'JavaScript',
    'IIT Mandi',
    'Machine Learning',
    'Cloud Computing',
    'AWS',
    'Projects',
    'Frontend Developer',
    'Backend Developer',
  ],
  url: env.SITE_URL || 'http://localhost:3000',
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
