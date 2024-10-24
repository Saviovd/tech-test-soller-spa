import Title from '@/components/Title';
import Button from '@/components/Button';
import Image from 'next/image';
import { NowAvaiableStyles } from './styles';

export default function NowAvaiable() {
  return (
    <NowAvaiableStyles className="pt-12 bg-purple-900 w-full px-4 flex-wrap xl:px-20 lg:flex lg:bg-purple-700 lg:justify-between overflow-hidden relative">
      <div className="flex flex-col gap-6 mb-6 max-w-4xl lg:w-2/3 relative z-10">
        <Title
          title="All the power that you need for your house is now available"
          subtitle="Get the Sun to power your home"
          align="left"
          theme="dark"
        />
      </div>
      <div className="flex flex-col items-center lg:w-fit relative z-10">
        <Button content="Request a Quote" url="/" type={2} classname=" text-nowrap" />
        <p className="mt-4 font-normal text-base text-gray-50 text-center">
          Egestas fringilla aliquam leo
        </p>
      </div>
      <Image
        src={'/assets/backgrounds/Macbook.svg'}
        width={300}
        height={150}
        alt="computer"
        className="macbook relative w-full max-w-7xl m-auto mt-12 lg:mt-16 z-10"
      />
    </NowAvaiableStyles>
  );
}
