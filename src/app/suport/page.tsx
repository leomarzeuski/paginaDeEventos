"use client";

import { useState } from "react";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SupportPage() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setFeedback("Sua dúvida foi enviada com sucesso!");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      setFeedback(`Erro ao enviar sua dúvida. Tente novamente: ${error}`);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Suporte</h1>
        <p className="mb-6">
          Se você tiver alguma dúvida ou comentário, preencha o formulário
          abaixo e entraremos em contato.
        </p>
        {feedback && <p className="mb-4 text-green-600">{feedback}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Assunto"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <textarea
            placeholder="Sua dúvida ou comentário..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-2 rounded h-32"
            required
          />
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
            Enviar
          </Button>
        </form>
      </div>
    </Layout>
  );
}
