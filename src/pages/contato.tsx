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
  heading4: ({ children }) => {
    return <h4 className="mt-10 mb-1">{children}</h4>;
  },
};

const Contato: NextPage<InferGetServerSidePropsType<typeof getStaticProps>> = ({
  contact,
}) => {
  return (
    <>
      <Head>
        <title>Bitcoin é Aqui! Rolante/Riozinho - Contato</title>
        <meta
          name="description"
          content="Onde a beleza natural se une à inovação do Bitcoin como forma de pagamento amplamente aceita."
        />
        <meta
          property="og:title"
          content="Bitcoin é Aqui! Rolante/Riozinho - Contato"
        />
        <meta
          property="og:description"
          content="Onde a beleza natural se une à inovação do Bitcoin como forma de pagamento amplamente aceita."
        />
        <meta property="og:image" content="/imgs/logo.png" />
      </Head>
      <Header />
      <Breadcrumbs labels={[{ label: "Contato", path: "" }]} />
      <Container>
        <Title>Contato</Title>
        <div className="flex flex-col gap-2">
          <PrismicRichText
            field={contact.data.descricao}
            components={components}
          />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Contato;

export const getStaticProps = async () => {
  const client = createClient();

  const contact = await client.getSingle("contato");

  return {
    props: { contact },
    revalidate: 60,
  };
};
