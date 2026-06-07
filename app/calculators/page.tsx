import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import CalculatorsClient from "./CalculatorsClient";
export const metadata: Metadata = seoMetadata as Metadata;
export default function Page() { return <CalculatorsClient />; }
