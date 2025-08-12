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

const Monitoramento: NextPage<
  InferGetServerSidePropsType<typeof getStaticProps>
> = ({ monitoramento }) => {
  return (
    <>
      <Head>
        <title>Bitcoin é Aqui! Rolante/Riozinho - Monitoramento dos rios</title>
        <meta
          name="description"
          content="Onde a beleza natural se une à inovação do Bitcoin como forma de pagamento amplamente aceita."
        />
        <meta
          property="og:title"
          content="Bitcoin é Aqui! Rolante/Riozinho - Monitoramento dos rios"
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
      <Breadcrumbs labels={[{ label: "Monitoramento", path: "" }]} />
      <Container>
        <Title>Monitoramento dos rios</Title>
        <div className="flex flex-col gap-2">
          <PrismicRichText
            field={monitoramento.data.descricao}
            components={components}
          />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Monitoramento;

export const getStaticProps = async () => {
  const client = createClient();

  const monitoramento = await client.getSingle("monitoramento");

  return {
    props: { monitoramento },
    revalidate: 60,
  };
};
