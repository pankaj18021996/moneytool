import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import SwpCalculatorClient from "./SwpCalculatorClient";
export const metadata: Metadata = seoMetadata as Metadata;
export default function Page() { return <SwpCalculatorClient />; }
