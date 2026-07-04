"use client";
import React from "react";
import Link from "next/link";
import AdSenseUnit from "../components/AdSenseUnit";
import RelatedTools from "../components/RelatedTools";

const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

const faqs = [
  { q: "What is a home loan EMI?", a: "EMI (Equated Monthly Installment) is the fixed amount you pay monthly to repay your home loan. It includes both principal and interest components." },
  { q: "How is home loan EMI calculated?", a: "EMI = P × r × (1+r)ⁿ ÷ [(1+r)ⁿ − 1], where P is principal, r is monthly rate, and n is tenure in months." },
  { q: "What is the maximum home loan amount I can get?", a: "Banks typically lend up to 80-90% of property value. Maximum amount also depends on your income, credit score, and debt-to-income ratio." },
  { q: "Is there a difference between fixed and floating rates?", a: "Fixed rates remain constant throughout the loan tenure, while floating rates vary with RBI repo rate changes. Fixed is safer but typically higher." },
  { q: "Can I prepay my home loan?", a: "Yes. RBI has mandated zero prepayment charges on floating-rate home loans. Fixed-rate loans may have 2-5% prepayment penalties." },
  { q: "What documents are needed for home loan?", a: "Income proof (salary slip, ITR), bank statements, KYC (Aadhaar, PAN), property documents, and credit report." },
];

const banks = [
  ["SBI", "8.50%", "₹9,646"],
  ["HDFC Bank", "8.75%", "₹9,850"],
  ["ICICI Bank", "8.75%", "₹9,850"],
  ["Axis Bank", "8.75%", "₹9,850"],
  ["Bank of Baroda", "8.40%", "₹9,558"],
  ["Kotak Mahindra", "8.75%", "₹9,850"],
  ["PNB", "8.45%", "₹9,599"],
  ["IndusInd Bank", "8.50%", "₹9,646"],
];

