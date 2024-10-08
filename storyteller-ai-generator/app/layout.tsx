import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/sections/navbar/Navbar";
import Footer from "@/app/components/sections/footer/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const navbarLinks = [
    { name: "Home", href: "/" },
    { name: "AI Story Teller", href: "/" },
  ];
  const footerLinks = [
    { name: "Contatti", href: "/contactpage" },
    { name: "About Me", href: "/aboutme" },
  ];

  return (
    <html lang="en">
      <Head>
        <title>Ai Story Teller</title>
        <meta name="description" content="AI based app to generate stories" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Navbar label="AI Story Teller" links={navbarLinks} />
        {children}
        <Footer
          label="&copy; 2024 My Website. All rights reserved."
          links={footerLinks}
        />
      </body>
    </html>
  );
}
