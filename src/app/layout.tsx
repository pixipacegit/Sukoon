import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
