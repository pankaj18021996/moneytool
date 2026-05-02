export const metadata = {
  title: "About Us - MoneyTool",
  description: "About MoneyTool - Free Financial Calculators for India",
};

export default function About() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-medium mb-2">About MoneyTool</h1>
      <p className="text-gray-500 text-sm mb-8">
        Free financial tools built for India
      </p>

      <div className="space-y-8">

        <section>
          <h2 className="text-lg font-medium mb-3">Who We Are</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            MoneyTool is a free online platform providing simple and
            accurate financial calculators for Indians. We believe
            everyone deserves access to smart financial tools without
            any cost or signup required.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">Our Mission</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our mission is to make financial planning simple and
            accessible for every Indian. Whether you are planning
            a home loan, calculating SIP returns, or managing your
            taxes — MoneyTool has you covered.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">Our Tools</h2>
          <div className="space-y-3">
            <a href="/emi-calculator"
              className="block border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all">
              <p className="font-medium text-sm mb-1">EMI Calculator</p>
              <p className="text-gray-500 text-xs">Calculate monthly installments for any loan instantly</p>
            </a>
            <a href="/sip-calculator"
              className="block border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all">
              <p className="font-medium text-sm mb-1">SIP Calculator</p>
              <p className="text-gray-500 text-xs">Plan your mutual fund investments and see returns</p>
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">Why MoneyTool?</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-2xl mb-2">⚡</div>
              <p className="font-medium text-sm mb-1">Fast</p>
              <p className="text-gray-500 text-xs">Instant results</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-2xl mb-2">🆓</div>
              <p className="font-medium text-sm mb-1">Free</p>
              <p className="text-gray-500 text-xs">Always 100% free</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-2xl mb-2">🔒</div>
              <p className="font-medium text-sm mb-1">Safe</p>
              <p className="text-gray-500 text-xs">No data stored</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-2xl mb-2">📱</div>
              <p className="font-medium text-sm mb-1">Mobile</p>
              <p className="text-gray-500 text-xs">Works on all devices</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-medium mb-3">Contact Us</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Have suggestions or feedback? Reach us at:
            <span className="text-green-600 ml-1">
              contact@moneytool.in
            </span>
          </p>
        </section>

      </div>
    </main>
  );
}