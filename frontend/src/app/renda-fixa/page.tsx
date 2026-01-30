"use client";

import Image from "next/image";
import rendaFixaBackground from "../../../public/img/rend-fixa.jpg";
import { TabGroup, TabList, TabPanels, TabPanel, Tab } from "@headlessui/react";
import { DefaultPageSection } from "../../components/UI/DefaultPageSection";
import { CustomText } from "../../components/UI/Texts";
import { OpenAccountButton } from "../../components/OpenAccountButton";

const differentials = [
  {
    img: "/icons/money-bag.png",
    text: "Nossa equipe conta com especialistas em renda fixa, prontos para oferecer orientação personalizada e ajudar você a escolher os produtos que melhor atendem às suas necessidades financeiras.",
  },
  {
    img: "/icons/exchange.png",
    text: "Como parte da XP Investimentos, a Veneza proporciona acesso a produtos de renda fixa que podem não estar disponíveis em outras corretoras, garantindo oportunidades diferenciadas no mercado.",
  },
  {
    img: "/icons/add-to-cart.png",
    text: "A plataforma da XP em parceria com a Veneza Investimentos permite que você gerencie seus investimentos de forma fácil e intuitiva, com relatórios para monitorar o desempenho dos seus ativos.",
  },
  {
    img: "/icons/stock-market.png",
    text: "Os produtos de renda fixa oferecidos pela Veneza apresentam taxas de retorno bem atrativas, permitindo que seu patrimônio cresça de forma consistente ao longo do tempo.",
  },
];

const categories = [
  {
    name: "Títulos Públicos",
    title: "Invista em Títulos Públicos e Conquiste seu Futuro",
    text: "Investir em títulos públicos por meio do Tesouro Direto é uma das formas mais seguras e inteligentes de proteger seu patrimônio. Com o Tesouro Selic, você garante liquidez e proteção contra a volatilidade do mercado, enquanto o Tesouro IPCA+ oferece rentabilidade real, atrelada à inflação, assegurando que seu investimento mantenha seu poder de compra. Para aqueles que buscam previsibilidade, o Tesouro Prefixado apresenta uma taxa fixa de rendimento, conhecida no momento da compra, permitindo um planejamento financeiro mais eficaz. Na Veneza Investimentos, ajudamos você a escolher a melhor opção para suas metas financeiras.",
  },
  {
    name: "CDBs",
    title: "Transforme Seu Capital com CDBs Rentáveis e Seguros",
    text: "Os CDBs são uma alternativa atraente para investidores que buscam um rendimento consistente e baixo risco. Com opções de prazos variados e rendimento atrelado ao CDI, você pode escolher o produto que melhor se adapta ao seu perfil. Além disso, a segurança oferecida pelo FGC proporciona tranquilidade ao investir. Na Veneza Investimentos, estamos prontos para ajudá-lo a encontrar o CDB ideal para suas necessidades.",
  },
  {
    name: "Debêntures",
    title: "Seu Caminho para Retornos Atrativos e Sustentáveis",
    text: "As debêntures são uma excelente oportunidade para investidores que buscam diversificação e rentabilidade. Esses títulos de dívida corporativa permitem que você financie grandes empresas, enquanto obtém retornos que costumam ser superiores aos da Renda Fixa tradicional. Na Veneza Investimentos, oferecemos acesso a uma seleção de debêntures de empresas sólidas, garantindo segurança e potencial de lucro.",
  },
  {
    name: "LCIs e LCAs",
    title:
      "Títulos de Crédito que Oferecem Segurança e Isenção de IR para Seu Portfólio",
    text: "Investir em LCIs e LCAs é uma excelente estratégia para quem busca uma combinação de segurança e rentabilidade. Esses títulos oferecem rentabilidade competitiva e a vantagem da isenção de Imposto de Renda, tornando-se opções atrativas para diversificação de portfólio. Com a Veneza Investimentos, você tem acesso a uma seleção de LCIs e LCAs que atendem suas expectativas financeiras e de segurança.",
  },
  {
    name: "CRIs e CRAs",
    title:
      "Construa Seu Futuro com Certificados de Recebíveis Imobiliários e do Agronegócio",
    text: "Os CRIs e CRAs são instrumentos de investimento que aliam segurança a retornos expressivos. Os CRIs focam em financiar o setor imobiliário, enquanto os CRAs promovem o desenvolvimento do agronegócio. Ambos oferecem isenção de Imposto de Renda, tornando-os atraentes para investidores em busca de renda fixa diferenciada. Na Veneza Investimentos, nossa abordagem personalizada permite que você encontre os títulos que melhor se adaptam ao seu perfil e objetivos financeiros, proporcionando uma diversificação eficaz para o seu portfólio.",
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
          src={rendaFixaBackground}
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
                  Renda Fixa
                </CustomText.Paragraph>
                <CustomText.Title
                  maxWidth="xlg"
                  className=" text-white font-bold"
                >
                  A Renda Fixa facilita o planejamento financeiro, permitindo a
                  definição de metas claras e o alcance de objetivos no longo
                  prazo.
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
                Soluções em Renda Fixa
              </CustomText.Paragraph>
              <CustomText.Title maxWidth="xlg" className="font-bold">
                Sua jornada para investimentos sofisticados começa aqui.
              </CustomText.Title>
              <CustomText.Paragraph maxWidth="xlg" className="text-black">
                Na Veneza Investimentos, oferecemos acesso a produtos de Renda
                Fixa que garantem segurança e rentabilidade competitiva. Com
                opções como Títulos Públicos do Tesouro Direto, como o Tesouro
                Selic e o Tesouro IPCA+, além de CDBs e Debêntures, você usufrui
                de taxas atrativas que superam a poupança. Nossos especialistas
                estão prontos para ajudá-lo a escolher os ativos que melhor se
                alinham às suas expectativas de retorno, proporcionando
                tranquilidade em seus investimentos
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
              Por que investir em{" "}
              <span className="uppercase font-light text-sky-500">
                Renda Fixa
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
            Invista em randa variável com a Veneza
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
