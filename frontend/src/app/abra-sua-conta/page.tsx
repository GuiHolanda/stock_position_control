import {
  BeakerIcon,
  CalendarDaysIcon,
  CheckBadgeIcon,
  GlobeAltIcon,
  PhoneIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { OpenAccountButton } from "../../components/OpenAccountButton";
import { CardLayout01 } from "../../components/UI/CardLayout01";
import { DefaultPageSection } from "../../components/UI/DefaultPageSection";
import { FormGroup } from "../../components/UI/FormGroup";
import { InputGroup } from "../../components/UI/InputGroup";
import { Loader } from "../../components/UI/Loader";
import Logo from "../../components/UI/Logo";

const OpenYourAccountPage = () => {
  return (
    <>
      <DefaultPageSection.Section
        isFirstSection
        className="bg-open-account-texture bg-cover"
      >
        <div className="flex items-center w-full h-full bg-white bg-opacity-30">
          <DefaultPageSection.Div className="gap-8 flex-col">
            <div className="w-8 h-2 bg-white rounded-md"></div>
            <div className="flex gap-8">
              <div className="flex flex-col gap-8 max-w-lg">
                <div className="flex flex-col gap-8  font-montserrat">
                  <h2 className="font-bold text-5xl text-azul_sereno">
                    Abra sua conta de <br /> investimento
                  </h2>
                  <p className="text-lg">
                    Como um ecossistema de soluções financeiras feito por quem
                    valoriza a sua história, somos o elo entre uma assessoria de
                    investimentos especializada e o seu propósito de vida.
                  </p>
                </div>
                <Logo
                  width={192}
                  height={48}
                  className="-ms-3"
                  color="colored"
                />
              </div>
              <FormGroup.Root className="flex-wrap gap-4 justify-end">
                <div className="flex flex-wrap gap-4">
                  <FormGroup.Section className="flex-grow">
                    <FormGroup.Label htmlFor="name">
                      Qual o seu <strong>nome ?</strong>
                    </FormGroup.Label>
                    <InputGroup.Root>
                      <InputGroup.Input
                        type="text"
                        id="name"
                        placeholder="Digite seu nome completo"
                        autoComplete="name"
                        required
                      />
                    </InputGroup.Root>
                  </FormGroup.Section>
                  <FormGroup.Section>
                    <FormGroup.Label htmlFor="phone">
                      Qual o seu <strong>telefone ?</strong>
                    </FormGroup.Label>
                    <InputGroup.Root>
                      <InputGroup.Input
                        type="text"
                        id="phone"
                        placeholder="Informe seu melhor telefone"
                        required
                        autoComplete="tel"
                      />
                    </InputGroup.Root>
                  </FormGroup.Section>
                  <FormGroup.Section className="flex-grow">
                    <FormGroup.Label htmlFor="email">
                      Qual o seu <strong>e-mail ?</strong>
                    </FormGroup.Label>
                    <InputGroup.Root>
                      <InputGroup.Input
                        type="email"
                        id="email"
                        placeholder="Digite seu email"
                        autoComplete="email"
                        required
                      />
                    </InputGroup.Root>
                  </FormGroup.Section>
                </div>
                <div className="flex item gap-2 mr-auto">
                  <input
                    type="checkbox"
                    name="createAccountPrivacyPolicyCheckBox"
                  />
                  <label
                    htmlFor="createAccountPrivacyPolicyCheckBox"
                    className="text-sm"
                  >
                    Ao continuar navegando, você está ciente da nossa Política
                    de Privacidade.
                  </label>
                </div>
                <button
                  type="submit"
                  className="items-center bg-azul_sereno px-4 py-2 w-fit h-fit rounded-lg text-white hover:scale-[105%]"
                >
                  <p>Abrir minha conta</p>
                </button>
              </FormGroup.Root>
            </div>
          </DefaultPageSection.Div>
        </div>
      </DefaultPageSection.Section>

      <DefaultPageSection.Section className="py-16">
        <DefaultPageSection.Div className="flex-col items-center gap-8">
          <div className="flex flex-col gap-3 items-center">
            <div className="w-16 h-2 bg-gray-500 rounded-md"></div>
            <h4 className="font-roboto text-lg">Abra sua conta</h4>
          </div>
          <h2 className="font-montserrat text-3xl text-azul_sereno">
            Próximos passos para se tornar um cliente da Veneza Investimentos
          </h2>
          <div className="grid grid-cols-3 gap-8 divide-y">
            <CardLayout01.Frame>
              <div className="flex font-montserrat font-extrabold text-4xl text-white bg-azul_sereno border-4 border-black size-12 justify-center items-center rounded-full">
                <p>1</p>
              </div>
              <CardLayout01.Title className="text-azul_sereno">
                Passo 01
              </CardLayout01.Title>
              <CardLayout01.Text>
                Preencha o formulário para abrir a sua conta gratuita e 100%
                online.
              </CardLayout01.Text>
            </CardLayout01.Frame>
            <CardLayout01.Frame>
              <div className="flex font-montserrat font-extrabold text-4xl text-white border-4 border-black bg-azul_sereno size-12 justify-center items-center rounded-full">
                <p>2</p>
              </div>
              <CardLayout01.Title className="text-azul_sereno">
                Passo 02
              </CardLayout01.Title>
              <CardLayout01.Text>
                Nossa assessoria digital Conexão entrará em contato com você
                para dar o suporte inicial.
              </CardLayout01.Text>
            </CardLayout01.Frame>
            <CardLayout01.Frame>
              <div className="flex font-montserrat font-extrabold text-4xl text-white bg-azul_sereno size-12 border-4 border-black justify-center items-center rounded-full">
                <p>3</p>
              </div>
              <CardLayout01.Title className="text-azul_sereno">
                Passo 03
              </CardLayout01.Title>
              <CardLayout01.Text>
                Vamos começar? Nosso time de assessores estará pronto para
                tornar sua jornada financeira segura e tranquila.
              </CardLayout01.Text>
            </CardLayout01.Frame>
          </div>
        </DefaultPageSection.Div>
      </DefaultPageSection.Section>

      <DefaultPageSection.Section className="py-16 bg-black">
        <DefaultPageSection.Div className="flex-col items-center gap-8">
          <h2 className="font-montserrat text-5xl text-white font-light">
            Faixas de Assessoria
          </h2>
          <h4 className="font-roboto text-white text-center max-w-3xl">
            Para um atendimento mais assertivo e alinhado com seu perfil de
            investidor, as faixas de patrimônio são fundamentais para seleção do
            seu assessor ou equipe que melhor atenderá seus objetivos.
          </h4>
          <div className="grid grid-cols-3 gap-8 mb-8">
            <CardLayout01.Frame className="text-center bg-neutral-800 border-azul_sereno border-y-2">
              <div>
                <p className="uppercase text-azul_sereno tracking-widest  mb-4">
                  menos de
                </p>
                <p className="text-3xl text-white font-extralight">
                  R$ 300 mil
                </p>
              </div>
              <CardLayout01.Title className="text-azul_sereno text-xl font-extralight">
                Assessoria Estratégica
              </CardLayout01.Title>
              <CardLayout01.Text>
                <ul className="flex flex-col items-center">
                  <li className="flex gap-2 text-base text-white">
                    <BeakerIcon className=" size-4" /> Suporte via Mesa
                    Estratégica
                  </li>
                  <li className="flex gap-2 text-base text-white">
                    <GlobeAltIcon className=" size-4" /> Plataforma pelo site ou
                    app
                  </li>
                  <li className="flex gap-2 text-base text-white">
                    <PhoneIcon className=" size-4" /> Atendimento por demanda
                  </li>
                </ul>
              </CardLayout01.Text>
            </CardLayout01.Frame>
            <CardLayout01.Frame className="text-center bg-neutral-800 border-azul_sereno border-y-2">
              <div>
                <p className="uppercase text-azul_sereno tracking-widest  mb-4">
                  mais de
                </p>
                <p className="text-3xl text-white font-extralight">
                  R$ 300 mil
                </p>
              </div>
              <CardLayout01.Title className="text-azul_sereno text-xl font-extralight">
                Assessoria Esclusiva
              </CardLayout01.Title>
              <CardLayout01.Text>
                <ul className="flex flex-col items-center">
                  <li className="flex gap-2 text-base text-white">
                    <CalendarDaysIcon className=" size-4" /> Contato mesal
                  </li>
                  <li className="flex gap-2 text-base text-white">
                    <CheckBadgeIcon className=" size-4" /> Revisão bimestral
                  </li>
                  <li className="flex gap-2 text-base text-white">
                    <PhoneIcon className=" size-4" /> Atendimento personalizado
                  </li>
                </ul>
              </CardLayout01.Text>
            </CardLayout01.Frame>
            <CardLayout01.Frame className="text-center bg-neutral-800 border-yellow-500 border-y-2">
              <div>
                <p className="uppercase text-yellow-500 tracking-widest  mb-4">
                  mais de
                </p>
                <p className="text-3xl text-white font-extralight">
                  R$ 1 milhão
                </p>
              </div>
              <CardLayout01.Title className="text-yellow-500 text-xl font-extralight">
                Assessoria Private
              </CardLayout01.Title>
              <CardLayout01.Text>
                <ul className="flex flex-col items-center">
                  <li className="flex gap-2 text-base text-white">
                    <CalendarDaysIcon className=" size-4" /> Contato mesal
                  </li>
                  <li className="flex gap-2 text-base text-white">
                    <CheckBadgeIcon className=" size-4" /> Revisão bimestral
                  </li>
                  <li className="flex gap-2 text-base text-white">
                    <StarIcon className=" size-4" /> Investidor qualificado
                  </li>
                </ul>
              </CardLayout01.Text>
            </CardLayout01.Frame>
          </div>
        </DefaultPageSection.Div>
      </DefaultPageSection.Section>

      <DefaultPageSection.Section className="py-16">
        <DefaultPageSection.Div className="flex-col items-center gap-8">
          <div className="flex flex-col gap-3 items-center">
            <div className="w-16 h-2 bg-gray-500 rounded-md"></div>
            <h4 className="font-roboto text-lg">A Veneza Investimentos</h4>
          </div>
          <h2 className="font-montserrat text-3xl text-azul_sereno">
            Por que investir com nossa assessoria?
          </h2>
          <div className="grid grid-cols-4 gap-8 divide-y mb-8">
            <CardLayout01.Frame>
              <CardLayout01.Title className="text-azul_sereno text-center">
                <span className="text-5xl">+500</span> <br />
                milhões
              </CardLayout01.Title>
              <CardLayout01.Text>
                sob custódia em ativos no Brasil e no exterior
              </CardLayout01.Text>
            </CardLayout01.Frame>
            <CardLayout01.Frame>
              <CardLayout01.Title className="text-azul_sereno text-center">
                <span className="text-5xl">+1.000</span> <br />
                clientes
              </CardLayout01.Title>
              <CardLayout01.Text>
                sob custódia em ativos no Brasil e no exterior
              </CardLayout01.Text>
            </CardLayout01.Frame>
            <CardLayout01.Frame>
              <CardLayout01.Title className="text-azul_sereno text-center">
                <span className="text-5xl">+10</span> <br />
                profissionais
              </CardLayout01.Title>
              <CardLayout01.Text>
                sob custódia em ativos no Brasil e no exterior
              </CardLayout01.Text>
            </CardLayout01.Frame>
            <CardLayout01.Frame>
              <CardLayout01.Title className="text-azul_sereno text-center">
                <span className="text-5xl">+92</span> <br />
                NPS
              </CardLayout01.Title>
              <CardLayout01.Text>
                sob custódia em ativos no Brasil e no exterior
              </CardLayout01.Text>
            </CardLayout01.Frame>
          </div>
          <Logo width={192} height={48} />
        </DefaultPageSection.Div>
      </DefaultPageSection.Section>

      <DefaultPageSection.Section className=" bg-open-account-house bg-cover bg-center back bg-opacity-10 h-[796px]">
        <div className="flex items-center w-full h-full bg-black bg-opacity-50">
          <DefaultPageSection.Div className="gap-8 flex-col">
            <div className="flex flex-col gap-8 w-[1152px]">
              <div className="w-8 h-2 bg-white rounded-md"></div>
              <div className="flex flex-col gap-8  font-montserrat">
                <h2 className="font-bold text-5xl text-white w-full">
                  Casa para <br /> os Seus Investimetnos.
                  <br /> Assessoria para sua vida.
                </h2>
                <p className="font-roboto text-lg text-white max-w-lg">
                  Queremos estar ao seu lado na construção de uma estratégia
                  mais segura e assertiva em qualquer momento, com as melhores
                  soluções em investimentos para você e financeiras para sua
                  empresa, além de planejamento patrimonial e sucessório.
                </p>
              </div>
              <div className="flex gap-8 items-center">
                <Logo width={208} height={64} className="-ms-3" color="white" />
                <OpenAccountButton buttonStyle="secondary" />
              </div>
            </div>
          </DefaultPageSection.Div>
        </div>
      </DefaultPageSection.Section>
    </>
  );
};

export default OpenYourAccountPage;
