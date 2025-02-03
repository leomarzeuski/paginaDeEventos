"use client";

import Layout from "@/components/layout";

export default function PoliticasDePrivacidadePage() {
  return (
    <Layout>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Políticas de Privacidade</h1>
        <p className="mb-4">
          No ILLOTO EVENTOS, a sua privacidade e a segurança de seus dados
          pessoais são de extrema importância. Este documento tem como objetivo
          informar como coletamos, utilizamos e protegemos as suas informações.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Coleta de Dados</h2>
        <p className="mb-4">
          Ao utilizar nossa plataforma, podemos coletar informações pessoais,
          como nome, e-mail, CPF e dados de pagamento, além do histórico de
          compras e preferências de eventos. Essas informações são coletadas de
          forma transparente e com o seu consentimento.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Uso dos Dados</h2>
        <p className="mb-4">
          Os dados coletados são utilizados para melhorar sua experiência,
          oferecer suporte personalizado, processar transações e enviar
          informações sobre eventos e promoções. Seus dados não serão
          compartilhados com terceiros sem o seu consentimento, exceto quando
          necessário para o cumprimento de obrigações legais.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Segurança</h2>
        <p className="mb-4">
          Adotamos medidas de segurança técnicas e administrativas para proteger
          suas informações contra acesso não autorizado, alteração, divulgação
          ou destruição.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Direitos do Usuário</h2>
        <p className="mb-4">
          Você tem o direito de acessar, corrigir e excluir suas informações
          pessoais, bem como de revogar seu consentimento para o uso de seus
          dados a qualquer momento. Para exercer esses direitos, entre em
          contato conosco através do e-mail{" "}
          <a
            href="mailto:privacidade@illotoeventos.com.br"
            className="text-blue-600"
          >
            privacidade@illotoeventos.com.br
          </a>
          .
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Alterações na Política de Privacidade
        </h2>
        <p className="mb-4">
          Nossas políticas podem ser atualizadas periodicamente. Recomendamos
          que você revise esta página regularmente para se manter informado
          sobre quaisquer alterações.
        </p>
        <p>
          Ao utilizar o ILLOTO EVENTOS, você concorda com os termos descritos
          nesta Política de Privacidade.
        </p>
      </div>
    </Layout>
  );
}
