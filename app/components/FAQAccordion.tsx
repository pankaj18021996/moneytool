"use client";
import React from "react";

type FaqItem = {
  q: string;
  a: string;
};

export default function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return (
    <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: "#f4f4f5" }}>Frequently Asked Questions</h2>
      <div style={{ display: "grid", gap: 12 }}>
        {items.map((faq, index) => (
          <div key={index} style={{ borderRadius: 16, background: "#18181b", overflow: "hidden" }}>
            <button
              type="button"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "18px 20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "transparent",
                border: "none",
                color: "#f4f4f5",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              <span>{faq.q}</span>
              <span style={{ color: "#10b981", fontSize: 16 }}>{activeIndex === index ? "−" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div style={{ padding: "0 20px 18px", background: "#111113", color: "#a1a1aa", fontSize: 13, lineHeight: 1.8 }}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
