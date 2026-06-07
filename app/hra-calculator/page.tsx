import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import HraCalculatorClient from "./HraCalculatorClient";
export const metadata: Metadata = seoMetadata as Metadata;
export default function Page() { return <HraCalculatorClient />; }
