"use client";
import React from "react";
import Link from "next/link";

const fmt = (n:number) => "₹" + Math.round(n).toLocaleString("en-IN");

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
        <p style={{ color: "#a1a1aa", fontSize: 16, marginBottom: 32, maxWidth: 680 }}>Calculate personal loan EMI, total interest and view amortization schedule.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, marginBottom: 48 }}>
          <PersonalLoanCalculatorClient />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#10b981", marginBottom: 12 }}>💡 Tips</h3>
              <p style={{ fontSize: 13, color: "#a1a1aa" }}>Personal loans have higher rates; consider shorter tenure to reduce interest.</p>
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
