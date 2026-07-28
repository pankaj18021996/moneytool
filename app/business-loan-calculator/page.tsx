import type { Metadata } from "next";
import Link from "next/link";
import { metadata as seoMetadata } from "./metadata";
import FAQSchema from "../components/FAQSchema";
import { BreadcrumbSchema } from "../components/Breadcrumb";
import RelatedTools from "../components/RelatedTools";
import LoanCalculator from "../components/LoanCalculator";

export const metadata: Metadata = seoMetadata as Metadata;

const faqs = [
  {
    question: "What is the average business loan interest rate in India?",
    answer: "Business loan rates typically range between 10% and 22% p.a., depending on the lender, loan type, turnover, collateral, and credit profile.",
  },
  {
    question: "Do I need collateral for a business loan?",
    answer: "Many lenders offer secured and unsecured business loans. Secured loans usually have lower rates, while unsecured loans may cost more and have lower limits.",
  },
  {
    question: "How is business loan EMI calculated?",
    answer: "EMI is calculated using the standard reducing-balance formula: EMI = P × r × (1+r)^n ÷ [(1+r)^n − 1], where P is principal, r is monthly interest rate, and n is the number of EMIs.",
  },
  {
    question: "Can I prepay a business loan?",
    answer: "Yes, many lenders allow prepayment or foreclosure, though some charge a fee. It is advisable to check the lender’s terms before making prepayments.",
  },
];

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Business Loan Calculator India",
  url: "https://www.moneytool.in/business-loan-calculator",
  description: "Free business loan calculator for India. Estimate EMI, total repayment, and interest for SME, working-capital, and business loans.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  isAccessibleForFree: true,
  inLanguage: "en-IN",
  featureList: ["EMI calculation", "Interest estimate", "Repayment planning", "Loan amount and tenure comparison"],
  provider: { "@type": "Organization", name: "MoneyTool", url: "https://www.moneytool.in" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://www.moneytool.in" }, { name: "Business Loan Calculator", url: "https://www.moneytool.in/business-loan-calculator" }]} />

      <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#f4f4f5", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
          <div style={{ display: "flex", gap: 8, fontSize: 13, color: "#71717a", marginBottom: 24, alignItems: "center" }}>
            <Link href="/" style={{ color: "#71717a", textDecoration: "none" }}>Home</Link>
            <span>›</span>
            <span style={{ color: "#a1a1aa" }}>Business Loan Calculator</span>
          </div>

          <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12, color: "#f4f4f5" }}>
            Business Loan Calculator India 2026
          </h1>
          <p style={{ color: "#a1a1aa", fontSize: 16, lineHeight: 1.7, maxWidth: 760, marginBottom: 28 }}>
            Plan your business borrowing with a simple EMI calculator for working capital, equipment finance, and SME loans. Estimate monthly repayment, total interest, and the full repayment schedule before you apply.
          </p>

          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", marginBottom: 32 }}>
            {[
              { title: "EMI Planning", text: "See monthly repayment clearly before signing a loan agreement." },
              { title: "Interest Estimate", text: "Compare the cost of borrowing across rates and tenures." },
              { title: "SME Loan Ready", text: "Designed for business owners, traders, and growing companies." },
            ].map((card) => (
              <div key={card.title} style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 20 }}>
                <h2 style={{ fontSize: 16, fontWeight: 700, color: "#f4f4f5", marginBottom: 8 }}>{card.title}</h2>
                <p style={{ fontSize: 13, color: "#a1a1aa", lineHeight: 1.7, margin: 0 }}>{card.text}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24, marginBottom: 32 }}>
            <LoanCalculator
              defaultAmount={1000000}
              defaultRate={12.5}
              defaultTenure={60}
              minAmount={500000}
              maxAmount={50000000}
              minRate={8}
              maxRate={24}
              minTenure={12}
              maxTenure={180}
              amountStep={50000}
            />
          </div>

          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24, marginBottom: 32 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 10 }}>Why this calculator helps</h2>
            <p style={{ color: "#a1a1aa", fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}>
              Use this page to estimate the monthly EMI for business loans in India and understand how the loan amount, interest rate, and repayment tenure affect your cash flow. It gives you a clear preview of your repayment burden before you compare lenders.
            </p>
            <ul style={{ color: "#a1a1aa", paddingLeft: 18, lineHeight: 1.8 }}>
              <li>Compare secured vs unsecured business loans</li>
              <li>Estimate EMI for a working capital or equipment loan</li>
              <li>See how a longer tenure changes your total interest</li>
            </ul>
          </div>

          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24, marginBottom: 32 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 10 }}>Business loan tips</h2>
            <p style={{ color: "#a1a1aa", fontSize: 14, lineHeight: 1.8 }}>
              Keep your EMI within a comfortable range of your monthly operating cash flow, compare lenders carefully, and check whether collateral or processing fees will increase the real cost of the loan.
            </p>
          </div>

          <RelatedTools tools={[
            { title: "EMI Calculator", icon: "🧮", description: "Calculate any loan EMI", href: "/emi-calculator" },
            { title: "Personal Loan Calculator", icon: "💳", description: "Plan personal borrowing", href: "/personal-loan-calculator" },
            { title: "Home Loan Calculator", icon: "🏠", description: "Estimate home loan EMI", href: "/home-loan-calculator" },
            { title: "Education Loan Calculator", icon: "🎓", description: "Compare student loan repayment", href: "/education-loan-calculator" },
          ]} />
        </div>
      </div>
    </>
  );
}
