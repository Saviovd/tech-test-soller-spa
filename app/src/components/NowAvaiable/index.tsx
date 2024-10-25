import Title from '@/components/Title';
import Button from '@/components/Button';
import Image from 'next/image';
import { NowAvaiableStyles } from './styles';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

export default function NowAvaiable() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const AnimatedImage = motion(Image);
  return (
    <NowAvaiableStyles
      ref={sectionRef}
      className="pt-12 bg-purple-900 w-full px-4 flex-wrap xl:px-20 lg:flex lg:bg-purple-700 lg:justify-between overflow-hidden relative"
    >
      <motion.div
        initial={{ y: 400, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex flex-col gap-6 mb-6 max-w-4xl lg:w-2/3 relative z-10"
      >
        <Title
          title="All the power that you need for your house is now available"
          subtitle="Get the Sun to power your home"
          align="left"
          theme="dark"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.7 }}
        className="flex flex-col items-center lg:w-fit relative z-10"
      >
        <Button content="Request a Quote" url="/" type={2} classname=" text-nowrap" />
        <p className="mt-4 font-normal text-base text-gray-50 text-center">
          Egestas fringilla aliquam leo
        </p>
      </motion.div>
      <AnimatedImage
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        src={'/assets/backgrounds/Macbook.svg'}
        width={300}
        height={150}
        alt="computer"
        className="macbook relative w-full max-w-7xl m-auto mt-12 lg:mt-16 z-10"
      />
    </NowAvaiableStyles>
  );
}
