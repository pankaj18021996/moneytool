import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import TdsCalculatorClient from "./TdsCalculatorClient";
export const metadata: Metadata = seoMetadata as Metadata;

const _webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "TDS Calculator India",
  url: "https://www.moneytool.in/tds-calculator",
  description: "Free TDS calculator for India. Calculate Tax Deducted at Source on salary, rent, professional fees and contractor payments as per Income Tax Act sections.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  isAccessibleForFree: true,
  inLanguage: "en-IN",
  featureList: ["Section 192 salary TDS", "Section 194I rent TDS", "Section 194J professional fees", "Section 194C contractor payments"],
  provider: { "@type": "Organization", name: "MoneyTool", url: "https://www.moneytool.in" },
};

export default function Page() { return <TdsCalculatorClient />; }
