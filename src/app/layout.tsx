import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarqueeBanner from "@/components/MarqueeBanner";
import CartSidebar from "@/components/CartSidebar";
import { CartProvider } from "@/lib/cart-context";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "ZENJI — Anime Streetwear Australia",
  description:
    "Limited anime streetwear from Australia. Japanese-inspired graphic tees. No restocks. Ever.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <CartProvider>
          <MarqueeBanner />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  );
}
