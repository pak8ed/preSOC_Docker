import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Header } from "@/components/header";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SNCL",
  description: "Adhérents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "overflow-x-hidden")}>
        <div className="flex flex-col w-[100vw] h-[100vh]">
          <Header />
          <Navbar className="w-[236px] shrink-0 fixed left-0 top-[100px]" />
          <div className="flex relative left-[236px] top-[100px] w-[calc(100vw-236px-22px)]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
