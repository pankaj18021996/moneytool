"use client";
import React, { useRef, useEffect } from "react";

const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");
const fmtM = (n: number) => "₹" + Math.round(n / 12).toLocaleString("en-IN") + "/mo";
const clamp = (val: number, min: number, max: number) =>
  Math.max(min, Math.min(max, val));

function PieChart({ slices }: { slices: { value: number; color: string }[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const total = slices.reduce((s, sl) => s + sl.value, 0);

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
    let startAngle = -Math.PI / 2;
    for (const sl of slices) {
      if (sl.value <= 0) continue;
      const angle = (sl.value / total) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, startAngle, startAngle + angle);
      ctx.closePath();
      ctx.fillStyle = sl.color;
      ctx.fill();
      startAngle += angle;
    }
    ctx.beginPath();
    ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
    ctx.fillStyle = "#111113";
    ctx.fill();
  }, [slices, total]);

  return <canvas ref={canvasRef} style={{ display: "block" }} />;
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
    <div style={{ marginBottom: 22 }}>
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

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <div
      onClick={() => onChange(!checked)}
      style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, cursor: "pointer" }}
    >
      <span style={{ fontSize: 13, color: "#a1a1aa" }}>{label}</span>
      <div style={{
        width: 40, height: 22, borderRadius: 999, position: "relative",
        background: checked ? "#10b981" : "#27272a", transition: "background 0.2s", flexShrink: 0,
      }}>
        <div style={{
          position: "absolute", top: 3, left: checked ? 21 : 3,
          width: 16, height: 16, borderRadius: "50%", background: "#fff",
          transition: "left 0.2s",
        }} />
      </div>
    </div>
  );
}

function BreakRow({ label, annual, color, dot }: { label: string; annual: number; color: string; dot?: string }) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "10px 0", borderBottom: "1px solid #1c1c1e",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {dot && <span style={{ width: 8, height: 8, borderRadius: 2, background: dot, display: "inline-block", flexShrink: 0 }} />}
        <span style={{ fontSize: 13, color: "#a1a1aa" }}>{label}</span>
      </div>
      <div style={{ textAlign: "right" }}>
        <p style={{ fontSize: 13, fontWeight: 700, color }}>{fmt(annual)}</p>
        <p style={{ fontSize: 11, color: "#3f3f46" }}>{fmtM(annual)}</p>
      </div>
    </div>
  );
}

