import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { DiscoverRolante } from "@/components/Home/DiscoverRolante";
import { IconHotel, IconPin, IconPlane, IconWhats } from "@/components/Icons/";
import { IconInsta } from "@/components/Icons/IconInsta";
import { IconParty } from "@/components/Icons/IconParty";
import { IconPins } from "@/components/Icons/IconPins";
import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import { Title } from "@/components/Title";
import Link from "next/link";

const mock = [
  {
    categoria: "Alimentação",
    nome: "Hidrate RS",
    telefone: "51995873578",
    instagram: "",
  },
  {
    categoria: "Alimentação",
    nome: "Bolicho Valandro",
    telefone: "51999449685",
    instagram: "bolichovalandro",
  },
  {
    categoria: "Alimentação",
    nome: "Chalé da Borges",
    telefone: "51993350555",
    instagram: "chaledaborges",
  },
  {
    categoria: "Alimentação",
    nome: "DoisZé Café Bistrô",
    telefone: "5127471577",
    instagram: "doiszecafebistro",
  },
  {
    categoria: "Alimentação",
    nome: "San'Dea",
    telefone: "51997392275",
    instagram: "confeitaria_sandea_",
  },
  {
    categoria: "Saúde",
    nome: "Viva e Movimente",
    telefone: "12312",
    instagram: "",
  },
  {
    categoria: "Alimentação",
    nome: "Chalé da Borges",
    telefone: "51993350555",
    instagram: "chaledaborges",
  },
  {
    categoria: "Alimentação",
    nome: "DoisZé Café Bistrô",
    telefone: "5127471577",
    instagram: "doiszecafebistro",
  },
  {
    categoria: "Alimentação",
    nome: "San'Dea",
    telefone: "51997392275",
    instagram: "confeitaria_sandea_",
  },
  {
    categoria: "Saúde",
    nome: "Viva e Movimente",
    telefone: "Viva e Movimente",
    instagram: "",
  },
  {
    categoria: "Alimentação",
    nome: "Chalé da Borges",
    telefone: "51993350555",
    instagram: "chaledaborges",
  },
  {
    categoria: "Alimentação",
    nome: "DoisZé Café Bistrô",
    telefone: "5127471577",
    instagram: "doiszecafebistro",
  },
];

const mockCategories = [
  "Alimentação",
  "Animais",
  "Artesã",
  "Artesão",
  "Associação Empresas",
  "Automóvel",
  "Beleza",
  "Construção",
  "Entregas",
  "Escola",
  "Festa",
  "Floricultura",
  "Imobiliária",
  "Indústria",
  "Instalação Manutenção",
  "Loja",
  "Marketing",
  "Projeto Social",
  "Saúde",
];

export default function Pontos() {
  return (
    <>
      <Header />
      <Breadcrumbs label="Pontos" />
      <div className="container flex flex-col mt-5 gap-5">
        <Title>Lista de serviços</Title>
        <div className="w-[100%] mt-5">
          <iframe
            id="btcmap"
            className="w-full h-[400px]"
            title="BTC Map"
            allow="geolocation"
            src="https://btcmap.org/map?community=bitcoin-e-aqui"
          />
        </div>

        <div className="w-[100%] flex flex-wrap justify-center  gap-3">
          {mockCategories.map((item) => (
            <div
              key={item}
              className="shadow p-2 rounded-lg transition-all flex hover:bg-primary hover:text-white cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-5 gap-3 lg:grid-cols-2 pt-10 border-t-4 border-primary">
          {mock.map((item) => (
            <div
              key={item.nome}
              className="bg-white transition-all shadow-lg rounded-md p-3 flex items-start flex-col"
            >
              <span className="font-bold  border-gray-100 border-b-[1px]">
                {item.nome}
              </span>
              <span className="text-[12px] ">{item.categoria} </span>

              {(!!item.instagram || !!item.telefone) && (
                <div className="w-full bg-gray-100 p-2 rounded-md flex flex-col gap-1 bg-opacity-40">
                  {!!item.telefone && (
                    <span className="flex items-center text-[13px] gap-1 font-medium">
                      <IconWhats width={15} height={15} />
                      {item.telefone}
                    </span>
                  )}
                  {!!item.instagram && (
                    <span className="flex items-center text-[13px] gap-1 font-medium">
                      <IconInsta width={15} height={15} />
                      {item.instagram}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
