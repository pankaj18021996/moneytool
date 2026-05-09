"use client";
import Link from "next/link";

const TOOLS = [
  { id: "emi", title: "EMI Calculator", desc: "Calculate monthly EMI for home, car & personal loans", icon: "💳", link: "/emi-calculator", popular: true, coming: false },
  { id: "sip", title: "SIP Calculator", desc: "Calculate returns on Systematic Investment Plans", icon: "📈", link: "/sip-calculator", popular: true, coming: false },
  { id: "gst", title: "GST Calculator", desc: "Calculate GST amounts and tax breakdowns instantly", icon: "🧾", link: "/gst-calculator", popular: false, coming: false },
  { id: "salary", title: "Salary Calculator", desc: "Calculate in-hand salary from CTC with all deductions", icon: "💰", link: "/salary-calculator", popular: false, coming: false },
  { id: "fd", title: "FD Calculator", desc: "Calculate Fixed Deposit returns and maturity amount", icon: "🏦", link: "/fd-calculator", popular: false, coming: false },
  { id: "ppf", title: "PPF Calculator", desc: "Calculate Public Provident Fund returns and maturity", icon: "🐖", link: "/ppf-calculator", popular: false, coming: true },
  { id: "income-tax", title: "Income Tax Calculator", desc: "Calculate your income tax liability for FY 2025-26", icon: "🏛️", link: "/income-tax-calculator", popular: true, coming: true },
  { id: "rd", title: "RD Calculator", desc: "Calculate Recurring Deposit returns and interest", icon: "📅", link: "/rd-calculator", popular: false, coming: true },
  { id: "hra", title: "HRA Calculator", desc: "Calculate House Rent Allowance exemption & savings", icon: "🏘️", link: "/hra-calculator", popular: false, coming: true },
  { id: "home-loan", title: "Home Loan Calculator", desc: "Calculate home loan EMI, eligibility & total interest", icon: "🏠", link: "/home-loan-calculator", popular: false, coming: true },
  { id: "car-loan", title: "Car Loan Calculator", desc: "Calculate car loan EMI and total cost of ownership", icon: "🚗", link: "/car-loan-calculator", popular: false, coming: true },
  { id: "swp", title: "SWP Calculator", desc: "Calculate Systematic Withdrawal Plan returns", icon: "💸", link: "/swp-calculator", popular: false, coming: true },
  { id: "tds", title: "TDS Calculator", desc: "Calculate TDS on salary, rent & professional fees", icon: "📑", link: "/tds-calculator", popular: false, coming: true },
  { id: "retirement", title: "Retirement Planner", desc: "Plan your retirement corpus and monthly savings", icon: "🌅", link: "/retirement-calculator", popular: false, coming: true },
  { id: "invoice", title: "Invoice Builder", desc: "Create professional GST invoices and download as PDF", icon: "📄", link: "/invoice-builder", popular: true, coming: true },
  { id: "payslip", title: "Payslip Generator", desc: "Generate professional salary slips with all deductions", icon: "🧑‍💼", link: "/payslip-generator", popular: false, coming: true },
];

const FEATURES = [
  { icon: "⚡", title: "100% Free Tools", desc: "All calculators completely free. No hidden charges, no premium plans ever." },
  { icon: "🔒", title: "No Login Required", desc: "Start calculating immediately. No registration needed. Your privacy matters." },
  { icon: "🎯", title: "Accurate & Fast", desc: "Instant precise calculations using industry-standard formulas." },
  { icon: "📱", title: "Mobile Friendly", desc: "Works perfectly on mobile, tablet and desktop." },
];

const popularTools = TOOLS.filter((t) => t.popular && !t.coming);

