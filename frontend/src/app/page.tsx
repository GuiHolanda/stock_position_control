"use client";
import Image from "next/image";
import Grifo from "../components/Grifo";
import { OpenAccountButton } from "../components/OpenAccountButton";
import { DefaultPageSection } from "../components/UI/DefaultPageSection";
import { CardLayout01 } from "../components/UI/CardLayout01";
import {
  BeakerIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  GlobeAltIcon,
  PhoneIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import Carousel from "../components/Carousel";
import { CustomText } from "../components/UI/Texts";

const bigNumbers = [
  {
    title: "+500",
    text: "milhões sob custódia em ativos no Brasil e no Exterior",
  },
  {
    title: "+1.000",
    text: "clientes contruindo o seu futuro com a gente",
  },
  {
    title: "+10",
    text: "profissionais entre sócios e colaboradores",
  },
  {
    title: "92",
    text: "de NPS mostrando o alto nível de satisfação dos nossos clientes",
  },
];

const differentialCards = [
  {
    img: "/icons/headPhone.png",
    title: "Atendimento Dedicado",
    text: "Desfrute de um serviço personalizado com uma equipe que conhece suas necessidades e ajusta sua estratégia de investimento para maximizar seus resultados.",
  },
  {
    img: "/icons/chatBox.png",
    title: "Suporte Especializado",
    text: "Nosso time de especialistas acompanha de perto o desempenho do seu negócio e oferece orientações precisas para alcançar seus objetivos com eficiência.",
  },
  {
    img: "/icons/ideaLamp.png",
    title: "Inovação em Cada Passo",
    text: "Explore oportunidades de investimento com sugestões personalizadas e inovadoras, sempre baseadas em estratégias que atendem às suas preferências e objetivos.",
  },
  {
    img: "/icons/chessKnight.png",
    title: "Estratégias Personalizadas",
    text: "Monitoramos seu portfólio regularmente para identificar e sugerir oportunidades que impulsionem seu negócio para o próximo nível de sucesso.",
  },
];

export default function Page() {
  return (
    <>
      <DefaultPageSection.Section
        isFirstSection
        className="bg-home-page-texture bg-cover rounded-br-[48px] bg-center"
      >
        <DefaultPageSection.Mask className=" from-black/65 from-40% to-black/5 relative py-8 md:py-16">
          <DefaultPageSection.Div className="md:ml-32">
            <Grifo
              fill="#0d0d0d"
              opacity={"50%"}
              className="absolute right-32 h-[265px] -bottom-1 sm:h-[calc(100svh-132px)] xl:right-72"
            />
            <div className="col-span-12 md:col-span-8 flex flex-col gap-4 sm:gap-8 md:items-start z-10 my-auto">
              <div className="h-1 w-4 sm:w-8 sm:h-2 bg-white rounded-md"></div>
              <div className="flex flex-col gap-2 md:gap-8 text-cinza_ameno z-10">
                <CustomText.Title
                  maxWidth="lg"
                  fontSize="lg"
                  className="font-bold"
                >
                  Transforme seus sonhos com segurança financeira.
                </CustomText.Title>
                <CustomText.Paragraph maxWidth="lg" fontSize="md">
                  Na Veneza Investimentos, sabemos que o sucesso não acontece
                  por acaso. É o resultado de escolhas informadas e planejamento
                  estratégico. Estamos aqui para oferecer a expertise necessária
                  para que você possa alcançar suas metas financeiras com
                  confiança e segurança.
                </CustomText.Paragraph>
              </div>
              <OpenAccountButton />
            </div>
          </DefaultPageSection.Div>
        </DefaultPageSection.Mask>
      </DefaultPageSection.Section>

      <DefaultPageSection.Section className="py-8 md:py-32">
        <DefaultPageSection.Div className="divide-y-2 md:divide-y-0 md:divide-x-2 mx-auto">
          <div className="col-span-12 md:col-span-6 flex flex-col gap-8 md:mr-8 md:pr-8 items-center md:items-start md:text-left pb-4 md:pb-0">
            <CustomText.Title fontSize="md" maxWidth="md">
              Muito além dos números
            </CustomText.Title>
            <CustomText.Paragraph fontSize="md" maxWidth="md">
              Nosso time conecta expertise de mercado ao seu propósito de vida.
              Afinal, ser exclusivo, de verdade, é ter acesso a uma curadoria
              financeira feita pelas mãos de quem conhece e respeita a sua
              história.
              <br />
              <br />
              Leva tempo para construir uma trajetória sólida como a sua. Pos
              isso, somos uma familia que ilummina o caminha de outras famílias,
              carregando a missão de perpetuar o seu patrimônio por gerações
            </CustomText.Paragraph>
          </div>
          <ul className="col-span-12 md:col-span-6 flex flex-col gap-4 md:gap-8 items-center md:items-end mx-auto pt-4 md:pt-0 md:pl-16">
            {bigNumbers.map((bigNumber, index) => (
              <li
                key={index}
                className="flex items-center gap-4 w-64 sm:w-80 md:w-full"
              >
                <span className="text-3xl md:text-6xl font-extrabold font-montserrat text-azul_sereno flex-grow md:flex-grow-0 text-right md:text-left">
                  {bigNumber.title}
                </span>
                <CustomText.Paragraph fontSize="sm" maxWidth="sm">
                  {bigNumber.text}
                </CustomText.Paragraph>
              </li>
            ))}
          </ul>
        </DefaultPageSection.Div>
      </DefaultPageSection.Section>

      <DefaultPageSection.Section className="py-8 md:py-32 bg-black">
        <DefaultPageSection.Div className="gap-y-4 md:gap-y-8 mx-auto">
          <CustomText.Title
            fontSize="md"
            maxWidth="md"
            className="col-span-12 text-center text-white font-light mx-auto"
          >
            Faixas de Assessoria
          </CustomText.Title>
          <CustomText.Paragraph
            fontSize="md"
            maxWidth="xlg"
            className="col-span-12 text-center text-white mx-auto"
          >
            Para um atendimento mais assertivo e alinhado com seu perfil de
            investidor, as faixas de patrimônio são fundamentais para seleção do
            seu assessor ou equipe que melhor atenderá seus objetivos.
          </CustomText.Paragraph>
          <div className="col-span-12 flex flex-wrap justify-center gap-4 md:gap-8">
            <CardLayout01.Frame className="text-center bg-neutral-800 border-azul_sereno border-y-2">
              <div>
                <CustomText.Paragraph
                  fontSize="md"
                  maxWidth="lg"
                  className="uppercase text-sky-500 tracking-widest  mb-2 md:mb-4"
                >
                  menos de
                </CustomText.Paragraph>
                <CustomText.Title
                  fontSize="sm"
                  maxWidth="sm"
                  className="text-white font-extralight"
                >
                  R$ 300 mil
                </CustomText.Title>
              </div>
              <CustomText.Paragraph
                fontSize="lg"
                maxWidth="md"
                className="text-sky-500"
              >
                Assessoria Estratégica
              </CustomText.Paragraph>

              <ul className="flex flex-col items-center">
                <li className="flex gap-1 md:gap-2 text-white items-center">
                  <BeakerIcon className="size-2 md:size-4" />
                  <CustomText.Paragraph fontSize="sm" maxWidth="sm">
                    Suporte via Mesa Estratégica
                  </CustomText.Paragraph>
                </li>
                <li className="flex gap-1 md:gap-2 text-white items-center">
                  <GlobeAltIcon className="size-2 md:size-4" />
                  <CustomText.Paragraph fontSize="sm" maxWidth="sm">
                    Plataforma pelo site ou app
                  </CustomText.Paragraph>
                </li>
                <li className="flex gap-1 md:gap-2 text-white items-center">
                  <PhoneIcon className="size-2 md:size-4" />
                  <CustomText.Paragraph fontSize="sm" maxWidth="sm">
                    Atendimento por demanda
                  </CustomText.Paragraph>
                </li>
              </ul>
            </CardLayout01.Frame>
            <CardLayout01.Frame className="text-center bg-neutral-800 border-azul_sereno border-y-2">
              <div>
                <CustomText.Paragraph
                  fontSize="md"
                  maxWidth="lg"
                  className="uppercase text-sky-500 tracking-widest  mb-2 md:mb-4"
                >
                  mais de
                </CustomText.Paragraph>
                <CustomText.Title
                  fontSize="sm"
                  maxWidth="sm"
                  className=" text-white font-extralight"
                >
                  R$ 300 mil
                </CustomText.Title>
              </div>
              <CustomText.Paragraph
                fontSize="lg"
                maxWidth="md"
                className="text-sky-500"
              >
                Assessoria Esclusiva
              </CustomText.Paragraph>

              <ul className="flex flex-col items-center">
                <li className="flex gap-1 md:gap-2 text-white items-center">
                  <CalendarDaysIcon className="size-2 md:size-4" />
                  <CustomText.Paragraph fontSize="sm" maxWidth="sm">
                    Contato mesal
                  </CustomText.Paragraph>
                </li>
                <li className="flex gap-1 md:gap-2 text-white items-center">
                  <CheckBadgeIcon className="size-2 md:size-4" />
                  <CustomText.Paragraph fontSize="sm" maxWidth="sm">
                    Revisão bimestral
                  </CustomText.Paragraph>
                </li>
                <li className="flex gap-1 md:gap-2 text-white items-center">
                  <PhoneIcon className="size-2 md:size-4" />
                  <CustomText.Paragraph fontSize="sm" maxWidth="sm">
                    Atendimento personalizado
                  </CustomText.Paragraph>
                </li>
              </ul>
            </CardLayout01.Frame>
            <CardLayout01.Frame className="text-center bg-neutral-800 border-yellow-500 border-y-2">
              <div>
                <CustomText.Paragraph
                  fontSize="md"
                  maxWidth="lg"
                  className="uppercase text-yellow-500 tracking-widest  mb-2 md:mb-4"
                >
                  mais de
                </CustomText.Paragraph>
                <CustomText.Title
                  fontSize="sm"
                  maxWidth="sm"
                  className="text-white font-extralight"
                >
                  R$ 1 milhão
                </CustomText.Title>
              </div>
              <CustomText.Paragraph
                fontSize="lg"
                maxWidth="md"
                className="text-yellow-500"
              >
                Assessoria Private
              </CustomText.Paragraph>

              <ul className="flex flex-col items-center">
                <li className="flex gap-1 md:gap-2 text-white items-center">
                  <CalendarDaysIcon className="size-2 md:size-4" />{" "}
                  <CustomText.Paragraph fontSize="sm" maxWidth="sm">
                    Contato mesal
                  </CustomText.Paragraph>
                </li>
                <li className="flex gap-1 md:gap-2 text-white items-center">
                  <CheckBadgeIcon className="size-2 md:size-4" />
                  <CustomText.Paragraph fontSize="sm" maxWidth="sm">
                    Revisão bimestral
                  </CustomText.Paragraph>
                </li>
                <li className="flex gap-1 md:gap-2 text-white items-center">
                  <StarIcon className="size-2 md:size-4" />
                  <CustomText.Paragraph fontSize="sm" maxWidth="sm">
                    Investidor qualificado
                  </CustomText.Paragraph>
                </li>
              </ul>
            </CardLayout01.Frame>
          </div>
        </DefaultPageSection.Div>
      </DefaultPageSection.Section>

      <DefaultPageSection.Section className="py-8 md:py-32">
        <DefaultPageSection.Div className="space-y-8 mx-auto">
          <div className="col-span-12 bg-gradient-to-r from-cinza_petroleo to-azul_sereno rounded-tl-[64px] rounded-br-[64px] md:rounded-tl-[128px] md:rounded-br-[128px] relative">
            <div className="flex flex-col gap-4 md:gap-8 py-8 md:py-16 px-8 md:px-32">
              <div className="flex flex-col gap-2 md:gap-4 text-cinza_ameno font-montserrat z-10">
                <CustomText.Title
                  fontSize="md"
                  maxWidth="md"
                  className="front-bold"
                >
                  Inovação e <br /> Transparência
                </CustomText.Title>
                <CustomText.Paragraph fontSize="sm" maxWidth="md">
                  Investir com confiança e clareza é nossa prioridade. Mantemos
                  total transparência e inovação, garantindo que você esteja
                  sempre atualizado e tenha acesso às melhores oportunidades.
                </CustomText.Paragraph>
              </div>
              <OpenAccountButton buttonStyle="secondary" />
            </div>
            <Image
              src={"/img/business-man-pointing.png"}
              width={540}
              height={460}
              alt="business man pointing"
              className="hidden lg:inline-block max-w-md xl:max-w-lg absolute right-16 bottom-0"
            />
          </div>
          <CustomText.Title
            fontSize="lg"
            maxWidth="lg"
            className="col-span-12 text-azul_sereno font-bold text-center place-self-center"
          >
            Invista com a Veneza Investimentos
          </CustomText.Title>
          <div className="col-span-12 flex flex-wrap gap-8 justify-center">
            {differentialCards.map((card, index) => (
              <div
                className="flex flex-col gap-1 md:gap-4 max-w-48 md:max-w-4xl rounded-2xl p-8 md:p-12 shadow-xl"
                key={index}
              >
                <div className="flex flex-col gap-2 md:gap-4">
                  <CustomText.Paragraph
                    fontSize="xlg"
                    maxWidth="md"
                    className="font-bold order-2 md:order-1"
                  >
                    {card.title}
                  </CustomText.Paragraph>

                  <Image
                    src={card.img}
                    width={32}
                    height={32}
                    alt="headPhone icon"
                  />
                </div>
                <CustomText.Paragraph fontSize="md" maxWidth="md">
                  {card.text}
                </CustomText.Paragraph>
              </div>
            ))}
          </div>
        </DefaultPageSection.Div>
      </DefaultPageSection.Section>

      <DefaultPageSection.Section className="bg-gradient-to-r to-azul_sereno from-30% from-cinza_petroleo py-4 md:py-16">
        <DefaultPageSection.Div className="gap-y-4 md:gap-y-8 mx-auto">
          <div className="col-span-12 flex flex-col gap-2 md:gap-4">
            <CustomText.Title
              fontSize="xs"
              maxWidth="xs"
              className="text-sky-500 tracking-widest font-light"
            >
              Depoimentos
            </CustomText.Title>
            <CustomText.Title
              fontSize="md"
              maxWidth="md"
              className="text-white font-bold"
            >
              Experiências dos <br /> nossos clientes
            </CustomText.Title>
          </div>
          <Carousel
            slides={[
              {
                imgUrl: "/img/AdobeStock_302640929_Preview.jpeg",
                text: "“Depois que eu conheci a Veneza, eu descobri uma forma inteligente de criar uma renda passiva. Inteligente e segura. Tenho um relacionamento muito próximo, e isso nos dá uma segurança maior para investir. Até amigos que eu tenho, hoje são clientes, porque eu indiquei essas pessoas para Veneza, e tenho total confiança.”",
                clientName: "José de Almeida",
                clientDescription: "Engenheiro e Cliente Veneza",
              },
              {
                imgUrl: "/img/AdobeStock_304068536_Preview.jpeg",
                text: "“Depois que eu conheci a Veneza, eu descobri uma forma inteligente de criar uma renda passiva. Inteligente e segura. Tenho um relacionamento muito próximo, e isso nos dá uma segurança maior para investir. Até amigos que eu tenho, hoje são clientes, porque eu indiquei essas pessoas para Veneza, e tenho total confiança.”",
                clientName: "João das Cruzes",
                clientDescription: "Médico e Cliente Veneza a 15 anos",
              },
              {
                imgUrl: "/img/pexels-edmond-dantes-4344860.jpg",
                text: "“Depois que eu conheci a Veneza, eu descobri uma forma inteligente de criar uma renda passiva. Inteligente e segura. Tenho um relacionamento muito próximo, e isso nos dá uma segurança maior para investir. Até amigos que eu tenho, hoje são clientes, porque eu indiquei essas pessoas para Blue3, e tenho total confiança.”",
                clientName: "Arthur Santos",
                clientDescription: "Empresário e Cliente Veneza",
              },
            ]}
          />
        </DefaultPageSection.Div>
      </DefaultPageSection.Section>
    </>
  );
}
