import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Layout/Container";
import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import { Title } from "@/components/Title";
import { createClient } from "@/prismicio";
import { RTLinkNode } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import { InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const components: JSXMapSerializer = {
  hyperlink: ({ node, children }) => {
    return (
      <a href={node.data.url} target="_blank" className="underline font-medium">
        {children}
      </a>
    );
  },
};

const Hotelaria: NextPage<
  InferGetServerSidePropsType<typeof getStaticProps>
> = ({ hotelaria }) => {
  return (
    <>
      <Head>
        <title>Bitcoin é aqui - Hotelaria</title>
        <meta
          name="description"
          content="Bitcoin é aqui - Hotelaria"
          key="desc"
        />
        <meta property="og:title" content="Bitcoin é aqui - Hotelaria" />
        <meta property="og:description" content="Bitcoin é aqui - Hotelaria" />
      </Head>
      <Header />
      <Breadcrumbs labels={[{ label: "Hotelaria", path: "" }]} />
      <Container>
        <Title>Hotelaria</Title>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-1">
          {hotelaria.map((item) => (
            <div
              key={item.data.titulo}
              className="flex flex-col gap-2 items-start p-4 rounded shadow-lg"
            >
              <h3 className="font-bold text-xl pb-1 border-primary border-b-2">
                {item.data.titulo}
              </h3>
              <Image
                src={item.data.imagem.url || ""}
                width={item.data.imagem.dimensions?.width}
                height={item.data.imagem.dimensions?.height}
                alt={String(item.data.titulo)}
                className="mb-1"
              />
              <PrismicRichText
                field={item.data.descricao}
                components={components}
              />
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Hotelaria;

export const getStaticProps = async () => {
  const client = createClient();

  const hotelaria = await client.getAllByType("hotelaria");

  return {
    props: { hotelaria },
    revalidate: 60,
  };
};
