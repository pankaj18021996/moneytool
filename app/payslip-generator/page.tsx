import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import PayslipGeneratorClient from "./PayslipGeneratorClient";
export const metadata: Metadata = seoMetadata as Metadata;
export default function Page() { return <PayslipGeneratorClient />; }
