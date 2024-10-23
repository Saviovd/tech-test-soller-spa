import ServiceCard from '@/components/ServiceCard';
import Title from '@/components/Title';
import Image from 'next/image';

export default function PersonalizedServices() {
  return (
    <div className="py-12 lg:py-0 lg:flex lg:flex-row-reverse lg:relative">
      <div className="flex flex-col gap-12 w-full lg:min-h-screen lg:justify-center lg:w-4/6">
        <div className="flex flex-col gap-6">
          <Title title="Personalized services" subtitle="Services" align="left" />

          <p className="text-center text-base font-normal max-w-4xl m-auto lg:text-xl lg:text-left lg:m-0 lg:max-w-6xl">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper
            id sit ornare maecenas lectus sed.
          </p>
        </div>

        <div className="flex gap-y-12 flex-wrap justify-between lg:justify-start lg:gap-5 xl:gap-7 custom-1620:gap-5">
          <ServiceCard
            title="Et mauris"
            description="Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique."
          />
          <ServiceCard
            title="Eget sit"
            description="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
          />
          <ServiceCard
            title="Imperdiet pellentesque"
            description="Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla."
          />
          <ServiceCard
            title="Non libero"
            description="Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra."
          />
        </div>
      </div>

      <Image
        src="/assets/backgrounds/left.png"
        alt=""
        width={900}
        height={900}
        quality={100}
        style={{ maxHeight: '900px' }}
        className="left-svg"
      />
    </div>
  );
}
