import { OpenAccountButton } from "../../components/OpenAccountButton";
import { DefaultPageSection } from "../../components/UI/DefaultPageSection";

const ForYourCompanyPage = () => {
  return (
    <>
      <DefaultPageSection.Section
        isFirstSection
        className="bg-for-company-background bg-cover"
      >
        <div className="size-full bg-gradient-to-r from-black/85 from-30% to-black/5">
          <div className="max-w-6xl mx-auto grid grid-cols-12 h-full items-center">
            <div className="flex flex-col col-span-6 gap-8">
              <div className="flex flex-col gap-4">
                <p className="text-xl font-montserrat text-yellow-200">
                  Para sua Empresa
                </p>
                <h2 className="font-bold text-4xl font-montserrat text-white">
                  O suporte que a sua organização precisa para crescer cada vez
                  mais
                </h2>
              </div>
              <div>
                <p className="text-lg font-montserrat text-yellow-200 font-bold">
                  De capital de giro ao IPO
                </p>
                <p className="font-montserrat text-white">
                  Conte com um time de assessores, bankers e analistas
                  especializados para te ajudar a escalar o seu negócio e
                  levá-lo para o próximo patamar.
                </p>
              </div>
              <OpenAccountButton />
            </div>
          </div>
        </div>
      </DefaultPageSection.Section>
    </>
  );
};

export default ForYourCompanyPage;
