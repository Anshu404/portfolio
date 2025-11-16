// import Link from 'next/link';

// import { buttonVariants } from '@/components/button';
// import { Icons } from '@/components/icons';
// import { cn } from '@/lib/utils';

// export const links = [
//   {
//     name: 'Home',
//     hash: '#home',
//   },
//   {
//     name: 'About',
//     hash: '#about',
//   },
//   {
//     name: 'Experience',
//     hash: '#experience',
//   },
//   {
//     name: 'Projects',
//     hash: '#projects',
//   },
//   {
//     name: 'Contact',
//     hash: '#contact',
//   },
// ] as const;

// export const projectsData = [
//   {
//     image: '/images/project-2.webp',
//     title: 'Next-starter',
//     description:
//       'A Next.js starter template, packed with features like TypeScript, Tailwind CSS, Next-auth, Eslint, Stripe, testing tools and more.',
//     technologies: ['Next.js', 'Tailwind', 'Shadcn/ui', 'Next-auth', 'Prisma'],
//     links: {
//       preview: 'https://next-starter-skolaczk.vercel.app',
//       github: 'https://github.com/Skolaczk/next-starter',
//       githubApi: 'https://api.github.com/repos/Skolaczk/next-starter',
//     },
//   },
//   {
//     image: '/images/project-1.webp',
//     title: 'SocialHub',
//     description:
//       'SocialHub is a next-generation social media app developed using Next.js and Nest.js.',
//     technologies: ['Next.js', 'TypeScript', ' Nest.js', 'Tailwind', 'Prisma'],
//     links: {
//       preview: 'https://socialhub-ms.vercel.app/',
//       github: 'https://github.com/Skolaczk/SocialHub',
//       githubApi: 'https://api.github.com/repos/Skolaczk/SocialHub',
//     },
//   },
// ] as const;

// export const experiencesData = [
//   {
//     title: 'Web developer intern',
//     company: 'WEB-BOX, Tarnobrzeg PL',
//     description:
//       'During this internship, I focused on two key areas: creating Wordpress plugins and managing website content, plugins, and settings.',
//     period: '2023',
//     technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress'],
//   },
//   {
//     title: 'Frontend developer & UI designer',
//     company: 'Freelancing, remote',
//     description:
//       'As a freelancer, I specialized in graphic design using Figma and website development using Next.js with Sanity CMS. I undertook projects independently, from design conceptualization to final implementation, ensuring client satisfaction.',
//     period: '2023 - 2024',
//     technologies: ['Next.js', 'TypeScript', 'Sanity CMS', 'Tailwind'],
//   },
//   {
//     title: 'Frontend developer intern',
//     company: 'Chop-chop, remote',
//     description:
//       'During my internship at Chop-Chop, I collaborated with an experienced IT team, focusing on tasks in Next.js. This experience provided valuable insights into teamwork and advanced my proficiency in Next.js.',
//     period: '2024',
//     technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
//   },
//   {
//     title: 'Frontend developer & UI designer',
//     company: 'GeoScan, remote',
//     description: (
//       <>
//         At GeoScan, I collaborate with frontend, backend, and GIS specialists to
//         build{' '}
//         <Link
//           className={cn(
//             buttonVariants({ variant: 'link' }),
//             'm-0 h-fit p-0 text-base'
//           )}
//           href="https://geoscan-app.com"
//           target="_blank"
//         >
//           geoscan-app.com
//         </Link>{' '}
//         — a platform for generating real estate reports. I’m responsible for
//         developing and maintaining the frontend, as well as designing UI/UX to
//         ensure a clear and intuitive user experience.
//       </>
//     ),
//     period: '2024 - present',
//     technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Leaflet'],
//   },
// ] as const;

// export const skillsData = [
//   { icon: <Icons.html className="size-12" /> },
//   { icon: <Icons.css className="size-12" /> },
//   { icon: <Icons.sass className="size-12" /> },
//   { icon: <Icons.tailwind className="size-12" /> },
//   { icon: <Icons.javascript className="size-12" /> },
//   { icon: <Icons.typescript className="size-12" /> },
//   { icon: <Icons.react className="size-12" /> },
//   { icon: <Icons.redux className="size-12" /> },
//   { icon: <Icons.nextjs className="size-12" /> },
//   { icon: <Icons.nestjs className="size-12" /> },
//   { icon: <Icons.prisma className="size-12" /> },
//   { icon: <Icons.docker className="size-12" /> },
// ] as const;




// import Link from 'next/link';

// import { buttonVariants } from '@/components/button';
// import { Icons } from '@/components/icons';
// import { cn } from '@/lib/utils';

