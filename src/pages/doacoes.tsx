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

const components: JSXMapSerializer = {
  hyperlink: ({ node, children }) => {
    return (
      <a href={node.data.url} target="_blank" className="underline font-medium">
        {children}
      </a>
    );
  },
};

const Doacoes: NextPage<InferGetServerSidePropsType<typeof getStaticProps>> = ({
  donation,
}) => {
  return (
    <>
      <Head>
        <title>Bitcoin é aqui - Doações </title>
        <meta
          name="description"
          content="Bitcoin é aqui - Doações"
          key="desc"
        />
        <meta property="og:title" content="Bitcoin é aqui - Doações" />
        <meta property="og:description" content="Bitcoin é aqui - Doações" />
      </Head>
      <Header />
      <Breadcrumbs labels={[{ label: "Doações", path: "" }]} />
      <Container>
        <Title>Doações</Title>
        {/* <div className="text-lg font-bold">{learn.data.titulo}</div> */}
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
  };
};
