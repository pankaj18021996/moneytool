"use client";
import Link from "next/link";
import React from "react";

const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

export default function TDSCalculatorPage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", color: "#f4f4f5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ display: "flex", gap: 8, fontSize: 13, color: "#71717a", marginBottom: 24 }}>
          <Link href="/" style={{ color: "#71717a", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <span>TDS Calculator</span>
        </div>

        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 10 }}>TDS Calculator India 2026</h1>
        <p style={{ color: "#a1a1aa", fontSize: 16, marginBottom: 32, maxWidth: 680 }}>Calculate TDS on salary, rent, and professional fees. Understand tax deductions.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, marginBottom: 48 }}>
          <TDSCalculatorClient />
          <div style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 16, padding: 20 }}>
            <h3 style={{ fontSize: 14, fontWeight: 600, color: "#10b981", marginBottom: 12 }}>💡 TDS Types</h3>
            {["Salary TDS", "Rent TDS (10%)", "Professional Fees", "Interest on FD"].map((t, i) => (
              <p key={i} style={{ display: "flex", gap: 8, fontSize: 12, color: "#a1a1aa", marginBottom: 6 }}>
                <span style={{ color: "#10b981" }}>✓</span>{t}
              </p>
            ))}
          </div>
        </div>

        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14 }}>TDS Rates on Income</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #27272a" }}>
                  {["Income Type", "Rate", "Threshold (PAN)"].map(h => (
                    <th key={h} style={{ padding: "10px", textAlign: "left", fontWeight: 600, color: "#71717a" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Rent", "10%", "₹2.4L/year"],
                  ["Professional Fees", "10%", "₹30K/year"],
                  ["Commission", "5-10%", "Varies"],
                  ["FD Interest", "10%", "₹40K/year"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #1f1f22", background: i % 2 ? "#18181b" : "transparent" }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: "10px", color: "#a1a1aa" }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function TDSCalculatorClient() {
  const [amount, setAmount] = React.useState(100000);
  const [type, setType] = React.useState<"rent" | "fees" | "fd">("rent");

  const rateMap = { rent: 10, fees: 10, fd: 10 };
  const rate = rateMap[type];
  const tds = (amount * rate) / 100;
  const net = amount - tds;

  return (
    <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24, marginBottom: 16 }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Amount</span>
          <span style={{ fontSize: 14, fontWeight: 700 }}>{fmt(amount)}</span>
        </div>
        <input type="range" min="10000" max="5000000" step="10000" value={amount} onChange={e => setAmount(Number(e.target.value))} style={{ width: "100%", accentColor: "#10b981" }} />
      </div>

      <div style={{ marginBottom: 20 }}>
        <p style={{ fontSize: 13, color: "#a1a1aa", marginBottom: 12 }}>TDS Type</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {["rent", "fees", "fd"].map((t) => (
            <button key={t} onClick={() => setType(t as any)} style={{ padding: "10px", borderRadius: 10, border: "1px solid #27272a", background: type === t ? "#10b981" : "#18181b", color: type === t ? "#000" : "#f4f4f5", fontSize: 12, fontWeight: 600, cursor: "pointer", textTransform: "capitalize" }}>
              {t === "rent" ? "Rent" : t === "fees" ? "Professional Fees" : "FD Interest"}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {[
          { label: "TDS (" + rate + "%)", value: fmt(tds), color: "#f97316" },
          { label: "Net Amount", value: fmt(net), color: "#10b981" },
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
