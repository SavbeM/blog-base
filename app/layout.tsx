import type { Metadata } from "next";

import "./globals.css";
import {inter} from "@/fonts/fonts";
import {Header} from "@/components/Header";



export const metadata: Metadata = {
  title: "blog-base",
  description: "Blog hosting service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
      {children}
      </body>
    </html>
  );
}
