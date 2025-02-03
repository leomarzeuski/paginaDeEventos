import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex flex-col">
      <footer className="bg-black text-white px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">Acesso Rápido</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Minhas Compras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Meu Perfil
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Suporte ao Fã
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Acessibilidade
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Termos e Políticas</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Política de Compra
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Política de Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Sobre a ILLOTO EVENTOS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  ILLOTO EVENTOS Brasil
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  ILLOTO EVENTOS Internacional
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Trabalhe com a gente
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xl font-bold">ILLOTO TECNOLOGIA</div>

            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>

            <div className="text-sm text-gray-400 text-center md:text-right">
              <p>© ILLOTO EVENTOS Brasil LTDA - CNPJ 47.984.665/0001-60</p>
              <p>
                R. Biachuelo, nº 627, 6º andar, Vila Gertrudes, São Paulo/SP,
                CEP 04.548-005
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
