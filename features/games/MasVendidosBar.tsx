"use client";
import React, { ReactNode } from "react";
// Ya no necesitamos 'Image' ya que ProductCard lo maneja

interface MasVendidosBarProps {
    children: ReactNode; // Acepta el array de ProductCard
}

export default function MasVendidosBar({ children }: MasVendidosBarProps) {
    
    // Convertimos los hijos a un array y lo duplicamos para el efecto de carrusel infinito CSS
    const childrenArray = React.Children.toArray(children);
    const dobleChildren = [...childrenArray, ...childrenArray];
    
    // ¡La lista 'const juegos = [...]' ha sido eliminada!

    return (
        <div className="mv-wrap">
            <h2 className="mv-title">
                JUEGOS <span className="mv-highlight">DIGITALES🔥🎮</span>
            </h2>
            <div className="mv-track">
                {/* Mapeamos los hijos duplicados */}
                {dobleChildren.map((child, index) => (
                    // CLAVE: Envolvemos CADA ProductCard con la clase 'mv-card'
                    // Esto aplica el CSS de carrusel (ancho, animación, hover) a tu tarjeta.
                    <div key={index} className="mv-card"> 
                        {child}
                    </div>
                ))}
            </div>

            <style jsx>{`
                /* Se añade el estilo del título y se corrigen algunos nombres de clase */
                .mv-title {
                    color: #f2f2f2;
                    font-size: 1.8rem;
                    font-weight: 800;
                    margin-bottom: 20px;
                    text-align: center;
                }

                .mv-highlight { /* Reemplaza a 'amarillo' */
                    color: #ffe100;
                }
                
                /* ----- CONTENEDOR PRINCIPAL ----- */
                .mv-wrap {
                    overflow: hidden;
                    width: 100%;
                    padding: 10px 0;
                    align-items: center;
          justify-content: center;  
                }

                /* ----- CARRIL ANIMADO ----- */
                .mv-track {
                    display: flex;
                    gap: 22px;
                    animation: mvScroll 25s linear infinite;
                }

                /* ANIMACIÓN INFINITA REAL (sin cortes) */
                @keyframes mvScroll {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                
                /* ----- TARJETAS (ENVOLTURAS DE ProductCard) ----- */
                .mv-card {
                    /* El ancho DEBE coincidir con el tamaño de tu ProductCard */
                    width: 220px; 
                    min-width: 300px;
                    
                    /* Todos los estilos de fondo y hover de la envolutra */
                    background: rgba(255,255,255,0.05);
                    border-radius: 14px;
                    padding: 12px;
                    position: relative;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    cursor: pointer;
                    
                }

                /* EFECTO HOVER - ZOOM COMPLETO (Se aplica a la envoltura) */
                .mv-card:hover {
                    transform: scale(1.12);
                    z-index: 5;
                    box-shadow: 0 0 20px #9e45ff;
                }

                /* ⚠️ NOTA: Los estilos internos de ProductCard (como la imagen, precios, etc.)
                   DEBEN ser manejados con Tailwind/CSS Modules en ProductCard.tsx.
                   Si necesitas más estilos específicos del carrusel, añádelos aquí. 
                   El resto del CSS ha sido eliminado porque ProductCard lo reemplazó.
                   
                */

                /* Si tu ProductCard es más grande, ajusta los valores de width/min-width y scale. */
            `}</style>
        </div>
    );
}