import Navbar from "@/components/Navbar";
import "./globals.css";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
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
