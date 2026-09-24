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

const _webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Home Loan Calculator India",
  url: "https://www.moneytool.in/home-loan-calculator",
  description: "Free home loan EMI calculator for India. Calculate home loan EMI, total interest payable, amortization schedule, and tax benefit under Section 80C and 24(b).",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  isAccessibleForFree: true,
  inLanguage: "en-IN",
  featureList: ["EMI calculation with amortization", "Tax benefit under Section 80C and 24b", "Part prepayment impact", "Bank rate comparison"],
  provider: { "@type": "Organization", name: "MoneyTool", url: "https://www.moneytool.in" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_webAppSchema) }} />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.moneytool.in" },
        { name: "Home Loan Calculator", url: "https://www.moneytool.in/home-loan-calculator" },
      ]} />

      <HomeLoanCalculatorClient />

      {/* ✅ SEO CONTENT BLOCK */}
      <section style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px", color: "#a1a1aa" }}>

        <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#f4f4f5", marginBottom: "12px" }}>
          Home Loan EMI Calculator India — Calculate EMI, Interest & Tax Benefits
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "16px" }}>
          Use this free home loan calculator to instantly calculate your monthly EMI, total interest payable, and amortization schedule. Enter the loan amount, interest rate, and tenure — the calculator shows your exact EMI, total interest cost, month-by-month payment breakdown, and tax savings under Section 80C (principal repayment) and Section 24(b) (interest on home loans up to ₹2 lakh/year). Works for all major banks: HDFC, ICICI, Axis, SBI, Kotak, Yes Bank, and more.
        </p>
        <p style={{ lineHeight: "1.8", marginBottom: "24px" }}>
          For a ₹50 lakh home loan at 8% interest over 20 years, your monthly EMI is ₹47,596, and total interest paid is ₹63,43,040 — but you can save ₹75,000–₹1,20,000 in tax annually through Section 24(b) deduction if you opt for the old tax regime. This calculator helps you see the complete picture before applying to your bank.
        </p>

        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f4f4f5", margin: "32px 0 12px" }}>
          How is Home Loan EMI Calculated?
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "16px" }}>
          Home loan EMI is calculated using the <strong style={{ color: "#f4f4f5" }}>Reducing Balance Method</strong>, which is the standard for Indian banks. The formula is:
        </p>
        <div style={{ background: "#111113", padding: "16px", borderRadius: "8px", marginBottom: "24px", borderLeft: "3px solid #10b981" }}>
          <p style={{ fontSize: "16px", fontWeight: 600, color: "#10b981", margin: 0 }}>EMI = P × r × (1+r)ⁿ ÷ [(1+r)ⁿ − 1]</p>
          <div style={{ marginTop: "12px", fontSize: "13px", color: "#a1a1aa" }}>
            <p>Where:</p>
            <p>P = Principal loan amount (e.g., ₹50,00,000)</p>
            <p>r = Monthly interest rate (annual rate ÷ 12, e.g., 8% ÷ 12 = 0.667%)</p>
            <p>n = Total number of months (tenure in years × 12, e.g., 20 × 12 = 240)</p>
          </div>
        </div>

        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f4f4f5", margin: "32px 0 12px" }}>
          Home Loan EMI Examples — Different Loan Amounts & Interest Rates
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "24px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
            <thead>
              <tr style={{ background: "#111113" }}>
                {["Loan Amount", "Interest Rate", "Tenure", "Monthly EMI", "Total Interest", "Tax Saving (Old Regime)*"].map((h) => (
                  <th key={h} style={{ padding: "10px 12px", textAlign: "left", color: "#10b981", fontWeight: 600, borderBottom: "1px solid #27272a" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["₹20 lakh", "7.5%", "20 years", "₹15,881", "₹18,13,440", "₹54,403/yr"],
                ["₹30 lakh", "8%", "20 years", "₹27,948", "₹36,35,520", "₹1,09,066/yr"],
                ["₹50 lakh", "8%", "20 years", "₹47,596", "₹63,43,040", "₹1,90,184/yr"],
                ["₹75 lakh", "8.5%", "25 years", "₹65,980", "₹1,28,70,000", "₹2,00,000/yr*"],
                ["₹1 crore", "8.5%", "25 years", "₹87,973", "₹1,63,91,900", "₹2,00,000/yr*"],
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #27272a" }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: "10px 12px", color: j === 3 ? "#10b981" : j === 0 ? "#f4f4f5" : "#a1a1aa", fontWeight: j === 0 || j === 3 ? 600 : 400 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: "12px", color: "#71717a", marginBottom: "24px" }}>
          *Tax savings assume 30% tax bracket and old tax regime. Section 24(b) limit: ₹2,00,000/year (principal + interest combined). Also assumes you don't claim HRA exemption.
        </p>

        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f4f4f5", margin: "32px 0 12px" }}>
          Home Loan Tax Benefits — Section 80C & 24(b)
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
          {[
            { 
              title: "Section 24(b) — Interest Deduction", 
              desc: "Home loan interest up to ₹2 lakh/year is fully deductible under old tax regime. Not available in new regime." 
            },
            { 
              title: "Section 80C — Principal Repayment", 
              desc: "Home loan principal can be part of ₹1.5L 80C limit (along with LIC, PPF, NSC, etc.)." 
            },
            { 
              title: "Fixed vs Floating Rate", 
              desc: "Floating rates are typically 0.5–1% lower but move with RBI repo rate. Fixed rates are stable but higher." 
            },
            { 
              title: "Prepayment Strategy", 
              desc: "Floating-rate loans allow zero-cost prepayment. Extra payments reduce principal, saving massive interest." 
            },
          ].map((item, i) => (
            <div key={i} style={{ background: "#111113", padding: "16px", borderRadius: "8px", borderLeft: "3px solid #10b981" }}>
              <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#10b981", marginBottom: "6px" }}>{item.title}</h3>
              <p style={{ fontSize: "13px", color: "#a1a1aa", margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f4f4f5", margin: "32px 0 12px" }}>
          When to Choose Floating vs Fixed Rate?
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "24px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ background: "#111113" }}>
                {["Factor", "Floating Rate", "Fixed Rate"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#10b981", fontWeight: 600, borderBottom: "1px solid #27272a" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Initial Rate", "Lower (7.5–8%)", "Higher (8–8.5%)"],
                ["Rate Risk", "Changes with RBI repo", "Fixed throughout"],
                ["Prepayment Charges", "Zero (usually)", "2–5% penalty"],
                ["Best For", "Short tenure (5–10 yrs)", "Long tenure (20+ yrs)"],
                ["Current Market", "Preferred (rates stable)", "Declining use"],
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #27272a" }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: "10px 14px", color: j === 0 ? "#f4f4f5" : "#a1a1aa", fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f4f4f5", margin: "32px 0 12px" }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {faqs.map((faq, i) => (
            <div key={i}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#f4f4f5", marginBottom: "6px" }}>{faq.question}</h3>
              <p style={{ lineHeight: "1.7", fontSize: "15px" }}>{faq.answer}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "rgba(16,185,129,0.1)", padding: "20px", borderRadius: "8px", marginTop: "32px", borderLeft: "4px solid #10b981" }}>
          <p style={{ fontSize: "14px", color: "#a1a1aa" }}>
            <strong style={{ color: "#10b981" }}>Disclaimer:</strong> This calculator provides estimates for informational purposes. Actual EMI may vary based on processing fees, insurance, and bank policies. Consult your bank for exact figures before applying.
          </p>
        </div>
      </section>
    </>
  );
}