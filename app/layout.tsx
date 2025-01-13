import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
