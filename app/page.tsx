import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "MoneyTool — Free Financial Calculators & Tools for India",
  description:
    "15+ free financial tools — EMI, SIP, FD, PPF, GST, Income Tax, Salary & Invoice Builder. No login required. Instant results. Made for India.",
  alternates: { canonical: "https://www.moneytool.in" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MoneyTool",
  url: "https://www.moneytool.in",
  description: "15+ free financial calculators for India — EMI, SIP, FD, PPF, GST, Income Tax, Salary & Invoice Builder.",
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.moneytool.in/calculators?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MoneyTool",
  url: "https://www.moneytool.in",
  logo: {
    "@type": "ImageObject",
    url: "https://www.moneytool.in/og-image.png",
    width: 512,
    height: 512,
  },
  description: "Free financial calculators and tools for India — EMI, SIP, Income Tax, GST, Invoice Builder and more.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@moneytool.in",
    contactType: "customer support",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [],
  foundingDate: "2025",
  areaServed: "IN",
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Free Financial Calculators for India",
  description: "Comprehensive list of free financial calculators and tools available on MoneyTool",
  numberOfItems: 16,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "EMI Calculator", url: "https://www.moneytool.in/emi-calculator" },
    { "@type": "ListItem", position: 2, name: "SIP Calculator", url: "https://www.moneytool.in/sip-calculator" },
    { "@type": "ListItem", position: 3, name: "Income Tax Calculator", url: "https://www.moneytool.in/income-tax-calculator" },
    { "@type": "ListItem", position: 4, name: "PPF Calculator", url: "https://www.moneytool.in/ppf-calculator" },
    { "@type": "ListItem", position: 5, name: "FD Calculator", url: "https://www.moneytool.in/fd-calculator" },
    { "@type": "ListItem", position: 6, name: "Home Loan Calculator", url: "https://www.moneytool.in/home-loan-calculator" },
    { "@type": "ListItem", position: 7, name: "Salary Calculator", url: "https://www.moneytool.in/salary-calculator" },
    { "@type": "ListItem", position: 8, name: "GST Calculator", url: "https://www.moneytool.in/gst-calculator" },
    { "@type": "ListItem", position: 9, name: "HRA Calculator", url: "https://www.moneytool.in/hra-calculator" },
    { "@type": "ListItem", position: 10, name: "TDS Calculator", url: "https://www.moneytool.in/tds-calculator" },
    { "@type": "ListItem", position: 11, name: "Invoice Builder", url: "https://www.moneytool.in/invoice-builder" },
    { "@type": "ListItem", position: 12, name: "Payslip Generator", url: "https://www.moneytool.in/payslip-generator" },
    { "@type": "ListItem", position: 13, name: "Car Loan Calculator", url: "https://www.moneytool.in/car-loan-calculator" },
    { "@type": "ListItem", position: 14, name: "RD Calculator", url: "https://www.moneytool.in/rd-calculator" },
    { "@type": "ListItem", position: 15, name: "SWP Calculator", url: "https://www.moneytool.in/swp-calculator" },
    { "@type": "ListItem", position: 16, name: "Retirement Planner", url: "https://www.moneytool.in/retirement-calculator" },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <HomeClient />
    </>
  );
}
