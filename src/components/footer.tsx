import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex flex-col">
      <footer className="bg-black text-white px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">Acesso Rápido</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/profile" className="hover:text-gray-300">
                  Meu Perfil
                </Link>
              </li>
              <li>
                <Link href="/suport" className="hover:text-gray-300">
                  Suporte ao Fã
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Termos e Políticas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="hover:text-gray-300">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/politics" className="hover:text-gray-300">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Sobre a ILOTTO EVENTOS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ilotto" className="hover:text-gray-300">
                  ILOTTO EVENTOS Brasil
                </Link>
              </li>
              <li>
                <Link href="/work-with-us" className="hover:text-gray-300">
                  Trabalhe com a gente
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xl font-bold">ILOTTO TECNOLOGIA</div>

            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/leomarzeuski"
                className="hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/leonardo-marzeuski-9148201b2/"
                className="hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            <div className="text-sm text-gray-400 text-center md:text-right">
              <p>© ILOTTO EVENTOS Brasil LTDA - CNPJ 00.000.000/0001-00</p>
              <p>
                R. Ficticia 6º andar, Vila Madalena, São Paulo/SP, CEP
                00.000-005
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
