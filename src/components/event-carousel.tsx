"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Event {
  id: number;
  name: string;
  date: string;
  image?: string;
  price?: number;
}

interface EventCarouselProps {
  events: Event[];
}

export function EventCarousel({ events }: EventCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  if (events.length === 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
    setShowOverlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
    setShowOverlay(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const diff = touchStartX - touchEndX;
      const threshold = 50;
      if (diff > threshold) {
        nextSlide();
      } else if (diff < -threshold) {
        prevSlide();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className="relative w-full md:h-[700px] h-[400px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {events.map((event, index) => (
          <div key={event.id} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={event.image || "/placeholder.svg"}
              alt={event.name}
              className="w-full h-full object-cover"
              width={1200}
              height={400}
              priority={index === 0}
            />
            <div
              className={`absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col items-center justify-center transition-opacity duration-300 ${
                showOverlay && currentSlide === index
                  ? "opacity-100"
                  : "opacity-0 hover:opacity-100"
              }`}
              onMouseEnter={() => setShowOverlay(true)}
              onMouseLeave={() => setShowOverlay(false)}
              onClick={() => setShowOverlay((prev) => !prev)}
            >
              <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
              <p className="mb-2">{event.date}</p>
              <p className="mb-4">
                Ingresso: R$ {event.price ? event.price.toFixed(2) : "N/A"}
              </p>
              <Link href={`/events/${event.id}`}>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Comprar
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {events.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => {
              setCurrentSlide(index);
              setShowOverlay(false);
            }}
          />
        ))}
      </div>
    </div>
  );
}
