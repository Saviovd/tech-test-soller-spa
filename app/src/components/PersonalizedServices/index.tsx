import ServiceCard from '@/components/ServiceCard';
import Title from '@/components/Title';
import { PersonalizedServicesStyle } from './styles';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function PersonalizedServices() {
  const services = [
    {
      title: 'Et mauris',
      description:
        'Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.',
    },
    {
      title: 'Eget sit',
      description:
        'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.',
    },
    {
      title: 'Eget sit',
      description:
        'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.',
    },
    {
      title: 'Non libero',
      description:
        'Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.',
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <PersonalizedServicesStyle
      ref={sectionRef}
      className="py-20 lg:py-0 lg:flex lg:flex-row-reverse px-4 xl:px-20"
    >
      <div className="flex flex-col h-auto gap-12 w-full lg:mt-0 lg:min-h-full lg:justify-center lg:w-4/6 xl:w-3/4 relative">
        <motion.div
          initial={{ y: 400, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <Title title="Personalized services" subtitle="Services" align="left" />
          <p className="text-center text-base font-normal max-w-4xl m-auto lg:text-xl lg:text-left lg:m-0 lg:max-w-6xl">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper
            id sit ornare maecenas lectus sed.
          </p>
        </motion.div>

        <div className="flex gap-y-12 flex-wrap justify-between lg:justify-start lg:gap-5 xl:gap-7 custom-1620:gap-5 max-w-screen-lg">
          {isInView &&
            services.map((service, i) => (
              <ServiceCard
                key={i}
                index={i + 1}
                title={service.title}
                description={service.description}
              />
            ))}
        </div>
      </div>
    </PersonalizedServicesStyle>
  );
}
