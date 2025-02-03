"use client";

import { useEffect, useState, useMemo } from "react";
import Layout from "@/components/layout";
import { EventCard } from "@/components/event-card";
import { getEvents } from "@/services/events/get-events";
import { EventCarousel } from "@/components/event-carousel";
import { Input } from "@/components/ui/input";

interface Event {
  id: number;
  name: string;
  description?: string;
  date: string;
  dates?: string[];
  price?: number;
  location?: string;
  image?: string;
  ticketsSold?: number;
  availableTickets?: number;
  categories?: string[];
  isTop?: boolean;
}

interface ActiveFilters {
  priceRange: [number, number] | null;
  locations: string[];
  top: boolean;
}

function normalizeText(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[,.]/g, "");
}

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 8;

  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    priceRange: null,
    locations: [],
    top: false,
  });

  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    getEvents()
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(`Erro ao carregar os eventos: ${err}`);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeFilters]);

  const filteredEvents = useMemo(() => {
    let filtered = events.filter((event) => {
      const searchable = [
        event.name || "",
        event.date || "",
        event.date || "",
        event.location || "",
        event.categories ? event.categories.join(" ") : "",
        event.price !== undefined ? event.price.toString() : "",
      ].join(" ");
      const normSearchable = normalizeText(searchable);
      const normQuery = normalizeText(searchQuery);
      if (normQuery && !normSearchable.includes(normQuery)) {
        return false;
      }
      if (activeFilters.priceRange) {
        if (
          event.price === undefined ||
          event.price < activeFilters.priceRange[0] ||
          event.price > activeFilters.priceRange[1]
        ) {
          return false;
        }
      }
      if (activeFilters.locations.length > 0) {
        const normLocation = event.location
          ? normalizeText(event.location)
          : "";
        const matches = activeFilters.locations.some((loc) =>
          normLocation.includes(normalizeText(loc))
        );
        if (!matches) return false;
      }
      return true;
    });

    if (activeFilters.top) {
      filtered = filtered
        .filter((e) => e.ticketsSold !== undefined)
        .sort((a, b) => (b.ticketsSold || 0) - (a.ticketsSold || 0))
        .slice(0, 4)
        .map((e) => ({ ...e, isTop: true }));
      return filtered;
    }

    if (
      !searchQuery &&
      !activeFilters.priceRange &&
      activeFilters.locations.length === 0 &&
      !activeFilters.top
    ) {
      const topSorted = [...filtered]
        .filter((e) => e.ticketsSold !== undefined)
        .sort((a, b) => (b.ticketsSold || 0) - (a.ticketsSold || 0));
      const top4 = topSorted.slice(0, 4).map((e) => ({ ...e, isTop: true }));
      const rest = filtered.filter((e) => !top4.some((top) => top.id === e.id));
      return [...top4, ...rest];
    }

    return filtered;
  }, [events, searchQuery, activeFilters]);

  const paginatedEvents = useMemo(() => {
    if (activeFilters.top) {
      return filteredEvents;
    } else {
      const indexOfLast = currentPage * eventsPerPage;
      const indexOfFirst = indexOfLast - eventsPerPage;
      return filteredEvents.slice(indexOfFirst, indexOfLast);
    }
  }, [filteredEvents, currentPage, activeFilters.top]);

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const paginationButtons = [];
  if (!activeFilters.top && filteredEvents.length > eventsPerPage) {
    for (let i = 1; i <= totalPages; i++) {
      paginationButtons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-3 py-1 border rounded ${
            currentPage === i
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          }`}
        >
          {i}
        </button>
      );
    }
  }

  const togglePriceRange = (range: [number, number]) => {
    setActiveFilters((prev) => ({
      ...prev,
      priceRange:
        prev.priceRange &&
        prev.priceRange[0] === range[0] &&
        prev.priceRange[1] === range[1]
          ? null
          : range,
    }));
  };

  const toggleLocation = (location: string) => {
    setActiveFilters((prev) => {
      const locations = prev.locations.includes(location)
        ? prev.locations.filter((l) => l !== location)
        : [...prev.locations, location];
      return { ...prev, locations };
    });
  };

  const toggleTop = () => {
    setActiveFilters((prev) => ({ ...prev, top: !prev.top }));
  };

  if (loading) {
    return (
      <Layout>
        <div className="p-12 text-center text-xl">Carregando eventos...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="p-12 text-center text-xl text-red-500">{error}</div>
      </Layout>
    );
  }

  return (
    <Layout newsletter={true}>
      <EventCarousel events={events} />

      <section className="p-12 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8">Eventos</h2>

        <div className="w-full max-w-4xl mb-8">
          <Input
            type="text"
            placeholder="Buscar por nome, data, local ou preço"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            list="search-suggestions"
            className="w-full border p-2 rounded"
          />
          <datalist id="search-suggestions">
            <option value="São Paulo" />
            <option value="Rio de Janeiro" />
            <option value="2025-01" />
            <option value="2025-02" />
            <option value="Tecnologia" />
            <option value="Workshop" />
            <option value="Música" />
            <option value="Festival" />
          </datalist>
        </div>

        <div className="mb-4 md:hidden">
          <button
            onClick={() => setShowFilters((prev) => !prev)}
            className="px-4 py-2 border rounded bg-blue-600 text-white"
          >
            {showFilters ? "Esconder Filtros" : "Mostrar Filtros"}
          </button>
        </div>

        {(showFilters ||
          (typeof window !== "undefined" && window.innerWidth >= 768)) && (
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => togglePriceRange([10, 100])}
              className={`px-3 py-1 border rounded ${
                activeFilters.priceRange && activeFilters.priceRange[0] === 10
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600"
              }`}
            >
              Valor 10-100
            </button>
            <button
              onClick={() => togglePriceRange([100, 1000])}
              className={`px-3 py-1 border rounded ${
                activeFilters.priceRange && activeFilters.priceRange[0] === 100
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600"
              }`}
            >
              Valor 100-1000
            </button>
            <button
              onClick={() => toggleLocation("São Paulo")}
              className={`px-3 py-1 border rounded ${
                activeFilters.locations.includes("São Paulo")
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600"
              }`}
            >
              São Paulo
            </button>
            <button
              onClick={() => toggleLocation("Rio de Janeiro")}
              className={`px-3 py-1 border rounded ${
                activeFilters.locations.includes("Rio de Janeiro")
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600"
              }`}
            >
              Rio de Janeiro
            </button>
            <button
              onClick={toggleTop}
              className={`px-3 py-1 border rounded ${
                activeFilters.top
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600"
              }`}
            >
              Mais Vendidos
            </button>
          </div>
        )}

        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedEvents.length > 0 ? (
            paginatedEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))
          ) : (
            <p className="col-span-full text-center text-lg">
              Nenhum evento encontrado.
            </p>
          )}
        </div>

        {!activeFilters.top && filteredEvents.length > eventsPerPage && (
          <div className="mt-8 flex gap-2">{paginationButtons}</div>
        )}
      </section>
    </Layout>
  );
}
