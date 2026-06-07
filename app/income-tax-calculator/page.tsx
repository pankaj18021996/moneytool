import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import IncomeTaxCalculatorClient from "./IncomeTaxCalculatorClient";
export const metadata: Metadata = seoMetadata as Metadata;
export default function Page() { return <IncomeTaxCalculatorClient />; }
