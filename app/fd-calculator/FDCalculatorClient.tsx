import { BreadcrumbSchema } from "../components/Breadcrumb";
import type { Metadata } from "next";
import Link from "next/link";
import FDCalculatorFAQ from "./FDCalculatorFAQ";
import AdSenseUnit from "../components/AdSenseUnit";
import ZerodhaCTA from "../components/ZerodhaCTA";
import RelatedTools from "../components/RelatedTools";

export const metadata: Metadata = {
  title: "Free FD Calculator India 2026 — Fixed Deposit Maturity Calculator",
  description:
    "Use our free FD calculator to estimate fixed deposit maturity value, interest earned, and effective yield. Compare monthly, quarterly, and annual compounding for Indian bank deposits.",
  keywords: [
    "fd calculator",
    "fixed deposit calculator",
    "fd maturity calculator",
    "fixed deposit interest calculator",
    "fd return calculator",
  ],
  alternates: { canonical: "https://www.moneytool.in/calculators/fd-calculator" },
  openGraph: {
    title: "Free FD Calculator India 2026 — MoneyTool",
    description: "Estimate FD maturity value and interest with compounding frequency options.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FD Calculator — Fixed Deposit Maturity Calculator",
      },
    ],
  },
};

const fdTypes = [
  { label: "Regular FD", icon: "🏦", rate: "6.5–7.5% p.a." },
  { label: "Senior Citizen FD", icon: "👴", rate: "7.0–8.0% p.a." },
  { label: "Tax-Saving FD", icon: "💰", rate: "6.0–7.0% p.a." },
];

