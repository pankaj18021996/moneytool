import Link from "next/link";

export const metadata = {
  title: "MoneyTool - Free Financial Calculators for India",
  description: "Free EMI, SIP, GST, Salary, FD Calculators for India.",
};

const tools = [
  {
    title: "EMI Calculator",
    description: "Calculate your monthly loan installment for home, car & personal loans instantly",
    icon: "🏦",
    link: "/emi-calculator",
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100",
  },
  {
    title: "SIP Calculator",
    description: "Calculate your mutual fund SIP returns and plan your investments smartly",
    icon: "📈",
    link: "/sip-calculator",
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100",
  },
  {
    title: "GST Calculator",
    description: "Calculate GST amount instantly for any product or service in seconds",
    icon: "🧾",
    link: "/gst-calculator",
    color: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100",
  },
  {
    title: "Salary Calculator",
    description: "Calculate your in-hand salary from CTC and customize all deductions",
    icon: "💼",
    link: "/salary-calculator",
    color: "bg-purple-50 border-purple-200",
    iconBg: "bg-purple-100",
  },
  {
    title: "FD Calculator",
    description: "Calculate your Fixed Deposit maturity amount with custom interest rates",
    icon: "🏛️",
    link: "/fd-calculator",
    color: "bg-yellow-50 border-yellow-200",
    iconBg: "bg-yellow-100",
  },
];

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">

      <div className="text-center mb-12">
        <h1 className="text-3xl font-medium mb-3">
          Free Financial Tools for India 🇮🇳
        </h1>
        <p className="text-gray-500 text-base max-w-xl mx-auto">
          Simple, fast and free calculators to help you make
          smarter financial decisions
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {tools.map((tool) => (
          <Link
            key={tool.title}
            href={tool.link}
            className={`block border rounded-2xl p-6 hover:shadow-md
              transition-all duration-200 ${tool.color}`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center
              justify-center text-2xl mb-4 ${tool.iconBg}`}>
              {tool.icon}
            </div>
            <h2 className="text-lg font-medium mb-2">{tool.title}</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              {tool.description}
            </p>
            <div className="mt-4 text-sm font-medium text-green-600">
              Calculate now →
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center text-xs text-gray-400">
        More tools coming soon • 100% Free • No signup required
      </div>

    </main>
  );
}