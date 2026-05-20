import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
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
      "A summer on the Balearic Sea. Six nights, two islands, sixty Sloanies.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#071422",
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
      className={`${cormorant.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
