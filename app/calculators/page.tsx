import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Calculators | MoneyTool",
  description: "Explore 15+ free financial calculators for EMI, SIP, FD, GST, taxes, salary and more. No signup required.",
  alternates: {
    canonical: "https://www.moneytool.in/calculators",
  },
};

const calculatorCategories = [
  {
    name: "Loan Calculators",
    icon: "💳",
    calculators: [
      { name: "EMI Calculator", href: "/emi-calculator", desc: "Calculate EMI for home, car & personal loans" },
      { name: "Home Loan Calculator", href: "/home-loan-calculator", desc: "Estimate home loan EMI & affordability" },
      { name: "Car Loan Calculator", href: "/car-loan-calculator", desc: "Calculate car loan EMI" },
    ],
  },
  {
    name: "Investment Calculators",
    icon: "📈",
    calculators: [
      { name: "SIP Calculator", href: "/sip-calculator", desc: "Calculate SIP returns on mutual funds" },
      { name: "FD Calculator", href: "/fd-calculator", desc: "Fixed Deposit interest calculator" },
      { name: "PPF Calculator", href: "/ppf-calculator", desc: "Public Provident Fund calculator" },
      { name: "RD Calculator", href: "/rd-calculator", desc: "Recurring Deposit calculator" },
      { name: "SWP Calculator", href: "/swp-calculator", desc: "Systematic Withdrawal Plan calculator" },
      { name: "Retirement Calculator", href: "/retirement-calculator", desc: "Plan your retirement corpus" },
    ],
  },
  {
    name: "Tax & Salary Tools",
    icon: "🏛️",
    calculators: [
      { name: "Income Tax Calculator", href: "/income-tax-calculator", desc: "Calculate income tax liability" },
      { name: "Salary Calculator", href: "/salary-calculator", desc: "Calculate in-hand salary & deductions" },
      { name: "HRA Calculator", href: "/hra-calculator", desc: "House Rent Allowance exemption calculator" },
      { name: "TDS Calculator", href: "/tds-calculator", desc: "Tax Deducted at Source calculator" },
      { name: "GST Calculator", href: "/gst-calculator", desc: "Add or remove GST from prices" },
    ],
  },
];

export default function CalculatorsPage() {
  return (
    <main style={{ background: "#0a0a0a", minHeight: "100vh", color: "#f4f4f5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: 60, textAlign: "center" }}>
          <h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 16, color: "#f4f4f5" }}>
            All Financial Calculators
          </h1>
          <p style={{ fontSize: 16, color: "#a1a1aa", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
            15+ free financial calculators to help you make smart money decisions. Calculate EMI, SIP returns, taxes, and more — instantly.
          </p>
        </div>

        {/* Categories */}
        {calculatorCategories.map((category) => (
          <div key={category.name} style={{ marginBottom: 60 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#f4f4f5", marginBottom: 8, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 32 }}>{category.icon}</span>
              {category.name}
            </h2>
            <p style={{ fontSize: 14, color: "#71717a", marginBottom: 24 }}>
              {category.calculators.length} tools available
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 20,
            }}>
              {category.calculators.map((calc) => (
                <Link
                  key={calc.href}
                  href={calc.href}
                  style={{
                    display: "block",
                    background: "#111113",
                    border: "1px solid #27272a",
                    borderRadius: 12,
                    padding: 24,
                    textDecoration: "none",
                    transition: "all 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#10b981";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#27272a";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: "#f4f4f5", marginBottom: 8 }}>
                    {calc.name}
                  </h3>
                  <p style={{ fontSize: 13, color: "#a1a1aa", lineHeight: 1.6 }}>
                    {calc.desc}
                  </p>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#10b981", marginTop: 12, display: "inline-block" }}>
                    Open →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div style={{
          background: "rgba(16,185,129,0.1)",
          border: "1px solid #10b981",
          borderRadius: 12,
          padding: 40,
          textAlign: "center",
          marginTop: 80,
        }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 12 }}>
            Start Planning Your Finances Today
          </h3>
          <p style={{ fontSize: 14, color: "#a1a1aa", marginBottom: 24 }}>
            All calculators are free, require no signup, and give instant results. No ads, no spam.
          </p>
          <Link href="/emi-calculator" style={{
            display: "inline-block",
            background: "#10b981",
            color: "#fff",
            padding: "12px 32px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 600,
            fontSize: 14,
          }}>
            Open EMI Calculator →
          </Link>
        </div>
      </div>
    </main>
  );
}
