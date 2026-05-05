import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import GSTCalculatorClient from "./GSTCalculatorClient";

export const metadata: Metadata = seoMetadata as Metadata;

export default function GSTCalculatorPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-medium mb-1">GST Calculator</h1>
      <p className="text-gray-500 text-sm mb-8">
        Calculate GST amount instantly for any product or service
      </p>

      <GSTCalculatorClient />
    </main>
  );
}