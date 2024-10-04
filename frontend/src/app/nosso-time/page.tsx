import { DefaultPageSection } from "../../components/UI/DefaultPageSection";
import { CustomText } from "../../components/UI/Texts";

const assessores = [
  { cod: "71070", name: "André Moz" },
  { cod: "24119", name: "Emanuel Diniz" },
  { cod: "21729", name: "Francisco Barbosa" },
  { cod: "22740", name: "Guilherme Holanda" },
  { cod: "20323", name: "Leonardo Rodrigues" },
  { cod: "50486", name: "Lucas Souza" },
  { cod: "21638", name: "Luiz de Andrade" },
  { cod: "73232", name: "Makarenna Portugal" },
  { cod: "22919", name: "Marcus Lopes" },
  { cod: "23768", name: "Nicole Magalhães" },
  { cod: "69180", name: "Paulo Lessa" },
  { cod: "42291", name: "Renata de Albuquerque" },
  { cod: "23637", name: "Rômulo Halliday" },
  { cod: "47798", name: "Thiago Miotto" },
  { cod: "44112", name: "Victor Lúcio" },
  { cod: "22828", name: "Yuri Fernandes" },
];

export default function Page() {
  return (
    <>
      <DefaultPageSection.Section className="bg-gradient-to-r from-cinza_petroleo from-30% to-azul_sereno py-8 md:py-16">
        <DefaultPageSection.Div>
          <div className="col-span-12 flex flex-col gap-2 md:gap-4 text-white md:ml-32">
            <CustomText.Title className="font-bold" maxWidth="xlg">
              Uma Equipe Dedicada ao Sucesso dos Seus Investimentos
            </CustomText.Title>
            <CustomText.Paragraph maxWidth="lg">
              Conheça os especialistas da Veneza Investimentos, prontos para
              orientar você nas melhores oportunidades e estratégias do mercado.
            </CustomText.Paragraph>
          </div>
        </DefaultPageSection.Div>
      </DefaultPageSection.Section>

      <DefaultPageSection.Section className="py-8 md:py-16">
        <DefaultPageSection.Div className="md:ml-32">
          <table className="col-span-12 min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800 font-bold">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm text-left text-gray-500 dark:text-gray-400"
                >
                  Código
                </th>

                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm text-left text-gray-500 dark:text-gray-400"
                >
                  Assessor
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900 striped">
              {assessores.map((assessor, index) => (
                <tr key={index}>
                  <td className="px-4 py-3.5 text-sm font-medium whitespace-nowrap">
                    <div>
                      <h2 className="font-medium text-gray-800 dark:text-white ">
                        {assessor.cod}
                      </h2>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-sm font-medium whitespace-nowrap">
                    <div className="inline text-sm font-normal">
                      {assessor.name}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </DefaultPageSection.Div>
      </DefaultPageSection.Section>
    </>
  );
}
