import Link from "next/link";

export default function ContactPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px", color: "#f4f4f5" }}>
      <div style={{ marginBottom: 48 }}>
        <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 16, color: "#f4f4f5" }}>
          Contact MoneyTool
        </h1>
        <p style={{ fontSize: 16, color: "#a1a1aa", lineHeight: 1.8 }}>
          Have a question, feedback, or need help with one of our tools? Reach out and we will respond as soon as possible.
        </p>
      </div>

      <div style={{ display: "grid", gap: 24 }}>
        <section style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 12, padding: 28 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 14, color: "#10b981" }}>
            Get in touch
          </h2>
          <p style={{ fontSize: 15, color: "#a1a1aa", lineHeight: 1.8, marginBottom: 22 }}>
            We are here to help you with any questions about MoneyTool, calculator accuracy, or your website experience. Send us a message and we will do our best to help.
          </p>
          <div style={{ display: "grid", gap: 16 }}>
            <div>
              <strong style={{ display: "block", color: "#f4f4f5", marginBottom: 8 }}>
                Email
              </strong>
              <a href="mailto:pankajbalecha50@gmail.com" style={{ color: "#10b981", textDecoration: "none", fontSize: 15 }}>
                pankajbalecha50@gmail.com
              </a>
            </div>
            <div>
              <strong style={{ display: "block", color: "#f4f4f5", marginBottom: 8 }}>
                Support
              </strong>
              <p style={{ color: "#a1a1aa", fontSize: 15, margin: 0, lineHeight: 1.8 }}>
                For feedback, corrections, or partnership requests, simply email us and include the page you are referencing.
              </p>
            </div>
          </div>
        </section>

        <section style={{ background: "#111113", border: "1px solid #27272a", borderRadius: 12, padding: 28 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 14, color: "#f4f4f5" }}>
            Help with MoneyTool
          </h2>
          <p style={{ fontSize: 15, color: "#a1a1aa", lineHeight: 1.8, marginBottom: 16 }}>
            Need help finding the right calculator? Our site is organized by financial need, so you can go straight to EMI, SIP, GST, salary, or tax tools.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {[
              { label: "Loan EMI & Interest", href: "/emi-calculator" },
              { label: "Investment Planning", href: "/sip-calculator" },
              { label: "Business Tools", href: "/business-tools" },
              { label: "Income Tax & Salary", href: "/income-tax-calculator" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "block",
                  background: "#18181b",
                  border: "1px solid #27272a",
                  borderRadius: 10,
                  padding: "18px 16px",
                  textDecoration: "none",
                  color: "#a1a1aa",
                  fontSize: 14,
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </div>

      <div style={{ marginTop: 40, fontSize: 14, color: "#a1a1aa", lineHeight: 1.8 }}>
        <p>
          MoneyTool is built for Indians who want fast and accurate financial calculations without the complexity. Contact us if you have ideas for new calculators or improvements.
        </p>
      </div>
    </main>
  );
}
