import { ReactNode } from "react";
import { IconBtc } from "./Icons/IconBtc";
interface Props {
  children: ReactNode;
}
export const Title = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center gap-1">
      <IconBtc width={"50px"} height={"50px"} />
      <div className="bg-primary p-1">
        <h1 className="text-4xl font-bold drop-shadow-title">{children}</h1>
      </div>
    </div>
  );
};
