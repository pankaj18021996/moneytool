import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import HraCalculatorClient from "./HraCalculatorClient";
import FAQSchema from "../components/FAQSchema";
import { BreadcrumbSchema } from "../components/Breadcrumb";
export const metadata: Metadata = seoMetadata as Metadata;
const faqs = [
  { question: "What is HRA exemption?", answer: "HRA exemption is the tax-free portion of your HRA — minimum of: actual HRA, 50%/40% of basic salary (metro/non-metro), or rent paid minus 10% of basic salary." },
  { question: "Which cities are considered metro cities?", answer: "Delhi, Mumbai, Bangalore, and Chennai are metro cities where HRA exemption is 50% of salary. All others are 40%." },
  { question: "Can I claim HRA if I own the property I live in?", answer: "No. HRA exemption is only for rented accommodation. You cannot claim it if you live in your own property." },
  { question: "What documents do I need for HRA?", answer: "Rent receipts, rent agreement, landlord's PAN and bank details, and a self-declaration form." },
  { question: "How does HRA save taxes?", answer: "HRA reduces your taxable income, directly lowering your income tax. More HRA exemption means lower tax." },
  { question: "Can I claim HRA if I move cities?", answer: "Yes. File a revised ITR if your HRA changes due to relocation. The new exemption applies from the month of relocation." },
];

const _webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "HRA Calculator India",
  url: "https://www.moneytool.in/hra-calculator",
  description: "Free HRA exemption calculator for India. Calculate House Rent Allowance tax exemption based on salary, rent paid, and city of residence.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  isAccessibleForFree: true,
  inLanguage: "en-IN",
  featureList: ["Metro and non-metro city support", "Minimum of three conditions", "Old regime only", "Monthly and annual calculation"],
  provider: { "@type": "Organization", name: "MoneyTool", url: "https://www.moneytool.in" },
};

export default function Page() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_webAppSchema) }} /><FAQSchema items={faqs} /><BreadcrumbSchema items={[{name:"Home",url:"https://www.moneytool.in"},{name:"HRA Calculator",url:"https://www.moneytool.in/hra-calculator"}]} /><HraCalculatorClient /></>);
}
