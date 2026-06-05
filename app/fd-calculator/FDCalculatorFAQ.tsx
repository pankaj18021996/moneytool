"use client";
import React from "react";

type FAQItem = {
  q: string;
  a: string;
};

interface FDCalculatorFAQProps {
  faqs: FAQItem[];
}

export default function FDCalculatorFAQ({ faqs }: FDCalculatorFAQProps) {
  const [activeFAQ, setActiveFAQ] = React.useState<number | null>(0);

  return (
    <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28, marginBottom: 32 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 20 }}>Frequently Asked Questions</h2>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderBottom: i < faqs.length - 1 ? "1px solid #27272a" : "none", padding: "16px 0" }}>
          <button
            type="button"
            onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
            aria-expanded={activeFAQ === i}
            style={{
              width: "100%",
              textAlign: "left",
              border: "none",
              background: "transparent",
              padding: 0,
              cursor: "pointer",
              color: "#f4f4f5",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>{faq.q}</h3>
              <span style={{ fontSize: 18, color: "#10b981" }}>{activeFAQ === i ? "−" : "+"}</span>
            </div>
          </button>
          {activeFAQ === i ? (
            <p style={{ fontSize: 13, color: "#71717a", lineHeight: 1.7, marginTop: 12 }}>{faq.a}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
