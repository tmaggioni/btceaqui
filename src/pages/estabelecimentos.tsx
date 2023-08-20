import { Breadcrumbs } from "@/components/Breadcrumbs";
import { IconWhats } from "@/components/Icons/";
import { IconCheck } from "@/components/Icons/IconCheck";
import { IconFilter } from "@/components/Icons/IconFilter";
import { IconInsta } from "@/components/Icons/IconInsta";
import { IconUp } from "@/components/Icons/IconUp";
import { Container } from "@/components/Layout/Container";

import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import { Title } from "@/components/Title";

import useOutsideClick from "@/hooks/useOutsideClick";
import { createClient } from "@/prismicio";
import { InferGetServerSidePropsType, NextPage } from "next";
import { useMemo, useState } from "react";

function phoneMask(phone: string) {
  return phone
    .replace(/\D/g, "")
    .replace(/(^\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4,5})(\d{4}$)/, "$1-$2");
}
const Estabelecimentos: NextPage<
  InferGetServerSidePropsType<typeof getStaticProps>
> = ({ categories, locals }) => {
  const [selecteds, setSelecteds] = useState<string[]>([]);
  const [selectedsToShow, setSelectedsToShow] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const [showCategories, setShowCategories] = useState(false);

  const handleSelecteds = (categorie: string, name: string) => {
    if (!selecteds.includes(categorie)) {
      setSelecteds((prev) => [...prev, categorie]);
      setSelectedsToShow((prev) => [...prev, name]);
    } else {
      setSelecteds((prev) => prev.filter((item) => item !== categorie));
      setSelectedsToShow((prev) => prev.filter((item) => item !== name));
    }
  };

  const filteredLocals = useMemo(() => {
    return selecteds.length > 0
      ? locals.filter((item) =>
          selecteds.includes(String((item.data.categoria as any).uid))
        )
      : locals;
  }, [selecteds, locals]);

  const searchedLocals = useMemo(() => {
    return search.length > 0
      ? locals.filter(
          (item) =>
            item.data.nome?.toLowerCase().includes(search) ||
            item.data.tipo?.toLowerCase().includes(search)
        )
      : filteredLocals;
  }, [search, filteredLocals, locals]);

  const handleClickOutside = () => {
    setShowCategories(false);
    if (showCategories) {
      scrollToTop();
    }
  };
  const ref = useOutsideClick<HTMLDivElement>(handleClickOutside);

  const isBrowser = () => typeof window !== "undefined";

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Header />
      <Breadcrumbs labels={[{ label: "Estabelecimentos", path: "" }]} />
      <Container>
        <Title>Lista de serviços</Title>
        <div className="w-[100%] flex flex-wrap justify-center gap-3 lg:hidden">
          {categories.map((item) => (
            <div
              key={item.data.nome}
              onClick={() =>
                handleSelecteds(String(item.uid), String(item.data.nome))
              }
              className={`shadow p-2 rounded-lg transition-all flex cursor-pointer ${
                selecteds.includes(String(item.uid))
                  ? "bg-primary text-white"
                  : "bg-white"
              }`}
            >
              {item.data.nome}
            </div>
          ))}
        </div>
        <div className="container flex  lg:gap-2 justify-between items-end  lg:flex-col">
          <input
            type="text"
            placeholder="Pesquise aqui"
            className="shadow-sm border-[#ccc] border-[1px] p-2 rounded-lg lg:w-full"
            onChange={(e) => {
              setSelectedsToShow([]);
              setSelecteds([]);
              setSearch(e.target.value.toLowerCase());
            }}
            value={search}
          />
          <div className="text-sm font-bold">
            {locals.length} estabelecimentos
          </div>
        </div>
        {selectedsToShow.length > 0 && (
          <div className="hidden lg:flex text-xs justify-center flex-col">
            <span>Selecionados:</span>
            <span className="font-bold text-sm">
              {selectedsToShow.join(" , ")}
            </span>
          </div>
        )}

        <div className="grid grid-cols-3 gap-3 lg:grid-cols-1 pt-10 border-t-4 border-primary">
          {searchedLocals.map((item) => (
            <div
              key={item.data.nome}
              className="bg-white transition-all shadow-lg rounded-md p-6 flex items-start flex-col"
            >
              <span className="font-bold text-lg border-gray-100 border-b-[1px]">
                {item.data.nome}
              </span>
              <span className="text-base">{item.data.tipo} </span>

              {(!!item.data.instagram || !!item.data.telefone) && (
                <div className="w-full bg-gray-100 p-2 rounded-md flex self-end flex-col gap-2 bg-opacity-40 mt-2">
                  {!!item.data.telefone && (
                    <a
                      href={`https://wa.me//55${item.data.telefone}`}
                      target="_blank"
                      className="flex items-center text-base gap-1 font-medium"
                    >
                      <IconWhats
                        className="fill-[#25d366]"
                        width={20}
                        height={20}
                      />
                      {phoneMask(item.data.telefone)}
                    </a>
                  )}
                  {!!item.data.instagram && (
                    <a
                      href={item.data.instagram}
                      target="_blank"
                      className="flex items-center text-base gap-1 font-medium"
                    >
                      <IconInsta
                        className="fill-[#E1306C]"
                        width={20}
                        height={20}
                      />

                      {item.data.instagram.split("/")[3]}
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="w-[100%] mt-5 lg:hidden">
          <iframe
            id="btcmap"
            className="w-full h-[400px]"
            title="BTC Map"
            allow="geolocation"
            src="https://btcmap.org/map?community=bitcoin-e-aqui"
          />
        </div>
        <div
          className="lg:hidden fixed bottom-4 right-4 cursor-pointer rounded-full  w-[45px] h-[45px] z-10 bg-primary"
          onClick={() => scrollToTop()}
        >
          <IconUp className={`fill-white`} />
        </div>
      </Container>
      <div
        className={`fixed hidden lg:flex z-[51] bg-primary  h-[45px] items-center justify-center p-2 bottom-3 right-3 shadow  ${
          showCategories ? "w-auto rounded" : "w-[45px] rounded-full"
        }`}
      >
        {showCategories ? (
          <span className="font-normal text-white text-sm">
            Aplicar Filtros
          </span>
        ) : (
          <IconFilter
            className={`fill-white rotate-90`}
            onClick={() => {
              setShowCategories((prev) => !prev);
            }}
          />
        )}
      </div>
      <div
        className={`w-full h-[100vh] bg-black bg-opacity-80 fixed transition-all ${
          showCategories ? "z-50 opacity-100" : "opacity-0 z-[-1]"
        }`}
      >
        <div
          className={`w-[60%] h-full overflow-auto bg-white transition-all delay-100 duration-200 p-3 relative ${
            showCategories ? "left-0" : "left-[-100%]"
          }`}
          ref={ref}
        >
          <Title size="small">Categorias</Title>
          <div className="flex flex-col  gap-1 mt-4">
            {categories.map((item) => (
              <div
                key={item.data.nome}
                onClick={() => {
                  handleSelecteds(String(item.uid), String(item.data.nome));
                  setSearch("");
                }}
                className={`shadow p-2 rounded-lg transition-all flex cursor-pointer items-center gap-2 ${
                  selecteds.includes(String(item.uid))
                    ? "bg-primary text-white"
                    : "bg-white"
                }`}
              >
                {selecteds.includes(String(item.uid)) && (
                  <IconCheck className="fill-white" width={20} height={20} />
                )}
                {item.data.nome}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Estabelecimentos;

export const getStaticProps = async () => {
  const client = createClient();

  const categories = await client.getAllByType("categoria", {
    orderings: [{ field: "my.categoria.nome", direction: "asc" }],
  });

  const locals = await client.getAllByType("estabelecimentos", {
    orderings: [{ field: "my.estabelecimentos.nome", direction: "asc" }],
  });
  return {
    props: { categories, locals },
    revalidate: 60,
  };
};