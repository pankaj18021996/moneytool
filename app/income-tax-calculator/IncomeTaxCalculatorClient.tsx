"use client";
import Link from "next/link";
import React from "react";
import AdSenseUnit from "../components/AdSenseUnit";

const faqs = [
  {
    q: "What is the standard deduction in New Tax Regime 2026?",
    a: "The standard deduction for salaried employees is ₹75,000 in the new tax regime for FY 2025-26.",
  },
  {
    q: "What are the new tax slab rates for 2026?",
    a: "New Tax Regime: 0% up to ₹3L, 5% from ₹3-6L, 10% from ₹6-9L, 15% from ₹9-12L, 20% from ₹12-15L, 30% above ₹15L.",
  },
  {
    q: "Should I choose old or new tax regime?",
    a: "New regime offers lower rates but no deductions. Old regime allows deductions under 80C, 80D, etc. Calculate both to decide.",
  },
  {
    q: "What deductions are available in old regime?",
    a: "Popular deductions: 80C (₹1.5L), 80D (health insurance), 80E (education loan interest), 24(b) (home loan interest), etc.",
  },
  {
    q: "What surcharge applies on high income?",
    a: "For income above ₹1Cr: 15% surcharge (new regime) or 25% (old regime). Additional health and education cess of 4% applies.",
  },
  {
    q: "Is my income correct after deductions?",
    a: "This calculator provides estimates. Consult a CA for accurate tax planning and filing.",
  },
];

