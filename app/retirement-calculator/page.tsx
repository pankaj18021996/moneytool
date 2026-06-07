import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import RetirementCalculatorClient from "./RetirementCalculatorClient";
export const metadata: Metadata = seoMetadata as Metadata;
export default function Page() { return <RetirementCalculatorClient />; }
