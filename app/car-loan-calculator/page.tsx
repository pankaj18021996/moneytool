import FAQSchema from "../components/FAQSchema";
import { BreadcrumbSchema } from "../components/Breadcrumb";

const carLoanFaqs = [
  { question: "What is the average car loan EMI in India?", answer: "Average car loan EMI ranges from ₹5,000 to ₹30,000/month depending on car price, interest rate (8.75-12%), and tenure (2-7 years)." },
  { question: "Can I get a 100% car loan?", answer: "Most banks provide 80-90% of car price. You need to pay 10-20% as down payment." },
  { question: "What documents are needed for a car loan?", answer: "Identity proof, address proof, income proof (salary slip/ITR), bank statements, and employment letter." },
  { question: "What is the maximum car loan tenure?", answer: "Most banks offer up to 7 years (84 months). Longer tenure means lower EMI but higher total interest." },
  { question: "Can I refinance my car loan?", answer: "Yes, if rates have dropped or your credit score improved. Check for prepayment penalties and processing fees first." },
  { question: "How does car depreciation affect my loan?", answer: "Cars depreciate 15-20% in year one. If loan value exceeds car value, you're underwater — risky if the car is totaled." },
];

import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
export const metadata: Metadata = seoMetadata as Metadata;

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const CarLoanCalculatorClient = dynamic(() => import("./CarLoanCalculatorClient"), {
  ssr: false,
  loading: () => null,
});

const faqs = [
  { q: "What is the average car loan EMI in India?", a: "Average car loan EMI ranges from ₹5,000 to ₹30,000 per month, depending on car price, loan amount, interest rate (8.75%-12%), and tenure (2-7 years)." },
  { q: "Can I get 100% car loan?", a: "Most banks provide 80-90% of car price. You need to pay 10-20% as down payment from your own funds." },
  { q: "What documents are needed for car loan?", a: "Identity proof, address proof, income proof (salary slip/ITR), bank statements, credit report, and employment letter." },
  { q: "What is the maximum tenure for car loan?", a: "Most banks offer car loans up to 7 years (84 months). Some offer up to 8 years, but longer tenure means higher total interest." },
  { q: "Can I refinance my car loan?", a: "Yes, you can refinance if rates have dropped or your credit score improved. But check for prepayment penalties and processing fees." },
  { q: "How does car depreciation affect my loan?", a: "Cars depreciate 15-20% in first year. If loan > car value, you're underwater on the loan, which is risky if car is totaled." },
];

const bankRates = [
  ["SBI", "8.75%", "₹5,247"],
  ["HDFC Bank", "9.25%", "₹5,557"],
  ["ICICI Bank", "9.25%", "₹5,557"],
  ["Axis Bank", "9.25%", "₹5,557"],
  ["Maruti Finance", "8.75%", "₹5,247"],
  ["Bajaj Auto Finance", "9.00%", "₹5,398"],
  ["Kotak Mahindra", "9.25%", "₹5,557"],
  ["IndusInd Bank", "8.85%", "₹5,309"],
];

export default function CarLoanCalculatorPage() {
  return (
    <>
    <FAQSchema items={carLoanFaqs} />
    <BreadcrumbSchema items={[{name:"Home",url:"https://www.moneytool.in"},{name:"Car Loan Calculator",url:"https://www.moneytool.in/car-loan-calculator"}]} />
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#f4f4f5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", gap: 8, fontSize: 13, color: "#71717a", marginBottom: 24 }}>
          <Link href="/" style={{ color: "#71717a", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <span>Car Loan Calculator</span>
        </div>

        {/* Header */}
        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 10, color: "#f4f4f5" }}>
          Car Loan Calculator India 2026
        </h1>
        <p style={{ color: "#a1a1aa", fontSize: 16, marginBottom: 32, maxWidth: 680, lineHeight: 1.6 }}>
          Calculate car loan EMI, total cost of ownership, and compare rates from 8+ banks and financial institutions. Plan your car purchase with accurate calculations.
        </p>

        {/* Calculator + Sidebar */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, marginBottom: 48 }}>
          <CarLoanCalculatorClient />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#10b981", marginBottom: 12 }}>💡 Car Loan Tips</h3>
              {["Keep EMI < 40% of salary", "Longer tenure = higher interest", "Compare 3+ lenders", "Negotiate down payment", "Check insurance costs too"].map((t, i) => (
                <p key={i} style={{ display: "flex", gap: 8, fontSize: 12, color: "#a1a1aa", marginBottom: 6 }}>
                  <span style={{ color: "#10b981" }}>✓</span>{t}
                </p>
              ))}
            </div>

            <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 12 }}>📋 Formula</h3>
              <div style={{ background: "#18181b", borderRadius: 10, padding: 12, textAlign: "center", marginBottom: 12 }}>
                <p style={{ fontSize: 12, color: "#a1a1aa", fontFamily: "monospace", lineHeight: 1.6 }}>
                  EMI = P x r x (1+r)^n ÷ [(1+r)^n − 1]
                </p>
              </div>
              <div style={{ fontSize: 11, color: "#71717a", lineHeight: 1.8 }}>
                <p><span style={{ color: "#10b981" }}>P</span> = Loan amount</p>
                <p><span style={{ color: "#10b981" }}>r</span> = Monthly rate</p>
                <p><span style={{ color: "#10b981" }}>n</span> = Months</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections (trimmed for brevity) */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

          {/* Current Rates */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: "#f4f4f5" }}>
              Current Car Loan Interest Rates in India (2026)
            </h2>
            <p style={{ fontSize: 13, color: "#71717a", marginBottom: 20 }}>
              Indicative rates — EMI per ₹5 lakh for 5 years
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid #27272a" }}>
                    {["Bank/NBFC", "Rate (p.a.)", "EMI/₹5L (5yr)"].map(h => (
                      <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontWeight: 600, color: "#71717a", fontSize: 12 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bankRates.map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #1f1f22", background: i % 2 ? "#18181b" : "transparent" }}>
                      <td style={{ padding: "10px 12px", color: "#f4f4f5", fontWeight: 500 }}>{row[0]}</td>
                      <td style={{ padding: "10px 12px", color: "#10b981" }}>{row[1]}</td>
                      <td style={{ padding: "10px 12px", color: "#a1a1aa" }}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </div>
    </>
  );
}
