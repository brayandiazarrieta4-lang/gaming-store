"use client";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import HideNavbarOnAuth from "@/features/auth/HideNavbarOnAuth";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-black">
        <HideNavbarOnAuth>
          <Navbar />
        </HideNavbarOnAuth>
        {children}
        <HideNavbarOnAuth>
        <Footer />
      </HideNavbarOnAuth>
      </body>
    </html>
  );
}