import { BreadcrumbSchema } from "../components/Breadcrumb";
import type { Metadata } from "next";
import Link from "next/link";
import { metadata as seoMetadata } from "./metadata";
import GSTCalculatorClient from "./GSTCalculatorClient";

export const metadata: Metadata = seoMetadata as Metadata;

const gstSlabs = [
  { rate: "5%", desc: "Essential items" },
  { rate: "12%", desc: "Mid-range goods" },
  { rate: "18%", desc: "Most goods" },
  { rate: "28%", desc: "Luxury items" },
];

const faqs = [
  {
    q: "What is GST?",
    a: "GST (Goods and Services Tax) is a comprehensive indirect tax levied on the supply of goods and services in India. It replaced multiple taxes like VAT, excise, and service tax.",
  },
  {
    q: "What are the different GST rates in India?",
    a: "India has four main GST rates: 5% (essential items), 12% (mid-range items), 18% (most goods), and 28% (luxury items). Some items are GST-exempt.",
  },
  {
    q: "How is GST calculated?",
    a: "GST is calculated on the selling price. The formula is: GST Amount = (Price × GST Rate) / 100. To find price including GST: Price + GST Amount.",
  },
  {
    q: "Can businesses claim GST credit?",
    a: "Yes, registered businesses can claim Input Tax Credit (ITC) for GST paid on purchases. This reduces their net GST liability.",
  },
  {
    q: "Who needs to register for GST?",
    a: "Businesses with annual turnover exceeding ₹40 lakh must register for GST. Smaller businesses can voluntarily register.",
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

export default function GSTCalculatorPage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>

      {/* JSON-LD */}
      <BreadcrumbSchema items={[{name:"Home",url:"https://www.moneytool.in"},{name:"GST Calculator",url:"https://www.moneytool.in/gst-calculator"}]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", gap: 8, fontSize: 13, color: "#71717a", marginBottom: 24, alignItems: "center" }}>
          <Link href="/" style={{ color: "#71717a", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <span style={{ color: "#a1a1aa" }}>GST Calculator</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "#f4f4f5", marginBottom: 10, lineHeight: 1.2 }}>
            GST Calculator India 2026
          </h1>
          <p style={{ color: "#a1a1aa", fontSize: 16, lineHeight: 1.6, maxWidth: 680 }}>
            Calculate GST amount instantly for any product or service. Add or remove GST with our free calculator. Supports all GST slabs.
          </p>
        </div>

        {/* Calculator Section */}
        <div style={{ marginBottom: 48 }}>
          <GSTCalculatorClient />
        </div>

        {/* What is GST */}
        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 14 }}>
            What is GST?
          </h2>
          <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.9, marginBottom: 10 }}>
            GST (Goods and Services Tax) is India's comprehensive indirect tax system. It was introduced in July 2017 to replace multiple taxes like VAT, excise duty, and service tax.
          </p>
          <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.9 }}>
            GST is levied at the point of sale and applies to both goods and services. There are four main GST slabs: 5%, 12%, 18%, and 28%, depending on the product or service category.
          </p>
        </div>

        {/* GST Slabs Table */}
        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 20 }}>
            GST Slabs in India
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #27272a" }}>
                  {["GST Rate", "Examples"].map(h => (
                    <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontWeight: 600, color: "#71717a", fontSize: 12 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["5%", "Basic food items, books, pharmaceuticals, milk, bread"],
                  ["12%", "Processed food, cosmetics, furniture, leather goods"],
                  ["18%", "Most goods and services, electronics, clothing, fuel"],
                  ["28%", "Luxury items, automobiles, air conditioners, cameras"],
                  ["0%", "Exports, stamps, court fees"],
                ].map(([rate, items], i) => (
                  <tr key={rate} style={{ borderBottom: "1px solid #1f1f22", background: i % 2 ? "#18181b" : "transparent" }}>
                    <td style={{ padding: "10px 12px", color: "#10b981", fontWeight: 500 }}>{rate}</td>
                    <td style={{ padding: "10px 12px", color: "#a1a1aa" }}>{items}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* How to Use */}
        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 20 }}>
            How to Use This GST Calculator
          </h2>
          {[
            { step: "Step 1", text: "Enter the base amount (price before GST)" },
            { step: "Step 2", text: "Select the applicable GST rate" },
            { step: "Step 3", text: "Choose to add GST or calculate GST on a total" },
            { step: "Step 4", text: "Instantly see the GST amount and final total" },
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
