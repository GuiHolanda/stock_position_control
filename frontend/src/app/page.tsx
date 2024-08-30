"use client";
import Image from "next/image";
import Grifo from "../components/Grifo";
import { OpenAccountButton } from "../components/OpenAccountButton";
import { DefaultPageSection } from "../components/UI/DefaultPageSection";
import { CardLayout01 } from "../components/UI/CardLayout01";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/20/solid";
import Carousel from "../components/Carousel";

export default function Page() {
  return (
    <>
      <DefaultPageSection.Section className="bg-home-page-texture bg-cover h-[796px] rounded-br-[48px]">
        <DefaultPageSection.Div className="relative">
          <Grifo
            fill="#0d0d0d"
            height={820}
            width={996}
            opacity={"50%"}
            className="absolute -right-8 -top-4"
          />
          <div className="flex flex-col gap-8 ml-20 mt-40">
            <div className="w-8 h-2 bg-white rounded-md"></div>
            <div className="flex flex-col gap-8 text-cinza_ameno font-montserrat z-10">
              <h2 className="font-bold text-5xl font-montserrat">
                Investir é cuidar
                <br /> de você, da sua família
                <br /> e do seu patrimônio
              </h2>
              <p className="font-sans">
                Nós somos a Veneza Investimentos, um{" "}
                <b>
                  ecossistema de soluções
                  <br /> financeiras
                </b>{" "}
                que vai além de investimentos e resultados.
                <br /> Nós <b>cultivamos relações</b> e iluminamos o{" "}
                <b>futuro das pessoas.</b>
              </p>
            </div>
            <OpenAccountButton />
          </div>
        </DefaultPageSection.Div>
      </DefaultPageSection.Section>

      <DefaultPageSection.Section>
        <DefaultPageSection.Div className="items-center pt-32 pb-64 divide-x">
          <div className="flex flex-col gap-8 w-1/2 mr-8 pr-8">
            <h3 className="font-bold text-4xl font-montserrat max-w-80">
              Muito além dos números
            </h3>
            <p>
              Nosso time conecta expertise de mercado ao seu propósito de vida.
              Afinal, ser exclusivo, de verdade, é ter acesso a uma curadoria
              financeira feita pelas mãos de quem conhece e respeita a sua
              história.
              <br />
              <br />
              Leva tempo para construir uma trajetória sólida como a sua. Pos
              isso, somos uma familia que ilummina o caminha de outras famílias,
              carregando a missão de perpetuar o seu patrimônio por gerações
            </p>
          </div>
          <ul className="flex flex-col gap-8 items-end flex-grow">
            <li className="flex items-center gap-4 w-fit">
              <span className="text-6xl font-extrabold font-montserrat text-azul_sereno">
                +500
              </span>
              <p className="max-w-56">
                milhões sob custódia em ativos no Brasil e no Exterior
              </p>
            </li>
            <li className="flex items-center gap-4 w-fit">
              <span className="text-6xl font-extrabold font-montserrat text-azul_sereno">
                +1.000
              </span>
              <p className="max-w-56">
                clientes contruindo o seu futuro com a gente
              </p>
            </li>
            <li className="flex items-center gap-4 w-fit">
              <span className="text-6xl font-extrabold font-montserrat text-azul_sereno">
                +10
              </span>
              <p className="max-w-56">
                profissionais entre sócios e colaboradores
              </p>
            </li>
            <li className="flex items-center gap-4 w-fit">
              <span className="text-6xl font-extrabold font-montserrat text-azul_sereno">
                92
              </span>
              <p className="max-w-56">
                de NPS mostrando o alto nível de satisfação dos nossos clientes
              </p>
            </li>
          </ul>
        </DefaultPageSection.Div>
      </DefaultPageSection.Section>

      <DefaultPageSection.Section className="mb-16">
        <DefaultPageSection.Div className="flex flex-col gap-32">
          <div className="flex w-full bg-gradient-to-r from-cinza_petroleo to-azul_sereno rounded-tl-[128px] rounded-br-[128px] relative">
            <div className="flex flex-col gap-8 py-16 px-32">
              <div className="flex flex-col gap-4 text-cinza_ameno font-montserrat z-10 max-w-lg">
                <h2 className="font-bold text-5xl font-montserrat">
                  Inovação e <br />
                  referência
                </h2>
                <p className="font-sans">
                  Por meio de um atendimento completo, com profissionais
                  especializados, a Veneza Investimentos busca apresentar
                  soluções inovadoras e verdadeiramente úteis para escalar seus
                  investimentos ou os negócios da sua empresa.
                </p>
              </div>
              <OpenAccountButton className="bg-black" />
            </div>
            <Image
              src={"/img/business-man-pointing.png"}
              width={540}
              height={460}
              alt="business man pointing"
              className="absolute right-16 bottom-0"
            />
          </div>
          <h2 className="font-bold text-4xl font-montserrat text-azul_sereno text-center">
            Invista com a Veneza Investimentos
          </h2>
          <div className="flex flex-wrap gap-8 justify-center">
            <CardLayout01.Frame>
              <Image
                src={"/icons/headPhone.png"}
                width={32}
                height={32}
                alt="headPhone icon"
              />
              <CardLayout01.Title>Atendimento Personalizado</CardLayout01.Title>
              <CardLayout01.Text>
                Disponibilidade de uma equipe de assessores para cada ativo que
                você deseja aportar e um olhar cuidadoso para a sua carteira,
                sempre a deixando alinhada com os seus objetivos.
              </CardLayout01.Text>
            </CardLayout01.Frame>
            <CardLayout01.Frame>
              <Image
                src={"/icons/chatBox.png"}
                width={32}
                height={32}
                alt="headPhone icon"
              />
              <CardLayout01.Title>
                Acompanhamento especializado
              </CardLayout01.Title>
              <CardLayout01.Text>
                Time especializado disponível para acompanhar a jornada de
                escala do seu negócio e direcionar a melhor estratégia de acordo
                com o que você busca, deseja e precisa.
              </CardLayout01.Text>
            </CardLayout01.Frame>
            <CardLayout01.Frame>
              <Image
                src={"/icons/ideaLamp.png"}
                width={32}
                height={32}
                alt="headPhone icon"
              />
              <CardLayout01.Title>Soluções inovadoras</CardLayout01.Title>
              <CardLayout01.Text>
                Sugestões sempre de acordo com seus interesses e levantamento
                constante das melhores oportunidades de ativos no mercado com
                base nas estratégias definidas para você.
              </CardLayout01.Text>
            </CardLayout01.Frame>
            <CardLayout01.Frame>
              <Image
                src={"/icons/chessKnight.png"}
                width={32}
                height={32}
                alt="headPhone icon"
              />
              <CardLayout01.Title>
                Estratégias e oportunidades
              </CardLayout01.Title>
              <CardLayout01.Text>
                Monitoramos os seus negócios frequentemente para sugerir
                possibilidades que façam sentido para aquilo que o seu negócio
                precisa para alcançar o próximo patamar.
              </CardLayout01.Text>
            </CardLayout01.Frame>
          </div>
        </DefaultPageSection.Div>
      </DefaultPageSection.Section>

      <DefaultPageSection.Section className="bg-gradient-to-r from-azul_sereno from-30% to-cinza_petroleo py-32">
        <DefaultPageSection.Div>
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4">
              <p className="font-bold text-xl font-montserrat text-yellow-200">
                Depoimentos
              </p>
              <h2 className="font-bold text-5xl font-montserrat text-white">
                Experiências dos <br /> nossos clientes
              </h2>
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
          </div>
        </DefaultPageSection.Div>
      </DefaultPageSection.Section>
    </>
  );
}
