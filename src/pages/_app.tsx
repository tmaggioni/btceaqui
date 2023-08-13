import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { createContext } from "react";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const IsSsrMobileContext = createContext(false);

export default function App({ Component, pageProps }: AppProps) {
  // const { isFallback, events } = useRouter();

  // const googleTranslateElementInit = () => {
  //   new (window as any).google.translate.TranslateElement(
  //     {
  //       pageLanguage: "pt",

  //     },
  //     "google_translate_element"
  //   ) as any;
  // };

  // useEffect(() => {
  //   const id = "google-translate-script";

  //   const addScript = () => {
  //     const s = document.createElement("script");
  //     s.setAttribute(
  //       "src",
  //       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  //     );
  //     s.setAttribute("id", id);
  //     const q = document.getElementById(id);
  //     if (!q) {
  //       document.body.appendChild(s);
  //       (window as any).googleTranslateElementInit = googleTranslateElementInit;
  //     }
  //   };

  //   const removeScript = () => {
  //     const q = document.getElementById(id);
  //     if (q) q.remove();
  //     const w = document.getElementById("google_translate_element");
  //     if (w) w.innerHTML = "";
  //   };

  //   isFallback || addScript();

  //   events.on("routeChangeStart", removeScript);
  //   events.on("routeChangeComplete", addScript);

  //   return () => {
  //     events.off("routeChangeStart", removeScript);
  //     events.off("routeChangeComplete", addScript);
  //   };
  // }, []);
  return (
    <div className={`${roboto.className} flex min-h-screen flex-col`}>
      <ParallaxProvider>
        <IsSsrMobileContext.Provider value={pageProps.isSsrMobile}>
          <Component {...pageProps} />
        </IsSsrMobileContext.Provider>
      </ParallaxProvider>
    </div>
  );
}
