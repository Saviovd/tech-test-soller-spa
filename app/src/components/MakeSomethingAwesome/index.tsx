import Title from '@/components/Title';
import Button from '@/components/Button';
import Testimonials from '@/components/Testimonials';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function MakeSomethingAwesome() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <div
      ref={sectionRef}
      className="py-12 bg-purple-900 w-full px-4 flex flex-col items-center gap-16 xl:px-20 lg:items-start lg:mt-20 lg:flex-row lg:flex-wrap lg:gap-x-0 lg:justify-between overflow-hidden"
    >
      <motion.div
        initial={{ y: 400, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex flex-col gap-6 mb-6 lg:w-2/3 "
      >
        <Title
          title="Make something awesome"
          subtitle="Join other Sun harvesters"
          align="left"
          theme="dark"
        />
        <p className="text-center text-gray-50 text-base font-normal max-w-3xl m-auto lg:text-xl lg:text-left lg:m-0">
          Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique
          condimentum congue fusce nunc, donec magnis commodo.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        <Button content="Request a Quote" url="/" type={2} classname=" text-nowrap" />
      </motion.div>
      <Testimonials />
    </div>
  );
}
