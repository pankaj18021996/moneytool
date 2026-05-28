"use client";
import React, { useRef, useEffect } from "react";

const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");
const clamp = (val: number, min: number, max: number) =>
  Math.max(min, Math.min(max, val));

function PieChart({ invested, returns }: { invested: number; returns: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const total = invested + returns;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const size = 160;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + "px";
    canvas.style.height = size + "px";
    ctx.scale(dpr, dpr);
    const cx = size / 2, cy = size / 2, r = 68, innerR = 44;
    ctx.clearRect(0, 0, size, size);
    const investedAngle = total > 0 ? (invested / total) * Math.PI * 2 : Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + investedAngle);
    ctx.closePath();
    ctx.fillStyle = "#3b82f6";
    ctx.fill();
    if (returns > 0) {
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, -Math.PI / 2 + investedAngle, -Math.PI / 2 + Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = "#10b981";
      ctx.fill();
    }
    ctx.beginPath();
    ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
    ctx.fillStyle = "#111113";
    ctx.fill();
  }, [invested, returns, total]);

  const pct = total > 0 ? Math.round((returns / total) * 100) : 0;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
      <div style={{ position: "relative" }}>
        <canvas ref={canvasRef} style={{ display: "block" }} />
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
        }}>
          <span style={{ fontSize: 18, fontWeight: 800, color: "#10b981" }}>{pct}%</span>
          <span style={{ fontSize: 10, color: "#71717a" }}>returns</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#a1a1aa" }}>
          <span style={{ width: 10, height: 10, borderRadius: 2, background: "#3b82f6", display: "inline-block" }} />
          Invested
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#a1a1aa" }}>
          <span style={{ width: 10, height: 10, borderRadius: 2, background: "#10b981", display: "inline-block" }} />
          Returns
        </div>
      </div>
    </div>
  );
}

function InputRow({
  label, value, min, max, step, display, onChange,
}: {
  label: string; value: number; min: number; max: number;
  step: number; display: string; onChange: (v: number) => void;
}) {
  const [raw, setRaw] = React.useState("");
  const [editing, setEditing] = React.useState(false);

  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <label style={{ fontSize: 13, color: "#a1a1aa" }}>{label}</label>
        <input
          type="text"
          inputMode="decimal"
          value={editing ? raw : display}
          onFocus={() => { setRaw(String(value)); setEditing(true); }}
          onChange={e => setRaw(e.target.value)}
          onBlur={() => {
            const parsed = parseFloat(raw.replace(/,/g, ""));
            if (!isNaN(parsed)) onChange(clamp(parsed, min, max));
            setEditing(false);
          }}
          onKeyDown={e => {
            if (e.key === "Enter") {
              const parsed = parseFloat(raw.replace(/,/g, ""));
              if (!isNaN(parsed)) onChange(clamp(parsed, min, max));
              setEditing(false);
              (e.target as HTMLInputElement).blur();
            }
          }}
          style={{
            width: 120, textAlign: "right",
            background: "#18181b", border: "1px solid #27272a",
            borderRadius: 8, padding: "4px 10px",
            fontSize: 14, fontWeight: 700, color: "#f4f4f5",
            outline: "none", fontFamily: "'DM Sans', sans-serif",
          }}
        />
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        style={{ width: "100%", accentColor: "#10b981", cursor: "pointer" }}
      />
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#3f3f46", marginTop: 4 }}>
        <span>{min.toLocaleString("en-IN")}</span>
        <span>{max.toLocaleString("en-IN")}</span>
      </div>
    </div>
  );
}