export default function Home() {
  return (
    <div style={{
      background: "#0a0a0a",
      color: "#f4f4f5",
      minHeight: "100vh",
      fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
    }}>

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
            EMI, SIP, FD, PPF, Tax, GST & Invoice tools —
            fast and free. Make smarter financial decisions with ease.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/emi-calculator" style={{
              background: "#10b981", color: "#fff",
              padding: "12px 28px", borderRadius: 10,
              fontSize: 15, fontWeight: 600, textDecoration: "none",
              display: "inline-block",
            }}
              onMouseEnter={e => (e.currentTarget.style.background = "#059669")}
              onMouseLeave={e => (e.currentTarget.style.background = "#10b981")}
            >
              Start Calculating →
            </Link>
            <Link href="/about" style={{
              background: "transparent", color: "#f4f4f5",
              padding: "12px 28px", borderRadius: 10,
              fontSize: 15, fontWeight: 600, textDecoration: "none",
              border: "1px solid #27272a", display: "inline-block",
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#10b981")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "#27272a")}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ borderBottom: "1px solid #27272a", background: "#111113" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto", padding: "32px 24px",
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24, textAlign: "center",
        }}>
          {[
            { num: "15+", label: "Tools Available" },
            { num: "100%", label: "Free Forever" },
            { num: "0", label: "Login Required" },
          ].map((s) => (
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
          <h2 style={{ fontSize: 28, fontWeight: 700, color: "#f4f4f5", marginBottom: 8 }}>
            All Financial Tools
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: 15, marginBottom: 32 }}>
            Access a comprehensive suite of financial calculators and business tools
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 16,
          }}>
            {TOOLS.map((tool) => (
              <div key={tool.id} style={{
                background: "#111113", border: "1px solid #27272a",
                borderRadius: 16, padding: 20, position: "relative",
                transition: "border-color 0.2s, transform 0.2s",
              }}
                onMouseEnter={e => {
                  if (!tool.coming) {
                    e.currentTarget.style.borderColor = "#10b981";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#27272a";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {tool.coming && (
                  <span style={{
                    position: "absolute", top: 16, right: 16, fontSize: 11,
                    background: "rgba(245,158,11,0.1)", color: "#f59e0b",
                    border: "1px solid rgba(245,158,11,0.2)",
                    padding: "2px 10px", borderRadius: 999, fontWeight: 500,
                  }}>Coming Soon</span>
                )}
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
                  <Link href={tool.link} style={{
                    fontSize: 13, fontWeight: 600,
                    color: "#10b981", textDecoration: "none",
                  }}>
                    Open Tool →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR */}
      <section style={{ borderBottom: "1px solid #27272a", background: "#111113" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)",
            color: "#f59e0b", fontSize: 12, padding: "4px 12px",
            borderRadius: 999, marginBottom: 20, fontWeight: 500,
          }}>
            🔥 Top Used Tools
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: "#f4f4f5", marginBottom: 8 }}>
            Our Most Popular Tools
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: 15, marginBottom: 32 }}>
            Trusted by thousands of Indians every day
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
            {popularTools.map((tool) => (
              <Link key={tool.id} href={tool.link} style={{
                background: "#18181b", border: "1px solid #27272a",
                borderRadius: 16, padding: 24, textDecoration: "none",
                display: "block", transition: "border-color 0.2s, transform 0.2s",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "#10b981";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#27272a";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 16 }}>{tool.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#f4f4f5", marginBottom: 8 }}>
                  {tool.title}
                </h3>
                <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.6, marginBottom: 20 }}>
                  {tool.desc}
                </p>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#10b981" }}>
                  Try {tool.title} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ borderBottom: "1px solid #27272a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: "#f4f4f5", marginBottom: 8 }}>
            Why Choose MoneyTool?
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: 15, marginBottom: 32 }}>
            Committed to making financial planning accessible, simple and free for everyone
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
            {FEATURES.map((f) => (
              <div key={f.title} style={{
                background: "#111113", border: "1px solid #27272a",
                borderRadius: 16, padding: 24,
              }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "#f4f4f5", marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "#a1a1aa", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO */}
      <section style={{ borderBottom: "1px solid #27272a", background: "#111113" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: "#f4f4f5", marginBottom: 24 }}>
            Comprehensive Financial Tools for Every Indian
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.8 }}>
              MoneyTool provides a comprehensive suite of financial calculators
              and tools designed to help individuals and businesses make informed
              financial decisions. Whether you are planning a loan, calculating
              taxes, or creating professional invoices, our platform offers
              accurate, fast and completely free tools.
            </p>
            <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.8 }}>
              Calculate your income tax liability accurately with our income tax
              calculator. Understand your take-home salary with our salary
              calculator that breaks down all deductions. Create professional
              invoices and export them as PDFs instantly.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}