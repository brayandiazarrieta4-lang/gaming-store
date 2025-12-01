// app/about/page.tsx
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        {/* Título con efecto neon */}
        <h1 className="text-6xl md:text-8xl font-black text-center mb-10 tracking-tighter">
          <span className="bg-linear-to-r text-neon-purple text-glow-purple from-purple-600 via-purple-500 to-pink-600 bg-clip-text ">
            GAMING STORE
          </span>
        </h1>

        <div className="space-y-8 text-lg md:text-xl leading-relaxed font-medium text-gray-300">
          <p className="text-center">
            Bienvenido al campo de batalla definitivo del gaming en Latinoamérica.
          </p>

          <p>
            GAMING STORE nació en 2025 con una sola misión: 
            <span className="text-purple-500 font-bold"> llevar los mejores títulos al precio más bajo y con entrega inmediata</span>.
            Cansados de tiendas lentas, precios inflados y soporte fantasma, decidimos crear el store que todo gamer merece.
          </p>

          <div className="grid md:grid-cols-3 gap-8 my-12">
            <div className="border border-purple-800/50 bg-purple-900/10 rounded-xl p-8 text-center backdrop-blur-sm">
              <div className="text-5xl mb-4">⚡️</div>
              <h3 className="text-2xl font-bold text-purple-500">Entrega Instantánea</h3>
              <p className="text-gray-400 mt-2">Claves directas al correo en segundos</p>
            </div>
            <div className="border border-purple-800/50 bg-purple-900/10 rounded-xl p-8 text-center backdrop-blur-sm">
              <div className="text-5xl mb-4">💀</div>
              <h3 className="text-2xl font-bold text-purple-500">Precios Letales</h3>
              <p className="text-gray-400 mt-2">Siempre el mejor precio garantizado</p>
            </div>
            <div className="border border-purple-800/50 bg-purple-900/10 rounded-xl p-8 text-center backdrop-blur-sm">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-purple-500">Soporte 24/7</h3>
              <p className="text-gray-400 mt-2">Estamos cuando nos necesitas, siempre</p>
            </div>
          </div>

          <p className="text-center text-xl">
            No somos solo una tienda. Somos tu cuartel general.
          </p>
        </div>
      </div>
    </div>
  );
}