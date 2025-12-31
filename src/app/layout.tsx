import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sukoon | Peace Through Connection — Join for $1/month",
  description: "Sukoon reimagines humanitarian work as a living community where peace isn't just delivered—it's shared. For just $1 a month, join a movement that transforms giving into belonging.",
  keywords: ["charity", "humanitarian", "donation", "community", "peace", "giving", "impact"],
  openGraph: {
    title: "Sukoon | Peace Through Connection",
    description: "Join a movement that transforms giving into belonging. For just $1 a month.",
    type: "website",
    locale: "en_US",
    siteName: "Sukoon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sukoon | Peace Through Connection",
    description: "Join a movement that transforms giving into belonging. For just $1 a month.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${inter.variable}`}>
      <body className="antialiased font-body">
        {children}
      </body>
    </html>
  );
}
