'use client';
import { signUpAction } from "@/lib/Auth/actions/auth-actions";
import { signInSocial } from "@/lib/Auth/actions/auth-actions";
import Img from 'next/image'
export default function RegisterForm() {
  return (
    <>
      {/* Fondo gamer idéntico al login */}
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 relative overflow-hidden">
        {/* Grid + gradiente sutil */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-transparent to-purple-900"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="w-full max-w-md relative z-10">
          {/* Card con borde neón */}
          <div className="bg-black/90 border-2 border-purple-600/60 rounded-xl shadow-2xl p-8 mt-5 md:p-10 backdrop-blur-xl shadow-purple-600/20">
            {/* Título épico */}
            <h1
              className="text-4xl md:text-5xl font-black bg-clip-text 
                         bg-linear-to-rtext-neon-purple text-glow-purple text-purple-300 mb-8 text-center tracking-wider"
            >
              CREAR CUENTA
            </h1>

            <form action={signUpAction} className="space-y-6">
              {/* Nombre / Username */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="GAMERTAG"
                  required
                  className="w-full px-5 py-4 bg-zinc-900/80 border border-purple-800/50 rounded-lg 
                           text-purple-100 placeholder-purple-600/70 font-medium tracking-wide
                           focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
                           transition-all duration-300 uppercase text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="PLAYER@EMAIL.COM"
                  required
                  className="w-full px-5 py-4 bg-zinc-900/80 border border-purple-800/50 rounded-lg 
                           text-purple-100 placeholder-purple-600/70 font-medium tracking-wide
                           focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
                           transition-all duration-300 uppercase text-sm"
                />
              </div>

              {/* Password */}
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="ENTER PASSCODE"
                  required
                  className="w-full px-5 py-4 bg-zinc-900/80 border border-purple-800/50 rounded-lg 
                           text-purple-100 placeholder-purple-600/70 font-medium tracking-wide
                           focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
                           transition-all duration-300 text-sm"
                />
              </div>

              {/* Botón GAMER full Morado FIJO */}
              <button
                type="submit"
                className="w-full bg-purple-600 text-white font-bold text-lg py-4 rounded-lg
                         shadow-lg shadow-purple-600/50 tracking-wider uppercase
                         transition-all duration-200 transform hover:scale-105 active:scale-95
                         border-2 border-purple-500"
              >
                CREAR CUENTA
              </button>
            </form>
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-purple-800/40"></div>
              <span className="text-neon-purple text-glow-purple text-purple-300 text-sm font-semibold">
                O REGÍSTRATE CON
              </span>
              <div className="flex-1 h-px bg-purple-800/40"></div>
            </div>

            <div className="space-y-4">
              <form action={async () => await signInSocial("google")}>
                <button
                  type="submit"
                  className="w-full bg-white/10 border border-white/20 text-white py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-white/20 transition"
                >
                  <Img src="/google.svg" alt="Google" width={'10'} height={'10'} />
                  Continuar con Google
                </button>
              </form>

              <form action={async () => await signInSocial("facebook")}>
                <button
                  type="submit"
                  className="w-full bg-blue-600/70 border border-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-blue-600 transition"
                >
                  <Img src="/facebook.svg" alt="Facebook" width={'10'} height={'10'} />
                  Continuar con Facebook
                </button>
              </form>
            </div>

            {/* Texto adicional */}
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm font-medium">
                Ya tienes una cuenta?{" "}
                <a
                  href="/login"
                  className="text-neon-purple text-glow-purple text-purple-300 hover:text-purple-400 font-bold underline underline-offset-4"
                >
                  INICIAR SESION
                </a>
              </p>
            </div>
          </div>

          {/* Footer gamer */}
          <div className="mt-8 text-center">
            <p className="text-purple-800/60 text-xs font-mono mb-5 tracking-widest">
              © 2025 ULTIMATE GAMING PLATFORM | READY PLAYER ONE
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
