import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center justify-center" style={{ gap: '8px' }}>
      <Image src={'/assets/company-logo.svg'} width={55} height={32} alt="soller logo" />
      <span className="font-bold text-4xl leading-8">soller</span>
    </div>
  );
}
