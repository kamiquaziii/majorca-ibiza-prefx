import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  DM_Sans,
  Playfair_Display,
  Pinyon_Script,
} from "next/font/google";
import { Providers } from "@/components/providers";
import { SourceEasterEgg } from "@/components/source-easter-egg";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: ["400"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Majorca & Ibiza Pre-F(x) 2026 | MIT Sloan",
  description:
    "Six nights. Two islands. MIT Sloan incoming first-years — Majorca & Ibiza Pre-F(x), Aug 23–29, 2026.",
  openGraph: {
    title: "Majorca & Ibiza Pre-F(x) 2026",
    description:
      "A summer on the Balearic Sea. Six nights, two islands, infinite stories.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5ebe0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${pinyon.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased">
        <SourceEasterEgg />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
