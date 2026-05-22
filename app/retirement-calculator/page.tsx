"use client";
import Link from "next/link";
import React from "react";

const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

export default function RetirementCalculatorPage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", color: "#f4f4f5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ display: "flex", gap: 8, fontSize: 13, color: "#71717a", marginBottom: 24 }}>
          <Link href="/" style={{ color: "#71717a", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <span>Retirement Planner</span>
        </div>

        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 10 }}>Retirement Planner India 2026</h1>
        <p style={{ color: "#a1a1aa", fontSize: 16, marginBottom: 32, maxWidth: 680 }}>Calculate retirement corpus needed and plan monthly savings for a secure future.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, marginBottom: 48 }}>
          <RetirementCalculatorClient />
          <div style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 16, padding: 20 }}>
            <h3 style={{ fontSize: 14, fontWeight: 600, color: "#10b981", marginBottom: 12 }}>💡 Retirement Tips</h3>
            {["Start early", "Invest in SIPs", "Use tax benefits", "Account for inflation"].map((t, i) => (
              <p key={i} style={{ display: "flex", gap: 8, fontSize: 12, color: "#a1a1aa", marginBottom: 6 }}>
                <span style={{ color: "#10b981" }}>✓</span>{t}
              </p>
            ))}
          </div>
        </div>

        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28, marginBottom: 48 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14 }}>Retirement Planning Formula</h2>
          <p style={{ color: "#a1a1aa", marginBottom: 16, lineHeight: 1.8 }}>Your retirement corpus should cover your post-retirement life expenses adjusted for inflation. The calculator uses the 4% rule: withdraw 4% of corpus annually for expenses.</p>
          <div style={{ background: "#18181b", borderRadius: 12, padding: 16 }}>
            <p style={{ fontSize: 12, color: "#71717a", marginBottom: 8 }}>Formula</p>
            <p style={{ fontSize: 13, fontFamily: "monospace", color: "#10b981" }}>Retirement Corpus = Annual Expenses ÷ 4% (Safe Withdrawal Rate)</p>
          </div>
        </div>

        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14 }}>Inflation Impact on Retirement</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              ["Inflation Rate", "5% annually (conservative)"],
              ["Lifespan", "Plan for 25-30 years post-retirement"],
              ["Healthcare", "Budget extra 8-10% for medical"],
              ["Contingency", "Add 20-30% buffer for emergencies"],
            ].map((f) => (
              <div key={f[0]} style={{ background: "#18181b", borderRadius: 12, padding: 16 }}>
                <p style={{ fontSize: 12, color: "#10b981", marginBottom: 4 }}>{f[0]}</p>
                <p style={{ fontSize: 12, color: "#a1a1aa" }}>{f[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RetirementCalculatorClient() {
  const [currentAge, setCurrentAge] = React.useState(30);
  const [retirementAge, setRetirementAge] = React.useState(60);
  const [annualExpense, setAnnualExpense] = React.useState(500000);
  const [investmentReturn, setInvestmentReturn] = React.useState(10);
  const [inflationRate, setInflationRate] = React.useState(5);

  const yearsToRetirement = retirementAge - currentAge;
  const lifespan = 25;

  // Adjust expenses for inflation
  const futureExpense = annualExpense * Math.pow(1 + inflationRate / 100, yearsToRetirement);

  // Calculate corpus needed (4% rule)
  const corpusNeeded = (futureExpense * lifespan) / 100 * 4;

  // Calculate monthly SIP needed
  const monthsToSave = yearsToRetirement * 12;
  const monthlyRate = investmentReturn / (12 * 100);
  const monthlySIP = monthsToSave > 0
    ? (corpusNeeded / monthlyRate) / (Math.pow(1 + monthlyRate, monthsToSave) - 1)
    : 0;

  return (
    <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24, marginBottom: 16 }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Current Age</span>
          <span style={{ fontSize: 14, fontWeight: 700 }}>{currentAge} years</span>
        </div>
        <input type="range" min="20" max="50" step="1" value={currentAge} onChange={e => setCurrentAge(Number(e.target.value))} style={{ width: "100%", accentColor: "#10b981" }} />
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Retirement Age</span>
          <span style={{ fontSize: 14, fontWeight: 700 }}>{retirementAge} years</span>
        </div>
        <input type="range" min="55" max="70" step="1" value={retirementAge} onChange={e => setRetirementAge(Number(e.target.value))} style={{ width: "100%", accentColor: "#10b981" }} />
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Annual Expense Today</span>
          <span style={{ fontSize: 14, fontWeight: 700 }}>{fmt(annualExpense)}</span>
        </div>
        <input type="range" min="200000" max="2000000" step="50000" value={annualExpense} onChange={e => setAnnualExpense(Number(e.target.value))} style={{ width: "100%", accentColor: "#10b981" }} />
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Expected Return Rate</span>
          <span style={{ fontSize: 14, fontWeight: 700 }}>{investmentReturn.toFixed(1)}%</span>
        </div>
        <input type="range" min="5" max="15" step="0.1" value={investmentReturn} onChange={e => setInvestmentReturn(Number(e.target.value))} style={{ width: "100%", accentColor: "#10b981" }} />
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Inflation Rate</span>
          <span style={{ fontSize: 14, fontWeight: 700 }}>{inflationRate.toFixed(1)}%</span>
        </div>
        <input type="range" min="2" max="8" step="0.1" value={inflationRate} onChange={e => setInflationRate(Number(e.target.value))} style={{ width: "100%", accentColor: "#10b981" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {[
          { label: "Corpus Needed", value: fmt(corpusNeeded), color: "#10b981" },
          { label: "Monthly SIP", value: fmt(monthlySIP), color: "#f97316" },
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
