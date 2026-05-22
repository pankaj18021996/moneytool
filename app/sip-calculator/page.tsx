import type { Metadata } from "next";
import Link from "next/link";
import { metadata as seoMetadata } from "./metadata";
import SIPCalculatorClient from "./SIPCalculatorClient";

export const metadata: Metadata = seoMetadata as Metadata;

const faqs = [
  {
    q: "What is SIP in mutual funds?",
    a: "SIP (Systematic Investment Plan) is a method to invest fixed amounts in mutual funds at regular intervals. Instead of investing a lump sum, you invest smaller amounts monthly.",
  },
  {
    q: "How much return can I expect from SIP?",
    a: "Returns depend on the type of mutual fund and market conditions. Equity SIPs historically return 8-12% annually, while debt funds return 4-6%.",
  },
  {
    q: "Is SIP better than lump sum investment?",
    a: "SIP reduces risk through rupee cost averaging. During market downturns, you buy more units at lower prices, which can reduce your average cost.",
  },
  {
    q: "Can I withdraw my SIP money anytime?",
    a: "Yes, most mutual fund schemes allow withdrawal anytime. However, exiting within a certain period may attract exit loads.",
  },
  {
    q: "What's the minimum SIP amount?",
    a: "Most mutual funds allow SIPs starting from ₹500/month. Some premium funds may have higher minimums.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SIPCalculatorPage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", gap: 8, fontSize: 13, color: "#71717a", marginBottom: 24, alignItems: "center" }}>
          <Link href="/" style={{ color: "#71717a", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <span style={{ color: "#a1a1aa" }}>SIP Calculator</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "#f4f4f5", marginBottom: 10, lineHeight: 1.2 }}>
            SIP Calculator India 2026
          </h1>
          <p style={{ color: "#a1a1aa", fontSize: 16, lineHeight: 1.6, maxWidth: 680 }}>
            Calculate your mutual fund SIP returns instantly. Understand how your monthly investments grow over time with compound returns.
          </p>
        </div>

        {/* Calculator Section */}
        <div style={{ marginBottom: 48 }}>
          <SIPCalculatorClient />
        </div>

        {/* Affiliate Disclosure */}
        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24, marginBottom: 48 }}>
          <p style={{ fontSize: 13, color: "#71717a", marginBottom: 12 }}>
            <strong style={{ color: "#f4f4f5" }}>📢 Disclosure:</strong> This page contains affiliate links. We may earn a commission if you open a demat account through our partner. This doesn't affect your costs — it helps us keep MoneyTool free.
          </p>
          <div style={{ background: "#18181b", border: "1px solid #27272a", borderRadius: 12, padding: 16 }}>
            <p style={{ fontSize: 13, color: "#a1a1aa", marginBottom: 12 }}>
              Ready to start investing in SIPs? Open a FREE demat account with our partner and begin your investment journey today.
            </p>
            <a
              href="https://zerodha.com/open-account?c=FV4724"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#10b981",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600"
              }}
            >
              Open Zerodha Account →
            </a>
          </div>
        </div>

        {/* What is SIP */}
        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 14 }}>
            What is SIP?
          </h2>
          <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.9, marginBottom: 10 }}>
            SIP stands for Systematic Investment Plan — a method to invest fixed amounts in mutual funds at regular intervals, typically monthly. Instead of trying to time the market with a large one-time investment, SIP lets you invest gradually.
          </p>
          <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.9 }}>
            This approach leverages rupee cost averaging — you buy more units when prices are low and fewer when prices are high, potentially reducing your average cost per unit.
          </p>
        </div>

        {/* How SIP Works */}
        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 20 }}>
            How to Use This SIP Calculator
          </h2>
          {[
            { step: "Step 1", text: "Enter your monthly SIP amount" },
            { step: "Step 2", text: "Set the expected annual return rate" },
            { step: "Step 3", text: "Choose your investment tenure in years" },
            { step: "Step 4", text: "See your investment growth and projected returns" },
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 14, marginBottom: 14, alignItems: "flex-start" }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, fontWeight: 700, color: "#10b981",
              }}>{i + 1}</div>
              <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.7, marginTop: 4 }}>
                <strong style={{ color: "#f4f4f5" }}>{s.step} — </strong>{s.text}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 20 }}>
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: i < faqs.length - 1 ? "1px solid #27272a" : "none", padding: "16px 0" }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 8 }}>{faq.q}</h3>
              <p style={{ fontSize: 13, color: "#71717a", lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}       