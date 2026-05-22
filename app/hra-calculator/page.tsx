"use client";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    q: "What is HRA exemption?",
    a: "HRA exemption is the amount of House Rent Allowance that is exempt from income tax. It is the minimum of: (i) Actual HRA received, (ii) 50% of basic salary + DA (in metro) or 40% (non-metro), or (iii) Rent paid minus 10% of basic salary + DA.",
  },
  {
    q: "Which cities are considered metro cities?",
    a: "Metro cities include Delhi, Mumbai, Bangalore, and Chennai. In these cities, HRA exemption is calculated at 50% of salary. In non-metro cities, it is 40%.",
  },
  {
    q: "Can I claim HRA if I live in my own property?",
    a: "No, HRA exemption is only available if you live in a rented property. If you own the property you live in, you cannot claim HRA exemption.",
  },
  {
    q: "What documents do I need to claim HRA?",
    a: "You need: (i) Rent receipt from landlord, (ii) Rent agreement, (iii) Landlord's PAN and bank details, (iv) Self-declaration form.",
  },
  {
    q: "How does HRA save taxes?",
    a: "HRA reduces your taxable income, which directly reduces your income tax liability. More HRA exemption means lower taxable income and lower tax to pay.",
  },
  {
    q: "Can I change my HRA claim if I move to a different city?",
    a: "Yes, you can file a revised ITR if your HRA changes due to relocation. The new HRA exemption applies from the month of relocation.",
  },
];

const blogs = [
  { title: "HRA Exemption: Complete Guide for Salaried Employees",        date: "May 2026", read: "5 min", slug: "hra-exemption-guide"    },
  { title: "How to Claim Maximum HRA Without Tax Penalty",                 date: "Apr 2026", read: "4 min", slug: "claim-hra-safely"   },
  { title: "Metro vs Non-Metro: How it Affects Your HRA Exemption",        date: "Apr 2026", read: "6 min", slug: "metro-nonmetro-hra"       },
  { title: "What Documents Are Required for HRA Filing?",                  date: "Mar 2026", read: "5 min", slug: "hra-documents-required" },
];

const stateRates = [
  { state: "Delhi", rent: "50%", metro: true },
  { state: "Mumbai", rent: "50%", metro: true },
  { state: "Bangalore", rent: "50%", metro: true },
  { state: "Chennai", rent: "50%", metro: true },
  { state: "Kolkata", rent: "40%", metro: false },
  { state: "Hyderabad", rent: "40%", metro: false },
  { state: "Pune", rent: "40%", metro: false },
  { state: "Ahmedabad", rent: "40%", metro: false },
];

