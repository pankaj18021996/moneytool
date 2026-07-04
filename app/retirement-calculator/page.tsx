import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import RetirementCalculatorClient from "./RetirementCalculatorClient";
import FAQSchema from "../components/FAQSchema";
import { BreadcrumbSchema } from "../components/Breadcrumb";
import RelatedTools from "../components/RelatedTools";

export const metadata: Metadata = seoMetadata as Metadata;

const faqs = [
  {
    question: "How much corpus do I need for retirement in India?",
    answer: "A common rule of thumb is to accumulate 25–30 times your annual expenses at retirement (the '4% rule'). For example, if you need ₹60,000/month (₹7.2 lakh/year) at retirement, you need a corpus of ₹1.8–2.16 crore. This calculator adjusts your current expenses for inflation to project the actual corpus needed at your target retirement age.",
  },
  {
    question: "What is the 4% rule for retirement?",
    answer: "The 4% rule states that you can safely withdraw 4% of your retirement corpus annually without depleting it over 25–30 years, assuming your corpus earns 8–10% returns. For Indian investors, financial planners often use 5–6% as the sustainable withdrawal rate given higher equity returns but also higher inflation (5–7% vs 2–3% in developed markets).",
  },
  {
    question: "Can I retire earlier than 60?",
    answer: "Yes — this is called FIRE (Financial Independence, Retire Early). Retiring at 45 instead of 60 means 15 fewer years of saving and 15 more years of withdrawals, so the required corpus is significantly larger. The monthly SIP required to achieve this corpus will also be higher. Early retirement works best when you have high income, low expenses, and start investing early.",
  },
  {
    question: "How does inflation affect retirement planning?",
    answer: "Inflation is the biggest risk to retirement planning. If your expenses are ₹50,000/month today and inflation averages 6% annually, you will need ₹1,43,587/month in 20 years to maintain the same lifestyle. The retirement calculator adjusts your current expenses by the inflation rate to project your actual monthly requirement at retirement age.",
  },
  {
    question: "How much should I invest monthly for retirement?",
    answer: "It depends on your current age, target retirement age, current savings, expected return on investment, and post-retirement lifestyle. As a general guideline, investing 15–20% of your income from your 20s can build a sufficient retirement corpus. Starting late significantly increases the required monthly SIP due to less compounding time.",
  },
  {
    question: "Should I rely only on EPF for retirement?",
    answer: "EPF alone is typically insufficient for retirement. The average EPF corpus at retirement for most salaried employees covers only 5–8 years of expenses. A comprehensive retirement plan should include EPF + PPF + equity mutual funds (SIP) + NPS + any real estate or other investments. Diversification across instruments protects against any single vehicle underperforming.",
  },
];

const _webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Retirement Calculator India",
  url: "https://www.moneytool.in/retirement-calculator",
  description: "Free retirement planning calculator for India. Calculate the corpus needed for retirement, monthly SIP required, and project your retirement fund with inflation adjustment.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  isAccessibleForFree: true,
  inLanguage: "en-IN",
  featureList: ["Inflation-adjusted corpus calculation", "Monthly SIP requirement", "Expected returns modelling", "Year-by-year projection"],
  provider: { "@type": "Organization", name: "MoneyTool", url: "https://www.moneytool.in" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_webAppSchema) }} />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.moneytool.in" },
        { name: "Retirement Calculator", url: "https://www.moneytool.in/retirement-calculator" },
      ]} />

      <RetirementCalculatorClient />

      {/* ✅ SEO Content Block */}
      <section style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px", color: "#a1a1aa" }}>

        <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#f4f4f5", marginBottom: "12px" }}>
          Retirement Calculator India — How Much Do You Need to Retire?
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "16px" }}>
          This free retirement calculator helps you estimate the total corpus you need to retire comfortably in
          India, and the monthly SIP investment required to reach that goal. Enter your current age, target
          retirement age, current monthly expenses, expected inflation rate, and expected return on your
          investments — the calculator projects your inflation-adjusted retirement corpus and monthly savings target.
        </p>
        <p style={{ lineHeight: "1.8", marginBottom: "24px" }}>
          Retirement planning in India is uniquely challenging because of high inflation (historically 5–7%),
          longer life expectancy (average 75+ years), lack of a universal pension system for the private sector,
          and rising healthcare costs. Starting early and investing consistently in a mix of equity and fixed
          income instruments is the most reliable path to financial independence.
        </p>

        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f4f4f5", margin: "32px 0 12px" }}>
          Retirement Corpus Required — By Current Monthly Expense
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "24px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ background: "#111113" }}>
                {["Current Monthly Expense", "At Retirement (6% inflation, 20 yrs)", "Corpus Needed (25x)", "Monthly SIP (30 yrs @ 12%)"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#10b981", fontWeight: 600, borderBottom: "1px solid #27272a" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["₹30,000", "₹96,214", "₹2.89 crore", "₹8,100/month"],
                ["₹50,000", "₹1,60,357", "₹4.81 crore", "₹13,500/month"],
                ["₹75,000", "₹2,40,535", "₹7.22 crore", "₹20,250/month"],
                ["₹1,00,000", "₹3,20,714", "₹9.62 crore", "₹27,000/month"],
                ["₹1,50,000", "₹4,81,070", "₹14.43 crore", "₹40,500/month"],
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #27272a" }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: "10px 14px", color: j === 0 ? "#f4f4f5" : j === 2 ? "#10b981" : "#a1a1aa", fontWeight: j === 0 || j === 2 ? 600 : 400 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: "13px", color: "#52525b", marginBottom: "24px" }}>
          * Assumes current age 30, retirement age 60, 6% inflation, 12% SIP returns. Figures are illustrative — use the calculator for your exact numbers.
        </p>

        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f4f4f5", margin: "32px 0 12px" }}>
          Why Starting Early Makes a Massive Difference
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "24px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ background: "#111113" }}>
                {["Start Age", "Monthly SIP", "Years Investing", "Total Invested", "Corpus at 60 (12% return)"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#10b981", fontWeight: 600, borderBottom: "1px solid #27272a" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["25 years", "₹10,000", "35 years", "₹42 lakh", "₹3.89 crore"],
                ["30 years", "₹10,000", "30 years", "₹36 lakh", "₹2.18 crore"],
                ["35 years", "₹10,000", "25 years", "₹30 lakh", "₹1.19 crore"],
                ["40 years", "₹10,000", "20 years", "₹24 lakh", "₹62.5 lakh"],
                ["45 years", "₹10,000", "15 years", "₹18 lakh", "₹30.1 lakh"],
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #27272a" }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: "10px 14px", color: j === 0 ? "#f4f4f5" : j === 4 ? "#10b981" : "#a1a1aa", fontWeight: j === 0 || j === 4 ? 600 : 400 }}>{cell}</td>
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
        <RelatedTools tools={[
          { title: "SIP Calculator", icon: "📈", description: "Calculate mutual fund SIP returns", href: "/sip-calculator" },
          { title: "PPF Calculator", icon: "🏦", description: "Calculate Public Provident Fund returns", href: "/ppf-calculator" },
          { title: "SWP Calculator", icon: "📤", description: "Plan systematic withdrawal from investments", href: "/swp-calculator" },
          { title: "Income Tax Calculator", icon: "🧾", description: "Calculate your income tax liability", href: "/income-tax-calculator" },
        ]} />

      </section>
    </>
  );
}
