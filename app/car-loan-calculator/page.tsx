"use client";
import React from "react";
import Link from "next/link";

const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

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
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", color: "#f4f4f5" }}>
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
                  EMI = P × r × (1+r)ⁿ<br />÷ [(1+r)ⁿ − 1]
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

        {/* Content Sections */}
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

          {/* Total Cost of Ownership */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: "#f4f4f5" }}>
              Total Cost of Ownership (TCO)
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { label: "Car Price", desc: "₹15L to ₹50L (varies by model)" },
                { label: "Interest Paid", desc: "15-25% of car price over 5-7 years" },
                { label: "Registration & Insurance", desc: "5-10% of car price upfront" },
                { label: "Maintenance & Fuel", desc: "₹5-15k/month depending on model" },
                { label: "Depreciation", desc: "15-20% Year 1, 50-60% after 5 years" },
                { label: "Total 5-Year Cost", desc: "₹25-35L for ₹15L car" },
              ].map((b) => (
                <div key={b.label} style={{ background: "#18181b", border: "1px solid #27272a", borderRadius: 12, padding: 16 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#f4f4f5", marginBottom: 4 }}>{b.label}</p>
                  <p style={{ fontSize: 12, color: "#71717a" }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: "#f4f4f5" }}>
              Car Loan Eligibility Criteria
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { label: "Age", value: "Minimum 21, Maximum 65 years at repayment" },
                { label: "Monthly Income", value: "Minimum ₹25,000 - ₹50,000 depending on bank" },
                { label: "Credit Score", value: "Minimum 650 CIBIL score (700+ preferred)" },
                { label: "Employment", value: "Salaried (1 year) / Self-employed (2 years)" },
                { label: "Loan-to-Value", value: "Bank lends 80-90% of ex-showroom price" },
                { label: "Down Payment", value: "10-20% of car price from your pocket" },
              ].map((e) => (
                <div key={e.label}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#f4f4f5", marginBottom: 4 }}>{e.label}</p>
                  <p style={{ fontSize: 12, color: "#71717a" }}>{e.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How to Apply */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: "#f4f4f5" }}>
              How to Apply for a Car Loan
            </h2>
            {[
              { step: "Step 1", text: "Check eligibility and compare rates from multiple lenders" },
              { step: "Step 2", text: "Get pre-approval letter for quick disbursement" },
              { step: "Step 3", text: "Select car and get price quote from dealer" },
              { step: "Step 4", text: "Submit application with documents to lender" },
              { step: "Step 5", text: "Complete verification and get loan approval" },
              { step: "Step 6", text: "Complete paperwork and disburse funds to dealer" },
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

          {/* FAQs */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: "#f4f4f5" }}>
              Frequently Asked Questions
            </h2>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: i < faqs.length - 1 ? "1px solid #27272a" : "none", padding: "16px 0" }}>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 8 }}>{faq.q}</h3>
                <p style={{ fontSize: 13, color: "#71717a", lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Why Choose */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: "#f4f4f5" }}>
              Why Use MoneyTool Car Loan Calculator?
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { icon: "🎯", title: "Instant Results", desc: "Real-time EMI calculations as you adjust values" },
                { icon: "🔒", title: "100% Private", desc: "No login or signup required, no data collection" },
                { icon: "📊", title: "Compare Rates", desc: "Current rates from 8+ banks and NBFCs" },
                { icon: "📱", title: "Mobile Friendly", desc: "Works seamlessly on all devices" },
              ].map((f) => (
                <div key={f.title} style={{ background: "#18181b", border: "1px solid #27272a", borderRadius: 12, padding: 16 }}>
                  <p style={{ fontSize: 18, marginBottom: 8 }}>{f.icon}</p>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#f4f4f5", marginBottom: 4 }}>{f.title}</p>
                  <p style={{ fontSize: 12, color: "#71717a", lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

function CarLoanCalculatorClient() {
  const [amount, setAmount] = React.useState(1000000);
  const [rate, setRate] = React.useState(9.0);
  const [tenure, setTenure] = React.useState(60);

  const mr = rate / 1200;
  const emi = (amount * mr * Math.pow(1 + mr, tenure)) / (Math.pow(1 + mr, tenure) - 1);
  const totalPay = emi * tenure;
  const totalInt = totalPay - amount;

  return (
    <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24, marginBottom: 16 }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Loan Amount</span>
          <span style={{ fontSize: 14, fontWeight: 700 }}>{fmt(amount)}</span>
        </div>
        <input type="range" min="200000" max="50000000" step="50000" value={amount} onChange={e => setAmount(Number(e.target.value))} style={{ width: "100%", accentColor: "#10b981" }} />
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Interest Rate (%)</span>
          <span style={{ fontSize: 14, fontWeight: 700 }}>{rate.toFixed(2)}%</span>
        </div>
        <input type="range" min="7" max="16" step="0.1" value={rate} onChange={e => setRate(Number(e.target.value))} style={{ width: "100%", accentColor: "#10b981" }} />
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Tenure (Months)</span>
          <span style={{ fontSize: 14, fontWeight: 700 }}>{Math.floor(tenure / 12)}yr {tenure % 12}mo</span>
        </div>
        <input type="range" min="12" max="84" step="1" value={tenure} onChange={e => setTenure(Number(e.target.value))} style={{ width: "100%", accentColor: "#10b981" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        {[
          { label: "Monthly EMI", value: fmt(emi), color: "#10b981" },
          { label: "Total Interest", value: fmt(totalInt), color: "#f97316" },
          { label: "Total Payment", value: fmt(totalPay), color: "#f4f4f5" },
        ].map((s) => (
          <div key={s.label} style={{ background: "#18181b", borderRadius: 12, padding: "14px 10px", textAlign: "center" }}>
            <p style={{ fontSize: 10, color: "#71717a", marginBottom: 4 }}>{s.label}</p>
            <p style={{ fontSize: 15, fontWeight: 700, color: s.color }}>{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
