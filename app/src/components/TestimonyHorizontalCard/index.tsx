import Image from 'next/image';

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
    <div>
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
    </div>
  );
}
