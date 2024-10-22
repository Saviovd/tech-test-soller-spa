import Link from 'next/link';
import ArrowRight from '../../../public/assets/icons/ArrowRight';

interface IButtonProps {
  content: string;
  url: string;
  type?: 1 | 2;
}

export default function Button({ content, url, type = 1 }: IButtonProps) {
  return (
    <>
      <Link
        href={url}
        className={`flex items-center font-bold text-2xl px-8 py-3 rounded-full transition-colors tracking-wide w-fit ${
          type === 1
            ? 'border-2 border-purple-900 text-purple-900 fill-purple-900 hover:bg-purple-900 hover:text-amber-300 hover:fill-amber-300'
            : 'border-2 border-amber-300 text-amber-300 fill-amber-300 hover:bg-amber-300 hover:text-amber-900 hover:fill-amber-900'
        }`}
      >
        <span className="px-3">{content}</span>
        <ArrowRight />
      </Link>
    </>
  );
}
