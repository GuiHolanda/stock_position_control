import { TabGroup, TabList, TabPanels, TabPanel, Tab } from "@headlessui/react";
import { DefaultPageSection } from "../../components/UI/DefaultPageSection";
import { CustomText } from "../../components/UI/Texts";
import Image from "next/image";

const differentials = [
  {
    img: "/icons/money-bag.png",
    text: "Impulsione o crescimento da sua empresa com soluções de crédito flexíveis e adequadas às suas necessidades.",
  },
  {
    img: "/icons/exchange.png",
    text: "Maximize a eficiência das suas operações internacionais com nossas soluções de câmbio personalizadas.",
  },
  {
    img: "/icons/add-to-cart.png",
    text: "Acesse o mercado de capitais para captar recursos e expandir suas operações.",
  },
  {
    img: "/icons/stock-market.png",
    text: "Expertise em gestão de riscos financeiros e soluções de hedge personalizadas para lidar com as exposições específicas do seu negócio, protegendo seus ativos para um crescimento seguro e sustentável.",
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
    text: "Os ETFs são uma solução eficiente para diversificar seu portfólio e acessar uma ampla gama de ativos com baixo custo. Na Veneza Investimentos, oferecemos consultoria especializada para selecionar os ETFs mais adequados ao seu perfil e estratégia de investimento. Amplie suas oportunidades de crescimento e aproveite a flexibilidade dos ETFs para otimizar seu retorno.",
  },
  {
    name: "Operações Estruturadas",
    title:
      "Maximize suas estratégias com a precisão das operações estruturadas.",
    text: "As operações estruturadas com opções oferecem uma maneira sofisticada de gerenciar riscos e potencializar ganhos. Na Veneza Investimentos, nossa equipe de especialistas desenvolve estratégias personalizadas que combinam diferentes opções para criar soluções que atendem às suas necessidades específicas. Explore novas formas de otimizar seu portfólio e proteger seus investimentos com operações estruturadas bem elaboradas.",
  },
];

const VariableIncomePage = () => {
  return (
    <>
      <DefaultPageSection.Section
        isFirstSection
        className="bg-rend-variavel bg-cover"
      >
        <DefaultPageSection.Mask className="from-black/95 from-25% md:from-40% to-black/5">
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
        <DefaultPageSection.Div className="mx-auto py-8 md:py-16">
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
                opções e futuros para ajudar você a diversificar e crescer seu
                portfólio. Com análises detalhadas e estratégias personalizadas,
                sua jornada de investimento será guiada com segurança e
                confiança.
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

      <DefaultPageSection.Section className="bg-gradient-to-r from-azul_sereno  to-cinza_petroleo">
        <DefaultPageSection.Div className="mx-auto py-8 md:py-16">
          <div className="col-span-12 flex flex-col gap-8 md:gap-16">
            <CustomText.Title maxWidth="lg" className="text-white font-bold">
              Por que investir em Renda variável com a Veneza ?
            </CustomText.Title>
            <ul className="flex flex-col gap-4 md:gap-8">
              {differentials.map((differential, index) => (
                <li key={index} className="flex gap-2 md:gap-4 items-center">
                  <Image
                    width={32}
                    height={32}
                    alt="icon"
                    src={differential.img}
                    className="size-6"
                  />
                  <CustomText.Paragraph className="text-white">
                    {differential.text}
                  </CustomText.Paragraph>
                </li>
              ))}
            </ul>
          </div>
        </DefaultPageSection.Div>
      </DefaultPageSection.Section>
    </>
  );
};

export default VariableIncomePage;
