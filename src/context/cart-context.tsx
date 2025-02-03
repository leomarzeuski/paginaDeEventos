"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useCallback,
  useEffect,
} from "react";

export interface TicketItem {
  eventId: number;
  ticketType: string;
  quantity: number;
  price: number;
  eventImage?: string;
}

interface CartContextType {
  items: TicketItem[];
  addTicket: (ticket: TicketItem) => void;
  updateTicket: (ticket: TicketItem) => void;
  removeTicket: (ticket: TicketItem) => void;
  clearCart: () => void;
  total: number;
  convenienceFee: number;
  finalTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<TicketItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      try {
        const parsedItems: TicketItem[] = JSON.parse(storedCart);
        setItems(parsedItems);
      } catch (error) {
        console.error(
          "Erro ao parsear os itens do carrinho do localStorage",
          error
        );
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [items]);

  const addTicket = useCallback((ticket: TicketItem) => {
    setItems((prevItems) => {
      const existing = prevItems.find(
        (item) =>
          item.eventId === ticket.eventId &&
          item.ticketType === ticket.ticketType
      );
      if (existing) {
        const newQuantity = Math.min(existing.quantity + ticket.quantity, 5);
        return prevItems.map((item) =>
          item.eventId === ticket.eventId &&
          item.ticketType === ticket.ticketType
            ? { ...item, quantity: newQuantity }
            : item
        );
      } else {
        return [
          ...prevItems,
          { ...ticket, quantity: Math.min(ticket.quantity, 5) },
        ];
      }
    });
  }, []);

  const updateTicket = useCallback((ticket: TicketItem) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.eventId === ticket.eventId && item.ticketType === ticket.ticketType
          ? { ...item, quantity: Math.min(ticket.quantity, 5) }
          : item
      )
    );
  }, []);

  const removeTicket = useCallback((ticket: TicketItem) => {
    setItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(
            item.eventId === ticket.eventId &&
            item.ticketType === ticket.ticketType
          )
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]);

  const convenienceFee = useMemo(() => total * 0.05, [total]);
  const finalTotal = useMemo(
    () => total + convenienceFee,
    [total, convenienceFee]
  );

  const value = useMemo(
    () => ({
      items,
      addTicket,
      updateTicket,
      removeTicket,
      clearCart,
      total,
      convenienceFee,
      finalTotal,
    }),
    [
      items,
      addTicket,
      updateTicket,
      removeTicket,
      clearCart,
      total,
      convenienceFee,
      finalTotal,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
