import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 gap-8 mb-10
          sm:grid-cols-2 lg:grid-cols-4">

          <div className="lg:col-span-1">
            <Link href="/"
              className="font-medium text-gray-900 text-base
                flex items-center gap-2 mb-3">
              <span className="w-7 h-7 bg-emerald-600 rounded-lg
                flex items-center justify-center text-white text-sm">
                M
              </span>
              MoneyTool
            </Link>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Smart financial tools. One platform. All your
              financial calculations made simple, fast and free.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-900 mb-4">
              Popular Tools
            </p>
            <div className="space-y-2.5">
              {[
                { href: "/emi-calculator", label: "EMI Calculator" },
                { href: "/sip-calculator", label: "SIP Calculator" },
                { href: "/gst-calculator", label: "GST Calculator" },
                { href: "/fd-calculator", label: "FD Calculator" },
                { href: "/salary-calculator", label: "Salary Calculator" },
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
            <p className="text-sm font-medium text-gray-900 mb-4">
              Company
            </p>
            <div className="space-y-2.5">
              {[
                { href: "/about", label: "About Us" },
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/privacy-policy", label: "Terms of Service" },
                { href: "/privacy-policy", label: "Disclaimer" },
              ].map((l) => (
                <Link key={l.label} href={l.href}
                  className="block text-xs text-gray-500
                    hover:text-emerald-600 transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-900 mb-4">
              Contact
            </p>
            <p className="text-xs text-gray-500 mb-2">
              contact@moneytool.in
            </p>
            <p className="text-xs text-gray-500">
              Made with ❤️ for India
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
            Free financial tools for every Indian
          </p>
        </div>

      </div>
    </footer>
  );
}