// export const links = [
//   { name: 'Home', hash: '#home' },
//   { name: 'About', hash: '#about' },
//   { name: 'Experience', hash: '#experience' },
//   { name: 'Projects', hash: '#projects' },
//   { name: 'Contact', hash: '#contact' },
// ] as const;

// //
// // ⭐ YOUR PROJECTS (FROM YOUR RESUME)
// //
// export const projectsData = [
//   {
//     image: '/images/ai-travel-agent.webp',
//     title: 'AI Travel Agent – Frontend',
//     description:
//       'Next.js 14 + TypeScript app with a dashboard, charts, and chat UI for a conversational travel planner.',
//     technologies: [
//       'Next.js',
//       'React',
//       'TypeScript',
//       'Chart.js',
//       'Tailwind',
//       'Vercel',
//     ],
//     links: {
//       preview: 'https://youtu.be/M796-iVADto', // Front-end demo
//       github: 'https://github.com/Anshu404/my-trip-planner-project',
//       githubApi:
//         'https://api.github.com/repos/Anshu404/my-trip-planner-project',
//     },
//   },

//   {
//     image: '/images/ai-travel-backend.webp',
//     title: 'AI Travel Agent – Backend',
//     description:
//       'Flask microservice powering authentication, chat flow, LangChain-based agent, and API logic.',
//     technologies: [
//       'Python',
//       'Flask',
//       'LangChain',
//       'REST APIs',
//       'JWT',
//       'Twilio',
//     ],
//     links: {
//       preview: 'https://youtu.be/-JnPSY12L2U', // Chatbot video
//       github: 'https://github.com/Anshu404/ai_travel_agent',
//       githubApi: 'https://api.github.com/repos/Anshu404/ai_travel_agent',
//     },
//   },

//   {
//     image: '/images/nirmaan.webp',
//     title: 'Nirmaan Club Website',
//     description:
//       'Multi-page student club website with React component architecture, reusable UI, and responsive design.',
//     technologies: ['React', 'Tailwind', 'Figma', 'Component Architecture'],
//     links: {
//       preview: 'https://www.youtube.com/watch?v=gc9pb0mj9VY', // YouTube demo
//       github: 'https://github.com/Anshu404/club_website',
//       githubApi: 'https://api.github.com/repos/Anshu404/club_website',
//     },
//   },

//   {
//     image: '/images/scheme-seva.webp',
//     title: 'SchemeSeva – Govt Scheme Video Generator',
//     description:
//       'FastAPI backend system generating Hindi videos from scheme text using NLP-based matching and AWS pipelines.',
//     technologies: ['FastAPI', 'Python', 'AWS', 'NLP', 'Video Processing'],
//     links: {
//       preview: 'https://youtube.com/shorts/wJy1_hjEsp0', // Video link
//       github: 'https://github.com/Ayush-Sawarn/SchemeSeva',
//       githubApi:
//         'https://api.github.com/repos/Ayush-Sawarn/SchemeSeva',
//     },
//   },
// ] as const;
// export const experiencesData = [
//   {
//     title: 'Web Development Head',
//     company: 'Nirmaan Club, IIT Mandi',
//     description:
//       'Led the end-to-end development of the Nirmaan Club website. Managed a small technical team, built reusable front-end components, optimized performance, and handled deployments. Worked closely with club coordinators to convert requirements into clean UI/UX and production-ready features.',
//     period: '2024 - present',
//     technologies: ['React', 'Tailwind', 'Component Architecture', 'Git', 'UI/UX'],
//   },

//   {
//     title: 'AI/ML Intern',
//     company: 'DataAvengers, Remote',
//     description:
//       'Worked on AI/ML pipelines including data preprocessing, model training, and automation tasks. Built proof-of-concept models, optimized datasets, and collaborated with mentors to improve model performance and accuracy for real use cases.',
//     period: '2024',
//     technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'ML Pipelines'],
//   },

//   {
//     title: 'Web Developer & Content Writer',
//     company: 'Film Club, IIT Mandi',
//     description:
//       'Maintained the Film Club website, updated event pages, and implemented UI fixes. Additionally handled content writing, event descriptions, digital storytelling, and helped enhance the club’s online presence through structured content and clean UI updates.',
//     period: '2023 - present',
//     technologies: ['HTML', 'CSS', 'Content Writing', 'Storytelling'],
//   },
// ] as const;


// import Link from 'next/link';

// import { buttonVariants } from '@/components/button';
// import { Icons } from '@/components/icons';
// import { cn } from '@/lib/utils';

