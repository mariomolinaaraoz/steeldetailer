import "./globals.css";
import type { Metadata } from "next";
import { Red_Hat_Mono } from "next/font/google";

// export const metadata: Metadata = {
//   title: "Mario Molina - Steel Detailer",
//   description:"Discover excellence in structural design with steeldetailer.com.ar. Explore our Steel Detailer project gallery, where every detail comes to life. We share exclusive images of fabrication processes, an informative blog and process videos.",
// };

export const metadata: Metadata = {
  title: 'Mario Molina - Steel Detailer',
  description: '...',
}

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
        <body className={mono.className}>{children}</body>
      </html>
    </>
  );
}
