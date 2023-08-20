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

const PontosTuristicos: NextPage<
  InferGetServerSidePropsType<typeof getStaticProps>
> = ({ points }) => {
  return (
    <>
      <Head>
        <Head>
          <title>Bitcoin é Aqui! Rolante/Riozinho - Pontos turísticos</title>
          <meta
            name="description"
            content="Onde a beleza natural se une à inovação do Bitcoin como forma de pagamento amplamente aceita."
          />
          <meta
            property="og:title"
            content="Bitcoin é Aqui! Rolante/Riozinho - Pontos turísticos"
          />
          <meta
            property="og:description"
            content="Onde a beleza natural se une à inovação do Bitcoin como forma de pagamento amplamente aceita."
          />
          <meta property="og:image" content="/imgs/logo.png" />
        </Head>
      </Head>
      <Header />
      <Breadcrumbs labels={[{ label: "Pontos turísticos", path: "" }]} />
      <Container>
        <Title>Pontos turísticos</Title>
        <p className="text-base">
          Como uma pacata cidadezinha do interior, os domingo por aqui são bem
          calmos. Se você planeja nos visitar neste dia da semana, sugerimos que
          faça reserva prévia para sua refeição, seja em uma de nossas
          encantadoras pousadas ou entre as opções listadas na aba
          {"estabelecimentos"}. Caso não encontre o que procura, envie-nos uma
          mensagem em nosso chat para obter mais detalhes.
        </p>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-1">
          {points.map((item) => (
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

export default PontosTuristicos;

export const getStaticProps = async () => {
  const client = createClient();

  const points = await client.getAllByType("pontos_turisticos");

  return {
    props: { points },
    revalidate: 60,
  };
};
