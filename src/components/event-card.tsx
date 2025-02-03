"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react"; // Importa o ícone de estrela

interface EventCardProps {
  id: number;
  name: string;
  image?: string;
  dates?: string[];
  location?: string;
  price?: number;
  availableTickets?: number;
  isTop?: boolean;
}

export function EventCard({
  id,
  name,
  image = "/placeholder.svg",
  dates,
  location = "Local não disponível",
  price = 0,
  availableTickets,
  isTop = false,
}: EventCardProps) {
  const displayDate = dates?.length ? dates[0] : "Data não disponível";

  return (
    <Link href={`/events/${id}`}>
      <Card
        className={`relative overflow-hidden ${
          isTop ? "border-4 border-yellow-500 shadow-lg" : ""
        }`}
      >
        {isTop && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1 z-10">
            <Star className="h-4 w-4" />
            <span>Mais Vendidos</span>
          </div>
        )}
        <CardContent className="p-0">
          <Image
            src={image}
            alt={name}
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2 p-4">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-muted-foreground">{displayDate}</p>
          <p className="text-sm text-muted-foreground">{location}</p>
          <p className="text-sm font-medium">R$ {price.toFixed(2)}</p>
          {availableTickets !== undefined && (
            <p className="text-sm text-muted-foreground">
              Disponíveis: {availableTickets}
            </p>
          )}
          <Button className="w-full bg-[#0037B3] hover:bg-[#0037B3]/90">
            Ver Detalhes
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
