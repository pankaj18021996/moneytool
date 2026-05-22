"use client";
import Link from "next/link";

const faqs = [
  {
    q: "What is the minimum investment in PPF?",
    a: "The minimum annual investment is ₹500 and maximum is ₹1.5 lakh per financial year.",
  },
  {
    q: "How long is the PPF maturity period?",
    a: "The base maturity period is 15 years. You can extend for 5-year blocks after maturity.",
  },
  {
    q: "What is the current PPF interest rate?",
    a: "As of 2026, the PPF interest rate is 7.1% per annum, compounded annually.",
  },
  {
    q: "Can I withdraw from PPF before maturity?",
    a: "Yes, after 7 years you can withdraw up to 50% of the balance or previous year's balance.",
  },
  {
    q: "Is PPF eligible for tax benefits?",
    a: "Yes, PPF qualifies under Section 80C (investment deduction) and interest is completely tax-free.",
  },
  {
    q: "Can a senior citizen open a PPF account?",
    a: "Yes, anyone including minors and senior citizens can open a PPF account.",
  },
];

export default function PPFCalculatorPage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", color: "#f4f4f5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", gap: 8, fontSize: 13, color: "#71717a", marginBottom: 24, alignItems: "center" }}>
          <Link href="/" style={{ color: "#71717a", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <span style={{ color: "#a1a1aa" }}>PPF Calculator</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "#f4f4f5", marginBottom: 10, lineHeight: 1.2 }}>
            PPF Calculator India 2026
          </h1>
          <p style={{ color: "#a1a1aa", fontSize: 16, lineHeight: 1.6, maxWidth: 680 }}>
            Calculate your Public Provident Fund maturity amount and projected returns. Plan your retirement with 100% tax-free investment.
          </p>
        </div>

        {/* Calculator Section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 320px",
          gap: 24,
          alignItems: "start",
          marginBottom: 48,
        }}>

          {/* Left — Calculator */}
          <PPFCalculatorClient />

          {/* Right — Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* Formula */}
            <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 12 }}>
                PPF Formula
              </h3>
              <div style={{ background: "#18181b", borderRadius: 10, padding: 14, textAlign: "center", marginBottom: 12 }}>
                <p style={{ fontSize: 13, color: "#a1a1aa", fontFamily: "monospace", lineHeight: 1.8 }}>
                  A = P × [((1+r)ⁿ - 1) / r] × (1+r)
                </p>
              </div>
              <div style={{ fontSize: 12, color: "#71717a", lineHeight: 2 }}>
                <p><span style={{ color: "#10b981" }}>A</span> = Maturity amount</p>
                <p><span style={{ color: "#10b981" }}>P</span> = Annual investment</p>
                <p><span style={{ color: "#10b981" }}>r</span> = Annual rate/100</p>
                <p><span style={{ color: "#10b981" }}>n</span> = Number of years</p>
              </div>
            </div>

            {/* Key Facts */}
            <div style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#10b981", marginBottom: 12 }}>
                💡 PPF Features
              </h3>
              {[
                "100% Tax-free returns",
                "Guaranteed returns by Govt",
                "No limit on maturity amount",
                "Extend post-maturity",
                "Partial withdrawal allowed",
              ].map((tip, i) => (
                <p key={i} style={{ display: "flex", gap: 8, fontSize: 12, color: "#a1a1aa", lineHeight: 1.7, marginBottom: 6 }}>
                  <span style={{ color: "#10b981", flexShrink: 0 }}>✓</span>
                  {tip}
                </p>
              ))}
            </div>

          </div>
        </div>

        {/* SEO Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 48 }}>

          {/* What is PPF */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 14 }}>
              What is PPF?
            </h2>
            <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.9, marginBottom: 10 }}>
              Public Provident Fund (PPF) is a long-term savings and investment scheme offered by the Indian government. It's one of the safest investment options with guaranteed returns backed by the government.
            </p>
            <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.9 }}>
              Invested through post offices and authorized banks, PPF provides both security and excellent returns with complete tax exemption on maturity amount.
            </p>
          </div>

          {/* Investment Rules */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 14 }}>
              PPF Investment Rules & Limits
            </h2>
            <div style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.9 }}>
              <p style={{ marginBottom: 10 }}><strong style={{ color: "#f4f4f5" }}>Minimum Investment:</strong> ₹500 per annum</p>
              <p style={{ marginBottom: 10 }}><strong style={{ color: "#f4f4f5" }}>Maximum Investment:</strong> ₹1,50,000 per annum</p>
              <p style={{ marginBottom: 10 }}><strong style={{ color: "#f4f4f5" }}>Maturity Period:</strong> 15 years</p>
              <p style={{ marginBottom: 10 }}><strong style={{ color: "#f4f4f5" }}>Interest Rate (2026):</strong> 7.1% per annum</p>
              <p style={{ marginBottom: 10 }}><strong style={{ color: "#f4f4f5" }}>Eligibility:</strong> Indian citizens (age-unlimited, minors with guardian)</p>
            </div>
          </div>

          {/* Withdrawal Rules */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 14 }}>
              PPF Withdrawal Rules
            </h2>
            {[
              { period: "Years 1-6", withdrawal: "No withdrawal allowed" },
              { period: "Year 7 onwards", withdrawal: "Up to 50% of balance or previous year's balance (whichever is lower)" },
              { period: "After 15 years", withdrawal: "Full maturity amount" },
              { period: "Post-maturity", withdrawal: "Can extend for 5-year blocks with same or modified amount" },
            ].map((rule, i) => (
              <div key={i} style={{ display: "flex", gap: 14, marginBottom: 14, paddingBottom: 14, borderBottom: i < 3 ? "1px solid #27272a" : "none" }}>
                <div style={{ minWidth: 100 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#10b981" }}>{rule.period}</p>
                </div>
                <p style={{ fontSize: 13, color: "#a1a1aa" }}>{rule.withdrawal}</p>
              </div>
            ))}
          </div>

          {/* Tax Benefits */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 14 }}>
              PPF Tax Benefits
            </h2>
            <div style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.9 }}>
              <p style={{ marginBottom: 12 }}>PPF offers exceptional tax advantages:</p>
              <div style={{ background: "#18181b", borderRadius: 12, padding: 16, marginBottom: 12 }}>
                <p style={{ marginBottom: 10 }}><strong style={{ color: "#10b981" }}>Section 80C Deduction:</strong> Investment amount is fully deductible from taxable income (max ₹1.5L)</p>
                <p style={{ marginBottom: 10 }}><strong style={{ color: "#10b981" }}>Tax-Free Interest:</strong> All accrued interest is completely tax-exempt</p>
                <p><strong style={{ color: "#10b981" }}>Tax-Free Maturity:</strong> Maturity amount is not taxable</p>
              </div>
              <p style={{ fontSize: 12, color: "#71717a" }}>This makes PPF one of the most tax-efficient investment instruments in India.</p>
            </div>
          </div>

          {/* Comparison */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 14 }}>
              PPF vs Other Investment Options
            </h2>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, marginTop: 12 }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid #27272a" }}>
                    {["Aspect", "PPF", "FD", "SIP", "RD"].map(h => (
                      <th key={h} style={{ padding: "10px", textAlign: "left", fontWeight: 600, color: "#71717a", fontSize: 12 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Safety", "Govt Backed ✓", "Bank Backed ✓", "Market Risk", "Bank Backed ✓"],
                    ["Returns", "7.1% (Fixed)", "5.5-6.5%", "12-15%*", "5-6%"],
                    ["Maturity", "15 years", "Flexible", "Flexible", "Flexible"],
                    ["Tax (Interest)", "0%", "Taxable", "Taxable", "Taxable"],
                    ["Liquidity", "After 7yr", "100%", "High", "After tenure"],
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
            <p style={{ fontSize: 11, color: "#52525b", marginTop: 12 }}>*SIP returns are not guaranteed and subject to market conditions</p>
          </div>

          {/* FAQ */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 20 }}>
              Frequently Asked Questions
            </h2>
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

function PPFCalculatorClient() {
  const [annual, setAnnual] = React.useState(50000);
  const [rate, setRate] = React.useState(7.1);
  const [years, setYears] = React.useState(15);

  const n = years;
  const r = rate / 100;
  const invested = annual * n;
  const maturity = annual * (Math.pow(1 + r, n) - 1) / r * (1 + r);
  const returns = maturity - invested;

  const fmt = (num: number) => "₹" + Math.round(num).toLocaleString("en-IN");
  const iPct = ((invested / maturity) * 100).toFixed(1);
  const rPct = (100 - Number(iPct)).toFixed(1);

  return (
    <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24, marginBottom: 16 }}>

      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Annual Investment</span>
          <button
            onClick={() => setAnnual(Number(prompt("Enter amount:", String(annual)) || annual))}
            style={{
              background: "#18181b", border: "1px solid #27272a", borderRadius: 8,
              padding: "4px 12px", color: "#f4f4f5", fontSize: 14, fontWeight: 700,
              cursor: "pointer", fontFamily: "inherit",
            }}
          >
            {fmt(annual)} ✏️
          </button>
        </div>
        <input
          type="range" min="500" max="150000" step="500"
          value={annual} onChange={e => setAnnual(Number(e.target.value))}
          style={{ width: "100%", accentColor: "#10b981" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#52525b", marginTop: 4 }}>
          <span>₹500</span>
          <span>₹1.5L</span>
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Interest Rate (p.a.)</span>
          <button
            onClick={() => setRate(Number(prompt("Enter rate:", String(rate)) || rate))}
            style={{
              background: "#18181b", border: "1px solid #27272a", borderRadius: 8,
              padding: "4px 12px", color: "#f4f4f5", fontSize: 14, fontWeight: 700,
              cursor: "pointer", fontFamily: "inherit",
            }}
          >
            {rate.toFixed(1)}% ✏️
          </button>
        </div>
        <input
          type="range" min="5" max="12" step="0.1"
          value={rate} onChange={e => setRate(Number(e.target.value))}
          style={{ width: "100%", accentColor: "#10b981" }}
        />
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Investment Period</span>
          <button
            onClick={() => setYears(Number(prompt("Enter years:", String(years)) || years))}
            style={{
              background: "#18181b", border: "1px solid #27272a", borderRadius: 8,
              padding: "4px 12px", color: "#f4f4f5", fontSize: 14, fontWeight: 700,
              cursor: "pointer", fontFamily: "inherit",
            }}
          >
            {years} yrs ✏️
          </button>
        </div>
        <input
          type="range" min="1" max="40" step="1"
          value={years} onChange={e => setYears(Number(e.target.value))}
          style={{ width: "100%", accentColor: "#10b981" }}
        />
      </div>

      {/* Results */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 20 }}>
        {[
          { label: "Total Invested", value: fmt(invested), color: "#10b981" },
          { label: "Est. Returns", value: fmt(returns), color: "#f97316" },
          { label: "Maturity Amount", value: fmt(maturity), color: "#f4f4f5" },
        ].map((s) => (
          <div key={s.label} style={{
            background: "#18181b", border: "1px solid #27272a",
            borderRadius: 12, padding: "14px 10px", textAlign: "center",
          }}>
            <p style={{ fontSize: 10, color: "#71717a", marginBottom: 4 }}>{s.label}</p>
            <p style={{ fontSize: 15, fontWeight: 700, color: s.color }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div style={{ display: "flex", borderRadius: 999, overflow: "hidden", height: 8, marginBottom: 10 }}>
        <div style={{ width: iPct + "%", background: "#10b981", transition: "width 0.5s" }} />
        <div style={{ flex: 1, background: "#f97316" }} />
      </div>
      <div style={{ display: "flex", gap: 16, fontSize: 12, color: "#71717a" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981" }} />
          Invested ({iPct}%)
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f97316" }} />
          Returns ({rPct}%)
        </span>
      </div>

    </div>
  );
}

import React from "react";
