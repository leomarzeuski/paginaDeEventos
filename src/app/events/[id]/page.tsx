"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getEventById } from "@/services/events/get-events";
import { useCart } from "@/context/cart-context";

interface EventDetails {
  id: number;
  name: string;
  description?: string;
  dates: string[];
  price?: number;
  location?: string;
  image?: string;
  ticketsSold?: number;
  availableTickets?: number;
  categories?: string[];
}

export default function EventDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addTicket, items } = useCart();

  const [event, setEvent] = useState<EventDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [ticketType, setTicketType] = useState("Pista");
  const [ticketQuantity, setTicketQuantity] = useState(1);

  useEffect(() => {
    if (!id) return;

    const eventId = parseInt(id as string, 10);

    getEventById(eventId)
      .then((data) => {
        setEvent(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Erro ao carregar o evento");
        setLoading(false);
      });
  }, [id]);

  const calculatePrice = (basePrice: number, type: string): number => {
    switch (type) {
      case "VIP":
        return basePrice * 1.5;
      case "Meia":
        return basePrice * 0.5;
      case "Pista":
      default:
        return basePrice;
    }
  };

  const adjustedPrice =
    event && event.price !== undefined
      ? calculatePrice(event.price, ticketType)
      : 0;
  const totalTicketPrice = ticketQuantity * adjustedPrice;
  const convenienceFeeAmount = totalTicketPrice * 0.05;
  const finalTotal = totalTicketPrice + convenienceFeeAmount;

  const handleBuyTickets = () => {
    if (!event) return;
    if (event.price === undefined) return;

    const existingTickets = items
      .filter((item) => item.eventId === event.id)
      .reduce((sum, item) => sum + item.quantity, 0);
    if (existingTickets + ticketQuantity > 5) {
      alert("Limite de 5 ingressos para este evento atingido.");
      return;
    }

    addTicket({
      eventId: event.id,
      ticketType: ticketType,
      quantity: ticketQuantity,
      price: adjustedPrice,
      eventImage: event.image,
    });

    router.push("/cart");
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-screen">
          <p>Carregando evento...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-screen">
          <p className="text-red-500">{error}</p>
        </div>
      </Layout>
    );
  }

  if (!event) return null;

  return (
    <Layout>
      <div className="container mx-auto p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 relative">
            <Image
              src={event.image || "/placeholder.svg"}
              alt={event.name}
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
            {event.ticketsSold !== undefined && event.ticketsSold >= 500 && (
              <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.286 7.016a1 1 0 00.95.69h7.388c.969 0 1.371 1.24.588 1.81l-5.977 4.345a1 1 0 00-.364 1.118l2.286 7.016c.3.921-.755 1.688-1.54 1.118l-5.977-4.345a1 1 0 00-1.176 0l-5.977 4.345c-.784.57-1.838-.197-1.54-1.118l2.286-7.016a1 1 0 00-.364-1.118L2.075 12.443c-.783-.57-.38-1.81.588-1.81h7.388a1 1 0 00.95-.69l2.286-7.016z"
                  />
                </svg>
                <span>Mais Vendidos</span>
              </div>
            )}
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold">{event.name}</h1>
            <p className="text-gray-500 mt-2">
              {event.location || "Local não disponível"}
            </p>
            <div className="mt-4">
              <p className="text-lg">
                <strong>Datas:</strong> {event.dates.join(", ")}
              </p>
              <p className="text-lg mt-2">
                <strong>Preço base:</strong>{" "}
                {event.price ? `R$ ${event.price.toFixed(2)}` : "Gratuito"}
              </p>
              <p className="text-lg mt-2">
                <strong>Tickets disponíveis:</strong> {event.availableTickets}
              </p>
            </div>
            <div className="mt-4">
              <p>{event.description || "Sem descrição disponível."}</p>
            </div>
            <div className="mt-8 border p-4 rounded">
              <h2 className="text-xl font-semibold mb-4">
                Escolha seu ingresso
              </h2>
              <div className="mb-4">
                <p className="mb-2">Tipo:</p>
                <div className="flex gap-4">
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="ticketType"
                      value="VIP"
                      checked={ticketType === "VIP"}
                      onChange={(e) => setTicketType(e.target.value)}
                    />
                    VIP
                  </label>
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="ticketType"
                      value="Pista"
                      checked={ticketType === "Pista"}
                      onChange={(e) => setTicketType(e.target.value)}
                    />
                    Pista
                  </label>
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="ticketType"
                      value="Meia"
                      checked={ticketType === "Meia"}
                      onChange={(e) => setTicketType(e.target.value)}
                    />
                    Meia
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <p className="mb-2">Quantidade (máx. 5):</p>
                <select
                  value={ticketQuantity}
                  onChange={(e) =>
                    setTicketQuantity(parseInt(e.target.value, 10))
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
              <div className="mt-4">
                <p>Total dos ingressos: R$ {totalTicketPrice.toFixed(2)}</p>
                <p>
                  Taxa de Conveniência (5%): R${" "}
                  {convenienceFeeAmount.toFixed(2)}
                </p>
                <p className="font-bold">
                  Valor Final: R$ {finalTotal.toFixed(2)}
                </p>
              </div>
              <div className="mt-4">
                <p className="mb-2 font-semibold">Visualização da área:</p>
                {ticketType === "VIP" ? (
                  <Image
                    src="/event.jpeg"
                    alt="Mapa VIP"
                    width={400}
                    height={200}
                    className="object-cover rounded"
                  />
                ) : ticketType === "Pista" ? (
                  <Image
                    src="/event.jpeg"
                    alt="Mapa Pista"
                    width={400}
                    height={200}
                    className="object-cover rounded"
                  />
                ) : (
                  <p>Visualização não disponível para Meia.</p>
                )}
              </div>
              <Button
                onClick={handleBuyTickets}
                className="mt-4 bg-blue-600 hover:bg-blue-700"
              >
                Comprar Ingressos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
