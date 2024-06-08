import type {Metadata} from "next";

import "./globals.css";
import {inter} from "@/fonts/fonts";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";



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
            <body className={`${inter.className}  m-auto`}>
            <Header/>
            {children}
            <Footer/>
            </body>
            </html>
    );
}
