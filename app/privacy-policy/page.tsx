export const metadata = {
  title: "Privacy Policy - MoneyTool",
  description: "Privacy Policy for MoneyTool - Free Financial Calculators",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-medium mb-2">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-8">
        Last updated: May 2026
      </p>

      <div className="space-y-8">

        <section>
          <h2 className="text-lg font-medium mb-3">1. Introduction</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Welcome to MoneyTool (moneytool.in). We are committed to
            protecting your privacy. This Privacy Policy explains how
            we collect, use, and protect your information when you
            visit our website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">
            2. Information We Collect
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            We collect the following types of information:
          </p>
          <ul className="text-gray-600 text-sm leading-relaxed
            list-disc pl-5 space-y-2">
            <li>Usage data (pages visited, time spent on site)</li>
            <li>Device information (browser type, operating system)</li>
            <li>IP address for analytics purposes</li>
            <li>Cookies for improving user experience</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">
            3. How We Use Your Information
          </h2>
          <ul className="text-gray-600 text-sm leading-relaxed
            list-disc pl-5 space-y-2">
            <li>To improve our website and tools</li>
            <li>To analyze website traffic and usage patterns</li>
            <li>To show relevant advertisements via Google AdSense</li>
            <li>To provide better user experience</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">4. Google AdSense</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            We use Google AdSense to display advertisements on our
            website. Google AdSense uses cookies to serve ads based
            on your visits to this and other websites. You may opt
            out of personalized advertising by visiting
            Google Ads Settings.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">5. Cookies</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            We use cookies to enhance your experience on our website.
            You can choose to disable cookies through your browser
            settings. However, this may affect the functionality
            of our website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">
            6. Third Party Links
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our website may contain links to third party websites.
            We are not responsible for the privacy practices of
            these websites. We encourage you to read their
            privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">
            7. Data Security
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            We take appropriate security measures to protect your
            information. However, no method of transmission over
            the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">8. Contact Us</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            If you have any questions about this Privacy Policy,
            please contact us at:
            <span className="text-green-600 ml-1">
              contact@moneytool.in
            </span>
          </p>
        </section>

      </div>
    </main>
  );
}