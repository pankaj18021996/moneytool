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
  const [carPrice, setCarPrice] = React.useState(1500000); // ex-showroom / on-road approx
  const [downPayment, setDownPayment] = React.useState(150000);
  const [rate, setRate] = React.useState(9.0);
  const [tenure, setTenure] = React.useState(60);

  const loanAmount = Math.max(0, Math.round(carPrice - downPayment));
  const mr = rate / 1200;
  const emi = loanAmount === 0 || mr === 0 || tenure === 0
    ? loanAmount / Math.max(1, tenure)
    : (loanAmount * mr * Math.pow(1 + mr, tenure)) / (Math.pow(1 + mr, tenure) - 1);
  const totalPay = emi * tenure + downPayment; // include down payment in total cost of purchase
  const totalInt = Math.max(0, totalPay - carPrice);
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
      {/* Car price and down payment inputs */}
      <div style={{ marginBottom: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Car Price (Ex-showroom / On-road)</span>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input type="number" value={carPrice} onChange={e => setCarPrice(Number(e.target.value || 0))} style={{ width: 140, background: "#0b0b0c", border: "1px solid #27272a", color: "#f4f4f5", padding: "6px 8px", borderRadius: 8 }} />
            <span style={{ fontSize: 14, fontWeight: 700 }}>{fmt(carPrice)}</span>
          </div>
        </div>
        <input type="range" min="300000" max="50000000" step="50000" value={carPrice} onChange={e => setCarPrice(Number(e.target.value))} style={{ width: "100%", accentColor: "#10b981" }} />
      </div>

      <div style={{ marginBottom: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Down Payment</span>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input type="number" value={downPayment} onChange={e => setDownPayment(Math.min(Number(e.target.value || 0), carPrice))} style={{ width: 120, background: "#0b0b0c", border: "1px solid #27272a", color: "#f4f4f5", padding: "6px 8px", borderRadius: 8 }} />
            <span style={{ fontSize: 14, fontWeight: 700 }}>{fmt(downPayment)} <span style={{ color: "#71717a", fontSize: 12 }}>/ {Math.round((downPayment / Math.max(1, carPrice)) * 100)}%</span></span>
          </div>
        </div>
        <input type="range" min="0" max={carPrice} step="5000" value={downPayment} onChange={e => setDownPayment(Math.min(Number(e.target.value), carPrice))} style={{ width: "100%", accentColor: "#10b981" }} />
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
            <input type="number" value={rate} onChange={e => setRate(Number(e.target.value || 0))} step={0.01} style={{ width: 80, background: "#0b0b0c", border: "1px solid #27272a", color: "#f4f4f5", padding: "6px 8px", borderRadius: 8 }} />
            <span style={{ fontSize: 14, fontWeight: 700 }}>{rate.toFixed(2)}%</span>
          </div>
        </div>
        <input type="range" min="7" max="16" step="0.1" value={rate} onChange={e => setRate(Number(e.target.value))} style={{ width: "100%", accentColor: "#10b981" }} />
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Tenure (Months)</span>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input type="number" value={tenure} onChange={e => setTenure(Number(e.target.value || 0))} style={{ width: 90, background: "#0b0b0c", border: "1px solid #27272a", color: "#f4f4f5", padding: "6px 8px", borderRadius: 8 }} />
            <span style={{ fontSize: 14, fontWeight: 700 }}>{Math.floor(tenure / 12)}yr {tenure % 12}mo</span>
          </div>
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

      {/* Yearly Summary & Depreciation */}
      <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 20, marginTop: 16 }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, color: "#f4f4f5", marginBottom: 12 }}>Yearly Summary & Estimated Depreciation</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #27272a" }}>
                {["Year","Principal Paid","Interest Paid","Balance","Est. Value"].map(h=> (
                  <th key={h} style={{ textAlign: "right", padding: "8px 6px", color: "#71717a" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(() => {
                const rows = [];
                let bal = loanAmount;
                let cumPrin = 0, cumInt = 0;
                const depRate = 0.15; // simple annual depreciation
                for(let y=1;y<=5;y++){
                  let prinYear = 0, intYear = 0;
                  for(let m=1;m<=12 && bal>0.5;m++){
                    const interest = bal * mr;
                    const principal = Math.min(emi - interest, bal);
                    bal = Math.max(0, bal - principal);
                    prinYear += principal; intYear += interest;
                  }
                  cumPrin += prinYear; cumInt += intYear;
                  const estValue = Math.round(carPrice * Math.pow(1 - depRate, y));
                  rows.push({ y, prinYear, intYear, bal: Math.max(0, Math.round(bal)), estValue });
                }
                return rows.map(r => (
                  <tr key={r.y} style={{ borderBottom: "1px solid #1f1f22" }}>
                    <td style={{ padding: "8px 6px", textAlign: "right", color: "#a1a1aa" }}>{r.y}</td>
                    <td style={{ padding: "8px 6px", textAlign: "right", color: "#10b981" }}>{fmt(r.prinYear)}</td>
                    <td style={{ padding: "8px 6px", textAlign: "right", color: "#f97316" }}>{fmt(r.intYear)}</td>
                    <td style={{ padding: "8px 6px", textAlign: "right", color: "#a1a1aa" }}>{fmt(r.bal)}</td>
                    <td style={{ padding: "8px 6px", textAlign: "right", color: "#f4f4f5" }}>{fmt(r.estValue)}</td>
                  </tr>
                ));
              })()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
