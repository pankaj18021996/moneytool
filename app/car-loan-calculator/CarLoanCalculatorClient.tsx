"use client";
import React from "react";

const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

export default function CarLoanCalculatorClient() {
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
    const rows: any[] = [];
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
                    { ["Month", "EMI", "Principal", "Interest", "Balance"].map(h => (
                      <th key={h} style={{ padding: "8px 6px", textAlign: "right", fontWeight: 500, color: "#71717a", fontSize: 11 }}>{h}</th>
                    )) }
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
                { ["Year","Principal Paid","Interest Paid","Balance","Est. Value"].map(h=> (
                  <th key={h} style={{ textAlign: "right", padding: "8px 6px", color: "#71717a" }}>{h}</th>
                )) }
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
