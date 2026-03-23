import Navbar from "@/components/Navbar";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", "font-sans", geist.variable)}>
      <body className="">
        <div className="mx-auto p-4 sm:max-w-xl md:max-w-3xl xl:max-w-7xl">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
