import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... otras configuraciones si las tienes
  images: {
    // Lista de dominios de los que permites cargar imágenes.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '6921f1d4512fb4140be1d483.mockapi.io',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com', // Dominio para el fallback de tu onError
      },

      // Si tienes otros dominios de imágenes (como Amazon S3, Imgur, etc.), agrégalos aquí.
    ],
  },
};

module.exports = nextConfig;
