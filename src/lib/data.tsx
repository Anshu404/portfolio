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
  { name: "Certificates",hash: "#certificates"},
  { name: "Contact", hash: "#contact" },
] as const;



























// ======================================================
// PROJECTS SECTION
// ======================================================
export const projectsData = [
  {
    title: "AI Travel Agent- Full Stack",
    description:
      "Full-stack AI assistant for real-time itinerary planning via Web & WhatsApp. Features LangChain-based conversational flows, Google API integration, and JWT authentication.",
    technologies: ["Python", "LangChain", "Next.js", "Flask", "Twilio", "LLMs"],
    image: "/images/ai_travel_frontend.png", // Ensure this image exists in public/images
    links: {
      github: "https://github.com/Anshu404/ai_travel_agent",
      preview: "https://www.youtube.com/watch?v=wj7qu6uyIYQ",
    },
  },
  {
    title: "CalmlyAI - Mental Health Chatbot",
    description:
      "RAG-based conversational agent offering empathetic support. Uses fine-tuned LLMs and ChromaDB to minimize hallucinations and deliver context-aware CBT responses.",
    technologies: ["Python", "RAG", "ChromaDB", "LLMs", "Gradio", "NLP"],
    image: "/images/calmly_ai.png", // Rename your image to this
    links: {
      github: "https://github.com/Anshu404/CalmlyAI",
      preview: "https://www.youtube.com/watch?v=fcec2pzTCY0&t=9s",
    },
  },
  {
    title: "AI Travel Agent – Backend",
    description:
      "Flask microservice powering authentication, chat flow, LangChain-based agent, and API logic. Handles real-time communication via Twilio and secure JWT auth.",
    technologies: ["Python", "Flask", "LangChain", "REST APIs", "JWT", "Twilio"],
    image: "/images/ai_travel_backend.png",
    links: {
      github: "https://github.com/Anshu404/ai_travel_agent",
      preview: "https://youtu.be/-JnPSY12L2U",
    },
  },
  {
    title: "Walmart Sales Forecaster",
    description:
      "Hybrid forecasting model (XGBoost + Time-Series) reducing sales prediction error by 18% for 1000+ products. Improved inventory management and supply chain efficiency.",
    technologies: ["Python", "XGBoost", "Time-Series", "ML", "Data Analysis"],
    image: "/images/walmart_forecaster.png", // Rename your image to this
    links: {
      github: "https://github.com/AnshAttre/walmart_sparkathon_009",
      preview: "https://www.youtube.com/watch?v=6Bu5NQmRngo",
    },
  },
  {
    title: "Credit Risk Prediction (Fintech)",
    description:
      "Ranked 4th in AiHack India 2025. Built a credit default prediction system using CatBoost/XGBoost ensembles and adversarial validation, achieving 0.678 AUC.",
    technologies: ["CatBoost", "XGBoost", "Feature Engineering", "Python"],
    image: "/images/credit_risk.png", // Rename your image to this
    links: {
      github: "https://github.com/Anshu404/credit_default_modeling_aihack25",
      preview: "https://drive.google.com/file/d/1r2vur3PP1-edjVDsTvPIgcv4aKwJXbQ9/view?usp=sharing",
    },
  },
  {
    title: "Meitei Mayek OCR System",
    description:
      "End-to-end CRNN (CNN + BiLSTM) system for low-resource Indic script OCR. Achieved 91.4% character accuracy using custom synthetic data augmentation pipelines.",
    technologies: ["PyTorch", "CRNN", "Deep Learning", "Computer Vision"],
    image: "/images/ocr_system.png", // Rename your image to this
    links: {
      github: "https://github.com/Anshu404/NLP_MEITI_MAYEK",
      preview: "https://drive.google.com/file/d/11OLHeo5Q5iixKLb-7sRY7WqNRklyfagu/view",
    },
  },
  {
    title: "SchemeSeva - Gov Scheme AI",
    description:
      "Social impact AI platform simplifying government schemes via semantic search. Features multilingual video generation and NLP-driven policy matching.",
    technologies: ["NLP", "FastAPI", "React Native", "GenAI", "K-NN"],
    image: "/images/scheme_seva.png", // Existing image
    links: {
      github: "https://github.com/Ayush-Sawarn/SchemeSeva",
      preview: "https://youtube.com/shorts/wJy1_hjEsp0?feature=share",
    },
  },
  {
    title: "Real-Time Chess Backend",
    description:
      "Scalable multiplayer chess server using Node.js and Socket.IO. Handles real-time matchmaking, game logic, and state synchronization with Redis caching.",
    technologies: ["Node.js", "Socket.IO", "Redis", "TypeScript", "System Design"],
    image: "/images/chess_backend.png", // Rename your image to this
    links: {
      github: "https://github.com/Anshu404/chess_backend",
      preview: "", 
    },
  },
  {
    title: "Nirmaan Club Website",
    description:
      "Official club platform built with Next.js and TypeScript. Features reusable component architecture, dynamic API integration, and optimized responsive UI.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "React"],
    image: "/images/nirmaan.png", // Existing image
    links: {
      github: "https://github.com/Anshu404/club_website",
      preview: "https://club-website-vert-alpha.vercel.app/",
    },
  },
  {
    title: "Japanese Interview Chatbot",
    description:
      "Interactive language learning chatbot using Ollama LLMs and FastAPI. Designed to practice Japanese interview etiquette with real-time feedback.",
    technologies: ["FastAPI", "Ollama", "GenAI", "JavaScript"],
    image: "/images/japanese_chatbot.png", // Rename your image to this
    links: {
      github: "https://github.com/Anshu404/Japanese-Interview",
      preview: "https://youtu.be/oHJT6yhOwz8",
    },
  },
] as const;
























