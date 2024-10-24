import { motion } from 'framer-motion';
import Image from 'next/image';

import Button from '@/components/Button';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

export default function Header() {
  const AnimatedImage = motion.create(Image);
  return (
    <header className="h-full flex items-start justify-between md:items-center md:p-4 xl:px-20 xl:py-6 overflow-x-hidden">
      <div className="left flex items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="font-bold text-4xl leading-8 md:mr-10 h-full pt-3 pl-4 md:pt-0 md:pl-0"
        >
          soller
        </motion.h1>

        <Navigation />
      </div>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="right gap-4 hidden xl:flex"
      >
        <Contact phone="555 818 282" />
        <Button content="Request a Quote" url="/" />
      </motion.div>
      <AnimatedImage
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="right-0 top-0 -z-10 w-4/5 object-contain object-right-top md:w-2/5 lg:w-96 md:absolute xl:w-2/5"
        style={{ maxHeight: '694px' }}
        alt="man screwing solar panel"
        src={'/assets/backgrounds/man-working.png'}
        width={820}
        height={900}
      />
    </header>
  );
}
