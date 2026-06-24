// File: src/app/layout.tsx
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

// NATIVE SEO METADATA CONFIGURATION
export const metadata: Metadata = {
  // Sets absolute base path for production search crawler indexes
  metadataBase: new URL("https://cwc-blog-two.vercel.app"),
  
  title: {
    default: "My Tech Journal | Interactive Engineering Log",
    template: "%s | My Tech Journal" // Auto-formats nested titles: "Post Name | My Tech Journal"
  },
  description: "An interactive, high-fidelity engineering log tracking software architecture and deployments.",
  
  // Apple iOS PWA Optimization Configurations
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Journal",
  },
  
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/icon-192x192.png",
  },

  // OpenGraph Protocol Data for search indexing and social sharing displays
  openGraph: {
    title: "My Tech Journal",
    description: "An interactive, high-fidelity engineering log.",
    url: "https://cwc-blog-two.vercel.app",
    siteName: "My Tech Journal",
    locale: "en_US",
    type: "website",
  },
  
  robots: {
    index: true,
    follow: true,
  }
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
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      {/* Notice: The manual <head> tag is completely gone. 
        Next.js natively injects metadata, viewports, apple meta tags, 
        and your dynamic manifest file behind the scenes automatically!
      */}
      <body className="bg-[#F3F2EF] text-[#1C1A17] antialiased">
        <PWARegister /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}