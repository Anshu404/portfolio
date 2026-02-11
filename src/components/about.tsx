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
        <p className="mb-4">
          I&apos;m Anshu Kumar Mandal, a Data Science & Engineering student at <strong>IIT Mandi</strong>. 
          I specialize in <strong>Machine Learning</strong> and <strong>Natural Language Processing</strong>, 
          with a strong focus on using <strong>LLMs and RAG pipelines</strong> to transform unstructured data 
          into actionable insights. My technical foundation is built on <strong>Data Structures 
          & Algorithms</strong> (1700+ LeetCode rating)  and high-performance competitive programming.
        </p>
        <p className="mb-4">
          I thrive on building <strong>&quot;Data as a Product,&quot;</strong> which is why I am deeply motivated 
          by ONE CAREER&apos;s mission to bring transparency to the job market. 
          Whether it is optimizing <strong>predictive models</strong> for fintech (where I ranked 4th in 
          the Aiful Hackathon)  or architecting <strong>FastAPI backends</strong> that automate video 
          generation by 80%, I focus on creating measurable business impact.
        </p>
        <p>
          Beyond technical skills, I am actively exploring <strong>Japanese culture and language</strong>, 
          driven by a desire to contribute to Japan&apos;s innovative tech ecosystem. I am seeking to apply 
          my ML expertise to bridge the gap between complex datasets and user-centric career decisions.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};