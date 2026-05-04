import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "MoneyTool — Free Financial Calculators for India",
    template: "%s | MoneyTool",
  },
  description: "Free financial calculators for India. EMI Calculator, SIP Calculator, GST Calculator, Salary Calculator, FD Calculator and more.",
  keywords: [
    "financial calculator india",
    "emi calculator",
    "sip calculator",
    "gst calculator",
    "salary calculator",
    "fd calculator",
    "free calculator india",
  ],
  authors: [{ name: "MoneyTool" }],
  creator: "MoneyTool",
  metadataBase: new URL("https://www.moneytool.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
        siteName: "MoneyTool",
    title: "MoneyTool — Free Financial Calculators for India",
    description: "Free financial calculators for India. EMI, SIP, GST, Salary, FD calculators and more.",
    url: "https://www.moneytool.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoneyTool — Free Financial Calculators for India",
    description: "Free financial calculators for India.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3150789625391215"
          crossOrigin="anonymous"
        />
      </head>
      <script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=G-DBWGRGDQ52`}
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-DBWGRGDQ52');
    `,
  }}
/>
      <body className="bg-gray-50 min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}