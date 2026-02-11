'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';

// --- Local YouTube Icon Component (To avoid import errors) ---
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

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
            <span className="absolute flex size-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative flex size-2 rounded-full bg-blue-400"></span>
          </span>
          <span className="font-mono text-sm">Open to ML & Data Science Roles!</span>
        </Link>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading max-w-4xl text-4xl font-extrabold md:text-5xl"
      >
        Hi, I’m{' '}
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Anshu
        </span>
        , an ML Engineer solving business problems with{' '}
        <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
          LLMs, RAG & Predictive Analytics.
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground max-w-2xl"
      >
        I’m a Data Science Engineering student at IIT Mandi specializing in
        extracting insights from unstructured data. 
        From building AI agents to predictive models for Japanese Fintech, 
        I bridge the gap between complex data and actionable business impact.
      </motion.p>

      {/* Buttons Row */}
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

        {/* LinkedIn */}
        <Button variant="outline" size="icon" asChild>
          <Link
            href="https://linkedin.com/in/anshu-mandal-390b3127b"
            target="_blank"
            aria-label="LinkedIn"
          >
            <Icons.linkedin className="size-5" />
          </Link>
        </Button>

        {/* GitHub */}
        <Button variant="outline" size="icon" asChild>
          <Link
            href="https://github.com/Anshu404"
            target="_blank"
            aria-label="GitHub"
          >
            <Icons.github className="size-5" />
          </Link>
        </Button>

        {/* NEW: YouTube Button */}
        <Button variant="outline" size="icon" asChild>
          <Link
            href="https://www.youtube.com/@iitiansimplified"
            target="_blank"
            aria-label="YouTube"
          >
            <YoutubeIcon className="size-5" />
          </Link>
        </Button>

      </motion.div>
    </section>
  );
};