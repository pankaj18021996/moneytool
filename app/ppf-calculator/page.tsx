import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import PpfCalculatorClient from "./PpfCalculatorClient";
import FAQSchema from "../components/FAQSchema";
import { BreadcrumbSchema } from "../components/Breadcrumb";
export const metadata: Metadata = seoMetadata as Metadata;
const faqs = [
  { question: "What is the minimum PPF investment?", answer: "Minimum annual investment is ₹500 and maximum is ₹1.5 lakh per financial year." },
  { question: "What is the PPF maturity period?", answer: "Base maturity is 15 years. You can extend in 5-year blocks after maturity." },
  { question: "What is the current PPF interest rate?", answer: "As of 2026, PPF interest rate is 7.1% per annum, compounded annually." },
  { question: "Can I withdraw from PPF before maturity?", answer: "After 7 years you can withdraw up to 50% of the balance from the previous year." },
  { question: "Is PPF eligible for tax benefits?", answer: "Yes. PPF qualifies under Section 80C and interest is completely tax-free." },
  { question: "Can senior citizens open a PPF account?", answer: "Yes, anyone including minors and senior citizens can open a PPF account." },
];

const _webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "PPF Calculator India",
  url: "https://www.moneytool.in/ppf-calculator",
  description: "Free PPF calculator for India. Calculate Public Provident Fund maturity value, year-wise interest, and total returns at current 7.1% government rate.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  isAccessibleForFree: true,
  inLanguage: "en-IN",
  featureList: ["Annual compounding at 7.1%", "Year-wise interest breakdown", "Partial withdrawal eligibility", "15-year maturity calculation"],
  provider: { "@type": "Organization", name: "MoneyTool", url: "https://www.moneytool.in" },
};

export default function Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_webAppSchema) }} /><FAQSchema items={faqs} /><BreadcrumbSchema items={[{name:"Home",url:"https://www.moneytool.in"},{name:"PPF Calculator",url:"https://www.moneytool.in/ppf-calculator"}]} /><PpfCalculatorClient /></>);
}
