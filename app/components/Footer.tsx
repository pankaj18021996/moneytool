"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid #27272a",
      marginTop: 80,
      background: "#0a0a0a",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 40,
          marginBottom: 40,
        }}>
          <div>
            <Link href="/" style={{
              display: "flex", alignItems: "center",
              gap: 10, textDecoration: "none", marginBottom: 12,
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: 6,
                background: "#10b981", display: "flex",
                alignItems: "center", justifyContent: "center",
                fontWeight: 800, fontSize: 14, color: "#fff",
              }}>M</div>
              <span style={{ fontWeight: 700, fontSize: 16, color: "#f4f4f5" }}>
                MoneyTool
              </span>
            </Link>
            <p style={{ color: "#a1a1aa", fontSize: 13, lineHeight: 1.6, maxWidth: 260 }}>
              Smart Financial Tools. One Platform. All your financial
              calculations made simple, fast, and free.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: "#f4f4f5", marginBottom: 14 }}>
              Popular Tools
            </h4>
            {[
              { href: "/emi-calculator", label: "EMI Calculator" },
              { href: "/sip-calculator", label: "SIP Calculator" },
              { href: "/fd-calculator", label: "FD Calculator" },
              { href: "/gst-calculator", label: "GST Calculator" },
              { href: "/salary-calculator", label: "Salary Calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{
                display: "block", fontSize: 13,
                color: "#a1a1aa", marginBottom: 8,
                textDecoration: "none",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#f4f4f5")}
                onMouseLeave={e => (e.currentTarget.style.color = "#a1a1aa")}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: "#f4f4f5", marginBottom: 14 }}>
              Company
            </h4>
            {[
              { href: "/about", label: "About Us" },
              { href: "/privacy-policy", label: "Privacy Policy" },
              { href: "/privacy-policy", label: "Terms of Service" },
              { href: "/privacy-policy", label: "Disclaimer" },
            ].map((l) => (
              <Link key={l.label} href={l.href} style={{
                display: "block", fontSize: 13,
                color: "#a1a1aa", marginBottom: 8,
                textDecoration: "none",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#f4f4f5")}
                onMouseLeave={e => (e.currentTarget.style.color = "#a1a1aa")}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: "#f4f4f5", marginBottom: 14 }}>
              Contact
            </h4>
            <p style={{ fontSize: 13, color: "#a1a1aa", marginBottom: 8 }}>
              contact@moneytool.in
            </p>
            <p style={{ fontSize: 13, color: "#a1a1aa" }}>
              Made with ❤️ for India
            </p>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid #27272a",
          paddingTop: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>
            © 2026 MoneyTool. All rights reserved.
          </span>
          <span style={{ fontSize: 13, color: "#a1a1aa" }}>
            Made with ❤ for smart financial planning
          </span>
        </div>
      </div>
    </footer>
  );
}