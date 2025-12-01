"use client";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center py-32">
      <div
        className="text-3xl font-extrabold text-cyan-400 animate-pulse tracking-widest"
        style={{
          textShadow: "0 0 8px #00FFFF, 0 0 15px #00BFFF",
        }}
      >
        CARGANDO DATASTREAM...
      </div>
    </div>
  );
}