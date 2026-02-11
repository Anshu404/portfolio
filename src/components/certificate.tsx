"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { certificatesData } from '@/lib/data';
import { FaExternalLinkAlt } from 'react-icons/fa';

type CertificateProps = (typeof certificatesData)[number] & {
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

export default function Certificate({
  title,
  description,
  tags,
  imageUrl,
  link,
  index,
}: CertificateProps) {
  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className="flex flex-col justify-between h-full rounded-xl border bg-white p-5 w-full shadow-sm dark:bg-white/5 dark:border-white/10"
    >
      <div>
        <div className="overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={title}
            height={390}
            width={600}
            className="h-64 w-full object-cover object-top transition-transform hover:scale-105"
          />
        </div>

        <h3 className="mt-5 text-xl font-semibold text-center dark:text-white">{title}</h3>

        <div className="flex flex-wrap justify-center gap-4 mt-4 mb-4">
          <Link
            href={link}
            target="_blank"
            className="px-5 py-2 rounded-full flex items-center gap-2 transition transform hover:scale-105 bg-gray-100 text-gray-900 border border-gray-200 hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:border-white/10 dark:hover:bg-white/20"
          >
            View Certificate <FaExternalLinkAlt className="text-xs" />
          </Link>
        </div>

        <p className="text-muted-foreground text-center dark:text-white/70 mb-4 text-sm">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-auto">
        {tags.map((tag, i) => (
          <span
            className="rounded-full border px-3 py-1 text-xs uppercase tracking-wider bg-gray-50 dark:bg-white/5 dark:text-white/80 dark:border-white/10"
            key={i}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}