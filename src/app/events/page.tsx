"use client";

import { EventCard } from "@/components/event-card";
import { EventCarousel } from "@/components/event-carousel";
import { SiteHeader } from "@/components/site-header";

const familyEvents = [
  {
    title: "Uma Homenagem ao Rei",
    image: "/placeholder.svg",
    dates: "Multiplas datas",
  },
  {
    title: "Roxy Dinner Show - Rio",
    image: "/placeholder.svg",
    dates: "Multiplas datas",
  },
  {
    title: "Hello Kitty - Um Universo",
    image: "/placeholder.svg",
    dates: "Multiplas datas",
  },
  {
    title: "Roda Rico - São Paulo",
    image: "/placeholder.svg",
    dates: "Multiplas datas",
  },
  {
    title: "Sampa Sky - São Paulo",
    image: "/placeholder.svg",
    dates: "Multiplas datas",
  },
  {
    title: "TUTANKAMON - Belo Horizonte",
    image: "/placeholder.svg",
    dates: "Multiplas datas",
  },
  {
    title: "Patrulha Canina - São Paulo",
    image: "/placeholder.svg",
    dates: "Multiplas datas",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="">
        <EventCarousel />
        <section className="p-12">
          <h2 className="text-2xl font-bold mb-8">Para todos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {familyEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </section>
        <section className="p-12">
          <h2 className="text-2xl font-bold mb-8">
            Eventos de Sao Paulo e Regiao
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {familyEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </section>
        <section className="p-12">
          <h2 className="text-2xl font-bold mb-8">Eventos de Rio de Janeiro</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {familyEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </section>
        <section className="p-12">
          <h2 className="text-2xl font-bold mb-8">Grandes Eventos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {familyEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
