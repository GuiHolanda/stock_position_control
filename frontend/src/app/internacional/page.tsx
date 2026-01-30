"use client";

import Image from "next/image";
import internationalBackground from "../../../public/img/international.jpg";
import { TabGroup, TabList, TabPanels, TabPanel, Tab } from "@headlessui/react";
import { DefaultPageSection } from "../../components/UI/DefaultPageSection";
import { CustomText } from "../../components/UI/Texts";
import { OpenAccountButton } from "../../components/OpenAccountButton";
import { CardLayout01 } from "../../components/UI/CardLayout01";

const differentials = [
  {
    img: "/icons/money-bag.png",
    text: "A Veneza Investimentos oferece acesso a uma ampla gama de mercados internacionais, permitindo que você invista em ações, fundos e títulos de empresas líderes em todo o mundo.",
  },
  {
    img: "/icons/exchange.png",
    text: "A Veneza Investimentos, junto com a XP, proporciona acesso a gestões especializadas e fundos com estratégias globais, garantindo uma abordagem profissional e informada.",
  },
  {
    img: "/icons/add-to-cart.png",
    text: "Através da Veneza, você pode explorar investimentos em criptomoedas e outros ativos inovadores, mantendo-se à frente nas tendências do mercado financeiro.",
  },
  {
    img: "/icons/stock-market.png",
    text: "A Veneza Investimentos e a XP são reconhecidas pela sua transparência e credibilidade no mercado financeiro, proporcionando confiança e segurança em suas transações.",
  },
];

