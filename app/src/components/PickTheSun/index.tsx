import Title from '@/components/Title';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function PickTheSun() {
  const pictureRef = useRef(null);
  const isInView = useInView(pictureRef, { once: true, amount: 0.3 });

  return (
    <div className="pt-12 flex flex-col gap-16 lg:py-20 lg:gap-20 px-4 xl:px-20 overflow-x-hidden">
      <motion.div
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        exit={{ y: 300 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className="flex flex-col gap-6"
      >
        <Title subtitle="No more waste" title="Pick the Sun" theme="light" />
        <p className="text-center text-base font-normal max-w-4xl m-auto lg:text-xl">
          Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis
          pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum
          sollicitudin.
        </p>
      </motion.div>

      <motion.picture
        ref={pictureRef}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="relative -right-4 sm:w-3/4 md:w-full md:max-w-7xl custom-430:right-0 custom-430:m-auto"
      >
        <source media="(min-width: 430px)" srcSet="/assets/backgrounds/desktop.png" />
        <Image
          src="/assets/backgrounds/desktop-mobile.png"
          alt="desktop image"
          className="w-full"
          width={400}
          height={150}
        />

        <div className="absolute w-40 h-40 -top-16 -left-16 -z-10 rounded-full bg-amber-500 md:w-72 md:h-72 md:-top-20 md:-left-32 custom-1620:w-96 custom-1620:h-96"></div>
        <div className="absolute w-40 h-40 -top-4 -right-28 -z-10 rounded-full bg-purple-700 md:w-72 md:h-72 md:top-8 custom-1620:w-96 custom-1620:h-96 custom-1620:-right-36 custom-1620:top-12"></div>
      </motion.picture>
    </div>
  );
}
