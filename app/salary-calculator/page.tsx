import type { Metadata } from "next";
import Link from "next/link";
import SalaryCalculatorClient from "./SalaryCalculatorClient";

export const metadata: Metadata = {
  title: "Salary Calculator India 2026 – CTC to In-Hand | MoneyTool",
  description:
    "Calculate your exact in-hand salary from CTC. Covers PF, HRA, income tax under new & old regime, cess, and all deductions. Updated for FY 2025-26.",
  alternates: { canonical: "https://www.moneytool.in/calculators/salary-calculator" },
  openGraph: {
    title: "Salary Calculator India 2026 – MoneyTool",
    description: "CTC to in-hand salary calculator with full tax breakdown for new and old regime.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    q: "How is in-hand salary calculated from CTC?",
    a: "In-hand = Gross Salary − Employee PF − Income Tax − Other deductions. Gross salary = CTC − Employer PF − Bonus. Basic is typically 50% of CTC; HRA is 50% (metro) or 40% (non-metro) of basic.",
  },
  {
    q: "Which tax regime is better — new or old?",
    a: "New regime (FY 2025-26) has zero tax up to ₹12L income and lower rates above. Old regime suits those with large HRA, 80C investments, and home loan interest. Use this calculator to compare both side by side.",
  },
  {
    q: "What is the standard deduction in FY 2025-26?",
    a: "Under the new regime, standard deduction is ₹75,000. Under the old regime, it is ₹50,000. Both are automatically deducted from gross salary before tax is calculated.",
  },
  {
    q: "Is PF deduction mandatory?",
    a: "PF is mandatory if your basic salary is below ₹15,000/month. If basic exceeds ₹15,000, you can opt out. Employee contributes 12% of basic; employer contributes another 12% (already part of CTC).",
  },
  {
    q: "What is Health and Education Cess?",
    a: "Cess is 4% levied on income tax payable. It funds health and education initiatives and applies after all deductions and rebates are calculated.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SalaryCalculatorPage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", gap: 8, fontSize: 13, color: "#71717a", marginBottom: 24, alignItems: "center" }}>
          <Link href="/" style={{ color: "#71717a", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <span style={{ color: "#a1a1aa" }}>Salary Calculator</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "#f4f4f5", marginBottom: 10, lineHeight: 1.2 }}>
            Salary Calculator India 2026
          </h1>
          <p style={{ color: "#a1a1aa", fontSize: 16, lineHeight: 1.6, maxWidth: 680 }}>
            Calculate your exact in-hand salary from CTC. Covers PF, HRA exemption, income tax under new & old regime, cess, and all deductions — updated for FY 2025-26.
          </p>
        </div>

        {/* Pills */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          <div style={{
            padding: "8px 16px", borderRadius: 999, fontSize: 13,
            background: "rgba(16,185,129,0.1)", border: "1px solid #10b981",
            color: "#10b981", fontWeight: 600,
          }}>💼 CTC to In-Hand</div>
          {[
            { icon: "🆕", label: "New Regime FY26" },
            { icon: "📋", label: "Old Regime" },
            { icon: "🏦", label: "PF Included" },
          ].map((p) => (
            <div key={p.label} style={{
              padding: "8px 16px", borderRadius: 999, fontSize: 13,
              background: "#111113", border: "1px solid #27272a",
              color: "#a1a1aa", display: "flex", alignItems: "center", gap: 6,
            }}>
              {p.icon} {p.label}
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, alignItems: "start", marginBottom: 48 }}>

          <SalaryCalculatorClient />

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* CTC Structure */}
            <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 14 }}>Typical CTC Structure</h3>
              {[
                { label: "Basic Salary", value: "50% of CTC" },
                { label: "HRA (Metro)", value: "50% of Basic" },
                { label: "Special Allowance", value: "Remaining" },
                { label: "Employer PF", value: "12% of Basic" },
                { label: "Employee PF", value: "12% of Basic" },
              ].map((item) => (
                <div key={item.label} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "9px 12px", borderRadius: 8, marginBottom: 6,
                  background: "#18181b", border: "1px solid #27272a",
                }}>
                  <span style={{ fontSize: 12, color: "#a1a1aa" }}>{item.label}</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#10b981" }}>{item.value}</span>
                </div>
              ))}
            </div>

            {/* Tax Slabs */}
            <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 12 }}>Tax Slabs FY 2025-26</h3>
              <p style={{ fontSize: 11, color: "#71717a", marginBottom: 10 }}>New Regime</p>
              {[
                ["Up to ₹3L", "Nil"],
                ["₹3L – ₹7L", "5%"],
                ["₹7L – ₹10L", "10%"],
                ["₹10L – ₹12L", "15%"],
                ["₹12L – ₹15L", "20%"],
                ["Above ₹15L", "30%"],
              ].map(([range, rate]) => (
                <div key={range} style={{
                  display: "flex", justifyContent: "space-between",
                  padding: "6px 0", borderBottom: "1px solid #1c1c1e", fontSize: 12,
                }}>
                  <span style={{ color: "#a1a1aa" }}>{range}</span>
                  <span style={{ color: "#10b981", fontWeight: 600 }}>{rate}</span>
                </div>
              ))}
              <p style={{ fontSize: 11, color: "#71717a", marginTop: 10 }}>
                Zero tax up to ₹12L (rebate u/s 87A) + 4% cess on tax
              </p>
            </div>

            {/* Tips */}
            <div style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#10b981", marginBottom: 12 }}>💡 Salary Tips</h3>
              {[
                "New regime better for income ≤₹12L",
                "Negotiate HRA for metro postings",
                "Submit Form 15G if no tax liability",
                "80C saves up to ₹46,800 in tax",
                "Check Form 16 matches your CTC letter",
              ].map((tip, i) => (
                <p key={i} style={{ display: "flex", gap: 8, fontSize: 12, color: "#a1a1aa", lineHeight: 1.7, marginBottom: 6 }}>
                  <span style={{ color: "#10b981", flexShrink: 0 }}>✓</span>{tip}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* What is CTC */}
        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 14 }}>What is CTC and In-Hand Salary?</h2>
          <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.9, marginBottom: 10 }}>
            CTC (Cost to Company) is the total annual expense a company incurs for an employee — including basic pay, HRA, allowances, employer PF, gratuity, and other benefits. It is always higher than what you actually receive in your bank account.
          </p>
          <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.9 }}>
            In-hand salary (net take-home) is what remains after deducting employee PF, income tax, and other deductions from your gross salary. Typically, in-hand is 65–80% of CTC depending on your tax slab and structure.
          </p>
        </div>

        {/* How to Use */}
        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 20 }}>How to Use This Salary Calculator</h2>
          {[
            { step: "Step 1", text: "Enter your Annual CTC from your offer letter" },
            { step: "Step 2", text: "Add bonus % if applicable (usually 10–20% of CTC)" },
            { step: "Step 3", text: "Toggle PF and select metro or non-metro for HRA" },
            { step: "Step 4", text: "Choose New or Old tax regime" },
            { step: "Step 5", text: "See monthly in-hand, full breakdown, pie chart, and tax summary" },
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 14, marginBottom: 14, alignItems: "flex-start" }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, fontWeight: 700, color: "#10b981",
              }}>{i + 1}</div>
              <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.7, marginTop: 4 }}>
                <strong style={{ color: "#f4f4f5" }}>{s.step} — </strong>{s.text}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 20 }}>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: i < faqs.length - 1 ? "1px solid #27272a" : "none", padding: "16px 0" }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 8 }}>{faq.q}</h3>
              <p style={{ fontSize: 13, color: "#71717a", lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}