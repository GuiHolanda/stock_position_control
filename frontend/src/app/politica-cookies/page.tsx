import React from "react";

const CookiePolicy: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center bg-azul_sereno text-white p-16 font-montserrat">
        Política de Cookies
      </h1>
      <div className="max-w-5xl mx-auto p-6 font-montserrat">
        <p className="mb-4">
          Esta Política de Cookies explica como a Veneza Investimentos utiliza
          cookies e tecnologias similares para reconhecer você quando visita
          nosso site. Ela explica o que são essas tecnologias, por que as
          utilizamos e seus direitos de controle sobre o uso delas.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. O que são Cookies?</h2>
          <p>
            Cookies são pequenos arquivos de texto armazenados em seu
            dispositivo quando você visita um site. Eles permitem que o site
            reconheça seu dispositivo, proporcionando uma navegação mais
            eficiente e personalizada.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            2. Como Utilizamos os Cookies?
          </h2>
          <p>Utilizamos cookies para:</p>
          <ul className="list-disc pl-6">
            <li>Garantir o funcionamento adequado do site;</li>
            <li>
              Entender como você utiliza o site, para melhorar sua experiência;
            </li>
            <li>
              Personalizar conteúdo e anúncios com base em seus interesses;
            </li>
            <li>Cumprir obrigações legais e regulatórias.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            3. Tipos de Cookies Utilizados
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Cookies Essenciais:</strong> Necessários para o
              funcionamento do site.
            </li>
            <li>
              <strong>Cookies de Desempenho:</strong> Coletam informações sobre
              como os visitantes usam o site.
            </li>
            <li>
              <strong>Cookies Funcionais:</strong> Permitem que o site lembre
              escolhas que você faz (como idioma ou região).
            </li>
            <li>
              <strong>Cookies de Publicidade:</strong> Utilizados para oferecer
              anúncios relevantes aos seus interesses.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            4. Como Gerenciar Cookies
          </h2>
          <p>
            Você pode controlar e/ou excluir cookies a qualquer momento através
            das configurações do seu navegador. Note que a desativação de certos
            cookies pode afetar a funcionalidade do site.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            5. Atualizações desta Política
          </h2>
          <p>
            Podemos atualizar esta Política de Cookies periodicamente.
            Recomendamos que você reveja esta página regularmente para se manter
            informado sobre nosso uso de cookies.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Contato</h2>
          <p>
            Se você tiver dúvidas sobre esta Política de Cookies, entre em
            contato conosco:
          </p>
          <ul className="list-disc pl-6">
            <li>
              Email:{" "}
              <a
                href="mailto:contato@veneza.com.br"
                className="text-blue-600 underline"
              >
                contato@venezainvestimentos.com.br
              </a>
            </li>
            <li>Telefone: (81) 3039-8048</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">7. Atualizações</h2>
          <p>
            Esta política pode ser revisada periodicamente. A versão mais
            recente estará sempre disponível em nosso site.
          </p>
          <p className="mt-4">
          Data da última atualização: <strong>13/03/2025</strong>
          </p>
        </section>

        <p className="text-sm mt-8">
          A Veneza Investimentos reafirma seu compromisso com a transparência e
          segurança das suas informações pessoais.
        </p>
      </div>
    </>
  );
};

export default CookiePolicy;
