"use client";

import Layout from "@/components/layout";

export default function TermsOfUsePage() {
  return (
    <Layout>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Termos de Uso</h1>

        <p className="mb-4">
          Bem-vindo ao ILOTTO EVENTOS! Este aplicativo foi desenvolvido para
          facilitar a busca e compra de ingressos para diversos eventos, além de
          oferecer suporte, gerenciamento de carrinho e autenticação para uma
          experiência completa.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Funcionalidades</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>
            Listagem de eventos com filtros avançados (por nome, data, local,
            preço e categorias).
          </li>
          <li>
            Visualização detalhada de cada evento, com informações como datas,
            preço, localização e quantidade disponível de ingressos.
          </li>
          <li>
            Compra de ingressos com seleção de tipo (VIP, Pista ou Meia) e
            quantidade (máximo 5 ingressos por evento).
          </li>
          <li>
            Calculadora automática do valor total da compra, incluindo uma taxa
            de conveniência de 5%.
          </li>
          <li>
            Carrinho de compras para revisar e gerenciar os ingressos
            selecionados.
          </li>
          <li>
            Sistema de autenticação com cadastro e login, que permite o acesso
            ao perfil do usuário e ao histórico de compras.
          </li>
          <li>
            Página de suporte para esclarecimento de dúvidas e envio de
            comentários.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Uso dos Dados</h2>
        <p className="mb-4">
          Seus dados pessoais (como nome, e-mail e histórico de compras) são
          armazenados com segurança e utilizados apenas para fins de
          autenticação e para melhorar sua experiência no aplicativo. Utilizamos
          cookies e localStorage para persistir informações importantes, como os
          itens do seu carrinho.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Compras e Pagamentos</h2>
        <p className="mb-4">
          Ao efetuar uma compra, você concorda com os preços e condições
          informados no momento da transação. O valor total da compra inclui o
          preço dos ingressos e uma taxa de conveniência de 5%. Após a
          confirmação do pagamento, os ingressos serão enviados para o e-mail
          cadastrado.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Limitações de Uso</h2>
        <p className="mb-4">
          O uso do aplicativo está sujeito a algumas limitações, como a
          quantidade máxima de 5 ingressos por evento, independentemente do tipo
          (VIP, Pista ou Meia). Caso haja dúvidas sobre o funcionamento do
          aplicativo, consulte nossa página de suporte.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Alterações nos Termos</h2>
        <p className="mb-4">
          Estes Termos de Uso podem ser atualizados periodicamente. Recomendamos
          que você verifique esta página regularmente para se manter informado
          sobre quaisquer alterações. O uso contínuo do aplicativo implica a
          aceitação das condições atuais.
        </p>

        <p>
          Ao utilizar o ILOTTO EVENTOS, você concorda com estes Termos de Uso.
        </p>
      </div>
    </Layout>
  );
}