export default function SalaryCalculatorClient() {
  const [ctc, setCtc] = React.useState(1200000);
  const [pfOpt, setPfOpt] = React.useState(true);
  const [hraCity, setHraCity] = React.useState<"metro" | "non-metro">("metro");
  const [regime, setRegime] = React.useState<"new" | "old">("new");
  const [bonus, setBonus] = React.useState(0);
  const [otherDeductions, setOtherDeductions] = React.useState(0);

  // CTC Breakdown
  const basic = ctc * 0.50;
  const hra = basic * (hraCity === "metro" ? 0.50 : 0.40);
  const bonusAmt = (bonus / 100) * ctc;
  const employerPF = pfOpt ? basic * 0.12 : 0;
  const employeePF = pfOpt ? basic * 0.12 : 0;
  const specialAllowance = ctc - bonusAmt - basic - hra - employerPF;
  const grossSalary = basic + hra + Math.max(0, specialAllowance);

  // Tax Calculation FY 2025-26
  let taxableIncome = 0;
  if (regime === "new") {
    taxableIncome = Math.max(0, grossSalary - 75000 - otherDeductions);
  } else {
    const sec80C = pfOpt ? Math.min(150000, employeePF) : 0;
    taxableIncome = Math.max(0, grossSalary - 50000 - hra - sec80C - otherDeductions);
  }

  const calcTax = (income: number, isNew: boolean): number => {
    if (isNew) {
      if (income <= 300000) return 0;
      let tax = 0;
      const slabs = [
        [300000, 700000, 0.05],
        [700000, 1000000, 0.10],
        [1000000, 1200000, 0.15],
        [1200000, 1500000, 0.20],
        [1500000, Infinity, 0.30],
      ] as const;
      for (const [low, high, rate] of slabs) {
        if (income > low) tax += (Math.min(income, high) - low) * rate;
      }
      if (income <= 1200000) tax = 0; // Rebate u/s 87A
      return tax;
    } else {
      if (income <= 250000) return 0;
      let tax = 0;
      const slabs = [
        [250000, 500000, 0.05],
        [500000, 1000000, 0.20],
        [1000000, Infinity, 0.30],
      ] as const;
      for (const [low, high, rate] of slabs) {
        if (income > low) tax += (Math.min(income, high) - low) * rate;
      }
      if (income <= 500000) tax = 0; // Rebate u/s 87A old regime
      return tax;
    }
  };

  const incomeTax = calcTax(taxableIncome, regime === "new");
  const cess = incomeTax * 0.04;
  const totalTax = incomeTax + cess;
  const inHand = grossSalary - totalTax - employeePF - otherDeductions;
  const inHandMonthly = inHand / 12;

  const pct = (v: number) => ctc > 0 ? ((v / ctc) * 100).toFixed(1) + "%" : "0%";

  const pieSlices = [
    { value: Math.max(0, inHand), color: "#10b981" },
    { value: totalTax, color: "#ef4444" },
    { value: employeePF, color: "#3b82f6" },
    { value: otherDeductions, color: "#f97316" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

      {/* Inputs Card */}
      <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: "#f4f4f5", marginBottom: 24 }}>Salary Details</h2>

        <InputRow
          label="Annual CTC"
          value={ctc} min={100000} max={10000000} step={50000}
          display={"₹" + ctc.toLocaleString("en-IN")}
          onChange={setCtc}
        />
        <InputRow
          label="Bonus (% of CTC)"
          value={bonus} min={0} max={30} step={0.5}
          display={bonus.toFixed(1) + "%"}
          onChange={setBonus}
        />
        <InputRow
          label="Other Deductions (annual)"
          value={otherDeductions} min={0} max={500000} step={5000}
          display={"₹" + otherDeductions.toLocaleString("en-IN")}
          onChange={setOtherDeductions}
        />

        <div style={{ borderTop: "1px solid #27272a", paddingTop: 20, marginTop: 4, marginBottom: 8 }}>
          <Toggle label="Include PF (12% of Basic)" checked={pfOpt} onChange={setPfOpt} />
        </div>

        {/* HRA City */}
        <div style={{ marginBottom: 18 }}>
          <p style={{ fontSize: 13, color: "#a1a1aa", marginBottom: 10 }}>HRA City Type</p>
          <div style={{ display: "flex", gap: 8 }}>
            {(["metro", "non-metro"] as const).map(c => (
              <button key={c} onClick={() => setHraCity(c)} style={{
                flex: 1, padding: "8px 0", borderRadius: 8,
                fontSize: 13, fontWeight: 600, cursor: "pointer",
                border: hraCity === c ? "1px solid #10b981" : "1px solid #27272a",
                background: hraCity === c ? "rgba(16,185,129,0.1)" : "#18181b",
                color: hraCity === c ? "#10b981" : "#71717a",
                transition: "all 0.15s",
              }}>
                {c === "metro" ? "Metro (50%)" : "Non-Metro (40%)"}
              </button>
            ))}
          </div>
        </div>

        {/* Tax Regime */}
        <div>
          <p style={{ fontSize: 13, color: "#a1a1aa", marginBottom: 10 }}>Tax Regime</p>
          <div style={{ display: "flex", gap: 8 }}>
            {(["new", "old"] as const).map(r => (
              <button key={r} onClick={() => setRegime(r)} style={{
                flex: 1, padding: "8px 0", borderRadius: 8,
                fontSize: 13, fontWeight: 600, cursor: "pointer",
                border: regime === r ? "1px solid #10b981" : "1px solid #27272a",
                background: regime === r ? "rgba(16,185,129,0.1)" : "#18181b",
                color: regime === r ? "#10b981" : "#71717a",
                transition: "all 0.15s",
              }}>
                {r === "new" ? "New Regime" : "Old Regime"}
              </button>
            ))}
          </div>
          <p style={{ fontSize: 11, color: "#3f3f46", marginTop: 8 }}>
            {regime === "new"
              ? "New regime: ₹75K std. deduction. Zero tax up to ₹12L income."
              : "Old regime: ₹50K std. deduction + HRA exempt + 80C (₹1.5L)."}
          </p>
        </div>
      </div>

      {/* Results Card */}
      <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: "#f4f4f5", marginBottom: 20 }}>In-Hand Salary Breakdown</h2>

        {/* Big number */}
        <div style={{
          background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.2)",
          borderRadius: 12, padding: "20px 24px", marginBottom: 20, textAlign: "center",
        }}>
          <p style={{ fontSize: 12, color: "#71717a", marginBottom: 6, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>Monthly In-Hand</p>
          <p style={{ fontSize: 36, fontWeight: 800, color: "#10b981" }}>{fmt(inHandMonthly)}</p>
          <p style={{ fontSize: 13, color: "#71717a", marginTop: 4 }}>{fmt(inHand)} per year</p>
        </div>

        <BreakRow label="Gross Salary" annual={grossSalary} color="#f4f4f5" />
        <BreakRow label="Basic Salary" annual={basic} color="#a1a1aa" dot="#a1a1aa" />
        <BreakRow label="HRA" annual={hra} color="#a1a1aa" dot="#a1a1aa" />
        <BreakRow label="Special Allowance" annual={Math.max(0, specialAllowance)} color="#a1a1aa" dot="#a1a1aa" />
        {bonusAmt > 0 && <BreakRow label="Bonus" annual={bonusAmt} color="#f59e0b" dot="#f59e0b" />}
        <div style={{ height: 8 }} />
        {pfOpt && <BreakRow label="Employee PF (deducted)" annual={employeePF} color="#3b82f6" dot="#3b82f6" />}
        <BreakRow label="Income Tax + Cess" annual={totalTax} color="#ef4444" dot="#ef4444" />
        {otherDeductions > 0 && <BreakRow label="Other Deductions" annual={otherDeductions} color="#f97316" dot="#f97316" />}

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0 0" }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#f4f4f5" }}>Net In-Hand (Annual)</span>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: 15, fontWeight: 800, color: "#10b981" }}>{fmt(inHand)}</p>
            <p style={{ fontSize: 11, color: "#3f3f46" }}>{fmtM(inHand)}</p>
          </div>
        </div>
      </div>

      {/* Pie Chart Card */}
      <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24 }}>
        <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 16 }}>CTC Distribution</h3>
        <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" as const }}>
          <div style={{ position: "relative" }}>
            <PieChart slices={pieSlices} />
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ fontSize: 14, fontWeight: 800, color: "#10b981" }}>{pct(Math.max(0, inHand))}</span>
              <span style={{ fontSize: 9, color: "#71717a" }}>in-hand</span>
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { label: "In-Hand", value: Math.max(0, inHand), color: "#10b981" },
              { label: "Income Tax + Cess", value: totalTax, color: "#ef4444" },
              { label: "Employee PF", value: employeePF, color: "#3b82f6" },
              { label: "Other Deductions", value: otherDeductions, color: "#f97316" },
            ].map(sl => (
              <div key={sl.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 10, height: 10, borderRadius: 2, background: sl.color, display: "inline-block" }} />
                  <span style={{ fontSize: 12, color: "#a1a1aa" }}>{sl.label}</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: sl.color }}>{pct(sl.value)}</span>
                  <span style={{ fontSize: 11, color: "#3f3f46", marginLeft: 8 }}>{fmt(sl.value)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tax Summary */}
      <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24 }}>
        <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 16 }}>Tax Summary</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            { label: "Gross Salary", value: fmt(grossSalary), color: "#f4f4f5" },
            { label: "Taxable Income", value: fmt(taxableIncome), color: "#f59e0b" },
            { label: "Income Tax", value: fmt(incomeTax), color: "#ef4444" },
            { label: "Health & Ed. Cess (4%)", value: fmt(cess), color: "#ef4444" },
            { label: "Total Tax Outgo", value: fmt(totalTax), color: "#ef4444" },
            { label: "Effective Tax Rate", value: grossSalary > 0 ? ((totalTax / grossSalary) * 100).toFixed(1) + "%" : "0%", color: "#f97316" },
          ].map(item => (
            <div key={item.label} style={{ background: "#18181b", borderRadius: 10, padding: "12px 14px" }}>
              <p style={{ fontSize: 11, color: "#71717a", marginBottom: 4 }}>{item.label}</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: item.color }}>{item.value}</p>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 12, padding: "10px 14px",
          background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)",
          borderRadius: 10, fontSize: 12, color: "#71717a",
        }}>
          <strong style={{ color: "#10b981" }}>Regime: </strong>
          {regime === "new"
            ? "New Tax Regime (FY 2025-26) — zero tax up to ₹12L income."
            : "Old Tax Regime — HRA, 80C, and standard deductions applied."}
        </div>
      </div>

    </div>
  );
}