export default function IncomeTaxCalculatorPage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", color: "#f4f4f5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", gap: 8, fontSize: 13, color: "#71717a", marginBottom: 24, alignItems: "center" }}>
          <Link href="/" style={{ color: "#71717a", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <span style={{ color: "#a1a1aa" }}>Income Tax Calculator</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "#f4f4f5", marginBottom: 10, lineHeight: 1.2 }}>
            Income Tax Calculator India 2026
          </h1>
          <p style={{ color: "#a1a1aa", fontSize: 16, lineHeight: 1.6, maxWidth: 680 }}>
            Calculate your income tax liability instantly for FY 2025-26. Compare old vs new tax regimes.
          </p>
        </div>

        {/* Calculator */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 320px",
          gap: 24,
          alignItems: "start",
          marginBottom: 48,
        }}>
          <IncomeTaxCalculatorClient />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#10b981", marginBottom: 12 }}>
                💡 Tax Planning Tips
              </h3>
              {[
                "Max out 80C deductions (₹1.5L)",
                "Use health insurance (80D)",
                "Claim home loan interest (24b)",
                "Review tax regime annually",
              ].map((tip, i) => (
                <p key={i} style={{ display: "flex", gap: 8, fontSize: 12, color: "#a1a1aa", lineHeight: 1.7, marginBottom: 6 }}>
                  <span style={{ color: "#10b981", flexShrink: 0 }}>✓</span>
                  {tip}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 14 }}>
              Tax Slabs FY 2025-26 (New Tax Regime)
            </h2>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid #27272a" }}>
                    {["Income Range", "Tax Rate", "Tax Amount (Example)"].map(h => (
                      <th key={h} style={{ padding: "10px", textAlign: "left", fontWeight: 600, color: "#71717a" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Up to ₹3 Lakh", "Nil", "₹0"],
                    ["₹3 - ₹6 Lakh", "5%", "₹15,000 on ₹6L"],
                    ["₹6 - ₹9 Lakh", "10%", "₹30,000 on ₹9L"],
                    ["₹9 - ₹12 Lakh", "15%", "₹45,000 on ₹12L"],
                    ["₹12 - ₹15 Lakh", "20%", "₹60,000 on ₹15L"],
                    ["Above ₹15 Lakh", "30%", "Tax as per bracket"],
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #1f1f22", background: i % 2 ? "#18181b" : "transparent" }}>
                      {row.map((cell, j) => (
                        <td key={j} style={{ padding: "10px", color: j === 0 ? "#f4f4f5" : "#a1a1aa" }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 14 }}>
              Section 80C Deductions (Max ₹1.5 Lakh)
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                ["LIC Premiums", "Life insurance"],
                ["EPF Contribution", "Employee provident fund"],
                ["PPF Investment", "Public provident fund"],
                ["FD Interest", "Bank fixed deposits"],
                ["Home Loan Principal", "Loan repayment"],
                ["Education Fees", "Self, spouse, children"],
                ["ELSS Funds", "Equity-linked savings"],
                ["Sukanya Samriddhi", "Girl child savings"],
              ].map((item, i) => (
                <div key={i} style={{ background: "#18181b", border: "1px solid #27272a", borderRadius: 12, padding: 16 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#10b981", marginBottom: 4 }}>{item[0]}</p>
                  <p style={{ fontSize: 12, color: "#71717a" }}>{item[1]}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 14 }}>
              Other Popular Deductions
            </h2>
            {[
              {
                section: "80D - Health Insurance",
                details: "Premium paid for health/medical insurance: Self + family ₹25,000, Senior citizens ₹50,000",
              },
              {
                section: "80E - Education Loan Interest",
                details: "Interest on education loan: No limit. Available for self, spouse, children education.",
              },
              {
                section: "24(b) - Home Loan Interest",
                details: "Interest on home loan: Up to ₹2,00,000 per annum (self-occupied property)",
              },
              {
                section: "80CCD - NPS Contribution",
                details: "National Pension Scheme: Up to 10% of salary (additional to 80C benefit)",
              },
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: i < 3 ? "1px solid #27272a" : "none" }}>
                <h3 style={{ fontSize: 13, fontWeight: 600, color: "#10b981", marginBottom: 6 }}>{item.section}</h3>
                <p style={{ fontSize: 12, color: "#a1a1aa", lineHeight: 1.7 }}>{item.details}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 20 }}>
              Frequently Asked Questions
            </h2>
            
        <AdSenseUnit />
        {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: i < faqs.length - 1 ? "1px solid #27272a" : "none", padding: "16px 0" }}>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 8 }}>{faq.q}</h3>
                <p style={{ fontSize: 13, color: "#71717a", lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

function IncomeTaxCalculatorClient() {
  const [income, setIncome] = React.useState(500000);
  const [regime, setRegime] = React.useState<"new" | "old">("new");
  const [deductions, setDeductions] = React.useState(0);

  const getNewTax = (taxable: number) => {
    if (taxable <= 300000) return 0;
    if (taxable <= 600000) return (taxable - 300000) * 0.05;
    if (taxable <= 900000) return 15000 + (taxable - 600000) * 0.1;
    if (taxable <= 1200000) return 45000 + (taxable - 900000) * 0.15;
    if (taxable <= 1500000) return 90000 + (taxable - 1200000) * 0.2;
    return 150000 + (taxable - 1500000) * 0.3;
  };

  const newTaxable = Math.max(0, income - 75000);
  const oldTaxable = Math.max(0, income - deductions);

  const newTax = getNewTax(newTaxable);
  const oldTax = getNewTax(oldTaxable);

  const cess = newTax * 0.04;
  const totalNewTax = newTax + cess;
  const oldCess = oldTax * 0.04;
  const totalOldTax = oldTax + oldCess;

  const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

  return (
    <div>
      {/* Inputs */}
      <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24, marginBottom: 16 }}>

        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={{ fontSize: 13, color: "#a1a1aa" }}>Gross Annual Income</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: "#f4f4f5" }}>{fmt(income)}</span>
          </div>
          <input
            type="range" min="0" max="5000000" step="10000"
            value={income} onChange={e => setIncome(Number(e.target.value))}
            style={{ width: "100%", accentColor: "#10b981" }}
          />
        </div>

        {regime === "old" && (
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <span style={{ fontSize: 13, color: "#a1a1aa" }}>Total Deductions (80C, 80D, etc.)</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#f4f4f5" }}>{fmt(deductions)}</span>
            </div>
            <input
              type="range" min="0" max="500000" step="10000"
              value={deductions} onChange={e => setDeductions(Number(e.target.value))}
              style={{ width: "100%", accentColor: "#10b981" }}
            />
          </div>
        )}

        {/* Tax Regime Toggle */}
        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          {["new", "old"].map((r) => (
            <button
              key={r}
              onClick={() => setRegime(r as "new" | "old")}
              style={{
                flex: 1, padding: "10px", borderRadius: 10,
                border: "1px solid #27272a",
                background: regime === r ? "#10b981" : "#18181b",
                color: regime === r ? "#000" : "#f4f4f5",
                fontSize: 13, fontWeight: 600, cursor: "pointer",
              }}
            >
              {r === "new" ? "New Regime" : "Old Regime"}
            </button>
          ))}
        </div>

      </div>

      {/* Results */}
      {regime === "new" ? (
        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24, marginBottom: 16 }}>
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 12, color: "#71717a", marginBottom: 8 }}>Gross Income</p>
            <p style={{ fontSize: 18, fontWeight: 700, color: "#f4f4f5", marginBottom: 16 }}>{fmt(income)}</p>
            <div style={{ background: "#18181b", borderRadius: 10, padding: 12, marginBottom: 12 }}>
              <p style={{ fontSize: 12, color: "#71717a" }}>Standard Deduction</p>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#10b981" }}>₹75,000</p>
            </div>
            <p style={{ fontSize: 12, color: "#71717a", marginBottom: 8 }}>Taxable Income</p>
            <p style={{ fontSize: 16, fontWeight: 700, color: "#f4f4f5", marginBottom: 16 }}>{fmt(newTaxable)}</p>
          </div>
          <div style={{ borderTop: "1px solid #27272a", paddingTop: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ color: "#a1a1aa" }}>Income Tax</span>
              <span style={{ color: "#f97316", fontWeight: 600 }}>{fmt(newTax)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
              <span style={{ color: "#a1a1aa" }}>Health & Education Cess (4%)</span>
              <span style={{ color: "#f97316", fontWeight: 600 }}>{fmt(cess)}</span>
            </div>
            <div style={{ background: "rgba(249,115,22,0.1)", borderRadius: 10, padding: 12, textAlign: "center" }}>
              <p style={{ fontSize: 12, color: "#f97316", marginBottom: 4 }}>Total Tax Payable</p>
              <p style={{ fontSize: 20, fontWeight: 800, color: "#f97316" }}>{fmt(totalNewTax)}</p>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24, marginBottom: 16 }}>
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 12, color: "#71717a", marginBottom: 8 }}>Gross Income</p>
            <p style={{ fontSize: 18, fontWeight: 700, color: "#f4f4f5", marginBottom: 16 }}>{fmt(income)}</p>
            <div style={{ background: "#18181b", borderRadius: 10, padding: 12, marginBottom: 12 }}>
              <p style={{ fontSize: 12, color: "#71717a" }}>Deductions (80C, 80D, etc.)</p>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#10b981" }}>{fmt(deductions)}</p>
            </div>
            <p style={{ fontSize: 12, color: "#71717a", marginBottom: 8 }}>Taxable Income</p>
            <p style={{ fontSize: 16, fontWeight: 700, color: "#f4f4f5", marginBottom: 16 }}>{fmt(oldTaxable)}</p>
          </div>
          <div style={{ borderTop: "1px solid #27272a", paddingTop: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ color: "#a1a1aa" }}>Income Tax</span>
              <span style={{ color: "#f97316", fontWeight: 600 }}>{fmt(oldTax)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
              <span style={{ color: "#a1a1aa" }}>Health & Education Cess (4%)</span>
              <span style={{ color: "#f97316", fontWeight: 600 }}>{fmt(oldCess)}</span>
            </div>
            <div style={{ background: "rgba(249,115,22,0.1)", borderRadius: 10, padding: 12, textAlign: "center" }}>
              <p style={{ fontSize: 12, color: "#f97316", marginBottom: 4 }}>Total Tax Payable</p>
              <p style={{ fontSize: 20, fontWeight: 800, color: "#f97316" }}>{fmt(totalOldTax)}</p>
            </div>
          </div>
        </div>
      )}

      {/* Comparison */}
      {Math.abs(totalNewTax - totalOldTax) > 100 && (
        <div style={{ background: regime === "new" && totalNewTax < totalOldTax ? "rgba(16,185,129,0.1)" : "rgba(249,115,22,0.1)", border: regime === "new" && totalNewTax < totalOldTax ? "1px solid rgba(16,185,129,0.2)" : "1px solid rgba(249,115,22,0.2)", borderRadius: 16, padding: 16 }}>
          <p style={{ fontSize: 12, color: regime === "new" && totalNewTax < totalOldTax ? "#10b981" : "#f97316", fontWeight: 600, marginBottom: 6 }}>
            {regime === "new" ? "New Regime Saves" : "Old Regime Saves"}
          </p>
          <p style={{ fontSize: 16, fontWeight: 700, color: regime === "new" && totalNewTax < totalOldTax ? "#10b981" : "#f97316" }}>
            {fmt(Math.abs(totalNewTax - totalOldTax))} annually
          </p>
        </div>
      )}

    </div>
  );
}
