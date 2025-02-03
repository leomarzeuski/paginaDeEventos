import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#0037B3] py-4 sticky top-0 z-50">
      <div className="flex justify-between flex-col gap-4 px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-2xl font-bold">
            ILLOTO EVENTOS
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-white hover:text-white/90">
              Suporte ao Fã
            </Link>
            <Link href="#" className="text-white hover:text-white/90">
              Entrar / Cadastre-se
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
            <Link href="#" className="text-white hover:text-white/90">
              Suporte ao Fã
            </Link>
            <Link href="#" className="text-white hover:text-white/90">
              Entrar / Cadastre-se
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
