"use client";
import React from "react";
import Link from "next/link";

const fmt = (n:number) => "₹" + Math.round(n).toLocaleString("en-IN");

const bankRates: [string, string, string][] = [
  ["SBI", "10.50% – 15.00%", "₹2,146"],
  ["HDFC Bank", "10.50% – 21.00%", "₹2,146"],
  ["ICICI Bank", "10.75% – 19.00%", "₹2,158"],
  ["Axis Bank", "10.25% – 24.00%", "₹2,134"],
  ["Kotak Mahindra", "10.99% – 20.00%", "₹2,170"],
  ["Bajaj Finserv", "11.00% – 35.00%", "₹2,171"],
];

const faqs = [
  { q: "What is the average personal loan interest rate in India?", a: "Most banks and NBFCs offer personal loans between 10.5% and 24% p.a., depending on your credit score, income and existing relationship with the bank." },
  { q: "Do I need collateral for a personal loan?", a: "No. Personal loans are unsecured — no property, gold or asset needs to be pledged. Approval is based on income and CIBIL score." },
  { q: "How fast is a personal loan disbursed?", a: "Most banks disburse within 24-72 hours if documents and credit score are in order. Some NBFCs offer same-day disbursal." },
  { q: "What credit score do I need?", a: "A CIBIL score of 750+ gets you the best rates. Scores below 650 make approval difficult or come with much higher interest." },
  { q: "Can I prepay a personal loan early?", a: "Yes, most lenders allow prepayment after 6-12 EMIs, usually with a 2-5% foreclosure charge on the outstanding amount." },
  { q: "Is personal loan interest tax deductible?", a: "Only if the loan is used for business purposes or home renovation/purchase — then interest may qualify under Section 24(b) or as a business expense. Personal use (travel, wedding, etc.) gets no tax benefit." },
];

