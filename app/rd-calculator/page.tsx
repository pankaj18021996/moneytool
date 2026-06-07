import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import RdCalculatorClient from "./RdCalculatorClient";
import FAQSchema from "../components/FAQSchema";
import { BreadcrumbSchema } from "../components/Breadcrumb";
export const metadata: Metadata = seoMetadata as Metadata;
const faqs = [
  { question: "What is the minimum RD investment?", answer: "Minimum monthly deposit is ₹100, with a typical bank cap around ₹1,00,000 per month." },
  { question: "Can I close an RD prematurely?", answer: "Yes, after 6 months. But the bank may reduce your interest rate by 1-2% for early closure." },
  { question: "What is the current RD interest rate?", answer: "RD rates vary by bank and tenure, typically 5.5% to 7.0% in 2026." },
  { question: "Is RD interest taxable?", answer: "Yes. RD interest is taxable as income, and banks may deduct TDS if it exceeds the prescribed threshold." },
];
export default function Page() {
  return (<><FAQSchema items={faqs} /><BreadcrumbSchema items={[{name:"Home",url:"https://www.moneytool.in"},{name:"RD Calculator",url:"https://www.moneytool.in/rd-calculator"}]} /><RdCalculatorClient /></>);
}
