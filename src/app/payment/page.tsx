"use client";

import Layout from "@/components/layout";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const { items, finalTotal, clearCart } = useCart();
  const router = useRouter();

  const handlePayment = () => {
    alert("Pagamento realizado com sucesso!");
    clearCart();
    router.push("/");
  };

  return (
    <Layout>
      <div className="container mx-auto p-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center mb-6">Pagamento</h1>
          <h2 className="text-xl font-semibold mb-4 text-center">
            Resumo do Pedido
          </h2>

          {/* Layout para Desktop (table) */}
          <div className="hidden md:block">
            {items.length > 0 ? (
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">Tipo</th>
                    <th className="px-4 py-2 text-left">Quantidade</th>
                    <th className="px-4 py-2 text-left">Preço Unitário</th>
                    <th className="px-4 py-2 text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr
                      key={`${item.eventId}-${item.ticketType}`}
                      className="border-b"
                    >
                      <td className="px-4 py-2">{item.ticketType}</td>
                      <td className="px-4 py-2">{item.quantity}</td>
                      <td className="px-4 py-2">R$ {item.price.toFixed(2)}</td>
                      <td className="px-4 py-2">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center text-lg">Seu carrinho está vazio.</p>
            )}
          </div>

          {/* Layout para Mobile (lista de cards) */}
          <div className="block md:hidden">
            {items.length > 0 ? (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li
                    key={`${item.eventId}-${item.ticketType}`}
                    className="border rounded p-4"
                  >
                    <p className="font-semibold">{item.ticketType}</p>
                    <p>Quantidade: {item.quantity}</p>
                    <p>Preço Unitário: R$ {item.price.toFixed(2)}</p>
                    <p>Total: R$ {(item.price * item.quantity).toFixed(2)}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-lg">Seu carrinho está vazio.</p>
            )}
          </div>

          <div className="mt-6 border-t pt-4">
            <p className="text-right text-lg font-semibold">
              Total Final: R$ {finalTotal.toFixed(2)}
            </p>
          </div>

          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-end">
            <Button
              onClick={() => router.push("/cart")}
              className="bg-gray-600 hover:bg-gray-700 w-full md:w-auto"
            >
              Voltar ao Carrinho
            </Button>
            <Button
              onClick={handlePayment}
              className="bg-green-600 hover:bg-green-700 w-full md:w-auto"
            >
              Finalizar Compra
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
