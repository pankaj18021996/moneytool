import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import IncomeTaxCalculatorClient from "./IncomeTaxCalculatorClient";
import FAQSchema from "../components/FAQSchema";
import { BreadcrumbSchema } from "../components/Breadcrumb";

export const metadata: Metadata = seoMetadata as Metadata;

const faqs = [
  { 
    question: "What is the standard deduction in New Tax Regime 2026?", 
    answer: "The standard deduction for salaried employees is ₹75,000 in the new tax regime for FY 2025-26." 
  },
  { 
    question: "What are the new tax slab rates for FY 2025-26?", 
    answer: "0% up to ₹3L, 5% from ₹3-6L, 10% from ₹6-9L, 15% from ₹9-12L, 20% from ₹12-15L, 30% above ₹15L." 
  },
  // ... rest of FAQs
];

const _webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Income Tax Calculator India FY 2025-26",
  url: "https://www.moneytool.in/income-tax-calculator",
  description: "Free income tax calculator for India FY 2025-26. Calculate tax under new and old regime, compare both regimes, and see your net take-home after all deductions.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  isAccessibleForFree: true,
  inLanguage: "en-IN",
  featureList: ["New vs Old regime comparison", "Section 80C/80D deductions", "Standard deduction included", "Surcharge and cess auto-calculated"],
  provider: { "@type": "Organization", name: "MoneyTool", url: "https://www.moneytool.in" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_webAppSchema) }} />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.moneytool.in" },
        { name: "Income Tax Calculator", url: "https://www.moneytool.in/income-tax-calculator" },
      ]} />

      <IncomeTaxCalculatorClient />

      {/* ✅ SEO CONTENT BLOCK - YAHA LIKHA HONA THA! */}
      <section style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px", color: "#a1a1aa" }}>

        <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#f4f4f5", marginBottom: "12px" }}>
          Income Tax Calculator India FY 2025-26 — Calculate New vs Old Regime
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "16px" }}>
          Use this free income tax calculator to instantly calculate your tax liability under both the new and old tax regimes for FY 2025-26 (AY 2026-27). Enter your gross income, investments, and deductions — the calculator shows your tax payable, total deductions, surcharge, cess, and net take-home salary. Salaried employees can compare both regimes side-by-side to decide which one saves more tax. Updated with new tax slabs, standard deduction (₹75,000 for salaried), and latest surcharge thresholds.
        </p>
        <p style={{ lineHeight: "1.8", marginBottom: "24px" }}>
          For a salaried employee earning ₹15 lakh annually with ₹1.5 lakh in Section 80C investments, the old regime typically saves ₹75,000–₹1,20,000 in tax compared to the new regime. However, the benefit varies based on your deductions, investments, and income level.
        </p>

        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f4f4f5", margin: "32px 0 12px" }}>
          New Tax Regime vs Old Tax Regime — Key Differences
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "16px" }}>
          The key difference is: <strong style={{ color: "#f4f4f5" }}>New regime has lower tax rates but NO deductions</strong>. Old regime has higher rates but allows deductions under Section 80C, 80D, 24(b), etc.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "24px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ background: "#111113" }}>
                {["Feature", "New Regime", "Old Regime"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#10b981", fontWeight: 600, borderBottom: "1px solid #27272a" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Tax Rates", "Lower rates (0-30%)", "Higher rates (0-30%) + surcharge"],
                ["Standard Deduction", "₹75,000 (salaried)", "Not available"],
                ["Section 80C", "Not allowed", "Up to ₹1.5 lakh"],
                ["HRA Exemption", "Not allowed", "Fully deductible"],
                ["Home Loan Interest", "Not allowed (Section 24b)", "₹2 lakh/year"],
                ["Health Insurance (80D)", "Not allowed", "Fully deductible"],
                ["Best For", "High earners with few deductions", "Mid-income with investments & HRA"],
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #27272a", background: i === 6 ? "rgba(16,185,129,0.05)" : "transparent" }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: "10px 14px", color: j === 0 ? "#f4f4f5" : "#a1a1aa", fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f4f4f5", margin: "32px 0 12px" }}>
          Income Tax Slabs FY 2025-26 (New Regime)
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "24px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ background: "#111113" }}>
                {["Income Slab", "Tax Rate", "Example (Annual Income ₹20L)"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#10b981", fontWeight: 600, borderBottom: "1px solid #27272a" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Up to ₹3 lakh", "0%", "₹3L × 0% = ₹0"],
                ["₹3–6 lakh", "5%", "₹3L × 5% = ₹15,000"],
                ["₹6–9 lakh", "10%", "₹3L × 10% = ₹30,000"],
                ["₹9–12 lakh", "15%", "₹3L × 15% = ₹45,000"],
                ["₹12–15 lakh", "20%", "₹3L × 20% = ₹60,000"],
                ["Above ₹15 lakh", "30%", "₹5L × 30% = ₹1,50,000"],
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
          Real-World Examples — New Regime vs Old Regime
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "24px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
            <thead>
              <tr style={{ background: "#111113" }}>
                {["Annual Income", "New Regime Tax", "Old Regime Tax (with 80C)", "Tax Saved (Old)"].map((h) => (
                  <th key={h} style={{ padding: "10px 12px", textAlign: "left", color: "#10b981", fontWeight: 600, borderBottom: "1px solid #27272a" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["₹10 lakh", "₹28,750", "₹8,750 (with ₹1.5L 80C)", "₹20,000/year"],
                ["₹15 lakh", "₹1,14,375", "₹39,375 (with ₹1.5L 80C)", "₹75,000/year"],
                ["₹20 lakh", "₹2,14,375", "₹1,14,375 (with ₹1.5L 80C)", "₹1,00,000/year"],
                ["₹30 lakh", "₹5,14,375", "₹3,14,375 (with ₹1.5L 80C)", "₹2,00,000/year"],
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

        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f4f4f5", margin: "32px 0 12px" }}>
          Key Deductions in Old Tax Regime
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "24px" }}>
          {[
            { title: "Section 80C", desc: "Life insurance, PPF, ELSS, NSC — up to ₹1.5 lakh" },
            { title: "Section 80D", desc: "Health insurance premium — up to ₹1 lakh (₹1.5L for seniors)" },
            { title: "Section 24(b)", desc: "Home loan interest — up to ₹2 lakh per year" },
            { title: "Section 80E", desc: "Education loan interest — full amount (no limit)" },
            { title: "HRA Exemption", desc: "House rent allowance — min of 3 conditions (metro 50%, non-metro 40%)" },
            { title: "Section 80TTA", desc: "Savings account interest — up to ₹10,000" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#111113", padding: "16px", borderRadius: "8px", borderLeft: "3px solid #10b981" }}>
              <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#10b981", marginBottom: "6px" }}>{item.title}</h3>
              <p style={{ fontSize: "13px", color: "#a1a1aa" }}>{item.desc}</p>
            </div>
          ))}
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
            <strong style={{ color: "#10b981" }}>Disclaimer:</strong> This calculator provides estimates for informational purposes. For accurate tax planning and filing, consult a qualified Chartered Accountant. Tax laws change frequently; verify current rules with official IT Department sources.
          </p>
        </div>
      </section>
    </>
  );
}