import Image from "next/image";
import { CustomHeader } from "../components/CustomHeader";
import grifo from "../../public/grifo_azul.svg";
import { CustomFooter } from "../components/CustomFooter";

export default async function Page() {
  return (
    <>
      <CustomHeader />
      <section className="bg-cinza_petroleo h-4/5 mt-[98px]">
        <div className="flex max-w-6xl h-full mx-auto">
          <div className="flex flex-col gap-4 text-cinza_ameno font-montserrat mt-40">
            <h2 className="font-bold text-5xl font-montserrat">
              Investir é <span className="text-azul_sereno">cuidar</span>
              <br /> de você, da sua família
              <br /> e do seu{" "}
              <span className="text-azul_sereno text">patrimônio</span>
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
        </div>
      </section>
      <section className="bg-cinza_petroleo h-4/5 mt-[98px]">
        <div className="flex max-w-6xl h-full mx-auto">
          <div className="flex flex-col gap-4 text-cinza_ameno font-montserrat mt-40">
            <h2 className="font-bold text-5xl font-montserrat">
              Investir é <span className="text-azul_sereno">cuidar</span>
              <br /> de você, da sua família
              <br /> e do seu{" "}
              <span className="text-azul_sereno text">patrimônio</span>
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
        </div>
      </section>
      <section className="bg-cinza_petroleo h-4/5 mt-[98px]">
        <div className="flex max-w-6xl h-full mx-auto">
          <div className="flex flex-col gap-4 text-cinza_ameno font-montserrat mt-40">
            <h2 className="font-bold text-5xl font-montserrat">
              Investir é <span className="text-azul_sereno">cuidar</span>
              <br /> de você, da sua família
              <br /> e do seu{" "}
              <span className="text-azul_sereno text">patrimônio</span>
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
        </div>
      </section>
      <CustomFooter />
    </>
  );
}
