import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import PayslipGeneratorClient from "./PayslipGeneratorClient";
import FAQSchema from "../components/FAQSchema";
import { BreadcrumbSchema } from "../components/Breadcrumb";

export const metadata: Metadata = seoMetadata as Metadata;

// ✅ Schema now properly rendered
const _webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Free Payslip Generator India",
  url: "https://www.moneytool.in/payslip-generator",
  description:
    "Free online salary slip generator for India. Create professional payslips with all statutory deductions — PF, ESI, TDS, Professional Tax — and download as PDF.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  isAccessibleForFree: true,
  inLanguage: "en-IN",
  featureList: [
    "Professional payslip format",
    "All statutory deductions (PF, ESI, TDS, PT)",
    "PDF export",
    "No data stored",
  ],
  provider: {
    "@type": "Organization",
    name: "MoneyTool",
    url: "https://www.moneytool.in",
  },
};

// ✅ FAQs for rich results
const faqs = [
  {
    question: "Is this payslip generator free?",
    answer:
      "Yes, completely free. No login required, no watermark, and no limit on how many payslips you generate. Fill in the details and download the PDF instantly.",
  },
  {
    question: "What deductions does this payslip generator include?",
    answer:
      "The payslip generator includes all standard Indian statutory deductions: EPF (Employee Provident Fund at 12% of basic), ESI (Employee State Insurance at 0.75% for eligible employees), TDS on salary, and Professional Tax as per your state.",
  },
  {
    question: "Is the salary data stored anywhere?",
    answer:
      "No. All calculations happen in your browser. No salary or employee data is sent to or stored on any server. Your information stays completely private.",
  },
  {
    question: "Can I use this for multiple employees?",
    answer:
      "Yes. You can generate individual payslips for each employee one at a time. Fill in the employee details, generate the payslip, download it, and repeat for the next employee.",
  },
  {
    question: "What is the difference between gross salary and net salary?",
    answer:
      "Gross salary is the total salary before any deductions — it includes basic pay, HRA, and allowances. Net salary (take-home pay) is what the employee receives after subtracting PF, ESI, TDS, and professional tax from the gross salary.",
  },
  {
    question: "What is a salary slip / payslip used for?",
    answer:
      "A payslip is official proof of income and employment. It is required when applying for loans, credit cards, rental agreements, and visa applications. It also helps employees verify that statutory deductions like PF and ESI are being correctly deducted and deposited.",
  },
  {
    question: "What is EPF deduction in a payslip?",
    answer:
      "EPF (Employee Provident Fund) deduction is 12% of the employee's basic salary. The employer also contributes 12%, of which 8.33% goes to EPS (Employee Pension Scheme) and 3.67% goes to EPF. The combined corpus grows with interest and is available on retirement or resignation after 5 years.",
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
            name: "Payslip Generator",
            url: "https://www.moneytool.in/payslip-generator",
          },
        ]}
      />

      <PayslipGeneratorClient />

      {/* ✅ SEO content block */}
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
          Free Payslip Generator for Indian Employers & Employees
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "16px" }}>
          Generate a professional, accurate salary slip in minutes using
          MoneyTool&apos;s free payslip generator. Enter the employee name,
          designation, salary components, and deductions — the tool calculates
          gross pay, all statutory deductions, and net take-home salary
          automatically. Download the completed payslip as a PDF with one click.
        </p>
        <p style={{ lineHeight: "1.8", marginBottom: "16px" }}>
          Indian payslips must reflect statutory deductions correctly: EPF at
          12% of basic salary, ESI at 0.75% for employees earning up to ₹21,000
          per month, TDS as per the applicable income tax slab, and Professional
          Tax as per the state government&apos;s schedule. This tool handles all
          of these automatically so you don&apos;t have to calculate them
          manually.
        </p>
        <p style={{ lineHeight: "1.8", marginBottom: "32px" }}>
          A payslip is not just an internal document — it is required by
          employees for loan applications, credit card approvals, rental
          agreements, and visa processes. Issuing a properly formatted salary
          slip protects both the employer and the employee and ensures
          compliance with Indian labour laws.
        </p>

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
      </section>
    </>
  );
}
