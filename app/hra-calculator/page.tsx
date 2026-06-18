import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import HraCalculatorClient from "./HraCalculatorClient";
import FAQSchema from "../components/FAQSchema";
import { BreadcrumbSchema } from "../components/Breadcrumb";

export const metadata: Metadata = seoMetadata as Metadata;

const faqs = [
  {
    question: "What is HRA exemption and how is it calculated?",
    answer: "HRA exemption is the tax-free portion of the House Rent Allowance you receive from your employer. The exempt amount is the minimum of three values: (1) actual HRA received from employer, (2) 50% of basic salary if you live in a metro city (Delhi, Mumbai, Chennai, Kolkata) or 40% for non-metro cities, and (3) actual rent paid minus 10% of basic salary. The lowest of these three is your HRA exemption.",
  },
  {
    question: "Which cities are considered metro cities for HRA?",
    answer: "For HRA calculation, only four cities are classified as metro: Delhi, Mumbai, Chennai, and Kolkata. Residents of these cities get 50% of basic salary as the HRA exemption threshold. All other cities — including Bengaluru, Hyderabad, Pune, Ahmedabad, Jaipur — are classified as non-metro and get 40% of basic salary.",
  },
  {
    question: "Can I claim HRA if I own the property I live in?",
    answer: "No. HRA exemption is only available for rented accommodation. If you live in your own property, you cannot claim HRA exemption even if your employer pays you HRA — the full HRA becomes taxable. However, you can still claim home loan tax benefits under Section 80C (principal) and Section 24(b) (interest).",
  },
  {
    question: "What documents are needed to claim HRA?",
    answer: "You need: rent receipts (monthly) showing landlord name, amount, and address; rent agreement; if annual rent exceeds ₹1 lakh, the landlord's PAN is mandatory. Submit these to your employer's HR/payroll team before the deadline (usually January–February). If you miss the employer deadline, claim the exemption directly when filing your ITR.",
  },
  {
    question: "Can I claim both HRA and home loan benefits together?",
    answer: "Yes, in specific situations. You can claim HRA (for rented residence) and home loan benefits (Section 80C + Section 24b) simultaneously if: your rented home and the property under loan are in different cities, OR the home loan property is under construction, OR you live on rent while your owned property is in another city for valid reasons. Both claims must be genuine and documentable.",
  },
  {
    question: "Is HRA available under the new tax regime?",
    answer: "No. HRA exemption is not available under the new tax regime (the default regime from FY 2024-25 onwards). It is only available under the old tax regime. If you are on the new regime, your entire HRA component is taxable. This is one of the key reasons salaried employees who pay significant rent often prefer the old tax regime.",
  },
];

const _webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "HRA Calculator India",
  url: "https://www.moneytool.in/hra-calculator",
  description: "Free HRA exemption calculator for India. Calculate your House Rent Allowance tax exemption based on basic salary, HRA received, rent paid, and city of residence.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  isAccessibleForFree: true,
  inLanguage: "en-IN",
  featureList: ["Metro and non-metro city support", "Three-condition minimum calculation", "Old regime only", "Monthly and annual HRA exemption"],
  provider: { "@type": "Organization", name: "MoneyTool", url: "https://www.moneytool.in" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_webAppSchema) }} />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.moneytool.in" },
        { name: "HRA Calculator", url: "https://www.moneytool.in/hra-calculator" },
      ]} />

      <HraCalculatorClient />

      {/* ✅ SEO Content Block */}
      <section style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px", color: "#a1a1aa" }}>

        <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#f4f4f5", marginBottom: "12px" }}>
          HRA Calculator — House Rent Allowance Exemption for Salaried Employees
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "16px" }}>
          Use this free HRA calculator to instantly find out your House Rent Allowance tax exemption under the
          old income tax regime. Enter your basic salary, the HRA component in your salary, your monthly rent,
          and your city type (metro or non-metro) — the calculator applies all three conditions and shows the
          exact exempt amount, taxable HRA, and annual tax saving.
        </p>
        <p style={{ lineHeight: "1.8", marginBottom: "24px" }}>
          HRA exemption is one of the most valuable tax benefits available to salaried employees in India. For
          someone paying ₹25,000/month in rent in a metro city with a basic salary of ₹60,000/month, the annual
          HRA exemption can reduce taxable income by ₹2.4–3 lakh — saving ₹72,000–93,600 in tax for someone
          in the 30% bracket.
        </p>

        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f4f4f5", margin: "32px 0 12px" }}>
          HRA Exemption Formula — Three Conditions
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "16px" }}>
          The HRA exemption is the <strong style={{ color: "#f4f4f5" }}>minimum</strong> of these three amounts:
        </p>
        <div style={{ overflowX: "auto", marginBottom: "24px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ background: "#111113" }}>
                {["Condition", "Formula", "Example (₹60K basic, ₹20K HRA, ₹18K rent, Metro)"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#10b981", fontWeight: 600, borderBottom: "1px solid #27272a" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Condition 1", "Actual HRA received", "₹20,000/month"],
                ["Condition 2", "50% of basic (metro) / 40% (non-metro)", "₹30,000/month (50% of ₹60,000)"],
                ["Condition 3", "Rent paid − 10% of basic salary", "₹18,000 − ₹6,000 = ₹12,000/month"],
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #27272a", background: i === 2 ? "rgba(16,185,129,0.05)" : "transparent" }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: "10px 14px", color: i === 2 && j === 0 ? "#10b981" : j === 0 ? "#f4f4f5" : "#a1a1aa", fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                  ))}
                </tr>
              ))}
              <tr style={{ background: "rgba(16,185,129,0.08)" }}>
                <td colSpan={2} style={{ padding: "10px 14px", color: "#10b981", fontWeight: 700 }}>✅ HRA Exemption = Minimum of all three</td>
                <td style={{ padding: "10px 14px", color: "#10b981", fontWeight: 700 }}>₹12,000/month = ₹1,44,000/year</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f4f4f5", margin: "32px 0 12px" }}>
          HRA Exemption Examples — Metro vs Non-Metro
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "24px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ background: "#111113" }}>
                {["Basic Salary", "HRA Received", "Monthly Rent", "City", "HRA Exempt/month", "Annual Tax Saving (30%)"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#10b981", fontWeight: 600, borderBottom: "1px solid #27272a" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["₹40,000", "₹16,000", "₹12,000", "Non-Metro", "₹8,000", "₹29,952/yr"],
                ["₹60,000", "₹24,000", "₹18,000", "Metro", "₹12,000", "₹44,928/yr"],
                ["₹80,000", "₹32,000", "₹25,000", "Metro", "₹17,000", "₹63,648/yr"],
                ["₹1,00,000", "₹40,000", "₹30,000", "Metro", "₹20,000", "₹74,880/yr"],
                ["₹1,50,000", "₹60,000", "₹50,000", "Metro", "₹35,000", "₹1,31,040/yr"],
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #27272a" }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: "10px 14px", color: j === 4 ? "#10b981" : j === 0 ? "#f4f4f5" : "#a1a1aa", fontWeight: j === 0 || j === 4 ? 600 : 400 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f4f4f5", margin: "32px 0 12px" }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {faqs.map((faq, i) => (
            <div key={i}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#f4f4f5", marginBottom: "6px" }}>{faq.question}</h3>
              <p style={{ lineHeight: "1.7", fontSize: "15px" }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
