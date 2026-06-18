import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import RdCalculatorClient from "./RdCalculatorClient";
import FAQSchema from "../components/FAQSchema";
import { BreadcrumbSchema } from "../components/Breadcrumb";

export const metadata: Metadata = seoMetadata as Metadata;

const faqs = [
  { question: "What is the minimum RD investment?", answer: "Minimum monthly deposit is ₹100 for most banks, with no upper limit in most cases (though some banks cap at ₹1,00,000/month). Post Office RD minimum is ₹100/month with no maximum." },
  { question: "Can I close an RD prematurely?", answer: "Yes, after 3–6 months (varies by bank). However, premature closure attracts a penalty — typically 1–2% reduction in the applicable interest rate. The reduced rate is applied to the entire deposit period, not just the remaining period." },
  { question: "What is the current RD interest rate in 2026?", answer: "RD rates vary by bank, tenure, and depositor type. Major banks offer 5.5–7.5% for regular depositors and 0.25–0.5% higher for senior citizens. Post Office RD offers 6.7% per annum. Rates change periodically, so always check your bank's current rate before opening an RD." },
  { question: "Is RD interest taxable?", answer: "Yes. RD interest is fully taxable as income under 'Income from Other Sources' at your applicable slab rate. Banks deduct TDS at 10% if annual interest from all deposits exceeds ₹40,000 (₹50,000 for senior citizens). Submit Form 15G/15H to avoid TDS if your total income is below the taxable limit." },
  { question: "How is RD interest calculated?", answer: "RD interest is compounded quarterly in India. The formula used is: M = R × [(1+r)^n − 1] ÷ (1−(1+r)^(−1/3)), where M is maturity value, R is monthly deposit, r is quarterly interest rate, and n is the number of quarters. Each monthly deposit earns interest from the date of deposit until maturity." },
  { question: "What is the difference between RD and FD?", answer: "FD requires a one-time lump sum deposit, while RD requires a fixed amount every month. FD suits those with a large sum available now; RD suits those who want to save a fixed amount from monthly income. RD rates are slightly lower than FD rates for the same bank and tenure." },
];

const _webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "RD Calculator India",
  url: "https://www.moneytool.in/rd-calculator",
  description: "Free Recurring Deposit calculator for India. Calculate RD maturity amount and total interest for monthly deposits at bank rates with quarterly compounding.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  isAccessibleForFree: true,
  inLanguage: "en-IN",
  featureList: ["Quarterly compounding", "Maturity value calculation", "Interest earned breakdown", "All tenure options"],
  provider: { "@type": "Organization", name: "MoneyTool", url: "https://www.moneytool.in" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_webAppSchema) }} />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.moneytool.in" },
        { name: "RD Calculator", url: "https://www.moneytool.in/rd-calculator" },
      ]} />

      <RdCalculatorClient />

      {/* ✅ SEO Content Block */}
      <section style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px", color: "#a1a1aa" }}>

        <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#f4f4f5", marginBottom: "12px" }}>
          RD Calculator — Recurring Deposit Maturity Amount & Interest
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "16px" }}>
          Use this free RD calculator to instantly calculate the maturity amount and total interest earned on your
          Recurring Deposit. Enter your monthly deposit amount, the annual interest rate offered by your bank, and
          the tenure — the calculator shows your exact maturity value using the standard quarterly compounding
          formula used by all Indian banks.
        </p>
        <p style={{ lineHeight: "1.8", marginBottom: "16px" }}>
          A Recurring Deposit is a disciplined savings instrument where you deposit a fixed amount every month for
          a chosen period. It is ideal for salaried individuals who want to save regularly from their monthly income
          without needing a large lump sum upfront. RD interest rates are generally slightly lower than FD rates
          but offer the convenience of monthly deposits.
        </p>

        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f4f4f5", margin: "32px 0 12px" }}>
          RD Maturity Value — Examples at Different Monthly Deposits
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "24px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ background: "#111113" }}>
                {["Monthly Deposit", "Tenure", "Rate", "Total Invested", "Maturity Value", "Interest Earned"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#10b981", fontWeight: 600, borderBottom: "1px solid #27272a" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["₹5,000", "1 year", "6.5%", "₹60,000", "₹62,113", "₹2,113"],
                ["₹5,000", "3 years", "6.8%", "₹1,80,000", "₹2,00,212", "₹20,212"],
                ["₹10,000", "2 years", "7.0%", "₹2,40,000", "₹2,57,684", "₹17,684"],
                ["₹10,000", "5 years", "7.0%", "₹6,00,000", "₹7,15,458", "₹1,15,458"],
                ["₹25,000", "3 years", "7.0%", "₹9,00,000", "₹10,01,060", "₹1,01,060"],
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
          RD vs FD vs SIP — Which is Right for You?
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "24px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ background: "#111113" }}>
                {["Feature", "RD", "FD", "SIP"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#10b981", fontWeight: 600, borderBottom: "1px solid #27272a" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Investment style", "Monthly fixed amount", "One-time lump sum", "Monthly flexible amount"],
                ["Returns", "Fixed (5.5–7.5%)", "Fixed (6.5–7.5%)", "Market-linked (8–14% historical)"],
                ["Capital safety", "Guaranteed", "Guaranteed", "Market risk"],
                ["Tax on returns", "Taxable (slab)", "Taxable (slab)", "LTCG 10% after 1yr"],
                ["Ideal for", "Monthly savers, short goals", "Lump sum, short-medium goals", "Long-term wealth creation"],
                ["Liquidity", "Premature closure (with penalty)", "Premature closure (with penalty)", "Anytime (T+1 to T+3)"],
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #27272a" }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: "10px 14px", color: j === 0 ? "#f4f4f5" : "#a1a1aa", fontWeight: j === 0 ? 500 : 400 }}>{cell}</td>
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
