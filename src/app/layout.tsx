import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { Red_Hat_Mono } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mariomolinaaraoz.com.ar'), // Base URL de tu sitio web
  title: "Arte en Acero: Galería de Proyectos | Explora Nuestro Trabajo",
  description: "Descubre la excelencia en acero a través de nuestra galería de proyectos, tablas informativas y detalles del alcance de un steel detailer.",
  openGraph: {
    title: 'Mario Molina Araoz - Personal Site',
    description: 'Welcome to the personal site of Mario Molina Araoz.',
    url: 'https://www.yoursite.com',
    images: [
      {
        url: '/logo.png',
        width: 600,
        height: 600,
        alt: 'Mario Molina Araoz Personal Site Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mario Molina Araoz - Personal Site',
    description: 'Welcome to the personal site of Mario Molina Araoz.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://www.mariomolinaaraoz.com.ar',
  },
  keywords: ['Steel, Detailer, Projects, Gallery, Tablas, Argentina, Planos, Construcción, Medidas, Peso, Medidas hierro angulo, Medidas hierro cuadrado, Medidas hierro redondo, Medidas hierro cuadrado, Medidas hierro te, Medidas planchuelas de hierro, Medidas Chapa Laminada Caliente, Medidas Chapa Laminada Fria, Medidas Chapa Galvanizada, Medidas Chapa Semillada, Medidas Perfil Doble Tee (IPN), Medidas Perfil Americano (IPA), Medidas Perfil Europeo (IPE), Medidas Perfil Grey (HEB), Medidas Perfil Normal U (UPN), Medidas Perfil U, Americano (UPA), Medidas Perfil C y U, Medidas Metal Desplegado Pesado, Medidas Tubos Estructurales, Tabla Resistencia Perfil IPN']
};

const mono = Red_Hat_Mono({ subsets: ["latin"] });

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className="dark">
      <body className={mono.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;