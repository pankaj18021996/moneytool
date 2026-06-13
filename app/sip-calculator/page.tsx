import { BreadcrumbSchema } from "../components/Breadcrumb";
import type { Metadata } from "next";
import Link from "next/link";
import SIPCalculatorClient from "./SIPCalculatorClient";

export const metadata: Metadata = {
  title: "SIP Calculator India 2026 – Mutual Fund Returns | MoneyTool",
  description:
    "Calculate your mutual fund SIP returns instantly. See how your monthly investments grow with compound returns over time. Free online SIP calculator for India.",
  alternates: { canonical: "https://www.moneytool.in/sip-calculator" },
  openGraph: {
    title: "SIP Calculator India 2026 – MoneyTool",
    description: "Calculate SIP maturity value, returns, and year-wise growth for mutual funds.",
    images: ["/og-image.png"],
  },
};

const investmentTypes = [
  { label: "Equity SIP", icon: "📈", rate: "8-12% p.a." },
  { label: "Hybrid SIP", icon: "⚖️", rate: "6-9% p.a." },
  { label: "Debt SIP", icon: "💳", rate: "4-6% p.a." },
];

const faqs = [
  {
    q: "What is SIP in mutual funds?",
    a: "SIP (Systematic Investment Plan) is a method to invest fixed amounts in mutual funds at regular intervals. Instead of investing a lump sum, you invest smaller amounts monthly.",
  },
  {
    q: "How is SIP return calculated?",
    a: "SIP uses the future value of annuity formula: FV = PMT × [((1+r)^n − 1) / r] × (1+r), where PMT is monthly investment, r is monthly rate (annual rate ÷ 12 ÷ 100), and n is total months.",
  },
  {
    q: "Is SIP better than lump sum investment?",
    a: "SIP reduces risk through rupee cost averaging. During market downturns, you buy more units at lower prices. Lump sum works better in a consistently rising market.",
  },
  {
    q: "Can I withdraw my SIP money anytime?",
    a: "Yes, most mutual fund schemes allow withdrawal anytime. However, exiting within a certain period may attract exit loads. ELSS funds have a mandatory 3-year lock-in.",
  },
  {
    q: "What's the minimum SIP amount?",
    a: "Most mutual funds allow SIPs starting from ₹500/month. Some premium funds may have higher minimums.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SIPCalculatorPage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.moneytool.in" },
          { "@type": "ListItem", position: 2, name: "SIP Calculator", item: "https://www.moneytool.in/sip-calculator" },
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "WebApplication",
        name: "SIP Calculator India", url: "https://www.moneytool.in/sip-calculator",
        description: "Free SIP calculator for mutual fund investments in India. Calculate SIP returns, maturity value and year-wise growth instantly.",
        applicationCategory: "FinanceApplication", operatingSystem: "Web Browser",
        offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
        isAccessibleForFree: true, inLanguage: "en-IN",
        provider: { "@type": "Organization", name: "MoneyTool", url: "https://www.moneytool.in" },
      }) }} />
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

        {/* Pills */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          <div style={{
            padding: "8px 16px", borderRadius: 999, fontSize: 13,
            background: "rgba(16,185,129,0.1)", border: "1px solid #10b981",
            color: "#10b981", fontWeight: 600,
          }}>📊 All SIPs</div>
          {investmentTypes.map((it) => (
            <div key={it.label} style={{
              padding: "8px 16px", borderRadius: 999, fontSize: 13,
              background: "#111113", border: "1px solid #27272a",
              color: "#a1a1aa", display: "flex", alignItems: "center", gap: 6,
            }}>
              {it.icon} {it.label}
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, alignItems: "start", marginBottom: 48 }}>

          <SIPCalculatorClient />

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 14 }}>SIP Types</h3>
              {investmentTypes.map((it) => (
                <div key={it.label} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "11px 14px", borderRadius: 10, marginBottom: 8,
                  background: "#18181b", border: "1px solid #27272a",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 18 }}>{it.icon}</span>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 600, color: "#f4f4f5", marginBottom: 1 }}>{it.label}</p>
                      <p style={{ fontSize: 11, color: "#71717a" }}>{it.rate}</p>
                    </div>
                  </div>
                  <span style={{ fontSize: 14, color: "#10b981" }}>→</span>
                </div>
              ))}
            </div>

            <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 12 }}>SIP Formula</h3>
              <div style={{ background: "#18181b", borderRadius: 10, padding: 14, textAlign: "center", marginBottom: 12 }}>
                <p style={{ fontSize: 12, color: "#a1a1aa", fontFamily: "monospace", lineHeight: 2 }}>
                  FV = PMT × [((1+r)ⁿ − 1) / r] × (1+r)
                </p>
              </div>
              <div style={{ fontSize: 12, color: "#71717a", lineHeight: 2 }}>
                <p><span style={{ color: "#10b981" }}>FV</span> = Future Value</p>
                <p><span style={{ color: "#10b981" }}>PMT</span> = Monthly investment</p>
                <p><span style={{ color: "#10b981" }}>r</span> = Monthly rate (annual ÷ 12 ÷ 100)</p>
                <p><span style={{ color: "#10b981" }}>n</span> = Total months</p>
              </div>
            </div>

            <div style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#10b981", marginBottom: 12 }}>💡 Quick Tips</h3>
              {["Start early for max returns", "Invest regularly, don't time market", "Diversify across fund types", "Review & rebalance yearly", "Stay invested long-term"].map((tip, i) => (
                <p key={i} style={{ display: "flex", gap: 8, fontSize: 12, color: "#a1a1aa", lineHeight: 1.7, marginBottom: 6 }}>
                  <span style={{ color: "#10b981", flexShrink: 0 }}>✓</span>{tip}
                </p>
              ))}
            </div>
          </div>
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
            <a href="https://zerodha.com/open-account?c=FV4724" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: "#10b981", color: "#fff", padding: "10px 20px", borderRadius: "8px", textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>
              Open Zerodha Account →
            </a>
          </div>
        </div>

        {/* What is SIP */}
        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 14 }}>What is SIP?</h2>
          <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.9, marginBottom: 10 }}>
            SIP stands for Systematic Investment Plan — a method to invest fixed amounts in mutual funds at regular intervals, typically monthly. Instead of trying to time the market with a large one-time investment, SIP lets you invest gradually.
          </p>
          <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.9 }}>
            This approach leverages rupee cost averaging — you buy more units when prices are low and fewer when prices are high, potentially reducing your average cost per unit over time.
          </p>
        </div>

        {/* How to Use */}
        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 20 }}>How to Use This SIP Calculator</h2>
          {[
            { step: "Step 1", text: "Enter your monthly SIP amount" },
            { step: "Step 2", text: "Set the expected annual return rate (8-12% for equity)" },
            { step: "Step 3", text: "Choose your investment tenure in years" },
            { step: "Step 4", text: "See total value, returns, pie chart, and year-wise growth" },
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
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 20 }}>Frequently Asked Questions</h2>
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