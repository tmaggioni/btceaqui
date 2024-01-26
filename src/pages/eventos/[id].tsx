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

import { useRouter } from "next/router";

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
    return (
      <ul className="list-disc mb-2 text-base pl-[32px] flex flex-col gap-4">
        {children}
      </ul>
    );
  },
  heading4: ({ children }) => {
    return <h4 className="mt-10 mb-1">{children}</h4>;
  },
  image: ({ node }) => {
    return (
      <div className="w-full flex justify-center">
        <Image
          src={node.url}
          alt={node.alt || ""}
          width={node.dimensions.width}
          height={node.dimensions.height}
        />
      </div>
    );
  },
};

const EventDetail: NextPage<
  InferGetServerSidePropsType<typeof getStaticProps>
> = ({ event }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }
  return (
    <>
      <Head>
        <title>Bitcoin é Aqui! - {event.data.titulo}</title>
        <meta name="description" content={event.data.titulo} />
        <meta property="og:title" content={event.data.titulo} />
        <meta property="og:description" content={event.data.titulo} />
        <meta property="og:image" content="/imgs/logo.png" />
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

        <div className="eventos flex flex-col gap-5 items-start p-4 rounded shadow-lg">
          <Image
            src={event.data.imagem.url || ""}
            width={event.data.imagem.dimensions?.width}
            height={event.data.imagem.dimensions?.height}
            alt={String(event.data.titulo)}
            className="mb-1 self-center"
          />
          {!!event.data.data && (
            <h4 className="font-bold text-primary">
              {formatDateToPtBR(event.data.data)}
            </h4>
          )}
          <PrismicRichText
            field={event.data.descricao}
            components={components}
          />
        </div>
        {event.uid === "bitcoin-spring-festival-2023" && (
          <>
            <Title>Parceiros</Title>
            <div className="flex flex-col items-center gap-10">
              <div className="flex items-center gap-3 lg:flex-col shadow-lg rounded-lg p-3">
                <a href="https://2gofintech.io/" target="_blank">
                  <Image
                    src={"/parceiros/2gobank.png"}
                    width={250}
                    height={250}
                    alt="2GO Bank"
                    unoptimized
                  />
                </a>
                <a
                  href="http://bingx.com/partner/parceirobingx"
                  target="_blank"
                >
                  <Image
                    src={"/parceiros/bingx.png"}
                    width={300}
                    height={300}
                    alt="BingX"
                    unoptimized
                  />
                </a>
              </div>
              <div className="flex items-center gap-8 lg:flex-col">
                <a href="https://agendacrypto.xyz/" target="_blank">
                  <Image
                    src={"/parceiros/agenda-crypto.png"}
                    width={150}
                    height={150}
                    alt="Agenda Crypto"
                    unoptimized
                  />
                </a>
                <a href="https://www.criptomaniacos.io/" target="_blank">
                  <Image
                    src={"/parceiros/criptomaniacos.png"}
                    width={150}
                    height={150}
                    alt="Criptomaniacos"
                    unoptimized
                  />
                </a>
                <a href="https://www.cashfort.com.br/" target="_blank">
                  <Image
                    src={"/parceiros/cashfort.png"}
                    width={150}
                    height={150}
                    alt="Cashfort"
                    unoptimized
                  />
                </a>
                <a href="https://www.zuvia.com.br/" target="_blank">
                  <Image
                    src={"/parceiros/zuvia2.png"}
                    width={150}
                    height={150}
                    alt="Zuvia"
                    unoptimized
                  />
                </a>
                <a href="https://www.camilap2p.com.br/" target="_blank">
                  <Image
                    src={"/parceiros/camilap2p.png"}
                    width={150}
                    height={150}
                    alt="Camila p2p"
                    unoptimized
                  />
                </a>
                <a href="https://bipa.app/" target="_blank">
                  <Image
                    src={"/parceiros/bipa.png"}
                    width={150}
                    height={150}
                    alt="Bipa"
                    unoptimized
                  />
                </a>
                <a href="https://www.criptofacil.com/" target="_blank">
                  <Image
                    src={"/parceiros/criptofacil.webp"}
                    width={200}
                    height={200}
                    alt="CRIPTOFACIL"
                    unoptimized
                  />
                </a>
              </div>
            </div>
          </>
        )}
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
    revalidate: 60,
  };
};
