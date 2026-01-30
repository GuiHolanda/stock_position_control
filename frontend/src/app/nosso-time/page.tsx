import { DefaultPageSection } from "../../components/UI/DefaultPageSection";
import { CustomText } from "../../components/UI/Texts";

const assessores = [
  { cod: "24119", name: "Emanuel Diniz", gender: "male", img: "24119.jpeg" },
  { cod: "21729", name: "Francisco Barbosa", gender: "male", img: "21729.jpeg" },
  { cod: "22740", name: "Guilherme Holanda", gender: "male", img: "22740.jpeg" },
  { cod: "20323", name: "Leonardo Rodrigues", gender: "male", img: "20323.jpeg" },
  { cod: "50486", name: "Lucas Souza", gender: "male" },
  { cod: "21638", name: "Luiz de Andrade", gender: "male", img: "21638.jpeg" },
  { cod: "73232", name: "Makarenna Portugal", gender: "female", img: "73232.jpeg" },
  { cod: "22919", name: "Marcus Lopes", gender: "male", img: "22919.jpeg" },
  { cod: "23768", name: "Nicole Magalhães", gender: "female", img: "23768.jpeg" },
  { cod: "69180", name: "Paulo Lessa", gender: "male", socials: 'https://www.linkedin.com/in/paulo-lessa-5a7b2a36/', img: "69180.jpg" },
  { cod: "42291", name: "Renata de Albuquerque", gender: "male", img: "42291.jpeg" },
  { cod: "23637", name: "Rômulo Halliday", gender: "male", img: "23637.jpeg" },
  { cod: "44112", name: "Victor Lúcio", gender: "male" },
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

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {assessores.map((assessor) => (
              <div
                key={assessor.cod}
                className="text-center text-gray-500 dark:text-gray-400"
              >
                <img
                  className="mx-auto mb-4 w-36 h-36 rounded-full object-cover"
                  src={`/img/${
                    assessor.img
                      ? assessor.img
                      : assessor.gender === "male"
                      ? "male_avatar.jpg"
                      : "female_avatar.jpg"
                  }`}
                  alt="Bonnie Avatar"
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">{assessor.name}</a>
                </h3>
                <p>Assessor - {assessor.cod}</p>
                <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                    <a
                      href={assessor.socials ? assessor.socials : "#"} target="_blank"
                      className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
