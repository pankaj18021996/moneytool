import Link from "next/link";

export const metadata = {
  title: "MoneyTool — Free Financial Calculators for India",
  description: "Free EMI, SIP, GST, Salary & FD Calculators for India.",
};

const tools = [
  {
    title: "EMI Calculator",
    description: "Calculate loan EMI for home, car & personal loans instantly",
    icon: "🏦",
    link: "/emi-calculator",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    hover: "hover:border-emerald-300",
  },
  {
    title: "SIP Calculator",
    description: "Plan your mutual fund SIP investments and see returns",
    icon: "📈",
    link: "/sip-calculator",
    bg: "bg-blue-50",
    border: "border-blue-100",
    hover: "hover:border-blue-300",
  },
  {
    title: "GST Calculator",
    description: "Calculate GST amount for any product or service instantly",
    icon: "🧾",
    link: "/gst-calculator",
    bg: "bg-amber-50",
    border: "border-amber-100",
    hover: "hover:border-amber-300",
  },
  {
    title: "Salary Calculator",
    description: "Calculate in-hand salary from CTC with custom deductions",
    icon: "💼",
    link: "/salary-calculator",
    bg: "bg-purple-50",
    border: "border-purple-100",
    hover: "hover:border-purple-300",
  },
  {
    title: "FD Calculator",
    description: "Calculate Fixed Deposit maturity with custom interest rates",
    icon: "🏛️",
    link: "/fd-calculator",
    bg: "bg-orange-50",
    border: "border-orange-100",
    hover: "hover:border-orange-300",
  },
];

export default function Home() {
  return (
    <main>

      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-emerald-50
          text-emerald-700 text-xs px-4 py-2 rounded-full mb-5 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500
            inline-block animate-pulse"></span>
          100% Free — No signup required
        </div>
        <h1 className="text-4xl font-medium text-gray-900 mb-4
          leading-tight">
          Free Financial Tools<br />
          <span className="text-emerald-600">for India 🇮🇳</span>
        </h1>
        <p className="text-gray-500 text-base max-w-lg mx-auto
          leading-relaxed">
          Simple, fast and accurate calculators to help you make
          smarter financial decisions — completely free
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-10">
        {[
          { num: "5+", label: "Free Tools" },
          { num: "0", label: "Signup needed" },
          { num: "100%", label: "Accurate" },
        ].map((s) => (
          <div key={s.label}
            className="bg-white border border-gray-100 rounded-2xl
              p-5 text-center shadow-sm">
            <p className="text-3xl font-medium text-gray-900 mb-1">
              {s.num}
            </p>
            <p className="text-xs text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {tools.map((tool) => (
          <Link
            key={tool.title}
            href={tool.link}
            className={`group bg-white border ${tool.border}
              ${tool.hover} rounded-2xl p-6
              hover:shadow-md transition-all duration-200`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center
              justify-center text-2xl mb-4 ${tool.bg}`}>
              {tool.icon}
            </div>
            <h2 className="text-base font-medium text-gray-900 mb-2">
              {tool.title}
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              {tool.description}
            </p>
            <span className="text-sm font-medium text-emerald-600">
              Calculate now →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-emerald-50 border border-emerald-100
        rounded-2xl p-8 text-center">
        <p className="text-emerald-800 font-medium mb-2">
          More tools coming soon!
        </p>
        <p className="text-emerald-600 text-sm">
          PPF Calculator • Income Tax Calculator •
          Age Calculator • and more...
        </p>
      </div>

    </main>
  );
}