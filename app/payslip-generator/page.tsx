import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import PayslipGeneratorClient from "./PayslipGeneratorClient";
export const metadata: Metadata = seoMetadata as Metadata;

const _webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Free Payslip Generator India",
  url: "https://www.moneytool.in/payslip-generator",
  description: "Free online salary slip generator for India. Create professional payslips with all statutory deductions — PF, ESI, TDS, Professional Tax — and download as PDF.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  isAccessibleForFree: true,
  inLanguage: "en-IN",
  featureList: ["Professional payslip format", "All statutory deductions", "PDF export", "No data stored"],
  provider: { "@type": "Organization", name: "MoneyTool", url: "https://www.moneytool.in" },
};

export default function Page() { return <PayslipGeneratorClient />; }
