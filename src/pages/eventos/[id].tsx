import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { Container } from "@/components/Layout/Container";
import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import { Title } from "@/components/Title";
import { createClient } from "@/prismicio";
import { formatDateToPtBR } from "@/utils";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const components: JSXMapSerializer = {
  hyperlink: ({ node, children }) => {
    return (
      <a href={node.data.url} target="_blank" className="underline font-medium">
        {children}
      </a>
    );
  },
  list: ({ children }) => {
    return <ul className="list-disc mb-2 text-base pl-[32px]">{children}</ul>;
  },
};

const EventDetail: NextPage<
  InferGetServerSidePropsType<typeof getStaticProps>
> = ({ event }) => {
  return (
    <>
      <Head>
        <title>Bitcoin é aqui - Eventos</title>
        <meta
          name="description"
          content="Bitcoin é aqui - Eventos"
          key="desc"
        />
        <meta property="og:title" content="Bitcoin é aqui - Eventos" />
        <meta property="og:description" content="Bitcoin é aqui - Eventos" />
      </Head>
      <Header />
      <Breadcrumbs
        labels={[
          { label: "Eventos", path: "/eventos" },
          { label: event.data.titulo, path: "" },
        ]}
      />
      <Container>
        <Title>Eventos</Title>

        <div className="flex flex-col gap-5 items-start p-4 rounded shadow-lg">
          <Image
            src={event.data.imagem.url || ""}
            width={event.data.imagem.dimensions?.width}
            height={event.data.imagem.dimensions?.height}
            alt={String(event.data.titulo)}
            className="mb-1 self-center"
          />

          {event.data.data && (
            <h4 className="font-bold text-primary">
              {formatDateToPtBR(event.data.data)}
            </h4>
          )}
          <PrismicRichText
            field={event.data.descricao}
            components={components}
          />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default EventDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient();
  const events = await client.getAllByType("eventos");

  const paths = events.map((event) => {
    return {
      params: { id: event.uid.toString() },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = createClient();

  const event = await client.getByUID("eventos", String(params?.id));

  return {
    props: { event },
  };
};
