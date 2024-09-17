import Image from "next/image";
import { DefaultPageSection } from "../../components/UI/DefaultPageSection";
import { CustomText } from "../../components/UI/Texts";
import { OpenAccountButton } from "../../components/OpenAccountButton";
import { CardLayout01 } from "../../components/UI/CardLayout01";

const corporateSolutions = [
  {
    img: "/icons/money-bag.png",
    title: "Operações de Crédito",
    text: "Impulsione o crescimento da sua empresa com soluções de crédito flexíveis e adequadas às suas necessidades.",
    services: [
      "Capital de Giro",
      "FGI",
      "Crédito Rual",
      "Desconto de Recebíveis",
      "Crédito Imobiliário",
      "Linhas de Crédito em Geral",
    ],
  },
  {
    img: "/icons/exchange.png",
    title: "Câmbio Empresarial",
    text: "Maximize a eficiência das suas operações internacionais com nossas soluções de câmbio personalizadas.",
    services: ["Câmbio Pronto", "ACC", "ACE", "Operações de Trade Finance"],
  },
  {
    img: "/icons/add-to-cart.png",
    title: "Mercado de Capitais",
    text: "Acesse o mercado de capitais para captar recursos e expandir suas operações.",
    services: [
      "Debêntures",
      "CRIs",
      "Crédito Rual",
      "CRAs",
      "IPO",
      "Follow-on",
      "Fusões e Aquisições",
    ],
  },
  {
    img: "/icons/stock-market.png",
    title: "Derivativos",
    text: "Expertise em gestão de riscos financeiros e soluções de hedge personalizadas para lidar com as exposições específicas do seu negócio, protegendo seus ativos para um crescimento seguro e sustentável.",
    services: ["Moedas", "Comodities", "Juros", "Risco Sacado"],
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

const ForYourCompanyPage = () => {
  return (
    <>
      <DefaultPageSection.Section
        isFirstSection
        className="bg-for-company-background bg-cover"
      >
        <DefaultPageSection.Mask className="from-black/95 from-25% md:from-40% to-black/5">
          <DefaultPageSection.Div className="lg:ml-32 py-32 md:py-64">
            <div className="col-span-12 flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col gap-2 md:gap-4">
                <CustomText.Paragraph className="font-bold text-sky-400 tracking-widest">
                  Para sua Empresa
                </CustomText.Paragraph>
                <CustomText.Title
                  maxWidth="lg"
                  className=" text-white font-light tracking-tighter"
                >
                  A força da sua empresa está no poder das suas decisões.
                  Invista com{" "}
                  <span className="font-bold text-sky-500">Inteligência</span>,
                  cresça com{" "}
                  <span className="font-bold text-sky-500">Confiança</span>.
                </CustomText.Title>
              </div>
            </div>
          </DefaultPageSection.Div>
        </DefaultPageSection.Mask>
      </DefaultPageSection.Section>

      <DefaultPageSection.Section>
        <DefaultPageSection.Div className="mx-auto py-8 md:py-16">
          <div className="flex col-span-7 items-baseline">
            <div className="flex flex-col gap-2 md:gap-4">
              <CustomText.Paragraph className="text-sky-500 tracking-widest uppercase">
                Produtos Corporate
              </CustomText.Paragraph>
              <CustomText.Title
                maxWidth="lg"
                className="font-semibold text-azul_sereno"
              >
                Soluções completas em produtos para todos os momentos da sua
                empresa
              </CustomText.Title>
            </div>
          </div>
          <div className="col-start-0 col-span-12 flex flex-wrap gap-4 md:gap-8 justify-center mt-8 md:mt-16">
            {corporateSolutions.map((solution, index) => (
              <div
                key={`${solution.title}_${index}`}
                className="flex flex-col bg-cinza_petroleo max-w-64 md:max-w-96 py-4 px-8 rounded-lg gap-4 md:gap-8"
              >
                <div className="flex justify-between items-center">
                  <CustomText.Paragraph fontSize="xlg" className="text-white">
                    {solution.title}
                  </CustomText.Paragraph>
                  <Image
                    src={solution.img}
                    width={32}
                    height={32}
                    alt="money-bag icon"
                    className="size-4 md:size-8 mr-4 md:mr-8"
                  />
                </div>
                <CustomText.Paragraph fontSize="sm" className="text-white">
                  {solution.text}
                </CustomText.Paragraph>
                <ul className="flex flex-wrap gap-3">
                  {solution.services.map((service, index) => (
                    <li
                      key={index}
                      className="bg-azul_sereno w-fit rounded-md py-1 px-2"
                    >
                      <CustomText.Paragraph
                        fontSize="xs"
                        className="text-white font-bold"
                      >
                        {service}
                      </CustomText.Paragraph>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </DefaultPageSection.Div>
      </DefaultPageSection.Section>

      <DefaultPageSection.Section className="py-8 xl:py-32">
        <DefaultPageSection.Div className="gap-y-8 md:gap-y-16 mx-auto">
          <div className="col-span-12 bg-gradient-to-r from-cinza_petroleo to-azul_sereno rounded-tl-[64px] rounded-br-[64px] md:rounded-tl-[128px] md:rounded-br-[128px] relative">
            <div className="flex flex-col gap-4 md:gap-8 py-8 md:py-16 px-8 md:px-32">
              <div className="flex flex-col gap-2 md:gap-4 text-cinza_ameno font-montserrat z-10">
                <CustomText.Title
                  fontSize="md"
                  maxWidth="md"
                  className="front-bold"
                >
                  Planejamento e <br /> Estratégia em Ação
                </CustomText.Title>
                <CustomText.Paragraph fontSize="sm" maxWidth="md">
                  Na Veneza Investimentos, acreditamos que um bom planejamento é
                  a base de qualquer estratégia bem-sucedida. Nossos
                  especialistas trabalham lado a lado com sua equipe para criar
                  planos que não só atendem às suas necessidades, mas também
                  superam suas expectativas.
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
            Invista com a Veneza Corporate
          </CustomText.Title>
          <div className="col-span-12 flex flex-wrap gap-8 justify-center">
            {differentialCards.map((card, index) => (
              <CardLayout01.Frame key={index}>
                <Image
                  src={card.img}
                  width={32}
                  height={32}
                  alt="headPhone icon"
                />
                <CustomText.Paragraph
                  fontSize="lg"
                  maxWidth="md"
                  className="font-bold"
                >
                  {card.title}
                </CustomText.Paragraph>
                <CustomText.Paragraph fontSize="sm" maxWidth="sm">
                  {card.text}
                </CustomText.Paragraph>
              </CardLayout01.Frame>
            ))}
          </div>
        </DefaultPageSection.Div>
      </DefaultPageSection.Section>

      <DefaultPageSection.Section className="bg-new-horizon bg-cover bg-left">
        <DefaultPageSection.Mask className="from-black/95 from-40% to-black/5">
          <DefaultPageSection.Div className="lg:ml-32 py-32 md:py-64">
            <div className="col-span-12 flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col gap-2 md:gap-4">
                <CustomText.Title
                  maxWidth="lg"
                  className=" text-white font-bold"
                >
                  Desbrave Novos Horizontes com a Força da Experiência
                </CustomText.Title>
                <CustomText.Paragraph
                  fontSize="sm"
                  maxWidth="lg"
                  className="text-white"
                >
                  A cada desafio do mercado, surge uma nova oportunidade para
                  crescer. Na Veneza Investimentos, acreditamos que a
                  experiência e a inovação caminham lado a lado para gerar
                  resultados extraordinários. <br />
                  <br /> Nosso compromisso é proporcionar à sua empresa as
                  ferramentas e conhecimentos necessários para navegar com
                  segurança e eficácia. Prepare-se para desbravar novos
                  horizontes com uma estratégia que valoriza cada detalhe e
                  potencializa cada oportunidade.
                </CustomText.Paragraph>
              </div>
            </div>
          </DefaultPageSection.Div>
        </DefaultPageSection.Mask>
      </DefaultPageSection.Section>
    </>
  );
};

export default ForYourCompanyPage;
