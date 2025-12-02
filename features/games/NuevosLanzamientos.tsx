"use client";
import React from "react";

export default function NuevosLanzamientos() {
  const lanzamientos = [
    "/nuevos1.jpg",
  ];

  const doble = [...lanzamientos, ...lanzamientos];

  return (
    <div className="nl-section">
      <h2 className="nl-title">
        MAS <span className="amarillo">VENDIDOS🥵</span>
      </h2>

      <div className="nl-wrap">
        <div className="nl-track">
          {doble.map((src, i) => (
            <div key={i} className="nl-card">
              <img src={src} className="nl-img" alt={`Lanzamiento ${i}`} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* ---- TÍTULO ---- */
        .nl-title {
          font-size: 28px;
          font-weight: 900;
          color: white;
          text-align: center;
          margin-bottom: 20px;
        }

        .amarillo {
          color: #ffe400;
        }

        /* ---- CONTENEDOR ---- */
        .nl-section {
          margin-top: 40px;
          padding: 10px 0;
          align-items: center;
          justify-content: center;
        }

        /* ---- CARRUSEL ---- */
        .nl-wrap {
          width: 100%;
          overflow: hidden;
align-items: center;
justify-content: center;
        }

        
        .nl-track {
          display: flex;
          gap: 18px;
          animation: scrollInfinite 22s linear infinite;
          align-items: center;
          justify-content: center;
        }
          .nl-wrap {
    width: 80%; /* O el ancho que desees */
    overflow: hidden;
    /* ESTA LÍNEA CENTRA HORIZONTALMENTE EL BLOQUE NL-WRAP EN LA PANTALLA */
    margin: 0 auto; 
    /* ... el resto del código ... */
}

        /* Animación infinita real */
        @keyframes scrollInfinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
          align-items: center;
          justify-content: center;  
        }

        /* ---- TARJETA ---- */
        .nl-card {
          min-width: 260px;
          height: 350px;
          background: rgba(255,255,255,0.04);
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        /* HOVER: agranda la tarjeta */
        .nl-card:hover {
          transform: scale(1.12);
          z-index: 10;
          box-shadow: 0 0 15px #b854ff;
          align-items: center;
          justify-content: center;
        }

        /* ---- IMAGEN ---- */
        .nl-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          align-items: center;
          justify-content: center;
        }

        /* Responsivo */
        @media (max-width: 600px) {
          .nl-card {
            min-width: 180px;
            height: 120px;
          }
        }
      `}</style>
    </div>
  );
}
