"use client";
import React from "react";

export default function PieChart({ principal, interest }: { principal: number; interest: number }) {
  const total = Math.max(1, principal + interest);
  const pPct = Math.round((principal / total) * 10000) / 100;
  const iPct = Math.round((interest / total) * 10000) / 100;
  const angle = (principal / total) * 360;
  const style: React.CSSProperties = {
    width: 140,
    height: 140,
    borderRadius: "50%",
    background: `conic-gradient(#10b981 0deg ${angle}deg, #f97316 ${angle}deg 360deg)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#f4f4f5",
    fontWeight: 700,
    fontSize: 13,
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={style} aria-hidden>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#71717a" }}>Principal</div>
          <div>{pPct}%</div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 10, fontSize: 13 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span style={{ width: 10, height: 10, borderRadius: 6, background: "#10b981", display: "inline-block" }} />
          <span style={{ color: "#a1a1aa" }}>{pPct}% Principal</span>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span style={{ width: 10, height: 10, borderRadius: 6, background: "#f97316", display: "inline-block" }} />
          <span style={{ color: "#a1a1aa" }}>{iPct}% Interest</span>
        </div>
      </div>
    </div>
  );
}
