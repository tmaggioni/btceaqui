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

const Doacoes: NextPage<InferGetServerSidePropsType<typeof getStaticProps>> = ({
  donation,
}) => {
  return (
    <>
      <Head>
        <title>Bitcoin é Aqui! Rolante/Riozinho - Doações</title>
        <meta
          name="description"
          content="Onde a beleza natural se une à inovação do Bitcoin como forma de pagamento amplamente aceita."
        />
        <meta
          property="og:title"
          content="Bitcoin é Aqui! Rolante/Riozinho - Doações"
        />
        <meta
          property="og:description"
          content="Onde a beleza natural se une à inovação do Bitcoin como forma de pagamento amplamente aceita."
        />
        <meta property="og:image" content="/imgs/logo.png" />
      </Head>
      <Header />
      <Breadcrumbs labels={[{ label: "Doações", path: "" }]} />
      <Container>
        <Title>Doações</Title>
        <PrismicRichText
          field={donation.data.descricao}
          components={components}
        />
      </Container>
      <Footer />
    </>
  );
};

export default Doacoes;

export const getStaticProps = async () => {
  const client = createClient();

  const donation = await client.getSingle("doacoes");

  return {
    props: { donation },
    revalidate: 60,
  };
};
