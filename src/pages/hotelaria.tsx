import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Layout/Container";
import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import { Title } from "@/components/Title";
import { createClient } from "@/prismicio";
import { components } from "@/utils";
import { PrismicRichText } from "@prismicio/react";
import { InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Hotelaria: NextPage<
  InferGetServerSidePropsType<typeof getStaticProps>
> = ({ hotelaria }) => {
  return (
    <>
      <Head>
        <title>Bitcoin é Aqui! Rolante/Riozinho - Hotelaria</title>
        <meta
          name="description"
          content="Onde a beleza natural se une à inovação do Bitcoin como forma de pagamento amplamente aceita."
        />
        <meta
          property="og:title"
          content="Bitcoin é Aqui! Rolante/Riozinho - Hotelaria"
        />
        <meta
          property="og:description"
          content="Onde a beleza natural se une à inovação do Bitcoin como forma de pagamento amplamente aceita."
        />
        <meta
          property="og:image"
          content="https://www.bitcoineaqui.com.br/imgs/logobtceaqui.jpg"
        />
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

  const hotelaria = await client.getAllByType("hotelaria", {
    orderings: [{ field: "my.hotelaria.titulo", direction: "asc" }],
  });

  return {
    props: { hotelaria },
    revalidate: 60,
  };
};
