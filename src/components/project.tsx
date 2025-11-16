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
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export const Project = ({ project, index }: TProps) => {
  const { image, title, description, technologies, links } = project;

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className="flex flex-col rounded border p-5 w-full"
    >
      {/* IMAGE */}
      <div className="overflow-hidden rounded">
        <Image
          src={image}
          alt={title}
          height={390}
          width={600}
          className="rounded w-full object-cover transition-transform hover:scale-105"
        />
      </div>

      {/* TITLE */}
      <h3 className="mt-5 text-xl font-semibold text-center">{title}</h3>

      {/* ⭐ SOURCE CODE + VIDEO BUTTONS (center aligned) ⭐ */}
      <div className="flex justify-center gap-4 mt-3 mb-4">
        <Link
          href={links.github}
          target="_blank"
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
        >
          Source Code
        </Link>

        {links.preview && (
          <Link
            href={links.preview}
            target="_blank"
            className="px-4 py-2 bg-red-200 rounded-md hover:bg-red-300 transition"
          >
            Video Demo
          </Link>
        )}
      </div>

      {/* DESCRIPTION */}
      <p className="text-muted-foreground text-center">{description}</p>

      {/* TECHNOLOGIES */}
      <div className="flex flex-wrap justify-center gap-2 mt-3">
        {technologies.map((tech) => (
          <span
            className="rounded-full border px-3 py-1 text-sm"
            key={tech}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
