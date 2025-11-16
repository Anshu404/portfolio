'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const Intro = () => {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      id="home"
      className="my-10 flex scroll-mt-96 flex-col items-center gap-5 text-center sm:mt-28"
    >
      {/* Availability Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'tween',
          duration: 0.2,
        }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-3 rounded border px-3 py-1"
        >
          <span className="relative flex size-2">
            <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative flex size-2 rounded-full bg-green-400"></span>
          </span>
          <span className="font-mono text-sm">Open to Full-Stack Roles!</span>
        </Link>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading max-w-3xl text-4xl font-extrabold md:text-5xl"
      >
        Hi, I’m{' '}
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Anshu
        </span>
        , a Full-Stack Engineer building scalable apps with{' '}
        <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
          React, Next.js & Python.
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground max-w-xl"
      >
        I’m a Data Science Engineering student at IIT Mandi specializing in
        full-stack development, backend APIs, cloud (AWS), and AI engineering.
        I enjoy building real-world products—from modern web apps to AI-powered
        systems and scalable backend services.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-row gap-2"
      >
        <Button asChild size="lg">
          <Link href="#contact">
            Contact Me <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>

        <Button variant="outline" size="lg" className="hidden sm:flex" asChild>
          <a href="/ANSHU KUMAR FULL STACK RESUME.pdf" download>
            Download CV <Icons.download className="ml-2 size-4" />
          </a>
        </Button>

        <Button variant="outline" size="icon" asChild>
          <Link
            href="https://linkedin.com/in/anshu-mandal-390b3127b"
            target="_blank"
            aria-label="LinkedIn"
          >
            <Icons.linkedin className="size-5" />
          </Link>
        </Button>

        <Button variant="outline" size="icon" asChild>
          <Link
            href="https://github.com/Anshu404"
            target="_blank"
            aria-label="GitHub"
          >
            <Icons.github className="size-5" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};
