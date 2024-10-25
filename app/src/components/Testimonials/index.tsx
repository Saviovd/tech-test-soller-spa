import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import data from '@/data/testimonials.json';
import { TestimonialsStyles } from './styles';
import ArrowRight from '@/assets/ArrowRight';
import TestimonialCard from '@/components/TestimonialCard';

import 'swiper/css';
import 'swiper/css/navigation';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 500, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  const MotionTestimonialCard = motion(TestimonialCard);

  return (
    <TestimonialsStyles className="w-full overflow-hidden flex flex-col" ref={sectionRef}>
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <Swiper
          spaceBetween={24}
          loop={true}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
            1620: {
              slidesPerView: 5,
            },
          }}
          className="swiper"
        >
          {data.map((testimonial, i) => (
            <SwiperSlide key={i} className="min-w-80">
              <MotionTestimonialCard
                variants={itemVariants}
                consumption={testimonial.consumption}
                name={testimonial.name}
                last={testimonial.last}
                testimonial={testimonial.testimonial}
                avatar={testimonial.avatar}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="navigation"
      >
        <button className="swiper-button-prev custom-prev rounded-full border-amber-300 fill-amber-300 border-solid border-2 hover:bg-amber-300 hover:fill-amber-900 transition">
          <ArrowRight classname="-scale-x-100" />
        </button>
        <button className="swiper-button-next custom-next rounded-full border-amber-300 fill-amber-300 border-solid border-2 hover:bg-amber-300 hover:fill-amber-900 transition">
          <ArrowRight classname="" />
        </button>
      </motion.div>
    </TestimonialsStyles>
  );
}
