"use client";
import Link from "next/link";
import React from "react";
import FAQAccordion from "../components/FAQAccordion";

const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

const faqs = [
  {
    q: "What is an SWP?",
    a: "A Systematic Withdrawal Plan lets you withdraw a fixed amount from your investment corpus each month while the remaining amount stays invested.",
  },
  {
    q: "How long will my corpus last?",
    a: "This calculator estimates withdrawal longevity based on your corpus, withdrawal amount, expected return, and withdrawal duration.",
  },
  {
    q: "Can SWP replace pension income?",
    a: "SWP can provide regular cash flow, but you should also consider inflation, taxes, and your required retirement income before relying on it fully.",
  },
  {
    q: "Is the withdrawal amount guaranteed?",
    a: "No. The value depends on your corpus performance and return rate. Higher returns help sustain withdrawals longer.",
  },
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
    </div>
  );
}

function PieChart({ primary, secondary }: { primary: number; secondary: number }) {
  const total = primary + secondary;
  const angle = total > 0 ? (primary / total) * 360 : 0;

  return (
    <div style={{ display: "flex", gap: 18, flexWrap: "wrap", alignItems: "center" }}>
      <div style={{ width: 180, height: 180, borderRadius: "50%", background: `conic-gradient(#10b981 0deg ${angle}deg, #3b82f6 ${angle}deg 360deg)`, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#f4f4f5" }}>
          <span style={{ fontSize: 22, fontWeight: 700 }}>{total > 0 ? Math.round((primary / total) * 100) : 0}%</span>
          <span style={{ fontSize: 12, color: "#a1a1aa" }}>Withdrawn</span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", width: 180 }}>
          <span style={{ color: "#a1a1aa", fontSize: 12 }}>Remaining</span>
          <span style={{ color: "#3b82f6", fontWeight: 700 }}>{fmt(secondary)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", width: 180 }}>
          <span style={{ color: "#a1a1aa", fontSize: 12 }}>Withdrawn</span>
          <span style={{ color: "#10b981", fontWeight: 700 }}>{fmt(primary)}</span>
        </div>
      </div>
    </div>
  );
}

export default function SWPCalculatorPage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", color: "#f4f4f5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ display: "flex", gap: 8, fontSize: 13, color: "#71717a", marginBottom: 24, alignItems: "center" }}>
          <Link href="/" style={{ color: "#71717a", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <span style={{ color: "#a1a1aa" }}>SWP Calculator</span>
        </div>

        <header style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12, lineHeight: 1.1 }}>SWP Calculator India</h1>
          <p style={{ color: "#a1a1aa", fontSize: 17, lineHeight: 1.75, maxWidth: 720 }}>
            Estimate how long your investment corpus can support monthly withdrawals. Use this SWP calculator to plan regular retirement income with a systematic withdrawal strategy.
          </p>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, marginBottom: 48 }}>
          <SWPCalculatorClient />
          <aside style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#10b981", marginBottom: 14 }}>SWP Benefits</h3>
              <ul style={{ paddingLeft: 18, margin: 0, color: "#a1a1aa", fontSize: 14, lineHeight: 1.8 }}>
                <li style={{ marginBottom: 10 }}>Create steady monthly income from your corpus.</li>
                <li style={{ marginBottom: 10 }}>Keep the remaining investment working for you.</li>
                <li style={{ marginBottom: 10 }}>Adjust the withdrawal amount to suit your needs.</li>
                <li>Track longevity using realistic return assumptions.</li>
              </ul>
            </div>
            <div style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#10b981", marginBottom: 12 }}>💡 SWP Tips</h3>
              {[
                "Keep withdrawals below returns where possible.",
                "Review corpus performance annually.",
                "Account for taxes and inflation.",
                "Use SWP for steady retirement cash flow.",
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
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14 }}>How SWP Works</h2>
            <p style={{ color: "#a1a1aa", lineHeight: 1.9 }}>
              In SWP, you withdraw a fixed amount from your invested corpus every month. The remaining balance earns returns, which determines how long the corpus lasts.
            </p>
          </div>
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14 }}>SWP vs Lump Sum</h2>
            <p style={{ color: "#a1a1aa", lineHeight: 1.9 }}>
              A lump sum withdrawal ends the investment immediately, while SWP spreads withdrawals and keeps funds invested for a longer period.
            </p>
          </div>
        </section>

        <FAQAccordion items={faqs} />
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
  const history: { year: number; remaining: number; withdrawn: number }[] = [];

  for (let m = 0; m < months && remaining > 0; m++) {
    const interest = (remaining * rate) / (12 * 100);
    remaining = remaining + interest - monthly;
    totalWithdrawn += monthly;
    if ((m + 1) % 12 === 0 || m === months - 1) {
      history.push({ year: Math.floor((m + 1) / 12), remaining: Math.max(0, remaining), withdrawn: totalWithdrawn });
    }
  }

  const remainingCorpus = Math.max(0, remaining);
  const finalValue = remainingCorpus + totalWithdrawn;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24 }}>
        <InputRow label="Corpus" value={corpus} min={100000} max={10000000} step={100000} unit="₹" onChange={setCorpus} />
        <InputRow label="Monthly Withdrawal" value={monthly} min={5000} max={500000} step={5000} unit="₹" onChange={setMonthly} />
        <InputRow label="Expected Return Rate" value={rate} min={3} max={15} step={0.1} unit="%" onChange={setRate} />
        <InputRow label="Withdrawal Duration" value={months} min={12} max={360} step={1} unit="months" onChange={setMonths} />
      </div>

      <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 24 }}>
          {[
            { label: "Total Withdrawn", value: fmt(totalWithdrawn), color: "#10b981" },
            { label: "Remaining Corpus", value: fmt(remainingCorpus), color: "#3b82f6" },
            { label: "Final Value", value: fmt(finalValue), color: "#f4f4f5" },
          ].map((stat) => (
            <div key={stat.label} style={{ background: "#18181b", borderRadius: 12, padding: "14px 10px", textAlign: "center" }}>
              <p style={{ fontSize: 10, color: "#71717a", marginBottom: 4 }}>{stat.label}</p>
              <p style={{ fontSize: 15, fontWeight: 700, color: stat.color }}>{stat.value}</p>
            </div>
          ))}
        </div>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: "#f4f4f5", marginBottom: 16 }}>Withdrawal Breakdown</h3>
        <PieChart primary={totalWithdrawn} secondary={remainingCorpus} />
      </div>

      <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24 }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: "#f4f4f5", marginBottom: 16 }}>Yearly Snapshot</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #27272a" }}>
                {['Year', 'Withdrawn', 'Remaining Corpus'].map((heading) => (
                  <th key={heading} style={{ textAlign: 'left', padding: '10px', color: '#71717a', fontSize: 12 }}>{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {history.map((row) => (
                <tr key={row.year} style={{ borderBottom: '1px solid #1f1f22' }}>
                  <td style={{ padding: '10px', color: '#a1a1aa' }}>{row.year} yr</td>
                  <td style={{ padding: '10px', color: '#10b981' }}>{fmt(row.withdrawn)}</td>
                  <td style={{ padding: '10px', color: '#f4f4f5' }}>{fmt(row.remaining)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
