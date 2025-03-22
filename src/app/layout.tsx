import type { Metadata } from "next";
import { Manrope, Open_Sans } from "next/font/google";
import "./globals.css";
import ToTop from "./components/ToTop";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ensome",
  description: "Find true power in your data with Ensome",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${openSans.variable} antialiased`}>
        {children}
        <ToTop />
      </body>
    </html>
  );
}
