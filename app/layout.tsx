import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { RecoilRoot } from "recoil";
export const metadata: Metadata = {
  title: "e-CarHub",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`relative`}>
        <Navbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
