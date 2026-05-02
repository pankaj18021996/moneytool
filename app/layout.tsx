import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MoneyTool - Free Financial Calculators for India",
  description: "Free EMI Calculator, SIP Calculator and more tools for India.",
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
      <body className="bg-gray-50 min-h-screen">
        {children}
      </body>
    </html>
  );
}