"use client";

import Link from "next/link";
import Img from "next/image"
import { VscAccount } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import router from "next/router";

import { authClient } from "@/lib/Auth/auth-client";
import { MdOutlineSettingsPower } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSecondary, setShowSecondary] = useState(false);

  // Obtener sesión desde Better Auth
  const { data: session, isPending } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut();
    window.location.href = "/login";
  };

  // Logica barra de búsqueda
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Logica scroll navbar secundario
  useEffect(() => {
    const handleScroll = () => {
      setShowSecondary(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR PRINCIPAL*/}
      <nav className="w-full bg-linear-to-br from-purple-900 via-black to-purple-900 border-b border-purple-800">
        <div className="max-w-7xl mx-auto px-10 py-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 transition duration-300 hover:scale-110"
          >
            <Img src="/logo.svg" alt="Mi Imagen" width={120} height={120}/>
            <span className="text-3xl font-black text-neon-purple text-glow-purple text-purple-300 tracking-wider">
              Gaming Store
            </span>
          </Link>

          {/* Barra de búsqueda */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-10">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="¿Qué estás buscando?"
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-purple-700 rounded-full text-white placeholder-purple-400 focus:outline-none focus:border-purple-400 transition pr-16"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-purple-600 rounded-full hover:bg-purple-500 transition"
              >
                <RiSearchLine className="w-6 h-6 text-white" />
              </button>
            </div>
          </form>

          {/* Iconos */}
          <div className="flex items-center gap-12 text-purple-300">
            {/* SI NO HAY SESIÓN → mostrar "Iniciar sesión" */}
            {!session && !isPending && (
              <Link
                href="/login"
                className="text-neon-purple text-glow-purple text-purple-300 hover:text-white font-semibold"
              >
                Iniciar sesión
              </Link>
            )}

            {/* SI HAY SESIÓN → mostrar Mi cuenta */}
            {session && (
              <>
                <Link
                  href="/dashboard"
                  className="flex flex-col items-center gap-1 transition duration-300 hover:scale-110 hover:text-purple-100"
                >
                  <VscAccount className="w-8 h-8" />
                  <span className=" text-neon-purple text-glow-purple text-xs font-semibold">
                    Mi cuenta
                  </span>
                </Link>

                {/* Carrito siempre visible */}
                <Link
                  href="/cart"
                  className="flex flex-col items-center gap-1 transition duration-300 hover:scale-110 hover:text-purple-100 relative"
                >
                  <FaCartShopping className="w-8 h-8" />
                  <span className="text-neon-purple text-glow-purple text-xs font-semibold">
                    Mi carrito
                  </span>
                </Link>

                {/* Botón cerrar sesión */}
                
                <button
                  onClick={handleSignOut}
                  className="text-neon-purple text-glow-purple flex flex-col items-center gap-1 text-sm font-semibold hover:scale-110 hover:text-white transition"
                ><MdOutlineSettingsPower className="w-8 h-8" /> 
                  Cerrar sesión
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* NAVBAR SECUNDARIO */}
      <nav
        className={`w-full bg-black/95 border-b border-purple-900 fixed top-0 left-0 z-50 transition-all duration-300 ${
          showSecondary ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-10">
          <ul className="flex items-center justify-between gap-10 py-5 text-purple-300 font-bold text-sm uppercase tracking-widest">
            <li>
              <Link
                href="/"
                className="text-neon-purple text-glow-purple hover:text-white transition"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/games"
                className="text-neon-purple text-glow-purple hover:text-white transition"
              >
                Juegos
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-neon-purple text-glow-purple hover:text-white transition"
              >
                Contacto
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-neon-purple text-glow-purple hover:text-white transition"
              >
                Acerca de
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
