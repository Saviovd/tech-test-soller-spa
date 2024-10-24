interface ITitleProps {
  title: string;
  subtitle: string;
  theme?: 'dark' | 'light';
  align?: 'center' | 'left' | 'right';
}

export default function Title({ title, subtitle, theme = 'light', align = 'center' }: ITitleProps) {
  return (
    <div className={`flex-col text-center ${align !== 'center' ? align : 'text-center'}`}>
      <span
        className={`font-medium text-base lg:text-xl ${theme === 'light' ? 'text-amber-600' : 'text-amber-300'}`}
      >
        {subtitle}
      </span>
      <h2
        className={`font-bold text-3xl lg:text-6xl lg:font-extrabold ${theme === 'light' ? 'text-slate-900' : 'text-slate-50'}`}
      >
        {title}
      </h2>
    </div>
  );
}
