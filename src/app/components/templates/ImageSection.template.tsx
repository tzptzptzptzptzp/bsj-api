type Props = {
  children: React.ReactNode;
  description: string;
  title: string;
};

export const ImageSection = ({ children, description, title }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-xl">{title}</h2>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
};
