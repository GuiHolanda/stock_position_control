"use client";
import Image from "next/image";
import openAccountBackground from "../../../public/img/open-account-texture-1024.png";
import { OpenAccountButton } from "../../components/OpenAccountButton";
import { CardLayout01 } from "../../components/UI/CardLayout01";
import { DefaultPageSection } from "../../components/UI/DefaultPageSection";
import Logo from "../../components/UI/Logo";
import { CustomText } from "../../components/UI/Texts";
import OpenAccountForm from "../../components/OpenAccountForm";

const stepsCard = [
  {
    title: "Passo 01",
    text: "Preencha o formulário para abrir a sua conta gratuita e 100% online.",
  },
  {
    title: "Passo 02",
    text: "Nossa assessoria digital Conexão entrará em contato com você para dar o suporte inicial.",
  },
  {
    title: "Passo 03",
    text: "Vamos começar? Nosso time de assessores estará pronto para tornar sua jornada financeira segura e tranquila.",
  },
];

const bigNumbers = [
  {
    title: "+500 milhões",
    text: "sob custódia em ativos no Brasil e no Exterior",
  },
  {
    title: "+1.000 clientes",
    text: "contruindo o seu futuro com a gente",
  },
  {
    title: "+10 profissionais",
    text: "entre sócios e colaboradores",
  },
  {
    title: "92 NPS",
    text: "mostrando o alto nível de satisfação dos nossos clientes",
  },
];

const OpenYourAccountPage = () => {
  return (
    <>
      <DefaultPageSection.Section isFirstSection className="relative">
        <Image
          src={openAccountBackground}
          fill
          alt="home page background"
          style={{
            objectFit: "cover", // cover, contain, none
          }}
          priority
        />
        <DefaultPageSection.Mask className="absolute bg-white bg-opacity-30 py-8 md:py-16">
          <DefaultPageSection.Div className="gap-y-4 md:gap-x-8 mx-auto">
            <div className="col-span-12 lg:col-span-6 flex flex-col md:gap-8 my-auto">
              <div className="flex flex-col gap-4 md:gap-8  font-montserrat">
                <CustomText.Title
                  fontSize="lg"
                  maxWidth="md"
                  className="text-azul_sereno font-bold"
                >
                  Abra sua conta de investimento
                </CustomText.Title>
                <CustomText.Paragraph fontSize="md" maxWidth="lg">
                  Como um ecossistema de soluções financeiras feito por quem
                  valoriza a sua história, somos o elo entre uma assessoria de
                  investimentos especializada e o seu propósito de vida.
                </CustomText.Paragraph>
              </div>
              <Logo
                className="hidden lg:inline-block h-6 sm:h-12"
                color="colored"
              />
            </div>
            <OpenAccountForm />
          </DefaultPageSection.Div>
        </DefaultPageSection.Mask>
      </DefaultPageSection.Section>

      <DefaultPageSection.Section className="py-16">
        <DefaultPageSection.Div className="gap-y-4 md:gap-y-8 mx-auto">
          <div className="col-span-12 flex flex-col gap-1 md:gap-3 items-center">
            <div className="w-8 h-1 md:w-16 md:h-2 bg-gray-500 rounded-md"></div>
            <CustomText.Paragraph>Abra sua conta</CustomText.Paragraph>
          </div>
          <CustomText.Title
            maxWidth="xlg"
            className="col-span-12 text-azul_sereno text-center mx-auto"
          >
            Próximos passos para se tornar um cliente da Veneza Investimentos
          </CustomText.Title>
          <div className="col-span-12 flex flex-wrap gap-4 md:gap-8 justify-center">
            {stepsCard.map((card, index) => (
              <CardLayout01.Frame key={index}>
                <CustomText.Paragraph
                  fontSize="lg"
                  className="text-azul_sereno font-bold"
                >
                  {card.title}
                </CustomText.Paragraph>
                <CustomText.Paragraph maxWidth="md" fontSize="sm">
                  {card.text}
                </CustomText.Paragraph>
              </CardLayout01.Frame>
            ))}
          </div>
        </DefaultPageSection.Div>
      </DefaultPageSection.Section>

      <DefaultPageSection.Section className="py-8 md:py-16">
        <DefaultPageSection.Div className="gap-y-4 md:gap-y-8 mx-auto">
          <div className="col-span-12 flex flex-col gap-1 md:gap-3 items-center mx-auto">
            <div className="w-8 h-1 md:w-16 md:h-2 bg-gray-500 rounded-md"></div>
            <CustomText.Paragraph fontSize="lg">
              A Veneza Investimentos
            </CustomText.Paragraph>
          </div>
          <CustomText.Title
            maxWidth="xlg"
            className="col-span-12 text-azul_sereno text-center mx-auto"
          >
            Por que investir com nossa assessoria?
          </CustomText.Title>
          <div className="col-span-12 flex flex-wrap justify-center gap-4 md:gap-8 divide-y mb-8">
            {bigNumbers.map((card, index) => (
              <CardLayout01.Frame key={index}>
                <CustomText.Title
                  fontSize="sm"
                  className="text-azul_sereno text-center"
                >
                  {card.title.split(" ")[0]} <br /> {card.title.split(" ")[1]}
                </CustomText.Title>
                <CardLayout01.Text className="text-center">
                  {card.text}
                </CardLayout01.Text>
              </CardLayout01.Frame>
            ))}
          </div>
        </DefaultPageSection.Div>
      </DefaultPageSection.Section>

      <DefaultPageSection.Section className=" bg-open-account-house bg-cover bg-center bg-opacity-10 md:h-[796px]">
        <DefaultPageSection.Mask className="from-black/85 to-black/5 py-8 md:py-16">
          <DefaultPageSection.Div className="lg:ml-32">
            <div className="col-span-12 flex flex-col gap-4 md:gap-8">
              <div className="w-8 h-2 bg-white rounded-md"></div>
              <div className="flex flex-col gap-4 md:gap-8  font-montserrat">
                <CustomText.Title
                  fontSize="lg"
                  maxWidth="xlg"
                  className="font-bold text-white"
                >
                  Casa para os Seus Investimetnos. <br />
                  Assessoria para sua vida.
                </CustomText.Title>
                <CustomText.Paragraph maxWidth="lg" className="text-white">
                  Queremos estar ao seu lado na construção de uma estratégia
                  mais segura e assertiva em qualquer momento, com as melhores
                  soluções em investimentos para você e financeiras para sua
                  empresa, além de planejamento patrimonial e sucessório.
                </CustomText.Paragraph>
              </div>
              <div className="flex gap-4 md:gap-8 items-center">
                <Logo className="h-6 sm:h-12" color="white" />
                <OpenAccountButton buttonStyle="secondary" />
              </div>
            </div>
          </DefaultPageSection.Div>
        </DefaultPageSection.Mask>
      </DefaultPageSection.Section>
    </>
  );
};

export default OpenYourAccountPage;
