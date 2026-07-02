import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import PersonalLoanCalculatorClient from "./PersonalLoanCalculatorClient";
import FAQSchema from "../components/FAQSchema";
import { BreadcrumbSchema } from "../components/Breadcrumb";
export const metadata: Metadata = seoMetadata as Metadata;

const webAppSchema = {
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

const faqs = [
  { question: "What is the average personal loan interest rate in India?", answer: "Most banks and NBFCs offer personal loans between 10.5% and 24% p.a., depending on your credit score, income and existing relationship with the bank." },
  { question: "Do I need collateral for a personal loan?", answer: "No. Personal loans are unsecured — no property, gold or asset needs to be pledged. Approval is based on income and CIBIL score." },
  { question: "How fast is a personal loan disbursed?", answer: "Most banks disburse within 24-72 hours if documents and credit score are in order. Some NBFCs offer same-day disbursal." },
  { question: "What credit score do I need?", answer: "A CIBIL score of 750+ gets you the best rates. Scores below 650 make approval difficult or come with much higher interest." },
  { question: "Can I prepay a personal loan early?", answer: "Yes, most lenders allow prepayment after 6-12 EMIs, usually with a 2-5% foreclosure charge on the outstanding amount." },
  { question: "Is personal loan interest tax deductible?", answer: "Only if the loan is used for business purposes or home renovation/purchase — then interest may qualify under Section 24(b) or as a business expense. Personal use (travel, wedding, etc.) gets no tax benefit." },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://www.moneytool.in" }, { name: "Personal Loan Calculator", url: "https://www.moneytool.in/personal-loan-calculator" }]} />
      <PersonalLoanCalculatorClient />
    </>
  );
}
