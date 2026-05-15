"use client";
import Link from "next/link";
import LoanCalculator from "../components/LoanCalculator";

const loanTypes = [
  { label: "Home Loan",      icon: "🏠", href: "/home-loan-calculator",      rate: "8.40% – 9.50%", tenure: "Up to 30 yr", max: "₹10 Cr" },
  { label: "Car Loan",       icon: "🚗", href: "/car-loan-calculator",       rate: "8.75% – 12%",   tenure: "Up to 7 yr",  max: "₹50 L"  },
  { label: "Personal Loan",  icon: "👤", href: "/personal-loan-calculator",  rate: "10.5% – 24%",   tenure: "Up to 6 yr",  max: "₹50 L"  },
  { label: "Education Loan", icon: "🎓", href: "/education-loan-calculator", rate: "7.5% – 14%",    tenure: "Up to 15 yr", max: "₹1 Cr"  },
  { label: "Business Loan",  icon: "🏢", href: "/business-loan-calculator",  rate: "10% – 22%",     tenure: "Up to 15 yr", max: "₹5 Cr"  },
];

const banks = [
  ["SBI",            "8.50%", "₹868"],
  ["HDFC Bank",      "8.75%", "₹885"],
  ["ICICI Bank",     "8.75%", "₹885"],
  ["Bank of Baroda", "8.40%", "₹861"],
  ["PNB",            "8.45%", "₹864"],
  ["Kotak Mahindra", "8.75%", "₹885"],
  ["Axis Bank",      "8.75%", "₹885"],
  ["LIC HFL",        "8.50%", "₹868"],
];

const faqs = [
  {
    q: "Is the EMI shown the exact amount my bank will charge?",
    a: "The EMI is based on the standard reducing balance formula used by all banks. Actual amount may differ slightly due to rounding, processing fees or different compounding methods.",
  },
  {
    q: "What happens if I miss an EMI payment?",
    a: "Missing an EMI results in a penalty fee (typically 1-2% of EMI), a negative CIBIL score impact, and additional interest on the overdue amount.",
  },
  {
    q: "Can my EMI change during the loan tenure?",
    a: "Yes, if you have a floating rate loan. Your EMI can change when the bank adjusts the rate based on RBI repo rate movements.",
  },
  {
    q: "Is it better to take a longer or shorter loan tenure?",
    a: "A shorter tenure means higher EMIs but significantly lower total interest. Use the calculator above to compare both scenarios.",
  },
  {
    q: "How much of my salary should go toward EMIs?",
    a: "Financial experts recommend total EMIs should not exceed 40-50% of your monthly take-home salary.",
  },
  {
    q: "Does prepaying a loan affect my credit score?",
    a: "Partial prepayments generally do not affect your score negatively. Timely full repayment is the best way to build a strong credit score.",
  },
];

