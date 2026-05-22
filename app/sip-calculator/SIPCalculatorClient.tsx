"use client";
import { useState } from "react";

export default function SIPCalculatorClient() {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const n = years * 12;
  const r = rate / (12 * 100);
  const invested = monthly * n;
  const maturity = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const returns = maturity - invested;

  const fmt = (n: number) =>
    "₹" + Math.round(n).toLocaleString("en-IN");

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 40,
      alignItems: "start",
      background: "#fff",
      padding: "40px",
      borderRadius: "12px",
    }}>
      {/* Left Column - Inputs */}
      <div>
        {/* Monthly Investment Slider */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <label style={{ fontSize: 16, fontWeight: 600, color: "#000" }}>Monthly Investment</label>
            <span style={{ fontSize: 20, fontWeight: 700, color: "#10b981" }}>{fmt(monthly)}</span>
          </div>
          <input
            type="range"
            min="500"
            max="10000000"
            step="500"
            value={monthly}
            onChange={(e) => setMonthly(Number(e.target.value))}
            style={{
              width: "100%",
              height: 6,
              borderRadius: 3,
              background: "#e5e7eb",
              outline: "none",
              WebkitAppearance: "none",
              appearance: "none",
              cursor: "pointer",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 14, color: "#666" }}>
            <span>₹500</span>
            <span>₹10,00,00,000</span>
          </div>
        </div>

        {/* Expected Return Slider */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <label style={{ fontSize: 16, fontWeight: 600, color: "#000" }}>Expected Return (% per annum)</label>
            <span style={{ fontSize: 20, fontWeight: 700, color: "#10b981" }}>{rate.toFixed(1)}%</span>
          </div>
          <input
            type="range"
            min="0.1"
            max="50"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            style={{
              width: "100%",
              height: 6,
              borderRadius: 3,
              background: "#e5e7eb",
              outline: "none",
              WebkitAppearance: "none",
              appearance: "none",
              cursor: "pointer",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 14, color: "#666" }}>
            <span>0.1%</span>
            <span>50%</span>
          </div>
        </div>

        {/* Investment Period Slider */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <label style={{ fontSize: 16, fontWeight: 600, color: "#000" }}>Investment Period (Years)</label>
            <span style={{ fontSize: 20, fontWeight: 700, color: "#10b981 " }}>{years} Years</span>
          </div>
          <input
            type="range"
            min="1"
            max="40"
            step="1"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            style={{
              width: "100%",
              height: 6,
              borderRadius: 3,
              background: "#e5e7eb",
              outline: "none",
              WebkitAppearance: "none",
              appearance: "none",
              cursor: "pointer",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 14, color: "#666" }}>
            <span>1 Year</span>
            <span>40 Years</span>
          </div>
        </div>

        {/* Input Fields */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#666", marginBottom: 8 }}>
              Monthly Investment (₹)
            </label>
            <input
              type="number"
              value={monthly}
              onChange={(e) => setMonthly(Number(e.target.value))}
              style={{
                width: "100%",
                padding: "10px 12px",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
                fontSize: 14,
                boxSizing: "border-box",
              }}
            />
          </div>
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#666", marginBottom: 8 }}>
              Expected Return (%)
            </label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              step="0.1"
              style={{
                width: "100%",
                padding: "10px 12px",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
                fontSize: 14,
                boxSizing: "border-box",
              }}
            />
          </div>
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#666", marginBottom: 8 }}>
              Period (Years)
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              style={{
                width: "100%",
                padding: "10px 12px",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
                fontSize: 14,
                boxSizing: "border-box",
              }}
            />
          </div>
        </div>
      </div>

      {/* Right Column - Results */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {/* Top Actions */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 20, borderBottom: "1px solid #e5e7eb" }}>
          <button style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 16px",
            background: "#f0f4ff",
            border: "1px solid #dbeafe",
            borderRadius: "6px",
            color: "#2563eb",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
          }}>
            💾 Save This Calculation
          </button>
          <a href="#" style={{ color: "#2563eb", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
            View Saved (0)
          </a>
        </div>

        {/* Results Card */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
            <span style={{ fontSize: 24 }}>📈</span>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#000", margin: 0 }}>Results</h3>
          </div>

          {/* Maturity Value */}
          <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid #e5e7eb" }}>
            <p style={{ fontSize: 14, color: "#666", marginBottom: 8 }}>Maturity Value</p>
            <p style={{ fontSize: 32, fontWeight: 700, color: "#10b981", margin: 0 }}>
              {fmt(maturity)}
            </p>
          </div>

          {/* Total Investment */}
          <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid #e5e7eb" }}>
            <p style={{ fontSize: 14, color: "#666", marginBottom: 8 }}>Total Investment</p>
            <p style={{ fontSize: 28, fontWeight: 700, color: "#000", margin: 0 }}>
              {fmt(invested)}
            </p>
          </div>

          {/* Estimated Returns */}
          <div>
            <p style={{ fontSize: 14, color: "#666", marginBottom: 8 }}>Estimated Returns</p>
            <p style={{ fontSize: 28, fontWeight: 700, color: "#10b981", margin: 0 }}>
              {fmt(returns)}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}
