import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppConcierge from "@/components/WhatsAppConcierge";

const serifFont = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Azimute — Your Next Horizon | ASL",
  description:
    "Discover Azimute Residences by ASL in Vila Vitória, Mauá. Apartments featuring 63 and 67 m², 2 bedrooms, 1 master suite, and private gourmet balconies.",
  keywords: [
    "Azimute Residences",
    "ASL Developer",
    "Vila Vitória Mauá",
    "Luxury Apartments Mauá",
    "ASL Development",
  ],
  openGraph: {
    title: "Azimute — Your Next Horizon | ASL",
    description:
      "Discover Azimute Residences by ASL in Vila Vitória, Mauá. Apartments featuring 63 and 67 m², 2 bedrooms, 1 master suite, and private gourmet balconies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#181716] font-sans selection:bg-[#E2D7C5]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppConcierge />
      </body>
    </html>
  );
}
