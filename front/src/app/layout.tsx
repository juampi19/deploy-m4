"use client";

import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar/Navbar";
import { Modal } from "./components/modal/Modal";
import { Footer } from "./components/footer/Footer";
import { CartProvider } from "./context/cart/CartProvider";
import { ClientOnly } from "./components/clientonly/ClientOnly";
import { AuthProvider } from "./context/auth/AuthProvider";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });
const font = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
       
          <AuthProvider>
            <CartProvider>
              <Navbar />
              <ToastContainer />
              {children}

              <Footer />
            </CartProvider>
          </AuthProvider>
    
      </body>
    </html>
  );
}
