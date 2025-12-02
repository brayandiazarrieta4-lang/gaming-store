import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... otras configuraciones si las tienes
  images: {
    // Lista de dominios de los que permites cargar imágenes.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "6921f1d4512fb4140be1d483.mockapi.io",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com", // Dominio para el fallback de tu onError
      },
      {
        protocol: "https",
        hostname: "media.vandal.net",
      },

      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "i.3djuegos.com",
      },
      {
        protocol: "https",
        hostname: "wallpapers.com",
      },
      {
        protocol: "https",
        hostname: "sm.ign.com",
      },
      {
        protocol: "https",
        hostname: "image.api.playstation.com",
      },
      {
        protocol: "https",
        hostname: "images8.alphacoders.com",
      },
      {
        protocol: "https",
        hostname: "4kwallpapers.com",
      },
      {
        protocol: "https",
        hostname: "images7.alphacoders.com",
      },
      {
        protocol: "https",
        hostname: "grindhousevideo.com",
      },
      {
        protocol: "https",
        hostname: "www.itl.cat",
      },
      {
        protocol: "https",
        hostname: "xboxwire.thesourcemediaassets.com",
      },
      {
        protocol: "https",
        hostname: "assets.2k.com",
      },



      // Si tienes otros dominios de imágenes (como Amazon S3, Imgur, etc.), agrégalos aquí.
    ],
  },
};

module.exports = nextConfig;
