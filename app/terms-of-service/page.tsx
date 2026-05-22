import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | MoneyTool",
  description:
    "Read MoneyTool's terms of service. Understand our usage policies, user rights, limitations, and disclaimers for our financial calculator tools.",
  alternates: {
    canonical: "https://www.moneytool.in/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | MoneyTool",
    description: "MoneyTool terms of service and usage policies",
    type: "website",
    url: "https://www.moneytool.in/terms-of-service",
  },
};

export default function TermsOfService() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "60px 24px",
        color: "#f4f4f5",
        lineHeight: "1.7",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "800",
          marginBottom: "24px",
          color: "#f4f4f5",
        }}
      >
        Terms of Service
      </h1>
      <p style={{ color: "#a1a1aa", marginBottom: "32px", fontSize: "14px" }}>
        Last Updated: May 2026
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <section>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "12px",
              color: "#10b981",
            }}
          >
            1. Acceptance of Terms
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: "14px" }}>
            By accessing and using MoneyTool ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to any part of these terms, you may not use the Service.
          </p>
        </section>

        <section>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "12px",
              color: "#10b981",
            }}
          >
            2. Description of Service
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: "14px" }}>
            MoneyTool provides free financial calculators and tools including EMI calculators, SIP calculators, tax calculators, salary calculators, and other financial planning tools. The Service is intended for educational and informational purposes only.
          </p>
        </section>

        <section>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "12px",
              color: "#10b981",
            }}
          >
            3. No Financial Advice
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: "14px" }}>
            The information and calculations provided by MoneyTool are for educational purposes only and should not be considered as financial, investment, or legal advice. Please consult with a qualified financial advisor before making any financial decisions.
          </p>
        </section>

        <section>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "12px",
              color: "#10b981",
            }}
          >
            4. Limitation of Liability
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: "14px" }}>
            MoneyTool and its creators are not responsible for any financial losses, errors in calculations, or decisions made based on the information provided. Use the tools at your own risk. Always verify calculations with official sources or financial professionals.
          </p>
        </section>

        <section>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "12px",
              color: "#10b981",
            }}
          >
            5. User Conduct
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: "14px" }}>
            You agree not to:
            <ul style={{ marginTop: "12px", paddingLeft: "24px", color: "#a1a1aa" }}>
              <li>Use the Service for any illegal purposes</li>
              <li>Attempt to hack, modify, or disrupt the Service</li>
              <li>Engage in any form of unauthorized access</li>
              <li>Spam or abuse the Service</li>
            </ul>
          </p>
        </section>

        <section>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "12px",
              color: "#10b981",
            }}
          >
            6. Accuracy of Information
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: "14px" }}>
            While we strive to maintain accuracy, MoneyTool makes no warranties about the accuracy, completeness, or timeliness of the calculations. Interest rates, tax rules, and financial regulations change frequently and may not be reflected in real-time.
          </p>
        </section>

        <section>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "12px",
              color: "#10b981",
            }}
          >
            7. Changes to Terms
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: "14px" }}>
            MoneyTool reserves the right to modify these Terms of Service at any time. Continued use of the Service constitutes your acceptance of any changes.
          </p>
        </section>

        <section>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "12px",
              color: "#10b981",
            }}
          >
            8. Contact Us
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: "14px" }}>
            For questions about these Terms of Service, please contact us at contact@moneytool.in
          </p>
        </section>
      </div>
    </main>
  );
}
