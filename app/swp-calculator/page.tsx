"use client";
import Link from "next/link";
import React from "react";

const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

export default function SWPCalculatorPage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", color: "#f4f4f5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ display: "flex", gap: 8, fontSize: 13, color: "#71717a", marginBottom: 24 }}>
          <Link href="/" style={{ color: "#71717a", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <span>SWP Calculator</span>
        </div>

        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 10 }}>SWP Calculator India 2026</h1>
        <p style={{ color: "#a1a1aa", fontSize: 16, marginBottom: 32, maxWidth: 680 }}>Calculate Systematic Withdrawal Plan returns and retirement income.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, marginBottom: 48 }}>
          <SWPCalculatorClient />
          <div style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 16, padding: 20 }}>
            <h3 style={{ fontSize: 14, fontWeight: 600, color: "#10b981", marginBottom: 12 }}>💡 SWP Tips</h3>
            {["Tax efficient", "Steady income", "Inflation hedge", "Flexible withdrawal"].map((t, i) => (
              <p key={i} style={{ display: "flex", gap: 8, fontSize: 12, color: "#a1a1aa", marginBottom: 6 }}>
                <span style={{ color: "#10b981" }}>✓</span>{t}
              </p>
            ))}
          </div>
        </div>

        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14 }}>What is SWP?</h2>
          <p style={{ color: "#a1a1aa", lineHeight: 1.8 }}>Systematic Withdrawal Plan lets you withdraw a fixed amount monthly from your mutual fund investment. It's ideal for retirement income while keeping the remaining corpus invested.</p>
        </div>
      </div>
    </div>
  );
}

function SWPCalculatorClient() {
  const [corpus, setCorpus] = React.useState(1000000);
  const [monthly, setMonthly] = React.useState(10000);
  const [rate, setRate] = React.useState(8);
  const [months, setMonths] = React.useState(120);

  let remaining = corpus;
  let totalWithdrawn = 0;

  for (let m = 0; m < months && remaining > 0; m++) {
    const interest = (remaining * rate) / (12 * 100);
    remaining = remaining + interest - monthly;
    totalWithdrawn += monthly;
  }

  const totalReturns = Math.max(0, remaining);
  const corpus_value = totalReturns + totalWithdrawn;

  return (
    <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24, marginBottom: 16 }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Initial Corpus</span>
          <span style={{ fontSize: 14, fontWeight: 700 }}>{fmt(corpus)}</span>
        </div>
        <input type="range" min="100000" max="10000000" step="100000" value={corpus} onChange={e => setCorpus(Number(e.target.value))} style={{ width: "100%", accentColor: "#10b981" }} />
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Monthly Withdrawal</span>
          <span style={{ fontSize: 14, fontWeight: 700 }}>{fmt(monthly)}</span>
        </div>
        <input type="range" min="5000" max="500000" step="5000" value={monthly} onChange={e => setMonthly(Number(e.target.value))} style={{ width: "100%", accentColor: "#10b981" }} />
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Expected Return Rate</span>
          <span style={{ fontSize: 14, fontWeight: 700 }}>{rate.toFixed(1)}%</span>
        </div>
        <input type="range" min="3" max="15" step="0.1" value={rate} onChange={e => setRate(Number(e.target.value))} style={{ width: "100%", accentColor: "#10b981" }} />
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Time Period (Months)</span>
          <span style={{ fontSize: 14, fontWeight: 700 }}>{Math.floor(months / 12)}yr</span>
        </div>
        <input type="range" min="12" max="360" step="1" value={months} onChange={e => setMonths(Number(e.target.value))} style={{ width: "100%", accentColor: "#10b981" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        {[
          { label: "Total Withdrawn", value: fmt(totalWithdrawn), color: "#10b981" },
          { label: "Remaining Corpus", value: fmt(Math.max(0, remaining)), color: "#f97316" },
          { label: "Final Value", value: fmt(corpus_value), color: "#f4f4f5" },
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
