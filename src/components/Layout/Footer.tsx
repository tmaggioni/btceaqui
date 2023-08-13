import Image from "next/image";
import Link from "next/link";
import { TitleFooter } from "../TitleFooter";

export const Footer = () => {
  return (
    <div className="w-full mt-10 pt-10 bg-[#F5F5F5] border-t-4 border-primary">
      <div className="container flex items-center justify-between lg:flex-col lg:items-start lg:gap-5">
        <Link href="/" className="lg:self-center">
          <Image
            src={"/imgs/logo.png"}
            width={89}
            height={102}
            alt="Logo Btc é aqui"
          />
        </Link>
        <div className="flex items-center gap-2">
          <TitleFooter>Menu</TitleFooter>
          <ul className="list-none flex flex-col gap-1">
            <li>
              <Link
                href="/"
                className=" hover:text-primary text-[#383838] text-base transition-all hover:font-bold"
              >
                Pontos
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className=" hover:text-primary text-[#383838] text-base transition-all hover:font-bold"
              >
                Turismo
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className=" hover:text-primary text-[#383838] text-base transition-all hover:font-bold"
              >
                Doações
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className=" hover:text-primary text-[#383838] text-base transition-all hover:font-bold"
              >
                Aprender +
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className=" hover:text-primary text-[#383838] text-base transition-all hover:font-bold"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <TitleFooter className="relative top-[70px]">Contato</TitleFooter>
          <ul className="list-none flex flex-col gap-3">
            <li>
              <a
                href="http://"
                className=" hover:text-primary flex items-center gap-1 text-[#383838] text-base transition-all hover:font-bold"
              >
                <Image
                  width={25}
                  height={25}
                  src={"/imgs/insta.png"}
                  alt="Instagram link"
                />
                @bitcoineaqui
              </a>
            </li>

            <li>
              <a
                href="http://"
                className=" hover:text-primary flex items-center gap-1 text-[#383838] text-base transition-all hover:font-bold"
              >
                <Image
                  width={25}
                  height={25}
                  src={"/imgs/iris.png"}
                  alt="Iris link"
                />
                https://iris.to/bitcoineaqui
              </a>
            </li>
            <li>
              <a
                href="http://"
                className=" hover:text-primary flex items-center gap-1 text-[#383838] text-base transition-all hover:font-bold"
              >
                <Image
                  width={25}
                  height={25}
                  src={"/imgs/x.png"}
                  alt="Link twitter"
                />
                @bitcoineaqui
              </a>
            </li>
            <li>
              <a
                href="http://"
                className=" hover:text-primary flex items-center gap-1 text-[#383838] text-base transition-all hover:font-bold"
              >
                <Image
                  width={25}
                  height={25}
                  src={"/imgs/whats.png"}
                  alt="Pergunte a um morador!"
                />
                Pergunte a um morador!
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-start gap-2">
          <TitleFooter className="relative top-[92px]">Contribua</TitleFooter>
          <div className="flex flex-col gap-3">
            <span>Quer contribuir com o projeto?</span>
            <Link className="underline font-bold" href="/">
              Envie aqui um sats de energia!
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 p-3 text-center text-[#8E8E8E] text-sm border-t-2 border-[#DCDCDC]">
        © 2023 Bitcoin é Aqui! Rolante/Riozinho. Todos os direitos reservados.
      </div>
    </div>
  );
};
