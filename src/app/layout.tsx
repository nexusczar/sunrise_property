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
  title: "Sunrise Property | Real Estate & Interior Design",
  description:
    "Sunrise Property unites prime real estate advisory with bespoke architectural interior design. Featured developments in Greater Noida including Ashtech Presidential, Godrej Majesty, and Grandthum.",
  keywords: [
    "Sunrise Property",
    "Real Estate Greater Noida",
    "Ashtech Presidential",
    "Godrej Majesty",
    "Grandthum Group 108",
    "Interior Design Greater Noida",
    "Turnkey Interiors",
  ],
  openGraph: {
    title: "Sunrise Property | Real Estate & Interior Design",
    description:
      "Premier real estate brokerage and bespoke interior architecture in Greater Noida.",
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
      <body className="min-h-screen flex flex-col bg-[#0c0d0e] text-[#faf8f5] font-sans selection:bg-[#c5a059] selection:text-[#0c0d0e]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
