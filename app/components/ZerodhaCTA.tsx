import React from "react";

export default function ZerodhaCTA({ context }: { context: string }) {
  return (
    <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24, marginBottom: 32 }}>
      <p style={{ fontSize: 13, color: "#71717a", marginBottom: 12 }}>
        <strong style={{ color: "#f4f4f5" }}>Disclosure:</strong> This page contains affiliate links. We may earn a commission if you open a demat account through our partner.
      </p>
      <div style={{ background: "#18181b", border: "1px solid #27272a", borderRadius: 12, padding: 16 }}>
        <p style={{ fontSize: 13, color: "#a1a1aa", marginBottom: 12 }}>{context}</p>
        <a href="https://zerodha.com/open-account?c=FV4724" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#10b981", color: "#fff", padding: "10px 20px", borderRadius: "8px", textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>
          Open Free Zerodha Account
        </a>
      </div>
    </div>
  );
}
