import { motion } from 'framer-motion';

interface IServiceCard {
  title: string;
  description: string;
  icon?: undefined;
  index?: number;
}
export default function ServiceCard({ title, description, icon, index = 0 }: IServiceCard) {
  return (
    <motion.div
      initial={{ y: 500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 500 }}
      transition={{ duration: 0.2, delay: 0.2 * index }}
      className="w-48 text-center max-w-lg lg:max-w-xl"
    >
      {icon && icon}
      <h4 className="font-medium text-xl mb-4 lg:text-left lg:text-2xl">{title}</h4>
      <p className="font-normal text-base lg:text-left lg:text-lg">{description}</p>
    </motion.div>
  );
}
