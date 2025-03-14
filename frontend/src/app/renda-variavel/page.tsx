import Image from "next/image";
import RvBackground from "../../../public/img/rend-variavel-min-2028.jpg";
import { TabGroup, TabList, TabPanels, TabPanel, Tab } from "@headlessui/react";
import { DefaultPageSection } from "../../components/UI/DefaultPageSection";
import { CustomText } from "../../components/UI/Texts";
import { OpenAccountButton } from "../../components/OpenAccountButton";

const differentials = [
  {
    img: "/icons/money-bag.png",
    text: "Na Veneza Investimentos, utilizamos abordagens proativas para minimizar a exposição a volatilidades e assegurar a estabilidade do seu portfólio de Renda Variável.",
  },
  {
    img: "/icons/exchange.png",
    text: "Aqui você pode confiar em uma abordagem clara e ética, garantindo que suas decisões de investimento sejam sempre bem fundamentadas.",
  },
  {
    img: "/icons/add-to-cart.png",
    text: "Com a Veneza, você tem acesso às mais recentes inovações no mercado, aprimorando a gestão e o desempenho do seu portfólio.",
  },
  {
    img: "/icons/stock-market.png",
    text: "nossos especialistas em Renda Variável possuem o conhecimento e a expertise necessários para oferecer estratégias de investimento personalizadas e eficazes.",
  },
];

const categories = [
  {
    name: "Mercado Futuro",
    title:
      "Antecipe-se ao futuro e capitalize oportunidades com o mercado futuro",
    text: "O mercado futuro oferece oportunidades únicas para investidores que buscam se antecipar às tendências e proteger seus investimentos contra volatilidades. Na Veneza Investimentos, oferecemos estratégias avançadas para negociar contratos futuros, ajudando você a gerenciar riscos e aproveitar oportunidades de mercado. Entre no mercado futuro com confiança e amplie suas possibilidades de crescimento.",
  },
  {
    name: "Carteira de Ações",
    title: "Invista no futuro com a confiança de uma carteira bem estruturada.",
    text: "Uma carteira de ações bem planejada é a chave para o crescimento e a diversificação do seu portfólio. Na Veneza Investimentos, criamos estratégias personalizadas para maximizar seus retornos e minimizar riscos. Com nossa expertise, você terá acesso às melhores oportunidades no mercado de ações, alinhadas aos seus objetivos e perfil de investidor.",
  },
  {
    name: "ETFs",
    title: "Diversifique com inteligência e alcance seus objetivos com ETFs.",
    text: "Os ETFs são uma solução eficiente para diversificar seu portfólio e acessar uma ampla gama de ativos com baixo custo. Na Veneza Investimentos, oferecemos suporte especializado para selecionar os ETFs mais adequados ao seu perfil e estratégia de investimento. Amplie suas oportunidades de crescimento e aproveite a flexibilidade dos ETFs para otimizar seu retorno.",
  },
  {
    name: "Operações Estruturadas",
    title:
      "Maximize suas estratégias com a precisão das operações estruturadas.",
    text: "As operações estruturadas com opções oferecem uma maneira sofisticada de gerenciar riscos e potencializar ganhos. Na Veneza Investimentos, nossa equipe de especialistas desenvolve estratégias personalizadas que combinam diferentes opções para criar soluções que atendem às suas necessidades específicas. Explore novas formas de otimizar seu portfólio e proteger seus investimentos com operações estruturadas bem elaboradas.",
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
          src={RvBackground}
          fill
          alt="Renda variável background"
          style={{
            objectFit: "cover", // cover, contain, none
          }}
          priority
        />
        <DefaultPageSection.Mask className="absolute from-black/95 from-25% md:from-40% to-black/5">
          <DefaultPageSection.Div className="lg:ml-32 py-32 md:py-64">
            <div className="col-span-12 flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col gap-2 md:gap-4">
                <CustomText.Paragraph className="font-light text-sky-500 tracking-widest uppercase">
                  Renda Variável
                </CustomText.Paragraph>
                <CustomText.Title
                  maxWidth="lg"
                  className=" text-white font-bold"
                >
                  Transforme seu potencial de investimento com a expertise em
                  Renda Variável da Veneza Investimentos.
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
                Soluções em Renda Variável
              </CustomText.Paragraph>
              <CustomText.Title maxWidth="xlg" className="font-bold">
                Sua jornada para investimentos sofisticados começa aqui.
              </CustomText.Title>
              <CustomText.Paragraph maxWidth="lg" className="text-black">
                Na Veneza Investimentos, oferecemos expertise em ações, ETFs,
                opções e mercado futuro para ajudar você a diversificar e
                crescer seu portfólio. Com estratégias personalizadas, sua
                jornada de investimento será guiada com segurança e confiança.
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
                Renda variável
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
