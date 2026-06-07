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
export default function Page() {
  return (<><FAQSchema items={faqs} /><BreadcrumbSchema items={[{name:"Home",url:"https://www.moneytool.in"},{name:"Retirement Calculator",url:"https://www.moneytool.in/retirement-calculator"}]} /><RetirementCalculatorClient /></>);
}
