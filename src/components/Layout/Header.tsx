import Image from "next/image";
import Link from "next/link";
import { IconMenu } from "../Icons/IconMenu";
import { useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";

export const Header = () => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const [openedLanguage, setOpenedLanguage] = useState(false);
  const handleClickOutside = () => {
    setOpenedMenu(false);
  };
  const ref = useOutsideClick<HTMLDivElement>(handleClickOutside);

  return (
    <>
      <div className="w-full flex shadow-md h-[129px] bg-white relative z-10 lg:hidden">
        <div className="container flex items-center justify-center gap-11 relative">
          <div className="flex gap-11 justify-between">
            <Link
              href={"/estabelecimentos"}
              className="bg-white p-1 hover:bg-primary rounded-md text-base hover:text-white transition-all hover:font-bold"
            >
              Estabelecimentos
            </Link>
            <div className="group bg-white p-1 hover:bg-primary rounded-md text-base  hover:text-white transition-all hover:font-bold relative">
              Turismo
              <div className="absolute top-2 pt-7 z-10">
                <div className="bg-white left-0 rounded-md shadow p-3 hidden group-hover:flex flex-col">
                  <Link
                    href={"/pontos-turisticos"}
                    className="font-medium whitespace-nowrap text-black hover:text-primary transition-all"
                  >
                    Pontos turísticos
                  </Link>
                  <Link
                    href={"/hotelaria"}
                    className="font-medium whitespace-nowrap text-black hover:text-primary transition-all"
                  >
                    Hotelaria
                  </Link>
                  <Link
                    href={"/como-chegar"}
                    className="font-medium whitespace-nowrap text-black hover:text-primary transition-all"
                  >
                    Como chegar
                  </Link>
                  <Link
                    href={"/whats"}
                    className="font-medium whitespace-nowrap text-black hover:text-primary transition-all"
                  >
                    Chat turismo
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href={"/doacoes"}
              className="z-20 relative bg-white p-1 hover:bg-primary rounded-md text-base  hover:text-white transition-all hover:font-bold"
            >
              Doações
            </Link>
          </div>

          <Link href={"/"}>
            <Image
              src={"/imgs/logo.png"}
              width={89}
              height={102}
              alt="Logo Btc é aqui"
            />
          </Link>

          <div className="flex gap-11 justify-between min-w-[360px]">
            <Link
              href={"/"}
              className="bg-white p-1 hover:bg-primary rounded-md text-base  hover:text-white transition-all hover:font-bold"
            >
              Eventos
            </Link>
            <Link
              href={"/aprender"}
              className="bg-white p-1 hover:bg-primary rounded-md text-base  hover:text-white transition-all hover:font-bold"
            >
              Aprender +
            </Link>
            <Link
              href={"/"}
              className="bg-white p-1 hover:bg-primary rounded-md text-base  hover:text-white transition-all hover:font-bold"
            >
              Contato
            </Link>
            <div className="flex items-center gap-3 absolute right-0 top-[50%] translate-y-[-50%]">
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
                className={`absolute top-9 right-0 bg-white rounded shadow p-1 ${
                  openedLanguage ? "opacity-100" : "opacity-0"
                }`}
              >
                <div id="google_translate_element" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden bg-white shadow-md lg:flex items-center p-1 w-full  justify-between relative z-20">
        <IconMenu
          onClick={() => setOpenedMenu(!openedMenu)}
          className="rotate-180"
        />
        <Link href={"/"}>
          <Image
            src={"/imgs/logo.png"}
            width={60}
            height={68}
            alt="Logo Btc é aqui"
          />
        </Link>
        <IconMenu onClick={() => setOpenedMenu(!openedMenu)} />
      </div>

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
            className="text-base border-b-[1px] border-[#8E8E8E] pb-[2px] w-[50%]"
          >
            Estabelecimentos
          </Link>
          <Link
            href={"/"}
            className="text-base border-b-[1px] border-[#8E8E8E] pb-[2px] w-[50%]"
          >
            Turismo
          </Link>
          <Link
            href={"/doacoes"}
            className="text-base border-b-[1px] border-[#8E8E8E] pb-[2px] w-[50%]"
          >
            Doações
          </Link>
          <Link
            href={"/aprender"}
            className="text-base border-b-[1px] border-[#8E8E8E] pb-[2px] w-[50%]"
          >
            Aprender +
          </Link>
          <Link
            href={"/"}
            className="text-base border-b-[1px] border-[#8E8E8E] pb-[2px] w-[50%]"
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
            <a href="">
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
    </>
  );
};
