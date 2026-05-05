import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import SIPCalculatorClient from "./SIPCalculatorClient";

export const metadata: Metadata = seoMetadata as Metadata;

export default function SIPCalculatorPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-medium mb-1">SIP Calculator</h1>
      <p className="text-gray-500 text-sm mb-8">
        Calculate your mutual fund SIP returns instantly
      </p>

      <SIPCalculatorClient />

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mt-2">
        <p className="text-sm font-medium text-blue-800 mb-1">
          Ready to start your SIP investment?
        </p>
        <p className="text-xs text-blue-700 mb-4">
          Open a FREE Zerodha demat account and start
          your SIP journey today
        </p>
        <a
          href="https://zerodha.com/open-account?c=FV4724"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white
            text-xs px-4 py-2 rounded-lg hover:bg-blue-700
            transition-colors"
        >
          Open Zerodha Account →
        </a>
      </div>

    </main>
  );
}