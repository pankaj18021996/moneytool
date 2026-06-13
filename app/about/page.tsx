import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About MoneyTool — Free Financial Calculators Built for India",
  description:
    "MoneyTool provides 15+ free financial calculators for India. Learn about our mission, how our tools are built, the formulas we use, and why we keep everything 100% free.",
  alternates: { canonical: "https://www.moneytool.in/about" },
  openGraph: {
    title: "About MoneyTool — Trusted Financial Tools for India",
    description: "MoneyTool provides free, accurate financial calculators built for Indian users.",
    type: "website",
    url: "https://www.moneytool.in/about",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MoneyTool",
  url: "https://www.moneytool.in",
  logo: { "@type": "ImageObject", url: "https://www.moneytool.in/og-image.png" },
  description: "Free financial calculators and tools for India. EMI, SIP, Income Tax, GST, Invoice Builder and more.",
  email: "contact@moneytool.in",
  foundingDate: "2025",
  areaServed: "IN",
  knowsAbout: [
    "Financial Planning", "EMI Calculation", "SIP Returns", "Income Tax India",
    "GST Calculation", "Salary Calculation", "PPF Returns", "Fixed Deposit Returns",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.moneytool.in" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://www.moneytool.in/about" },
  ],
};

const tools = [
  { cat: "📈 Investment Calculators", items: ["SIP Calculator", "PPF Calculator", "FD Calculator", "RD Calculator", "SWP Calculator", "Retirement Planner"] },
  { cat: "💳 Loan Calculators", items: ["EMI Calculator", "Home Loan Calculator", "Car Loan Calculator", "Personal Loan Calculator"] },
  { cat: "🏛️ Tax & Salary Tools", items: ["Income Tax Calculator (FY 2025-26)", "Salary Calculator", "GST Calculator", "HRA Calculator", "TDS Calculator"] },
  { cat: "📄 Business Tools", items: ["GST Invoice Builder (PDF export)", "Payslip Generator"] },
];

