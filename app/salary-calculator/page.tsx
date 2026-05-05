import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import SalaryCalculatorClient from "./SalaryCalculatorClient";

export const metadata: Metadata = seoMetadata as Metadata;

export default function SalaryCalculatorPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-medium mb-1">Salary Calculator</h1>
      <p className="text-gray-500 text-sm mb-8">
        Calculate your in-hand salary from CTC — fully customizable
      </p>

      <SalaryCalculatorClient />

    </main>
  );
}