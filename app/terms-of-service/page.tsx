import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | MoneyTool",
  description: "Read MoneyTool's terms of service and conditions for using our financial calculator tools.",
  alternates: {
    canonical: "https://www.moneytool.in/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | MoneyTool",
    description: "MoneyTool terms of service and conditions of use",
    type: "website",
    url: "https://www.moneytool.in/terms-of-service",
  },
};

export default function TermsOfService() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-medium mb-2">Terms of Service</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: May 2026</p>

      <div className="space-y-8">
        <section>
          <h2 className="text-lg font-medium mb-3">1. Acceptance of Terms</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            By accessing and using the MoneyTool website (moneytool.in), you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">2. Use License</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            Permission is granted to temporarily download one copy of the materials (information or software) on MoneyTool's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="text-gray-600 text-sm leading-relaxed list-disc pl-5 space-y-2">
            <li>Modifying or copying the materials</li>
            <li>Using the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
            <li>Attempting to decompile or reverse engineer any software contained on the website</li>
            <li>Removing any copyright or other proprietary notations from the materials</li>
            <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">3. Disclaimer</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            The materials on MoneyTool's website are provided on an 'as is' basis. MoneyTool makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">4. Limitations</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            In no event shall MoneyTool or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on MoneyTool's website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">5. Accuracy of Materials</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            The materials appearing on MoneyTool's website could include technical, typographical, or photographic errors. MoneyTool does not warrant that any of the materials on its website are accurate, complete, or current. MoneyTool may make changes to the materials contained on its website at any time without notice.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">6. Links</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            MoneyTool has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by MoneyTool of the site. Use of any such linked website is at the user's own risk.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">7. Modifications</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            MoneyTool may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">8. Governing Law</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">9. Financial Disclaimer</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            The calculators and information provided on MoneyTool are for educational and informational purposes only. They are not financial advice. Before making any financial decisions, please consult with a qualified financial advisor. Actual results may vary based on individual circumstances, market conditions, and bank policies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">10. Contact Us</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            If you have any questions about these Terms of Service, please contact us at:
            <span className="text-green-600 ml-1">contact@moneytool.in</span>
          </p>
        </section>
      </div>
    </main>
  );
}