export default function About() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main style={{ background: "#0a0a0a", minHeight: "100vh", color: "#f4f4f5", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "60px 24px" }}>

          {/* Breadcrumb */}
          <nav style={{ display: "flex", gap: 8, fontSize: 13, color: "#71717a", marginBottom: 32 }}>
            <Link href="/" style={{ color: "#10b981", textDecoration: "none" }}>Home</Link>
            <span>›</span>
            <span style={{ color: "#a1a1aa" }}>About</span>
          </nav>

          <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12, color: "#f4f4f5" }}>About MoneyTool</h1>
          <p style={{ fontSize: 16, color: "#a1a1aa", lineHeight: 1.6, marginBottom: 48 }}>
            Free financial tools built by Indians, for Indians — no login, no paywalls, no nonsense.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>

            {/* Mission */}
            <section>
              <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#10b981" }}>Our Mission</h2>
              <p style={{ fontSize: 15, color: "#a1a1aa", lineHeight: 1.8, marginBottom: 12 }}>
                MoneyTool was built with one goal: make accurate financial calculators freely available to every Indian — whether you are a salaried professional in Delhi planning your first home loan, a freelancer in Bengaluru filing GST, or a small business owner in Jaipur creating invoices.
              </p>
              <p style={{ fontSize: 15, color: "#a1a1aa", lineHeight: 1.8 }}>
                Financial planning should not require a CA appointment for every basic question. With MoneyTool, you can calculate your EMI, understand your tax liability, plan your SIP investments, and generate professional invoices — all in seconds, completely free.
              </p>
            </section>

            {/* How Tools are Built */}
            <section style={{ borderTop: "1px solid #27272a", paddingTop: 32 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#10b981" }}>How Our Calculators Are Built</h2>
              <p style={{ fontSize: 15, color: "#a1a1aa", lineHeight: 1.8, marginBottom: 16 }}>
                Every calculator on MoneyTool uses the same formulas that Indian banks, SEBI-registered financial institutions, and the Income Tax Department use. Here is how we ensure accuracy:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { title: "EMI Calculator — Standard Reducing Balance Formula", desc: "EMI = P × r × (1+r)ⁿ ÷ [(1+r)ⁿ − 1]. This is the same formula mandated by RBI for all scheduled bank loans. P = principal, r = monthly rate (annual ÷ 12 ÷ 100), n = tenure in months." },
                  { title: "SIP Calculator — Future Value of Annuity", desc: "FV = PMT × [((1+r)ⁿ − 1) ÷ r] × (1+r). This formula calculates compound growth assuming end-of-month investments. Used by AMFI-registered mutual fund platforms." },
                  { title: "Income Tax Calculator — Official IT Slabs FY 2025-26", desc: "Tax slabs, cess (4%), surcharge thresholds, standard deduction (₹75,000 new regime), and Section 80C/80D deductions are updated each budget year and verified against the Income Tax Act." },
                  { title: "GST Calculator — CGST + SGST / IGST Split", desc: "GST = (Original Amount × GST Rate) ÷ 100. Intra-state: CGST + SGST each at half the rate. Inter-state: IGST at full rate. Based on GSTN official guidelines." },
                  { title: "PPF Calculator — Compounded Annually", desc: "PPF interest is compounded annually at the government-notified rate (currently 7.1%). Interest is calculated on the minimum balance between 5th and end of each month." },
                ].map((item, i) => (
                  <div key={i} style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 12, padding: 20 }}>
                    <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: 13, color: "#71717a", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 13, color: "#52525b", marginTop: 16, lineHeight: 1.7 }}>
                <strong style={{ color: "#71717a" }}>Data sources:</strong> RBI circulars, Income Tax Act 1961, GSTN official portal, AMFI guidelines, and Ministry of Finance notifications. All calculators are reviewed and updated after each Union Budget and RBI policy update.
              </p>
            </section>

            {/* What We Offer */}
            <section style={{ borderTop: "1px solid #27272a", paddingTop: 32 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20, color: "#10b981" }}>All 16 Free Tools</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {tools.map((t) => (
                  <div key={t.cat} style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 12, padding: 20 }}>
                    <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 12 }}>{t.cat}</h3>
                    {t.items.map((item) => (
                      <p key={item} style={{ fontSize: 13, color: "#a1a1aa", lineHeight: 1.9, display: "flex", gap: 8 }}>
                        <span style={{ color: "#10b981" }}>✓</span> {item}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </section>

            {/* Who We Help */}
            <section style={{ borderTop: "1px solid #27272a", paddingTop: 32 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20, color: "#10b981" }}>Who Uses MoneyTool</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { icon: "👨‍💼", title: "Salaried Professionals", desc: "Calculate in-hand salary from CTC, HRA exemption, income tax under old and new regime, and plan SIP investments for long-term wealth." },
                  { icon: "👩‍💼", title: "Freelancers & Consultants", desc: "Generate professional GST invoices with CGST/SGST breakdowns, calculate TDS deductible on professional fees, and track quarterly advance tax." },
                  { icon: "🏡", title: "Home Buyers", desc: "Compare EMI across banks, calculate total interest cost, understand home loan tax benefits under Section 80C and Section 24(b)." },
                  { icon: "📊", title: "Investors", desc: "Plan SIP, PPF, and FD investments. Calculate maturity values. Compare fixed income vs equity returns for your financial goals." },
                  { icon: "🏢", title: "Small Business Owners", desc: "Create GST-compliant invoices, generate payslips for employees, calculate GST payable on goods and services." },
                  { icon: "🎓", title: "Students & First Jobbers", desc: "Understand your first salary slip, plan SIP investments with even ₹500/month, and calculate education loan EMI." },
                ].map((u) => (
                  <div key={u.title} style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 12, padding: 20 }}>
                    <p style={{ fontSize: 20, marginBottom: 8 }}>{u.icon}</p>
                    <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 6 }}>{u.title}</h3>
                    <p style={{ fontSize: 13, color: "#71717a", lineHeight: 1.7 }}>{u.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Free */}
            <section style={{ borderTop: "1px solid #27272a", paddingTop: 32 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#10b981" }}>Why Is Everything Free?</h2>
              <p style={{ fontSize: 15, color: "#a1a1aa", lineHeight: 1.8, marginBottom: 12 }}>
                MoneyTool is funded by non-intrusive display advertising. We believe financial calculators — like a ruler or a calculator — should be free utilities, not products. We will never put any calculator behind a paywall, subscription, or login wall.
              </p>
              <p style={{ fontSize: 15, color: "#a1a1aa", lineHeight: 1.8 }}>
                All calculations run entirely in your browser. We do not store, log, or transmit any financial data you enter into our calculators. Your numbers stay on your device.
              </p>
            </section>

            {/* Disclaimer */}
            <section style={{ borderTop: "1px solid #27272a", paddingTop: 32 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#10b981" }}>Important Disclaimer</h2>
              <div style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 12, padding: 20 }}>
                <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.8 }}>
                  MoneyTool calculators provide estimates based on standard formulas and publicly available tax rules. Results are for informational and planning purposes only. Actual loan EMIs, tax liability, and investment returns may vary based on bank policies, individual tax situations, fund performance, and regulatory changes.
                </p>
                <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.8, marginTop: 12 }}>
                  For tax filing, loan applications, and investment decisions involving significant amounts, please consult a qualified Chartered Accountant, SEBI-registered financial advisor, or your bank directly.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section style={{ borderTop: "1px solid #27272a", paddingTop: 32 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#10b981" }}>Get in Touch</h2>
              <p style={{ fontSize: 15, color: "#a1a1aa", lineHeight: 1.8, marginBottom: 20 }}>
                Found an error in a calculation? Have a suggestion for a new tool? We read every email and take accuracy feedback seriously.
              </p>
              <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 12, padding: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
                <div>
                  <p style={{ fontSize: 13, color: "#71717a", marginBottom: 4 }}>Email us at:</p>
                  <p style={{ fontSize: 16, color: "#10b981", fontWeight: 600 }}>contact@moneytool.in</p>
                </div>
                <a href="mailto:contact@moneytool.in" style={{
                  background: "#10b981", color: "#fff", padding: "10px 24px", borderRadius: 8,
                  textDecoration: "none", fontSize: 14, fontWeight: 600,
                }}>
                  Send Message
                </a>
              </div>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}
