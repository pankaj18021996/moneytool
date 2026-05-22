import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About MoneyTool - Free Financial Calculators for India",
  description:
    "Learn about MoneyTool's mission to provide accurate, free financial calculators for Indian users. Our team is committed to making financial planning accessible and simple.",
  alternates: {
    canonical: "https://www.moneytool.in/about",
  },
  openGraph: {
    title: "About MoneyTool - Trusted Financial Tools for India",
    description: "MoneyTool provides free, accurate financial calculators built for Indian users.",
    type: "website",
    url: "https://www.moneytool.in/about",
  },
};

export default function About() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "60px 24px",
        color: "#f4f4f5",
      }}
    >
      <div style={{ marginBottom: "48px" }}>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "800",
            marginBottom: "16px",
            color: "#f4f4f5",
          }}
        >
          About MoneyTool
        </h1>
        <p style={{ fontSize: "16px", color: "#a1a1aa", lineHeight: "1.6" }}>
          Free financial tools built by Indians, for Indians
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
        <section style={{ borderBottom: "1px solid #27272a", paddingBottom: "32px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "16px", color: "#10b981" }}>
            Our Mission
          </h2>
          <p style={{ fontSize: "15px", color: "#a1a1aa", lineHeight: "1.8" }}>
            MoneyTool is committed to democratizing financial planning for every Indian. We believe that access to accurate financial calculators should never be behind a paywall or require complex registration. Our mission is to empower individuals and small business owners with free, accurate, and easy-to-use financial tools.
          </p>
        </section>

        <section style={{ borderBottom: "1px solid #27272a", paddingBottom: "32px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "16px", color: "#10b981" }}>
            Why We Built MoneyTool
          </h2>
          <p style={{ fontSize: "15px", color: "#a1a1aa", lineHeight: "1.8", marginBottom: "16px" }}>
            MoneyTool was created after recognizing a gap in the Indian fintech landscape. While premium financial advisory services exist, most individuals needed quick, reliable calculators for:
          </p>
          <ul style={{ fontSize: "15px", color: "#a1a1aa", lineHeight: "1.8", paddingLeft: "24px" }}>
            <li>💰 Calculating EMI before applying for loans</li>
            <li>📈 Planning SIP investments and returns</li>
            <li>🏛️ Understanding income tax liability</li>
            <li>💼 Creating professional invoices for small businesses</li>
            <li>🧾 Quick salary breakdowns and deductions</li>
          </ul>
        </section>

        <section style={{ borderBottom: "1px solid #27272a", paddingBottom: "32px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "16px", color: "#10b981" }}>
            Our Core Values
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginTop: "16px" }}>
            <div style={{ background: "#111113", padding: "20px", borderRadius: "8px", border: "1px solid #27272a" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px", color: "#10b981" }}>🎯 Accuracy</h3>
              <p style={{ fontSize: "14px", color: "#a1a1aa" }}>
                All calculations are based on industry-standard financial formulas and updated regularly to reflect current rules.
              </p>
            </div>
            <div style={{ background: "#111113", padding: "20px", borderRadius: "8px", border: "1px solid #27272a" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px", color: "#10b981" }}>🆓 Always Free</h3>
              <p style={{ fontSize: "14px", color: "#a1a1aa" }}>
                No hidden charges, no premium plans, no advertising spam. Financial tools should be free.
              </p>
            </div>
            <div style={{ background: "#111113", padding: "20px", borderRadius: "8px", border: "1px solid #27272a" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px", color: "#10b981" }}>🔒 Privacy First</h3>
              <p style={{ fontSize: "14px", color: "#a1a1aa" }}>
                We don't collect, store, or sell your data. All calculations happen on your device.
              </p>
            </div>
            <div style={{ background: "#111113", padding: "20px", borderRadius: "8px", border: "1px solid #27272a" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px", color: "#10b981" }}>⚡ Fast & Simple</h3>
              <p style={{ fontSize: "14px", color: "#a1a1aa" }}>
                No complex forms or unnecessary steps. Get instant results in seconds.
              </p>
            </div>
          </div>
        </section>

        <section style={{ borderBottom: "1px solid #27272a", paddingBottom: "32px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "16px", color: "#10b981" }}>
            What We Offer
          </h2>
          <div style={{ marginTop: "16px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "12px", color: "#f4f4f5" }}>
              📈 Investment Calculators
            </h3>
            <p style={{ fontSize: "14px", color: "#a1a1aa", marginBottom: "20px" }}>
              SIP Calculator, PPF Calculator, FD Calculator, RD Calculator, SWP Calculator, and Retirement Planner — help you plan your investments accurately.
            </p>

            <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "12px", color: "#f4f4f5" }}>
              💳 Loan Calculators
            </h3>
            <p style={{ fontSize: "14px", color: "#a1a1aa", marginBottom: "20px" }}>
              EMI Calculator, Home Loan Calculator, Car Loan Calculator — understand your monthly obligations before committing.
            </p>

            <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "12px", color: "#f4f4f5" }}>
              🏛️ Tax & Salary Tools
            </h3>
            <p style={{ fontSize: "14px", color: "#a1a1aa", marginBottom: "20px" }}>
              Income Tax Calculator, Salary Calculator, GST Calculator, HRA Calculator, TDS Calculator — manage your taxes with confidence.
            </p>

            <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "12px", color: "#f4f4f5" }}>
              📄 Business Tools
            </h3>
            <p style={{ fontSize: "14px", color: "#a1a1aa" }}>
              Invoice Builder, Payslip Generator — create professional documents instantly.
            </p>
          </div>
        </section>

        <section style={{ borderBottom: "1px solid #27272a", paddingBottom: "32px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "16px", color: "#10b981" }}>
            Accuracy & Reliability
          </h2>
          <p style={{ fontSize: "15px", color: "#a1a1aa", lineHeight: "1.8", marginBottom: "16px" }}>
            Our calculators are built using:
          </p>
          <ul style={{ fontSize: "15px", color: "#a1a1aa", lineHeight: "1.8", paddingLeft: "24px" }}>
            <li>✅ Standard financial formulas used by banks and financial institutions</li>
            <li>✅ Current tax rates and rules for FY 2025-26</li>
            <li>✅ Industry-standard interest calculation methods</li>
            <li>✅ Compliance with RBI and SEBI guidelines</li>
          </ul>
          <p style={{ fontSize: "15px", color: "#a1a1aa", lineHeight: "1.8", marginTop: "16px" }}>
            <strong>Important Disclaimer:</strong> While our calculators are accurate, they provide estimates based on standard scenarios. Actual figures may vary based on bank policies, individual circumstances, and market conditions. Always verify with your bank or financial advisor.
          </p>
        </section>

        <section style={{ borderBottom: "1px solid #27272a", paddingBottom: "32px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "16px", color: "#10b981" }}>
            Who We Help
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginTop: "16px" }}>
            <div>
              <h3 style={{ fontSize: "15px", fontWeight: "600", marginBottom: "8px", color: "#f4f4f5" }}>👨‍💼 Salaried Professionals</h3>
              <p style={{ fontSize: "14px", color: "#a1a1aa" }}>
                Calculate in-hand salary, tax liability, HRA exemptions, and investment returns.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "15px", fontWeight: "600", marginBottom: "8px", color: "#f4f4f5" }}>👩‍💼 Entrepreneurs & Freelancers</h3>
              <p style={{ fontSize: "14px", color: "#a1a1aa" }}>
                Create invoices, manage GST, and plan taxes for your business.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "15px", fontWeight: "600", marginBottom: "8px", color: "#f4f4f5" }}>🏡 Home Buyers</h3>
              <p style={{ fontSize: "14px", color: "#a1a1aa" }}>
                Calculate home loan EMI, affordability, and tax benefits.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "15px", fontWeight: "600", marginBottom: "8px", color: "#f4f4f5" }}>📊 Investors</h3>
              <p style={{ fontSize: "14px", color: "#a1a1aa" }}>
                Plan SIPs, PPF investments, and retirement corpus.
              </p>
            </div>
          </div>
        </section>

        <section style={{ borderBottom: "1px solid #27272a", paddingBottom: "32px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "16px", color: "#10b981" }}>
            Our Commitment to You
          </h2>
          <ul style={{ fontSize: "15px", color: "#a1a1aa", lineHeight: "1.8", paddingLeft: "24px" }}>
            <li>✅ We will always keep our tools 100% free</li>
            <li>✅ We respect your privacy — no data collection or tracking</li>
            <li>✅ We update our calculators regularly to reflect current rules</li>
            <li>✅ We provide clear disclaimers and encourage professional advice for important decisions</li>
            <li>✅ We listen to user feedback and continuously improve our tools</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "16px", color: "#10b981" }}>
            Get in Touch
          </h2>
          <p style={{ fontSize: "15px", color: "#a1a1aa", lineHeight: "1.8", marginBottom: "16px" }}>
            Have suggestions, feedback, or found an error? We'd love to hear from you!
          </p>
          <div style={{
            background: "#111113",
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #27272a",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px"
          }}>
            <div>
              <p style={{ fontSize: "14px", color: "#a1a1aa", marginBottom: "4px" }}>Email us at:</p>
              <p style={{ fontSize: "15px", color: "#10b981", fontWeight: "600" }}>contact@moneytool.in</p>
            </div>
            <a
              href="mailto:contact@moneytool.in"
              style={{
                background: "#10b981",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600"
              }}
            >
              Send Message
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}