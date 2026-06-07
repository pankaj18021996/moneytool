import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import HomeLoanCalculatorClient from "./HomeLoanCalculatorClient";
import FAQSchema from "../components/FAQSchema";
import { BreadcrumbSchema } from "../components/Breadcrumb";
export const metadata: Metadata = seoMetadata as Metadata;
const faqs = [
  { question: "What is a home loan EMI?", answer: "EMI is the fixed monthly amount you pay to repay your home loan, covering both principal and interest." },
  { question: "How is home loan EMI calculated?", answer: "EMI = P × r × (1+r)ⁿ ÷ [(1+r)ⁿ − 1], where P is principal, r is monthly rate, and n is tenure in months." },
  { question: "What is the maximum home loan I can get?", answer: "Banks lend up to 80-90% of property value, depending on income, credit score, and debt-to-income ratio." },
  { question: "Fixed vs floating rate — which is better?", answer: "Fixed rates stay constant; floating rates vary with RBI repo rate. Fixed is safer but typically higher." },
  { question: "Can I prepay my home loan?", answer: "Yes. RBI mandates zero prepayment charges on floating-rate home loans. Fixed-rate loans may have 2-5% penalties." },
  { question: "What documents are needed?", answer: "Salary slip, ITR, bank statements, Aadhaar, PAN, property documents, and credit report." },
];
export default function Page() {
  return (<><FAQSchema items={faqs} /><BreadcrumbSchema items={[{name:"Home",url:"https://www.moneytool.in"},{name:"Home Loan Calculator",url:"https://www.moneytool.in/home-loan-calculator"}]} /><HomeLoanCalculatorClient /></>);
}
