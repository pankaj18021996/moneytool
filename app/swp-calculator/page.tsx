import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import SwpCalculatorClient from "./SwpCalculatorClient";
import FAQSchema from "../components/FAQSchema";
import { BreadcrumbSchema } from "../components/Breadcrumb";

export const metadata: Metadata = seoMetadata as Metadata;

const faqs = [
  { question: "What is an SWP (Systematic Withdrawal Plan)?", answer: "An SWP lets you withdraw a fixed amount from your mutual fund investment every month while the remaining corpus stays invested and continues to grow. It is the opposite of SIP — instead of investing regularly, you withdraw regularly. SWP is commonly used for retirement income, monthly cash flow, or controlled liquidation of an investment corpus." },
  { question: "How long will my corpus last with SWP?", answer: "It depends on three factors: your starting corpus size, your monthly withdrawal amount, and the expected annual return on the remaining corpus. If your return rate exceeds your withdrawal rate (as a percentage of corpus), the corpus can last indefinitely or even grow. If you withdraw too much relative to returns, the corpus depletes over time. Use this calculator to find your specific break-even point." },
  { question: "Can SWP replace a pension or monthly salary?", answer: "SWP can provide regular monthly income but it is not the same as a guaranteed pension. The monthly cash flow depends on corpus performance. To use SWP as a primary income source, financial planners typically recommend keeping your monthly withdrawal below 0.5–0.8% of the corpus (6–9.6% annually), so that market returns cover the withdrawal and preserve the corpus over time." },
  { question: "Is SWP withdrawal amount guaranteed?", answer: "No. The withdrawal amount you set is fixed, but the number of months it continues depends on how the corpus performs. If markets underperform and returns are lower than your withdrawal rate, the corpus depletes faster than projected. This is called sequence-of-returns risk and is a key consideration for retirement planning with SWP." },
  { question: "Is SWP income taxable?", answer: "Yes. Each SWP redemption is treated as a capital gain. For equity mutual funds, gains on units held over 1 year are taxed at 10% LTCG (above ₹1 lakh/year). Units held under 1 year attract 15% STCG. For debt funds, all gains are taxed at your income slab rate. Tax is calculated on the gain portion of each withdrawal, not the full withdrawal amount." },
  { question: "What is the difference between SWP and dividend option in mutual funds?", answer: "In a dividend (IDCW) plan, the fund house declares dividends at its discretion — you cannot control the amount or timing. In SWP, you control the exact withdrawal amount and date. SWP is generally more predictable and tax-efficient than the dividend option, which is why most financial planners prefer SWP for regular income needs." },
];

const _webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "SWP Calculator India",
  url: "https://www.moneytool.in/swp-calculator",
  description: "Free SWP (Systematic Withdrawal Plan) calculator for India. Calculate how long your mutual fund corpus will last with monthly withdrawals, year-wise balance, and depletion timeline.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  isAccessibleForFree: true,
  inLanguage: "en-IN",
  featureList: ["Monthly withdrawal planning", "Corpus depletion projection", "Year-wise balance tracking", "Sustainable withdrawal rate calculation"],
  provider: { "@type": "Organization", name: "MoneyTool", url: "https://www.moneytool.in" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_webAppSchema) }} />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.moneytool.in" },
        { name: "SWP Calculator", url: "https://www.moneytool.in/swp-calculator" },
      ]} />

      <SwpCalculatorClient />

      {/* ✅ SEO Content Block */}
      <section style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px", color: "#a1a1aa" }}>

        <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#f4f4f5", marginBottom: "12px" }}>
          SWP Calculator — Systematic Withdrawal Plan for Regular Monthly Income
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "16px" }}>
          The SWP calculator helps you plan how to withdraw regularly from your mutual fund corpus while keeping
          the remaining amount invested. Enter your total corpus, the monthly withdrawal amount you need, and
          your expected annual return — the calculator shows how long your corpus will last, the year-wise
          remaining balance, and the total amount withdrawn over the period.
        </p>
        <p style={{ lineHeight: "1.8", marginBottom: "16px" }}>
          SWP is widely used in India for retirement income planning, creating a monthly salary-like cash flow
          from a lump sum investment, or systematically liquidating an investment portfolio. It gives you full
          control over timing and withdrawal amount — unlike the dividend option in mutual funds where the fund
          house decides when and how much to pay out.
        </p>

        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f4f4f5", margin: "32px 0 12px" }}>
          How Long Does a Corpus Last? — Examples
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "24px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ background: "#111113" }}>
                {["Starting Corpus", "Monthly Withdrawal", "Expected Return", "Corpus Lasts"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#10b981", fontWeight: 600, borderBottom: "1px solid #27272a" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["₹50 lakh", "₹25,000", "10%/year", "30+ years"],
                ["₹50 lakh", "₹40,000", "10%/year", "~18 years"],
                ["₹50 lakh", "₹50,000", "10%/year", "~13 years"],
                ["₹1 crore", "₹50,000", "10%/year", "30+ years"],
                ["₹1 crore", "₹80,000", "10%/year", "~20 years"],
                ["₹1 crore", "₹1,00,000", "10%/year", "~15 years"],
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #27272a" }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: "10px 14px", color: j === 3 ? "#10b981" : j === 0 ? "#f4f4f5" : "#a1a1aa", fontWeight: j === 0 || j === 3 ? 600 : 400 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ lineHeight: "1.8", marginBottom: "24px", fontSize: "13px", color: "#52525b" }}>
          * Figures are illustrative estimates. Actual corpus duration depends on real market returns which vary year to year.
        </p>

        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f4f4f5", margin: "32px 0 12px" }}>
          What is a Sustainable SWP Withdrawal Rate?
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "16px" }}>
          Financial planners commonly use the "4% rule" as a starting point for sustainable withdrawals — meaning
          withdrawing 4% of the corpus annually (roughly 0.33% per month) has historically allowed a portfolio to
          last 25–30 years in developed markets. For Indian investors, given higher equity returns but also higher
          inflation, a withdrawal rate of 5–6% annually is often considered sustainable.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "24px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ background: "#111113" }}>
                {["Corpus Size", "Safe Monthly Withdrawal (5%/yr)", "Aggressive Monthly Withdrawal (8%/yr)"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#10b981", fontWeight: 600, borderBottom: "1px solid #27272a" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["₹25 lakh", "₹10,417/month", "₹16,667/month"],
                ["₹50 lakh", "₹20,833/month", "₹33,333/month"],
                ["₹75 lakh", "₹31,250/month", "₹50,000/month"],
                ["₹1 crore", "₹41,667/month", "₹66,667/month"],
                ["₹2 crore", "₹83,333/month", "₹1,33,333/month"],
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #27272a" }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: "10px 14px", color: j === 0 ? "#f4f4f5" : "#a1a1aa", fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
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
