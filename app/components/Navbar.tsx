import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-medium text-green-600">
          MoneyTool 💰
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/emi-calculator"
            className="text-sm text-gray-500 hover:text-green-600 transition-colors">
            EMI
          </Link>
          <Link href="/sip-calculator"
            className="text-sm text-gray-500 hover:text-green-600 transition-colors">
            SIP
          </Link>
          <Link href="/gst-calculator"
            className="text-sm text-gray-500 hover:text-green-600 transition-colors">
            GST
          </Link>
          <Link href="/salary-calculator"
            className="text-sm text-gray-500 hover:text-green-600 transition-colors">
            Salary
          </Link>
          <Link href="/fd-calculator"
            className="text-sm text-gray-500 hover:text-green-600 transition-colors">
            FD
          </Link>
          <Link href="/about"
            className="text-sm text-gray-500 hover:text-green-600 transition-colors">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}