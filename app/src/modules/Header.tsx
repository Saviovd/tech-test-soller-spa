import Button from '@/components/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

export default function Header() {
  const AnimatedImage = motion.create(Image);
  return (
    <header className="h-14 flex items-center justify-between px-4 relative lg:h-28 xl:px-20">
      <div className="left flex">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="logo font-bold text-4xl leading-8 mr-10 flex items-center"
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
        className="absolute right-0 top-0 -z-10 object-contain w-11/12 sm:w-full md:w-auto"
        alt="man screwing solar panel"
        src={'/assets/backgrounds/man-working.png'}
        width={820}
        height={900}
      />
    </header>
  );
}
