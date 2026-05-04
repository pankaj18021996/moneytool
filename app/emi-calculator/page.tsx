import type { Metadata } from "next";
import EMICalculatorClient from "./EMICalculatorClient";

export const metadata: Metadata = {
  title: "EMI Calculator India 2026 — Free Loan EMI Calculator",
  description: "Calculate your home loan, car loan & personal loan EMI instantly. Free EMI calculator with interest breakdown. Trusted by thousands of Indians.",
  alternates: {
    canonical: "https://www.moneytool.in/emi-calculator",
  },
  openGraph: {
    title: "Free EMI Calculator India — Calculate Loan EMI Instantly",
    description: "Calculate your loan EMI instantly. Free and accurate EMI calculator for all loan types.",
    url: "https://www.moneytool.in/emi-calculator",
    siteName: "MoneyTool",
    locale: "en_IN",
    type: "website",
  },
};

export default function EMICalculatorPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">

      <h1 className="text-2xl font-medium mb-1">
        EMI Calculator
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        Calculate your monthly loan installment instantly
      </p>

      <EMICalculatorClient />

      <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-6">
        <h2 className="text-lg font-medium mb-3">
          What is EMI?
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          EMI (Equated Monthly Installment) is a fixed payment
          amount made by a borrower to a lender each month. EMIs
          are used to pay off both interest and principal so that
          over a specified number of years, the loan is fully paid off.
        </p>

        <h2 className="text-lg font-medium mb-3">
          How is EMI Calculated?
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          EMI is calculated using the formula:
          EMI = P × r × (1+r)^n / ((1+r)^n - 1)
          where P is principal, r is monthly interest rate
          and n is number of months.
        </p>

        <h2 className="text-lg font-medium mb-3">
          How to Use This EMI Calculator?
        </h2>
        <ul className="text-gray-600 text-sm leading-relaxed
          list-disc pl-5 space-y-2 mb-4">
          <li>Enter your loan amount using the slider</li>
          <li>Set the interest rate offered by your bank</li>
          <li>Choose your loan tenure in months</li>
          <li>Instantly see your monthly EMI amount</li>
        </ul>

        <h2 className="text-lg font-medium mb-3">
          Types of Loans You Can Calculate
        </h2>
        <ul className="text-gray-600 text-sm leading-relaxed
          list-disc pl-5 space-y-2">
          <li>Home Loan EMI Calculator</li>
          <li>Car Loan EMI Calculator</li>
          <li>Personal Loan EMI Calculator</li>
          <li>Education Loan EMI Calculator</li>
          <li>Business Loan EMI Calculator</li>
        </ul>
      </div>

    </main>
  );
}