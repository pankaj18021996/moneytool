import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import PersonalLoanCalculatorClient from "./PersonalLoanCalculatorClient";
export const metadata: Metadata = seoMetadata as Metadata;

const _webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Personal Loan Calculator India",
  url: "https://www.moneytool.in/personal-loan-calculator",
  description: "Free personal loan EMI calculator for India. Calculate monthly EMI, total interest, and repayment schedule for personal loans.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  isAccessibleForFree: true,
  inLanguage: "en-IN",
  featureList: ["EMI calculation", "Total interest payable", "Month-by-month schedule", "No collateral loan planning"],
  provider: { "@type": "Organization", name: "MoneyTool", url: "https://www.moneytool.in" },
};

export default function Page() { return <PersonalLoanCalculatorClient />; }
