import { Button } from "@/components/Button";
import { HalvingCountDown } from "@/components/HalvingCountDown";
import { DiscoverRolante } from "@/components/Home/DiscoverRolante";
import { IconHotel, IconPin, IconPlane, IconWhats } from "@/components/Icons/";
import { IconParty } from "@/components/Icons/IconParty";
import { IconPins } from "@/components/Icons/IconPins";
import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import { Title } from "@/components/Title";
import { createClient } from "@/prismicio";
import { InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";

const Home: NextPage<InferGetServerSidePropsType<typeof getStaticProps>> = ({
  eventHome,
}) => {
  return (
    <>
      <Head>
        <title>Bitcoin é Aqui! Rolante/Riozinho</title>
        <meta
          name="description"
          content="Onde a beleza natural se une à inovação do Bitcoin como forma de pagamento amplamente aceita."
        />
        <meta property="og:title" content="Bitcoin é Aqui! Rolante/Riozinho" />
        <meta
          property="og:description"
          content="Onde a beleza natural se une à inovação do Bitcoin como forma de pagamento amplamente aceita."
        />
        <meta property="og:image" content="/imgs/logobtceaqui.jpg" />
      </Head>
      <Header />
      <HalvingCountDown />
      <DiscoverRolante eventHome={eventHome} />

      <div className="w-full mt-16 pt-6 pb-6 flex justify-center items-center gap-3">
        <Title>O que fazer na Região?</Title>
      </div>
      <div className="w-full pt-5">
        <div className="container grid grid-cols-3 gap-3 mt-8 mb-8 lg:grid-cols-1">
          <div className="bg-white transition-all shadow-xl rounded-2xl p-10 flex items-center justify-between flex-col gap-5 ">
            <IconPins width={"50px"} height={"50px"} />

            <h2 className="text-black text-lg font-bold text-center">
              Estabelecimentos
            </h2>
            <p className="text-black text-base text-center">
              Aqui você já consegue viver 100% em bitcoin.
            </p>
            <Button
              label="Confira os locais"
              link="/estabelecimentos"
              className="self-center"
              size="medium"
            />
          </div>
          <div className="bg-white transition-all shadow-xl rounded-2xl p-10 flex items-center justify-between flex-col gap-5 ">
            <IconPin width={"50px"} height={"50px"} />

            <h2 className="text-black text-lg font-bold text-center">
              Pontos turísticos
            </h2>
            <p className="text-black text-base text-center">
              Confira as melhores atrações para visitar em Rolante.
            </p>
            <Button
              label="Confira"
              link="/pontos-turisticos"
              className="self-center"
              size="medium"
            />
          </div>
          <div className="bg-white transition-all shadow-xl rounded-2xl p-10 flex items-center justify-between flex-col gap-5 ">
            <IconParty width={"50px"} height={"50px"} />

            <h2 className="text-black text-lg font-bold text-center">
              Eventos
            </h2>
            <p className="text-black text-base text-center">
              Acesse aqui e fique por dentro dos nossos eventos.
            </p>
            <Button
              label="Confira"
              link="/eventos"
              className="self-center"
              size="medium"
            />
          </div>
          <div className="bg-white transition-all shadow-xl rounded-2xl p-10 flex items-center justify-between flex-col gap-5 ">
            <IconHotel width={"50px"} height={"50px"} />

            <h2 className="text-black text-lg font-bold text-center">
              Hotelaria
            </h2>
            <p className="text-black text-base text-center">
              Conheça as acomodações de Rolante: Excelência em hospitalidade
              aguarda sua visita
            </p>
            <Button
              label="Confira"
              link="/hotelaria"
              className="self-center"
              size="medium"
            />
          </div>
          <div className="bg-white transition-all shadow-xl rounded-2xl p-10 flex items-center justify-between flex-col gap-5 ">
            <IconPlane width={"50px"} height={"50px"} />

            <h2 className="text-black text-lg font-bold text-center">
              Como chegar em Rolante e à Pousada Escolhida?
            </h2>
            <p className="text-black text-base text-center">
              Preparamos algumas opções de roteiro para facilitar sua viagem a
              Rolante e garantir que você chegue à nossa cidade com
              tranquilidade.
            </p>
            <Button
              label="Bora!"
              link="/como-chegar"
              className="self-center"
              size="medium"
            />
          </div>

          <div className="bg-white transition-all shadow-xl rounded-2xl p-10 flex items-center justify-between flex-col gap-5 ">
            <IconWhats width={"50px"} height={"50px"} />

            <h2 className="text-black text-lg font-bold text-center">
              Chat Turismo
            </h2>
            <p className="text-black text-base text-center">
              Interaja diretamente com os moradores, obtendo dicas valiosas e
              descobrindo os segredos escondidos nos detalhes.
            </p>
            <Button
              label="Whatsapp"
              link="https://chat.whatsapp.com/COAUUgDhmDyHwQDPLOLg4a"
              className="self-center"
              target="_blank"
              size="medium"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const client = createClient();

  const eventHome = await client.getSingle("eventohome");

  return {
    props: { eventHome },
    revalidate: 60,
  };
};
