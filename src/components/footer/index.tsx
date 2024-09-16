import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer id="contato" className="bg-[#2c3e50] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Coluna 1 */}
        <div>
          <h2 className="text-xl font-semibold">Marcenaria</h2>
          <p className="mt-2">Transformando madeira em arte para você.</p>
          <div className="flex space-x-4 mt-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61564196402129"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={30}
                className="hover:text-blue-600 transition-colors duration-200"
              />
            </Link>
            <Link
              href="https://www.instagram.com/dw23_marcenaria/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={30}
                className="hover:text-pink-500 transition-colors duration-200"
              />
            </Link>
            <Link
              href="https://wa.me/5547997567297?text=Olá%20DWMarcenaria!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20marcenaria."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp
                size={30}
                className="hover:text-green-500 transition-colors duration-200"
              />
            </Link>
          </div>
        </div>

        {/* Coluna 2 */}
        <div>
          <h3 className="text-lg font-semibold">CONTATO</h3>
          <p className="mt-2">+55 47 99756-7297</p>
          <p>dwmarcenaria23@gmail.com</p>
        </div>

        {/* Coluna 3 */}
        <div>
          <h3 className="text-lg font-semibold">REDES</h3>
          <p className="mt-2">Seu e-mail para contato</p>
          <form className="mt-4 flex flex-col">
            <input
              type="email"
              placeholder="Digite seu e-mail aqui"
              className="p-2 rounded-md border border-gray-300 mb-4 text-black"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Enviar mensagem para nós
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
