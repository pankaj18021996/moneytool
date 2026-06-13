"use client";

import Link from "next/link";

function ToolCard({ tool }: { tool: any }) {
  return (
    <div className={`tool-card${tool.coming ? " tool-card-coming" : ""}`} style={{
      background: "#111113", border: "1px solid #27272a",
      borderRadius: 16, padding: 20, position: "relative",
      transition: "border-color 0.2s, transform 0.2s",
    }}>
      {tool.popular && !tool.coming && (
        <span style={{
          position: "absolute", top: 16, right: 16, fontSize: 11,
          background: "rgba(16,185,129,0.1)", color: "#10b981",
          border: "1px solid rgba(16,185,129,0.2)",
          padding: "2px 10px", borderRadius: 999, fontWeight: 500,
        }}>Popular</span>
      )}
      <div style={{ fontSize: 28, marginBottom: 12 }}>{tool.icon}</div>
      <h3 style={{ fontSize: 15, fontWeight: 600, color: "#f4f4f5", marginBottom: 6 }}>
        {tool.title}
      </h3>
      <p style={{ fontSize: 13, color: "#a1a1aa", lineHeight: 1.5, marginBottom: 16 }}>
        {tool.desc}
      </p>
      {tool.coming ? (
        <span style={{ fontSize: 13, color: "#52525b" }}>Coming soon...</span>
      ) : (
        <Link href={tool.link} style={{ fontSize: 13, fontWeight: 600, color: "#10b981", textDecoration: "none" }}>
          Open Tool →
        </Link>
      )}
    </div>
  );
}

const INVESTMENT_TOOLS = [
  { id: "sip", title: "SIP Calculator", desc: "Calculate returns on Systematic Investment Plans", icon: "📈", link: "/sip-calculator", popular: true, coming: false },
  { id: "ppf", title: "PPF Calculator", desc: "Calculate Public Provident Fund returns and maturity", icon: "🐖", link: "/ppf-calculator", popular: true, coming: false },
  { id: "fd", title: "FD Calculator", desc: "Calculate Fixed Deposit returns and maturity amount", icon: "🏦", link: "/fd-calculator", popular: false, coming: false },
  { id: "rd", title: "RD Calculator", desc: "Calculate Recurring Deposit returns and interest", icon: "📅", link: "/rd-calculator", popular: false, coming: false },
  { id: "swp", title: "SWP Calculator", desc: "Calculate Systematic Withdrawal Plan returns", icon: "💸", link: "/swp-calculator", popular: false, coming: false },
  { id: "retirement", title: "Retirement Planner", desc: "Plan your retirement corpus and monthly savings", icon: "🌅", link: "/retirement-calculator", popular: true, coming: false },
];

const LOAN_TOOLS = [
  { id: "emi", title: "EMI Calculator", desc: "Calculate monthly EMI for home, car & personal loans", icon: "💳", link: "/emi-calculator", popular: true, coming: false },
  { id: "home-loan", title: "Home Loan Calculator", desc: "Calculate home loan EMI, eligibility & total interest", icon: "🏠", link: "/home-loan-calculator", popular: true, coming: false },
  { id: "car-loan", title: "Car Loan Calculator", desc: "Calculate car loan EMI and total cost of ownership", icon: "🚗", link: "/car-loan-calculator", popular: false, coming: false },
];

const TAX_TOOLS = [
  { id: "income-tax", title: "Income Tax Calculator", desc: "Calculate your income tax liability for FY 2025-26", icon: "🏛️", link: "/income-tax-calculator", popular: true, coming: false },
  { id: "salary", title: "Salary Calculator", desc: "Calculate in-hand salary from CTC with all deductions", icon: "💰", link: "/salary-calculator", popular: false, coming: false },
  { id: "gst", title: "GST Calculator", desc: "Calculate GST amounts and tax breakdowns instantly", icon: "🧾", link: "/gst-calculator", popular: false, coming: false },
  { id: "hra", title: "HRA Calculator", desc: "Calculate House Rent Allowance exemption & savings", icon: "🏘️", link: "/hra-calculator", popular: false, coming: false },
  { id: "tds", title: "TDS Calculator", desc: "Calculate TDS on salary, rent & professional fees", icon: "📑", link: "/tds-calculator", popular: false, coming: false },
];

const BUSINESS_TOOLS = [
  { id: "invoice", title: "Invoice Builder", desc: "Create professional GST invoices and download as PDF", icon: "📄", link: "/invoice-builder", popular: true, coming: false },
  { id: "payslip", title: "Payslip Generator", desc: "Generate professional salary slips with all deductions", icon: "🧑‍💼", link: "/payslip-generator", popular: false, coming: false },
];

const FEATURES = [
  { icon: "⚡", title: "100% Free Tools", desc: "All calculators completely free. No hidden charges, no premium plans ever." },
  { icon: "🔒", title: "No Login Required", desc: "Start calculating immediately. No registration needed. Your privacy matters." },
  { icon: "🎯", title: "Accurate & Fast", desc: "Instant precise calculations using industry-standard formulas." },
  { icon: "📱", title: "Mobile Friendly", desc: "Works perfectly on mobile, tablet and desktop." },
];

const REVIEWS = [
  { text: "The EMI calculator saved me hours of research. I could instantly compare different loan options and decide what works for my budget.", author: "Rajesh Kumar", role: "Home Buyer" },
  { text: "The SIP calculator is so accurate and easy to use. Helped me plan my mutual fund investments with clear visibility on returns.", author: "Priya Singh", role: "Investor" },
  { text: "The GST and Invoice tools are lifesavers for my small business. Quick, reliable, and absolutely free. No hidden charges.", author: "Amit Patel", role: "Business Owner" },
  { text: "I recommend MoneyTool to all my clients for quick income tax calculations. The tools are accurate and updated with latest tax rules.", author: "Sneha Desai", role: "Tax Consultant" },
];

