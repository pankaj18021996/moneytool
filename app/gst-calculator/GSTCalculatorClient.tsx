"use client";
import { useState } from "react";

export default function GSTCalculatorClient() {
  const [amount, setAmount] = useState(1000);
  const [gstRate, setGstRate] = useState(18);
  const [type, setType] = useState<"exclusive" | "inclusive">("exclusive");
  const [editing, setEditing] = useState(false);
  const [raw, setRaw] = useState("");

  const gstAmount =
    type === "exclusive"
      ? (amount * gstRate) / 100
      : amount - amount * (100 / (100 + gstRate));

  const preGst = type === "exclusive" ? amount : amount - gstAmount;
  const postGst = type === "exclusive" ? amount + gstAmount : amount;

  const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");
  const gstRates = [3, 5, 12, 18, 28];

  const btnActive: React.CSSProperties = {
    background: "rgba(16,185,129,0.15)",
    border: "1px solid #10b981",
    color: "#10b981",
    borderRadius: 10,
    padding: "10px 20px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    flex: 1,
    transition: "all 0.2s",
  };

  const btnInactive: React.CSSProperties = {
    background: "#18181b",
    border: "1px solid #27272a",
    color: "#71717a",
    borderRadius: 10,
    padding: "10px 20px",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
    flex: 1,
    transition: "all 0.2s",
  };

  return (
    <div style={{
      background: "#111113",
      border: "1px solid #27272a",
      borderRadius: 20,
      padding: 28,
      marginBottom: 16,
    }}>

      {/* Calculation Type Toggle */}
      <div style={{ marginBottom: 28 }}>
        <p style={{ fontSize: 13, color: "#71717a", marginBottom: 12, fontWeight: 500 }}>
          Calculation Type
        </p>
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={() => setType("exclusive")} style={type === "exclusive" ? btnActive : btnInactive}>
            Add GST
          </button>
          <button onClick={() => setType("inclusive")} style={type === "inclusive" ? btnActive : btnInactive}>
            Remove GST
          </button>
        </div>
      </div>

      {/* Amount — Slider + Click-to-edit value (same as EMI calculator) */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>Enter Amount (₹)</span>

          {/* Click to edit — same pattern as EMI calculator */}
          {editing ? (
            <input
              autoFocus
              type="number"
              value={raw}
              onChange={e => setRaw(e.target.value)}
              onBlur={() => {
                const v = Number(raw);
                if (!isNaN(v) && v >= 1 && v <= 10000000) setAmount(v);
                setEditing(false);
              }}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  const v = Number(raw);
                  if (!isNaN(v) && v >= 1 && v <= 10000000) setAmount(v);
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
                width: 140,
                textAlign: "right",
                fontFamily: "inherit",
                outline: "none",
              }}
            />
          ) : (
            <button
              onClick={() => { setRaw(String(amount)); setEditing(true); }}
              title="Click to type exact amount"
              style={{
                background: "#18181b",
                border: "1px solid #27272a",
                borderRadius: 8,
                padding: "4px 14px",
                color: "#f4f4f5",
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              {fmt(amount)}
            </button>
          )}
        </div>

        <input
          type="range"
          min={100}
          max={1000000}
          step={100}
          value={Math.min(amount, 1000000)}
          onChange={e => setAmount(Number(e.target.value))}
          style={{ width: "100%", accentColor: "#10b981", cursor: "pointer" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#52525b", marginTop: 4 }}>
          <span>₹100</span><span>₹10,00,000+</span>
        </div>
      </div>

      {/* GST Rate */}
      <div style={{ marginBottom: 28 }}>
        <p style={{ fontSize: 13, color: "#71717a", marginBottom: 12, fontWeight: 500 }}>GST Rate</p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {gstRates.map((r) => (
            <button
              key={r}
              onClick={() => setGstRate(r)}
              style={{
                ...(gstRate === r ? btnActive : btnInactive),
                flex: "unset",
                padding: "8px 18px",
              }}
            >
              {r}%
            </button>
          ))}
        </div>
      </div>

      {/* Result Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 16 }}>
        <div style={{ background: "#18181b", border: "1px solid #27272a", borderRadius: 14, padding: 16 }}>
          <p style={{ fontSize: 11, color: "#71717a", marginBottom: 8, fontWeight: 500 }}>Pre-GST Amount</p>
          <p style={{ fontSize: 18, fontWeight: 700, color: "#f4f4f5" }}>{fmt(preGst)}</p>
        </div>
        <div style={{ background: "#18181b", border: "1px solid rgba(16,185,129,0.2)", borderRadius: 14, padding: 16 }}>
          <p style={{ fontSize: 11, color: "#71717a", marginBottom: 8, fontWeight: 500 }}>GST Amount</p>
          <p style={{ fontSize: 18, fontWeight: 700, color: "#10b981" }}>{fmt(gstAmount)}</p>
        </div>
        <div style={{ background: "#18181b", border: "1px solid #27272a", borderRadius: 14, padding: 16 }}>
          <p style={{ fontSize: 11, color: "#71717a", marginBottom: 8, fontWeight: 500 }}>Total Amount</p>
          <p style={{ fontSize: 18, fontWeight: 700, color: "#f4f4f5" }}>{fmt(postGst)}</p>
        </div>
      </div>

      {/* CGST / SGST / IGST Breakdown */}
      <div style={{ background: "#18181b", border: "1px solid #27272a", borderRadius: 14, padding: 18 }}>
        <p style={{ fontSize: 12, color: "#71717a", marginBottom: 14, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Tax Breakdown
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <span style={{ fontSize: 14, color: "#a1a1aa" }}>CGST ({gstRate / 2}%)</span>
          <span style={{ fontSize: 15, fontWeight: 600, color: "#f4f4f5" }}>{fmt(gstAmount / 2)}</span>
        </div>
        <div style={{ height: 1, background: "#27272a", marginBottom: 10 }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <span style={{ fontSize: 14, color: "#a1a1aa" }}>SGST ({gstRate / 2}%)</span>
          <span style={{ fontSize: 15, fontWeight: 600, color: "#f4f4f5" }}>{fmt(gstAmount / 2)}</span>
        </div>
        <div style={{ height: 1, background: "#27272a", marginBottom: 10 }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 14, color: "#a1a1aa" }}>
            IGST ({gstRate}%) <span style={{ fontSize: 11, color: "#52525b" }}>(Inter-state)</span>
          </span>
          <span style={{ fontSize: 15, fontWeight: 600, color: "#f4f4f5" }}>{fmt(gstAmount)}</span>
        </div>
      </div>

    </div>
  );
}
