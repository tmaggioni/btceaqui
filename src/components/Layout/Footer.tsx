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
                href="/estabelecimentos"
                className=" hover:text-primary text-[#383838] text-base transition-all hover:font-bold"
              >
                Estabelecimentos
              </Link>
            </li>
            <li>
              <Link
                href="/eventos"
                className=" hover:text-primary text-[#383838] text-base transition-all hover:font-bold"
              >
                Eventos
              </Link>
            </li>
            <li>
              <Link
                href="/doacoes"
                className=" hover:text-primary text-[#383838] text-base transition-all hover:font-bold"
              >
                Doações
              </Link>
            </li>
            <li>
              <Link
                href="/aprender"
                className=" hover:text-primary text-[#383838] text-base transition-all hover:font-bold"
              >
                Aprender +
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                className=" hover:text-primary text-[#383838] text-base transition-all hover:font-bold"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <TitleFooter className="relative top-[70px]">Turismo</TitleFooter>
          <ul className="list-none flex flex-col gap-1">
            <li>
              <Link
                href={"/pontos-turisticos"}
                className="font-medium whitespace-nowrap text-black hover:text-primary transition-all"
              >
                Pontos turísticos
              </Link>
            </li>
            <li>
              <Link
                href={"/hotelaria"}
                className="font-medium whitespace-nowrap text-black hover:text-primary transition-all"
              >
                Hotelaria
              </Link>
            </li>
            <li>
              <Link
                href={"/como-chegar"}
                className="font-medium whitespace-nowrap text-black hover:text-primary transition-all"
              >
                Como chegar
              </Link>
            </li>
            <li>
              <Link
                href={"https://chat.whatsapp.com/COAUUgDhmDyHwQDPLOLg4a"}
                target="_blank"
                className="font-medium whitespace-nowrap text-black hover:text-primary transition-all"
              >
                Chat turismo
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <TitleFooter className="relative top-[70px]">Contato</TitleFooter>
          <ul className="list-none flex flex-col gap-3">
            <li>
              <Link
                href="https://www.instagram.com/bitcoineaqui/"
                target="_blank"
                className=" hover:text-primary flex items-center gap-1 text-[#383838] text-base transition-all hover:font-bold"
              >
                <Image
                  width={25}
                  height={25}
                  src={"/imgs/insta.png"}
                  alt="Instagram link"
                />
                @bitcoineaqui
              </Link>
            </li>

            <li>
              <Link
                href="https://iris.to/bitcoineaqui"
                target="_blank"
                className=" hover:text-primary flex items-center gap-1 text-[#383838] text-base transition-all hover:font-bold"
              >
                <Image
                  width={25}
                  height={25}
                  src={"/imgs/iris.png"}
                  alt="Iris link"
                />
                https://iris.to/bitcoineaqui
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/bitcoineaqui"
                target="_blank"
                className=" hover:text-primary flex items-center gap-1 text-[#383838] text-base transition-all hover:font-bold"
              >
                <Image
                  width={25}
                  height={25}
                  src={"/imgs/x.png"}
                  alt="Link twitter"
                />
                @bitcoineaqui
              </Link>
            </li>
            <li>
              <Link
                href="https://chat.whatsapp.com/COAUUgDhmDyHwQDPLOLg4a"
                target="_blank"
                className=" hover:text-primary flex items-center gap-1 text-[#383838] text-base transition-all hover:font-bold"
              >
                <Image
                  width={25}
                  height={25}
                  src={"/imgs/whats.png"}
                  alt="Pergunte a um morador!"
                />
                Pergunte a um morador!
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-start gap-2">
          <TitleFooter className="relative top-[92px]">Contribua</TitleFooter>
          <div className="flex flex-col gap-3">
            <span>Quer contribuir com o projeto?</span>
            <Link
              className="underline font-bold"
              href="https://coinos.io/bitcoineaqui/receive"
              target="_blank"
            >
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
