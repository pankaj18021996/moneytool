import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">

        <Link href="/"
          className="flex items-center gap-2 font-medium text-emerald-600">
          <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center
            justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 3v8" stroke="white"
                strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          MoneyTool
        </Link>

        <div className="flex items-center gap-1">
          {[
            { href: "/emi-calculator", label: "EMI" },
            { href: "/sip-calculator", label: "SIP" },
            { href: "/gst-calculator", label: "GST" },
            { href: "/salary-calculator", label: "Salary" },
            { href: "/fd-calculator", label: "FD" },
            { href: "/about", label: "About" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs text-gray-500 hover:text-emerald-600
                hover:bg-emerald-50 px-3 py-1.5 rounded-lg
                transition-all duration-150"
            >
              {item.label}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}