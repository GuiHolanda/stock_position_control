import Logo from "./UI/Logo";
import { CustomText } from "./UI/Texts";

export const CustomFooter = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-4 md:gap-8 xl:grid-cols-3 border-t pt-8 border-cinza_ameno">
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex flex-1 lg:flex-none justify-center sm:justify-start">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Logo className="h-8 sm:h-12" color="colored" />
              </a>
            </div>
            <CustomText.Paragraph
              fontSize="sm"
              className="text-center mx-auto md:mx-0 leading-relaxed text-gray-500 sm:text-left"
            >
              Oferecemos soluções personalizadas para você alcançar seus
              objetivos financeiros com segurança e confiança. Vamos juntos
              construir um caminho de sucesso!
            </CustomText.Paragraph>

            <ul className="flex justify-center gap-4 sm:justify-start md:gap-8">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-azul_sereno hover:text-sky-900"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-azul_sereno hover:text-sky-900"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2 border-t xl:border-t-0 border-cinza_ameno pt-6 xl:pt-0">
            <div className="text-center sm:text-left">
              <p className="text-sm md:text-lg font-medium text-gray-900">
                Sobre a Veneza
              </p>

              <ul className="mt-4 space-y-4 text-xs md:text-sm">
                {/* <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                  >
                    Nossa História
                  </a>
                </li> */}

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/nosso-time"
                  >
                    Conheça o nosso time
                  </a>
                </li>

                {/* <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                  >
                    Seja um assessor Veneza
                  </a>
                </li> */}

                <li>
                  <a
                    className=" text-teal-600 transition hover:text-teal-600/75"
                    href="/politica-privacidade"
                  >
                    Política de Privacidade
                  </a>
                </li>

                <li>
                  <a
                    className=" text-teal-600 transition hover:text-teal-600/75"
                    href="/politica-cookies"
                  >
                    Política de Cookies
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-sm md:text-lg font-medium text-gray-900">
                Nossos Serviços
              </p>

              <ul className="mt-4 space-y-4 text-xs md:text-sm">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/renda-variavel"
                  >
                    Renda Váriavel
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/renda-fixa"
                  >
                    Renda Fixa
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/internacional"
                  >
                    Investimentos Internacionais
                  </a>
                </li>

                {/* <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Sucessão Patrimonial
                  </a>
                </li> */}
              </ul>
            </div>

            <div className="text-center sm:text-left md:col-span-2">
              <p className="text-sm md:text-lg font-medium text-gray-900">
                Entre em Contato
              </p>

              <ul className="mt-4 space-y-4 text-xs md:text-sm">
                <li>
                  <a
                    className="flex justify-center sm:justify-start gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-3 md:size-5 shrink-0 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <p className="text-gray-700">
                      contato@venezainvestimentos.com.br
                    </p>
                  </a>
                </li>

                <li>
                  <a
                    className="flex items-center justify-center sm:justify-start gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-3 md:size-5 shrink-0 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <span className="text-gray-700">(81) 3039-8048</span>
                  </a>
                </li>

                <li className="flex items-start justify-center sm:justify-start gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3 md:size-5 shrink-0 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <address className="not-italic text-gray-700">
                    R. Padre Carapuceiro, 752, sala 404, Boa viagem, Recife-PE
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cinza_ameno pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="mt-4 text-xs text-gray-500 sm:order-first sm:mt-0">
              &copy; 2024 Veneza Investimentos todos os direitos reservados.
            </p>

            <p className="mt-4 text-xs text-gray-500 sm:order-first sm:mt-0 text-center">
              Assessor de Investimentos da XP Investimentos Corretora de Cambio,
              Títulos e Valores Mobiliários S.A. - Ouvidoria XP: 0800-722-3730
            </p>
          </div>
        </div>

        <p className="mt-4 border-t border-cinza_ameno pt-6 text-[10px] text-gray-500 text-center">
          A VENEZA INVESTIMENTOS AI SOCIEDADE SIMPLES PURA, inscrita sob o CNPJ:
          50.027.659/0001-00 é uma empresa de Assessoria de Investimento
          devidamente registrada na Comissão de Valores Mobiliários na forma da
          Resolução CVM 178/23 (“Sociedade”), que mantém contrato de
          distribuição de produtos financeiros com a XP Investimentos Corretora
          de Câmbio, Títulos e Valores Mobiliários S.A. (“XP”) e pode, por conta
          e ordem dos seus clientes, operar no mercado de capitais segundo a
          legislação vigente. Na forma da legislação da CVM, o Assessor de
          Investimento não pode administrar ou gerir o patrimônio de
          investidores. O investimento em ações é um investimento de risco e
          rentabilidade passada não é garantia de rentabilidade futura. Na
          realização de operações com derivativos existe a possibilidade de
          perdas superiores aos valores investidos, podendo resultar em
          significativas perdas patrimoniais A Sociedade poderá exercer
          atividades complementares relacionadas aos mercados financeiro,
          securitário, de previdência e capitalização, desde que não conflitem
          com a atividade de assessoria de investimentos, podendo ser realizada
          por meio da pessoa jurídica acima descrita ou por meio de pessoa
          jurídica terceira. Todas as atividades são prestadas mantendo a devida
          segregação e em cumprimento ao quanto previsto nas regras da CVM ou de
          outros órgãos reguladores e autorreguladores. Para informações e
          dúvidas sobre produtos, contate seu assessor de investimentos. Para
          reclamações, contate a Ouvidoria da XP pelo telefone 0800 722 3730.
        </p>
      </div>
    </footer>
  );
};
