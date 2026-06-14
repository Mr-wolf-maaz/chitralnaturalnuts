import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import SearchOverlay from "@/components/layout/SearchOverlay";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Chitral Natural Nuts | Premium Nuts & Dry Fruits from Pakistan", template: "%s | Chitral Natural Nuts" },
  description: "Buy premium quality almonds, walnuts, pistachios, Chilgoza pine nuts, dried apricots, and organic mountain honey directly sourced from Chitral, Pakistan. 100% natural, no preservatives.",
  keywords: ["Chitral nuts", "premium almonds Pakistan", "Chilgoza pine nuts", "organic honey Pakistan", "dry fruits Pakistan", "walnuts Chitral"],
  authors: [{ name: "Chitral Natural Nuts" }],
  openGraph: {
    siteName: "Chitral Natural Nuts",
    type: "website",
    locale: "en_PK",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://chitralnuts.pk"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;0,700;1,400;1,600&family=Playfair+Display:ital,wght@0,500;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Chitral Natural Nuts",
          "url": "https://chitralnuts.pk",
          "logo": "https://chitralnuts.pk/logo.png",
          "description": "Premium quality nuts and dry fruits from Chitral, Pakistan",
          "address": { "@type": "PostalAddress", "addressLocality": "Chitral", "addressRegion": "KPK", "addressCountry": "PK" },
          "contactPoint": { "@type": "ContactPoint", "contactType": "customer service", "availableLanguage": ["English", "Urdu"] }
        })}} />
      </head>
      <body className="font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CartDrawer />
        <SearchOverlay />
        <WhatsAppFloat />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
