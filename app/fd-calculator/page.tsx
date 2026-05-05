import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import FDCalculatorClient from "./FDCalculatorClient";

export const metadata: Metadata = seoMetadata as Metadata;

export default function FDCalculatorPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-medium mb-1">FD Calculator</h1>
      <p className="text-gray-500 text-sm mb-8">
        Calculate your Fixed Deposit maturity amount instantly
      </p>

      <FDCalculatorClient />

    </main>
  );
}