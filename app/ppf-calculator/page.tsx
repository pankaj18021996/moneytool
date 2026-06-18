import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import PpfCalculatorClient from "./PpfCalculatorClient";
import FAQSchema from "../components/FAQSchema";
import { BreadcrumbSchema } from "../components/Breadcrumb";

export const metadata: Metadata = seoMetadata as Metadata;

const faqs = [
  { question: "What is the minimum PPF investment?", answer: "Minimum annual investment is ₹500 and maximum is ₹1.5 lakh per financial year. You can make up to 12 deposits per year in any amount as long as the total does not exceed ₹1.5 lakh." },
  { question: "What is the PPF maturity period?", answer: "Base maturity is 15 years from the date of account opening. You can extend in blocks of 5 years after maturity — either with further contributions or without (balance continues to earn interest tax-free)." },
  { question: "What is the current PPF interest rate?", answer: "As of 2026, the PPF interest rate is 7.1% per annum, compounded annually. The rate is set by the government and reviewed quarterly. Interest is calculated on the minimum balance between the 5th and last day of each month." },
  { question: "Can I withdraw from PPF before maturity?", answer: "Partial withdrawal is allowed from the 7th year onwards — up to 50% of the balance at the end of the 4th year or the end of the previous year, whichever is lower. Full premature closure is only allowed in exceptional cases like serious illness or higher education." },
  { question: "Is PPF eligible for tax benefits?", answer: "Yes. PPF offers triple tax exemption (EEE): contributions up to ₹1.5 lakh qualify for Section 80C deduction, interest earned is completely tax-free, and the maturity amount is also exempt from tax — no capital gains tax applies." },
  { question: "When should I deposit to maximise PPF interest?", answer: "Deposit before the 5th of each month to earn interest for that month. For lump sum investors, depositing before April 5th ensures interest for all 12 months of the financial year — maximising annual returns." },
];

const _webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "PPF Calculator India",
  url: "https://www.moneytool.in/ppf-calculator",
  description: "Free PPF calculator for India. Calculate Public Provident Fund maturity value, year-wise interest, and total returns at current 7.1% government rate.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  isAccessibleForFree: true,
  inLanguage: "en-IN",
  featureList: ["Annual compounding at 7.1%", "Year-wise interest breakdown", "Partial withdrawal eligibility", "15-year maturity calculation"],
  provider: { "@type": "Organization", name: "MoneyTool", url: "https://www.moneytool.in" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_webAppSchema) }} />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.moneytool.in" },
        { name: "PPF Calculator", url: "https://www.moneytool.in/ppf-calculator" },
      ]} />

      <PpfCalculatorClient />

      {/* ✅ SEO Content Block */}
      <section style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px", color: "#a1a1aa" }}>

        <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#f4f4f5", marginBottom: "12px" }}>
          PPF Calculator India — Public Provident Fund Returns at 7.1%
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "16px" }}>
          The PPF calculator helps you estimate the maturity value of your Public Provident Fund account based on
          your annual contribution, the current government interest rate of 7.1%, and your investment tenure. Enter
          your yearly deposit amount and the calculator instantly shows your year-wise balance, total interest earned,
          and the final corpus at maturity.
        </p>
        <p style={{ lineHeight: "1.8", marginBottom: "16px" }}>
          PPF is one of India's most trusted long-term savings instruments — government-backed, completely tax-free,
          and available to every Indian citizen. The account matures after 15 years and can be extended in 5-year
          blocks, making it ideal for retirement planning, children's education, or any long-term financial goal.
        </p>

        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f4f4f5", margin: "32px 0 12px" }}>
          PPF Maturity Value — What ₹1.5 Lakh/Year Becomes
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "24px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ background: "#111113" }}>
                {["Year", "Cumulative Investment", "Balance at 7.1%", "Interest Earned"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#10b981", fontWeight: 600, borderBottom: "1px solid #27272a" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Year 5", "₹7,50,000", "₹8,97,194", "₹1,47,194"],
                ["Year 10", "₹15,00,000", "₹21,24,285", "₹6,24,285"],
                ["Year 15 (Maturity)", "₹22,50,000", "₹40,68,209", "₹18,18,209"],
                ["Year 20 (Extended)", "₹30,00,000", "₹66,58,288", "₹36,58,288"],
                ["Year 25 (Extended)", "₹37,50,000", "₹1,03,08,015", "₹65,58,015"],
              ].map(([yr, inv, bal, int], i) => (
                <tr key={i} style={{ borderBottom: "1px solid #27272a" }}>
                  <td style={{ padding: "10px 14px", color: "#f4f4f5", fontWeight: 500 }}>{yr}</td>
                  <td style={{ padding: "10px 14px" }}>{inv}</td>
                  <td style={{ padding: "10px 14px", color: "#10b981", fontWeight: 600 }}>{bal}</td>
                  <td style={{ padding: "10px 14px" }}>{int}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f4f4f5", margin: "32px 0 12px" }}>
          Why PPF Is Called EEE — Triple Tax Exempt
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "12px" }}>
          PPF is one of the very few investments in India that qualifies for EEE (Exempt-Exempt-Exempt) tax status:
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
          {[
            "Exempt 1 — Investment: Up to ₹1.5 lakh/year qualifies for Section 80C income tax deduction",
            "Exempt 2 — Interest: Annual interest earned is completely tax-free",
            "Exempt 3 — Maturity: The entire corpus on withdrawal is tax-free — no capital gains tax",
          ].map((item) => (
            <li key={item} style={{ marginBottom: "8px", lineHeight: "1.7" }}>{item}</li>
          ))}
        </ul>
        <p style={{ lineHeight: "1.8", marginBottom: "24px" }}>
          For someone in the 30% tax bracket investing ₹1.5 lakh/year, the Section 80C deduction alone saves
          ₹46,800 in annual tax (including 4% cess). Combined with tax-free interest and maturity, the effective
          post-tax return on PPF is significantly higher than a comparable bank FD.
        </p>

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
