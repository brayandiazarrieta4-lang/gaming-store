"use client";
import { useFetchGames } from "@/hooks/useFetchGames";
import { ProductCard } from "@/features/games/GameCard";
import Loading from "./loading";

export default function TiendaClient() {
  const { products, loading, error } = useFetchGames(true);

  // 🔵 Loading primero: bloquea TODO lo demás
  if (loading) {
    return <Loading />;
  }

  // 🔴 Error solo cuando terminó de cargar
  if (error || products.length === 0) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center py-32">
        <div className="text-center p-8 bg-black/80 border-2 border-red-600 rounded-lg shadow-2xl shadow-red-900/50">
          <h2 className="text-3xl font-extrabold text-red-500 mb-2">
            ERROR DE CONEXIÓN
          </h2>
          <p className="text-gray-400">
            No se pudieron cargar los datos de la tienda.
          </p>
        </div>
      </div>
    );
  }

  // 🟢 La tienda solo aparece cuando NO hay loading NI error
  return (
    <div className="min-h-screen bg-[#0a0a0a] py-12 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <h1
          className="text-5xl font-black text-white text-center mb-16 tracking-widest uppercase border-b-4 border-purple-600 pb-4 mx-auto max-w-lg"
          style={{ textShadow: "0 0 10px #a855f7, 0 0 20px #7e22ce" }}
        >
          ZONA DE JUEGOS
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}