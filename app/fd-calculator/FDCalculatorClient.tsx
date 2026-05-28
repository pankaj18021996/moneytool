"use client";
import React, { useRef, useEffect } from "react";

const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");
const clamp = (val: number, min: number, max: number) =>
  Math.max(min, Math.min(max, val));

type CompoundFreq = "annually" | "quarterly" | "monthly";

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
    const investedAngle = (invested / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + investedAngle);
    ctx.closePath();
    ctx.fillStyle = "#3b82f6";
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, -Math.PI / 2 + investedAngle, -Math.PI / 2 + Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = "#10b981";
    ctx.fill();
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
          Principal
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

export default function FDCalculatorClient() {
  const [principal, setPrincipal] = React.useState(100000);
  const [rate, setRate] = React.useState(7.0);
  const [years, setYears] = React.useState(3);
  const [freq, setFreq] = React.useState<CompoundFreq>("quarterly");

  // Correct FD formula: A = P(1 + r/n)^(nt)
  const n = freq === "annually" ? 1 : freq === "quarterly" ? 4 : 12;
  const maturity = principal * Math.pow(1 + rate / (100 * n), n * years);
  const returns = maturity - principal;
  const effectiveRate = (Math.pow(1 + rate / (100 * n), n) - 1) * 100;

  const freqOptions: { label: string; value: CompoundFreq }[] = [
    { label: "Monthly", value: "monthly" },
    { label: "Quarterly", value: "quarterly" },
    { label: "Annually", value: "annually" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

      {/* Calculator Card */}
      <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: "#f4f4f5", marginBottom: 24 }}>FD Calculator</h2>

        {/* Compounding Frequency */}
        <div style={{ marginBottom: 28 }}>
          <p style={{ fontSize: 13, color: "#a1a1aa", marginBottom: 10 }}>Compounding Frequency</p>
          <div style={{ display: "flex", gap: 8 }}>
            {freqOptions.map(opt => (
              <button
                key={opt.value}
                onClick={() => setFreq(opt.value)}
                style={{
                  flex: 1, padding: "8px 0", borderRadius: 8,
                  fontSize: 13, fontWeight: 600, cursor: "pointer",
                  border: freq === opt.value ? "1px solid #10b981" : "1px solid #27272a",
                  background: freq === opt.value ? "rgba(16,185,129,0.1)" : "#18181b",
                  color: freq === opt.value ? "#10b981" : "#71717a",
                  transition: "all 0.15s",
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <InputRow
          label="Principal Amount"
          value={principal} min={1000} max={10000000} step={1000}
          display={"₹" + principal.toLocaleString("en-IN")}
          onChange={setPrincipal}
        />
        <InputRow
          label="Interest Rate (p.a.)"
          value={rate} min={1} max={15} step={0.1}
          display={rate.toFixed(1) + "%"}
          onChange={setRate}
        />
        <InputRow
          label="Time Period (Years)"
          value={years} min={1} max={10} step={1}
          display={years + " yr"}
          onChange={setYears}
        />

        {/* Results */}
        <div style={{ borderTop: "1px solid #27272a", paddingTop: 20, marginTop: 4 }}>
          <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
            <StatCard label="Principal" value={fmt(principal)} color="#3b82f6" />
            <StatCard label="Est. Returns" value={fmt(returns)} color="#10b981" />
            <StatCard label="Maturity Value" value={fmt(maturity)} color="#f4f4f5" />
          </div>
          <div style={{
            background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)",
            borderRadius: 10, padding: "10px 14px",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <span style={{ fontSize: 12, color: "#71717a" }}>Effective Annual Yield (EAR)</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: "#10b981" }}>
              {effectiveRate.toFixed(2)}%
            </span>
          </div>
        </div>
      </div>

      {/* Pie Chart Card */}
      <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24, display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", alignSelf: "flex-start" }}>Investment Breakdown</h3>
        <PieChart invested={principal} returns={returns} />
        <div style={{ width: "100%", display: "flex", gap: 10 }}>
          <div style={{ flex: 1, background: "#18181b", borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 11, color: "#71717a", marginBottom: 4 }}>PRINCIPAL</p>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#3b82f6" }}>{fmt(principal)}</p>
            <p style={{ fontSize: 11, color: "#3f3f46" }}>{Math.round((principal / maturity) * 100)}% of maturity</p>
          </div>
          <div style={{ flex: 1, background: "#18181b", borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 11, color: "#71717a", marginBottom: 4 }}>RETURNS</p>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#10b981" }}>{fmt(returns)}</p>
            <p style={{ fontSize: 11, color: "#3f3f46" }}>{Math.round((returns / maturity) * 100)}% of maturity</p>
          </div>
        </div>
      </div>

      {/* Year-wise Breakdown Table */}
      <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24 }}>
        <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 16 }}>Year-wise Growth</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #27272a" }}>
                {["Year", "Opening Balance", "Interest Earned", "Closing Balance"].map(h => (
                  <th key={h} style={{
                    padding: "8px 12px", textAlign: "right", color: "#71717a",
                    fontWeight: 600, fontSize: 11, textTransform: "uppercase" as const,
                    letterSpacing: "0.04em", whiteSpace: "nowrap" as const,
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: years }, (_, i) => {
                const yr = i + 1;
                const open = principal * Math.pow(1 + rate / (100 * n), n * i);
                const close = principal * Math.pow(1 + rate / (100 * n), n * yr);
                const interest = close - open;
                return (
                  <tr key={yr} style={{ borderBottom: i < years - 1 ? "1px solid #1c1c1e" : "none" }}>
                    <td style={{ padding: "10px 12px", textAlign: "right", color: "#a1a1aa" }}>Y{yr}</td>
                    <td style={{ padding: "10px 12px", textAlign: "right", color: "#a1a1aa" }}>{fmt(open)}</td>
                    <td style={{ padding: "10px 12px", textAlign: "right", color: "#10b981", fontWeight: 600 }}>{fmt(interest)}</td>
                    <td style={{ padding: "10px 12px", textAlign: "right", color: "#f4f4f5", fontWeight: 700 }}>{fmt(close)}</td>
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