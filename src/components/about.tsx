'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        {/* CHANGED: This is your new bio based on your resume */}
        <p className="mb-4">
          I&apos;m Anshu Kumar Mandal, a Full-Stack AI Engineer and a B.Tech
          student at IIT Mandi, specializing in Data Science and Engineering. My
          passion lies at the intersection of building scalable backend systems
          and creating intelligent, AI-driven applications. I love the challenge
          of architecting end-to-end solutions, from a modern user interface
          right down to the complex AI models. My core stack includes{' '}
          <strong>React, Next.js, and TypeScript</strong> for the frontend, and{' '}
          <strong>Python with FastAPI and Flask</strong> for the backend. I&apos;m
          also experienced with databases like MongoDB & PostgreSQL, and DevOps
          tools like Docker and AWS.
        </p>
        <p>
          I am actively seeking internship opportunities where I can
          contribute, learn, and grow on challenging projects. If you have a good
          opportunity that matches my skills and ambition, please don&apos;t
          hesitate to contact me.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};