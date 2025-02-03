"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useAuth } from "@/context/auth-context";
import { useCart } from "@/context/cart-context";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();
  const { items } = useCart();

  const cartQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="w-full bg-[#0037B3] py-4 sticky top-0 z-50">
      <div className="flex justify-between flex-col gap-4 px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-2xl font-bold">
            ILOTTO EVENTOS
          </Link>
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <Link href="/profile" className="text-white hover:text-white/90">
                Olá, {user.name}
              </Link>
            ) : (
              <Link href="/login" className="text-white hover:text-white/90">
                Entrar / Cadastre-se
              </Link>
            )}
            <Link
              href="/cart"
              className="relative text-white hover:text-white/90"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartQuantity > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {cartQuantity}
                </span>
              )}
            </Link>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 items-center bg-[#0037B3] py-4">
            {user ? (
              <Link href="/profile" className="text-white hover:text-white/90">
                Olá, {user.name}
              </Link>
            ) : (
              <Link href="/login" className="text-white hover:text-white/90">
                Entrar / Cadastre-se
              </Link>
            )}
            <Link
              href="/cart"
              className="relative text-white hover:text-white/90"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartQuantity > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {cartQuantity}
                </span>
              )}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
