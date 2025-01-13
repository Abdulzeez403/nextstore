import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "NextStore",
  description: "The best place to buy stuff",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container mx-auto px-2 md:px-6 lg:px-6">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
