import Image from 'next/image';
import { motion } from 'framer-motion';
interface ITestimonyHorizontalCard {
  testimony: string;
  avatar: string;
  name: string;
  email: string;
}

export default function TestimonyHorizontalCard({
  testimony,
  avatar,
  name,
  email,
}: ITestimonyHorizontalCard) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <p className="mb-4 max-w-xl">“{testimony}”</p>
      <div className="flex">
        <Image
          src={
            avatar ||
            'https://static.vecteezy.com/system/resources/previews/027/708/418/non_2x/default-avatar-profile-icon-in-flat-style-free-vector.jpg'
          }
          alt={name + ' avatar'}
          quality={100}
          width={64}
          height={64}
          className="rounded-full mr-4"
        />
        <div className="flex-col justify-center items-center">
          <h4 className="font-normal text-lg">{name}</h4>
          <span className="text-slate-600 text-base">{email}</span>
        </div>
      </div>
    </motion.div>
  );
}
