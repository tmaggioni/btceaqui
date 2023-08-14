import Image from "next/image";
import Link from "next/link";
import { IconMenu } from "../Icons/IconMenu";
import { useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";

export const Header = () => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const handleClickOutside = () => {
    setOpenedMenu(false);
  };
  const ref = useOutsideClick<HTMLDivElement>(handleClickOutside);

  return (
    <>
      <div className="w-full flex shadow-md h-[129px] bg-white relative z-10 lg:hidden">
        <div className="container flex items-center justify-center gap-11">
          <div className="flex gap-11 justify-between">
            <Link
              href={"/"}
              className="bg-white p-1 hover:bg-primary rounded-md text-base hover:text-white transition-all hover:font-bold"
            >
              Pontos
            </Link>
            <Link
              href={"/"}
              className="bg-white p-1 hover:bg-primary rounded-md text-base  hover:text-white transition-all hover:font-bold"
            >
              Turismo
            </Link>
            <Link
              href={"/"}
              className="bg-white p-1 hover:bg-primary rounded-md text-base  hover:text-white transition-all hover:font-bold"
            >
              Doações
            </Link>
          </div>

          <Image
            src={"/imgs/logo.png"}
            width={89}
            height={102}
            alt="Logo Btc é aqui"
          />

          <div className="flex gap-11 justify-between">
            <Link
              href={"/"}
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

        {/* <div className="absolute right-0 top-0 z-10">
        <div id="google_translate_element" />
      </div> */}
      </div>
      <div className="hidden bg-white lg:flex items-center p-1 w-full  justify-between relative z-20">
        <IconMenu onClick={() => setOpenedMenu(!openedMenu)} />
        <Image
          src={"/imgs/logo.png"}
          width={60}
          height={68}
          alt="Logo Btc é aqui"
        />

        <IconMenu onClick={() => setOpenedMenu(!openedMenu)} />
      </div>

      <div
        className={`w-full h-[100vh] bg-black bg-opacity-80 fixed transition-all ${
          openedMenu ? "z-50 opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`w-[45%] h-full bg-white transition-all delay-200 duration-200 p-3 flex gap-3 flex-col relative ${
            openedMenu ? "left-0" : "left-[-100%]"
          }`}
          ref={ref}
        >
          <Image
            src={"/imgs/logo.png"}
            width={60}
            height={68}
            className="self-center"
            alt="Logo Btc é aqui"
          />

          <Link
            href={"/"}
            className="text-base border-b-[1px] border-primary pb-[2px] w-full"
          >
            Pontos
          </Link>
          <Link
            href={"/"}
            className="text-base border-b-[1px] border-primary pb-[2px] w-full"
          >
            Turismo
          </Link>
          <Link
            href={"/"}
            className="text-base border-b-[1px] border-primary pb-[2px] w-full"
          >
            Doações
          </Link>
          <Link
            href={"/"}
            className="text-base border-b-[1px] border-primary pb-[2px] w-full"
          >
            Aprender +
          </Link>
          <Link
            href={"/"}
            className="text-base border-b-[1px] border-primary pb-[2px] w-full"
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
