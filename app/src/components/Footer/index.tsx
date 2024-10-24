import FooterNavigation from '@/components/FooterNavigation';
import Logo from '@/assets/Logo';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-6 px-4 py-6 md:flex-row md:justify-between lg:px-20">
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <Logo />
        <p>@ 2023 Soller, Inc. All rights reserved.</p>
      </div>
      <FooterNavigation />
    </footer>
  );
}
