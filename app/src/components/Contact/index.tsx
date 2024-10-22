import Image from 'next/image';

interface IContactProps {
  phone: string;
}

export default function Contact({ phone }: IContactProps) {
  return (
    <>
      <div className="phone flex items-center justify-start cursor-pointer">
        <Image src={'/assets/icons/headset.svg'} alt="headphone icon" width={24} height={24} />
        <p className="px-4 tracking-wide font-medium text-sky-700 text-base">{phone}</p>
      </div>
    </>
  );
}
