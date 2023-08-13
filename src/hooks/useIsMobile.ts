import { IsSsrMobileContext } from "@/pages/_app";
import { useContext } from "react";
import { useWindowSize } from "./useWindowSize";

export const useIsMobile = () => {
  const isSsrMobile = useContext(IsSsrMobileContext);
  const { width: windowWidth } = useWindowSize();
  const isBrowserMobile = !!windowWidth && windowWidth < 992;

  return isSsrMobile || isBrowserMobile;
};
