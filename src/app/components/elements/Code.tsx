import { clsx } from "clsx";

type Props = {
  children: React.ReactNode;
  size?: "xs" | "sm" | "base" | "lg";
};

export const Code = ({ children, size = "sm" }: Props) => {
  const sizeVariantClasses = {
    xs: "text-[0.7rem] leading-none px-1.5 py-0.5",
    sm: "text-sm  px-1.5 py-0.5",
    base: "text-base px-2 py-1",
    lg: "text-lg px-2.5 py-1.5",
  };

  return (
    <code
      className={clsx(
        "rounded bg-gray-100 dark:bg-gray-800",
        sizeVariantClasses[size]
      )}
    >
      {children}
    </code>
  );
};
