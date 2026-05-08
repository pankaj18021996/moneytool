import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "MoneyTool — Free Financial Calculators & Tools for India",
    template: "%s | MoneyTool",
  },
  description:
    "15+ free financial tools — EMI, SIP, FD, PPF, GST, Income Tax, Salary & Invoice Builder. No login required. Instant results. Made for India.",
  keywords: [
    "emi calculator india",
    "sip calculator",
    "fd calculator",
    "gst calculator",
    "salary calculator india",
    "income tax calculator india",
    "ppf calculator",
    "free financial tools india",
    "loan emi calculator",
    "financial calculator india",
  ],
  authors: [{ name: "MoneyTool" }],
  creator: "MoneyTool",
  publisher: "MoneyTool",
  metadataBase: new URL("https://www.moneytool.in"),
  alternates: {
    canonical: "https://www.moneytool.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "MoneyTool",
    title: "MoneyTool — Free Financial Calculators & Tools for India",
    description:
      "15+ free financial tools — EMI, SIP, FD, PPF, GST, Income Tax & more. No login. Instant results.",
    url: "https://www.moneytool.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoneyTool — Free Financial Calculators for India",
    description:
      "15+ free tools. No login required. Instant results.",
    site: "@moneytool",
    creator: "@moneytool",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3150789625391215"
          crossOrigin="anonymous"
         />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DBWGRGDQ52"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DBWGRGDQ52');
          `}
        </Script>
      </body>
    </html>
  );
}