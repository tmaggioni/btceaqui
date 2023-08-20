import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { Container } from "@/components/Layout/Container";
import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import { Title } from "@/components/Title";
import { createClient } from "@/prismicio";
import { formatDateToPtBR } from "@/utils";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import { InferGetServerSidePropsType, NextPage } from "next";
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
};

const Eventos: NextPage<InferGetServerSidePropsType<typeof getStaticProps>> = ({
  events,
}) => {
  return (
    <>
      <Head>
        <title>Bitcoin é Aqui! Rolante/Riozinho - Eventos</title>
        <meta
          name="description"
          content="Onde a beleza natural se une à inovação do Bitcoin como forma de pagamento amplamente aceita."
        />
        <meta
          property="og:title"
          content="Bitcoin é Aqui! Rolante/Riozinho - Eventos"
        />
        <meta
          property="og:description"
          content="Onde a beleza natural se une à inovação do Bitcoin como forma de pagamento amplamente aceita."
        />
        <meta property="og:image" content="/imgs/logo.png" />
      </Head>
      <Header />
      <Breadcrumbs labels={[{ label: "Eventos", path: "" }]} />
      <Container>
        <Title>Eventos</Title>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-1">
          {events.map((item) => {
            return (
              <div
                key={item.data.titulo}
                className="flex flex-col gap-2 items-start p-4 rounded shadow-lg w-full"
              >
                <h3 className="font-bold text-xl pb-1 border-primary border-b-2">
                  {item.data.titulo}
                </h3>

                {item.data.imagem.url && (
                  <Link href={`/eventos/${item.uid}`}>
                    <Image
                      src={item.data.imagem.url}
                      width={item.data.imagem.dimensions?.width}
                      height={item.data.imagem.dimensions?.height}
                      alt={String(item.data.titulo)}
                      className="mb-1"
                    />
                  </Link>
                )}

                {item.data.data && (
                  <h4 className="font-bold text-primary">
                    {formatDateToPtBR(item.data.data)}
                  </h4>
                )}
                <PrismicRichText
                  field={item.data.resumo}
                  components={components}
                />
                <Button
                  label="Confira os detalhes"
                  link={`/eventos/${item.uid}`}
                  size="small"
                  className="p-2"
                />
              </div>
            );
          })}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Eventos;

export const getStaticProps = async () => {
  const client = createClient();

  const events = await client.getAllByType("eventos", {
    orderings: [{ field: "my.eventos.ordem", direction: "desc" }],
  });

  return {
    props: { events },
    revalidate: 60,
  };
};
