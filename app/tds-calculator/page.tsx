import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import TdsCalculatorClient from "./TdsCalculatorClient";
export const metadata: Metadata = seoMetadata as Metadata;
export default function Page() { return <TdsCalculatorClient />; }
