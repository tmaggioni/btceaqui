import Image from "next/image";
import { Button } from "../Button";
import { Parallax } from "react-scroll-parallax";
import useIsMobileClient from "@/hooks/useIsMobileClient";
import { EventohomeDocument } from "../../../prismicio-types";
import Link from "next/link";

interface Props {
  eventHome: EventohomeDocument<string>;
}
export const DiscoverRolante = ({ eventHome }: Props) => {
  const isMobile = useIsMobileClient();
  return (
    <>
      <div className="w-full relative flex flex-col justify-center items-center h-[80vh] lg:h-auto lg:pt-6 lg:pb-6">
        <Image
          unoptimized
          src={"/imgs/img-cachoeira.png"}
          fill
          alt="Background"
          objectFit="cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-center gap-7">
          <h1 className="text-5xl lg:text-2xl text-white drop-shadow-btc font-bold text-center flex flex-col gap-2">
            <span>
              Viver <span className="text-7xl lg:text-3xl">100%</span> em BTC?
            </span>
            <span>Aqui já é possível</span>
          </h1>
          <Button
            label="Veja os estabelecimentos!"
            link={"/estabelecimentos"}
            size={isMobile ? "medium" : "big"}
          />
        </div>
      </div>
      {/* {eventHome.data.imagem.url && (
        <Link
          href={`/eventos/${(eventHome.data.link as any).uid}`}
          className="absolute top-[40%] left-0 flex cursor-pointer lg:relative lg:animate-none lg:top-0 lg:m-auto max-h-[203px] max-w-[400px] lg:max-w-[300px] lg:overflow-hidden"
        >
          <div className="bg-primary w-[36px] h-[203px]">
            <span
              className={`text-[15px] whitespace-nowrap uppercase block font-bold drop-shadow-title rotate-[-90deg] relative top-[130px]`}
            >
              Próximo evento
            </span>
          </div>
          <Image
            unoptimized
            src={eventHome.data.imagem.url}
            width={eventHome.data.imagem.dimensions.width}
            height={203}
            className="object-cover"
            alt={eventHome.data.imagem.alt || "Evento Bitcoin é aqui"}
          />
        </Link>
      )} */}

      <div className="container flex items-center justify-center gap-5 mt-[-50px]  lg:flex-col relative z-20 lg:mt-[15px]">
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl font-bold lg:text-2xl">
            Descubra Rolante e região
          </h2>

          <p className="text-base max-w-[500px]">
            Um refúgio encantador e seguro, onde a beleza natural se une à
            inovação do Bitcoin como forma de pagamento amplamente aceita.
            Imersa na deslumbrante Mata Atlântica, Rolante se orgulha de suas
            cachoeiras e cascatas, muitas ainda inexploradas, proporcionando uma
            experiência única aos visitantes.
          </p>
        </div>

        <div className="min-w-[450px] lg:min-w-[95%] lg:max-w-[95%]">
          <Parallax speed={-9} disabled={isMobile}>
            <div className="relative w-full h-[392px] lg:h-[250px]">
              <Image
                src={"/imgs/foto-dir.png"}
                alt="Background"
                fill
                objectFit="contain"
              />
            </div>
          </Parallax>
        </div>
      </div>
      <div className="container flex items-center justify-center gap-5 mt-[-50px] lg:mt-[0px] lg:flex-col">
        <div className="min-w-[450px] lg:min-w-[95%] lg:max-w-[95%] lg:order-2">
          <Parallax speed={-5} disabled={isMobile}>
            <div className="relative w-full h-[392px] lg:h-[250px]">
              <Image
                src={"/imgs/foto-esq.png"}
                alt="Background"
                fill
                objectFit="contain"
              />
            </div>
          </Parallax>
        </div>
        <div className="flex flex-col gap-3 lg:mt-3">
          <p className="text-base max-w-[500px]">
            Neste paraíso, os amantes do vinho podem saborear a autêntica
            produção local em nossas vinícolas, enquanto apreciam o atendimento
            personalizado dos próprios proprietários. Aventure-se pelo Morro
            Grande, um marco natural imperdível pela vista mais alta da região e
            pelo belíssimo por-do-sol, e desfrute de uma variedade de atividades
            e serviços, todos acessíveis através do Bitcoin.
          </p>
        </div>
      </div>
      <div className="container flex items-center justify-center gap-5 mt-[-50px] lg:mt-[0px] lg:flex-col">
        <div className="flex flex-col gap-3">
          <p className="text-base max-w-[500px]">
            Em Rolante, viver a vida totalmente em Bitcoin é uma realidade.
            Aqui, você encontrará agências de turismo, guias especializados e
            uma diversidade de serviços, desde lojas de departamentos e óticas
            até imobiliárias, construtoras, arquitetos, móveis, materiais de
            construção e energia solar. Na área da saúde, conte com farmácias,
            massoterapeutas, fisioterapeutas e serviços odontológicos de ponta e
            até o hospital da cidade aceitando Bitcoin como pagamento.
          </p>
        </div>

        <div className="min-w-[450px] lg:min-w-[95%] lg:max-w-[95%]">
          <Parallax speed={-7} disabled={isMobile}>
            <div className="relative w-full h-[392px] lg:h-[250px]">
              <Image
                src={"/imgs/foto2-dir.png"}
                alt="Background"
                fill
                objectFit="contain"
              />
            </div>
          </Parallax>
        </div>
      </div>
      <div className="container flex items-center justify-center gap-5 lg:flex-col">
        <div className="min-w-[450px] lg:min-w-[95%] lg:max-w-[95%] lg:order-2">
          <Parallax speed={-8} disabled={isMobile}>
            <div className="relative w-full h-[392px] lg:h-[250px]">
              <Image
                src={"/imgs/foto2-esq.png"}
                alt="Background"
                fill
                objectFit="contain"
              />
            </div>
          </Parallax>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-base max-w-[500px]">
            Rolante é uma cidade pacata e tranquila, com uma atmosfera familiar
            que a torna um destino turístico perfeito para um fim de semana
            relaxante e um excelente lugar para se viver. Aqui, você pode
            desfrutar da serenidade de um aconchegante município do interior,
            enquanto aproveita a praticidade e a liberdade proporcionadas pelo
            Bitcoin. Venha conhecer e vivenciar tudo o que Rolante tem a
            oferecer, aliando o charme de uma cidade calma à inovação do
            bitcoin.
          </p>
        </div>
      </div>
    </>
  );
};
