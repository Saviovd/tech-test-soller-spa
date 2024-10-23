import Button from '../Button';
import TestimonyHorizontalCard from '../TestimonyHorizontalCard';

export default function CallToAction() {
  return (
    <div className="flex flex-col gap-16 md:items-start xl:gap-32 px-4 xl:px-20">
      <div className="flex flex-col gap-3 items-center md:items-start">
        <h2 className="text-4xl font-bold text-center md:text-left xl:text-7xl">
          Get the Sun to
          <br /> Power Your Home
        </h2>
        <p className="text-center font-normal text-base max-w-md md:text-left xl:text-2xl xl:max-w-xl">
          Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat
          turpis scelerisque.
        </p>
        <Button content="Request a Quote" url="/" />
      </div>
      <TestimonyHorizontalCard
        testimony="Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat
          turpis scelerisque faucibus."
        avatar={'/assets/user-thumb.png'}
        name={'Rwanda Melflor'}
        email={'zerowaste.com'}
      />
    </div>
  );
}
