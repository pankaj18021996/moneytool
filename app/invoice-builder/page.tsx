import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import InvoiceBuilderClient from "./InvoiceBuilderClient";
export const metadata: Metadata = seoMetadata as Metadata;

const _webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Free GST Invoice Builder India",
  url: "https://www.moneytool.in/invoice-builder",
  description: "Free online GST invoice builder for India. Create professional GST invoices with CGST, SGST, IGST breakdowns and download as PDF instantly.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  isAccessibleForFree: true,
  inLanguage: "en-IN",
  featureList: ["GST-compliant invoice format", "CGST and SGST split", "PDF download", "No login required"],
  provider: { "@type": "Organization", name: "MoneyTool", url: "https://www.moneytool.in" },
};

export default function Page() { return <InvoiceBuilderClient />; }
