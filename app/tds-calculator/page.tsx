import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import TdsCalculatorClient from "./TdsCalculatorClient";
import FAQSchema from "../components/FAQSchema";
import { BreadcrumbSchema } from "../components/Breadcrumb";
import RelatedTools from "../components/RelatedTools";

export const metadata: Metadata = seoMetadata as Metadata;

// ✅ Schema now properly rendered (was defined but never used before)
const _webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "TDS Calculator India",
  url: "https://www.moneytool.in/tds-calculator",
  description:
    "Free TDS calculator for India. Calculate Tax Deducted at Source on salary, rent, professional fees and contractor payments as per Income Tax Act sections.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  isAccessibleForFree: true,
  inLanguage: "en-IN",
  featureList: [
    "Section 192 salary TDS",
    "Section 194I rent TDS",
    "Section 194J professional fees",
    "Section 194C contractor payments",
  ],
  provider: {
    "@type": "Organization",
    name: "MoneyTool",
    url: "https://www.moneytool.in",
  },
};

// ✅ Rich FAQs targeting real search queries
const faqs = [
  {
    question: "What is TDS and who deducts it?",
    answer:
      "TDS (Tax Deducted at Source) is a mechanism where the payer deducts tax before making payment to the recipient. Employers deduct TDS on salary (Section 192), businesses deduct TDS on rent above ₹50,000/month (Section 194IB), and companies deduct TDS on professional fees above ₹30,000/year (Section 194J).",
  },
  {
    question: "What is the TDS rate on salary in India?",
    answer:
      "TDS on salary is deducted under Section 192 at the applicable income tax slab rate. There is no fixed percentage — it depends on the employee's estimated annual income, investments, and deductions declared. The employer divides the estimated annual tax liability by 12 and deducts that amount monthly.",
  },
  {
    question: "What is the TDS rate on rent?",
    answer:
      "Under Section 194IB, individuals and HUFs paying monthly rent above ₹50,000 must deduct TDS at 5% on the total annual rent. This is a one-time deduction, usually in March or at the time the last rent payment is made. Under Section 194I (for companies), the rate is 10% on annual rent above ₹2.4 lakh.",
  },
  {
    question: "What is TDS on professional fees?",
    answer:
      "TDS on professional or technical fees (Section 194J) is deducted at 10% when the annual payment exceeds ₹30,000. For technical services, the rate is 2%. Professionals like doctors, lawyers, engineers, and consultants typically receive payments after TDS deduction.",
  },
  {
    question: "How do I get a TDS refund?",
    answer:
      "File your Income Tax Return (ITR) before the due date. If the total TDS deducted across all sources exceeds your actual tax liability for the year, the excess is refunded directly to your bank account. The refund process usually takes 30–60 days after ITR processing.",
  },
  {
    question: "What is Form 26AS?",
    answer:
      "Form 26AS is your annual tax credit statement available on the Income Tax portal. It shows all TDS deducted on your income by various deductors — employer, bank, tenant, etc. You should verify that the TDS shown in Form 26AS matches what is reflected in your Form 16 or Form 16A before filing your ITR.",
  },
  {
    question: "What happens if TDS is not deducted?",
    answer:
      "If a deductor fails to deduct TDS or deposits it late, they are liable to pay interest at 1% per month for non-deduction and 1.5% per month for late deposit. Additionally, the expense may be disallowed under Section 40(a)(ia) when computing business income.",
  },
];

