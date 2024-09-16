"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center p-4 relative">
          <Link href="#home" className="text-2xl font-bold">
            DWMarcenaria
          </Link>
          <button
            className="lg:hidden text-2xl absolute right-4 top-4 z-50"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div
            className={`lg:flex lg:space-x-6 lg:space-y-0 lg:relative lg:items-center lg:flex-row lg:bg-transparent lg:w-auto
                top-0 left-0 w-full space-y-4 bg-gray-800  fixed flex-col transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <Link
              href="#home"
              className="block lg:inline-block hover:text-gray-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#sobre"
              className="block lg:inline-block hover:text-gray-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="#galeria"
              className="block lg:inline-block hover:text-gray-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Galeria
            </Link>
            <Link
              href="#servicos"
              className="block lg:inline-block hover:text-gray-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </Link>
            <Link
              href="#contato"
              className="block lg:inline-block hover:text-gray-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

{
  /* <div className="space-x-6">
<Link
  href="#home"
  className="hover:text-gray-400 transition-colors"
>
  Home
</Link>
<Link
  href="#sobre"
  className="hover:text-gray-400 transition-colors"
>
  Sobre
</Link>
<Link
  href="#galeria"
  className="hover:text-gray-400 transition-colors"
>
  Galeria
</Link>
<Link
  href="#servicos"
  className="hover:text-gray-400 transition-colors"
>
  Serviços
</Link>
<Link
  href="#contato"
  className="hover:text-gray-400 transition-colors"
>
  Contato
</Link>
</div> */
}
