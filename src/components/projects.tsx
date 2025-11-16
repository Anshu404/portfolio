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

      {/* ⭐ Arrows + Slider Wrapper ⭐ */}
      <div className="relative w-full mt-10">

        {/* LEFT ARROW */}
        <div
          className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 text-4xl cursor-pointer select-none text-gray-500 hover:text-black"
        >
          ◀
        </div>

        {/* RIGHT ARROW */}
        <div
          className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-20 text-4xl cursor-pointer select-none text-gray-500 hover:text-black"
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
            <SwiperSlide key={project.title}>
              <Project project={project} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
