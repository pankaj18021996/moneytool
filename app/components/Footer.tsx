import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-16">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-8 mb-8 sm:grid-cols-4">
          <div>
            <h3 className="text-sm font-medium mb-3">MoneyTool 💰</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Free financial calculators for every Indian.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3">Calculators</h3>
            <div className="space-y-2">
              <Link href="/emi-calculator"
                className="block text-xs text-gray-500 hover:text-green-600">
                EMI Calculator
              </Link>
              <Link href="/sip-calculator"
                className="block text-xs text-gray-500 hover:text-green-600">
                SIP Calculator
              </Link>
              <Link href="/gst-calculator"
                className="block text-xs text-gray-500 hover:text-green-600">
                GST Calculator
              </Link>
              <Link href="/salary-calculator"
                className="block text-xs text-gray-500 hover:text-green-600">
                Salary Calculator
              </Link>
              <Link href="/fd-calculator"
                className="block text-xs text-gray-500 hover:text-green-600">
                FD Calculator
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3">Company</h3>
            <div className="space-y-2">
              <Link href="/about"
                className="block text-xs text-gray-500 hover:text-green-600">
                About Us
              </Link>
              <Link href="/privacy-policy"
                className="block text-xs text-gray-500 hover:text-green-600">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3">Contact</h3>
            <p className="text-xs text-gray-500">
              contact@moneytool.in
            </p>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
          <p className="text-xs text-gray-400">
            © 2026 MoneyTool. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Made with ❤️ for India
          </p>
        </div>
      </div>
    </footer>
  );
}