export default function HRACalculatorPage() {
  const [basic, setBasic] = useState(50000);
  const [da, setDa] = useState(10000);
  const [hra, setHra] = useState(25000);
  const [rentPaid, setRentPaid] = useState(30000);
  const [isMetro, setIsMetro] = useState(true);

  const percentage = isMetro ? 0.5 : 0.4;
  const salaryComponent = basic + da;

  const exemption1 = hra;
  const exemption2 = salaryComponent * percentage;
  const exemption3 = Math.max(0, rentPaid - (salaryComponent * 0.1));

  const exemption = Math.min(exemption1, exemption2, exemption3);
  const taxableHra = hra - exemption;
  const taxSaved = exemption * 0.3;

  const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", gap: 8, fontSize: 13, color: "#71717a", marginBottom: 24, alignItems: "center" }}>
          <Link href="/" style={{ color: "#71717a", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <span style={{ color: "#a1a1aa" }}>HRA Calculator</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "#f4f4f5", marginBottom: 10, lineHeight: 1.2 }}>
            HRA Calculator India 2026
          </h1>
          <p style={{ color: "#a1a1aa", fontSize: 16, lineHeight: 1.6, maxWidth: 680 }}>
            Calculate your House Rent Allowance exemption instantly. Find out how much HRA you can claim,
            tax savings and state-wise rent percentages. Free, accurate & no signup required.
          </p>
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
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>

            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <label style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5" }}>Basic Salary (Monthly)</label>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#10b981" }}>{fmt(basic)}</span>
              </div>
              <input type="range" min="10000" max="500000" step="5000"
                value={basic} onChange={e => setBasic(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#10b981" }} />
            </div>

            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <label style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5" }}>Dearness Allowance (DA)</label>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#10b981" }}>{fmt(da)}</span>
              </div>
              <input type="range" min="0" max="200000" step="1000"
                value={da} onChange={e => setDa(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#10b981" }} />
            </div>

            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <label style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5" }}>HRA Received (Monthly)</label>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#10b981" }}>{fmt(hra)}</span>
              </div>
              <input type="range" min="0" max="200000" step="5000"
                value={hra} onChange={e => setHra(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#10b981" }} />
            </div>

            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <label style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5" }}>Rent Paid (Monthly)</label>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#10b981" }}>{fmt(rentPaid)}</span>
              </div>
              <input type="range" min="5000" max="200000" step="5000"
                value={rentPaid} onChange={e => setRentPaid(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#10b981" }} />
            </div>

            <div style={{ marginBottom: 28 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                <input type="checkbox" checked={isMetro} onChange={e => setIsMetro(e.target.checked)} style={{ width: 18, height: 18, accentColor: "#10b981" }} />
                <span style={{ fontSize: 14, color: "#f4f4f5" }}>Metro City (50% rate)</span>
              </label>
            </div>

            {/* Results */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 28 }}>
              <div style={{ background: "#18181b", borderRadius: 12, padding: 16, border: "1px solid #27272a" }}>
                <p style={{ fontSize: 12, color: "#71717a", marginBottom: 4 }}>HRA Exemption</p>
                <p style={{ fontSize: 20, fontWeight: 700, color: "#10b981" }}>{fmt(exemption)}</p>
              </div>
              <div style={{ background: "#18181b", borderRadius: 12, padding: 16, border: "1px solid #27272a" }}>
                <p style={{ fontSize: 12, color: "#71717a", marginBottom: 4 }}>Taxable HRA</p>
                <p style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5" }}>{fmt(taxableHra)}</p>
              </div>
              <div style={{ background: "#18181b", borderRadius: 12, padding: 16, border: "1px solid #27272a", gridColumn: "1 / -1" }}>
                <p style={{ fontSize: 12, color: "#71717a", marginBottom: 4 }}>Est. Tax Saved (30% slab)</p>
                <p style={{ fontSize: 20, fontWeight: 700, color: "#10b981" }}>{fmt(taxSaved)}</p>
              </div>
            </div>

            {/* Breakdown */}
            <div style={{ marginTop: 28, padding: 16, background: "#18181b", borderRadius: 12, border: "1px solid #27272a" }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: "#f4f4f5", marginBottom: 12 }}>Calculation Breakdown</p>
              <div style={{ fontSize: 13, color: "#a1a1aa", lineHeight: 2 }}>
                <p>Actual HRA: {fmt(exemption1)}</p>
                <p>{isMetro ? "50%" : "40%"} of (Basic + DA): {fmt(exemption2)}</p>
                <p>Rent Paid - 10% of (Basic + DA): {fmt(exemption3)}</p>
                <p style={{ color: "#10b981", fontWeight: 600, marginTop: 8 }}>HRA Exemption = Min: {fmt(exemption)}</p>
              </div>
            </div>

          </div>

          {/* Right — Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* Formula */}
            <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 12 }}>
                HRA Formula
              </h3>
              <div style={{ background: "#18181b", borderRadius: 10, padding: 12, marginBottom: 12 }}>
                <p style={{ fontSize: 11, color: "#a1a1aa", fontFamily: "monospace", lineHeight: 1.8, textAlign: "center" }}>
                  HRA Exemption = Min of:<br />
                  1) Actual HRA<br />
                  2) 50/40% × (Basic+DA)<br />
                  3) Rent - 10%×(Basic+DA)
                </p>
              </div>
              <div style={{ fontSize: 11, color: "#71717a", lineHeight: 1.8 }}>
                <p>Metro: 50% rate</p>
                <p>Non-metro: 40% rate</p>
              </div>
            </div>

            {/* Tips */}
            <div style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "#10b981", marginBottom: 12 }}>
                💡 HRA Tips
              </h3>
              {[
                "Document rent receipts properly",
                "Get landlord PAN mandatory",
                "Higher rent = More exemption",
                "Verify city classification",
                "File ITR with HRA claim",
              ].map((tip, i) => (
                <p key={i} style={{ display: "flex", gap: 8, fontSize: 12, color: "#a1a1aa", lineHeight: 1.7, marginBottom: 6 }}>
                  <span style={{ color: "#10b981", flexShrink: 0 }}>✓</span>
                  {tip}
                </p>
              ))}
            </div>

          </div>
        </div>

        {/* State Wise Rates Table */}
        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28, marginBottom: 48 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 8 }}>
            State-wise HRA Rates
          </h2>
          <p style={{ fontSize: 13, color: "#71717a", marginBottom: 20 }}>
            HRA exemption percentage by city. Metro cities have 50% rate, others have 40%.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #27272a" }}>
                  {["City", "Exemption Rate", "Type"].map(h => (
                    <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontWeight: 600, color: "#71717a", fontSize: 12 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stateRates.map(([state, rate, metro], i) => (
                  <tr key={state} style={{ borderBottom: "1px solid #1f1f22", background: i % 2 ? "#18181b" : "transparent" }}>
                    <td style={{ padding: "10px 12px", color: "#f4f4f5", fontWeight: 500 }}>{state}</td>
                    <td style={{ padding: "10px 12px", color: "#10b981", fontWeight: 600 }}>{rate}</td>
                    <td style={{ padding: "10px 12px", color: "#a1a1aa" }}>{metro ? "Metro" : "Non-Metro"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SEO Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 48 }}>

          {/* What is HRA */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 14 }}>
              What is HRA Exemption?
            </h2>
            <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.9, marginBottom: 12 }}>
              HRA stands for House Rent Allowance — a component of your salary provided by your employer to help pay rent. The income tax department allows you to claim an exemption on HRA, which means a portion of it is not taxed.
            </p>
            <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.9 }}>
              The HRA exemption is calculated as the minimum of: (1) Actual HRA received, (2) 50% of basic + DA (in metro) or 40% (non-metro), and (3) Rent paid minus 10% of basic + DA.
            </p>
          </div>

          {/* How to Use */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 14 }}>
              How to Use This HRA Calculator
            </h2>
            {[
              { step: "Step 1", text: "Enter your Basic Salary from your salary slip." },
              { step: "Step 2", text: "Enter Dearness Allowance (DA) if applicable." },
              { step: "Step 3", text: "Enter the HRA amount you receive from employer." },
              { step: "Step 4", text: "Enter the actual rent you pay monthly." },
              { step: "Step 5", text: "Select if you live in a metro or non-metro city." },
              { step: "Step 6", text: "Get instant calculation of HRA exemption and tax savings." },
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

          {/* Eligibility */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 20 }}>
              HRA Eligibility Criteria
            </h2>
            {[
              { title: "Must Be in Rental Accommodation", desc: "You should be living in a rented property. If you own the property you live in, you cannot claim HRA exemption." },
              { title: "Receiving HRA from Employer", desc: "HRA should be explicitly mentioned in your salary structure. Some employers do not provide HRA." },
              { title: "Have Valid Rent Agreement", desc: "A proper rental agreement signed by both landlord and tenant is required for claiming HRA." },
              { title: "Landlord PAN Required", desc: "From FY 2022-23, landlord's PAN is mandatory for HRA claims above ₹1 lakh per annum." },
              { title: "File ITR", desc: "You must file an income tax return (ITR) to claim HRA exemption." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, marginBottom: 18, alignItems: "flex-start" }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                  background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12, fontWeight: 700, color: "#10b981",
                }}>✓</div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 4 }}>{item.title}</p>
                  <p style={{ fontSize: 13, color: "#71717a", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#f4f4f5", marginBottom: 20 }}>
              Benefits of HRA Exemption
            </h2>
            {[
              { title: "Direct Tax Savings", desc: "HRA exemption directly reduces your taxable income, resulting in significant tax savings at year-end." },
              { title: "Complements Other Deductions", desc: "HRA works well with other deductions like 80C, 80D, and medical expenses." },
              { title: "No Spending Required", desc: "Unlike other deductions, HRA saving doesn't require you to spend more — you already pay the rent." },
              { title: "Higher in Metro Cities", desc: "Metro cities offer 50% exemption vs 40% in non-metro areas, benefiting city dwellers more." },
              { title: "Easy to Claim", desc: "With proper documentation, HRA is straightforward to claim and rarely audited." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, marginBottom: 18, alignItems: "flex-start" }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                  background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12, fontWeight: 700, color: "#10b981",
                }}>{i + 1}</div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 4 }}>{item.title}</p>
                  <p style={{ fontSize: 13, color: "#71717a", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
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
              Why Use MoneyTool HRA Calculator?
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { icon: "🎯", title: "Instant Calculation",  desc: "Get HRA exemption and tax savings instantly." },
                { icon: "📊", title: "Detailed Breakdown",    desc: "See all three criteria compared clearly." },
                { icon: "🌍", title: "Metro/Non-metro Aware", desc: "Auto-calculates different rates by city type." },
                { icon: "📱", title: "Mobile Friendly",      desc: "Works perfectly on phone, tablet & desktop." },
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
                Learn more about HRA and tax-saving strategies
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
