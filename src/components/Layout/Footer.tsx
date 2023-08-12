import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full mt-8 bg-black">
      <div className="container flex items-center justify-center gap-11">
        <div className="flex gap-11 justify-between">
          <Link
            href={"/"}
            className="bg-white p-1 hover:bg-primary rounded-md text-base  hover:text-white transition-all hover:font-bold"
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
            className="bg-white p-1 hover:bg-primary rounded-md text-base hover:text-white transition-all hover:font-bold"
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
            className="bg-white p-1 hover:bg-primary rounded-md text-base transition-all hover:text-white transition-all hover:font-bold"
          >
            Aprender +
          </Link>
          <Link
            href={"/"}
            className="bg-white p-1 hover:bg-primary rounded-md text-base transition-all hover:text-white transition-all hover:font-bold"
          >
            Contato
          </Link>
          <Link
            href={"/"}
            className="bg-white p-1 hover:bg-primary rounded-md text-base transition-all hover:text-white transition-all hover:font-bold"
          >
            Doações
          </Link>
        </div>
      </div>
    </div>
  );
};