// export const links = [
//   { name: 'Home', hash: '#home' },
//   { name: 'About', hash: '#about' },
//   { name: 'Experience', hash: '#experience' },
//   { name: 'Projects', hash: '#projects' },
//   { name: 'Contact', hash: '#contact' },
// ] as const;

// //
// // ⭐ YOUR PROJECTS (FROM YOUR RESUME)
// //
// export const projectsData = [
//   {
//     image: '/images/ai-travel-agent.webp',
//     title: 'AI Travel Agent – Frontend',
//     description:
//       'Next.js 14 + TypeScript app with a dashboard, charts, and chat UI for a conversational travel planner.',
//     technologies: [
//       'Next.js',
//       'React',
//       'TypeScript',
//       'Chart.js',
//       'Tailwind',
//       'Vercel',
//     ],
//     links: {
//       preview: 'https://youtu.be/M796-iVADto', // Front-end demo
//       github: 'https://github.com/Anshu404/my-trip-planner-project',
//       githubApi:
//         'https://api.github.com/repos/Anshu404/my-trip-planner-project',
//     },
//   },

//   {
//     image: '/images/ai-travel-backend.webp',
//     title: 'AI Travel Agent – Backend',
//     description:
//       'Flask microservice powering authentication, chat flow, LangChain-based agent, and API logic.',
//     technologies: [
//       'Python',
//       'Flask',
//       'LangChain',
//       'REST APIs',
//       'JWT',
//       'Twilio',
//     ],
//     links: {
//       preview: 'https://youtu.be/-JnPSY12L2U', // Chatbot video
//       github: 'https://github.com/Anshu404/ai_travel_agent',
//       githubApi: 'https://api.github.com/repos/Anshu404/ai_travel_agent',
//     },
//   },

//   {
//     image: '/images/nirmaan.webp',
//     title: 'Nirmaan Club Website',
//     description:
//       'Multi-page student club website with React component architecture, reusable UI, and responsive design.',
//     technologies: ['React', 'Tailwind', 'Figma', 'Component Architecture'],
//     links: {
//       preview: 'https://www.youtube.com/watch?v=gc9pb0mj9VY', // YouTube demo
//       github: 'https://github.com/Anshu404/club_website',
//       githubApi: 'https://api.github.com/repos/Anshu404/club_website',
//     },
//   },

//   {
//     image: '/images/scheme-seva.webp',
//     title: 'SchemeSeva – Govt Scheme Video Generator',
//     description:
//       'FastAPI backend system generating Hindi videos from scheme text using NLP-based matching and AWS pipelines.',
//     technologies: ['FastAPI', 'Python', 'AWS', 'NLP', 'Video Processing'],
//     links: {
//       preview: 'https://youtube.com/shorts/wJy1_hjEsp0', // Video link
//       github: 'https://github.com/Ayush-Sawarn/SchemeSeva',
//       githubApi:
//         'https://api.github.com/repos/Ayush-Sawarn/SchemeSeva',
//     },
//   },
// ] as const;
// export const experiencesData = [
//   {
//     title: 'Web Development Head',
//     company: 'Nirmaan Club, IIT Mandi',
//     description:
//       'Led the end-to-end development of the Nirmaan Club website. Managed a small technical team, built reusable front-end components, optimized performance, and handled deployments. Worked closely with club coordinators to convert requirements into clean UI/UX and production-ready features.',
//     period: '2024 - present',
//     technologies: ['React', 'Tailwind', 'Component Architecture', 'Git', 'UI/UX'],
//   },

//   {
//     title: 'AI/ML Intern',
//     company: 'DataAvengers, Remote',
//     description:
//       'Worked on AI/ML pipelines including data preprocessing, model training, and automation tasks. Built proof-of-concept models, optimized datasets, and collaborated with mentors to improve model performance and accuracy for real use cases.',
//     period: '2024',
//     technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'ML Pipelines'],
//   },

//   {
//     title: 'Web Developer & Content Writer',
//     company: 'Film Club, IIT Mandi',
//     description:
//       'Maintained the Film Club website, updated event pages, and implemented UI fixes. Additionally handled content writing, event descriptions, digital storytelling, and helped enhance the club’s online presence through structured content and clean UI updates.',
//     period: '2023 - present',
//     technologies: ['HTML', 'CSS', 'Content Writing', 'Storytelling'],
//   },
//   ] as const;


