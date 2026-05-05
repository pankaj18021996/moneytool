import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white mt-16">
      <div className="max-w-5xl mx-auto px-6 py-10">

        <div className="grid grid-cols-2 gap-8 mb-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="font-medium text-gray-900 mb-2">
              💰 MoneyTool
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Free financial calculators built for every Indian.
              No signup. No ads. 100% free.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-900 mb-3">
              Calculators
            </p>
            <div className="space-y-2">
              {[
                { href: "/emi-calculator", label: "EMI Calculator" },
                { href: "/sip-calculator", label: "SIP Calculator" },
                { href: "/gst-calculator", label: "GST Calculator" },
                { href: "/salary-calculator", label: "Salary Calculator" },
                { href: "/fd-calculator", label: "FD Calculator" },
              ].map((l) => (
                <Link key={l.href} href={l.href}
                  className="block text-xs text-gray-500
                  hover:text-emerald-600 transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-900 mb-3">
              Company
            </p>
            <div className="space-y-2">
              <Link href="/about"
                className="block text-xs text-gray-500
                hover:text-emerald-600 transition-colors">
                About Us
              </Link>
              <Link href="/privacy-policy"
                className="block text-xs text-gray-500
                hover:text-emerald-600 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-900 mb-3">
              Contact
            </p>
            <p className="text-xs text-gray-500">
              contact@moneytool.in
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6
          flex flex-col sm:flex-row items-center
          justify-between gap-2">
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