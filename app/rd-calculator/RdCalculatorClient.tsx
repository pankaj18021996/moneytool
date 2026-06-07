"use client";
import Link from "next/link";
import React from "react";
import FAQAccordion from "../components/FAQAccordion";
import AdSenseUnit from "../components/AdSenseUnit";
import ZerodhaCTA from "../components/ZerodhaCTA";

const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

const faqs = [
  { q: "What's the minimum RD investment?", a: "Minimum monthly deposit is ₹100, with a typical bank cap around ₹1,00,000 per month." },
  { q: "Can I close RD prematurely?", a: "Yes — after 6 months you can withdraw early, but the bank may reduce the interest rate by 1-2%." },
  { q: "What is the current RD interest rate?", a: "RD rates vary by bank and tenure, typically 5.5% to 7.0% in 2026. Use your bank's rate for the best estimate." },
  { q: "Is RD interest taxable?", a: "Yes. Recurring deposit interest is taxable as income, and banks may deduct TDS if interest exceeds the prescribed threshold." },
];

function InputRow({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (value: number) => void;
}) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <span style={{ fontSize: 13, color: "#a1a1aa" }}>{label}</span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: "#71717a", fontSize: 13 }}>{unit}</span>
          <input
            type="number"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            style={{
              width: 120,
              textAlign: "right",
              background: "#18181b",
              border: "1px solid #27272a",
              borderRadius: 10,
              padding: "10px 12px",
              color: "#f4f4f5",
              fontSize: 13,
            }}
          />
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: "100%", accentColor: "#10b981" }}
      />
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#52525b", marginTop: 4 }}>
        <span>{min.toLocaleString("en-IN")}</span>
        <span>{max.toLocaleString("en-IN")}</span>
      </div>
    </div>
  );
}

