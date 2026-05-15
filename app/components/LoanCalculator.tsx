"use client";
import { useState, useMemo } from "react";

const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");
const fmtShort = (n: number) => {
  if (n >= 10000000) return "₹" + (n / 10000000).toFixed(2) + " Cr";
  if (n >= 100000) return "₹" + (n / 100000).toFixed(2) + " L";
  return fmt(n);
};
const calcEMI = (P: number, r: number, n: number) => {
  if (!P || !r || !n) return 0;
  const mr = r / 1200;
  return (P * mr * Math.pow(1 + mr, n)) / (Math.pow(1 + mr, n) - 1);
};

type Row = { month: number; emi: number; prin: number; int: number; bal: number };

type Props = {
  defaultAmount: number;
  defaultRate: number;
  defaultTenure: number;
  minAmount: number;
  maxAmount: number;
  minRate: number;
  maxRate: number;
  minTenure: number;
  maxTenure: number;
  amountStep?: number;
};

/* ── Reusable Slider Row with manual input ── */
function SliderRow({
  label, value, min, max, step, unit = "",
  display, onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  display: string;
  onChange: (v: number) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [raw, setRaw] = useState("");

  return (
    <div style={{ marginBottom: 24 }}>
      {/* Label + Value */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <span style={{ fontSize: 13, color: "#a1a1aa" }}>{label}</span>

        {/* Editable Value Box */}
        {editing ? (
          <input
            autoFocus
            type="number"
            value={raw}
            onChange={e => setRaw(e.target.value)}
            onBlur={() => {
              const v = Number(raw);
              if (!isNaN(v) && v >= min && v <= max) onChange(v);
              setEditing(false);
            }}
            onKeyDown={e => {
              if (e.key === "Enter") {
                const v = Number(raw);
                if (!isNaN(v) && v >= min && v <= max) onChange(v);
                setEditing(false);
              }
              if (e.key === "Escape") setEditing(false);
            }}
            style={{
              background: "#18181b",
              border: "1px solid #10b981",
              borderRadius: 8,
              padding: "4px 10px",
              color: "#f4f4f5",
              fontSize: 14,
              fontWeight: 700,
              width: 120,
              textAlign: "right",
              fontFamily: "inherit",
              outline: "none",
            }}
          />
        ) : (
          <button
            onClick={() => { setRaw(String(value)); setEditing(true); }}
            title="Click to type exact value"
            style={{
              background: "#18181b",
              border: "1px solid #27272a",
              borderRadius: 8,
              padding: "4px 12px",
              color: "#f4f4f5",
              fontSize: 14,
              fontWeight: 700,
              cursor: "text",
              fontFamily: "inherit",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            {display}
            <span style={{ fontSize: 10, color: "#71717a" }}>✏️</span>
          </button>
        )}
      </div>

      {/* Slider */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        style={{ width: "100%" }}
      />

      {/* Min / Max labels */}
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#52525b", marginTop: 4 }}>
        <span>{unit === "%" ? `${min}%` : fmtShort(min)}</span>
        <span>{unit === "%" ? `${max}%` : unit === "mo" ? (max >= 12 ? `${Math.floor(max / 12)} yr` : `${max} mo`) : fmtShort(max)}</span>
      </div>
    </div>
  );
}

export default function LoanCalculator({
  defaultAmount, defaultRate, defaultTenure,
  minAmount, maxAmount, minRate, maxRate,
  minTenure, maxTenure, amountStep = 50000,
}: Props) {
  const [amount, setAmount] = useState(defaultAmount);
  const [rate, setRate]     = useState(defaultRate);
  const [tenure, setTenure] = useState(defaultTenure);
  const [showSched, setShowSched] = useState(false);
  const [page, setPage]           = useState(0);
  const PER = 12;

  const emi      = calcEMI(amount, rate, tenure);
  const totalPay = emi * tenure;
  const totalInt = totalPay - amount;
  const pPct     = totalPay > 0 ? (amount / totalPay) * 100 : 50;
  const C        = 2 * Math.PI * 54;
  const pLen     = (pPct / 100) * C;

  const tenureDisplay = tenure >= 12
    ? `${Math.floor(tenure / 12)} yr${tenure % 12 ? ` ${tenure % 12} mo` : ""}`
    : `${tenure} mo`;

  const schedule = useMemo(() => {
    const rows: Row[] = [];
    let bal = amount;
    const mr = rate / 1200;
    for (let m = 1; m <= tenure && bal > 0.5; m++) {
      const int  = bal * mr;
      const prin = Math.min(emi - int, bal);
      bal = Math.max(0, bal - prin);
      rows.push({ month: m, emi: int + prin, prin, int, bal });
    }
    return rows;
  }, [amount, rate, tenure, emi]);

  const totalPages = Math.ceil(schedule.length / PER);
  const pageRows   = schedule.slice(page * PER, (page + 1) * PER);

  return (
    <div>

      {/* ── Main Calculator Card ── */}
      <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24, marginBottom: 16 }}>

        <SliderRow
          label="Loan Amount"
          value={amount}
          min={minAmount}
          max={maxAmount}
          step={amountStep}
          display={fmt(amount)}
          onChange={v => setAmount(Math.round(v / amountStep) * amountStep)}
        />

        <SliderRow
          label="Interest Rate (p.a.)"
          value={rate}
          min={minRate}
          max={maxRate}
          step={0.1}
          unit="%"
          display={`${rate.toFixed(1)}%`}
          onChange={v => setRate(Math.round(v * 10) / 10)}
        />

        <SliderRow
          label="Loan Tenure"
          value={tenure}
          min={minTenure}
          max={maxTenure}
          step={1}
          unit="mo"
          display={tenureDisplay}
          onChange={v => setTenure(v)}
        />

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 20 }}>
          {[
            { label: "Monthly EMI",    value: fmt(emi),      color: "#10b981" },
            { label: "Total Interest", value: fmt(totalInt), color: "#f97316" },
            { label: "Total Payment",  value: fmt(totalPay), color: "#f4f4f5" },
          ].map((s) => (
            <div key={s.label} style={{
              background: "#18181b",
              border: "1px solid #27272a",
              borderRadius: 12,
              padding: "14px 10px",
              textAlign: "center",
            }}>
              <p style={{ fontSize: 10, color: "#71717a", marginBottom: 4 }}>{s.label}</p>
              <p style={{ fontSize: 15, fontWeight: 700, color: s.color }}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div style={{ display: "flex", borderRadius: 999, overflow: "hidden", height: 8, marginBottom: 10 }}>
          <div style={{ width: pPct + "%", background: "#10b981", transition: "width 0.5s" }} />
          <div style={{ flex: 1, background: "#f97316" }} />
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 12, color: "#71717a" }}>
          {[
            ["#10b981", `Principal (${pPct.toFixed(0)}%)`],
            ["#f97316", `Interest (${(100 - pPct).toFixed(0)}%)`],
          ].map(([c, l]) => (
            <span key={l} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: c, display: "inline-block" }} />
              {l}
            </span>
          ))}
        </div>
      </div>

      {/* ── Donut Chart ── */}
      <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24, marginBottom: 16 }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: "#f4f4f5", marginBottom: 16, textAlign: "center" }}>
          Loan Breakdown
        </p>
        <svg viewBox="0 0 160 160" style={{ width: 160, height: 160, display: "block", margin: "0 auto" }}>
          <circle cx="80" cy="80" r="54" fill="none" stroke="#27272a" strokeWidth="18" />
          <circle cx="80" cy="80" r="54" fill="none" stroke="#10b981" strokeWidth="18"
            strokeDasharray={`${pLen} ${C}`} strokeDashoffset={C / 4} strokeLinecap="round" />
          <circle cx="80" cy="80" r="54" fill="none" stroke="#f97316" strokeWidth="18"
            strokeDasharray={`${C - pLen} ${C}`} strokeDashoffset={C / 4 - pLen} strokeLinecap="round" />
          <text x="80" y="74" textAnchor="middle" fill="#71717a" fontSize="9">Total</text>
          <text x="80" y="90" textAnchor="middle" fill="#f4f4f5" fontSize="11" fontWeight="600">
            {fmtShort(totalPay)}
          </text>
        </svg>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 16, fontSize: 12, color: "#71717a" }}>
          {[["#10b981", "Principal"], ["#f97316", "Interest"]].map(([c, l]) => (
            <span key={l} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: c, display: "inline-block" }} />
              {l}
            </span>
          ))}
        </div>
      </div>

      {/* ── Amortization Schedule ── */}
      <div style={{ border: "1px solid #27272a", borderRadius: 16, overflow: "hidden" }}>
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
          <span style={{
            color: "#71717a", display: "inline-block",
            transform: showSched ? "rotate(180deg)" : "none",
            transition: "transform 0.2s",
          }}>▾</span>
        </button>

        {showSched && (
          <div style={{ background: "#111113", borderTop: "1px solid #27272a", padding: "16px 12px" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid #27272a" }}>
                    {["Month", "EMI", "Principal", "Interest", "Balance"].map(h => (
                      <th key={h} style={{ padding: "8px 6px", textAlign: "right", fontWeight: 500, color: "#71717a", fontSize: 11 }}>
                        {h}
                      </th>
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