const faqs = [
  {
    q: "How is FD interest calculated?",
    a: "FD interest uses compound interest: A = P(1 + r/n)^(nt), where P is principal, r is annual rate, n is compounding frequency per year, and t is tenure in years. Most Indian banks compound quarterly.",
  },
  {
    q: "What is the difference between simple and compound interest FD?",
    a: "Simple interest FDs pay interest at maturity without reinvesting. Compound interest FDs reinvest interest periodically (monthly/quarterly), earning more over time. Most Indian bank FDs use compound interest.",
  },
  {
    q: "Is FD interest taxable?",
    a: "Yes. FD interest is added to your income and taxed as per your slab. Banks deduct TDS at 10% if annual interest exceeds ₹40,000 (₹50,000 for senior citizens). Submit Form 15G/15H to avoid TDS if your income is below the taxable limit.",
  },
  {
    q: "What is the maximum DICGC insurance on FD?",
    a: "DICGC insures bank deposits up to ₹5 lakh per bank per depositor. If a bank fails, your principal and interest combined up to ₹5 lakh is protected.",
  },
  {
    q: "Can I break an FD before maturity?",
    a: "Yes, most banks allow premature withdrawal with a penalty of 0.5–1% on the interest rate. Some banks offer FDs without premature withdrawal at higher rates.",
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


const _webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "FD Calculator India",
  url: "https://www.moneytool.in/fd-calculator",
  description: "Free fixed deposit calculator for India. Calculate FD maturity amount, interest earned, and effective yield for cumulative and non-cumulative deposits.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  isAccessibleForFree: true,
  inLanguage: "en-IN",
  featureList: ["Quarterly compounding", "Cumulative and non-cumulative", "TDS deduction calculation", "Effective yield comparison"],
  provider: { "@type": "Organization", name: "MoneyTool", url: "https://www.moneytool.in" },
};

export default function FDCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_webAppSchema) }} />
      <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <BreadcrumbSchema items={[{name:"Home",url:"https://www.moneytool.in"},{name:"FD Calculator",url:"https://www.moneytool.in/fd-calculator"}]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", gap: 8, fontSize: 13, color: "#71717a", marginBottom: 24, alignItems: "center" }}>
          <Link href="/" style={{ color: "#71717a", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <span style={{ color: "#a1a1aa" }}>FD Calculator</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "#f4f4f5", marginBottom: 10, lineHeight: 1.2 }}>
            FD Calculator India 2026
          </h1>
          <p style={{ color: "#a1a1aa", fontSize: 16, lineHeight: 1.6, maxWidth: 680 }}>
            Calculate your Fixed Deposit maturity amount and interest earned. Supports monthly, quarterly, and annual compounding — matching real bank calculations.
          </p>
        </div>

        {/* Pills */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          <div style={{
            padding: "8px 16px", borderRadius: 999, fontSize: 13,
            background: "rgba(16,185,129,0.1)", border: "1px solid #10b981",
            color: "#10b981", fontWeight: 600,
          }}>🏦 All FDs</div>
          {fdTypes.map((ft) => (
            <div key={ft.label} style={{
              padding: "8px 16px", borderRadius: 999, fontSize: 13,
              background: "#111113", border: "1px solid #27272a",
              color: "#a1a1aa", display: "flex", alignItems: "center", gap: 6,
            }}>
              {ft.icon} {ft.label}
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, alignItems: "start", marginBottom: 48 }}>

          <FDCalculatorFAQ faqs={faqs} />

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 14 }}>FD Types</h3>
              {fdTypes.map((ft) => (
                <div key={ft.label} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "11px 14px", borderRadius: 10, marginBottom: 8,
                  background: "#18181b", border: "1px solid #27272a",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 18 }}>{ft.icon}</span>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 600, color: "#f4f4f5", marginBottom: 1 }}>{ft.label}</p>
                      <p style={{ fontSize: 11, color: "#71717a" }}>{ft.rate}</p>
                    </div>
                  </div>
                  <span style={{ fontSize: 14, color: "#10b981" }}>→</span>
                </div>
              ))}
            </div>

            <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 12 }}>FD Formula</h3>
              <div style={{ background: "#18181b", borderRadius: 10, padding: 14, textAlign: "center", marginBottom: 12 }}>
                <p style={{ fontSize: 13, color: "#a1a1aa", fontFamily: "monospace", lineHeight: 1.8 }}>
                  A = P(1 + r/n)^(nt)
                </p>
              </div>
              <div style={{ fontSize: 12, color: "#71717a", lineHeight: 2 }}>
                <p><span style={{ color: "#10b981" }}>A</span> = Maturity Amount</p>
                <p><span style={{ color: "#10b981" }}>P</span> = Principal</p>
                <p><span style={{ color: "#10b981" }}>r</span> = Annual interest rate</p>
                <p><span style={{ color: "#10b981" }}>n</span> = Compounding freq/year</p>
                <p><span style={{ color: "#10b981" }}>t</span> = Time in years</p>
              </div>
            </div>

            <div style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#10b981", marginBottom: 12 }}>💡 FD Tips</h3>
              {[
                "Compare rates across banks",
                "Senior citizens get +0.5% extra",
                "Ladder FDs for liquidity",
                "Submit Form 15G to avoid TDS",
                "Quarterly compounding > annual",
              ].map((tip, i) => (
                <p key={i} style={{ display: "flex", gap: 8, fontSize: 12, color: "#a1a1aa", lineHeight: 1.7, marginBottom: 6 }}>
                  <span style={{ color: "#10b981", flexShrink: 0 }}>✓</span>{tip}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* What is FD */}
        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 14 }}>What is a Fixed Deposit?</h2>
          <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.9, marginBottom: 10 }}>
            A Fixed Deposit (FD) is a financial instrument offered by banks and NBFCs where you deposit a lump sum for a fixed tenure at a predetermined interest rate. Unlike savings accounts, the rate is locked in and guaranteed regardless of market conditions.
          </p>
          <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.9 }}>
            Indian banks compound FD interest quarterly by default, meaning your interest is reinvested every 3 months. This is why the effective annual yield (EAR) is slightly higher than the nominal rate quoted.
          </p>
        </div>

        {/* How to Use */}
        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 20 }}>How to Use This FD Calculator</h2>
          {[
            { step: "Step 1", text: "Enter your principal deposit amount" },
            { step: "Step 2", text: "Set your bank's interest rate (check their website)" },
            { step: "Step 3", text: "Choose tenure in years (1–10)" },
            { step: "Step 4", text: "Select compounding frequency (quarterly for most Indian banks)" },
            { step: "Step 5", text: "See maturity value, effective yield, and year-wise growth" },
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

        {/* FD Benefits */}
        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 16 }}>Why Use an FD Calculator?</h2>
          <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.9, marginBottom: 12 }}>
            A Fixed Deposit calculator helps you plan your savings with confidence. Enter your principal, rate, tenure, and compounding frequency to see exactly how much your money will grow.
          </p>
          <ul style={{ paddingLeft: 18, color: "#a1a1aa", fontSize: 14, lineHeight: 1.9, margin: 0 }}>
            <li style={{ marginBottom: 8 }}>Compare FD returns for different compounding frequencies.</li>
            <li style={{ marginBottom: 8 }}>Estimate maturity value before you deposit.</li>
            <li style={{ marginBottom: 8 }}>See the effective annual yield and year-wise growth.</li>
            <li>Check the impact of interest rate changes on your final corpus.</li>
          </ul>
        </div>

        
        <AdSenseUnit />
        
        <ZerodhaCTA context="Ready to invest beyond Fixed Deposits? Open a free demat account and start investing in mutual funds for higher long-term returns." />
        {/* FAQ */}
        <FDCalculatorFAQ faqs={faqs} />
        <RelatedTools tools={[
          { title: "RD Calculator", icon: "🔁", description: "Calculate Recurring Deposit returns", href: "/rd-calculator" },
          { title: "PPF Calculator", icon: "🏦", description: "Calculate Public Provident Fund returns", href: "/ppf-calculator" },
          { title: "SIP Calculator", icon: "📈", description: "Calculate mutual fund SIP returns", href: "/sip-calculator" },
          { title: "SWP Calculator", icon: "📤", description: "Plan systematic withdrawal from investments", href: "/swp-calculator" },
        ]} />


      </div>
    </div>
    </>
  );
}