// app/dashboard/page.tsx
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { FaCartFlatbed, FaHeartCirclePlus } from "react-icons/fa6";
import { GiBurningSkull } from "react-icons/gi";
import { IoMdTrophy } from "react-icons/io";
import { LiaGamepadSolid } from "react-icons/lia";
import { LuPackageSearch } from "react-icons/lu";
import { MdSettings } from "react-icons/md";

export default async function DashboardPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  const user = session?.user;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-purple-900/60 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            DASHBOARD DE COMBATE
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm uppercase tracking-wider">Warrior:</span>
            <span className="font-bold text-xl tracking-tighter bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              {user?.name || user?.email?.split("@")[0] || "ANÓNIMO"}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-linear-to-br from-purple-900/20 to-black border border-purple-800/50 rounded-xl p-10 text-center hover:border-purple-500 transition-all duration-300">
            <LiaGamepadSolid className="text-7xl mx-auto mb-5 text-purple-400" />
            <p className="text-4xl font-black text-purple-400">47</p>
            <p className="text-gray-400 mt-3 text-sm uppercase tracking-widest">Juegos en biblioteca</p>
          </div>

          <div className="bg-linear-to-br from-purple-900/20 to-black border border-purple-800/50 rounded-xl p-10 text-center hover:border-purple-500 transition-all duration-300">
            <FaCartFlatbed className="text-7xl mx-auto mb-5 text-purple-400" />
            <p className="text-4xl font-black text-purple-400">12</p>
            <p className="text-gray-400 mt-3 text-sm uppercase tracking-widest">Órdenes completadas</p>
          </div>

          <div className="bg-linear-to-br from-purple-900/20 to-black border border-purple-800/50 rounded-xl p-10 text-center hover:border-purple-500 transition-all duration-300">
            <GiBurningSkull className="text-7xl mx-auto mb-5 text-purple-400" />
            <p className="text-4xl font-black text-purple-400">$1.247.890</p>
            <p className="text-gray-400 mt-3 text-sm uppercase tracking-widest">Gastado en total</p>
          </div>

          <div className="bg-linear-to-br from-purple-900/20 to-black border border-purple-800/50 rounded-xl p-10 text-center hover:border-purple-500 transition-all duration-300 ring-2 ring-purple-500/40">
            <IoMdTrophy className="text-7xl mx-auto mb-5 text-purple-400 animate-pulse" />
            <p className="text-4xl font-black bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ELITE</p>
            <p className="text-gray-400 mt-3 text-sm uppercase tracking-widest">Rango actual</p>
          </div>
        </div>

        {/* Acciones rápidas */}
        <div className="grid md:grid-cols-3 gap-8">
          <Link
            href="/profile"
            className="group bg-purple-900/10 border-2 border-purple-600 rounded-xl p-12 text-center hover:bg-purple-900/20 hover:border-purple-400 hover:scale-105 transition-all duration-300"
          >
            <MdSettings className="text-8xl mx-auto mb-6 text-purple-500 group-hover:text-purple-300 transition-colors" />
            <h3 className="text-2xl font-bold text-purple-400">Mi Perfil</h3>
            <p className="text-gray-500 mt-3">Editar datos de guerrero</p>
          </Link>

          <Link
            href="/orders"
            className="group bg-purple-900/10 border-2 border-purple-600 rounded-xl p-12 text-center hover:bg-purple-900/20 hover:border-purple-400 hover:scale-105 transition-all duration-300"
          >
            <LuPackageSearch className="text-8xl mx-auto mb-6 text-purple-500 group-hover:text-purple-300 transition-colors" />
            <h3 className="text-2xl font-bold text-purple-400">Mis Órdenes</h3>
            <p className="text-gray-500 mt-3">Historial y claves de activación</p>
          </Link>

          <Link
            href="/wishlist"
            className="group bg-purple-900/10 border-2 border-purple-600 rounded-xl p-12 text-center hover:bg-purple-900/20 hover:border-purple-400 hover:scale-105 transition-all duration-300"
          >
            <FaHeartCirclePlus className="text-8xl mx-auto mb-6 text-purple-500 group-hover:text-purple-300 transition-colors" />
            <h3 className="text-2xl font-bold text-purple-400">Lista de Deseos</h3>
            <p className="text-gray-500 mt-3">Juegos que dominarás pronto</p>
          </Link>
        </div>
      </div>
    </div>
  );
}