function StatCard({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div style={{ background: "#18181b", borderRadius: 12, padding: "16px 12px", textAlign: "center", flex: 1 }}>
      <p style={{ fontSize: 11, color: "#71717a", marginBottom: 6, textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>{label}</p>
      <p style={{ fontSize: 16, fontWeight: 800, color }}>{value}</p>
    </div>
  );
}

export default function SIPCalculatorClient() {
  const [monthly, setMonthly] = React.useState(5000);
  const [rate, setRate] = React.useState(12);
  const [years, setYears] = React.useState(10);

  // Correct SIP formula: FV = PMT × [((1+r)^n − 1) / r] × (1+r)
  const r = rate / 12 / 100;
  const n = years * 12;
  const invested = monthly * n;
  const maturity = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const returns = maturity - invested;

  const yearRows = Array.from({ length: years }, (_, i) => {
    const yr = i + 1;
    const nYr = yr * 12;
    const fv = monthly * ((Math.pow(1 + r, nYr) - 1) / r) * (1 + r);
    const totalInvested = monthly * nYr;
    return { yr, totalInvested, totalReturns: fv - totalInvested, fv };
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

      {/* Calculator Card */}
      <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: "#f4f4f5", marginBottom: 24 }}>SIP Calculator</h2>

        <InputRow
          label="Monthly SIP Amount"
          value={monthly} min={500} max={200000} step={500}
          display={"₹" + monthly.toLocaleString("en-IN")}
          onChange={setMonthly}
        />
        <InputRow
          label="Expected Return Rate (p.a.)"
          value={rate} min={1} max={30} step={0.5}
          display={rate.toFixed(1) + "%"}
          onChange={setRate}
        />
        <InputRow
          label="Investment Period"
          value={years} min={1} max={40} step={1}
          display={years + " yr"}
          onChange={setYears}
        />

        <div style={{ borderTop: "1px solid #27272a", paddingTop: 20, marginTop: 4 }}>
          <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
            <StatCard label="Invested" value={fmt(invested)} color="#3b82f6" />
            <StatCard label="Est. Returns" value={fmt(returns)} color="#10b981" />
            <StatCard label="Total Value" value={fmt(maturity)} color="#f4f4f5" />
          </div>
          <div style={{
            background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)",
            borderRadius: 10, padding: "10px 14px",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <span style={{ fontSize: 12, color: "#71717a" }}>Wealth gained on invested amount</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: "#10b981" }}>
              {invested > 0 ? ((returns / invested) * 100).toFixed(1) : "0"}%
            </span>
          </div>
        </div>
      </div>

      {/* Pie Chart Card */}
      <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24, display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", alignSelf: "flex-start" }}>Investment Breakdown</h3>
        <PieChart invested={invested} returns={returns} />
        <div style={{ width: "100%", display: "flex", gap: 10 }}>
          <div style={{ flex: 1, background: "#18181b", borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 11, color: "#71717a", marginBottom: 4 }}>INVESTED</p>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#3b82f6" }}>{fmt(invested)}</p>
            <p style={{ fontSize: 11, color: "#3f3f46" }}>{maturity > 0 ? Math.round((invested / maturity) * 100) : 0}% of total</p>
          </div>
          <div style={{ flex: 1, background: "#18181b", borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 11, color: "#71717a", marginBottom: 4 }}>RETURNS</p>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#10b981" }}>{fmt(returns)}</p>
            <p style={{ fontSize: 11, color: "#3f3f46" }}>{maturity > 0 ? Math.round((returns / maturity) * 100) : 0}% of total</p>
          </div>
        </div>
      </div>

      {/* Year-wise Table */}
      <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24 }}>
        <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 16 }}>Year-wise Growth</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #27272a" }}>
                {["Year", "Total Invested", "Est. Returns", "Total Value"].map(h => (
                  <th key={h} style={{
                    padding: "8px 12px", textAlign: "right", color: "#71717a",
                    fontWeight: 600, fontSize: 11, textTransform: "uppercase" as const,
                    letterSpacing: "0.04em", whiteSpace: "nowrap" as const,
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {yearRows.map((row, i) => (
                <tr key={row.yr} style={{ borderBottom: i < yearRows.length - 1 ? "1px solid #1c1c1e" : "none" }}>
                  <td style={{ padding: "10px 12px", textAlign: "right", color: "#a1a1aa" }}>Y{row.yr}</td>
                  <td style={{ padding: "10px 12px", textAlign: "right", color: "#a1a1aa" }}>{fmt(row.totalInvested)}</td>
                  <td style={{ padding: "10px 12px", textAlign: "right", color: "#10b981", fontWeight: 600 }}>{fmt(row.totalReturns)}</td>
                  <td style={{ padding: "10px 12px", textAlign: "right", color: "#f4f4f5", fontWeight: 700 }}>{fmt(row.fv)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}