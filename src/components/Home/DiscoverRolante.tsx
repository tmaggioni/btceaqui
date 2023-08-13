import Image from "next/image";
import { Button } from "../Button";

export const DiscoverRolante = () => {
  return (
    <>
      <div className="w-full relative flex flex-col justify-center items-center h-[80vh]">
        <Image
          src={"/imgs/img-cachoeira.png"}
          fill
          alt="Background"
          className="object-cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-center gap-7">
          <h2 className="text-5xl text-white drop-shadow-btc font-bold text-center flex flex-col gap-2">
            <span>
              Viver <span className="text-7xl">100%</span> em BTC?
            </span>
            <span>Aqui já é possível</span>
          </h2>
          <Button label="Confira os pontos!" link={"/"} />
        </div>
      </div>
      <div className="container flex items-center justify-center gap-5 mt-[-50px]">
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl font-bold">Descubra Rolante e região</h2>

          <p className="text-base max-w-[500px]">
            Um refúgio encantador e seguro, onde a beleza natural se une à
            inovação do Bitcoin como forma de pagamento amplamente aceita.
            Imersa na deslumbrante Mata Atlântica, Rolante se orgulha de suas
            cachoeiras e cascatas, muitas ainda inexploradas, proporcionando uma
            experiência única aos visitantes.
          </p>
        </div>

        <div className="min-w-[450px]">
          <div className="relative w-full h-[392px]">
            <Image
              src={"/imgs/foto-dir.png"}
              alt="Background"
              fill
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className="container flex items-center justify-center gap-5 mt-[-50px]">
        <div className="min-w-[450px]">
          <div className="relative w-full h-[392px]">
            <Image
              src={"/imgs/foto-esq.png"}
              alt="Background"
              fill
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
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
      <div className="container flex items-center justify-center gap-5 mt-[-50px]">
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

        <div className="min-w-[450px]">
          <div className="relative w-full h-[392px]">
            <Image
              src={"/imgs/foto2-dir.png"}
              alt="Background"
              fill
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className="container flex items-center justify-center gap-5">
        <div className="min-w-[450px]">
          <div className="relative w-full h-[392px]">
            <Image
              src={"/imgs/foto-esq.png"}
              alt="Background"
              fill
              objectFit="contain"
            />
          </div>
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
