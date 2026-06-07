import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import HomeLoanCalculatorClient from "./HomeLoanCalculatorClient";
export const metadata: Metadata = seoMetadata as Metadata;
export default function Page() { return <HomeLoanCalculatorClient />; }