function PieChart({ active, passive }: { active: number; passive: number }) {
  const total = active + passive;
  const slice = total > 0 ? (active / total) * 360 : 0;

  return (
    <div style={{ display: "flex", gap: 18, flexWrap: "wrap", alignItems: "center" }}>
      <div style={{ width: 180, height: 180, borderRadius: "50%", background: `conic-gradient(#10b981 0deg ${slice}deg, #3b82f6 ${slice}deg 360deg)`, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#f4f4f5" }}>
          <span style={{ fontSize: 22, fontWeight: 700 }}>{total > 0 ? Math.round((active / total) * 100) : 0}%</span>
          <span style={{ fontSize: 12, color: "#a1a1aa" }}>Returns</span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", width: 180 }}>
          <span style={{ color: "#a1a1aa", fontSize: 12 }}>Contributions</span>
          <span style={{ color: "#3b82f6", fontWeight: 700 }}>{fmt(passive)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", width: 180 }}>
          <span style={{ color: "#a1a1aa", fontSize: 12 }}>Returns</span>
          <span style={{ color: "#10b981", fontWeight: 700 }}>{fmt(active)}</span>
        </div>
      </div>
    </div>
  );
}

export default function RDCalculatorPage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", color: "#f4f4f5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ display: "flex", gap: 8, fontSize: 13, color: "#71717a", marginBottom: 24, alignItems: "center" }}>
          <Link href="/" style={{ color: "#71717a", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <span style={{ color: "#a1a1aa" }}>RD Calculator</span>
        </div>

        <header style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12, lineHeight: 1.1 }}>Recurring Deposit Calculator India</h1>
          <p style={{ color: "#a1a1aa", fontSize: 17, lineHeight: 1.75, maxWidth: 720 }}>
            Estimate your RD maturity amount, monthly contribution, and compound interest growth. Use this RD calculator to plan disciplined savings for 6 months to 10 years.
          </p>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, marginBottom: 48 }}>
          <RDCalculatorClient />
          <aside style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#10b981", marginBottom: 14 }}>RD Calculator Benefits</h3>
              <ul style={{ paddingLeft: 18, margin: 0, color: "#a1a1aa", fontSize: 14, lineHeight: 1.8 }}>
                <li style={{ marginBottom: 10 }}>Calculate maturity with monthly deposits.</li>
                <li style={{ marginBottom: 10 }}>See how compound interest boosts returns.</li>
                <li style={{ marginBottom: 10 }}>Plan tenure, rate, and monthly savings together.</li>
                <li>Compare your RD target with bank interest rates.</li>
              </ul>
            </div>
            <div style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#10b981", marginBottom: 12 }}>💡 RD Tips</h3>
              {[
                "Start small and increase contributions.",
                "Choose longer tenure for higher return.",
                "Keep TDS and taxability in mind.",
                "Use RD for disciplined savings.",
              ].map((tip, i) => (
                <p key={i} style={{ display: "flex", gap: 8, fontSize: 12, color: "#a1a1aa", marginBottom: 6 }}>
                  <span style={{ color: "#10b981" }}>✓</span>{tip}
                </p>
              ))}
            </div>
          </aside>
        </div>

        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 48 }}>
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14 }}>How Recurring Deposit Works</h2>
            <p style={{ color: "#a1a1aa", lineHeight: 1.9, marginBottom: 10 }}>
              In a recurring deposit, you invest a fixed amount every month and earn compound interest on the accumulated balance. This calculator uses monthly compounding to estimate your final maturity value.
            </p>
            <p style={{ color: "#a1a1aa", lineHeight: 1.9 }}>
              RD is ideal for regular savers who want guaranteed returns without market risk.
            </p>
          </div>
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14 }}>RD vs Other Savings</h2>
            <p style={{ color: "#a1a1aa", lineHeight: 1.9 }}>
              RD gives fixed returns and is simpler than SIPs because there is no market risk. It is less liquid than a savings account, but more disciplined for monthly savings.
            </p>
          </div>
        </section>

        
        <AdSenseUnit />
        
        <ZerodhaCTA context="Ready to grow wealth beyond Recurring Deposits? Open a free demat account and start a SIP in mutual funds for better inflation-adjusted returns." />
        <FAQAccordion items={faqs} />
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
  const projectionMonths = [12, 36, 60, 84, 120].filter((m) => m <= months);

  return (
    <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24, marginBottom: 16 }}>
      <div style={{ marginBottom: 24 }}>
        <InputRow label="Monthly Deposit" value={monthly} min={100} max={100000} step={100} unit="₹" onChange={setMonthly} />
        <InputRow label="Interest Rate (p.a.)" value={rate} min={4} max={10} step={0.1} unit="%" onChange={setRate} />
        <InputRow label="Tenure" value={months} min={6} max={120} step={1} unit="months" onChange={setMonths} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 24 }}>
        {[
          { label: "Total Contributed", value: fmt(invested), color: "#3b82f6" },
          { label: "Estimated Returns", value: fmt(returns), color: "#10b981" },
          { label: "Maturity Value", value: fmt(maturity), color: "#f4f4f5" },
        ].map((card) => (
          <div key={card.label} style={{ background: "#18181b", borderRadius: 12, padding: "16px", textAlign: "center" }}>
            <p style={{ fontSize: 10, color: "#71717a", marginBottom: 6 }}>{card.label}</p>
            <p style={{ fontSize: 15, fontWeight: 700, color: card.color }}>{card.value}</p>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: 24 }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: "#f4f4f5", marginBottom: 16 }}>Returns Breakdown</h3>
        <PieChart active={returns} passive={invested} />
      </div>

      <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 20 }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: "#f4f4f5", marginBottom: 14 }}>Projection Table</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #27272a" }}>
                {['Duration', 'Contributed', 'Projected Maturity'].map((heading) => (
                  <th key={heading} style={{ textAlign: 'left', padding: '10px', color: '#71717a', fontSize: 12 }}>{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {projectionMonths.map((m) => {
                const contributed = monthly * m;
                const maturityAtM = monthly * ((Math.pow(1 + r, m) - 1) / r) * (1 + r);
                return (
                  <tr key={m} style={{ borderBottom: '1px solid #1f1f22' }}>
                    <td style={{ padding: '10px', color: '#a1a1aa' }}>{Math.floor(m / 12)} yr</td>
                    <td style={{ padding: '10px', color: '#a1a1aa' }}>{fmt(contributed)}</td>
                    <td style={{ padding: '10px', color: '#f4f4f5' }}>{fmt(maturityAtM)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
