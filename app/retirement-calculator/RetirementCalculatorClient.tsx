"use client";
import Link from "next/link";
import React from "react";
import FAQAccordion from "../components/FAQAccordion";
import AdSenseUnit from "../components/AdSenseUnit";
import ZerodhaCTA from "../components/ZerodhaCTA";

const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

const faqs = [
  {
    q: "How much corpus do I need for retirement?",
    a: "This calculator estimates retirement corpus by adjusting your current annual expense for inflation and applying the 4% safe withdrawal rule.",
  },
  {
    q: "Can I retire earlier than age 60?",
    a: "Yes. Lower retirement age increases the years you need to save, so your monthly savings requirement will be higher.",
  },
  {
    q: "Does inflation affect retirement planning?",
    a: "Yes. Inflation increases future expenses, so the calculator raises your retirement corpus accordingly based on the inflation rate you choose.",
  },
  {
    q: "Is the SIP amount guaranteed?",
    a: "No. The monthly SIP required is an estimate based on expected return assumptions and the corpus target. Actual markets can vary.",
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

function PieChart({ yearsToRetire, lifespan }: { yearsToRetire: number; lifespan: number }) {
  const total = yearsToRetire + lifespan;
  const retirementAngle = total > 0 ? (lifespan / total) * 360 : 0;

  return (
    <div style={{ display: "flex", gap: 18, flexWrap: "wrap", alignItems: "center" }}>
      <div style={{ width: 180, height: 180, borderRadius: "50%", background: `conic-gradient(#10b981 0deg ${retirementAngle}deg, #3b82f6 ${retirementAngle}deg 360deg)`, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#f4f4f5" }}>
          <span style={{ fontSize: 22, fontWeight: 700 }}>{lifespan} yrs</span>
          <span style={{ fontSize: 12, color: "#a1a1aa" }}>Retirement horizon</span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", width: 180 }}>
          <span style={{ color: "#a1a1aa", fontSize: 12 }}>Saving Years</span>
          <span style={{ color: "#3b82f6", fontWeight: 700 }}>{yearsToRetire}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", width: 180 }}>
          <span style={{ color: "#a1a1aa", fontSize: 12 }}>Retirement Years</span>
          <span style={{ color: "#10b981", fontWeight: 700 }}>{lifespan}</span>
        </div>
      </div>
    </div>
  );
}

export default function RetirementCalculatorPage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", color: "#f4f4f5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ display: "flex", gap: 8, fontSize: 13, color: "#71717a", marginBottom: 24, alignItems: "center" }}>
          <Link href="/" style={{ color: "#71717a", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <span style={{ color: "#a1a1aa" }}>Retirement Planner</span>
        </div>

        <header style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12, lineHeight: 1.1 }}>Retirement Planner India</h1>
          <p style={{ color: "#a1a1aa", fontSize: 17, lineHeight: 1.75, maxWidth: 720 }}>
            Plan the retirement corpus you need, adjust for inflation, and estimate monthly savings with our retirement calculator. Get a realistic view of your future retirement expenses.
          </p>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, marginBottom: 48 }}>
          <RetirementCalculatorClient />
          <aside style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#10b981", marginBottom: 14 }}>Retirement Planning Benefits</h3>
              <ul style={{ paddingLeft: 18, margin: 0, color: "#a1a1aa", fontSize: 14, lineHeight: 1.8 }}>
                <li style={{ marginBottom: 10 }}>Estimate corpus needed to maintain post-retirement lifestyle.</li>
                <li style={{ marginBottom: 10 }}>Adjust for inflation and expected returns.</li>
                <li style={{ marginBottom: 10 }}>Plan monthly SIP for your retirement goal.</li>
                <li>Understand how early retirement affects savings.</li>
              </ul>
            </div>
            <div style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#10b981", marginBottom: 12 }}>💡 Retirement Tips</h3>
              {[
                "Start saving early for compounding benefits.",
                "Use tax-saving investments for retirement.",
                "Build a buffer for medical inflation.",
                "Review your plan each year.",
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
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14 }}>How Retirement Corpus is Calculated</h2>
            <p style={{ color: "#a1a1aa", lineHeight: 1.9 }}>
              Future annual expenses are adjusted for inflation, then divided by the 4% safe withdrawal rate to estimate the corpus required for a sustainable retirement.
            </p>
          </div>
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14 }}>Inflation and Returns</h2>
            <p style={{ color: "#a1a1aa", lineHeight: 1.9 }}>
              This planner factors in both inflation and expected investment returns, so you can compare how much to save today versus what you need at retirement.
            </p>
          </div>
        </section>

        
        <AdSenseUnit />
        
        <ZerodhaCTA context="Start building your retirement corpus today. Open a free demat account and begin a SIP — the earlier you start, the more you benefit from compounding." />
        <FAQAccordion items={faqs} />
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

  const futureExpense = annualExpense * Math.pow(1 + inflationRate / 100, yearsToRetirement);
  const corpusNeeded = yearsToRetirement >= 0 ? futureExpense / 0.04 : 0;

  const monthsToSave = Math.max(0, yearsToRetirement) * 12;
  const monthlyRate = investmentReturn / (12 * 100);
  const monthlySIP = monthsToSave > 0
    ? (corpusNeeded * monthlyRate) / (Math.pow(1 + monthlyRate, monthsToSave) - 1)
    : 0;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24 }}>
      <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24 }}>
        <InputRow label="Current Age" value={currentAge} min={20} max={50} step={1} unit="yrs" onChange={setCurrentAge} />
        <InputRow label="Retirement Age" value={retirementAge} min={55} max={70} step={1} unit="yrs" onChange={setRetirementAge} />
        <InputRow label="Annual Expense Today" value={annualExpense} min={200000} max={2000000} step={50000} unit="₹" onChange={setAnnualExpense} />
        <InputRow label="Expected Return Rate" value={investmentReturn} min={5} max={15} step={0.1} unit="%" onChange={setInvestmentReturn} />
        <InputRow label="Inflation Rate" value={inflationRate} min={2} max={8} step={0.1} unit="%" onChange={setInflationRate} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 24 }}>
            {[
              { label: "Corpus Needed", value: fmt(corpusNeeded), color: "#10b981" },
              { label: "Monthly SIP", value: fmt(monthlySIP), color: "#f97316" },
            ].map((stat) => (
              <div key={stat.label} style={{ background: "#18181b", borderRadius: 12, padding: "16px", textAlign: "center" }}>
                <p style={{ fontSize: 10, color: "#71717a", marginBottom: 6 }}>{stat.label}</p>
                <p style={{ fontSize: 15, fontWeight: 700, color: stat.color }}>{stat.value}</p>
              </div>
            ))}
          </div>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#f4f4f5", marginBottom: 16 }}>Retirement Timeline</h3>
          <PieChart yearsToRetire={yearsToRetirement} lifespan={lifespan} />
        </div>

        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#f4f4f5", marginBottom: 16 }}>Future Expense Estimate</h3>
          <div style={{ display: "grid", gap: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", color: "#a1a1aa" }}>
              <span>Today's expense</span>
              <span>{fmt(annualExpense)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", color: "#a1a1aa" }}>
              <span>Inflation-adjusted expense</span>
              <span>{fmt(futureExpense)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", color: "#a1a1aa" }}>
              <span>Years to retirement</span>
              <span>{yearsToRetirement} yrs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
