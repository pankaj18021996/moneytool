"use client";
import Link from "next/link";
import { Metadata } from "next";

function BusinessToolCard({ tool }: { tool: any }) {
  return (
    <Link
      href={tool.href}
      className="biz-tool-card"
      style={{
        display: "block",
        background: "#111113",
        border: "1px solid #27272a",
        borderRadius: 12,
        padding: 32,
        textDecoration: "none",
        transition: "all 0.2s",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 48, marginBottom: 16 }}>{tool.icon}</div>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: "#f4f4f5", marginBottom: 12 }}>
        {tool.name}
      </h3>
      <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.6, marginBottom: 20 }}>
        {tool.desc}
      </p>
      <span style={{ fontSize: 14, fontWeight: 600, color: "#10b981" }}>
        Open Tool →
      </span>
    </Link>
  );
}

// ⚠️ metadata cannot be exported from a "use client" file.
// Move it to a separate layout.tsx or remove it.
// export const metadata: Metadata = { ... }  ← DELETE THIS

const businessTools = [
  {
    name: "GST Calculator",
    href: "/gst-calculator",
    icon: "🧮",
    desc: "Quickly calculate GST on products and services. Supports all GST slabs (5%, 12%, 18%, 28%).",
  },
  {
    name: "Salary Calculator",
    href: "/salary-calculator",
    icon: "💰",
    desc: "Calculate in-hand salary, deductions, taxes and net amount instantly.",
  },
];

export default function BusinessToolsPage() {
  return (
    <main style={{ background: "#0a0a0a", minHeight: "100vh", color: "#f4f4f5" }}>
      <style>{`
        .biz-tool-card:hover {
          border-color: #10b981 !important;
          transform: translateY(-8px);
        }
      `}</style>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ marginBottom: 60, textAlign: "center" }}>
          <h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 16, color: "#f4f4f5" }}>
            Business & Freelance Tools
          </h1>
          <p style={{ fontSize: 16, color: "#a1a1aa", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
            Free tools designed for small business owners, freelancers, and professionals to manage GST, invoices, payslips and more.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 24,
          marginBottom: 60,
        }}>
          {businessTools.map((tool) => (
            <BusinessToolCard key={tool.href} tool={tool} />
          ))}
        </div>

        <div style={{
          background: "#111113",
          border: "1px solid #27272a",
          borderRadius: 12,
          padding: 40,
          marginBottom: 60,
        }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: "#f4f4f5", marginBottom: 20 }}>
            Why Use MoneyTool for Your Business?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {[
              { icon: "🆓", title: "100% Free", desc: "No hidden charges or premium plans" },
              { icon: "⚡", title: "Instant Results", desc: "Get answers in real-time, no waiting" },
              { icon: "🔒", title: "Privacy Focused", desc: "All calculations happen in your browser" },
              { icon: "📱", title: "Mobile Friendly", desc: "Works on any device, anytime, anywhere" },
            ].map((item, i) => (
              <div key={i} style={{ padding: 16, background: "#18181b", borderRadius: 8 }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>{item.icon}</div>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 6 }}>{item.title}</h3>
                <p style={{ fontSize: 12, color: "#a1a1aa" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 12 }}>
            Explore All Our Tools
          </h3>
          <p style={{ fontSize: 14, color: "#a1a1aa", marginBottom: 24 }}>
            From loan calculators to investment planners, we have tools for every financial need.
          </p>
          <Link href="/calculators" style={{
            display: "inline-block",
            background: "#10b981",
            color: "#fff",
            padding: "12px 32px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 600,
            fontSize: 14,
          }}>
            Browse All Calculators →
          </Link>
        </div>
      </div>
    </main>
  );
}