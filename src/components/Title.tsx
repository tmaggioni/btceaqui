import { ReactNode } from "react";
import { IconBtc } from "./Icons/IconBtc";
interface Props {
  children: ReactNode;
  size?: "small";
}
export const Title = ({ children, size }: Props) => {
  return (
    <div className="flex items-center justify-center gap-1">
      <IconBtc width={size ? "25px" : "50px"} height={size ? "25px" : "50px"} />
      <div className="bg-primary p-1">
        <h1 className="text-4xl font-bold drop-shadow-title lg:text-2xl">
          {children}
        </h1>
      </div>
    </div>
  );
};