// ======================================================
// EXPERIENCE SECTION
// ======================================================
export const experiencesData = [
  // 1. New Experience: Collegedunia (Added at the top)
  {
    title: "Machine Learning Intern",
    company: "Collegedunia",
    certificate: "https://drive.google.com/file/d/11UbBvnwFqg4ri31zpgqcFzmyQLhrJAio/view?usp=drive_link", // Certificate later aayega, abhi empty rakha hai
    description:
      "Worked on a live project analyzing student reviews and college data. Built predictive models using Python to classify user sentiment and recommend colleges. Optimized data processing pipelines for better accuracy.",
    period: "Nov 2025 - Jan 2026",
    technologies: [
      "Python",
      "NLP",
      "Scikit-Learn",
      "Predictive Modeling",
    ],
  },

  // 2. Existing: Nirmaan Club
  {
    title: "Web Development Head",
    company: "Nirmaan Club, IIT Mandi",
    certificate: "https://drive.google.com/file/d/1VyOZLDugUooS37AsT6m6Nkqu4GeRpwYK/view",
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

  // 3. Existing: DataAvengers
  {
    title: "AI/ML Intern",
    company: "DataAvengers, Remote",
    certificate: "https://drive.google.com/file/d/1NgtYYTSTT9lHtNt1i-LC2F8tHlgcztZG/view?usp=drive_link",
    description:
      "Worked on ML pipelines including data preprocessing, model training, and automation tasks. Built POC models and optimized datasets for better performance.",
    period: "2024",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "ML Pipelines"],
  },

  // 4. Existing: Film Club
  {
    title: "Web Developer & Content Writer",
    company: "Film Club, IIT Mandi",
    certificate: "",
    description:
      "Maintained the Film Club website, updated event pages, and implemented UI fixes. Also handled event descriptions, digital storytelling, and online content.",
    period: "2023 - present",
    technologies: ["HTML", "CSS", "Content Writing", "Storytelling"],
  },
] as const;

// NOTE: Humne skillsData yahan se hata diya hai kyunki humne use 
// directly 'components/skills.tsx' mein define kar diya tha. 
// Agar yahan rakhte toh purane icons (HTML/CSS) ki wajah se crash hota.





