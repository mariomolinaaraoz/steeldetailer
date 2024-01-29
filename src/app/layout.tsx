import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { Red_Hat_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Arte en Acero: Galería de Proyectos | Explora Nuestro Trabajo",
  description:"Descubre la excelencia en acero a través de nuestra galería de proyectos, tablas informativas y detalles del alcance de un steel detailer.",
};

const mono = Red_Hat_Mono({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <meta property="og:url" content="https://steeldetailer.com.ar"></meta>
        <meta property="og:image" content="/logo.png" />
        <meta property="twitter:image" content="/logo.png" />
      </head>
      <html lang="en" className="dark">
        <body className={mono.className}>
          {children}
          <Analytics />
        </body>
      </html>
    </>
  );
}