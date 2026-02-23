import type { Metadata } from "next";
import { Roboto, Playfair_Display } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CakeKL — KL's Finest Artisanal Cakes",
  description:
    "CakeKL crafts bespoke artisanal cakes for KL & PJ. Order custom wedding cakes, birthday cakes, and luxury patisserie creations.",
  keywords: "custom cakes KL, artisan cakes Kuala Lumpur, wedding cakes KL, birthday cakes PJ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${roboto.variable} ${playfair.variable} antialiased bg-[#121212] text-[#F5ECD7]`}>
        {children}
      </body>
    </html>
  );
}
