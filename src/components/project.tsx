'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/lib/data';

type TProject = (typeof projectsData)[number];

type TProps = {
  project: TProject;
  index: number;
};

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * index },
  }),
};

export const Project = ({ project, index }: TProps) => {
  const { image, title, description, technologies, links } = project; 

  const githubUrl = (links as any)?.github || (project as any)?.github || ""; 
  const previewUrl = (links as any)?.preview || (project as any)?.preview || "";

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      // 👇 UPDATE HERE: Added 'h-full', 'justify-between'
      className="flex flex-col justify-between h-full rounded-xl border bg-white p-5 w-full shadow-sm dark:bg-white/5 dark:border-white/10"
    >
      {/* TOP CONTENT SECTION */}
      <div>
        {/* IMAGE */}
        <div className="overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            height={390}
            width={600}
            className="h-64 w-full object-cover object-top transition-transform hover:scale-105"
          />
        </div>

        {/* TITLE */}
        <h3 className="mt-5 text-xl font-semibold text-center dark:text-white">{title}</h3>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 mb-4">
          <Link
            href={githubUrl}
            target="_blank"
            className="px-5 py-2 rounded-full flex items-center gap-2 transition transform hover:scale-105
                       bg-gray-100 text-gray-900 border border-gray-200 hover:bg-gray-200
                       dark:bg-white/10 dark:text-white dark:border-white/10 dark:hover:bg-white/20"
          >
            Source Code
          </Link>

          {previewUrl && (
            <Link
              href={previewUrl}
              target="_blank"
              className="px-5 py-2 rounded-full flex items-center gap-2 transition transform hover:scale-105
                         bg-red-100 text-red-700 border border-red-200 hover:bg-red-200
                         dark:bg-red-900/30 dark:text-red-300 dark:border-red-800/50 dark:hover:bg-red-900/50"
            >
              Video Demo
            </Link>
          )}
        </div>

        {/* DESCRIPTION */}
        <p className="text-muted-foreground text-center dark:text-white/70 mb-4">
          {description}
        </p>
      </div>

      {/* BOTTOM SECTION: TECHNOLOGIES (Will stay at bottom) */}
      <div className="flex flex-wrap justify-center gap-2 mt-auto">
        {technologies.map((tech) => (
          <span
            className="rounded-full border px-3 py-1 text-sm bg-gray-50 dark:bg-white/5 dark:text-white/80 dark:border-white/10"
            key={tech}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};