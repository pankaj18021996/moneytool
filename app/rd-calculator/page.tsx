import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import RdCalculatorClient from "./RdCalculatorClient";
export const metadata: Metadata = seoMetadata as Metadata;
export default function Page() { return <RdCalculatorClient />; }
