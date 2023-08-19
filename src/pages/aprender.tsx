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
      <a
        href={node.data.url}
        target="_blank"
        className="underline font-medium text-primary"
      >
        {children}
      </a>
    );
  },

  list: ({ children }) => {
    return <ul className="list-disc mb-2 text-base pl-[32px]">{children}</ul>;
  },
};

const Aprender: NextPage<
  InferGetServerSidePropsType<typeof getStaticProps>
> = ({ learn }) => {
  return (
    <>
      <Head>
        <title>Aprenda sobre Bitcoin</title>
        <meta name="description" content="Aprenda sobre Bitcoin" key="desc" />
        <meta property="og:title" content="Aprenda sobre Bitcoin" />
        <meta property="og:description" content="Aprenda sobre Bitcoin" />
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
  };
};
