"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E8E0CC] bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <Image
            src="/images/logo.png"
            alt="Cafetería Olivo"
            width={220}
            height={80}
            priority
            className="h-14 w-auto md:h-20"
          />
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-bold uppercase tracking-wide text-[#111827] md:flex lg:gap-10">
          <li>
            <Link href="/menu" className="transition hover:text-[#4F6F2A]">
              Menú
            </Link>
          </li>
          <li>
            <Link
              href="/promotions"
              className="transition hover:text-[#4F6F2A]"
            >
              Promociones
            </Link>
          </li>
          <li>
            <Link href="/about" className="transition hover:text-[#4F6F2A]">
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="#ubicacion" className="transition hover:text-[#4F6F2A]">
              Ubicación
            </Link>
          </li>
        </ul>

        <a
          href="https://wa.me/529171081821"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-[#111827] px-6 py-2 text-sm font-bold text-white transition hover:bg-[#4F6F2A] md:inline-block"
        >
          Realizar pedido
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full border border-[#E8E0CC] p-3 text-[#1F3D1B] md:hidden"
          aria-label="Abrir menú"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-[#E8E0CC] bg-white px-4 py-6 md:hidden">
          <ul className="flex flex-col gap-5 text-sm font-bold uppercase tracking-wide text-[#111827]">
            <li>
              <Link href="/menu" onClick={closeMenu}>
                Menú
              </Link>
            </li>
            <li>
              <Link href="/promotions" onClick={closeMenu}>
                Promociones
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={closeMenu}>
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="#ubicacion" onClick={closeMenu}>
                Ubicación
              </Link>
            </li>
          </ul>

          <a
            href="https://wa.me/529171081821"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block rounded-full bg-[#111827] px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-[#4F6F2A]"
          >
            Realizar pedido
          </a>
        </div>
      )}
    </header>
  );
}