const blogs = [
  { title: "Home Loan vs Renting: What Makes More Sense in 2026?",     date: "May 2026", read: "5 min", slug: "home-loan-vs-renting"    },
  { title: "How to Reduce Your Home Loan EMI: 7 Proven Strategies",     date: "Apr 2026", read: "4 min", slug: "reduce-home-loan-emi"   },
  { title: "What is CIBIL Score and How It Affects Loan Approval?",     date: "Apr 2026", read: "6 min", slug: "cibil-score-loan"       },
  { title: "Fixed vs Floating Interest Rate: Which Should You Choose?", date: "Mar 2026", read: "5 min", slug: "fixed-vs-floating-rate" },
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

export default function EMICalculatorPage() {
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
          <span style={{ color: "#a1a1aa" }}>EMI Calculator</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "#f4f4f5", marginBottom: 10, lineHeight: 1.2 }}>
            EMI Calculator India 2026
          </h1>
          <p style={{ color: "#a1a1aa", fontSize: 16, lineHeight: 1.6, maxWidth: 680 }}>
            Calculate your monthly loan installment instantly for home, car,
            personal, education & business loans. Free, accurate & no signup required.
          </p>
        </div>

        {/* Loan Type Pills */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          <div style={{
            padding: "8px 16px", borderRadius: 999, fontSize: 13,
            background: "rgba(16,185,129,0.1)", border: "1px solid #10b981",
            color: "#10b981", fontWeight: 600,
          }}>
            🧮 All Loans
          </div>
          {loanTypes.map((lt) => (
            <Link key={lt.label} href={lt.href} style={{
              padding: "8px 16px", borderRadius: 999, fontSize: 13,
              background: "#111113", border: "1px solid #27272a",
              color: "#a1a1aa", textDecoration: "none",
              display: "flex", alignItems: "center", gap: 6,
            }}>
              {lt.icon} {lt.label}
            </Link>
          ))}
        </div>

        {/* Two Column Layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 320px",
          gap: 24,
          alignItems: "start",
          marginBottom: 48,
        }}>

          {/* Left — Calculator */}
          <LoanCalculator
            defaultAmount={3000000}
            defaultRate={8.5}
            defaultTenure={240}
            minAmount={50000}
            maxAmount={100000000}
            minRate={6}
            maxRate={36}
            minTenure={12}
            maxTenure={360}
            amountStep={50000}
          />

          {/* Right — Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* Loan Type Links */}
            <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 14 }}>
                Calculate by Loan Type
              </h3>
              {loanTypes.map((lt) => (
                <Link key={lt.label} href={lt.href} style={{
                  display: "flex", alignItems: "center",
                  justifyContent: "space-between",
                  padding: "11px 14px", borderRadius: 10, marginBottom: 8,
                  background: "#18181b", border: "1px solid #27272a",
                  textDecoration: "none",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 18 }}>{lt.icon}</span>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 600, color: "#f4f4f5", marginBottom: 1 }}>{lt.label}</p>
                      <p style={{ fontSize: 11, color: "#71717a" }}>{lt.rate}</p>
                    </div>
                  </div>
                  <span style={{ fontSize: 14, color: "#10b981" }}>→</span>
                </Link>
              ))}
            </div>

            {/* Formula */}
            <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 12 }}>
                EMI Formula
              </h3>
              <div style={{ background: "#18181b", borderRadius: 10, padding: 14, textAlign: "center", marginBottom: 12 }}>
                <p style={{ fontSize: 13, color: "#a1a1aa", fontFamily: "monospace", lineHeight: 1.8 }}>
                  EMI = P × r × (1+r)ⁿ<br />÷ [(1+r)ⁿ − 1]
                </p>
              </div>
              <div style={{ fontSize: 12, color: "#71717a", lineHeight: 2 }}>
                <p><span style={{ color: "#10b981" }}>P</span> = Principal amount</p>
                <p><span style={{ color: "#10b981" }}>r</span> = Monthly interest rate</p>
                <p><span style={{ color: "#10b981" }}>n</span> = Tenure in months</p>
              </div>
            </div>

            {/* Tips */}
            <div style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#10b981", marginBottom: 12 }}>
                💡 Quick Tips
              </h3>
              {[
                "Prepay early to save maximum interest",
                "Choose shorter tenure when possible",
                "Compare rates from 3+ banks",
                "Keep EMI below 40% of income",
                "Check for zero prepayment charges",
              ].map((tip, i) => (
                <p key={i} style={{ display: "flex", gap: 8, fontSize: 12, color: "#a1a1aa", lineHeight: 1.7, marginBottom: 6 }}>
                  <span style={{ color: "#10b981", flexShrink: 0 }}>✓</span>
                  {tip}
                </p>
              ))}
            </div>

          </div>
        </div>

        {/* Loan Type Cards */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#f4f4f5", marginBottom: 8 }}>
            Calculate EMI by Loan Type
          </h2>
          <p style={{ color: "#71717a", fontSize: 14, marginBottom: 24 }}>
            Each loan type has different rates and eligibility. Choose your specific loan type for accurate results.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
            {loanTypes.map((lt) => (
              <Link key={lt.label} href={lt.href} style={{
                background: "#111113", border: "1px solid #27272a",
                borderRadius: 16, padding: 24, textDecoration: "none",
                display: "block",
              }}>
                <div style={{ fontSize: 30, marginBottom: 12 }}>{lt.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#f4f4f5", marginBottom: 10 }}>
                  {lt.label}
                </h3>
                <div style={{ fontSize: 13, color: "#71717a", lineHeight: 2 }}>
                  <p>Rate: <span style={{ color: "#a1a1aa" }}>{lt.rate}</span></p>
                  <p>Tenure: <span style={{ color: "#a1a1aa" }}>{lt.tenure}</span></p>
                  <p>Max: <span style={{ color: "#a1a1aa" }}>{lt.max}</span></p>
                </div>
                <p style={{ marginTop: 14, fontSize: 13, fontWeight: 600, color: "#10b981" }}>
                  Calculate {lt.label} EMI →
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* SEO Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 48 }}>

          {/* What is EMI */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 14 }}>
              What is EMI?
            </h2>
            <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.9, marginBottom: 10 }}>
              EMI stands for Equated Monthly Installment — a fixed amount you pay to your bank every month until the loan is fully repaid. Each EMI covers both principal and interest.
            </p>
            <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.9 }}>
              In early months, a larger share goes toward interest. As principal reduces, more goes toward principal. This shift is visible in the amortization schedule above.
            </p>
          </div>

          {/* Formula */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 14 }}>
              How is EMI Calculated?
            </h2>
            <div style={{ background: "#18181b", borderRadius: 12, padding: 20, marginBottom: 16, textAlign: "center" }}>
              <p style={{ fontSize: 15, color: "#a1a1aa", fontFamily: "monospace" }}>
                EMI = P × r × (1 + r)ⁿ ÷ [(1 + r)ⁿ − 1]
              </p>
            </div>
            <div style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.9, marginBottom: 16 }}>
              <p style={{ marginBottom: 6 }}><strong style={{ color: "#f4f4f5" }}>P</strong> = Principal loan amount</p>
              <p style={{ marginBottom: 6 }}><strong style={{ color: "#f4f4f5" }}>r</strong> = Monthly interest rate = Annual rate ÷ 12 ÷ 100</p>
              <p><strong style={{ color: "#f4f4f5" }}>n</strong> = Loan tenure in months</p>
            </div>
            <div style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 12, padding: 16 }}>
              <p style={{ fontSize: 12, color: "#10b981", fontWeight: 600, marginBottom: 6 }}>Example</p>
              <p style={{ fontSize: 13, color: "#a1a1aa", lineHeight: 1.7 }}>
                ₹30 lakh home loan at 8.5% for 20 years →{" "}
                <strong style={{ color: "#10b981" }}>EMI = ₹26,035/month</strong>. Total interest = ₹32.48 lakh.
              </p>
            </div>
          </div>

          {/* How to Use */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 14 }}>
              How to Use This EMI Calculator
            </h2>
            {[
              { step: "Step 1", text: "Enter your loan amount using the slider or type it directly." },
              { step: "Step 2", text: "Set the interest rate offered by your bank." },
              { step: "Step 3", text: "Choose your preferred loan tenure in months." },
              { step: "Step 4", text: "Instantly see your monthly EMI, total interest and full breakdown." },
              { step: "Step 5", text: "View the amortization schedule for month-by-month details." },
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

          {/* Tips */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 20 }}>
              5 Smart Tips to Reduce Your Loan Cost
            </h2>
            {[
              { title: "Prepay early", desc: "The best time to prepay is in the first few years — that is when your interest component is highest." },
              { title: "Use your annual bonus", desc: "A one-time lump sum from your bonus can reduce your tenure by months or even years." },
              { title: "Round up your EMI", desc: "If your EMI is ₹26,035, pay ₹27,000 instead. The small extra adds up significantly over years." },
              { title: "Choose reduce tenure over reduce EMI", desc: "When prepaying, banks offer both options. Reducing tenure always saves more interest." },
              { title: "Check for prepayment charges", desc: "RBI has mandated zero prepayment penalty on floating-rate home loans. Fixed-rate loans may carry 2-5% charges." },
            ].map((tip, i) => (
              <div key={i} style={{ display: "flex", gap: 14, marginBottom: 18, alignItems: "flex-start" }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                  background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12, fontWeight: 700, color: "#10b981",
                }}>{i + 1}</div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 4 }}>{tip.title}</p>
                  <p style={{ fontSize: 13, color: "#71717a", lineHeight: 1.7 }}>{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tax Benefits */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 20 }}>
              Loan Tax Benefits in India
            </h2>
            {[
              {
                title: "Home Loan (Old Regime)",
                points: [
                  "Section 80C: Up to ₹1.5 lakh/year on principal repaid",
                  "Section 24(b): Up to ₹2 lakh/year on interest paid",
                  "Section 80EEA: Additional ₹1.5L for first-time buyers",
                ],
              },
              {
                title: "Education Loan",
                points: [
                  "Section 80E: Full interest deductible — no upper limit",
                  "Available for up to 8 years from repayment start",
                  "Applicable for self, spouse or children's education",
                ],
              },
              {
                title: "Car & Personal Loan",
                points: [
                  "No direct tax benefits for salaried individuals",
                  "Business use: interest can be claimed as business expense",
                ],
              },
            ].map((section, i) => (
              <div key={i} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: i < 2 ? "1px solid #27272a" : "none" }}>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 10 }}>{section.title}</h3>
                {section.points.map((point, j) => (
                  <p key={j} style={{ display: "flex", gap: 8, fontSize: 13, color: "#71717a", lineHeight: 1.7, marginBottom: 6 }}>
                    <span style={{ color: "#10b981", flexShrink: 0 }}>→</span>
                    {point}
                  </p>
                ))}
              </div>
            ))}
            <p style={{ fontSize: 11, color: "#52525b" }}>
              Tax benefits apply under old tax regime only. Consult a CA for personalized advice.
            </p>
          </div>

          {/* Interest Rates Table */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 8 }}>
              Current Home Loan Interest Rates in India (2026)
            </h2>
            <p style={{ fontSize: 13, color: "#71717a", marginBottom: 20 }}>
              Indicative rates — confirm with bank before applying
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid #27272a" }}>
                    {["Bank", "Rate (p.a.)", "EMI per ₹1L / 20 yr"].map(h => (
                      <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontWeight: 600, color: "#71717a", fontSize: 12 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {banks.map(([bank, rate, emi], i) => (
                    <tr key={bank} style={{ borderBottom: "1px solid #1f1f22", background: i % 2 ? "#18181b" : "transparent" }}>
                      <td style={{ padding: "10px 12px", color: "#f4f4f5", fontWeight: 500 }}>{bank}</td>
                      <td style={{ padding: "10px 12px", color: "#10b981" }}>{rate}</td>
                      <td style={{ padding: "10px 12px", color: "#a1a1aa" }}>{emi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
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

          {/* Why MoneyTool */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 16 }}>
              Why Use MoneyTool EMI Calculator?
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { icon: "🎯", title: "Instant Results",       desc: "Get EMI, interest & total in real-time as you move sliders." },
                { icon: "📋", title: "Amortization Schedule", desc: "Full month-by-month breakdown of every payment." },
                { icon: "🔒", title: "100% Private",          desc: "No login, no signup. All calculations in your browser." },
                { icon: "📱", title: "Mobile Friendly",       desc: "Works perfectly on any device — phone, tablet or desktop." },
              ].map((f) => (
                <div key={f.title} style={{ background: "#18181b", border: "1px solid #27272a", borderRadius: 12, padding: 16 }}>
                  <p style={{ fontSize: 18, marginBottom: 8 }}>{f.icon}</p>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#f4f4f5", marginBottom: 4 }}>{f.title}</p>
                  <p style={{ fontSize: 12, color: "#71717a", lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Blog Section */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: "#f4f4f5", marginBottom: 4 }}>
                Related Articles
              </h2>
              <p style={{ fontSize: 14, color: "#71717a" }}>
                Learn more about loans and smart borrowing
              </p>
            </div>
            <Link href="/blog" style={{ fontSize: 13, fontWeight: 600, color: "#10b981", textDecoration: "none" }}>
              View all →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
            {blogs.map((blog) => (
              <Link key={blog.slug} href={`/blog/${blog.slug}`} style={{
                background: "#111113", border: "1px solid #27272a",
                borderRadius: 16, padding: 20, textDecoration: "none", display: "block",
              }}>
                <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
                  <span style={{ fontSize: 11, color: "#71717a", background: "#18181b", padding: "3px 8px", borderRadius: 999 }}>{blog.date}</span>
                  <span style={{ fontSize: 11, color: "#71717a", background: "#18181b", padding: "3px 8px", borderRadius: 999 }}>{blog.read} read</span>
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", lineHeight: 1.5, marginBottom: 12 }}>
                  {blog.title}
                </h3>
                <span style={{ fontSize: 13, color: "#10b981", fontWeight: 500 }}>Read more →</span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}