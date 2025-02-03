"use client";

import Layout from "@/components/layout";

export default function ilottoEventosBrasilPage() {
  return (
    <Layout>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">ILOTTO EVENTOS BRASIL</h1>
        <p className="mb-4">
          O ILOTTO EVENTOS BRASIL é uma plataforma inovadora que conecta pessoas
          a experiências incríveis em todo o país. Nossa missão é oferecer
          acesso fácil e seguro a uma variedade de eventos, desde shows e
          festivais até workshops e exposições culturais.
        </p>
        <p className="mb-4">
          Acreditamos que a cultura e o entretenimento transformam vidas. Por
          isso, investimos em tecnologia e parcerias estratégicas para garantir
          a melhor experiência de compra e participação para nossos clientes.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Nossos Valores:</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Inovação e qualidade no atendimento.</li>
          <li>Transparência e segurança em todas as transações.</li>
          <li>Inclusão e diversidade em nossos eventos.</li>
          <li>Compromisso com a cultura e o desenvolvimento social.</li>
        </ul>
        <p>
          Junte-se a nós e descubra um mundo de experiências que enriquecem sua
          vida!
        </p>
      </div>
    </Layout>
  );
}
