import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import PpfCalculatorClient from "./PpfCalculatorClient";
export const metadata: Metadata = seoMetadata as Metadata;
export default function Page() { return <PpfCalculatorClient />; }
