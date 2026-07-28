import type { Metadata } from "next";
import FAQSchema from "../components/FAQSchema";
import { BreadcrumbSchema } from "../components/Breadcrumb";
import RelatedTools from "../components/RelatedTools";

export const metadata: Metadata = {
  title: "Education Loan EMI Calculator India 2026 | MoneyTool",
  description:
    "Free education loan EMI calculator for India. Calculate monthly EMI, total interest, and amortization schedule for student loans. Compare loan amounts from ₹50,000 to ₹50 lakh.",
  alternates: { canonical: "https://www.moneytool.in/education-loan-calculator" },
  openGraph: {
    title: "Education Loan EMI Calculator India 2026",
    description: "Calculate education loan EMI instantly. See monthly payments, total interest, and full amortization schedule.",
    type: "website",
    url: "https://www.moneytool.in/education-loan-calculator",
    images: [{ url: "https://www.moneytool.in/og-image.png", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    question: "What is the interest rate on education loans in India?",
    answer: "Education loan interest rates in India typically range from 8.5% to 15% per annum depending on the lender, loan amount, course, and institution. Government banks (SBI, Bank of Baroda, Canara Bank) generally offer lower rates (8.5–11%) than private banks and NBFCs. Some government schemes offer subsidised rates for economically weaker sections. Female students get an additional 0.5% concession from most public sector banks.",
  },
  {
    question: "What is a moratorium period in an education loan?",
    answer: "The moratorium period is the repayment holiday given during the course duration plus 6–12 months after course completion (or 6 months after getting a job, whichever is earlier). During this period, you are not required to pay EMIs. However, interest continues to accrue during the moratorium — either as simple interest paid monthly, or capitalised to the principal and repaid with EMIs after the moratorium ends.",
  },
  {
    question: "What is the maximum education loan amount available in India?",
    answer: "For studies in India, most public sector banks provide up to ₹10 lakh without collateral and up to ₹20–75 lakh with collateral (property, FD, LIC policy). For studies abroad, loans up to ₹1.5 crore are available with collateral from major public sector banks. Private banks and NBFCs may offer higher amounts. The loan amount typically covers tuition fees, accommodation, books, and other course-related expenses.",
  },
  {
    question: "Is education loan interest tax deductible?",
    answer: "Yes. Under Section 80E of the Income Tax Act, the interest paid on an education loan is fully deductible from taxable income for up to 8 consecutive years from the year repayment starts. There is no upper limit on the deduction amount. This benefit is available under both the old and new tax regimes, making it one of the few deductions available under the new regime.",
  },
  {
    question: "Can I prepay my education loan early?",
    answer: "Yes. Most banks allow prepayment of education loans without any foreclosure penalty, especially for loans taken by individuals (not companies). Making prepayments reduces the outstanding principal and saves significant interest over the loan tenure. If you receive a salary hike or bonus, directing it toward education loan prepayment is a smart financial move given the relatively high interest rates.",
  },
  {
    question: "What documents are needed for an education loan?",
    answer: "Typically required: admission letter from the institution, fee structure, mark sheets of previous qualifying exams, income proof of co-applicant (parent/guardian), address proof, identity proof (Aadhaar, PAN), bank statements (last 6 months), and collateral documents if the loan exceeds the no-collateral limit. Some banks may also require a confirmed fee receipt or university acceptance letter.",
  },
];

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Education Loan EMI Calculator India",
  url: "https://www.moneytool.in/education-loan-calculator",
  description: "Free education loan EMI calculator for India. Calculate monthly EMI and total interest for student loans with amortization schedule.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  isAccessibleForFree: true,
  inLanguage: "en-IN",
  featureList: ["Monthly EMI calculation", "Total interest breakdown", "Full amortization schedule", "Moratorium period guidance"],
  provider: { "@type": "Organization", name: "MoneyTool", url: "https://www.moneytool.in" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.moneytool.in" },
        { name: "Education Loan Calculator", url: "https://www.moneytool.in/education-loan-calculator" },
      ]} />

      {/* Calculator widget */}
      <section style={{ maxWidth: "860px", margin: "0 auto", padding: "24px 24px 0", color: "#a1a1aa" }}>
        <div style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 16, padding: 24 }}>
          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f4f4f5", marginBottom: 10 }}>Education Loan EMI Calculator</h2>
          <p style={{ lineHeight: 1.7, fontSize: 15, color: "#a1a1aa" }}>
            Enter your loan amount, interest rate, and tenure to estimate EMI and total interest before applying.
          </p>
        </div>
      </section>

      {/* ✅ SEO Content Block */}
      <section style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px", color: "#a1a1aa" }}>

        <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#f4f4f5", marginBottom: "12px" }}>
          Education Loan EMI Calculator India — Student Loan Planning Tool
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "16px" }}>
          Use this free education loan EMI calculator to plan your student loan repayment before you apply. Enter
          the loan amount, interest rate, and tenure — the calculator instantly shows your monthly EMI, total
          interest payable, total repayment amount, and a complete month-by-month amortization schedule.
        </p>
        <p style={{ lineHeight: "1.8", marginBottom: "24px" }}>
          Education loans in India have a unique feature called the moratorium period — you are not required to
          repay during the course and for 6–12 months after graduation. However, interest continues to accrue
          during this period. Use this calculator to understand the actual repayment burden after the moratorium
          ends so you can plan your finances before and after graduation.
        </p>

        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f4f4f5", margin: "32px 0 12px" }}>
          Education Loan EMI — Examples at Different Amounts
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "24px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ background: "#111113" }}>
                {["Loan Amount", "Interest Rate", "Tenure", "Monthly EMI", "Total Interest", "Total Repayment"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#10b981", fontWeight: 600, borderBottom: "1px solid #27272a" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["₹5 lakh", "10%", "5 years", "₹10,624", "₹1.37 lakh", "₹6.37 lakh"],
                ["₹10 lakh", "10%", "7 years", "₹16,601", "₹3.93 lakh", "₹13.93 lakh"],
                ["₹15 lakh", "11%", "7 years", "₹26,035", "₹6.87 lakh", "₹21.87 lakh"],
                ["₹20 lakh", "11%", "10 years", "₹27,551", "₹13.06 lakh", "₹33.06 lakh"],
                ["₹40 lakh", "9.5%", "12 years", "₹43,956", "₹23.30 lakh", "₹63.30 lakh"],
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

        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#f4f4f5", margin: "32px 0 12px" }}>
          Top Banks for Education Loans in India (2026)
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "24px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ background: "#111113" }}>
                {["Bank", "Interest Rate", "Max Loan (India)", "Max Loan (Abroad)", "Collateral Required"].map((h) => (
                  <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#10b981", fontWeight: 600, borderBottom: "1px solid #27272a" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["SBI", "8.65–10.65%", "₹10 lakh (no collateral)", "₹1.5 crore", "Above ₹7.5 lakh"],
                ["Bank of Baroda", "9.15–11.15%", "₹10 lakh (no collateral)", "₹1.5 crore", "Above ₹7.5 lakh"],
                ["Canara Bank", "9.25–11.25%", "₹10 lakh (no collateral)", "₹1 crore", "Above ₹7.5 lakh"],
                ["HDFC Credila", "10.50–14.00%", "₹20 lakh", "₹1.5 crore", "Flexible"],
                ["Avanse", "11.00–14.50%", "₹15 lakh", "₹75 lakh", "Flexible"],
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
        <p style={{ fontSize: "13px", color: "#52525b", marginBottom: "24px" }}>
          * Rates are indicative and subject to change. Always check the lender's official website for current rates.
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
        <RelatedTools tools={[
          { title: "EMI Calculator", icon: "🧮", description: "Calculate EMI for any loan type", href: "/emi-calculator" },
          { title: "Personal Loan Calculator", icon: "💳", description: "Calculate personal loan EMI & interest", href: "/personal-loan-calculator" },
          { title: "Income Tax Calculator", icon: "🧾", description: "Calculate your income tax liability", href: "/income-tax-calculator" },
          { title: "Salary Calculator", icon: "💵", description: "Calculate in-hand salary & deductions", href: "/salary-calculator" },
        ]} />

      </section>
    </>
  );
}
