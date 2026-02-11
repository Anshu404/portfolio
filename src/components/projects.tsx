'use client';

import { motion } from 'framer-motion';

import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { projectsData } from '@/lib/data';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const Projects = () => {
  const { ref } = useSectionInView('Projects');

  return (
    <section ref={ref} id="projects" className="my-10 scroll-mt-28 md:mb-20 w-full">

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        viewport={{ once: true }}
      >
        <SectionHeading
          heading="My Projects"
          content="Projects I worked on. Each of them containing its own case study."
        />
      </motion.div>

      {/* ⭐ Wrapper with Padding for Arrows ⭐ */}
      <div className="relative w-full max-w-6xl mx-auto mt-10 px-12 sm:px-16">

        {/* LEFT ARROW (Moved Outside with negative left) */}
        <div
          className="custom-prev absolute -left-2 md:-left-12 top-1/2 -translate-y-1/2 z-20 text-4xl cursor-pointer select-none 
                     text-gray-400 hover:text-black hover:scale-110 transition 
                     dark:text-gray-500 dark:hover:text-white"
        >
          ◀
        </div>

        {/* RIGHT ARROW (Moved Outside with negative right) */}
        <div
          className="custom-next absolute -right-2 md:-right-12 top-1/2 -translate-y-1/2 z-20 text-4xl cursor-pointer select-none 
                     text-gray-400 hover:text-black hover:scale-110 transition 
                     dark:text-gray-500 dark:hover:text-white"
        >
          ▶
        </div>

        {/* ⭐ SWIPER SLIDER ⭐ */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="w-full"
        >
          {projectsData.map((project, index) => (
    // 👇 UPDATE HERE: Added '!h-auto' and 'flex'
    <SwiperSlide key={index} className="pb-10 pt-2 px-2 !h-auto flex"> 
      <Project project={project} index={index} />
    </SwiperSlide>
  ))}
</Swiper>
      </div>
    </section>
  );
};