export default function HomeClient() {
  return (
    <div style={{
      background: "#0a0a0a", color: "#f4f4f5",
      minHeight: "100vh",
      fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
    }}>
      <style>{`
        .tool-card:not(.tool-card-coming):hover { border-color: #10b981 !important; transform: translateY(-2px); }
        .hero-btn-primary:hover { background: #059669 !important; }
        .hero-btn-secondary:hover { border-color: #10b981 !important; }
      `}</style>

      {/* HERO */}
      <section style={{ borderBottom: "1px solid #27272a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)",
            color: "#10b981", fontSize: 13, padding: "6px 16px",
            borderRadius: 999, marginBottom: 24, fontWeight: 500,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", display: "inline-block" }}></span>
            100% Free • No Login Required
          </div>
          <h1 style={{ fontSize: 48, fontWeight: 800, color: "#f4f4f5", marginBottom: 16, lineHeight: 1.2 }}>
            All Your Financial<br />
            <span style={{ color: "#10b981" }}>Tools in One Place</span>
          </h1>
          <p style={{ color: "#a1a1aa", fontSize: 18, maxWidth: 600, margin: "0 auto 32px", lineHeight: 1.6 }}>
            EMI, SIP, FD, PPF, Tax, GST & Invoice tools — fast and free. Make smarter financial decisions with ease.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/emi-calculator" className="hero-btn-primary" style={{
              background: "#10b981", color: "#fff", padding: "12px 28px", borderRadius: 10,
              fontSize: 15, fontWeight: 600, textDecoration: "none", display: "inline-block", transition: "background 0.2s",
            }}>
              Start Calculating →
            </Link>
            <Link href="/about" className="hero-btn-secondary" style={{
              background: "transparent", color: "#f4f4f5", padding: "12px 28px", borderRadius: 10,
              fontSize: 15, fontWeight: 600, textDecoration: "none", border: "1px solid #27272a",
              display: "inline-block", transition: "border-color 0.2s",
            }}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ borderBottom: "1px solid #27272a", background: "#111113" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, textAlign: "center" }}>
          {[{ num: "15+", label: "Tools Available" }, { num: "100%", label: "Free Forever" }, { num: "0", label: "Login Required" }].map((s) => (
            <div key={s.label}>
              <p style={{ fontSize: 36, fontWeight: 800, color: "#f4f4f5", marginBottom: 4 }}>{s.num}</p>
              <p style={{ fontSize: 14, color: "#a1a1aa" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ALL TOOLS */}
      <section style={{ borderBottom: "1px solid #27272a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
          {[
            { heading: "Investment Calculators", icon: "📈", sub: "Plan your investments with SIP, PPF, FD, RD & more", tools: INVESTMENT_TOOLS },
            { heading: "Loan Calculators", icon: "💳", sub: "Calculate EMI for home, car & personal loans", tools: LOAN_TOOLS },
            { heading: "Tax & Salary Calculators", icon: "🏛️", sub: "Calculate income tax, salary, GST, HRA & TDS", tools: TAX_TOOLS },
            { heading: "Business Tools", icon: "📄", sub: "Create invoices and payslips with PDF export", tools: BUSINESS_TOOLS },
          ].map((section) => (
            <div key={section.heading} style={{ marginBottom: 60 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span style={{ fontSize: 28 }}>{section.icon}</span>
                <div>
                  <h2 style={{ fontSize: 28, fontWeight: 700, color: "#f4f4f5", marginBottom: 4 }}>{section.heading}</h2>
                  <p style={{ color: "#a1a1aa", fontSize: 14 }}>{section.sub}</p>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
                {section.tools.map((tool) => <ToolCard key={tool.id} tool={tool} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ borderBottom: "1px solid #27272a", background: "#111113" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 13, color: "#10b981", fontWeight: 600, marginBottom: 8 }}>⭐ User Reviews</p>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#f4f4f5" }}>What Users Say</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
            {REVIEWS.map((r) => (
              <div key={r.author} style={{ background: "#18181b", border: "1px solid #27272a", borderRadius: 16, padding: 24 }}>
                <p style={{ fontSize: 13, color: "#a1a1aa", lineHeight: 1.7, marginBottom: 16 }}>"{r.text}"</p>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5" }}>{r.author}</p>
                <p style={{ fontSize: 12, color: "#71717a" }}>{r.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ borderBottom: "1px solid #27272a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: "#f4f4f5", marginBottom: 8 }}>Why Choose MoneyTool?</h2>
          <p style={{ color: "#a1a1aa", fontSize: 15, marginBottom: 32 }}>Committed to making financial planning accessible, simple and free for everyone</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
            {FEATURES.map((f) => (
              <div key={f.title} style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24 }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "#f4f4f5", marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "#a1a1aa", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section style={{ borderBottom: "1px solid #27272a", background: "#111113" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: "#f4f4f5", marginBottom: 24 }}>
            Comprehensive Financial Tools for Every Indian
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.8 }}>
              MoneyTool provides a comprehensive suite of financial calculators and tools designed to help individuals and businesses make informed financial decisions. Whether you are planning a loan, calculating taxes, or creating professional invoices, our platform offers accurate, fast and completely free tools.
            </p>
            <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.8 }}>
              Calculate your income tax liability accurately with our income tax calculator. Understand your take-home salary with our salary calculator that breaks down all deductions. Create professional invoices and export them as PDFs instantly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
