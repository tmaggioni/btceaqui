import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
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
  );
};
