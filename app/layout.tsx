import type { Metadata } from "next";
import { Geist, Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/lib/ModalContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Divine Journeys | Ayodhya & Varanasi Tourism",
  description: "Experience the soul of India with curated spiritual journeys to Ayodhya, Varanasi, and Prayagraj. VIP Darshan, expert guides, and luxury stays.",
  keywords: ["Ayodhya Tourism", "Varanasi Tour Packages", "Kashi Vishwanath Darshan", "Ram Mandir Ayodhya", "Spiritual Tours India"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${geistSans.variable} ${roboto.variable} ${playfair.variable} antialiased font-sans bg-background text-foreground`}>
        <ModalProvider>
          <Navbar />
          {children}
          <Footer />
          <FloatingActions />
        </ModalProvider>
      </body>
    </html>
  );
}