// ======================================================
// CERTIFICATES SECTION
// ======================================================
export const certificatesData = [
  {
    title: "4th Rank - AiHack India 2025",
    description:
      "Secured 4th Rank out of 60+ teams in Aiful Corp's credit risk challenge. Engineered a robust ML pipeline improving AUC from 0.59 to 0.678 using advanced feature engineering, class-imbalance handling, and a weighted ensemble of CatBoost & XGBoost models.",
    tags: ["Machine Learning", "Fintech", "XGBoost", "Ensembling"],
    imageUrl: "/images/cert_aihack.png",
    link: "https://drive.google.com/file/d/1rpPQ9d6LeNVMmzfTj7Yd-ZPAlOhFke4-/view?usp=drive_link",
  },
  {
    title: "AI/ML Intern - Collegedunia",
    description:
      "Successfully completed an internship as an Artificial Intelligence/Machine Learning Intern. Worked on a live project from Dec 2025 to Feb 2026, demonstrating exemplary performance in building and optimizing AI models for real-world applications.",
    tags: ["Artificial Intelligence", "Machine Learning", "Collegedunia", "Live Project"],
    imageUrl: "/images/cert_collegedunia.png", // Ensure you save the image with this name in public/images
    link: "https://drive.google.com/file/d/11UbBvnwFqg4ri31zpgqcFzmyQLhrJAio/view?usp=drive_link", // Yahan apna Google Drive link daal dena
  },
  {
    title: "AOTS-JEC Japanese Business Culture",
    description:
      "Completed the 'Insights into Business Culture and Skills in Japanese Companies' program organized by AOTS (Japan) in collaboration with IIT Mandi. Gained critical cross-cultural professional skills and understanding of Japanese corporate protocols.",
    tags: ["Japanese Culture", "Business Skills", "AOTS", "International Relations"],
    imageUrl: "/images/cert_aots.png", // Ensure you save the image with this name in public/images
    link: "https://drive.google.com/file/d/1nQiFohe3z9CG4p1Ps8NlfNZiU0z37XEM/view?usp=drive_link", // Yahan apna Google Drive link daal dena
  },
  {
    title: "Generative AI Mastery Workshop",
    description:
      "Completed India's Biggest GenAI Buildathon by NxtWave/OpenAI Academy. Gained hands-on experience in building and deploying state-of-the-art Large Language Model (LLM) solutions, focusing on RAG pipelines and real-world AI applications.",
    tags: ["GenAI", "OpenAI", "LLMs", "Deployment"],
    imageUrl: "/images/cert_genai.png", 
    link: "https://drive.google.com/file/d/18KGentWxOb2FCosBWrrNg76cVpwG4zUO/view?usp=drive_link",
  },
  {
    title: "Build Your Own Chatbot - IBM",
    description:
      "Developed an open-source, uncensored chatbot using FastAPI and Ollama. Mastered prompt engineering, REST API integration, and full-stack implementation to create a specialized Japanese interview preparation agent.",
    tags: ["FastAPI", "Ollama", "Prompt Engineering", "GenAI"],
    imageUrl: "/images/cert_ibm_chat.png",
    link: "https://courses.cognitiveclass.ai/certificates/9305a6d058764186a46badedd544e955",
  },
  {
    title: "IBM Python for Data Science",
    description:
      "Certified by Cognitive Class (IBM) in applied data science. Mastered data manipulation with Pandas/NumPy and implemented a basic Retrieval-Augmented Generation (RAG) project, demonstrating strong proficiency in Python analytical workflows.",
    tags: ["Data Science", "Python", "Pandas", "IBM"],
    imageUrl: "/images/cert_ibm_python.png", // Make sure this image exists
    link: "https://courses.cognitiveclass.ai/certificates/9f4c1702c9a64899a7bdead7d32cdc18",
  },
  {
    title: "Data Analyst Intern - Data Avengers",
    description:
      "Analyzed extensive student engagement data using Pandas & Matplotlib. Identified critical drop-off points and provided data-driven recommendations that directly led to the strategic redesign of three core lab sessions.",
    tags: ["Data Analytics", "Pandas", "Visualization", "SQL"],
    imageUrl: "/images/cert_internship.png",
    link: "https://drive.google.com/file/d/1NgtYYTSTT9lHtNt1i-LC2F8tHlgcztZG/view?usp=drive_link",
  },
  {
    title: "KrackHack 2.0 Hackathon",
    description:
      "Participated in a 48-hour intensive hackathon organized by Google Developer Groups, IIT Mandi. Collaborated to build impactful tech solutions, demonstrating rapid prototyping skills, effective teamwork, and technical expertise under tight deadlines.",
    tags: ["Hackathon", "Teamwork", "Google DG", "Prototyping"],
    imageUrl: "/images/cert_krackhack.png", // Make sure this image exists
    link: "https://certificate.givemycertificate.com/c/a1678850-e9bd-4556-80e1-0d03fd73432a",
  },
  {
    title: "AlgoUniversity Tech Fellow",
    description:
      "Qualified Stage 1 (Top 8% of 250k+ participants) and advanced to Stage 2 of the Fellowship. Solved complex algorithmic problems, strengthening core competency in Data Structures and Algorithms through rigorous competitive assessments.",
    tags: ["DSA", "Algorithms", "Problem Solving", "Fellowship"],
    imageUrl: "/images/cert_algo.png", // Make sure this image exists
    link: "https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/atf_stage_1_25/anshu-kumar-mandal.png",
  },
  {
    title: "LeetCode 100 Days Challenge",
    description:
      "Awarded the 100 Days Badge for consistency. Solved 350+ algorithmic problems (200+ Medium, 50+ Hard) across various data structures, maintaining a 1700+ contest rating and demonstrating disciplined coding habits.",
    tags: ["DSA", "Competitive Programming", "Algorithms"],
    imageUrl: "/images/cert_leetcode.png",
    link: "https://drive.google.com/file/d/1RDlXvjXXiv3rYLK7_TzGIbQcLIZZxuSJ/view?usp=drive_link",
  },
  {
    title: "CP Summer Camp 2024",
    description:
      "Completed an intensive competitive programming training camp by IICPC (Inter IIT), sponsored by Algozenith. Honed advanced algorithmic skills and coding proficiency through mentorship from IIT faculty and team-based contests.",
    tags: ["Competitive Programming", "Algorithms", "IICPC"],
    imageUrl: "/images/cert_cp_camp.png", // Make sure this image exists
    link: "https://drive.google.com/file/d/1xLXVEF6iqcSdmFi9GtiRepBLz3tav5bp/view?usp=drive_link",
  },
  {
    title: "Web Development Head - Nirmaan",
    description:
      "Led the technical team for the official SNTC club website at IIT Mandi. Managed full-stack development using Next.js and Tailwind CSS, overseeing deployment and receiving a Certificate of Appreciation for leadership.",
    tags: ["Leadership", "Next.js", "Team Management", "React"],
    imageUrl: "/images/cert_nirmaan.png",
    link: "https://drive.google.com/file/d/1VyOZLDugUooS37AsT6m6Nkqu4GeRpwYK/view?usp=sharing",
  },
  {
    title: "Regional Mathematical Olympiad (RMO)",
    description:
      "Secured a Top 10 rank in the South Bihar region, qualifying for the prestigious Indian National Mathematical Olympiad (INMO) 2020. Demonstrated exceptional analytical and mathematical problem-solving skills at a national level.",
    tags: ["Mathematics", "Olympiad", "Analytical Skills"],
    imageUrl: "/images/cert_rmo.png",
    link: "https://drive.google.com/file/d/1DKLKTDH7RK1GQqkGYtDKhAieKlP-3Yst/view?usp=sharing",
  },
  {
    title: "Poetry & Creative Writing",
    description:
      "Passionate about creative writing as a tool for expression. Explores themes of dreams and hope, helping maintain a balanced perspective and fostering innovative thinking alongside technical pursuits.",
    tags: ["Creativity", "Writing", "Soft Skills"],
    imageUrl: "/images/cert_poetry.png",
    link: "https://drive.google.com/file/d/1Anp72QBhbtKa1PfYQ3JMXkoufmn_2aiX/view?usp=sharing",
  },
] as const;