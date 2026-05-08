import Link from "next/link";

export const metadata = {
  title: "MoneyTool — Free Financial Calculators & Tools for India",
  description:
    "15+ free financial tools — EMI, SIP, FD, PPF, GST, Income Tax, Salary & Invoice Builder. No login required. Instant results. Made for India.",
  keywords:
    "emi calculator, sip calculator, fd calculator, gst calculator, salary calculator, income tax calculator india, ppf calculator, free financial tools india",
  openGraph: {
    title: "MoneyTool — Free Financial Calculators & Tools for India",
    description:
      "15+ free financial tools — EMI, SIP, FD, PPF, GST, Income Tax & more. No login. Instant results.",
    url: "https://www.moneytool.in",
    siteName: "MoneyTool",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoneyTool — Free Financial Calculators for India",
    description: "15+ free tools. No login. Instant results.",
  },
};

const tools = [
  {
    title: "EMI Calculator",
    description: "Calculate monthly EMI for home, car & personal loans",
    icon: "🏦",
    link: "/emi-calculator",
    category: "calculator",
    popular: true,
  },
  {
    title: "SIP Calculator",
    description: "Calculate returns on Systematic Investment Plans",
    icon: "📈",
    link: "/sip-calculator",
    category: "calculator",
    popular: true,
  },
  {
    title: "GST Calculator",
    description: "Calculate GST amounts and tax breakdowns instantly",
    icon: "🧾",
    link: "/gst-calculator",
    category: "calculator",
    popular: false,
  },
  {
    title: "Salary Calculator",
    description: "Calculate in-hand salary from CTC with all deductions",
    icon: "💼",
    link: "/salary-calculator",
    category: "calculator",
    popular: false,
  },
  {
    title: "FD Calculator",
    description: "Calculate Fixed Deposit returns and maturity amount",
    icon: "🏛️",
    link: "/fd-calculator",
    category: "calculator",
    popular: false,
  },
  {
    title: "PPF Calculator",
    description: "Calculate Public Provident Fund returns and maturity",
    icon: "🏧",
    link: "/ppf-calculator",
    category: "calculator",
    popular: false,
    coming: true,
  },
  {
    title: "Income Tax Calculator",
    description: "Calculate your income tax liability for FY 2025-26",
    icon: "📊",
    link: "/income-tax-calculator",
    category: "calculator",
    popular: true,
    coming: true,
  },
  {
    title: "RD Calculator",
    description: "Calculate Recurring Deposit returns and interest earned",
    icon: "💰",
    link: "/rd-calculator",
    category: "calculator",
    popular: false,
    coming: true,
  },
  {
    title: "HRA Calculator",
    description: "Calculate House Rent Allowance exemption & tax savings",
    icon: "🏠",
    link: "/hra-calculator",
    category: "calculator",
    popular: false,
    coming: true,
  },
  {
    title: "Home Loan Calculator",
    description: "Calculate home loan EMI, eligibility & total interest",
    icon: "🏡",
    link: "/home-loan-calculator",
    category: "calculator",
    popular: false,
    coming: true,
  },
  {
    title: "Invoice Builder",
    description: "Create professional GST invoices and download as PDF",
    icon: "🧑‍💼",
    link: "/invoice-builder",
    category: "business",
    popular: true,
    coming: true,
  },
  {
    title: "Payslip Generator",
    description: "Generate professional salary slips with all deductions",
    icon: "📄",
    link: "/payslip-generator",
    category: "business",
    popular: false,
    coming: true,
  },
];

const popularTools = tools.filter((t) => t.popular && !t.coming);

