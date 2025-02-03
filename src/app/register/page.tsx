"use client";

import { Suspense, useState } from "react";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { register } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      await register(username, email, password);
      router.push("/");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Layout>
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-4">Cadastro</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              type="text"
              placeholder="Nome de usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700"
              disabled={!username || !email || !password}
            >
              Cadastrar
            </Button>
          </form>
          <p className="mt-4">
            Já tem conta?{" "}
            <Link href="/login" className="text-blue-600">
              Entrar
            </Link>
          </p>
        </div>
      </Layout>
    </Suspense>
  );
}
