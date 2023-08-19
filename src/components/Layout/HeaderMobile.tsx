import { forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
interface Props {
  openedMenu: boolean;
}
const HeaderMobile = forwardRef<HTMLDivElement, Props>(
  ({ openedMenu }, ref) => {
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
            className="text-base flex items-center gap-1 underline"
          >
            Estabelecimentos
          </Link>
          <Link
            href={"/eventos"}
            className="text-base flex items-center gap-1 underline"
          >
            Eventos
          </Link>
          <Link
            href={"/pontos-turisticos"}
            className="text-base flex items-center gap-1 underline"
          >
            Pontos turísticos
          </Link>
          <Link
            href={"/hotelaria"}
            className="text-base flex items-center gap-1 underline"
          >
            Hotelaria
          </Link>
          <Link
            href={"/como-chegar"}
            className="text-base flex items-center gap-1 underline"
          >
            Como chegar
          </Link>
          <Link
            href={"/whats"}
            className="text-base flex items-center gap-1 underline"
          >
            Chat turismo
          </Link>
          <Link
            href={"/doacoes"}
            className="text-base flex items-center gap-1 underline"
          >
            Doações
          </Link>
          <Link
            href={"/aprender"}
            className="text-base flex items-center gap-1 underline"
          >
            Aprender +
          </Link>
          <Link
            href={"/contato"}
            className="text-base flex items-center gap-1 underline"
          >
            Contato
          </Link>

          <div className="flex items-center gap-3">
            <a href="">
              <Image
                width={25}
                height={25}
                src={"/imgs/whats.png"}
                alt="Whatsapp link"
              />
            </a>
            <a href="https://www.instagram.com/bitcoineaqui/" target="_blank">
              <Image
                width={25}
                height={25}
                src={"/imgs/insta.png"}
                alt="Instagram link"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
);

HeaderMobile.displayName = "HeaderMobile";

export default HeaderMobile;
