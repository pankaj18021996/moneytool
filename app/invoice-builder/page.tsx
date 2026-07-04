import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import InvoiceBuilderClient from "./InvoiceBuilderClient";
import FAQSchema from "../components/FAQSchema";
import { BreadcrumbSchema } from "../components/Breadcrumb";
import RelatedTools from "../components/RelatedTools";

export const metadata: Metadata = seoMetadata as Metadata;

// ✅ Schema now properly rendered (was defined but never used before)
const _webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Free GST Invoice Builder India",
  url: "https://www.moneytool.in/invoice-builder",
  description:
    "Free online GST invoice builder for India. Create professional GST invoices with CGST, SGST, IGST breakdowns and download as PDF instantly.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  isAccessibleForFree: true,
  inLanguage: "en-IN",
  featureList: [
    "GST-compliant invoice format",
    "CGST and SGST split",
    "PDF download",
    "No login required",
  ],
  provider: {
    "@type": "Organization",
    name: "MoneyTool",
    url: "https://www.moneytool.in",
  },
};

// ✅ FAQs added for rich results
const faqs = [
  {
    question: "Is this invoice builder free to use?",
    answer:
      "Yes, MoneyTool's invoice builder is completely free. No login, no subscription, and no watermark on your invoices. Create and download as many invoices as you need.",
  },
  {
    question: "Does this invoice builder support GST?",
    answer:
      "Yes. The invoice builder supports CGST + SGST (for intra-state transactions) and IGST (for inter-state transactions). Enter your GST rate and the calculator splits the tax automatically.",
  },
  {
    question: "Can I download the invoice as a PDF?",
    answer:
      "Yes. Once you fill in the invoice details, click the Download PDF button. The invoice is generated in your browser — no data is sent to any server.",
  },
  {
    question: "Is my invoice data saved or stored?",
    answer:
      "No. All data is processed in your browser locally. Nothing is stored on our servers. Your invoice details remain private.",
  },
  {
    question: "What is a GST invoice?",
    answer:
      "A GST invoice is a document issued by a registered GST taxpayer to a buyer. It must include the seller's GSTIN, buyer details, HSN/SAC codes, taxable value, and the applicable GST (CGST, SGST, or IGST). It is required for claiming input tax credit.",
  },
  {
    question: "Who needs to issue a GST invoice?",
    answer:
      "Any business registered under GST must issue a GST-compliant tax invoice for every sale of goods or services above ₹200. Freelancers, consultants, and small businesses in India all need to issue proper GST invoices to their clients.",
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
            name: "Invoice Builder",
            url: "https://www.moneytool.in/invoice-builder",
          },
        ]}
      />

      <InvoiceBuilderClient />

      {/* ✅ SEO content block — gives Google text to index */}
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
          Free GST Invoice Builder for Indian Businesses
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "16px" }}>
          MoneyTool&apos;s invoice builder lets you create a professional,
          GST-compliant invoice in under two minutes — no account required.
          Whether you are a freelancer, consultant, sole proprietor, or small
          business owner, this tool handles the GST split (CGST + SGST or IGST)
          automatically and produces a clean printable invoice you can share
          with clients.
        </p>
        <p style={{ lineHeight: "1.8", marginBottom: "16px" }}>
          Under the GST Act, every registered taxpayer must issue a valid tax
          invoice for goods or services sold. A proper GST invoice must include
          your GSTIN, the buyer&apos;s details, HSN or SAC codes, the taxable
          value, and the correct GST breakup. Missing any of these elements can
          prevent your client from claiming Input Tax Credit (ITC), which often
          causes payment delays.
        </p>
        <p style={{ lineHeight: "1.8", marginBottom: "32px" }}>
          This tool generates all the required fields, keeps the format
          professional, and downloads the invoice as a PDF directly in your
          browser. No data is ever sent to a server — your client details stay
          private.
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

        <RelatedTools tools={[
          { title: "Payslip Generator", icon: "🧑‍💼", description: "Generate payslips for your employees", href: "/payslip-generator" },
          { title: "GST Calculator", icon: "🛒", description: "Add or remove GST from prices", href: "/gst-calculator" },
          { title: "TDS Calculator", icon: "📋", description: "Calculate Tax Deducted at Source", href: "/tds-calculator" },
          { title: "Salary Calculator", icon: "💵", description: "Calculate in-hand salary & deductions", href: "/salary-calculator" },
        ]} />
      </section>
    </>
  );
}
