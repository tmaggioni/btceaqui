import { forwardRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";
interface Props {
  openedMenu: boolean;
}
const HeaderMobile = forwardRef<HTMLDivElement, Props>(
  ({ openedMenu }, ref) => {
    const isMobile = useIsMobile();
    const [openedLanguage, setOpenedLanguage] = useState(false);
    return (
      <div
        className={`w-full h-[100vh] bg-black bg-opacity-80 fixed transition-all ${
          openedMenu ? "z-50 opacity-100" : "opacity-0 z-[-1]"
        }`}
      >
        <div
          className={`w-[60%] h-full bg-white transition-all delay-100 duration-200 p-3 flex gap-3 flex-col relative ${
            openedMenu ? "left-0" : "left-[-100%]"
          }`}
          ref={ref}
        >
          <Image
            src={"/imgs/logo.png"}
            width={60}
            height={68}
            className="self-center mb-3"
            alt="Logo Btc é aqui"
          />

          <Link
            href={"/estabelecimentos"}
            className="text-base flex items-center gap-1"
          >
            Estabelecimentos
          </Link>
          <Link href={"/eventos"} className="text-base flex items-center gap-1">
            Eventos
          </Link>
          <Link
            href={"/pontos-turisticos"}
            className="text-base flex items-center gap-1"
          >
            Pontos turísticos
          </Link>
          <Link
            href={"/hotelaria"}
            className="text-base flex items-center gap-1"
          >
            Hotelaria
          </Link>
          <Link
            href={"/como-chegar"}
            className="text-base flex items-center gap-1"
          >
            Como chegar
          </Link>
          <Link
            href={"https://chat.whatsapp.com/COAUUgDhmDyHwQDPLOLg4a"}
            target="_blank"
            className="text-base flex items-center gap-1"
          >
            Chat turismo
          </Link>
          <Link href={"/doacoes"} className="text-base flex items-center gap-1">
            Doações
          </Link>
          <Link
            href={"/aprender"}
            className="text-base flex items-center gap-1"
          >
            Aprender +
          </Link>
          <Link href={"/contato"} className="text-base flex items-center gap-1">
            Contato
          </Link>

          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/bitcoineaqui/" target="_blank">
              <Image
                width={25}
                height={25}
                src={"/imgs/insta.png"}
                alt="Instagram link"
              />
            </a>
          </div>

          {isMobile && (
            <div className="relative mt-5">
              <div
                className="cursor-pointer"
                onClick={() => setOpenedLanguage(!openedLanguage)}
              >
                <Image
                  src={"/imgs/br.png"}
                  width={25}
                  height={17}
                  alt="Trocar idioma"
                />
              </div>
              <div
                className={`absolute top-9 left-0 bg-white rounded shadow p-1 ${
                  openedLanguage ? "opacity-100" : "opacity-0"
                }`}
              >
                <div id="google_translate_element" />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

HeaderMobile.displayName = "HeaderMobile";

export default HeaderMobile;
