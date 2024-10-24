import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import data from '@/data/testimonials.json';
import { TestimonialsStyles } from './styles';
import ArrowRight from '@/assets/ArrowRight';
import TestimonialCard from '@/components/TestimonialCard';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Testimonials() {
  return (
    <TestimonialsStyles className="w-full overflow-hidden flex flex-col">
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
            <TestimonialCard
              consumption={testimonial.consumption}
              name={testimonial.name}
              last={testimonial.last}
              testimonial={testimonial.testimonial}
              avatar={testimonial.avatar}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="navigation">
        <button className="swiper-button-prev custom-prev rounded-full border-amber-300 fill-amber-300 border-solid border-2 hover:bg-amber-300 hover:fill-amber-900 transition">
          <ArrowRight classname="-scale-x-100" />
        </button>
        <button className="swiper-button-next custom-next rounded-full border-amber-300 fill-amber-300 border-solid border-2 hover:bg-amber-300 hover:fill-amber-900 transition">
          <ArrowRight classname="" />
        </button>
      </div>
    </TestimonialsStyles>
  );
}
