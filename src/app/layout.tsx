import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sukoon | Peace, One Dollar at a Time",
  description: "Sukoon reimagines humanitarian work as a living community where peace isn't just delivered—it's shared. For just $1 a month, join a movement that transforms giving into belonging.",
  keywords: ["charity", "humanitarian", "donation", "community", "peace", "giving", "impact"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
