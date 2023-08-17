import { Breadcrumbs } from "@/components/Breadcrumbs";
import { IconWhats } from "@/components/Icons/";
import { IconFilter } from "@/components/Icons/IconFilter";
import { IconInsta } from "@/components/Icons/IconInsta";

import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import { Title } from "@/components/Title";

import { useIsMobile } from "@/hooks/useIsMobile";
import useOutsideClick from "@/hooks/useOutsideClick";
import { createClient } from "@/prismicio";
import { InferGetServerSidePropsType, NextPage } from "next";
import { useMemo, useState } from "react";

const Pontos: NextPage<InferGetServerSidePropsType<typeof getStaticProps>> = ({
  categories,
  locals,
}) => {
  const [selecteds, setSelecteds] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const isMobile = useIsMobile();
  const [showCategories, setShowCategories] = useState(false);

  const handleSelecteds = (categorie: string) => {
    if (!selecteds.includes(categorie)) {
      setSelecteds((prev) => [...prev, categorie]);
    } else {
      setSelecteds((prev) => prev.filter((item) => item !== categorie));
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
            item.data.nome
              ?.toLowerCase()
              .includes(search.toLocaleLowerCase()) ||
            item.data.tipo?.toLowerCase().includes(search.toLocaleLowerCase())
        )
      : filteredLocals;
  }, [search, filteredLocals, locals]);

  const handleClickOutside = () => {
    setShowCategories(false);
  };
  const ref = useOutsideClick<HTMLDivElement>(handleClickOutside);

  return (
    <>
      <Header />
      <Breadcrumbs label="Pontos" />
      <div className="container flex flex-col mt-5 gap-5">
        <Title>Lista de serviços</Title>

        <div className="w-[100%] flex flex-wrap justify-center gap-3 lg:hidden">
          {categories.map((item) => (
            <div
              key={item.data.nome}
              onClick={() => handleSelecteds(String(item.uid))}
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

        <div className="container flex  lg:gap-2 justify-between items-end lg:items-center">
          <input
            type="text"
            placeholder="Pesquise aqui"
            className="shadow-sm border-[#ccc] border-[1px] p-2 rounded-lg"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <div className="text-sm font-bold">
            {locals.length} estabelecimentos
          </div>
        </div>
        <div className="grid grid-cols-5 gap-3 lg:grid-cols-1 pt-10 border-t-4 border-primary">
          {searchedLocals.map((item) => (
            <div
              key={item.data.nome}
              className="bg-white transition-all shadow-lg rounded-md p-3 flex items-start flex-col"
            >
              <span className="font-bold  border-gray-100 border-b-[1px]">
                {item.data.nome}
              </span>
              <span className="text-[12px] ">{item.data.tipo} </span>

              {(!!item.data.instagram || !!item.data.telefone) && (
                <div className="w-full bg-gray-100 p-2 rounded-md flex self-end flex-col gap-1 bg-opacity-40">
                  {!!item.data.telefone && (
                    <span className="flex items-center text-[13px] gap-1 font-medium">
                      <IconWhats width={15} height={15} />
                      {item.data.telefone}
                    </span>
                  )}
                  {!!item.data.instagram && (
                    <span className="flex items-center text-[13px] gap-1 font-medium">
                      <IconInsta width={15} height={15} />
                      <a href={item.data.instagram} target="_blank">
                        {item.data.instagram.split("/")[3]}
                      </a>
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="w-[100%] mt-5">
          <iframe
            id="btcmap"
            className="w-full h-[400px]"
            title="BTC Map"
            allow="geolocation"
            src="https://btcmap.org/map?community=bitcoin-e-aqui"
          />
        </div>
      </div>
      <div className="fixed hidden lg:flex bg-primary w-[45px] h-[45px] p-2 bottom-3 right-3 shadow rounded-full ">
        <IconFilter
          className="fill-white"
          onClick={() => setShowCategories(!showCategories)}
        />
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
                onClick={() => handleSelecteds(String(item.uid))}
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pontos;

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
  };
};