const categories = [
  {
    name: "Equities",
    title: "Diversificação Global com Ações Internacionais",
    text: "O mercado global oferece diversas oportunidades de crescimento. Ao investir em equities internacionais, você diversifica sua carteira e se expõe ao potencial de valorização de empresas líderes em tecnologia, finanças, saúde e outros setores de alta performance. Na Veneza Investimentos, nós guiamos seu caminho no mundo dos investimentos globais.",
  },
  {
    name: "Bonds",
    title: "Investimento Inteligente com Bonds Internacionais",
    text: "Os bonds são uma excelente escolha para quem busca segurança e proteção do patrimônio. Com eles, você investe em dívidas de governos e empresas sólidas, garantindo previsibilidade e rentabilidade. A Veneza Investimentos oferece acesso aos principais títulos internacionais, ajudando você a construir uma estratégia sólida e de baixo risco.",
  },
  {
    name: "Treasury Securities",
    title: "Segurança e Solidez com Títulos do Tesouro Global",
    text: "Os Treasury Securities são uma escolha inteligente para quem valoriza estabilidade financeira. Ao investir nesses títulos públicos, você se beneficia da confiança oferecida por governos sólidos, com risco reduzido e ganhos previsíveis. A Veneza Investimentos oferece as melhores opções no mercado global para garantir a tranquilidade de seus investimentos.",
  },
  {
    name: "Mutual Funds",
    title: "Investimento Coletivo com Expertise",
    text: "Os Mutual Funds permitem que você invista em uma vasta gama de ativos internacionais com facilidade. Esses fundos oferecem exposição a diferentes mercados e setores, sem que você precise gerenciar cada ativo individualmente. A Veneza Investimentos auxilia na escolha dos melhores fundos mútuos globais, garantindo que sua carteira esteja equilibrada e diversificada.",
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

const VariableIncomePage = () => {
  return (
    <>
      <DefaultPageSection.Section isFirstSection className="relative">
        <Image
          src={internationalBackground}
          fill
          alt="home page background"
          style={{
            objectFit: "cover", // cover, contain, none
          }}
          priority
        />
        <DefaultPageSection.Mask className="absolute from-black/65 from-25% md:from-40% to-black/5">
          <DefaultPageSection.Div className="lg:ml-32 py-32 md:py-64">
            <div className="col-span-12 flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col gap-2 md:gap-4">
                <CustomText.Paragraph className="font-light text-sky-500 tracking-widest uppercase">
                  Investimentos Internacionais
                </CustomText.Paragraph>
                <CustomText.Title
                  maxWidth="xlg"
                  className=" text-white font-bold"
                >
                  Investa em títulos globais que oferecem segurança e
                  rentabilidade em moedas fortes, Protegendo seu patrimônio
                  contra a volatilidade local!
                </CustomText.Title>
              </div>
            </div>
          </DefaultPageSection.Div>
        </DefaultPageSection.Mask>
      </DefaultPageSection.Section>

      <DefaultPageSection.Section>
        <DefaultPageSection.Div className="mx-auto py-8 md:py-32">
          <div className="flex col-span-12 items-baseline">
            <div className="flex flex-col gap-2 md:gap-4">
              <CustomText.Paragraph className="text-sky-500 tracking-widest uppercase">
                Soluções de Investimentos Globais
              </CustomText.Paragraph>
              <CustomText.Title maxWidth="xlg" className="font-bold">
                Explore Novos Mercados com Investimentos Internacionais
              </CustomText.Title>
              <CustomText.Paragraph maxWidth="xlg" className="text-black">
                Amplie seus horizontes financeiros investindo em mercados
                globais! Com a Veneza Investimentos, você tem acesso a uma
                variedade de opções internacionais que diversificam seu
                portfólio e potencializam seus ganhos. Descubra oportunidades
                que vão além das fronteiras
              </CustomText.Paragraph>
            </div>
          </div>
          <div className="col-span-12 mt-8 md:mt-16">
            <TabGroup className="flex md:flex-col border-l md:border-l-0 border-sky-200 items-center md:items-start">
              <TabList className="flex flex-col md:flex-row">
                {categories.map(({ name }) => (
                  <Tab
                    key={name}
                    className="px-2 md:px-4 py-2 md:data-[selected]:border-b-0 data-[selected]:border-l data-[selected]:font-bold md:data-[selected]:border md:border-b border-sky-600 md:rounded-t-md  focus:outline-none hover:border-sky-800"
                  >
                    <CustomText.Paragraph className="text-azul_sereno tracking-widest hover:font-bold">
                      {name}
                    </CustomText.Paragraph>
                  </Tab>
                ))}
              </TabList>
              <TabPanels className="mt-3 md:border-l border-sky-600">
                {categories.map(({ name, title, text }) => (
                  <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                    <div className="flex flex-col gap-4 md:gap-8 px-8 py-4 bg-white w-fit rounded-lg shadow-md ">
                      <CustomText.Paragraph fontSize="lg" maxWidth="md">
                        {title}
                      </CustomText.Paragraph>
                      <CustomText.Paragraph fontSize="sm" maxWidth="xlg">
                        {text}
                      </CustomText.Paragraph>
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </div>
        </DefaultPageSection.Div>
      </DefaultPageSection.Section>

      <DefaultPageSection.Section className="bg-gradient-to-r from-azul_sereno  to-cinza_petroleo relative">
        <DefaultPageSection.Div className="mx-auto gap-y-8 md:gap-y-0 md:gap-x-16 py-8 md:py-32">
          <div className="bg-cinza_petroleo col-span-12 h-80 md:h-auto md:col-span-5 rounded-tl-[128px] rounded-br-[128px] bg-clip-border relative">
            <Image
              src={"/img/business-man-01.png"}
              alt="business-man-01.png"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="col-span-12 md:col-span-7 flex flex-col gap-4 md:gap-8 mx-auto">
            <CustomText.Title maxWidth="lg" className="text-white font-bold">
              Por que investir em ativos{" "}
              <span className="uppercase font-light text-sky-500">
                internacionais
              </span>{" "}
              com a Veneza ?
            </CustomText.Title>
            <ul className="flex flex-col gap-4 md:gap-8">
              {differentials.map((differential, index) => (
                <li key={index} className="flex gap-2 md:gap-4 items-center">
                  <div className="bg-white p-2 md:p-4 rounded-full">
                    <CustomText.Paragraph
                      fontSize="xlg"
                      className="text-azul_sereno font-bold"
                    >
                      {index + 1}
                    </CustomText.Paragraph>
                  </div>
                  <CustomText.Paragraph maxWidth="xlg" className="text-white">
                    {differential.text}
                  </CustomText.Paragraph>
                </li>
              ))}
            </ul>
          </div>
        </DefaultPageSection.Div>
      </DefaultPageSection.Section>

      <DefaultPageSection.Section className="py-8 md:py-32">
        <DefaultPageSection.Div className="gap-y-8 md:gap-y-16 mx-auto">
          <div className="col-span-12 bg-gradient-to-r from-cinza_petroleo to-azul_sereno rounded-tl-[64px] rounded-br-[64px] md:rounded-tl-[128px] md:rounded-br-[128px] relative">
            <div className="flex flex-col gap-4 md:gap-8 py-8 md:py-16 px-8 md:px-32">
              <div className="flex flex-col gap-2 md:gap-4 text-cinza_ameno font-montserrat z-10">
                <CustomText.Title
                  fontSize="md"
                  maxWidth="md"
                  className="front-bold"
                >
                  Abordagem Orientada para Resultados
                </CustomText.Title>
                <CustomText.Paragraph fontSize="sm" maxWidth="md">
                  Na Veneza Investimentos, nosso foco é entregar resultados
                  concretos. Com estratégias baseadas em objetivos claros e
                  métricas de desempenho rigorosas, trabalhamos para maximizar
                  seus retornos e atingir suas metas financeiras.
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
            Invista em alternativas globais com a Veneza
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
    </>
  );
};

export default VariableIncomePage;
