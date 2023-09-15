import "../styles/globals.css";
import Header from "@/components/GroupGenerator";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto_Slab } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto_Slab({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="flex h-full flex-col bg-zinc-400">
        <main>{children}</main>
      </body>
    </html>
  );
}
