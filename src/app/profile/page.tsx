"use client";

import { useRouter } from "next/navigation";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <Layout>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Perfil do Usuário</h1>
        <div className="bg-white shadow rounded p-6">
          <p className="mb-4">
            <strong>Nome:</strong> {user?.name}
          </p>
          <p className="mb-4">
            <strong>Email:</strong> {user?.email}
          </p>
          <div className="mt-6 flex gap-4">
            <Button
              onClick={() => {
                logout();
                router.push("/login");
              }}
              className="bg-red-600 hover:bg-red-700"
            >
              Sair
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
