import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MoneyTool — Free Financial Calculators & Tools for India",
    template: "%s | MoneyTool",
  },
  description:
    "15+ free financial tools — EMI, SIP, FD, PPF, GST, Income Tax, Salary & Invoice Builder. No login required. Instant results. Made for India.",
  metadataBase: new URL("https://www.moneytool.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "MoneyTool",
    title: "MoneyTool — Free Financial Calculators & Tools for India",
    description: "15+ free financial tools — EMI, SIP, FD, PPF, GST, Income Tax, Salary & Invoice Builder. No login required. Instant results.",
    url: "https://www.moneytool.in",
    images: [
      {
        url: "https://www.moneytool.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "MoneyTool - Free Financial Calculators for India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MoneyTool — Free Financial Calculators for India",
    description: "15+ free financial tools. Calculate EMI, SIP returns, taxes, salary, GST & more. No login required. Instant results.",
    images: "https://www.moneytool.in/og-image.png",
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
      <head />
      <body
        className={dmSans.className}
        style={{
          background: "#0a0a0a",
          color: "#f4f4f5",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <div style={{ flex: 1 }}>{children}</div>
        <Footer />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3150789625391215"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DBWGRGDQ52"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-DBWGRGDQ52');`}
        </Script>
      </body>
    </html>
  );
}