import type { Metadata } from "next";
import EMICalculatorClient from "./EMICalculatorClient";

export const metadata: Metadata = {
  title: "EMI Calculator India 2026 — Free Loan EMI Calculator | MoneyTool",
  description:
    "Calculate EMI for home loan, car loan, personal loan & education loan instantly. Free EMI calculator with prepayment simulator, loan comparison, amortization schedule & tax benefits. No signup required.",
  keywords:
    "EMI calculator, loan EMI calculator India, home loan EMI, car loan EMI, personal loan EMI calculator, EMI calculator 2026, loan prepayment calculator, amortization schedule India",
  alternates: {
    canonical: "https://www.moneytool.in/emi-calculator",
  },
  openGraph: {
    title: "Free EMI Calculator India 2026 — Home, Car & Personal Loan EMI",
    description:
      "Calculate your loan EMI instantly with prepayment simulator, loan comparison, affordability checker & tax benefit estimator. 100% free, no signup.",
    url: "https://www.moneytool.in/emi-calculator",
    siteName: "MoneyTool",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Free EMI Calculator India — MoneyTool",
    description:
      "Calculate EMI for any loan type with prepayment savings, loan comparison & full amortization schedule.",
  },
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "EMI Calculator — MoneyTool",
  url: "https://www.moneytool.in/emi-calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  description:
    "Free EMI calculator for home loan, car loan, personal loan & education loan in India. Includes prepayment simulator, loan comparison and amortization schedule.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is EMI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EMI (Equated Monthly Installment) is a fixed payment amount made by a borrower to a lender on a specified date each month. It includes both principal repayment and interest, structured so the loan is fully repaid by the end of the tenure.",
      },
    },
    {
      "@type": "Question",
      name: "How is EMI calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EMI is calculated using the formula: EMI = P × r × (1+r)^n / ((1+r)^n − 1), where P is the principal loan amount, r is the monthly interest rate (annual rate ÷ 12 ÷ 100), and n is the tenure in months.",
      },
    },
    {
      "@type": "Question",
      name: "Does prepaying a loan save money?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Prepaying reduces the outstanding principal, which means you pay less interest over the remaining tenure. Even small extra monthly payments can save lakhs of rupees on a home loan and significantly shorten the loan duration.",
      },
    },
    {
      "@type": "Question",
      name: "What tax benefits are available on loans in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For home loans under the old tax regime: principal repayment is deductible up to ₹1.5 lakh/year under Section 80C, and interest paid is deductible up to ₹2 lakh/year under Section 24(b). For education loans, the entire interest paid is deductible under Section 80E for up to 8 years.",
      },
    },
    {
      "@type": "Question",
      name: "How much loan can I afford?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Banks generally approve a loan where EMI does not exceed 40-50% of your monthly income after deducting existing obligations. Use the Affordability Calculator on this page to estimate the maximum loan you can take based on your salary.",
      },
    },
  ],
};