export default function Page() {
  return (
    <>
      {/* ✅ Schema rendered correctly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(_webAppSchema) }}
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.moneytool.in" },
          {
            name: "TDS Calculator",
            url: "https://www.moneytool.in/tds-calculator",
          },
        ]}
      />

      <TdsCalculatorClient />

      {/* ✅ SEO content block — Google needs text to rank this page */}
      <section
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "48px 24px",
          color: "#a1a1aa",
        }}
      >
        <h2
          style={{
            fontSize: "22px",
            fontWeight: "700",
            color: "#f4f4f5",
            marginBottom: "12px",
          }}
        >
          TDS Calculator India — Tax Deducted at Source
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "16px" }}>
          Use this free TDS calculator to quickly find out how much tax will be
          deducted at source on your salary, rent, professional fees, or
          contractor payments. Enter the payment amount and select the applicable
          section — the calculator shows the TDS rate, the amount to be
          deducted, and the net amount receivable.
        </p>
        <p style={{ lineHeight: "1.8", marginBottom: "16px" }}>
          TDS is governed by the Income Tax Act, 1961. Different types of
          payments attract different TDS rates under different sections: salary
          (Section 192), interest from banks (Section 194A), rent (Section
          194I/194IB), professional fees (Section 194J), and contractor payments
          (Section 194C). Knowing the right section and threshold prevents
          penalties for both the payer and the recipient.
        </p>
        <p style={{ lineHeight: "1.8", marginBottom: "32px" }}>
          After the deductor deposits the TDS with the government, it reflects
          in your Form 26AS. You can claim this amount as a tax credit when
          filing your ITR. If the total TDS deducted exceeds your actual tax
          liability, you will receive a refund.
        </p>

        {/* TDS Rate Table */}
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#f4f4f5",
            marginBottom: "16px",
          }}
        >
          TDS Rate Chart 2025-26
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "40px" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "14px",
            }}
          >
            <thead>
              <tr style={{ background: "#111113" }}>
                {["Section", "Nature of Payment", "Threshold", "TDS Rate"].map(
                  (h) => (
                    <th
                      key={h}
                      style={{
                        padding: "10px 14px",
                        textAlign: "left",
                        color: "#10b981",
                        fontWeight: "600",
                        borderBottom: "1px solid #27272a",
                      }}
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {[
                ["192", "Salary", "Basic exemption limit", "As per slab"],
                ["194A", "Interest (bank/others)", "₹40,000/year", "10%"],
                ["194C", "Contractor (individual)", "₹30,000/single", "1%"],
                ["194C", "Contractor (company)", "₹30,000/single", "2%"],
                ["194I", "Rent (company/firm)", "₹2,40,000/year", "10%"],
                ["194IB", "Rent (individual/HUF)", "₹50,000/month", "5%"],
                ["194J", "Professional fees", "₹30,000/year", "10%"],
                ["194J", "Technical services", "₹30,000/year", "2%"],
              ].map(([sec, nature, threshold, rate], i) => (
                <tr
                  key={i}
                  style={{ borderBottom: "1px solid #27272a" }}
                >
                  <td style={{ padding: "10px 14px", color: "#10b981", fontWeight: "600" }}>{sec}</td>
                  <td style={{ padding: "10px 14px" }}>{nature}</td>
                  <td style={{ padding: "10px 14px" }}>{threshold}</td>
                  <td style={{ padding: "10px 14px", fontWeight: "600", color: "#f4f4f5" }}>{rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2
          style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#f4f4f5",
            marginBottom: "12px",
          }}
        >
          Frequently Asked Questions
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {faqs.map((faq, i) => (
            <div key={i}>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#f4f4f5",
                  marginBottom: "6px",
                }}
              >
                {faq.question}
              </h3>
              <p style={{ lineHeight: "1.7", fontSize: "15px" }}>{faq.answer}</p>
            </div>
          ))}
        </div>
        <RelatedTools tools={[
          { title: "Income Tax Calculator", icon: "🧾", description: "Calculate your income tax liability", href: "/income-tax-calculator" },
          { title: "Salary Calculator", icon: "💵", description: "Calculate in-hand salary & deductions", href: "/salary-calculator" },
          { title: "GST Calculator", icon: "🛒", description: "Add or remove GST from prices", href: "/gst-calculator" },
          { title: "Invoice Builder", icon: "📄", description: "Create professional invoices free", href: "/invoice-builder" },
        ]} />

      </section>
    </>
  );
}
