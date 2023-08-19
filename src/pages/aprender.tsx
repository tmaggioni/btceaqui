import { Breadcrumbs } from "@/components/Breadcrumbs";
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
      <Breadcrumbs label="Aprender +" />
      <div className="container flex flex-col mt-5 gap-5">
        <Title>Aprender +</Title>
        {/* <div className="text-lg font-bold">{learn.data.titulo}</div> */}
        <PrismicRichText field={learn.data.descricao} components={components} />
      </div>
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
