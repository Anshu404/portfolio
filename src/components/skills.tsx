
'use client';

import { motion } from 'framer-motion';
import { Icons } from '@/components/icons';

// --- LOCAL ICONS FOR ML TOOLS (Taaki Icons.tsx edit na karna pade) ---

const CppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 128 128" className={className} fill="currentColor">
    <path fill="#00599C" d="M117.5 33.5l-15.8-9.2c-3.1-1.8-7-1.8-10.1 0L49.3 50.8c-3.1 1.8-5 5.2-5 8.8v63.5c0 3.6 1.9 6.9 5 8.8l42.3 24.4c3.1 1.8 7 1.8 10.1 0l42.3-24.4c3.1-1.8 5-5.2 5-8.8V59.6c0-3.6-1.9-6.9-5-8.8l-26.5-17.3zM115 97.4l-31.4 18.1L52.2 97.4V61.2l31.4-18.1 31.4 18.1v36.2z"/>
    <path fill="#00599C" d="M42.3 24.4L26.5 15.2c-3.1-1.8-7-1.8-10.1 0L.6 24.4C-2.5 26.2-2.5 30.8.6 32.6l15.8 9.2c3.1 1.8 7 1.8 10.1 0l15.8-9.2c3.1-1.8 3.1-6.4 0-8.2z"/>
    <g fill="#FFF">
        <path d="M103.4 67.8h-6.7v-6.7c0-2.1-1.7-3.8-3.8-3.8s-3.8 1.7-3.8 3.8v6.7h-6.7c-2.1 0-3.8 1.7-3.8 3.8s1.7 3.8 3.8 3.8h6.7v6.7c0 2.1 1.7 3.8 3.8 3.8s3.8-1.7 3.8-3.8v-6.7h6.7c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.8-3.8-3.8zM128.6 67.8h-6.7v-6.7c0-2.1-1.7-3.8-3.8-3.8s-3.8 1.7-3.8 3.8v6.7h-6.7c-2.1 0-3.8 1.7-3.8 3.8s1.7 3.8 3.8 3.8h6.7v6.7c0 2.1 1.7 3.8 3.8 3.8s3.8-1.7 3.8-3.8v-6.7h6.7c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.8-3.8-3.8z"/>
    </g>
    <path fill="#659AD2" d="M83.6 96.3c-2.9 1.7-5.9 2.5-8.9 2.5-4.8 0-9.4-2.1-12.4-5.9-4.8-6.1-3.6-15.1 2.7-19.6 2.5-1.8 5.5-2.8 8.6-2.8 4.6 0 9 2 12.1 5.5.9 1 2.3 1.3 3.6.8l5.5-2.3c1.9-.8 2.6-3.1 1.5-4.8-5-7.7-13.4-12.3-22.6-12.3-6.9 0-13.6 2.6-18.7 7.3-10.9 10-11.7 27.1-1.7 38 5.6 6.1 13.4 9.5 21.6 9.5 7.1 0 14-2.6 19.4-7.4 1.5-1.4 1.7-3.7.5-5.3l-4.5-5.9c-.9-1.2-2.5-1.5-3.8-.8-1 .6-2 1.1-2.9 1.6z"/>
  </svg>
)

const PytorchIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path fill="#EE4C2C" d="M12 0L2.4 16.8h19.2L12 0zm0 3.6l7.2 12.6H4.8L12 3.6z"/> 
    <circle cx="9" cy="18" r="2" fill="#EE4C2C"/>
    <rect x="13" y="14" width="4" height="8" fill="#EE4C2C"/>
  </svg>
)

const KerasIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path fill="#D00000" d="M24 0H0v24h24V0zM8.45 18.6l3.6-5.8 4.2 5.8H20l-5.8-7.8 5.4-7.2h-3.8l-4.2 5.8-1.8-2.6V3.6H6v15h2.45v-6.2l1.6 2.2-2.6 4h1z"/>
  </svg>
)

// --- UPDATED SKILLS DATA ---
const skillsData = [
  {
    name: "Python",
    icon: <Icons.python className="size-12" />, 
  },
  {
    name: "C++", // Added as requested
    icon: <CppIcon className="size-12 text-blue-600" />,
  },
  {
    name: "PyTorch", // Added for ML
    icon: <PytorchIcon className="size-12 text-orange-500" />,
  },
  {
    name: "Keras", // Added for ML
    icon: <KerasIcon className="size-12 text-red-600" />,
  },
  {
    name: "ML & AI",
    icon: <Icons.ai className="size-12" />,
  },
  {
    name: "RAG & LLMs",
    icon: <Icons.ai className="size-12" />,
  },
  {
    name: "FastAPI",
    icon: <Icons.fastapi className="size-12" />,
  },
  {
    name: "PostgreSQL",
    icon: <Icons.postgresql className="size-12" />,
  },
  {
    name: "Docker",
    icon: <Icons.docker className="size-12" />,
  },
  {
    name: "Next.js",
    icon: <Icons.nextjs className="size-12" />,
  },
  {
    name: "React",
    icon: <Icons.react className="size-12" />,
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const Skills = () => {
  return (
    <div className="mt-10 flex w-full flex-wrap justify-between gap-10 px-5 sm:justify-center sm:px-0 md:mt-14 lg:justify-between">
      {skillsData.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
          className="flex flex-col items-center gap-2"
        >
          {item.icon}
          <span className="text-sm font-medium text-muted-foreground">{item.name}</span>
        </motion.div>
      ))}
    </div>
  );
};