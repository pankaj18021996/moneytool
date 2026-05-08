import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">

        <Link href="/"
          className="font-medium text-gray-900 text-base flex
            items-center gap-2">
          <span className="w-7 h-7 bg-emerald-600 rounded-lg
            flex items-center justify-center text-white text-sm">
            M
          </span>
          MoneyTool
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          <Link href="/emi-calculator"
            className="text-sm text-gray-500 hover:text-gray-900
              transition-colors">
            Calculators
          </Link>
          <Link href="/about"
            className="text-sm text-gray-500 hover:text-gray-900
              transition-colors">
            About
          </Link>
        </div>

        <Link href="/emi-calculator"
          className="bg-emerald-600 text-white text-xs px-4 py-2
            rounded-lg hover:bg-emerald-700 transition-colors
            font-medium">
          Start Calculating →
        </Link>

      </div>
    </nav>
  );
}