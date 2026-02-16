import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Josefin_Sans, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import SmoothScroll from "@/components/ui/smooth-scroll";
import { cn } from "@/lib/utils";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cafe Ara | Authentic Sri Lankan & Indian Cuisine",
  description: "Taste the warmth of Cafe Ara. A culinary journey through Sri Lankan spices, Indian classics, and hand-pulled noodles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "min-h-full flex flex-col antialiased bg-[#FAF5EE] text-[#2D2A26]",
          cormorant.variable,
          playfair.variable,
          josefin.variable,
          lato.variable,
          "font-sans"
        )}
      >
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
