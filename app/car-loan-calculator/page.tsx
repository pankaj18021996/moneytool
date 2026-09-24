import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import CarLoanCalculatorClient from "./CarLoanCalculatorClient";

export const metadata: Metadata = seoMetadata as Metadata;

export default function CarLoanCalculatorPage() {
  return <CarLoanCalculatorClient />;
}
