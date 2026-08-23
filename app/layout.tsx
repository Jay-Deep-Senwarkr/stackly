import type { Metadata } from "next";
import { Fraunces, Archivo, Courier_Prime } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/ui/navbar-wrapper";
import LenisProvider from "@/components/providers/lenis-provider";
import SiteFooter from "@/components/site-footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
});

const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Stackly & Co. — Ecommerce Design, Cart Recovery & Campaigns",
    template: "%s | Stackly & Co.",
  },
  description:
    "Stackly & Co. designs premium storefronts, recovers abandoned carts, and runs marketing campaigns that bring buyers back. Free store audit for ecommerce brands.",
  keywords: [
    "ecommerce website design",
    "cart recovery",
    "abandoned cart emails",
    "ecommerce marketing campaigns",
    "conversion rate optimization",
    "online store redesign",
    "shopify design studio",
  ],
  openGraph: {
    title: "Stackly & Co. — Ecommerce Design, Cart Recovery & Campaigns",
    description:
      "Premium storefronts, recovered carts, and campaigns that turn traffic into repeat revenue. Get your free store audit.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${archivo.variable} ${courier.variable} h-full antialiased`}
    >
      <body className="grainy flex min-h-full flex-col bg-paper text-ink">
        <LenisProvider />
        <NavbarWrapper />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
