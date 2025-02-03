"use client";

import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useCart, TicketItem } from "@/context/cart-context";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CartPage() {
  const router = useRouter();
  const {
    items,
    updateTicket,
    removeTicket,
    clearCart,
    total,
    convenienceFee,
    finalTotal,
  } = useCart();

  const handleQuantityChange = (item: TicketItem, newQuantity: number) => {
    updateTicket({ ...item, quantity: newQuantity });
  };

  return (
    <Layout>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Carrinho de Ingressos</h1>
        {items.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={`${item.eventId}-${item.ticketType}`}
                  className="flex flex-col md:flex-row items-center border rounded"
                >
                  <div className="w-full md:w-1/4">
                    <Image
                      src={item.eventImage || "/placeholder.svg"}
                      width={300}
                      height={400}
                      alt={`Imagem do Evento ${item.ticketType}`}
                      className="object-cover w-full md:h-48 rounded"
                    />
                  </div>
                  <div className="w-full md:w-3/4 flex flex-col md:flex-row justify-between items-center p-4">
                    <div className="flex flex-col space-y-2">
                      <p className="font-semibold text-lg">{item.ticketType}</p>
                      <p>Preço Unitário: R$ {item.price.toFixed(2)}</p>
                      <div className="flex items-center gap-2">
                        <label
                          htmlFor={`quantity-${item.eventId}-${item.ticketType}`}
                        >
                          Quantidade:
                        </label>
                        <select
                          id={`quantity-${item.eventId}-${item.ticketType}`}
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              item,
                              parseInt(e.target.value, 10)
                            )
                          }
                          className="border p-2 rounded"
                        >
                          {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                      </div>
                      <p>Total: R$ {(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Button
                        onClick={() => removeTicket(item)}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        Remover
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="font-bold">Subtotal: R$ {total.toFixed(2)}</p>
              <p className="font-bold">
                Taxa de Conveniência (5%): R$ {convenienceFee.toFixed(2)}
              </p>
              <p className="font-bold">
                Total Final: R$ {finalTotal.toFixed(2)}
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <Button
                onClick={clearCart}
                className="bg-gray-600 hover:bg-gray-700"
              >
                Limpar Carrinho
              </Button>
              <Button
                onClick={() => router.push("/payment")}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Ir para Pagamento
              </Button>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
