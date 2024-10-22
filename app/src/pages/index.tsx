import CallToAction from '@/components/CallToAction';
import Header from '@/components/Header';
import PickTheSun from '@/components/PickTheSun';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <div className={roboto.className}>
      <Header />
      <main className="pt-12 px-4 xl:px-20">
        <CallToAction />
        <PickTheSun />
      </main>
    </div>
  );
}