//   //
// // SKILLS (unchanged)
// //
// export const skillsData = [
//   { icon: <Icons.html className="size-12" /> },
//   { icon: <Icons.css className="size-12" /> },
//   { icon: <Icons.sass className="size-12" /> },
//   { icon: <Icons.tailwind className="size-12" /> },
//   { icon: <Icons.javascript className="size-12" /> },
//   { icon: <Icons.typescript className="size-12" /> },
//   { icon: <Icons.react className="size-12" /> },
//   { icon: <Icons.redux className="size-12" /> },
//   { icon: <Icons.nextjs className="size-12" /> },
//   { icon: <Icons.nestjs className="size-12" /> },
//   { icon: <Icons.prisma className="size-12" /> },
//   { icon: <Icons.docker className="size-12" /> },
// ] as const;






// ======================================================
// IMPORTS
// ======================================================
import Link from "next/link";
import { buttonVariants } from "@/components/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

// ======================================================
// NAVIGATION LINKS
// ======================================================
export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Contact", hash: "#contact" },
] as const;

// ======================================================
// PROJECTS SECTION
// ======================================================
export const projectsData = [
  {
    image: "/images/ai_travel_frontend.png",
    title: "AI Travel Agent – Frontend",
    description:
      "Next.js 14 + TypeScript app with a dashboard, charts, and chat UI for a conversational travel planner.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Chart.js",
      "Tailwind",
      "Vercel",
    ],
    links: {
      preview: "https://youtu.be/M796-iVADto",
      github: "https://github.com/Anshu404/my-trip-planner-project",
      githubApi:
        "https://api.github.com/repos/Anshu404/my-trip-planner-project",
    },
  },

  {
    image: "/images/ai_travel_backend.png",
    title: "AI Travel Agent – Backend",
    description:
      "Flask microservice powering authentication, chat flow, LangChain-based agent, and API logic.",
    technologies: ["Python", "Flask", "LangChain", "REST APIs", "JWT", "Twilio"],
    links: {
      preview: "https://youtu.be/-JnPSY12L2U",
      github: "https://github.com/Anshu404/ai_travel_agent",
      githubApi: "https://api.github.com/repos/Anshu404/ai_travel_agent",
    },
  },

  {
    image: "/images/nirmaan.png",
    title: "Nirmaan Club Website",
    description:
      "Multi-page student club website with React component architecture, reusable UI, and responsive design.",
    technologies: ["React", "Tailwind", "Figma", "Component Architecture"],
    links: {
      preview: "https://www.youtube.com/watch?v=gc9pb0mj9VY",
      github: "https://github.com/Anshu404/club_website",
      githubApi: "https://api.github.com/repos/Anshu404/club_website",
    },
  },

  {
    image: "/images/scheme_seva.png",
    title: "SchemeSeva – Govt Scheme Video Generator",
    description:
      "FastAPI backend system generating Hindi videos from scheme text using NLP and AWS pipelines.",
    technologies: ["FastAPI", "Python", "AWS", "NLP", "Video Processing"],
    links: {
      preview: "https://youtube.com/shorts/wJy1_hjEsp0",
      github: "https://github.com/Ayush-Sawarn/SchemeSeva",
      githubApi: "https://api.github.com/repos/Ayush-Sawarn/SchemeSeva",
    },
  },
] as const;

// ======================================================
// EXPERIENCE SECTION
// ======================================================
export const experiencesData = [
  {
    title: "Web Development Head",
    company: "Nirmaan Club, IIT Mandi",
    certificate:"https://drive.google.com/file/d/1VyOZLDugUooS37AsT6m6Nkqu4GeRpwYK/view",
    description:
      "Led the end-to-end development of the Nirmaan Club website. Managed a technical team, built reusable front-end components, optimized performance, and handled deployments.",
    period: "2024 - present",
    technologies: [
      "React",
      "Tailwind",
      "Component Architecture",
      "Git",
      "UI/UX",
    ],
  },

  {
    certificate: "https://drive.google.com/file/d/1NgtYYTSTT9lHtNt1i-LC2F8tHlgcztZG/view?usp=drive_link",
    title: "AI/ML Intern",
    company: "DataAvengers, Remote",
    description:
      "Worked on ML pipelines including data preprocessing, model training, and automation tasks. Built POC models and optimized datasets for better performance.",
    period: "2024",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "ML Pipelines"],
  },

  {
    title: "Web Developer & Content Writer",
    company: "Film Club, IIT Mandi",
    description:
      "Maintained the Film Club website, updated event pages, and implemented UI fixes. Also handled event descriptions, digital storytelling, and online content.",
    period: "2023 - present",
    technologies: ["HTML", "CSS", "Content Writing", "Storytelling"],
  },
] as const;

// ======================================================
// SKILLS SECTION
// ======================================================
export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
