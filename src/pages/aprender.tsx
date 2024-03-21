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

const Aprender: NextPage<
  InferGetServerSidePropsType<typeof getStaticProps>
> = ({ learn }) => {
  return (
    <>
      <Head>
        <title>Bitcoin é Aqui! Rolante/Riozinho - Aprender +</title>
        <meta name="description" content="Aprenda mais sobre bitcoin" />
        <meta
          property="og:title"
          content="Bitcoin é Aqui! Rolante/Riozinho - Aprender +"
        />
        <meta property="og:description" content="Aprenda mais sobre bitcoin" />
        <meta
          property="og:image"
          content="https://www.bitcoineaqui.com.br/imgs/logobtceaqui.jpg"
        />
      </Head>
      <Header />
      <Breadcrumbs labels={[{ label: "Aprender +", path: "" }]} />
      <Container>
        <Title>Aprender +</Title>
        <div className="aprender">
          <PrismicRichText
            field={learn.data.descricao}
            components={components}
          />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Aprender;

export const getStaticProps = async () => {
  const client = createClient();

  const learn = await client.getSingle("aprender");

  return {
    props: { learn },
    revalidate: 60,
  };
};
