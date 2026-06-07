import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import PersonalLoanCalculatorClient from "./PersonalLoanCalculatorClient";
export const metadata: Metadata = seoMetadata as Metadata;
export default function Page() { return <PersonalLoanCalculatorClient />; }
