// src/app/layout.tsx
import "./globals.css";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google"; 
import Footer from "@/components/sandbox/Footer";
import PWARegister from "@/components/PWARegister";
import type { Metadata, Viewport } from "next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "My Tech Journal",
  description: "An interactive, high-fidelity engineering log.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Journal",
  },
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/icon-192x192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#F5F4F0",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <head>
        {/* Explicit manifest link - this is the key fix */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#F5F4F0" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body className="bg-[#F3F2EF] text-[#1C1A17] antialiased">
        <PWARegister /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}