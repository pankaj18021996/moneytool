import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import IncomeTaxCalculatorClient from "./IncomeTaxCalculatorClient";
import FAQSchema from "../components/FAQSchema";
import { BreadcrumbSchema } from "../components/Breadcrumb";
export const metadata: Metadata = seoMetadata as Metadata;
const faqs = [
  { question: "What is the standard deduction in New Tax Regime 2026?", answer: "The standard deduction for salaried employees is ₹75,000 in the new tax regime for FY 2025-26." },
  { question: "What are the new tax slab rates for FY 2025-26?", answer: "0% up to ₹3L, 5% from ₹3-6L, 10% from ₹6-9L, 15% from ₹9-12L, 20% from ₹12-15L, 30% above ₹15L." },
  { question: "Should I choose old or new tax regime?", answer: "New regime has lower rates but no deductions. Old regime allows 80C, 80D, etc. Calculate both to decide." },
  { question: "What deductions are available in old regime?", answer: "80C (₹1.5L), 80D (health insurance), 80E (education loan interest), 24(b) (home loan interest)." },
  { question: "What surcharge applies on high income?", answer: "Above ₹1Cr: 15% surcharge (new regime) or 25% (old regime), plus 4% health and education cess." },
  { question: "Is this calculator accurate for filing?", answer: "It provides estimates. Consult a CA for accurate tax planning and filing." },
];
export default function Page() {
  return (<><FAQSchema items={faqs} /><BreadcrumbSchema items={[{name:"Home",url:"https://www.moneytool.in"},{name:"Income Tax Calculator",url:"https://www.moneytool.in/income-tax-calculator"}]} /><IncomeTaxCalculatorClient /></>);
}