export default function HomeLoanCalculatorPage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", color: "#f4f4f5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", gap: 8, fontSize: 13, color: "#71717a", marginBottom: 24 }}>
          <Link href="/" style={{ color: "#71717a", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <span>Home Loan Calculator</span>
        </div>

        {/* Header */}
        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 10, color: "#f4f4f5" }}>
          Home Loan Calculator India 2026
        </h1>
        <p style={{ color: "#a1a1aa", fontSize: 16, marginBottom: 32, maxWidth: 680, lineHeight: 1.6 }}>
          Calculate home loan EMI, total interest paid, eligibility and tax benefits. Compare rates from 8+ banks. Plan your dream home purchase with accurate calculations.
        </p>

        {/* Calculator + Sidebar */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, marginBottom: 48 }}>
          <HomeLoanCalculatorClient />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#10b981", marginBottom: 12 }}>💡 Home Loan Tips</h3>
              {["Compare 3+ banks before applying", "Fixed rates safer, floating rates lower", "Prepay when bonus arrives", "Keep EMI ratio below 40%", "Check eligibility criteria first"].map((t, i) => (
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
              Current Home Loan Interest Rates in India (2026)
            </h2>
            <p style={{ fontSize: 13, color: "#71717a", marginBottom: 20 }}>
              Indicative rates — EMI per ₹10 lakh for 20 years
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid #27272a" }}>
                    {["Bank", "Rate (p.a.)", "EMI/₹10L (20yr)"].map(h => (
                      <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontWeight: 600, color: "#71717a", fontSize: 12 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {banks.map((row, i) => (
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

          {/* Tax Benefits */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: "#f4f4f5" }}>
              Home Loan Tax Benefits in India
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { title: "Section 80C", benefit: "₹1.5L/year", desc: "Principal repayment" },
                { title: "Section 24(b)", benefit: "₹2L/year", desc: "Interest paid" },
                { title: "Section 80EEA", benefit: "₹1.5L extra", desc: "First-time buyers" },
                { title: "Section 80EEB", benefit: "₹2L/year", desc: "New projects only" },
              ].map((b) => (
                <div key={b.title} style={{ background: "#18181b", border: "1px solid #27272a", borderRadius: 12, padding: 16 }}>
                  <p style={{ fontSize: 12, color: "#10b981", fontWeight: 600, marginBottom: 4 }}>{b.title}</p>
                  <p style={{ fontSize: 15, fontWeight: 700, color: "#f4f4f5", marginBottom: 4 }}>{b.benefit}</p>
                  <p style={{ fontSize: 12, color: "#71717a" }}>{b.desc}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 11, color: "#52525b", marginTop: 16 }}>
              ⚠️ Tax benefits applicable under old tax regime only. New regime offers limited benefits. Consult a CA for personalized advice.
            </p>
          </div>

          {/* Eligibility */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: "#f4f4f5" }}>
              Home Loan Eligibility Criteria
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { label: "Age", value: "Minimum 21, Maximum 65 years at repayment" },
                { label: "Income", value: "Salaried: ₹2.5L+ p.a. / Self-employed: ₹5L+ p.a." },
                { label: "Credit Score", value: "Minimum 650 CIBIL score (750+ preferred)" },
                { label: "Employment", value: "Salaried (2 years) / Self-employed (3 years)" },
                { label: "Debt-to-Income", value: "Total EMIs should be < 50% of monthly income" },
                { label: "Property Value", value: "Bank typically lends 80-90% of property value" },
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
              How to Apply for a Home Loan
            </h2>
            {[
              { step: "Step 1", text: "Check eligibility and get pre-approval letter" },
              { step: "Step 2", text: "Compare home loan rates from 3-5 banks" },
              { step: "Step 3", text: "Select property and get property valuation done" },
              { step: "Step 4", text: "Submit application with required documents" },
              { step: "Step 5", text: "Receive loan sanction letter with terms" },
              { step: "Step 6", text: "Complete legal formalities and get disbursement" },
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
            
        <AdSenseUnit />
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
              Why Use MoneyTool Home Loan Calculator?
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { icon: "🎯", title: "Instant Results", desc: "Real-time EMI calculations as you adjust values" },
                { icon: "🔒", title: "100% Private", desc: "No login or signup required, no data collection" },
                { icon: "📊", title: "Bank Rates", desc: "Current interest rates from 8+ major banks" },
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

        <RelatedTools tools={[
          { title: "EMI Calculator", icon: "🧮", description: "Calculate EMI for any loan type", href: "/emi-calculator" },
          { title: "Car Loan Calculator", icon: "🚗", description: "Calculate car loan EMI instantly", href: "/car-loan-calculator" },
          { title: "Personal Loan Calculator", icon: "💳", description: "Calculate personal loan EMI & interest", href: "/personal-loan-calculator" },
          { title: "Income Tax Calculator", icon: "🧾", description: "Calculate your income tax liability", href: "/income-tax-calculator" },
        ]} />

      </div>
    </div>
  );
}

function HomeLoanCalculatorClient() {
  const [propertyPrice, setPropertyPrice] = React.useState(6000000);
  const [downPayment, setDownPayment] = React.useState(600000);
  const [rate, setRate] = React.useState(8.5);
  const [tenure, setTenure] = React.useState(240);

  const loanAmount = Math.max(0, Math.round(propertyPrice - downPayment));
  const mr = rate / 1200;
  const emi = loanAmount === 0 || mr === 0 || tenure === 0
    ? loanAmount / Math.max(1, tenure)
    : (loanAmount * mr * Math.pow(1 + mr, tenure)) / (Math.pow(1 + mr, tenure) - 1);
  const totalPay = emi * tenure + downPayment;
  const totalInt = Math.max(0, totalPay - propertyPrice);
  const [showSched, setShowSched] = React.useState(false);
  const [page, setPage] = React.useState(0);

  const schedule = React.useMemo(() => {
    const rows = [];
    let bal = loanAmount;
    for (let m = 1; m <= tenure && bal > 0.5; m++) {
      const interest = bal * mr;
      const principal = Math.min(emi - interest, bal);
      bal = Math.max(0, bal - principal);
      rows.push({ month: m, emi: interest + principal, prin: principal, int: interest, bal });
    }
    return rows;
  }, [loanAmount, mr, tenure, emi]);

  const PER = 12;
  const totalPages = Math.ceil(schedule.length / PER) || 1;
  const pageRows = schedule.slice(page * PER, (page + 1) * PER);

  return (
    <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24, marginBottom: 16 }}>
      <div style={{ marginBottom: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Property Price (On-road)</span>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input type="number" value={propertyPrice} onChange={e => setPropertyPrice(Number(e.target.value || 0))} style={{ width: 160, background: "#0b0b0c", border: "1px solid #27272a", color: "#f4f4f5", padding: "6px 8px", borderRadius: 8 }} />
            <span style={{ fontSize: 14, fontWeight: 700 }}>{fmt(propertyPrice)}</span>
          </div>
        </div>
        <input type="range" min="2000000" max="500000000" step="100000" value={propertyPrice} onChange={e => setPropertyPrice(Number(e.target.value))} style={{ width: "100%", accentColor: "#10b981" }} />
      </div>

      <div style={{ marginBottom: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Down Payment</span>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input type="number" value={downPayment} onChange={e => setDownPayment(Math.min(Number(e.target.value || 0), propertyPrice))} style={{ width: 140, background: "#0b0b0c", border: "1px solid #27272a", color: "#f4f4f5", padding: "6px 8px", borderRadius: 8 }} />
            <span style={{ fontSize: 14, fontWeight: 700 }}>{fmt(downPayment)} <span style={{ color: "#71717a", fontSize: 12 }}>/ {Math.round((downPayment / Math.max(1, propertyPrice)) * 100)}%</span></span>
          </div>
        </div>
        <input type="range" min="0" max={propertyPrice} step="50000" value={downPayment} onChange={e => setDownPayment(Math.min(Number(e.target.value), propertyPrice))} style={{ width: "100%", accentColor: "#10b981" }} />
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Loan Amount (Financed)</span>
          <span style={{ fontSize: 14, fontWeight: 700 }}>{fmt(loanAmount)}</span>
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Interest Rate (%)</span>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input type="number" value={rate} onChange={e => setRate(Number(e.target.value || 0))} step={0.01} style={{ width: 90, background: "#0b0b0c", border: "1px solid #27272a", color: "#f4f4f5", padding: "6px 8px", borderRadius: 8 }} />
            <span style={{ fontSize: 14, fontWeight: 700 }}>{rate.toFixed(2)}%</span>
          </div>
        </div>
        <input type="range" min="6" max="14" step="0.1" value={rate} onChange={e => setRate(Number(e.target.value))} style={{ width: "100%", accentColor: "#10b981" }} />
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Tenure (Months)</span>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input type="number" value={tenure} onChange={e => setTenure(Number(e.target.value || 0))} style={{ width: 90, background: "#0b0b0c", border: "1px solid #27272a", color: "#f4f4f5", padding: "6px 8px", borderRadius: 8 }} />
            <span style={{ fontSize: 14, fontWeight: 700 }}>{Math.floor(tenure / 12)}yr {tenure % 12}mo</span>
          </div>
        </div>
        <input type="range" min="60" max="360" step="1" value={tenure} onChange={e => setTenure(Number(e.target.value))} style={{ width: "100%", accentColor: "#10b981" }} />
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
      {/* Amortization Schedule */}
      <div style={{ border: "1px solid #27272a", borderRadius: 16, overflow: "hidden", marginTop: 12 }}>
        <button
          onClick={() => { setShowSched(!showSched); setPage(0); }}
          style={{
            width: "100%", display: "flex", alignItems: "center",
            justifyContent: "space-between", padding: "14px 20px",
            background: "#111113", border: "none", cursor: "pointer",
            fontSize: 14, fontWeight: 500, color: "#f4f4f5", fontFamily: "inherit",
          }}
        >
          <span>📋 Amortization Schedule</span>
          <span style={{ color: "#71717a", display: "inline-block", transform: showSched ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
        </button>

        {showSched && (
          <div style={{ background: "#111113", borderTop: "1px solid #27272a", padding: "16px 12px" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid #27272a" }}>
                    {["Month", "EMI", "Principal", "Interest", "Balance"].map(h => (
                      <th key={h} style={{ padding: "8px 6px", textAlign: "right", fontWeight: 500, color: "#71717a", fontSize: 11 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pageRows.map((r, i) => (
                    <tr key={r.month} style={{ borderBottom: "1px solid #1f1f22", background: i % 2 ? "#18181b" : "transparent" }}>
                      <td style={{ padding: "7px 6px", textAlign: "right", color: "#71717a" }}>{r.month}</td>
                      <td style={{ padding: "7px 6px", textAlign: "right", color: "#f4f4f5" }}>{fmt(r.emi)}</td>
                      <td style={{ padding: "7px 6px", textAlign: "right", color: "#10b981" }}>{fmt(r.prin)}</td>
                      <td style={{ padding: "7px 6px", textAlign: "right", color: "#f97316" }}>{fmt(r.int)}</td>
                      <td style={{ padding: "7px 6px", textAlign: "right", color: "#a1a1aa" }}>{fmt(r.bal)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12, paddingTop: 12, borderTop: "1px solid #27272a" }}>
              <button
                disabled={page === 0}
                onClick={() => setPage(p => p - 1)}
                style={{
                  fontSize: 12, padding: "6px 14px", borderRadius: 8,
                  border: "1px solid #27272a", background: "#18181b",
                  color: page === 0 ? "#52525b" : "#a1a1aa",
                  cursor: page === 0 ? "not-allowed" : "pointer", fontFamily: "inherit",
                }}
              >← Prev</button>
              <span style={{ fontSize: 11, color: "#71717a" }}>{page + 1} / {totalPages}</span>
              <button
                disabled={page >= totalPages - 1}
                onClick={() => setPage(p => p + 1)}
                style={{
                  fontSize: 12, padding: "6px 14px", borderRadius: 8,
                  border: "1px solid #27272a", background: "#18181b",
                  color: page >= totalPages - 1 ? "#52525b" : "#a1a1aa",
                  cursor: page >= totalPages - 1 ? "not-allowed" : "pointer", fontFamily: "inherit",
                }}
              >Next →</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
