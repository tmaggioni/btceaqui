import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}
export const TitleFooter = ({ children, className }: Props) => {
  return (
    <div className="bg-primary w-[36px] h-[148px]">
      <span
        className={`text-[22px] uppercase block font-bold drop-shadow-title rotate-[-90deg] relative top-[33px] ${className}`}
      >
        {children}
      </span>
    </div>
  );
};
