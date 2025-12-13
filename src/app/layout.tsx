import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AtomCV | Deep Tech Portfolio",
  description: "Engineering Intelligence. Autonomous Agents & Sustainable Energy Infrastructures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "font-sans antialiased bg-slate-950 text-slate-100")}>{children}</body>
    </html>
  );
}