export default function PersonalLoanCalculatorPage(){
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", color: "#f4f4f5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ display: "flex", gap: 8, fontSize: 13, color: "#71717a", marginBottom: 24 }}>
          <Link href="/" style={{ color: "#71717a", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <span>Personal Loan Calculator</span>
        </div>

        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 10, color: "#f4f4f5" }}>Personal Loan Calculator India</h1>
        <p style={{ color: "#a1a1aa", fontSize: 16, marginBottom: 32, maxWidth: 680 }}>Calculate your personal loan EMI, total interest and full repayment schedule instantly. Free, accurate, no signup required.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, marginBottom: 48 }}>
          <PersonalLoanCalculatorClient />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 12 }}>EMI Formula</h3>
              <div style={{ background: "#18181b", borderRadius: 10, padding: 14, textAlign: "center", marginBottom: 12 }}>
                <p style={{ fontSize: 13, color: "#a1a1aa", fontFamily: "monospace", lineHeight: 1.8 }}>
                  EMI = P × r × (1+r)ⁿ<br />÷ [(1+r)ⁿ − 1]
                </p>
              </div>
              <div style={{ fontSize: 12, color: "#71717a", lineHeight: 2 }}>
                <p><span style={{ color: "#10b981" }}>P</span> = Loan amount</p>
                <p><span style={{ color: "#10b981" }}>r</span> = Monthly interest rate</p>
                <p><span style={{ color: "#10b981" }}>n</span> = Tenure in months</p>
              </div>
            </div>

            <div style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#10b981", marginBottom: 12 }}>💡 Quick Tips</h3>
              {[
                "Personal loans carry higher rates — compare 3+ lenders first",
                "A shorter tenure saves significantly on total interest",
                "Check your CIBIL score before applying",
                "Watch for processing fees (often 1-3% of loan amount)",
                "Avoid taking a new loan to repay an existing one",
              ].map((tip, i) => (
                <p key={i} style={{ display: "flex", gap: 8, fontSize: 12, color: "#a1a1aa", lineHeight: 1.7, marginBottom: 6 }}>
                  <span style={{ color: "#10b981", flexShrink: 0 }}>✓</span>{tip}
                </p>
              ))}
            </div>

          </div>
        </div>

        {/* SEO Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 48 }}>

          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 14 }}>What is a Personal Loan?</h2>
            <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.9, marginBottom: 10 }}>
              A personal loan is an unsecured loan — no property, gold or asset needs to be pledged as collateral. Banks and NBFCs approve it based on your income, employment stability and CIBIL score, and funds can be used for anything: medical emergencies, weddings, travel, home renovation or debt consolidation.
            </p>
            <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.9 }}>
              Because there's no collateral backing the loan, interest rates are higher than secured loans like home or car loans — typically 10.5% to 24% per annum in India.
            </p>
          </div>

          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 14 }}>How is Personal Loan EMI Calculated?</h2>
            <div style={{ background: "#18181b", borderRadius: 12, padding: 20, marginBottom: 16, textAlign: "center" }}>
              <p style={{ fontSize: 15, color: "#a1a1aa", fontFamily: "monospace" }}>EMI = P × r × (1 + r)ⁿ ÷ [(1 + r)ⁿ − 1]</p>
            </div>
            <div style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.9, marginBottom: 16 }}>
              <p style={{ marginBottom: 6 }}><strong style={{ color: "#f4f4f5" }}>P</strong> = Principal loan amount</p>
              <p style={{ marginBottom: 6 }}><strong style={{ color: "#f4f4f5" }}>r</strong> = Monthly interest rate = Annual rate ÷ 12 ÷ 100</p>
              <p><strong style={{ color: "#f4f4f5" }}>n</strong> = Loan tenure in months</p>
            </div>
            <div style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 12, padding: 16 }}>
              <p style={{ fontSize: 12, color: "#10b981", fontWeight: 600, marginBottom: 6 }}>Example</p>
              <p style={{ fontSize: 13, color: "#a1a1aa", lineHeight: 1.7 }}>
                ₹5 lakh personal loan at 12% for 3 years → <strong style={{ color: "#10b981" }}>EMI = ₹16,607/month</strong>. Total interest = ₹97,847.
              </p>
            </div>
          </div>

          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 14 }}>How to Use This Calculator</h2>
            {[
              { step: "Step 1", text: "Enter your desired loan amount using the slider." },
              { step: "Step 2", text: "Set the interest rate quoted by your bank or NBFC." },
              { step: "Step 3", text: "Choose your preferred tenure in months." },
              { step: "Step 4", text: "Instantly see your monthly EMI, total interest and total repayment." },
              { step: "Step 5", text: "Expand the amortization schedule for a month-by-month breakdown." },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 14, marginBottom: 14, alignItems: "flex-start" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", flexShrink: 0, background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#10b981" }}>{i + 1}</div>
                <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.7, marginTop: 4 }}>
                  <strong style={{ color: "#f4f4f5" }}>{s.step} — </strong>{s.text}
                </p>
              </div>
            ))}
          </div>

          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 8 }}>Personal Loan Interest Rates in India (2026)</h2>
            <p style={{ fontSize: 13, color: "#71717a", marginBottom: 20 }}>Indicative rates — confirm with bank before applying</p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid #27272a" }}>
                    {["Bank", "Rate (p.a.)", "EMI per ₹1L / 5 yr"].map(h => (
                      <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontWeight: 600, color: "#71717a", fontSize: 12 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bankRates.map(([bank, rate, emi], i) => (
                    <tr key={bank} style={{ borderBottom: "1px solid #1f1f22", background: i % 2 ? "#18181b" : "transparent" }}>
                      <td style={{ padding: "10px 12px", color: "#f4f4f5", fontWeight: 500 }}>{bank}</td>
                      <td style={{ padding: "10px 12px", color: "#10b981" }}>{rate}</td>
                      <td style={{ padding: "10px 12px", color: "#a1a1aa" }}>{emi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 20 }}>Frequently Asked Questions</h2>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: i < faqs.length - 1 ? "1px solid #27272a" : "none", padding: "16px 0" }}>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 8 }}>{faq.q}</h3>
                <p style={{ fontSize: 13, color: "#71717a", lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 16 }}>Why Use MoneyTool Personal Loan Calculator?</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { icon: "🎯", title: "Instant Results", desc: "Get EMI, interest & total in real-time as you move sliders." },
                { icon: "📋", title: "Amortization Schedule", desc: "Full month-by-month breakdown of every payment." },
                { icon: "🔒", title: "100% Private", desc: "No login, no signup. All calculations in your browser." },
                { icon: "📱", title: "Mobile Friendly", desc: "Works perfectly on any device — phone, tablet or desktop." },
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

function PersonalLoanCalculatorClient(){
  const [amount, setAmount] = React.useState(500000);
  const [rate, setRate] = React.useState(12.0);
  const [tenure, setTenure] = React.useState(36);

  const mr = rate / 1200;
  const emi = (amount * mr * Math.pow(1 + mr, tenure)) / (Math.pow(1 + mr, tenure) - 1);
  const totalPay = emi * tenure;
  const totalInt = totalPay - amount;

  const [showSched, setShowSched] = React.useState(false);
  const [page, setPage] = React.useState(0);

  const schedule = React.useMemo(() => {
    const rows:any[] = [];
    let bal = amount;
    for(let m=1;m<=tenure && bal>0.5;m++){
      const interest = bal * mr;
      const principal = Math.min(emi - interest, bal);
      bal = Math.max(0, bal - principal);
      rows.push({ month: m, emi: interest+principal, prin: principal, int: interest, bal });
    }
    return rows;
  },[amount,mr,tenure,emi]);

  const PER = 12;
  const totalPages = Math.ceil(schedule.length / PER) || 1;
  const pageRows = schedule.slice(page*PER, (page+1)*PER);

  return (
    <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24, marginBottom: 16 }}>
      <div style={{ marginBottom: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Loan Amount</span>
          <span style={{ fontSize: 14, fontWeight: 700 }}>{fmt(amount)}</span>
        </div>
        <input type="range" min="50000" max="5000000" step="5000" value={amount} onChange={e=>setAmount(Number(e.target.value))} style={{ width: "100%", accentColor: "#10b981" }} />
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Interest Rate (%)</span>
          <span style={{ fontSize: 14, fontWeight: 700 }}>{rate.toFixed(2)}%</span>
        </div>
        <input type="range" min="8" max="25" step="0.1" value={rate} onChange={e=>setRate(Number(e.target.value))} style={{ width: "100%", accentColor: "#10b981" }} />
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Tenure (Months)</span>
          <span style={{ fontSize: 14, fontWeight: 700 }}>{Math.floor(tenure/12)}yr {tenure%12}mo</span>
        </div>
        <input type="range" min="6" max="72" step="1" value={tenure} onChange={e=>setTenure(Number(e.target.value))} style={{ width: "100%", accentColor: "#10b981" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        {[{ label: "Monthly EMI", value: fmt(emi), color: "#10b981" },{ label: "Total Interest", value: fmt(totalInt), color: "#f97316" },{ label: "Total Payment", value: fmt(totalPay), color: "#f4f4f5" }].map(s=> (
          <div key={s.label} style={{ background: "#18181b", borderRadius: 12, padding: "14px 10px", textAlign: "center" }}>
            <p style={{ fontSize: 10, color: "#71717a", marginBottom: 4 }}>{s.label}</p>
            <p style={{ fontSize: 15, fontWeight: 700, color: s.color }}>{s.value}</p>
          </div>
        ))}
      </div>

      <div style={{ border: "1px solid #27272a", borderRadius: 16, overflow: "hidden", marginTop: 12 }}>
        <button onClick={()=>{ setShowSched(!showSched); setPage(0); }} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", background: "#111113", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500, color: "#f4f4f5" }}>
          <span>📋 Amortization Schedule</span>
          <span style={{ color: "#71717a", display: "inline-block", transform: showSched ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
        </button>
        {showSched && (
          <div style={{ background: "#111113", borderTop: "1px solid #27272a", padding: "16px 12px" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid #27272a" }}>
                    {["Month","EMI","Principal","Interest","Balance"].map(h => <th key={h} style={{ padding: "8px 6px", textAlign: "right", fontWeight: 500, color: "#71717a", fontSize: 11 }}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {pageRows.map((r,i)=> (
                    <tr key={r.month} style={{ borderBottom: "1px solid #1f1f22", background: i%2 ? "#18181b" : "transparent" }}>
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
              <button disabled={page===0} onClick={()=>setPage(p=>p-1)} style={{ fontSize: 12, padding: "6px 14px", borderRadius: 8, border: "1px solid #27272a", background: "#18181b", color: page===0 ? "#52525b" : "#a1a1aa", cursor: page===0 ? "not-allowed" : "pointer" }}>← Prev</button>
              <span style={{ fontSize: 11, color: "#71717a" }}>{page+1} / {totalPages}</span>
              <button disabled={page>=totalPages-1} onClick={()=>setPage(p=>p+1)} style={{ fontSize: 12, padding: "6px 14px", borderRadius: 8, border: "1px solid #27272a", background: "#18181b", color: page>=totalPages-1 ? "#52525b" : "#a1a1aa", cursor: page>=totalPages-1 ? "not-allowed" : "pointer" }}>Next →</button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
