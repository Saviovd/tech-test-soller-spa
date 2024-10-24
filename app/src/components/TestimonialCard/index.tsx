import Image from 'next/image';

interface ITestimonialCard {
  name: string;
  last: string;
  consumption: string;
  testimonial: string;
  avatar: string;
}

export default function TestimonialCard({
  testimonial,
  name,
  last,
  avatar,
  consumption,
}: ITestimonialCard) {
  return (
    <div className="card bg-gray-50 w-full p-8 rounded-lg flex flex-col justify-center">
      <p className="font-base font-normal text-base py-4 lg:text-lg">{testimonial}</p>
      <div className="flex">
        <Image
          src={
            avatar ||
            'https://static.vecteezy.com/system/resources/previews/027/708/418/non_2x/default-avatar-profile-icon-in-flat-style-free-vector.jpg'
          }
          alt={`${name} avatar`}
          quality={100}
          width={64}
          height={64}
          className="rounded-full mr-4 max-h-16"
        />
        <div className="flex-col justify-end items-end">
          <h4 className="font-normal text-base lg:text-lg xl:text-nowrap">
            {name} {last}
          </h4>
          <span className="text-slate-600 text-base">{consumption}</span>
        </div>
      </div>
    </div>
  );
}