export default function EMICalculatorPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <h1 className="text-2xl font-medium mb-1">EMI Calculator</h1>
      <p className="text-gray-500 text-sm mb-8">
        Calculate your monthly loan installment instantly for home, car,
        personal, education & business loans
      </p>

      <EMICalculatorClient />

      {/* ━━━ SEO Content Section ━━━ */}
      <div className="mt-8 space-y-6">

        {/* What is EMI */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="text-lg font-medium mb-3">What is EMI?</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            EMI stands for Equated Monthly Installment — a fixed amount you pay
            to your bank or lender every month until the loan is fully repaid.
            Each EMI includes two components: a portion that goes toward
            repaying the principal (the amount you borrowed) and a portion that
            covers the interest charged by the lender.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            In the early months of a loan, a larger share of your EMI goes
            toward interest. As the outstanding principal reduces over time,
            more of your payment goes toward the principal. This shift is
            visible in the amortization schedule above.
          </p>
        </div>

        {/* EMI Formula */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="text-lg font-medium mb-3">
            How is EMI Calculated? — The Formula
          </h2>
          <div className="bg-gray-50 rounded-xl p-4 mb-4 text-center">
            <p className="text-sm text-gray-700 font-mono">
              EMI = P × r × (1 + r)<sup>n</sup> ÷ [(1 + r)<sup>n</sup> − 1]
            </p>
          </div>
          <div className="text-gray-600 text-sm leading-relaxed space-y-1.5">
            <p>
              <strong className="text-gray-700">P</strong> = Principal loan
              amount (the sum you borrow)
            </p>
            <p>
              <strong className="text-gray-700">r</strong> = Monthly interest
              rate = Annual rate ÷ 12 ÷ 100
            </p>
            <p>
              <strong className="text-gray-700">n</strong> = Loan tenure in
              months
            </p>
          </div>
          <div className="mt-4 bg-green-50 border border-green-100 rounded-xl p-4">
            <p className="text-xs text-green-700 font-medium mb-1">
              Example
            </p>
            <p className="text-sm text-green-800 leading-relaxed">
              For a ₹30 lakh home loan at 8.5% p.a. for 20 years:
              P = 30,00,000 · r = 0.007083 · n = 240 →{" "}
              <strong>EMI = ₹26,035/month</strong>. Total interest paid over 20
              years = ₹32.48 lakh — more than the loan itself.
            </p>
          </div>
        </div>

        {/* How to use */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="text-lg font-medium mb-3">
            How to Use This EMI Calculator
          </h2>
          <div className="text-gray-600 text-sm leading-relaxed space-y-2.5">
            <p>
              <strong className="text-gray-700">1.</strong> Select your loan
              type — Home, Car, Personal, Education or Business. The sliders
              automatically adjust to realistic ranges for each type.
            </p>
            <p>
              <strong className="text-gray-700">2.</strong> Drag the sliders
              (or type values) to set your loan amount, interest rate and
              tenure.
            </p>
            <p>
              <strong className="text-gray-700">3.</strong> Your EMI, total
              interest and total payment update instantly.
            </p>
            <p>
              <strong className="text-gray-700">4.</strong> Open the{" "}
              <strong>Prepayment Simulator</strong> to see how extra payments
              can save you lakhs in interest and shorten your loan by years.
            </p>
            <p>
              <strong className="text-gray-700">5.</strong> Use{" "}
              <strong>Compare Two Loans</strong> to evaluate offers from
              different banks side by side.
            </p>
            <p>
              <strong className="text-gray-700">6.</strong> Check{" "}
              <strong>How Much Loan Can I Afford?</strong> to know your
              eligibility before you apply.
            </p>
            <p>
              <strong className="text-gray-700">7.</strong> View the full{" "}
              <strong>Amortization Schedule</strong> to see exactly how your
              principal and interest change month by month.
            </p>
          </div>
        </div>

        {/* Bank Interest Rates Table */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="text-lg font-medium mb-3">
            Current Home Loan Interest Rates in India (2026)
          </h2>
          <p className="text-gray-500 text-xs mb-3">
            Indicative rates — confirm with the bank before applying
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b-2 border-gray-200 text-gray-500 text-xs">
                  <th className="py-2 pr-2 font-medium">Bank</th>
                  <th className="py-2 px-2 font-medium text-right">
                    Rate (p.a.)
                  </th>
                  <th className="py-2 pl-2 font-medium text-right">
                    EMI per ₹1L for 20 yr
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[
                  ["SBI", "8.50%", "₹868"],
                  ["HDFC Bank", "8.75%", "₹885"],
                  ["ICICI Bank", "8.75%", "₹885"],
                  ["Bank of Baroda", "8.40%", "₹861"],
                  ["PNB", "8.45%", "₹864"],
                  ["Kotak Mahindra", "8.75%", "₹885"],
                  ["Axis Bank", "8.75%", "₹885"],
                  ["LIC HFL", "8.50%", "₹868"],
                ].map(([bank, rate, emi], i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-100 ${
                      i % 2 ? "bg-gray-50/50" : ""
                    }`}
                  >
                    <td className="py-2 pr-2">{bank}</td>
                    <td className="py-2 px-2 text-right font-medium">{rate}</td>
                    <td className="py-2 pl-2 text-right text-green-700">
                      {emi}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-gray-400 mt-2">
            Rates as commonly listed. Actual rates depend on credit score, loan
            amount and bank policies.
          </p>
        </div>

        {/* Prepayment Tips */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="text-lg font-medium mb-3">
            5 Smart Loan Prepayment Tips
          </h2>
          <div className="text-gray-600 text-sm leading-relaxed space-y-2.5">
            <p>
              <strong className="text-gray-700">1. Start early.</strong>{" "}
              Prepaying in the first few years has the biggest impact because
              that is when your interest component is highest.
            </p>
            <p>
              <strong className="text-gray-700">
                2. Use your annual bonus.
              </strong>{" "}
              A one-time lump sum from your bonus can reduce your tenure by
              months or even years.
            </p>
            <p>
              <strong className="text-gray-700">
                3. Round up your EMI.
              </strong>{" "}
              If your EMI is ₹26,035, pay ₹27,000 instead. The small extra
              adds up over years.
            </p>
            <p>
              <strong className="text-gray-700">
                4. Choose &quot;reduce tenure&quot; over &quot;reduce EMI&quot;.
              </strong>{" "}
              When prepaying, banks offer both options. Reducing tenure always
              saves more interest in the long run.
            </p>
            <p>
              <strong className="text-gray-700">
                5. Check for prepayment charges.
              </strong>{" "}
              RBI has mandated zero prepayment penalty on floating-rate home
              loans. But fixed-rate loans and some personal loans may still
              carry charges of 2-5%.
            </p>
          </div>
        </div>

        {/* Tax Benefits */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="text-lg font-medium mb-3">
            Loan Tax Benefits in India
          </h2>
          <div className="text-gray-600 text-sm leading-relaxed space-y-3">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-1">
                Home Loan Tax Benefits (Old Regime)
              </h3>
              <p>
                Section 80C allows deduction up to ₹1.5 lakh per year on
                principal repaid. Section 24(b) allows deduction up to ₹2 lakh
                per year on interest paid for self-occupied property.
                First-time home buyers could also claim additional deduction
                under Section 80EEA (now closed for new claims after March
                2022 but existing claims continue).
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-1">
                Education Loan Tax Benefits
              </h3>
              <p>
                Section 80E allows deduction on the entire interest paid (no
                upper limit) on an education loan for up to 8 years from the
                year you start repaying. This applies to loans taken for
                higher education of self, spouse or children.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-1">
                Car & Personal Loan
              </h3>
              <p>
                There are no direct tax benefits on car loans or personal
                loans for salaried individuals. However, if a car loan or
                personal loan is used for business purposes, the interest paid
                can be claimed as a business expense.
              </p>
            </div>
          </div>
          <p className="text-[10px] text-gray-400 mt-3">
            Tax benefits apply under the old tax regime. The new tax regime
            (applicable from FY 2023-24 onwards as default) does not allow
            most of these deductions. Consult a chartered accountant for
            personalized advice.
          </p>
        </div>

        {/* FAQs */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="text-lg font-medium mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 text-sm">
            {[
              {
                q: "Is the EMI shown by this calculator the exact amount my bank will charge?",
                a: "The EMI calculated here is based on the standard reducing balance formula used by all banks. The actual amount may differ slightly due to rounding, processing fees, insurance charges, or if the bank uses a different interest compounding method.",
              },
              {
                q: "What happens if I miss an EMI payment?",
                a: "Missing an EMI payment results in a penalty fee (typically 1-2% of EMI), a negative impact on your CIBIL/credit score, and the overdue amount accruing additional interest. Repeated defaults can lead to legal action by the lender.",
              },
              {
                q: "Can my EMI change during the loan tenure?",
                a: "If you have a floating rate loan (most home loans in India are floating), your EMI can change when the bank adjusts the rate based on RBI repo rate movements. Fixed rate loans keep EMI constant throughout.",
              },
              {
                q: "Is it better to take a longer or shorter loan tenure?",
                a: "A shorter tenure means higher EMIs but significantly lower total interest. A longer tenure reduces your monthly burden but you pay much more interest overall. Use the calculator above to compare both scenarios and find your sweet spot.",
              },
              {
                q: "How much of my salary should go toward EMIs?",
                a: "Financial experts recommend that total EMIs (including all loans) should not exceed 40-50% of your monthly take-home salary. Banks also use this as a general threshold when assessing loan eligibility.",
              },
              {
                q: "Does prepaying a loan affect my credit score?",
                a: "Partial prepayments generally do not affect your credit score negatively. However, fully pre-closing a loan very early (within the first year) may have a minor temporary impact. Timely full repayment of the loan is the best way to build a strong score.",
              },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                <h3 className="font-medium text-gray-700 mb-1.5">{faq.q}</h3>
                <p className="text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why MoneyTool */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="text-lg font-medium mb-3">
            Why Use MoneyTool EMI Calculator?
          </h2>
          <div className="text-gray-600 text-sm leading-relaxed space-y-2">
            <p>
              Most EMI calculators online only show you the basic EMI number.
              MoneyTool goes further with tools that help you actually make
              better financial decisions:
            </p>
            <p>
              <strong className="text-gray-700">Prepayment Simulator</strong>{" "}
              — See exactly how much interest you save and how many months you
              cut by making extra payments. Most competitors don&apos;t offer this.
            </p>
            <p>
              <strong className="text-gray-700">Loan Comparison</strong> —
              Comparing offers from two banks? Enter both side by side and
              instantly see which one costs less.
            </p>
            <p>
              <strong className="text-gray-700">
                Affordability Calculator
              </strong>{" "}
              — Before you apply, know the maximum loan you qualify for based
              on your income. No other free calculator does this inline.
            </p>
            <p>
              <strong className="text-gray-700">Tax Benefits</strong> —
              Indian-specific Section 80C, 24(b) and 80E information shown
              right alongside your calculation. No need to Google separately.
            </p>
            <p>
              <strong className="text-gray-700">
                Full Amortization Schedule
              </strong>{" "}
              — Month-by-month breakdown of every payment showing how
              principal and interest shift over time.
            </p>
            <p>
              100% free. No ads. No signup. No data stored. All calculations
              happen in your browser.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
