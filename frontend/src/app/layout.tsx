// File: src/app/layout.tsx
import "./globals.css";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google"; 
import Footer from "@/components/sandbox/Footer";
import PWARegister from "@/components/PWARegister";
import type { Metadata, Viewport } from "next";

// OPTIMIZED: Added display: "swap" to eliminate render-blocking text flashes (FOUC / CLS)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

// NATIVE SEO METADATA CONFIGURATION
export const metadata: Metadata = {
  metadataBase: new URL("https://cwc-blog-two.vercel.app"),
  
  title: {
    default: "My Tech Journal | Interactive Engineering Log",
    template: "%s | My Tech Journal" 
  },
  description: "An interactive, high-fidelity engineering log tracking software architecture and deployments.",
  
  // OPTIMIZED: Formally register the PWA Web App Manifest for browser detection
  manifest: "/manifest.json",

  // Apple iOS PWA Optimization Configurations
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Journal",
  },
  
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },

  // OpenGraph Protocol Data 
  openGraph: {
    title: "My Tech Journal",
    description: "An interactive, high-fidelity engineering log.",
    url: "https://cwc-blog-two.vercel.app",
    siteName: "My Tech Journal",
    locale: "en_US",
    type: "website",
  },

  // OPTIMIZED: Added explicit Twitter Card configurations to handle social card parser formatting
  twitter: {
    card: "summary_large_image",
    title: "My Tech Journal",
    description: "An interactive, high-fidelity engineering log.",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// NATIVE VIEWPORT CONFIGURATION
export const viewport: Viewport = {
  themeColor: "#F5F4F0",
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // OPTIMIZED: Included standard font variables along with standard suppressHydrationWarning 
    // to prevent browser extensions (like dark mode togglers or password managers) from throwing console mismatch errors
    <html 
      lang="en" 
      className={`${playfair.variable} ${plusJakarta.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[#F3F2EF] text-[#1C1A17] antialiased min-h-screen flex flex-col">
        <PWARegister /> 
        {/* OPTIMIZED: Enclosed structural children in a main layout layout-grow wrapper */}
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}