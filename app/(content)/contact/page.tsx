// app/contact/page.tsx
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">

        {/* Título */}
        <h1 className="text-6xl md:text-8xl font-black text-center mb-16 tracking-tighter">
          <span className="bg-linear-to-r text-neon-purple text-glow-purple bg-clip-text">
            CONTACTANOS
          </span>
        </h1>

        <div className="space-y-12 text-lg md:text-xl leading-relaxed font-medium text-gray-300">

          <p className="text-center text-xl">
            ¿Problema con una clave? ¿Quieres ser colaborador? ¿O solo quieres gritarnos que somos los mejores?
          </p>
          <p className="text-center text-2xl text-purple-400 font-bold">
            Acá estamos 24/7, sin excusas.
          </p>

          {/* Canales principales */}
          <div className="grid md:grid-cols-3 gap-8 my-16">
            <div className="border border-purple-800/50 bg-purple-900/10 rounded-xl py-10 text-center backdrop-blur-sm hover:border-purple-500 transition-all">
              <div className="text-5xl mb-4">Email</div>
              <p className="text-purple-400 font-bold text-base">gamingstoresupp@gmail.com</p>
              <p className="text-gray-500 text-sm mt-2">Respuesta en menos de 5 minutos</p>
            </div>

            <div className="border border-purple-800/50 bg-purple-900/10 rounded-xl py-10 text-center backdrop-blur-sm hover:border-purple-500 transition-all">
              <div className="text-5xl mb-4">Discord</div>
              <Link
                href="https://discord.gg/"
                target="_blank"
                className="text-purple-400 font-bold text-xl hover:underline"
              >
                discord.gg/anonimus
              </Link>
              <p className="text-gray-500 text-sm mt-2">Soporte directo + comunidad</p>
            </div>

            <div className="border border-purple-800/50 bg-purple-900/10 rounded-xl py-10 text-center backdrop-blur-sm hover:border-purple-500 transition-all">
              <div className="text-5xl mb-4">WhatsApp</div>
              <Link
                href="https://wa.me/571234567890"
                target="_blank"
                className="text-purple-400 font-bold text-xl hover:underline"
              >
                +57 123 4567 890
              </Link>
              <p className="text-gray-500 text-sm mt-2">Chat directo (solo texto)</p>
            </div>
          </div>

          <div className="text-center space-y-6">
            <p className="text-xl">
              No hacemos tickets. No te hacemos esperar.
            </p>
            <p className="text-2xl font-bold text-purple-400">
              Escribenos y lo resolvemos YA.
            </p>
          </div> 
        </div>
      </div>
    </div>
  );
}