interface IServiceCard {
  title: string;
  description: string;
  icon?: undefined;
}
export default function ServiceCard({ title, description, icon }: IServiceCard) {
  return (
    <div className="w-48 text-center max-w-lg lg:max-w-xl">
      {icon && icon}
      <h4 className="font-medium text-xl mb-4 lg:text-left lg:text-2xl">{title}</h4>
      <p className="font-normal text-base lg:text-left lg:text-lg">{description}</p>
    </div>
  );
}
