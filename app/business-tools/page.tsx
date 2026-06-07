import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import BusinessToolsClient from "./BusinessToolsClient";
export const metadata: Metadata = seoMetadata as Metadata;
export default function Page() { return <BusinessToolsClient />; }
