import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center bg-azul_sereno text-white p-16 font-montserrat">
        Política de Privacidade
      </h1>
      <div className="max-w-5xl mx-auto p-6 font-montserrat">
        <p className="mb-4">
          A Veneza Investimentos, credenciada à XP Investimentos e em
          conformidade com as normas da Comissão de Valores Mobiliários (CVM),
          valoriza a privacidade e a segurança dos dados de seus clientes. Esta
          Política de Privacidade explica como coletamos, utilizamos,
          armazenamos e protegemos suas informações pessoais.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            1. Coleta de Informações
          </h2>
          <p>Coletamos informações fornecidas diretamente por você, como:</p>
          <ul className="list-disc pl-6">
            <li>Nome completo, CPF, endereço e dados de contato;</li>
            <li>
              Informações financeiras, como perfil de investidor e objetivos
              financeiros;
            </li>
            <li>
              Outras informações necessárias para cumprir obrigações
              regulatórias.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            2. Uso das Informações
          </h2>
          <p>Utilizamos suas informações para:</p>
          <ul className="list-disc pl-6">
            <li>
              Oferecer serviços de assessoria em investimentos personalizados;
            </li>
            <li>Cumprir obrigações legais e regulatórias;</li>
            <li>
              Entrar em contato para fins de atendimento, comunicações e
              informações relevantes.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            3. Compartilhamento de Informações
          </h2>
          <p>Seus dados podem ser compartilhados com:</p>
          <ul className="list-disc pl-6">
            <li>A XP Investimentos para execução dos serviços contratados;</li>
            <li>Órgãos reguladores, quando exigido por lei;</li>
            <li>
              Terceiros apenas com seu consentimento ou para cumprimento de
              obrigações legais.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            4. Armazenamento e Proteção
          </h2>
          <p>
            Adotamos medidas técnicas e organizacionais para proteger suas
            informações contra acessos não autorizados, perda ou alteração.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Seus Direitos</h2>
          <p>Você tem direito de:</p>
          <ul className="list-disc pl-6">
            <li>Acessar, corrigir ou excluir seus dados pessoais;</li>
            <li>Solicitar informações sobre o tratamento dos seus dados;</li>
            <li>Revogar seu consentimento a qualquer momento.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Contato</h2>
          <p>
            Para exercer seus direitos ou tirar dúvidas sobre esta política,
            entre em contato conosco:
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

export default PrivacyPolicy;
