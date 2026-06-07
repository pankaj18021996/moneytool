import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import SwpCalculatorClient from "./SwpCalculatorClient";
import FAQSchema from "../components/FAQSchema";
import { BreadcrumbSchema } from "../components/Breadcrumb";
export const metadata: Metadata = seoMetadata as Metadata;
const faqs = [
  { question: "What is an SWP?", answer: "A Systematic Withdrawal Plan lets you withdraw a fixed amount from your investment corpus monthly while the rest stays invested." },
  { question: "How long will my corpus last?", answer: "It depends on your corpus size, monthly withdrawal amount, and expected return. This calculator estimates the longevity." },
  { question: "Can SWP replace pension income?", answer: "SWP can provide regular cash flow, but factor in inflation, taxes, and required income before relying on it fully." },
  { question: "Is the withdrawal amount guaranteed?", answer: "No. The value depends on corpus performance and return rate. Higher returns help sustain withdrawals longer." },
];
export default function Page() {
  return (<><FAQSchema items={faqs} /><BreadcrumbSchema items={[{name:"Home",url:"https://www.moneytool.in"},{name:"SWP Calculator",url:"https://www.moneytool.in/swp-calculator"}]} /><SwpCalculatorClient /></>);
}
