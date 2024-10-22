import { motion } from 'framer-motion';

export default function Navigation() {
  const options = ['Products', 'Solutions', 'Services', 'Configure'];

  return (
    <nav>
      <ul className="gap-4 hidden lg:flex">
        {options.map((option, i) => (
          <motion.li
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3, delay: 0.1 * i }}
            className="text-base font-medium tracking-wide px-2 py-3 cursor-pointer hover:text-amber-700 transition"
            key={i}
          >
            {option}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
