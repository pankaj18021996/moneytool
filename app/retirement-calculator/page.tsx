import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import RetirementCalculatorClient from "./RetirementCalculatorClient";
import FAQSchema from "../components/FAQSchema";
import { BreadcrumbSchema } from "../components/Breadcrumb";
export const metadata: Metadata = seoMetadata as Metadata;
const faqs = [
  { question: "How much corpus do I need for retirement?", answer: "This calculator estimates corpus by adjusting your current expenses for inflation and applying the 4% safe withdrawal rule." },
  { question: "Can I retire earlier than 60?", answer: "Yes. Earlier retirement means more saving years needed, so your monthly SIP requirement will be higher." },
  { question: "How does inflation affect retirement planning?", answer: "Inflation increases future expenses, so the calculator raises your target corpus based on your chosen inflation rate." },
  { question: "Is the monthly SIP estimate guaranteed?", answer: "No. It is an estimate based on expected return assumptions. Actual markets vary." },
];

const _webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Retirement Calculator India",
  url: "https://www.moneytool.in/retirement-calculator",
  description: "Free retirement planning calculator for India. Calculate the corpus needed for retirement, monthly savings required, and project your retirement fund.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  isAccessibleForFree: true,
  inLanguage: "en-IN",
  featureList: ["Inflation-adjusted corpus calculation", "Monthly savings requirement", "Expected returns modelling", "Year-by-year projection"],
  provider: { "@type": "Organization", name: "MoneyTool", url: "https://www.moneytool.in" },
};

export default function Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_webAppSchema) }} /><FAQSchema items={faqs} /><BreadcrumbSchema items={[{name:"Home",url:"https://www.moneytool.in"},{name:"Retirement Calculator",url:"https://www.moneytool.in/retirement-calculator"}]} /><RetirementCalculatorClient /></>);
}
