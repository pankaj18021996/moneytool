"use client";
import Link from "next/link";
import React from "react";

const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

const faqs = [
  { q: "What's minimum RD investment?", a: "Minimum deposit: ₹100/month, maximum ₹1,00,000/month. Tenure: 6 months to 10 years." },
  { q: "Can I close RD prematurely?", a: "Yes, after 6 months. You get interest rate 1-2% less than promised rate." },
  { q: "What is the current RD interest rate?", a: "RD rates vary by bank (5.5-7% in 2026). Use this calculator with your bank's rate." },
  { q: "Is RD interest taxable?", a: "Yes, RD interest is fully taxable. Banks issue Form 16A if TDS is deducted." },
];

export default function RDCalculatorPage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", color: "#f4f4f5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ display: "flex", gap: 8, fontSize: 13, color: "#71717a", marginBottom: 24 }}>
          <Link href="/" style={{ color: "#71717a", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <span style={{ color: "#a1a1aa" }}>RD Calculator</span>
        </div>

        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 10 }}>RD Calculator India 2026</h1>
        <p style={{ color: "#a1a1aa", fontSize: 16, marginBottom: 32, maxWidth: 680 }}>Calculate recurring deposit maturity and returns. Build savings with fixed deposits every month.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, marginBottom: 48 }}>
          <RDCalculatorClient />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#10b981", marginBottom: 12 }}>💡 RD Tips</h3>
              {["Fixed returns", "Easy to open", "Disciplined saving", "Flexible tenure"].map((t, i) => (
                <p key={i} style={{ display: "flex", gap: 8, fontSize: 12, color: "#a1a1aa", marginBottom: 6 }}>
                  <span style={{ color: "#10b981" }}>✓</span>{t}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 48 }}>
          {[
            { title: "RD Features", content: "Safe: Bank-backed investment. Fixed: Guaranteed returns. Flexible: Adjust tenure 6mo-10yr." },
            { title: "Penalties", content: "Early withdrawal: 1-2% rate reduction. Maturity: No penalty. Overdraft: Available up to 50% balance." },
          ].map((s) => (
            <div key={s.title} style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24 }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{s.title}</h2>
              <p style={{ color: "#a1a1aa", lineHeight: 1.7 }}>{s.content}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: i < faqs.length - 1 ? "1px solid #27272a" : "none", padding: "16px 0" }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>{faq.q}</h3>
              <p style={{ fontSize: 13, color: "#71717a", lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RDCalculatorClient() {
  const [monthly, setMonthly] = React.useState(5000);
  const [rate, setRate] = React.useState(6.5);
  const [months, setMonths] = React.useState(60);

  const invested = monthly * months;
  const r = rate / (12 * 100);
  const maturity = monthly * ((Math.pow(1 + r, months) - 1) / r) * (1 + r);
  const returns = maturity - invested;

  return (
    <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24, marginBottom: 16 }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Monthly Deposit</span>
          <span style={{ fontSize: 14, fontWeight: 700 }}>{fmt(monthly)}</span>
        </div>
        <input type="range" min="100" max="100000" step="100" value={monthly} onChange={e => setMonthly(Number(e.target.value))} style={{ width: "100%", accentColor: "#10b981" }} />
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Interest Rate (p.a.)</span>
          <span style={{ fontSize: 14, fontWeight: 700 }}>{rate.toFixed(2)}%</span>
        </div>
        <input type="range" min="4" max="10" step="0.1" value={rate} onChange={e => setRate(Number(e.target.value))} style={{ width: "100%", accentColor: "#10b981" }} />
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Tenure (Months)</span>
          <span style={{ fontSize: 14, fontWeight: 700 }}>{months}mo ({Math.floor(months / 12)}yr)</span>
        </div>
        <input type="range" min="6" max="120" step="1" value={months} onChange={e => setMonths(Number(e.target.value))} style={{ width: "100%", accentColor: "#10b981" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 16 }}>
        {[
          { label: "Invested", value: fmt(invested), color: "#10b981" },
          { label: "Est. Returns", value: fmt(returns), color: "#f97316" },
          { label: "Maturity", value: fmt(maturity), color: "#f4f4f5" },
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