const features = [
  {
    icon: "⚡",
    title: "100% Free Tools",
    desc: "All calculators are completely free. No hidden charges, no premium plans ever.",
  },
  {
    icon: "🔒",
    title: "No Login Required",
    desc: "Start calculating immediately. No registration needed. Your privacy matters.",
  },
  {
    icon: "🎯",
    title: "Accurate & Fast",
    desc: "Get instant and precise calculations using industry-standard formulas.",
  },
  {
    icon: "📱",
    title: "Mobile Friendly",
    desc: "Access all tools on any device — mobile, tablet or desktop.",
  },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50
            text-emerald-700 text-xs px-4 py-2 rounded-full mb-6
            font-medium border border-emerald-100">
            <span className="w-2 h-2 rounded-full bg-emerald-500
              inline-block"></span>
            100% Free • No Login Required
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium text-gray-900
            mb-5 leading-tight">
            All Your Financial<br />
            <span className="text-emerald-600">Tools in One Place</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto
            leading-relaxed mb-8">
            EMI, SIP, FD, PPF, Tax, GST & Invoice tools —
            fast and free. Make smarter financial decisions with ease.
          </p>
          <div className="flex flex-col sm:flex-row gap-3
            justify-center items-center">
            <Link href="/emi-calculator"
              className="bg-emerald-600 text-white px-6 py-3
                rounded-xl text-sm font-medium hover:bg-emerald-700
                transition-colors w-full sm:w-auto text-center">
              Start Calculating →
            </Link>
            <Link href="/about"
              className="bg-white text-gray-700 px-6 py-3
                rounded-xl text-sm font-medium border border-gray-200
                hover:border-gray-300 transition-colors
                w-full sm:w-auto text-center">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { num: "12+", label: "Tools Available" },
              { num: "100%", label: "Free Forever" },
              { num: "0", label: "Login Required" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-medium text-gray-900 mb-1">
                  {s.num}
                </p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ALL TOOLS ===== */}
      <section className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-2">
              All Financial Tools
            </h2>
            <p className="text-gray-500 text-sm">
              Access a comprehensive suite of financial calculators
              and business tools
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2
            lg:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <div key={tool.title}
                className="bg-white border border-gray-100
                  rounded-2xl p-5 hover:border-emerald-200
                  hover:shadow-sm transition-all duration-200
                  relative">
                {tool.coming && (
                  <span className="absolute top-4 right-4 text-xs
                    bg-amber-50 text-amber-600 border border-amber-100
                    px-2 py-0.5 rounded-full font-medium">
                    Coming Soon
                  </span>
                )}
                {tool.popular && !tool.coming && (
                  <span className="absolute top-4 right-4 text-xs
                    bg-emerald-50 text-emerald-600 border
                    border-emerald-100 px-2 py-0.5 rounded-full
                    font-medium">
                    Popular
                  </span>
                )}
                <div className="text-2xl mb-3">{tool.icon}</div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">
                  {tool.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  {tool.description}
                </p>
                {tool.coming ? (
                  <span className="text-xs text-gray-400">
                    Coming soon...
                  </span>
                ) : (
                  <Link href={tool.link}
                    className="text-xs font-medium text-emerald-600
                      hover:text-emerald-700 transition-colors">
                    Open Tool →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== POPULAR TOOLS ===== */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="inline-flex items-center gap-2 bg-orange-50
            text-orange-600 text-xs px-3 py-1.5 rounded-full mb-6
            font-medium border border-orange-100">
            🔥 Top Used Tools
          </div>
          <h2 className="text-2xl font-medium text-gray-900 mb-2">
            Our Most Popular Tools
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Trusted by thousands of Indians every day
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {popularTools.map((tool) => (
              <Link key={tool.title} href={tool.link}
                className="bg-white border border-gray-100 rounded-2xl
                  p-6 hover:border-emerald-200 hover:shadow-sm
                  transition-all duration-200 group">
                <div className="text-3xl mb-4">{tool.icon}</div>
                <h3 className="text-base font-medium text-gray-900 mb-2">
                  {tool.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {tool.description}
                </p>
                <div className="space-y-1.5 mb-5">
                  {tool.title === "EMI Calculator" && [
                    "Instant calculations",
                    "Amortization schedule",
                    "Prepayment simulator",
                  ].map((f) => (
                    <div key={f}
                      className="flex items-center gap-2 text-xs
                        text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full
                        bg-emerald-500 inline-block flex-shrink-0">
                      </span>
                      {f}
                    </div>
                  ))}
                  {tool.title === "SIP Calculator" && [
                    "Investment projection",
                    "Returns analysis",
                    "Goal-based planning",
                  ].map((f) => (
                    <div key={f}
                      className="flex items-center gap-2 text-xs
                        text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full
                        bg-emerald-500 inline-block flex-shrink-0">
                      </span>
                      {f}
                    </div>
                  ))}
                </div>
                <span className="text-sm font-medium text-emerald-600
                  group-hover:text-emerald-700 transition-colors">
                  Try {tool.title} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-medium text-gray-900 mb-2">
            Why Choose MoneyTool?
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            We are committed to making financial planning accessible,
            simple and completely free for everyone
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2
            lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <div key={f.title}
                className="bg-white border border-gray-100
                  rounded-2xl p-5">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEO CONTENT ===== */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">
            Comprehensive Financial Tools for Every Indian
          </h2>
          <div className="prose prose-sm max-w-none text-gray-500
            leading-relaxed space-y-4">
            <p>
              MoneyTool provides a comprehensive suite of financial
              calculators and tools designed to help individuals and
              businesses make informed financial decisions. Whether
              you are planning a loan, calculating taxes, or creating
              professional invoices, our platform offers accurate,
              fast and completely free tools.
            </p>
            <p>
              Our range of financial calculators includes EMI
              calculators for home loans, car loans and personal loans.
              Calculate your equated monthly installments with
              precision, understand the total interest payable and
              plan your finances better. Our SIP calculator helps you
              plan your systematic investment plans and estimate
              returns on your investments.
            </p>
            <p>
              Calculate your income tax liability accurately with our
              income tax calculator. Understand your take-home salary
              with our salary calculator that breaks down all
              deductions and components. Plan your taxes effectively
              and make informed decisions about your finances.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}