import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Layout/Container";
import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import { Title } from "@/components/Title";
import { createClient } from "@/prismicio";

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
  heading4: ({ children }) => {
    return <h4 className="mt-10 mb-1">{children}</h4>;
  },
};

const ComoChegar: NextPage<
  InferGetServerSidePropsType<typeof getStaticProps>
> = ({ comoChegar }) => {
  return (
    <>
      <Head>
        <title>Bitcoin é aqui - Como chegar</title>
        <meta
          name="description"
          content="Bitcoin é aqui - Como chegar"
          key="desc"
        />
        <meta property="og:title" content="Bitcoin é aqui - Como chegar" />
        <meta
          property="og:description"
          content="Bitcoin é aqui - Como chegar"
        />
      </Head>
      <Header />
      <Breadcrumbs labels={[{ label: "Como chegar", path: "" }]} />
      <Container>
        <Title>Como chegar</Title>
        <div>
          <PrismicRichText
            field={comoChegar.data.descricao}
            components={components}
          />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default ComoChegar;

export const getStaticProps = async () => {
  const client = createClient();

  const comoChegar = await client.getSingle("como_chegar");

  return {
    props: { comoChegar },
    revalidate: 60,
  };
};
