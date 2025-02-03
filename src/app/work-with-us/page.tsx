"use client";

import Layout from "@/components/layout";

export default function TrabalheConoscoPage() {
  return (
    <Layout>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Trabalhe Conosco</h1>
        <p className="mb-4">
          No ILOTTO EVENTOS, buscamos pessoas apaixonadas por inovação,
          entretenimento e tecnologia para fazer parte do nosso time! Se você
          deseja crescer profissionalmente, aprender e contribuir para o sucesso
          de um projeto dinâmico, você está no lugar certo.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          O que esperamos de você:
        </h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Proatividade e vontade de aprender.</li>
          <li>Trabalho em equipe e colaboração.</li>
          <li>Capacidade de resolução de problemas.</li>
          <li>
            Experiência ou interesse na área de eventos, tecnologia ou marketing
            digital.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">O que oferecemos:</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Ambiente de trabalho dinâmico e colaborativo.</li>
          <li>Oportunidades de crescimento e desenvolvimento profissional.</li>
          <li>Benefícios competitivos.</li>
          <li>Participação em projetos inovadores no setor de eventos.</li>
        </ul>
        <p className="mb-4">
          Se você se identifica com nossos valores e deseja fazer parte do
          ILOTTO EVENTOS, envie seu currículo e uma carta de apresentação para{" "}
          <a href="mailto:rh@ilottoeventos.com.br" className="text-blue-600">
            rh@ilottoeventos.com.br
          </a>
          .
        </p>
        <p>Agradecemos seu interesse e esperamos por você!</p>
      </div>
    </Layout>
  );
}
