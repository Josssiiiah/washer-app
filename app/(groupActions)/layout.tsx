import "../../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs/app-beta";
import Header from "@/components/Header";

// Import client function into the body of the server function
// Pass in the response from the server to this funcction

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
    // <html lang="en" className={roboto.className}>

    <body className="flex h-full flex-col bg-zinc-400">
      <ClerkProvider>
        <main>{children}</main>
      </ClerkProvider>
    </body>
    // </html>
  );
}
