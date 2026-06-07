import type { Metadata } from "next";
import { metadata as seoMetadata } from "./metadata";
import InvoiceBuilderClient from "./InvoiceBuilderClient";
export const metadata: Metadata = seoMetadata as Metadata;
export default function Page() { return <InvoiceBuilderClient />; }
