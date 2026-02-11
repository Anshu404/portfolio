"use client";

import React from 'react';
import { motion } from 'framer-motion';

import Certificate from '@/components/certificate'; // Single card import
import { SectionHeading } from '@/components/section-heading';
// 👇 YEH DEKH: Sahi path laga diya hai ab
import { useSectionInView } from '@/hooks/use-section-in-view'; 
import { certificatesData } from '@/lib/data';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Certificates() {
  const { ref } = useSectionInView('Certificates', 0.5);

  return (
    <section ref={ref} id="certificates" className="my-10 scroll-mt-28 md:mb-20 w-full">
      
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        viewport={{ once: true }}
      >
        <SectionHeading heading="My Certificates" />
      </motion.div>

      {/* Wrapper */}
      <div className="relative w-full max-w-6xl mx-auto mt-10 px-12 sm:px-16">

        {/* LEFT ARROW */}
        <div className="cert-prev absolute -left-2 md:-left-12 top-1/2 -translate-y-1/2 z-20 text-4xl cursor-pointer select-none text-gray-400 hover:text-black hover:scale-110 transition dark:text-gray-500 dark:hover:text-white">
          ◀
        </div>

        {/* RIGHT ARROW */}
        <div className="cert-next absolute -right-2 md:-right-12 top-1/2 -translate-y-1/2 z-20 text-4xl cursor-pointer select-none text-gray-400 hover:text-black hover:scale-110 transition dark:text-gray-500 dark:hover:text-white">
          ▶
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.cert-next',
            prevEl: '.cert-prev',
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="w-full"
        >
          {certificatesData.map((cert, index) => (
            <SwiperSlide key={index} className="pb-10 pt-2 px-2 !h-auto flex"> 
              <Certificate {...cert} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}