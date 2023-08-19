import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className="container flex flex-col mt-5 gap-10">{children}</div>;
};
