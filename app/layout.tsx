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
  ],
  metadataBase: new URL("https://www.moneytool.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "MoneyTool",
    title: "MoneyTool — Free Financial Calculators & Tools for India",
    description: "15+ free financial tools. No login. Instant results.",
    url: "https://www.moneytool.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoneyTool — Free Financial Calculators for India",
    description: "15+ free tools. No login required. Instant results.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          background: "#0a0a0a",
          color: "#f4f4f5",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
        }}
      >
        <Navbar />
        <div style={{ flex: 1 }}>{children}</div>
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