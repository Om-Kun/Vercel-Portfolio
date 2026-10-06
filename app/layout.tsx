import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Om Salunke - Portfolio",
  description: "Clean portfolio using Obsidian UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth h-full">
      <body className={`${inter.className} min-h-full flex flex-col bg-background text-foreground antialiased selection:bg-white selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
